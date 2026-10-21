import { useCallback, useEffect, useState } from 'react'
import {
  DEFAULT_PROGRESS,
  AVATARS,
  STAR_RESULTS,
  initProfiles,
  createProfile as createProfileApi,
  switchProfile as switchProfileApi,
  updateProfile,
  deleteProfile as deleteProfileApi,
  saveProgress,
} from './profiles.js'

export function useProgress() {
  const [state, setState] = useState(() => initProfiles())

  const { profiles, currentId } = state
  const [progress, setProgress] = useState(state.progress)

  // Sync when current profile changes
  useEffect(() => {
    const p = state.progress
    setProgress(p)
  }, [state.currentId])

  useEffect(() => {
    saveProgress(currentId, progress)
  }, [currentId, progress])

  const markHeard = useCallback((char) => {
    setProgress((prev) =>
      prev.heard.includes(char) ? prev : { ...prev, heard: [...prev.heard, char] },
    )
  }, [])

  const markWordRead = useCallback((word) => {
    setProgress((prev) =>
      prev.wordsRead.includes(word) ? prev : { ...prev, wordsRead: [...prev.wordsRead, word] },
    )
  }, [])

  const markSentenceRead = useCallback((sentence) => {
    setProgress((prev) =>
      prev.sentencesRead.includes(sentence)
        ? prev
        : { ...prev, sentencesRead: [...prev.sentencesRead, sentence] },
    )
  }, [])

  const addStars = useCallback((amount) => {
    setProgress((prev) => ({ ...prev, stars: Math.max(0, prev.stars + amount) }))
  }, [])

  // Record the latest game result for a character, keeping only the last 3.
  const recordCharResult = useCallback((char, correct) => {
    setProgress((prev) => {
      const prevResults = Array.isArray(prev.charResults?.[char]) ? prev.charResults[char] : []
      const nextResults = [...prevResults, Boolean(correct)].slice(-STAR_RESULTS)
      return {
        ...prev,
        charResults: { ...prev.charResults, [char]: nextResults },
      }
    })
  }, [])

  const recordQuiz = useCallback((correct, total) => {
    setProgress((prev) => {
      const best = prev.quizBest
      const isBetter = !best || correct > best.correct
      return {
        ...prev,
        quizzesPlayed: prev.quizzesPlayed + 1,
        quizBest: isBetter ? { correct, total } : best,
      }
    })
  }, [])

  const reset = useCallback(() => setProgress(DEFAULT_PROGRESS), [])

  const switchProfile = useCallback((id) => {
    const res = switchProfileApi(id)
    if (res) {
      setState((s) => ({ ...s, profiles: res.profiles, currentId: res.currentId }))
      setProgress(res.progress)
    }
  }, [])

  const addProfile = useCallback((name, avatar) => {
    const res = createProfileApi(name, avatar)
    setState((s) => ({ ...s, profiles: res.profiles, currentId: res.currentId }))
    setProgress(res.progress)
  }, [])

  const renameProfile = useCallback((id, name) => {
    const next = updateProfile(id, { name })
    setState((s) => ({ ...s, profiles: next }))
  }, [])

  const removeProfile = useCallback((id) => {
    const next = deleteProfileApi(id)
    if (next.length !== profiles.length) {
      let targetId = state.currentId
      if (targetId === id) {
        targetId = next[0].id
      }
      const res = switchProfileApi(targetId)
      setState((s) => ({ ...s, profiles: next, currentId: res?.currentId || targetId }))
      if (res) setProgress(res.progress)
    }
  }, [profiles.length, state.currentId])

  return {
    profiles,
    currentProfile: profiles.find((p) => p.id === currentId) || profiles[0],
    currentId,
    progress,
    markHeard,
    markWordRead,
    markSentenceRead,
    addStars,
    recordCharResult,
    recordQuiz,
    reset,
    switchProfile,
    addProfile,
    renameProfile,
    removeProfile,
  }
}

export { AVATARS, STAR_RESULTS, starsForChar } from './profiles.js'
