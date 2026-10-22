// Puter.js sync for Kinderchi
// Signs in with Puter's account system and stores progress in the user's
// own Puter space.

const PUTER_KEY = 'kinderchi-profiles-backup-v1'

export function isPuterAvailable() {
  return typeof window !== 'undefined' && typeof window.puter !== 'undefined'
}

export async function isSignedIn() {
  if (!isPuterAvailable()) return false
  try {
    return await window.puter.auth.isSignedIn()
  } catch {
    return false
  }
}

export async function getUser() {
  if (!isPuterAvailable()) return null
  try {
    return await window.puter.auth.getUser()
  } catch {
    return null
  }
}

export async function signIn() {
  if (!isPuterAvailable()) throw new Error('Puter not available')
  const res = await window.puter.auth.signIn()
  return res
}

export async function signOut() {
  if (!isPuterAvailable()) return
  try {
    await window.puter.auth.signOut()
  } catch {
    // ignore
  }
}

export async function loadFromPuter() {
  if (!isPuterAvailable()) return null
  try {
    const data = await window.puter.kv.get(PUTER_KEY)
    if (!data) return null
    if (typeof data === 'string') {
      return JSON.parse(data)
    }
    return data
  } catch (err) {
    console.error('Failed to load from Puter:', err)
    return null
  }
}

export async function saveToPuter(snapshot) {
  if (!isPuterAvailable()) throw new Error('Puter not available')
  try {
    await window.puter.kv.set(PUTER_KEY, snapshot)
    return true
  } catch (err) {
    console.error('Failed to save to Puter:', err)
    throw err
  }
}

// Create a snapshot from current localStorage state
export function createSnapshot() {
  const PROFILES_KEY = 'kinderchi-profiles-v2'
  const CURRENT_KEY = 'kinderchi-current-profile-v2'
  const PROGRESS_PREFIX = 'kinderchi-progress-v2-'
  
  try {
    const profilesRaw = localStorage.getItem(PROFILES_KEY)
    const profiles = profilesRaw ? JSON.parse(profilesRaw) : []
    const currentId = localStorage.getItem(CURRENT_KEY)
    
    const progress = {}
    for (const p of profiles) {
      const raw = localStorage.getItem(PROGRESS_PREFIX + p.id)
      if (raw) {
        progress[p.id] = JSON.parse(raw)
      }
    }
    
    return {
      schema: 1,
      app: 'kinderchi',
      updatedAt: Date.now(),
      profiles,
      progress,
      currentId,
    }
  } catch (err) {
    console.error('Failed to create snapshot:', err)
    return null
  }
}

function unionArrays(a = [], b = []) {
  const seen = new Set(a)
  const result = [...a]
  for (const item of b) {
    if (!seen.has(item)) {
      seen.add(item)
      result.push(item)
    }
  }
  return result
}

function countStars(results) {
  if (!Array.isArray(results)) return 0
  return results.filter(Boolean).length
}

// Merge progress for the same profile ID - combine progress from both devices
function mergeProgress(localProg = {}, cloudProg = {}) {
  const result = {}
  
  result.heard = unionArrays(localProg.heard, cloudProg.heard)
  result.wordsRead = unionArrays(localProg.wordsRead, cloudProg.wordsRead)
  result.sentencesRead = unionArrays(localProg.sentencesRead, cloudProg.sentencesRead)
  
  result.quizzesPlayed = Math.max(localProg.quizzesPlayed || 0, cloudProg.quizzesPlayed || 0)
  
  const localBest = localProg.quizBest
  const cloudBest = cloudProg.quizBest
  if (localBest && cloudBest) {
    if (localBest.correct > cloudBest.correct || (localBest.correct === cloudBest.correct && localBest.total >= cloudBest.total)) {
      result.quizBest = localBest
    } else {
      result.quizBest = cloudBest
    }
  } else {
    result.quizBest = localBest || cloudBest || null
  }
  
  const allChars = new Set([
    ...Object.keys(localProg.charResults || {}),
    ...Object.keys(cloudProg.charResults || {}),
  ])
  result.charResults = {}
  for (const char of allChars) {
    const localRes = localProg.charResults?.[char]
    const cloudRes = cloudProg.charResults?.[char]
    if (!Array.isArray(localRes)) {
      result.charResults[char] = Array.isArray(cloudRes) ? cloudRes : []
    } else if (!Array.isArray(cloudRes)) {
      result.charResults[char] = localRes
    } else {
      result.charResults[char] = countStars(cloudRes) > countStars(localRes) ? cloudRes : localRes
    }
  }
  
  return result
}

// Upload local progress to cloud - merge if same profile ID exists
export function mergeSnapshotsForUpload(localSnapshot, cloudSnapshot) {
  if (!cloudSnapshot) return localSnapshot
  if (!localSnapshot) return cloudSnapshot
  
  const result = {
    schema: 1,
    app: 'kinderchi',
    updatedAt: Date.now(),
    profiles: [...(cloudSnapshot.profiles || [])],
    progress: JSON.parse(JSON.stringify(cloudSnapshot.progress || {})),
    currentId: cloudSnapshot.currentId,
  }
  
  const cloudProfileMap = new Map()
  for (const p of result.profiles) {
    cloudProfileMap.set(p.id, p)
  }
  
  for (const localProfile of localSnapshot.profiles || []) {
    if (cloudProfileMap.has(localProfile.id)) {
      // Same profile ID exists - MERGE progress, don't create duplicate
      const localProg = localSnapshot.progress[localProfile.id]
      const cloudProg = result.progress[localProfile.id]
      if (localProg && cloudProg) {
        result.progress[localProfile.id] = mergeProgress(localProg, cloudProg)
      } else if (localProg && !cloudProg) {
        result.progress[localProfile.id] = localProg
      }
    } else {
      // New profile not in cloud - add it
      result.profiles.push({ ...localProfile })
      if (localSnapshot.progress[localProfile.id]) {
        result.progress[localProfile.id] = localSnapshot.progress[localProfile.id]
      }
    }
  }
  
  return result
}

// Download from cloud to local - merge if same profile ID exists
export function applySnapshotToLocal(cloudSnapshot, preserveLocalAsNew = true) {
  if (!cloudSnapshot) return false
  
  try {
    const PROFILES_KEY = 'kinderchi-profiles-v2'
    const CURRENT_KEY = 'kinderchi-current-profile-v2'
    const PROGRESS_PREFIX = 'kinderchi-progress-v2-'
    
    const localProfilesRaw = localStorage.getItem(PROFILES_KEY)
    const localProfiles = localProfilesRaw ? JSON.parse(localProfilesRaw) : []
    const localProgress = {}
    for (const p of localProfiles) {
      const raw = localStorage.getItem(PROGRESS_PREFIX + p.id)
      if (raw) localProgress[p.id] = JSON.parse(raw)
    }
    
    if (!preserveLocalAsNew || localProfiles.length === 0) {
      localStorage.setItem(PROFILES_KEY, JSON.stringify(cloudSnapshot.profiles || []))
      if (cloudSnapshot.currentId) {
        localStorage.setItem(CURRENT_KEY, cloudSnapshot.currentId)
      }
      for (const p of cloudSnapshot.profiles || []) {
        if (cloudSnapshot.progress[p.id]) {
          localStorage.setItem(PROGRESS_PREFIX + p.id, JSON.stringify(cloudSnapshot.progress[p.id]))
        }
      }
      return true
    }
    
    const result = {
      profiles: [...(cloudSnapshot.profiles || [])],
      progress: JSON.parse(JSON.stringify(cloudSnapshot.progress || {})),
      currentId: cloudSnapshot.currentId,
    }
    
    const cloudProfileMap = new Map()
    for (const p of result.profiles) {
      cloudProfileMap.set(p.id, p)
    }
    
    for (const localProfile of localProfiles) {
      if (cloudProfileMap.has(localProfile.id)) {
        // Same profile ID exists - MERGE progress
        const localProg = localProgress[localProfile.id]
        const cloudProg = result.progress[localProfile.id]
        if (localProg && cloudProg) {
          result.progress[localProfile.id] = mergeProgress(localProg, cloudProg)
        } else if (localProg && !cloudProg) {
          result.progress[localProfile.id] = localProg
        }
      } else {
        // New profile not in cloud - add it as new
        result.profiles.push(localProfile)
        if (localProgress[localProfile.id]) {
          result.progress[localProfile.id] = localProgress[localProfile.id]
        }
      }
    }
    
    localStorage.setItem(PROFILES_KEY, JSON.stringify(result.profiles))
    if (result.currentId && result.profiles.find(p => p.id === result.currentId)) {
      localStorage.setItem(CURRENT_KEY, result.currentId)
    } else if (result.profiles.length > 0) {
      localStorage.setItem(CURRENT_KEY, result.profiles[0].id)
    }
    for (const id of Object.keys(result.progress)) {
      localStorage.setItem(PROGRESS_PREFIX + id, JSON.stringify(result.progress[id]))
    }
    
    return true
  } catch (err) {
    console.error('Failed to apply snapshot:', err)
    return false
  }
}

const SYNC_STATE_KEY = 'kinderchi-puter-sync-state'

// Get fingerprint of local data
function getLocalFingerprint(snapshot) {
  if (!snapshot) return null
  try {
    // Only care about profiles and progress, not timestamps
    return JSON.stringify([snapshot.profiles, snapshot.progress])
  } catch {
    return null
  }
}

// Get sync state
export function getSyncState() {
  try {
    const raw = localStorage.getItem(SYNC_STATE_KEY)
    return raw ? JSON.parse(raw) : { lastCloudUpdatedAt: null, lastLocalFingerprint: null }
  } catch {
    return { lastCloudUpdatedAt: null, lastLocalFingerprint: null }
  }
}

// Save sync state
function saveSyncState(state) {
  try {
    localStorage.setItem(SYNC_STATE_KEY, JSON.stringify(state))
  } catch {
    // ignore
  }
}

// Smart sync: check timestamps/fingerprints to avoid unnecessary downloads
export async function smartSync() {
  if (!isPuterAvailable()) throw new Error('Puter not available')
  const signedIn = await isSignedIn()
  if (!signedIn) throw new Error('Not signed in')
  
  const localSnapshot = createSnapshot()
  if (!localSnapshot) throw new Error('Failed to create local snapshot')
  
  const localFingerprint = getLocalFingerprint(localSnapshot)
  const syncState = getSyncState()
  
  // Download cloud to check
  const cloudSnapshot = await loadFromPuter()
  
  if (!cloudSnapshot) {
    // No cloud data, just upload
    await saveToPuter(localSnapshot)
    saveSyncState({
      lastCloudUpdatedAt: localSnapshot.updatedAt,
      lastLocalFingerprint: localFingerprint,
    })
    return { action: 'uploaded', changed: true }
  }
  
  const cloudUpdatedAt = cloudSnapshot.updatedAt
  const cloudFingerprint = getLocalFingerprint(cloudSnapshot)
  
  // Check if anything changed
  if (cloudUpdatedAt === syncState.lastCloudUpdatedAt && localFingerprint === syncState.lastLocalFingerprint) {
    // Nothing changed anywhere
    return { action: 'none', changed: false }
  }
  
  if (cloudUpdatedAt === syncState.lastCloudUpdatedAt && localFingerprint !== syncState.lastLocalFingerprint) {
    // Only local changed, cloud unchanged - can upload directly without merge
    await saveToPuter(localSnapshot)
    saveSyncState({
      lastCloudUpdatedAt: localSnapshot.updatedAt,
      lastLocalFingerprint: localFingerprint,
    })
    return { action: 'uploaded_local_only', changed: true }
  }
  
  if (cloudUpdatedAt !== syncState.lastCloudUpdatedAt && localFingerprint === syncState.lastLocalFingerprint) {
    // Only cloud changed, local unchanged - just download
    const ok = applySnapshotToLocal(cloudSnapshot, true)
    saveSyncState({
      lastCloudUpdatedAt: cloudUpdatedAt,
      lastLocalFingerprint: getLocalFingerprint(createSnapshot()),
    })
    if (ok) window.location.reload()
    return { action: 'downloaded_cloud_only', changed: true }
  }
  
  // Both changed - need full merge
  const merged = mergeSnapshotsForUpload(localSnapshot, cloudSnapshot)
  await saveToPuter(merged)
  saveSyncState({
    lastCloudUpdatedAt: merged.updatedAt,
    lastLocalFingerprint: getLocalFingerprint(merged),
  })
  return { action: 'merged', changed: true }
}
