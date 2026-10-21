// Orchestration: sign-in, debounced push, pull-and-merge, reconnect handling.
//
// Local-first: the app never waits on the network to work, and every sync
// pulls before it pushes so a device that has been offline cannot clobber
// newer progress written elsewhere.

import { useCallback, useEffect, useRef, useState } from 'react'
import { GOOGLE_ENABLED } from '../config.js'
import {
  AuthError,
  getAuth,
  isSignedIn,
  signIn as authSignIn,
  signOut as authSignOut,
} from './auth.js'
import { SyncError, downloadBackup, findBackup, uploadBackup } from './drive.js'

const DEBOUNCE_MS = 4000
const LAST_SYNCED_KEY = 'kinderchi-sync-last'

/**
 * Content fingerprint that deliberately omits `updatedAt` and `currentId`:
 * those change without the actual progress changing, and including them would
 * make every sync schedule another sync forever.
 */
function fingerprint(snapshot) {
  return JSON.stringify([snapshot.profiles, snapshot.progress])
}

export function useSync({ exportSnapshot, mergeSnapshot }) {
  const [user, setUser] = useState(() => getAuth())
  const [status, setStatus] = useState(() => (isSignedIn() ? 'idle' : 'signed_out'))
  const [error, setError] = useState(null)
  const [lastSyncedAt, setLastSyncedAt] = useState(() => {
    try {
      return Number(window.localStorage.getItem(LAST_SYNCED_KEY)) || null
    } catch {
      return null
    }
  })

  const mountedRef = useRef(true)
  const busyRef = useRef(false)
  const queuedRef = useRef(false)
  const timerRef = useRef(null)
  const lastPushedRef = useRef(null)
  const runSyncRef = useRef(() => {})

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
      clearTimeout(timerRef.current)
    }
  }, [])

  /** Record a successful sync in state and across reloads. */
  const markSynced = useCallback(() => {
    const now = Date.now()
    if (mountedRef.current) setLastSyncedAt(now)
    try {
      window.localStorage.setItem(LAST_SYNCED_KEY, String(now))
    } catch {
      // ignore
    }
  }, [])

  const runSync = useCallback(
    async ({ flush = false } = {}) => {
      if (!isSignedIn()) return
      if (!navigator.onLine) return

      if (busyRef.current) {
        queuedRef.current = true
        return
      }
      busyRef.current = true
      if (mountedRef.current) {
        setStatus('syncing')
        setError(null)
      }

      try {
        const file = await findBackup()

        if (file) {
          // Always merge the cloud's version in before we write — this is what
          // makes two offline devices reconcile instead of overwriting.
          const remote = await downloadBackup(file.id)
          mergeSnapshot(remote)
        }

        const snapshot = exportSnapshot()
        const key = fingerprint(snapshot)
        if (!file || key !== lastPushedRef.current || flush) {
          await uploadBackup(snapshot, file?.id, { keepalive: flush })
          lastPushedRef.current = key
        }

        if (mountedRef.current) {
          setStatus('synced')
          markSynced()
          setError(null)
        }
      } catch (err) {
        if (mountedRef.current) {
          setStatus('error')
          setError(err instanceof AuthError || err instanceof SyncError ? err.code : 'request_failed')
        }
      } finally {
        busyRef.current = false
        if (queuedRef.current) {
          queuedRef.current = false
          setTimeout(() => runSyncRef.current(), 0)
        }
      }
    },
    [exportSnapshot, mergeSnapshot, markSynced],
  )

  useEffect(() => {
    runSyncRef.current = runSync
  })

  const schedule = useCallback(() => {
    if (!isSignedIn()) return
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      timerRef.current = null
      runSyncRef.current()
    }, DEBOUNCE_MS)
  }, [])

  const syncNow = useCallback(() => {
    clearTimeout(timerRef.current)
    timerRef.current = null
    return runSyncRef.current()
  }, [])

  /** Pull only — merge the cloud copy in without pushing anything back. */
  const restoreFromCloud = useCallback(async () => {
    if (!isSignedIn()) return false
    if (!navigator.onLine) return false
    if (busyRef.current) return false
    busyRef.current = true
    if (mountedRef.current) {
      setStatus('syncing')
      setError(null)
    }
    try {
      const file = await findBackup()
      if (!file) {
        if (mountedRef.current) {
          setStatus('synced')
          setError('empty')
        }
        return false
      }
      const remote = await downloadBackup(file.id)
      const changed = mergeSnapshot(remote)
      if (mountedRef.current) {
        setStatus('synced')
        markSynced()
        setError(changed ? null : 'empty')
      }
      return changed
    } catch (err) {
      if (mountedRef.current) {
        setStatus('error')
        setError(err instanceof SyncError ? err.code : 'request_failed')
      }
      return false
    } finally {
      busyRef.current = false
    }
  }, [mergeSnapshot, markSynced])

  const signIn = useCallback(async () => {
    if (mountedRef.current) {
      setStatus('connecting')
      setError(null)
    }
    try {
      const auth = await authSignIn()
      lastPushedRef.current = null
      setUser(auth)
      await runSyncRef.current()
      return true
    } catch (err) {
      if (mountedRef.current) {
        setStatus('signed_out')
        setError(err instanceof AuthError ? err.code : 'signin_failed')
      }
      return false
    }
  }, [])

  const signOut = useCallback(async () => {
    clearTimeout(timerRef.current)
    timerRef.current = null
    await authSignOut()
    lastPushedRef.current = null
    setUser(null)
    if (mountedRef.current) setStatus('signed_out')
  }, [])

  // Boot: pull once so another device's progress is visible immediately.
  useEffect(() => {
    if (!isSignedIn()) return undefined
    const t = setTimeout(() => runSyncRef.current(), 600)
    return () => clearTimeout(t)
  }, [])

  // Reconnect and tab-returns both catch up with the cloud.
  useEffect(() => {
    const onOnline = () => runSyncRef.current()
    const onVisible = () => {
      if (document.visibilityState === 'visible') runSyncRef.current()
    }
    window.addEventListener('online', onOnline)
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      window.removeEventListener('online', onOnline)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])

  // Last chance to flush a pending debounced push before the tab goes away.
  useEffect(() => {
    const flush = () => {
      if (timerRef.current === null) return
      clearTimeout(timerRef.current)
      timerRef.current = null
      void runSyncRef.current({ flush: true })
    }
    window.addEventListener('pagehide', flush)
    return () => window.removeEventListener('pagehide', flush)
  }, [])

  return {
    available: GOOGLE_ENABLED,
    signedIn: Boolean(user),
    user,
    status,
    error,
    lastSyncedAt,
    signIn,
    signOut,
    syncNow,
    restoreFromCloud,
    schedule,
  }
}
