// Multi-profile progress system for Kinderchi
// Each profile stores its own progress under a profile-scoped key in localStorage.

const PROFILES_KEY = 'kinderchi-profiles-v2'
const CURRENT_KEY = 'kinderchi-current-profile-v2'
const LEGACY_KEY = 'kinderchi-progress-v1'
const PROGRESS_PREFIX = 'kinderchi-progress-v2-'

// Deleted profiles stay recoverable for this many days.
export const DELETED_RETENTION_DAYS = 30
const DELETED_RETENTION_MS = DELETED_RETENTION_DAYS * 24 * 60 * 60 * 1000

const DEFAULT_PROGRESS = {
  heard: [], // characters learned
  wordsRead: [], // words read
  sentencesRead: [], // sentences read
  quizBest: null,
  quizzesPlayed: 0,
  charResults: {}, // { [char]: boolean[] } — last 3 quiz results per character
}

// Fresh, independent copy of the default progress object.
function freshProgress() {
  return {
    ...DEFAULT_PROGRESS,
    heard: [],
    wordsRead: [],
    sentencesRead: [],
    charResults: {},
  }
}

// Number of recent game results kept per character. 3 correct = 3 stars.
export const STAR_RESULTS = 3

// Stars earned for a character = number of recent correct answers (0-3).
export function starsForChar(progress, char) {
  const results = progress.charResults?.[char]
  if (!Array.isArray(results)) return 0
  return results.filter(Boolean).length
}

// The last (up to 3) game results for a character, oldest first.
// Each entry is true (correct) or false (wrong). Missing attempts are omitted.
export function resultsForChar(progress, char) {
  const results = progress.charResults?.[char]
  return Array.isArray(results) ? results : []
}

// Stars earned for a lesson (0-3): one star when every character in the lesson
// has at least 1 star, two when every character has at least 2, etc.
export function starsForLesson(progress, characters) {
  if (!Array.isArray(characters) || characters.length === 0) return 0
  let stars = 0
  for (let level = 1; level <= STAR_RESULTS; level++) {
    const allReached = characters.every((c) => starsForChar(progress, c.char) >= level)
    if (!allReached) break
    stars = level
  }
  return stars
}

// Total stars across a list of characters, capped at 3 per character.
export function totalStars(progress, characters) {
  if (!Array.isArray(characters)) return 0
  return characters.reduce((sum, char) => sum + starsForChar(progress, char), 0)
}

const AVATARS = ['🐻', '🐰', '🐱', '🐶', '🐼', '🦊', '🐸', '🦄']

function generateId() {
  return `p_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
}

function loadProfiles() {
  try {
    const raw = window.localStorage.getItem(PROFILES_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return purgeExpiredProfiles(parsed)
  } catch {
    return []
  }
}

// Soft-deleted profiles are kept for a month so they can be recovered.
function isDeleted(profile) {
  return Boolean(profile?.deletedAt)
}

// Timestamp of the last change to a profile record. Used when merging so a
// delete/restore/rename is not undone by an older copy from another device.
export function profileTimestamp(profile) {
  if (!profile) return 0
  return profile.updatedAt || profile.deletedAt || profile.createdAt || 0
}

function activeOf(profiles) {
  return profiles.filter((p) => !isDeleted(p))
}

function deletedOf(profiles) {
  return profiles.filter((p) => isDeleted(p))
}

// Drop profiles that were deleted more than DELETED_RETENTION_DAYS ago.
function purgeExpiredProfiles(profiles) {
  const now = Date.now()
  let changed = false
  const kept = []
  for (const p of profiles) {
    if (isDeleted(p) && now - p.deletedAt > DELETED_RETENTION_MS) {
      changed = true
      try {
        window.localStorage.removeItem(PROGRESS_PREFIX + p.id)
      } catch {
        // ignore
      }
    } else {
      kept.push(p)
    }
  }
  if (changed) saveProfiles(kept)
  return kept
}

function stateFromProfiles(all) {
  const profiles = activeOf(all)
  const deletedProfiles = deletedOf(all)
  let currentId = getCurrentId()
  if (!currentId || !profiles.find((p) => p.id === currentId)) {
    currentId = profiles[0]?.id ?? null
    if (currentId) setCurrentId(currentId)
  }
  return {
    profiles,
    deletedProfiles,
    currentId,
    progress: currentId ? loadProgressForProfile(currentId) : freshProgress(),
  }
}

function saveProfiles(profiles) {
  try {
    window.localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles))
  } catch {
    // ignore
  }
}

function loadProgressForProfile(id) {
  try {
    const raw = window.localStorage.getItem(PROGRESS_PREFIX + id)
    if (!raw) return freshProgress()
    const saved = JSON.parse(raw)
    return {
      ...DEFAULT_PROGRESS,
      ...saved,
      heard: Array.isArray(saved.heard) ? saved.heard : [],
      wordsRead: Array.isArray(saved.wordsRead) ? saved.wordsRead : [],
      sentencesRead: Array.isArray(saved.sentencesRead) ? saved.sentencesRead : [],
      charResults:
        saved.charResults && typeof saved.charResults === 'object' ? saved.charResults : {},
    }
  } catch {
    return freshProgress()
  }
}

function saveProgressForProfile(id, progress) {
  try {
    window.localStorage.setItem(PROGRESS_PREFIX + id, JSON.stringify(progress))
  } catch {
    // ignore
  }
}

function loadLegacyProgress() {
  try {
    const raw = window.localStorage.getItem(LEGACY_KEY)
    if (!raw) return null
    const saved = JSON.parse(raw)
    return {
      ...DEFAULT_PROGRESS,
      ...saved,
      heard: Array.isArray(saved.heard) ? saved.heard : [],
      wordsRead: Array.isArray(saved.wordsRead) ? saved.wordsRead : [],
      sentencesRead: Array.isArray(saved.sentencesRead) ? saved.sentencesRead : [],
      charResults:
        saved.charResults && typeof saved.charResults === 'object' ? saved.charResults : {},
    }
  } catch {
    return null
  }
}

function getCurrentId() {
  try {
    return window.localStorage.getItem(CURRENT_KEY)
  } catch {
    return null
  }
}

function setCurrentId(id) {
  try {
    window.localStorage.setItem(CURRENT_KEY, id)
  } catch {
    // ignore
  }
}

export function initProfiles() {
  let all = loadProfiles()

  if (all.length === 0) {
    // First time with multi-profile: migrate legacy progress if exists
    const legacy = loadLegacyProgress()
    const now = Date.now()
    const profile = {
      id: generateId(),
      name: '小朋友 1',
      avatar: AVATARS[0],
      createdAt: now,
      updatedAt: now,
    }
    all = [profile]
    saveProfiles(all)
    setCurrentId(profile.id)
    const progress = legacy ?? freshProgress()
    saveProgressForProfile(profile.id, progress)
    return { profiles: all, deletedProfiles: [], currentId: profile.id, progress }
  }

  // Everything was deleted: make a fresh profile, deleted ones stay recoverable.
  if (activeOf(all).length === 0) {
    const now = Date.now()
    const profile = {
      id: generateId(),
      name: '小朋友 1',
      avatar: AVATARS[0],
      createdAt: now,
      updatedAt: now,
    }
    all = [...all, profile]
    saveProfiles(all)
    setCurrentId(profile.id)
    saveProgressForProfile(profile.id, freshProgress())
  }

  return stateFromProfiles(all)
}

export function createProfile(name, avatar) {
  const all = loadProfiles()
  const active = activeOf(all)
  const now = Date.now()
  const profile = {
    id: generateId(),
    name: name.trim() || `小朋友 ${active.length + 1}`,
    avatar: avatar || AVATARS[active.length % AVATARS.length],
    createdAt: now,
    updatedAt: now,
  }
  const next = [...all, profile]
  saveProfiles(next)
  const progress = freshProgress()
  saveProgressForProfile(profile.id, progress)
  setCurrentId(profile.id)
  return { profiles: activeOf(next), deletedProfiles: deletedOf(next), currentId: profile.id, progress }
}

export function switchProfile(id) {
  const all = loadProfiles()
  const active = activeOf(all)
  if (!active.find((p) => p.id === id)) return null
  setCurrentId(id)
  return {
    profiles: active,
    deletedProfiles: deletedOf(all),
    currentId: id,
    progress: loadProgressForProfile(id),
  }
}

export function updateProfile(id, updates) {
  const all = loadProfiles()
  const now = Date.now()
  const next = all.map((p) => (p.id === id ? { ...p, ...updates, updatedAt: now } : p))
  saveProfiles(next)
  return { profiles: activeOf(next), deletedProfiles: deletedOf(next) }
}

// Soft delete: keep the profile (and its progress) for recovery.
export function deleteProfile(id) {
  const all = loadProfiles()
  const active = activeOf(all)
  const target = all.find((p) => p.id === id)
  if (!target || isDeleted(target)) return null
  if (active.length <= 1) return null // can't delete the last remaining profile

  const now = Date.now()
  const next = all.map((p) => (p.id === id ? { ...p, deletedAt: now, updatedAt: now } : p))
  saveProfiles(next)

  const nextActive = activeOf(next)
  let currentId = getCurrentId()
  if (!currentId || currentId === id || !nextActive.find((p) => p.id === currentId)) {
    currentId = nextActive[0].id
    setCurrentId(currentId)
  }

  return {
    profiles: nextActive,
    deletedProfiles: deletedOf(next),
    currentId,
    progress: loadProgressForProfile(currentId),
  }
}

// Bring back a soft-deleted profile and switch to it.
export function restoreProfile(id) {
  const all = loadProfiles()
  const target = all.find((p) => p.id === id)
  if (!target || !isDeleted(target)) return null

  const now = Date.now()
  const next = all.map((p) => {
    if (p.id !== id) return p
    const { deletedAt, ...rest } = p
    void deletedAt
    return { ...rest, updatedAt: now }
  })
  saveProfiles(next)
  setCurrentId(id)

  return {
    profiles: activeOf(next),
    deletedProfiles: deletedOf(next),
    currentId: id,
    progress: loadProgressForProfile(id),
  }
}

export function loadProgress(id) {
  return loadProgressForProfile(id)
}

export function saveProgress(id, progress) {
  saveProgressForProfile(id, progress)
}

export { DEFAULT_PROGRESS, AVATARS, freshProgress }
