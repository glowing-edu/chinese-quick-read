// Puter.js sync for Kinderchi
// Signs in with Puter's account system and stores progress in the user's
// own Puter space. On first sign-in from a new browser, local profiles are
// treated as NEW profiles and uploaded (never overwriting existing cloud data).

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
  // Must be called from user action
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
    // puter.kv.get returns the parsed value if it was stored as object
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
    // Store as object - Puter will serialize it
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

// Merge: treat local profiles as NEW profiles when syncing to cloud
// Don't overwrite existing cloud profiles; add local ones with new IDs if they conflict
export function mergeSnapshotsForUpload(localSnapshot, cloudSnapshot) {
  if (!cloudSnapshot) return localSnapshot
  if (!localSnapshot) return cloudSnapshot
  
  // Start with cloud data as base
  const result = {
    schema: 1,
    app: 'kinderchi',
    updatedAt: Date.now(),
    profiles: [...(cloudSnapshot.profiles || [])],
    progress: { ...(cloudSnapshot.progress || {}) },
    currentId: cloudSnapshot.currentId, // Keep cloud's current profile selection? Or keep local? "login in new browser with use data" - probably want to use cloud's state
  }
  
  const cloudProfileIds = new Set(result.profiles.map(p => p.id))
  
  // For each local profile, if it doesn't exist in cloud, add it as a NEW profile
  // If it does exist, we need to be careful - but per requirements "treat local profile as new profile"
  // So even if ID conflicts, create a new profile for local data
  for (const localProfile of localSnapshot.profiles || []) {
    if (cloudProfileIds.has(localProfile.id)) {
      // ID conflict - create as new profile with new ID
      const newId = `p_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
      const newProfile = {
        ...localProfile,
        id: newId,
        name: localProfile.name + ' (本機)', // mark as local copy
        createdAt: Date.now(),
      }
      result.profiles.push(newProfile)
      if (localSnapshot.progress[localProfile.id]) {
        result.progress[newId] = localSnapshot.progress[localProfile.id]
      }
    } else {
      // New profile, add it
      result.profiles.push({ ...localProfile })
      if (localSnapshot.progress[localProfile.id]) {
        result.progress[localProfile.id] = localSnapshot.progress[localProfile.id]
      }
    }
  }
  
  return result
}

// Apply cloud snapshot to localStorage - but be smart about it
// If local has profiles not in cloud, we need to decide - but per requirements
// "when login in new browser with use data, treat local profile as new profile and sync to puter rater than overwrite what we have in puter"
// So when downloading from Puter to this browser, merge cloud into local but preserve local as new profiles
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
      // Just apply cloud data
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
    
    // Merge: keep cloud profiles, add local profiles as new ones
    const result = {
      profiles: [...(cloudSnapshot.profiles || [])],
      progress: { ...(cloudSnapshot.progress || {}) },
      currentId: cloudSnapshot.currentId,
    }
    
    const cloudProfileIds = new Set(result.profiles.map(p => p.id))
    
    for (const localProfile of localProfiles) {
      if (cloudProfileIds.has(localProfile.id)) {
        // Create as new profile
        const newId = `p_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
        result.profiles.push({
          ...localProfile,
          id: newId,
          name: localProfile.name + ' (本機)',
          createdAt: Date.now(),
        })
        if (localProgress[localProfile.id]) {
          result.progress[newId] = localProgress[localProfile.id]
        }
      } else {
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
