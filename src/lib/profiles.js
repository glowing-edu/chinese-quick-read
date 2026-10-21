// Multi-profile progress system for Kinderchi
// Each profile stores its own progress under a profile-scoped key in localStorage.

import { mergeSnapshots } from './merge.js'

const PROFILES_KEY = 'kinderchi-profiles-v2'
const CURRENT_KEY = 'kinderchi-current-profile-v2'
const LEGACY_KEY = 'kinderchi-progress-v1'
const PROGRESS_PREFIX = 'kinderchi-progress-v2-'

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
  const progress = legacy ?? freshProgress()
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
  const progress = freshProgress()
  saveProgressForProfile(profile.id, progress)
  setCurrentId(profile.id)
  return { profiles: next, currentId: profile.id, progress }
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
  const next = profiles.map((p) => (p.id === id ? { ...p, ...stampProfile(updates) } : p))
  saveProfiles(next)
  return next
}

// Renames/avatar changes carry a timestamp so a cloud merge can tell which
// device edited a profile most recently.
function stampProfile(updates) {
  const touchesProfile = 'name' in updates || 'avatar' in updates
  return touchesProfile ? { ...updates, updatedAt: Date.now() } : updates
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

// --- Cloud backup snapshot ---------------------------------------------------

/**
 * Everything that needs to travel between devices: the profile list plus
 * progress for *every* profile. useProgress() only holds the active profile in
 * memory, so this reads each one back from storage.
 */
export function exportSnapshot() {
  const profiles = loadProfiles()
  const progress = {}
  for (const p of profiles) progress[p.id] = loadProgressForProfile(p.id)
  return {
    schema: 1,
    app: 'chinese-quick-read',
    updatedAt: Date.now(),
    currentId: getCurrentId() ?? undefined,
    profiles,
    progress,
  }
}

/**
 * Merge a downloaded backup into local storage, then return the refreshed
 * state for useProgress(). Returns null when there is nothing usable.
 *
 * currentId is intentionally preserved — each device keeps its own selection.
 */
export function mergeSnapshot(remote) {
  if (!remote || !Array.isArray(remote.profiles) || remote.profiles.length === 0) return null

  const local = exportSnapshot()
  const merged = mergeSnapshots(local, remote)
  if (merged.profiles.length === 0) return null

  // Already identical → do not write to storage and do not signal a change.
  // The caller treats null as "nothing to apply", which is what stops a sync
  // from scheduling another sync forever.
  const unchanged =
    JSON.stringify([local.profiles, local.progress]) ===
    JSON.stringify([merged.profiles, merged.progress])
  if (unchanged) return null

  for (const profile of merged.profiles) {
    saveProgressForProfile(profile.id, merged.progress[profile.id] ?? freshProgress())
  }
  saveProfiles(merged.profiles)

  let currentId = merged.currentId ?? local.currentId
  if (!currentId || !merged.profiles.some((p) => p.id === currentId)) {
    currentId = merged.profiles[0].id
    setCurrentId(currentId)
  }

  return {
    profiles: merged.profiles,
    currentId,
    progress: merged.progress[currentId] ?? freshProgress(),
  }
}

export { DEFAULT_PROGRESS, AVATARS, freshProgress }
