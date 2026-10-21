import { useCallback, useEffect, useRef, useState } from 'react'
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
  loadProgress,
} from './profiles.js'

export function useProgress() {
  const [state, setState] = useState(() => initProfiles())

  const { profiles, currentId } = state
  const [progress, setProgress] = useState(state.progress)
  const currentIdRef = useRef(currentId)

  useEffect(() => {
    currentIdRef.current = currentId
  }, [currentId])

  // Sync when current profile changes
  useEffect(() => {
    const p = loadProgress(currentId)
    setProgress(p)
  }, [currentId])

  useEffect(() => {
    saveProgress(currentId, progress)
  }, [currentId, progress])

  const markHeard = useCallback((char) => {
    const id = currentIdRef.current
    setProgress((prev) => {
      if (prev.heard.includes(char)) return prev
      const next = { ...prev, heard: [...prev.heard, char] }
      saveProgress(id, next)
      return next
    })
  }, [])

  const markWordRead = useCallback((word) => {
    const id = currentIdRef.current
    setProgress((prev) => {
      if (prev.wordsRead.includes(word)) return prev
      const next = { ...prev, wordsRead: [...prev.wordsRead, word] }
      saveProgress(id, next)
      return next
    })
  }, [])

  const markSentenceRead = useCallback((sentence) => {
    const id = currentIdRef.current
    setProgress((prev) => {
      if (prev.sentencesRead.includes(sentence)) return prev
      const next = { ...prev, sentencesRead: [...prev.sentencesRead, sentence] }
      saveProgress(id, next)
      return next
    })
  }, [])

  // Record the latest game result for a character, keeping only the last 3.
  const recordCharResult = useCallback((char, correct) => {
    const id = currentIdRef.current
    setProgress((prev) => {
      const prevResults = Array.isArray(prev.charResults?.[char]) ? prev.charResults[char] : []
      const nextResults = [...prevResults, Boolean(correct)].slice(-STAR_RESULTS)
      const next = {
        ...prev,
        charResults: { ...prev.charResults, [char]: nextResults },
      }
      saveProgress(id, next)
      return next
    })
  }, [])

  const recordQuiz = useCallback((correct, total) => {
    const id = currentIdRef.current
    setProgress((prev) => {
      const best = prev.quizBest
      const isBetter = !best || correct > best.correct
      const next = {
        ...prev,
        quizzesPlayed: prev.quizzesPlayed + 1,
        quizBest: isBetter ? { correct, total } : best,
      }
      saveProgress(id, next)
      return next
    })
  }, [])

  const reset = useCallback(() => setProgress({ ...DEFAULT_PROGRESS }), [])

  const switchProfile = useCallback((id) => {
    const res = switchProfileApi(id)
    if (res) {
      setState((s) => ({ ...s, profiles: res.profiles, currentId: res.currentId }))
      setProgress(res.progress)
    }
  }, [])

  const addProfile = useCallback((name, avatar) => {
    const res = createProfileApi(name, avatar)
    if (res) {
      setState((s) => ({ ...s, profiles: res.profiles, currentId: res.currentId }))
      setProgress(res.progress)
    }
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
