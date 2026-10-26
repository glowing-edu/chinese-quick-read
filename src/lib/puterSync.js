// Puter.js sync for Kinderchi
// Signs in with Puter's account system and stores progress in the user's
// own Puter space.

const PUTER_KEY = 'kinderchi-profiles-backup-v1'
const HISTORY_KEY = 'kinderchi-profiles-history-v1'
const SYNC_STATE_KEY = 'kinderchi-puter-sync-state'
const MAX_HISTORY = 6

const PROFILES_KEY = 'kinderchi-profiles-v2'
const CURRENT_KEY = 'kinderchi-current-profile-v2'
const PROGRESS_PREFIX = 'kinderchi-progress-v2-'

// Timestamp of the last change to a profile record. Newer wins when merging, so
// a delete/restore/rename is not undone by an older copy from another device.
function profileTimestamp(profile) {
  if (!profile) return 0
  return profile.updatedAt || profile.deletedAt || profile.createdAt || 0
}

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

async function readKey(key) {
  if (!isPuterAvailable()) return null
  try {
    const data = await window.puter.kv.get(key)
    if (!data) return null
    if (typeof data === 'string') {
      try {
        return JSON.parse(data)
      } catch {
        return data
      }
    }
    return data
  } catch (err) {
    console.error(`Failed to load ${key} from Puter:`, err)
    return null
  }
}

async function writeKey(key, value) {
  if (!isPuterAvailable()) throw new Error('Puter not available')
  await window.puter.kv.set(key, value)
  return true
}

export async function loadFromPuter() {
  const data = await readKey(PUTER_KEY)
  if (!data || typeof data !== 'object' || !Array.isArray(data.profiles)) return null
  return data
}

// Never write an empty snapshot over the cloud data.
export async function saveToPuter(snapshot, { backup = true } = {}) {
  if (!isPuterAvailable()) throw new Error('Puter not available')
  if (!snapshot || !Array.isArray(snapshot.profiles)) throw new Error('Invalid snapshot')

  if (backup) {
    // Keep the snapshot we're about to replace so it can be restored later.
    const existing = await loadFromPuter()
    if (existing && existing.updatedAt !== snapshot.updatedAt) {
      await pushHistory(existing)
    }
  }

  try {
    await writeKey(PUTER_KEY, snapshot)
    return true
  } catch (err) {
    console.error('Failed to save to Puter:', err)
    throw err
  }
}

async function loadCloudHistory() {
  const data = await readKey(HISTORY_KEY)
  return Array.isArray(data) ? data : []
}

async function pushHistory(snapshot) {
  try {
    const history = await loadCloudHistory()
    const fp = getFingerprint(snapshot)
    const without = history.filter((h) => h?.fingerprint !== fp)
    const entry = { fingerprint: fp, savedAt: Date.now(), snapshot }
    await writeKey(HISTORY_KEY, [entry, ...without].slice(0, MAX_HISTORY))
  } catch (err) {
    console.warn('Failed to store cloud backup:', err)
  }
}

// Backups of previous cloud snapshots (newest first).
export async function loadCloudBackups() {
  const history = await loadCloudHistory()
  return history.map((entry, index) => ({
    index,
    savedAt: entry.savedAt || entry.snapshot?.updatedAt || 0,
    profiles: (entry.snapshot?.profiles || []).map((p) => ({
      id: p.id,
      name: p.name,
      avatar: p.avatar,
    })),
    updatedAt: entry.snapshot?.updatedAt || 0,
  }))
}

// Replace local (and cloud) with a previous cloud snapshot.
export async function restoreCloudBackup(index) {
  const history = await loadCloudHistory()
  const snapshot = history[index]?.snapshot
  if (!snapshot || !Array.isArray(snapshot.profiles)) return { ok: false, changed: false }
  const result = applySnapshotToLocal(snapshot, false)
  if (!result.ok) return result
  try {
    await saveToPuter(snapshot, { backup: true })
  } catch (err) {
    console.error('Failed to restore backup to cloud:', err)
  }
  saveSyncState({
    lastCloudUpdatedAt: snapshot.updatedAt,
    lastLocalFingerprint: getFingerprint(createSnapshot()),
  })
  return result
}

// Summary of what's currently in the cloud, for the sync panel.
export async function getCloudSummary() {
  const snapshot = await loadFromPuter()
  if (!snapshot) return null
  return {
    updatedAt: snapshot.updatedAt || 0,
    profiles: snapshot.profiles.map((p) => ({
      id: p.id,
      name: p.name,
      avatar: p.avatar,
    })),
  }
}

// Create a snapshot from current localStorage state
export function createSnapshot() {
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
    if (
      localBest.correct > cloudBest.correct ||
      (localBest.correct === cloudBest.correct && localBest.total >= cloudBest.total)
    ) {
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

// Merge local into cloud. The cloud is always the base, so no cloud profile
// can ever be dropped by an upload.
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
  const cloudProfileIndex = new Map()
  result.profiles.forEach((p, i) => {
    cloudProfileMap.set(p.id, p)
    cloudProfileIndex.set(p.id, i)
  })

  for (const localProfile of localSnapshot.profiles || []) {
    if (cloudProfileMap.has(localProfile.id)) {
      // Same profile ID exists - progress is merged, and the newest profile
      // record wins so deletes/restores/renames propagate.
      const idx = cloudProfileIndex.get(localProfile.id)
      if (profileTimestamp(localProfile) > profileTimestamp(result.profiles[idx])) {
        result.profiles[idx] = { ...localProfile }
      }
      const localProg = localSnapshot.progress[localProfile.id]
      const cloudProg = result.progress[localProfile.id]
      if (localProg && cloudProg) {
        result.progress[localProfile.id] = mergeProgress(localProg, cloudProg)
      } else if (localProg && !cloudProg) {
        result.progress[localProfile.id] = localProg
      }
    } else {
      // New profile not in cloud - add it
      cloudProfileMap.set(localProfile.id, localProfile)
      cloudProfileIndex.set(localProfile.id, result.profiles.length)
      result.profiles.push({ ...localProfile })
      if (localSnapshot.progress[localProfile.id]) {
        result.progress[localProfile.id] = localSnapshot.progress[localProfile.id]
      }
    }
  }

  return result
}

function getFingerprint(snapshot) {
  if (!snapshot) return null
  try {
    // Only care about profiles and progress, not timestamps
    return JSON.stringify([snapshot.profiles, snapshot.progress])
  } catch {
    return null
  }
}

function readLocal() {
  const rawProfiles = localStorage.getItem(PROFILES_KEY)
  const profiles = rawProfiles ? JSON.parse(rawProfiles) : []
  const progress = {}
  for (const p of profiles) {
    const raw = localStorage.getItem(PROGRESS_PREFIX + p.id)
    if (raw) progress[p.id] = JSON.parse(raw)
  }
  return { profiles, progress }
}

// Write a snapshot into localStorage.
//   preserveLocalAsNew = true  -> merge: cloud is the base, local-only profiles
//                                 and progress are kept too.
//   preserveLocalAsNew = false -> replace: local becomes exactly the snapshot.
export function applySnapshotToLocal(cloudSnapshot, preserveLocalAsNew = true) {
  if (!cloudSnapshot || !Array.isArray(cloudSnapshot.profiles) || cloudSnapshot.profiles.length === 0) {
    return { ok: false, changed: false }
  }

  try {
    const before = getFingerprint(createSnapshot())
    const local = readLocal()

    let profiles
    let progress
    let currentId

    if (!preserveLocalAsNew || local.profiles.length === 0) {
      profiles = cloudSnapshot.profiles.map((p) => ({ ...p }))
      progress = JSON.parse(JSON.stringify(cloudSnapshot.progress || {}))
      currentId = cloudSnapshot.currentId
    } else {
      profiles = cloudSnapshot.profiles.map((p) => ({ ...p }))
      progress = JSON.parse(JSON.stringify(cloudSnapshot.progress || {}))
      currentId = cloudSnapshot.currentId

      const cloudProfileMap = new Map()
      const cloudProfileIndex = new Map()
      profiles.forEach((p, i) => {
        cloudProfileMap.set(p.id, p)
        cloudProfileIndex.set(p.id, i)
      })

      for (const localProfile of local.profiles) {
        if (cloudProfileMap.has(localProfile.id)) {
          const idx = cloudProfileIndex.get(localProfile.id)
          if (profileTimestamp(localProfile) > profileTimestamp(profiles[idx])) {
            profiles[idx] = { ...localProfile }
          }
          const localProg = local.progress[localProfile.id]
          const cloudProg = progress[localProfile.id]
          if (localProg && cloudProg) {
            progress[localProfile.id] = mergeProgress(localProg, cloudProg)
          } else if (localProg && !cloudProg) {
            progress[localProfile.id] = localProg
          }
        } else {
          profiles.push(localProfile)
          if (local.progress[localProfile.id]) {
            progress[localProfile.id] = local.progress[localProfile.id]
          }
        }
      }
    }

    // Drop progress belonging to profiles that are no longer around.
    const keep = new Set(profiles.map((p) => p.id))
    for (const id of Object.keys(progress)) {
      if (!keep.has(id)) delete progress[id]
    }

    // Never leave the selection on a deleted profile.
    const currentRecord = profiles.find((p) => p.id === currentId)
    if (!currentId || !keep.has(currentId) || currentRecord?.deletedAt) {
      currentId = profiles.find((p) => !p.deletedAt)?.id || profiles[0].id
    }

    localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles))
    if (currentId && keep.has(currentId)) {
      localStorage.setItem(CURRENT_KEY, currentId)
    } else {
      localStorage.setItem(CURRENT_KEY, profiles[0].id)
    }
    for (const p of profiles) {
      const prog = progress[p.id]
      if (prog) localStorage.setItem(PROGRESS_PREFIX + p.id, JSON.stringify(prog))
    }
    // Remove stale per-profile progress keys.
    for (const localProfile of local.profiles) {
      if (!keep.has(localProfile.id)) {
        localStorage.removeItem(PROGRESS_PREFIX + localProfile.id)
      }
    }

    const after = getFingerprint(createSnapshot())
    return { ok: true, changed: before !== after }
  } catch (err) {
    console.error('Failed to apply snapshot:', err)
    return { ok: false, changed: false }
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

// Sync with the cloud.
//
//   push: false  -> pull only. Cloud is merged into this device; the cloud is
//                   never written. Used for automatic sync on load.
//   push: true   -> two-way: merge local into the cloud, then bring the merged
//                   result back down locally. Cloud profiles are never dropped.
//   force: true  -> ignore the timestamp shortcut and sync anyway.
export async function smartSync({ push = true, force = false } = {}) {
  if (!isPuterAvailable()) throw new Error('Puter not available')
  if (!(await isSignedIn())) throw new Error('Not signed in')

  const localSnapshot = createSnapshot()
  if (!localSnapshot) throw new Error('Failed to create local snapshot')

  const localFingerprint = getFingerprint(localSnapshot)
  const syncState = getSyncState()

  const cloudSnapshot = await loadFromPuter()

  if (!cloudSnapshot) {
    if (!push) return { action: 'none', changed: false }
    // Nothing in the cloud yet - this device seeds it.
    await saveToPuter(localSnapshot, { backup: false })
    saveSyncState({
      lastCloudUpdatedAt: localSnapshot.updatedAt,
      lastLocalFingerprint: localFingerprint,
    })
    return { action: 'uploaded', changed: false }
  }

  const cloudUpdatedAt = cloudSnapshot.updatedAt || 0

  if (!push) {
    // Automatic, non-destructive sync: download if the cloud changed.
    if (!force && cloudUpdatedAt === syncState.lastCloudUpdatedAt) {
      return { action: 'none', changed: false }
    }
    const result = applySnapshotToLocal(cloudSnapshot, true)
    saveSyncState({
      lastCloudUpdatedAt: cloudUpdatedAt,
      lastLocalFingerprint: getFingerprint(createSnapshot()),
    })
    return { action: result.ok ? 'downloaded' : 'error', changed: result.changed }
  }

  if (
    !force &&
    cloudUpdatedAt === syncState.lastCloudUpdatedAt &&
    localFingerprint === syncState.lastLocalFingerprint
  ) {
    return { action: 'none', changed: false }
  }

  const merged = mergeSnapshotsForUpload(localSnapshot, cloudSnapshot)
  // Keep this device's current selection if it survived the merge (and is not
  // a deleted profile).
  const localCurrent = merged.profiles.find((p) => p.id === localSnapshot.currentId)
  if (localCurrent && !localCurrent.deletedAt) {
    merged.currentId = localCurrent.id
  } else if (!merged.profiles.find((p) => p.id === merged.currentId && !p.deletedAt)) {
    merged.currentId = merged.profiles.find((p) => !p.deletedAt)?.id || merged.profiles[0]?.id
  }
  await saveToPuter(merged)
  // Bring cloud-only profiles/progress back to this device as well.
  const result = applySnapshotToLocal(merged, false)
  saveSyncState({
    lastCloudUpdatedAt: merged.updatedAt,
    lastLocalFingerprint: getFingerprint(createSnapshot()),
  })
  return { action: 'merged', changed: result.changed }
}
