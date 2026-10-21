// Pure, deterministic merge of two backup snapshots.
// No storage, no network — safe to unit-test in isolation.
//
// Rule of thumb everywhere: union for lists, "best" for scores, and for the
// per-character rolling attempt window keep whichever side has more stars.
// Nothing is ever silently discarded in favour of a worse result.

/** Ordered union: local entries first, then any remote-only entries. */
function union(local = [], remote = []) {
  const seen = new Set(local)
  const out = [...local]
  for (const item of remote) {
    if (!seen.has(item)) {
      seen.add(item)
      out.push(item)
    }
  }
  return out
}

function stars(results) {
  return Array.isArray(results) ? results.filter(Boolean).length : 0
}

/** Merge one profile's progress record. */
export function mergeProgress(local = {}, remote = {}) {
  const charKeys = new Set([
    ...Object.keys(local.charResults ?? {}),
    ...Object.keys(remote.charResults ?? {}),
  ])
  const charResults = {}
  for (const key of charKeys) {
    const a = local.charResults?.[key]
    const b = remote.charResults?.[key]
    if (!Array.isArray(b)) charResults[key] = Array.isArray(a) ? a : []
    else if (!Array.isArray(a)) charResults[key] = b
    // Keep the window with more stars; local wins ties so a device never
    // loses its own visible history to a coin flip.
    else charResults[key] = stars(b) > stars(a) ? b : a
  }

  const localBest = local.quizBest
  const remoteBest = remote.quizBest
  let quizBest = null
  if (localBest && remoteBest) {
    quizBest =
      remoteBest.correct > localBest.correct ||
      (remoteBest.correct === localBest.correct && (remoteBest.total ?? 0) > (localBest.total ?? 0))
        ? remoteBest
        : localBest
  } else {
    quizBest = localBest || remoteBest || null
  }

  return {
    heard: union(local.heard, remote.heard),
    wordsRead: union(local.wordsRead, remote.wordsRead),
    sentencesRead: union(local.sentencesRead, remote.sentencesRead),
    quizzesPlayed: Math.max(local.quizzesPlayed ?? 0, remote.quizzesPlayed ?? 0),
    quizBest,
    charResults,
  }
}

/** Profile metadata: the most recently edited side wins for name/avatar. */
function pickProfileMeta(a, b) {
  const timeA = a.updatedAt ?? a.createdAt ?? 0
  const timeB = b.updatedAt ?? b.createdAt ?? 0
  return timeB > timeA ? { ...a, ...b, id: a.id } : { ...b, ...a, id: a.id }
}

/** A profile with no recorded activity — e.g. a fresh device's auto-created one. */
function isPristine(profile, progress) {
  if (!profile) return false
  const p = progress
  return (
    (p?.heard?.length ?? 0) === 0 &&
    (p?.wordsRead?.length ?? 0) === 0 &&
    (p?.sentencesRead?.length ?? 0) === 0 &&
    Object.keys(p?.charResults ?? {}).length === 0 &&
    !p?.quizzesPlayed &&
    !p?.quizBest
  )
}

/**
 * Merge a remote backup into the local snapshot.
 *
 * Deliberately does NOT touch `currentId` — which child is open on screen is a
 * per-device preference, and syncing it would yank the UI to a different
 * profile mid-session.
 */
export function mergeSnapshots(local, remote) {
  if (!remote || typeof remote !== 'object') return local

  const remoteProfiles = Array.isArray(remote.profiles) ? remote.profiles : []
  const remoteIds = new Set(remoteProfiles.map((p) => p.id))
  const localProfiles = Array.isArray(local.profiles) ? local.profiles : []

  // A brand-new device auto-creates an empty "小朋友 1" profile on boot.
  // Left alone it would sit next to the cloud's real profiles as a confusing
  // empty twin — so drop it when it is genuinely untouched and unshared.
  const dropLocalDefault =
    localProfiles.length === 1 &&
    remoteProfiles.length > 0 &&
    !remoteIds.has(localProfiles[0].id) &&
    isPristine(localProfiles[0], local.progress?.[localProfiles[0].id])

  const byId = new Map()
  if (!dropLocalDefault) {
    for (const p of localProfiles) byId.set(p.id, p)
  }
  for (const p of remoteProfiles) {
    const existing = byId.get(p.id)
    byId.set(p.id, existing ? pickProfileMeta(existing, p) : p)
  }
  const profiles = [...byId.values()]

  // Profiles are the source of truth — an orphaned progress blob (no matching
  // profile) is dead data and is intentionally not carried over.
  const progress = {}
  for (const profile of profiles) {
    const id = profile.id
    const a = local.progress?.[id]
    const b = remote.progress?.[id]
    progress[id] = a && b ? mergeProgress(a, b) : mergeProgress(a ?? b ?? {}, {})
  }

  return {
    ...local,
    profiles,
    progress,
  }
}
