import { useState, useEffect, useCallback } from 'react'
import {
  isPuterAvailable,
  isSignedIn,
  getUser,
  signIn,
  signOut,
  loadFromPuter,
  saveToPuter,
  createSnapshot,
  mergeSnapshotsForUpload,
  applySnapshotToLocal,
} from '../lib/puterSync.js'

export function usePuterSync() {
  const [available] = useState(() => isPuterAvailable())
  const [signedIn, setSignedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [syncing, setSyncing] = useState(false)
  const [lastSync, setLastSync] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!available) return
    checkAuth()
  }, [available])

  const checkAuth = async () => {
    try {
      const signed = await isSignedIn()
      setSignedIn(signed)
      if (signed) {
        const u = await getUser()
        setUser(u)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleSignIn = useCallback(async () => {
    if (!available) return
    try {
      setError(null)
      await signIn()
      await checkAuth()
      // After sign in, sync
      await handleSync()
    } catch (err) {
      setError(err.message)
    }
  }, [available])

  const handleSignOut = useCallback(async () => {
    try {
      await signOut()
      setSignedIn(false)
      setUser(null)
    } catch (err) {
      setError(err.message)
    }
  }, [])

  const handleSync = useCallback(async () => {
    if (!available || !signedIn) return
    setSyncing(true)
    setError(null)
    try {
      // Get local snapshot
      const localSnapshot = createSnapshot()
      if (!localSnapshot) throw new Error('Failed to create local snapshot')

      // Load from cloud
      const cloudSnapshot = await loadFromPuter()

      if (cloudSnapshot) {
        // Merge: upload local as new profiles (don't overwrite cloud)
        const merged = mergeSnapshotsForUpload(localSnapshot, cloudSnapshot)
        await saveToPuter(merged)
        setLastSync(Date.now())
      } else {
        // No cloud data, just upload
        await saveToPuter(localSnapshot)
        setLastSync(Date.now())
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setSyncing(false)
    }
  }, [available, signedIn])

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

  return {
    available,
    signedIn,
    user,
    syncing,
    lastSync,
    error,
    signIn: handleSignIn,
    signOut: handleSignOut,
    sync: handleSync,
    loadFromCloud: handleLoadFromCloud,
  }
}
