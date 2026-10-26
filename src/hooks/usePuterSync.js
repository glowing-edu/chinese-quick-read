import { useState, useEffect, useCallback, useRef } from 'react'
import {
  isPuterAvailable,
  isSignedIn,
  getUser,
  signIn,
  signOut,
  smartSync,
} from '../lib/puterSync.js'

const UP_TO_DATE = '已是最新狀態 Up to date'
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export function usePuterSync() {
  const [available] = useState(() => isPuterAvailable())
  const [signedIn, setSignedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [syncing, setSyncing] = useState(false)
  const [lastSync, setLastSync] = useState(null)
  const [error, setError] = useState(null)
  // Only run the automatic sync once per page load (also guards StrictMode).
  const autoSyncStarted = useRef(false)

  // Puter's SDK can need a moment after load before isSignedIn() is accurate,
  // so retry a few times instead of trusting the first (false) answer.
  const checkAuth = useCallback(async ({ retries = 0 } = {}) => {
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const signed = await isSignedIn()
        if (signed) {
          setSignedIn(true)
          const u = await getUser()
          setUser(u)
          return true
        }
        if (attempt === retries) {
          setSignedIn(false)
          setUser(null)
          return false
        }
      } catch (err) {
        console.error(err)
      }
      await sleep(600)
    }
    return false
  }, [])

  // silent = background sync: no "up to date" banner, errors only logged.
  const handleSync = useCallback(
    async ({ silent = false, push = true, force = false } = {}) => {
      if (!available) return null
      if (!(await isSignedIn())) return null
      setSyncing(true)
      if (!silent) setError(null)
      try {
        const result = await smartSync({ push, force })
        setLastSync(Date.now())
        if (result.changed) {
          // Data changed on disk - reload so the UI shows the merged result.
          window.location.reload()
          return result
        }
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
  // Pull-only, so a refresh can never overwrite the cloud.
  useEffect(() => {
    if (!available) return undefined
    let cancelled = false
    ;(async () => {
      const signed = await checkAuth({ retries: 4 })
      if (!signed || cancelled) return
      if (autoSyncStarted.current) return
      autoSyncStarted.current = true
      await handleSync({ silent: true, push: false })
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
      autoSyncStarted.current = true
      // First sync right after signing in (merge both ways).
      await handleSync({ silent: false, push: true, force: true })
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

  // Button handler: push local progress (merged into whatever is in the cloud).
  const handleSyncNow = useCallback(
    () => handleSync({ silent: false, push: true, force: true }),
    [handleSync],
  )

  // Button handler: pull the cloud down and merge it into this device.
  const handleLoadFromCloud = useCallback(
    () => handleSync({ silent: false, push: false, force: true }),
    [handleSync],
  )

  return {
    available,
    signedIn,
    user,
    syncing,
    lastSync,
    error,
    signIn: handleSignIn,
    signOut: handleSignOut,
    sync: handleSyncNow,
    loadFromCloud: handleLoadFromCloud,
  }
}
