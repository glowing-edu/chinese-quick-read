import { useCallback, useState } from 'react'
import {
  STAR_RESULTS,
  freshProgress,
  initProfiles,
  createProfile as createProfileApi,
  switchProfile as switchProfileApi,
  updateProfile,
  deleteProfile as deleteProfileApi,
  saveProgress,
  loadProgress,
} from './profiles.js'

export function useProgress() {
  // Single source of truth: the profile list, the selected profile and its
  // progress are always updated together, so one profile can never overwrite
  // another one's progress.
  const [state, setState] = useState(() => initProfiles())
  const { profiles, currentId, progress } = state

  // Apply a change to the current profile's progress and persist it
  // immediately under that profile's own key.
  const update = useCallback((fn) => {
    setState((s) => {
      const next = fn(s.progress)
      if (next === s.progress) return s
      saveProgress(s.currentId, next)
      return { ...s, progress: next }
    })
  }, [])

  const markHeard = useCallback(
    (char) =>
      update((prev) =>
        prev.heard.includes(char) ? prev : { ...prev, heard: [...prev.heard, char] },
      ),
    [update],
  )

  const markWordRead = useCallback(
    (word) =>
      update((prev) =>
        prev.wordsRead.includes(word) ? prev : { ...prev, wordsRead: [...prev.wordsRead, word] },
      ),
    [update],
  )

  const markSentenceRead = useCallback(
    (sentence) =>
      update((prev) =>
        prev.sentencesRead.includes(sentence)
          ? prev
          : { ...prev, sentencesRead: [...prev.sentencesRead, sentence] },
      ),
    [update],
  )

  // Record the latest game result for a character, keeping only the last 3.
  const recordCharResult = useCallback(
    (char, correct) =>
      update((prev) => {
        const prevResults = Array.isArray(prev.charResults?.[char]) ? prev.charResults[char] : []
        const nextResults = [...prevResults, Boolean(correct)].slice(-STAR_RESULTS)
        return {
          ...prev,
          charResults: { ...prev.charResults, [char]: nextResults },
        }
      }),
    [update],
  )

  const recordQuiz = useCallback(
    (correct, total) =>
      update((prev) => {
        const best = prev.quizBest
        const isBetter = !best || correct > best.correct
        return {
          ...prev,
          quizzesPlayed: prev.quizzesPlayed + 1,
          quizBest: isBetter ? { correct, total } : best,
        }
      }),
    [update],
  )

  const reset = useCallback(() => update(() => freshProgress()), [update])

  const switchProfile = useCallback((id) => {
    const res = switchProfileApi(id)
    if (!res) return
    setState((s) => ({
      ...s,
      profiles: res.profiles,
      currentId: res.currentId,
      progress: res.progress,
    }))
  }, [])

  const addProfile = useCallback((name, avatar) => {
    const res = createProfileApi(name, avatar)
    if (!res) return
    setState((s) => ({
      ...s,
      profiles: res.profiles,
      currentId: res.currentId,
      progress: res.progress,
    }))
  }, [])

  const renameProfile = useCallback((id, name) => {
    const next = updateProfile(id, { name })
    setState((s) => ({ ...s, profiles: next }))
  }, [])

  const removeProfile = useCallback((id) => {
    const next = deleteProfileApi(id)
    setState((s) => {
      if (next.length === s.profiles.length) return s // cannot delete the last profile
      const targetId = s.currentId === id ? next[0].id : s.currentId
      const res = switchProfileApi(targetId)
      const target = res?.currentId || targetId
      return {
        ...s,
        profiles: next,
        currentId: target,
        progress: res ? res.progress : loadProgress(target),
      }
    })
  }, [])

  return {
    profiles,
    currentProfile: profiles.find((p) => p.id === currentId) || profiles[0],
    currentId,
    progress,
    markHeard,
    markWordRead,
    markSentenceRead,
    recordCharResult,
    recordQuiz,
    reset,
    switchProfile,
    addProfile,
    renameProfile,
    removeProfile,
  }
}

export { AVATARS, STAR_RESULTS, starsForChar, starsForLesson, resultsForChar, totalStars } from './profiles.js'
