import { useState, useEffect, useCallback, useRef } from 'react'
import {
  isPuterAvailable,
  isSignedIn,
  getUser,
  signIn,
  signOut,
  loadFromPuter,
  applySnapshotToLocal,
  smartSync,
} from '../lib/puterSync.js'

const UP_TO_DATE = '已是最新狀態 Up to date'

export function usePuterSync() {
  const [available] = useState(() => isPuterAvailable())
  const [signedIn, setSignedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [syncing, setSyncing] = useState(false)
  const [lastSync, setLastSync] = useState(null)
  const [error, setError] = useState(null)
  // Only run the automatic sync once per page load (also guards StrictMode).
  const autoSyncStarted = useRef(false)

  const checkAuth = useCallback(async () => {
    try {
      const signed = await isSignedIn()
      setSignedIn(signed)
      if (signed) {
        const u = await getUser()
        setUser(u)
        return true
      }
      setUser(null)
      return false
    } catch (err) {
      console.error(err)
      return false
    }
  }, [])

  // silent = background sync: no "up to date" banner, errors only logged.
  const handleSync = useCallback(
    async ({ silent = false } = {}) => {
      if (!available) return null
      if (!(await isSignedIn())) return null
      setSyncing(true)
      if (!silent) setError(null)
      try {
        const result = await smartSync()
        setLastSync(Date.now())
        if (!silent && result.action === 'none') {
          setError(UP_TO_DATE)
          setTimeout(() => setError((e) => (e === UP_TO_DATE ? null : e)), 2000)
        }
        return result
      } catch (err) {
        if (silent) console.error('Auto sync failed:', err)
        else setError(err.message)
        return null
      } finally {
        setSyncing(false)
      }
    },
    [available],
  )

  // On load: check auth, then auto-sync if already signed in (e.g. after refresh).
  useEffect(() => {
    if (!available) return undefined
    let cancelled = false
    ;(async () => {
      const signed = await checkAuth()
      if (!signed || cancelled) return
      if (autoSyncStarted.current) return
      autoSyncStarted.current = true
      await handleSync({ silent: true })
    })()
    return () => {
      cancelled = true
    }
  }, [available, checkAuth, handleSync])

  const handleSignIn = useCallback(async () => {
    if (!available) return
    try {
      setError(null)
      await signIn()
      const signed = await checkAuth()
      if (!signed) return
      // First sync right after signing in.
      autoSyncStarted.current = true
      await handleSync({ silent: false })
    } catch (err) {
      setError(err.message)
    }
  }, [available, checkAuth, handleSync])

  const handleSignOut = useCallback(async () => {
    try {
      await signOut()
      setSignedIn(false)
      setUser(null)
      autoSyncStarted.current = false
    } catch (err) {
      setError(err.message)
    }
  }, [])

  const handleLoadFromCloud = useCallback(async () => {
    if (!available || !signedIn) return
    setSyncing(true)
    setError(null)
    try {
      const cloudSnapshot = await loadFromPuter()
      if (!cloudSnapshot) {
        setError('No data in cloud')
        return
      }
      // Apply to local, preserving local as new profiles
      const ok = applySnapshotToLocal(cloudSnapshot, true)
      if (ok) {
        setLastSync(Date.now())
        // Reload the page to refresh state
        window.location.reload()
      } else {
        setError('Failed to apply data')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setSyncing(false)
    }
  }, [available, signedIn])

  // Button handler: always a user-initiated (non-silent) sync.
  const handleManualSync = useCallback(() => handleSync({ silent: false }), [handleSync])

  return {
    available,
    signedIn,
    user,
    syncing,
    lastSync,
    error,
    signIn: handleSignIn,
    signOut: handleSignOut,
    sync: handleManualSync,
    loadFromCloud: handleLoadFromCloud,
  }
}
