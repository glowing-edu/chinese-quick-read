// User-created lessons. These live in localStorage and are shown above the
// built-in lessons. They contain characters only (Learn + Game tabs).
//
// Lessons carry a stable `uid` so they can be merged safely through Puter sync,
// and deletions are kept as tombstones so they are not resurrected by a sync.

const CUSTOM_LESSONS_KEY = 'kinderchi-custom-lessons-v1'
const CUSTOM_ID_START = 1000

function cleanText(value, fallback = '') {
  return typeof value === 'string' ? value.trim() : fallback
}

function timestamp(value) {
  const n = Number(value)
  return Number.isFinite(n) && n > 0 ? n : 0
}

function newUid() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `lesson-${Date.now()}-${Math.random().toString(36).slice(2)}`
}

function normalizeCharacter(item) {
  if (!item || typeof item !== 'object') return null
  const char = cleanText(item.char)
  if (!char) return null
  const jyutping = cleanText(item.jyutping)
  return {
    char,
    jyutping,
    word: cleanText(item.word) || char,
    wordJyutping: cleanText(item.wordJyutping) || jyutping,
    emoji: cleanText(item.emoji),
    meaning: cleanText(item.meaning),
  }
}

function normalizeLesson(item) {
  if (!item || typeof item !== 'object') return null
  const id = Number(item.id)
  if (!Number.isFinite(id)) return null
  const characters = Array.isArray(item.characters)
    ? item.characters.map(normalizeCharacter).filter(Boolean)
    : []
  if (characters.length === 0) return null

  const title = cleanText(item.title, '我嘅課堂')
  const createdAt = timestamp(item.createdAt)
  const deletedAt = timestamp(item.deletedAt)
  const updatedAt = Math.max(timestamp(item.updatedAt), createdAt, deletedAt)
  const uid =
    cleanText(item.uid) ||
    `legacy-${id}-${characters.map((character) => character.char).join('')}-${title}`.slice(0, 200)

  return {
    id,
    uid,
    title,
    titleEn: cleanText(item.titleEn, 'My lesson'),
    characters,
    words: [],
    sentences: [],
    custom: true,
    createdAt,
    updatedAt,
    deletedAt,
  }
}

export function normalizeCustomLessons(lessons) {
  if (!Array.isArray(lessons)) return []
  return lessons.map(normalizeLesson).filter(Boolean)
}

export function activeCustomLessons(lessons) {
  return lessons.filter((lesson) => !lesson.deletedAt)
}

export function loadAllCustomLessons() {
  if (typeof localStorage === 'undefined') return []
  try {
    const raw = localStorage.getItem(CUSTOM_LESSONS_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return normalizeCustomLessons(parsed)
  } catch {
    return []
  }
}

export function loadCustomLessons() {
  return activeCustomLessons(loadAllCustomLessons())
}

export function saveCustomLessons(lessons) {
  if (typeof localStorage === 'undefined') return
  try {
    localStorage.setItem(CUSTOM_LESSONS_KEY, JSON.stringify(lessons))
  } catch {
    // Storage may be unavailable (private mode). Keep the in-memory lesson.
  }
}

export function createCustomLesson(lessons, { title, titleEn, characters }) {
  const all = loadAllCustomLessons()
  const source = all.length > 0 ? all : lessons
  const maxId = source.reduce((max, lesson) => Math.max(max, Number(lesson.id) || 0), CUSTOM_ID_START - 1)
  const now = Date.now()
  const lesson = normalizeLesson({
    id: maxId + 1,
    uid: newUid(),
    createdAt: now,
    updatedAt: now,
    title: cleanText(title) || '我嘅課堂',
    titleEn: cleanText(titleEn) || 'My lesson',
    characters,
  })
  if (!lesson) return null
  const next = [lesson, ...source]
  saveCustomLessons(next)
  return { lesson, lessons: activeCustomLessons(next) }
}

export function deleteCustomLesson(lessons, id) {
  const stored = loadAllCustomLessons()
  const all = stored.length > 0 ? stored : lessons
  const now = Date.now()
  const next = all.map((lesson) => {
    if (lesson.id !== id) return lesson
    // Make sure the tombstone is strictly newer than the lesson it replaces,
    // even if both happen within the same millisecond.
    const stamp = Math.max(now, (lesson.updatedAt || 0) + 1)
    return { ...lesson, deletedAt: stamp, updatedAt: stamp }
  })
  saveCustomLessons(next)
  return activeCustomLessons(next)
}

// Merge two lesson lists by stable uid. Cloud lessons are the base so their
// numeric ids stay put; local-only lessons keep their id unless it collides.
export function mergeCustomLessons(local, cloud) {
  const localList = normalizeCustomLessons(local)
  const cloudList = normalizeCustomLessons(cloud)
  const byUid = new Map()

  for (const lesson of cloudList) {
    const existing = byUid.get(lesson.uid)
    if (!existing || lesson.updatedAt > existing.updatedAt) byUid.set(lesson.uid, lesson)
  }
  for (const lesson of localList) {
    const existing = byUid.get(lesson.uid)
    if (!existing || lesson.updatedAt > existing.updatedAt) byUid.set(lesson.uid, lesson)
  }

  const order = []
  const seen = new Set()
  for (const lesson of [...cloudList, ...localList]) {
    if (!seen.has(lesson.uid)) {
      seen.add(lesson.uid)
      order.push(lesson.uid)
    }
  }

  const allIds = [...cloudList, ...localList].map((lesson) => lesson.id)
  let nextId = Math.max(CUSTOM_ID_START - 1, ...allIds) + 1
  const usedIds = new Set()
  const merged = []

  for (const uid of order) {
    const lesson = { ...byUid.get(uid) }
    if (usedIds.has(lesson.id)) lesson.id = nextId++
    usedIds.add(lesson.id)
    merged.push(lesson)
  }

  return merged.sort(
    (a, b) =>
      (b.updatedAt || b.createdAt || 0) - (a.updatedAt || a.createdAt || 0) || b.id - a.id,
  )
}
