import { useEffect, useState } from 'react'
import { speak, stopSpeaking } from '../lib/speech'

const MAX_QUESTIONS = 8
const OPTION_COUNT = 4

function shuffle(list) {
  const arr = [...list]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function buildRound(characters) {
  const roundSize = Math.min(MAX_QUESTIONS, characters.length)
  return shuffle(characters)
    .slice(0, roundSize)
    .map((answer) => {
      const distractors = shuffle(characters.filter((c) => c !== answer)).slice(
        0,
        OPTION_COUNT - 1,
      )
      return { answer, options: shuffle([answer, ...distractors]) }
    })
}

const say = (text) => speak(text, { rate: 0.75 })

export default function Quiz({ characters, best, addStars, recordQuiz, onBack }) {
  const [phase, setPhase] = useState('intro') // intro | play | done
  const [round, setRound] = useState(() => buildRound(characters))
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(null)

  const question = round[index]
  const total = round.length
  const isLast = index + 1 >= total

  // Speak the question whenever a new one appears.
  useEffect(() => {
    if (phase !== 'play') return undefined
    const t = setTimeout(() => say(round[index].answer.char), 400)
    return () => clearTimeout(t)
  }, [phase, index, round])

  // Stop any audio when leaving the quiz.
  useEffect(() => stopSpeaking, [])

  // Clean up a pending "next question" timer.
  useEffect(() => {
    return () => clearTimeout(timer)
  }, [timer])

  const start = () => {
    clearTimeout(timer)
    const fresh = buildRound(characters)
    setRound(fresh)
    setIndex(0)
    setPicked(null)
    setScore(0)
    setPhase('play')
  }

  const choose = (option) => {
    if (picked) return
    const correct = option === question.answer
    const nextScore = correct ? score + 1 : score
    setPicked(option)
    say(option.char)
    if (correct) {
      setScore(nextScore)
      addStars(1)
    }
    setTimer(
      setTimeout(() => {
        if (isLast) {
          recordQuiz(nextScore, total)
          setPhase('done')
        } else {
          setIndex((i) => i + 1)
          setPicked(null)
        }
      }, correct ? 1400 : 2400),
    )
  }

  if (phase === 'intro') {
    return (
      <section className="quiz">
        <div className="quiz__intro">
          <span className="quiz__intro-emoji" aria-hidden="true">
            🎧
          </span>
          <h2>聽一聽，揀啱嘅字</h2>
          <p>Tap 🔊, then tap the character you hear.</p>
          <ul className="quiz__rules">
            <li>
              👂 {total} 條問題 · {total} questions
            </li>
            <li>⭐ 答啱一題 = 1 粒星 · 1 star per correct answer</li>
            {best && (
              <li>
                🏅 最佳成績 · Best: {best.correct} / {best.total}
              </li>
            )}
          </ul>
          <button type="button" className="btn btn--primary" onClick={start}>
            ▶ 開始 Start
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'done') {
    const perfect = score === total
    return (
      <section className="quiz">
        <div className="quiz__intro quiz__result">
          <span className="quiz__intro-emoji" aria-hidden="true">
            {perfect ? '🏆' : score >= total / 2 ? '🎉' : '💪'}
          </span>
          <h2>
            答啱 {score} / {total}
          </h2>
          <p>
            {perfect
              ? '全對！好叻呀！Perfect score!'
              : score >= total / 2
                ? '好嘢！繼續努力！Great job!'
                : '唔緊要，再試一次！Try again!'}
          </p>
          <p className="quiz__stars">⭐ +{score}</p>
          <div className="quiz__result-actions">
            <button type="button" className="btn btn--primary" onClick={start}>
              🔄 再玩一次 Play again
            </button>
            <button type="button" className="btn btn--ghost" onClick={onBack}>
              📚 返去學字 Back to cards
            </button>
          </div>
        </div>
      </section>
    )
  }

  const answered = picked !== null
  const wasCorrect = answered && picked === question.answer

  return (
    <section className="quiz">
      <div className="quiz__hud">
        <span className="quiz__count">
          第 {index + 1} / {total} 題
        </span>
        <span className="quiz__dots" aria-hidden="true">
          {round.map((q, i) => (
            <span
              key={q.answer.char}
              className={`dot${i < index ? ' dot--done' : ''}${i === index ? ' dot--current' : ''}`}
            />
          ))}
        </span>
        <span className="quiz__score">⭐ {score}</span>
      </div>

      <button type="button" className="quiz__listen" onClick={() => say(question.answer.char)}>
        <span className="quiz__listen-icon" aria-hidden="true">
          🔊
        </span>
        <span className="quiz__listen-label">再聽一次 Tap to listen</span>
      </button>

      <div className="quiz__options">
        {question.options.map((option) => {
          let state = ''
          if (answered) {
            if (option === question.answer) state = ' opt--ok'
            else if (option === picked) state = ' opt--bad'
            else state = ' opt--dim'
          }
          return (
            <button
              key={option.char}
              type="button"
              className={`opt${state}`}
              onClick={() => choose(option)}
              disabled={answered}
            >
              <span className="opt__char">{option.char}</span>
            </button>
          )
        })}
      </div>

      <div className={`quiz__feedback${answered ? '' : ' quiz__feedback--hidden'}`} aria-live="polite">
        {answered && (
          <>
            <strong>{wasCorrect ? '✔ 啱喇！' : '✘ 唔啱喎 — '}</strong>
            {!wasCorrect && (
              <span>
                係「{question.answer.char}」 {question.answer.jyutping} · {question.answer.word}{' '}
                {question.answer.emoji}
              </span>
            )}
            {wasCorrect && (
              <span>
                {question.answer.char} · {question.answer.jyutping} · {question.answer.word}{' '}
                {question.answer.emoji}
              </span>
            )}
          </>
        )}
      </div>
    </section>
  )
}
