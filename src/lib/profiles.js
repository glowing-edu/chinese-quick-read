// Multi-profile progress system for Kinderchi
// Each profile stores its own progress under a profile-scoped key in localStorage.

const PROFILES_KEY = 'kinderchi-profiles-v2'
const CURRENT_KEY = 'kinderchi-current-profile-v2'
const LEGACY_KEY = 'kinderchi-progress-v1'
const PROGRESS_PREFIX = 'kinderchi-progress-v2-'

const DEFAULT_PROGRESS = {
  heard: [], // characters learned
  wordsRead: [], // words read
  sentencesRead: [], // sentences read
  stars: 0,
  quizBest: null,
  quizzesPlayed: 0,
  charResults: {}, // { [char]: boolean[] } — last 3 quiz results per character
}

// Number of recent game results kept per character. 3 correct = 3 stars.
export const STAR_RESULTS = 3

// Stars earned for a character = number of recent correct answers (0-3).
export function starsForChar(progress, char) {
  const results = progress.charResults?.[char]
  if (!Array.isArray(results)) return 0
  return results.filter(Boolean).length
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
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
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
    if (!raw) return DEFAULT_PROGRESS
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
    return DEFAULT_PROGRESS
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
  let profiles = loadProfiles()
  if (profiles.length > 0) {
    let currentId = getCurrentId()
    if (!currentId || !profiles.find((p) => p.id === currentId)) {
      currentId = profiles[0].id
      setCurrentId(currentId)
    }
    return {
      profiles,
      currentId,
      progress: loadProgressForProfile(currentId),
    }
  }

  // First time with multi-profile: migrate legacy progress if exists
  const legacy = loadLegacyProgress()
  const profile = {
    id: generateId(),
    name: '小朋友 1',
    avatar: AVATARS[0],
    createdAt: Date.now(),
  }
  profiles = [profile]
  saveProfiles(profiles)
  setCurrentId(profile.id)
  const progress = legacy ?? DEFAULT_PROGRESS
  saveProgressForProfile(profile.id, progress)
  // Optionally keep legacy for safety, but we've migrated
  return { profiles, currentId: profile.id, progress }
}

export function createProfile(name, avatar) {
  const profiles = loadProfiles()
  const profile = {
    id: generateId(),
    name: name.trim() || `小朋友 ${profiles.length + 1}`,
    avatar: avatar || AVATARS[profiles.length % AVATARS.length],
    createdAt: Date.now(),
  }
  const next = [...profiles, profile]
  saveProfiles(next)
  saveProgressForProfile(profile.id, DEFAULT_PROGRESS)
  setCurrentId(profile.id)
  return { profiles: next, currentId: profile.id, progress: DEFAULT_PROGRESS }
}

export function switchProfile(id) {
  const profiles = loadProfiles()
  if (!profiles.find((p) => p.id === id)) return null
  setCurrentId(id)
  return {
    profiles,
    currentId: id,
    progress: loadProgressForProfile(id),
  }
}

export function updateProfile(id, updates) {
  const profiles = loadProfiles()
  const next = profiles.map((p) => (p.id === id ? { ...p, ...updates } : p))
  saveProfiles(next)
  return next
}

export function deleteProfile(id) {
  const profiles = loadProfiles()
  if (profiles.length <= 1) return profiles // can't delete last profile
  const next = profiles.filter((p) => p.id !== id)
  saveProfiles(next)
  try {
    window.localStorage.removeItem(PROGRESS_PREFIX + id)
  } catch {
    // ignore
  }
  if (getCurrentId() === id) {
    setCurrentId(next[0].id)
  }
  return next
}

export function loadProgress(id) {
  return loadProgressForProfile(id)
}

export function saveProgress(id, progress) {
  saveProgressForProfile(id, progress)
}

export { DEFAULT_PROGRESS, AVATARS }
