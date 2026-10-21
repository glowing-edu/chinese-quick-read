import { useEffect, useMemo, useState } from 'react'
import CharacterCard from './components/CharacterCard.jsx'
import ProfileSwitcher from './components/ProfileSwitcher.jsx'
import Quiz from './components/Quiz.jsx'
import SentenceDrill from './components/SentenceDrill.jsx'
import WordDrill from './components/WordDrill.jsx'
import { LESSONS, buildCharLessonMap } from './data/lessons.js'
import { useProgress } from './lib/progress.js'
import { starsForChar, starsForLesson, resultsForChar, totalStars, STAR_RESULTS } from './lib/profiles.js'
import { canSpeak, hasChineseVoice, speak, stopSpeaking } from './lib/speech.js'

const CHAR_LESSON = buildCharLessonMap()

// Every distinct character across all lessons — used for the global star total.
const ALL_CHARS = [...new Set(LESSONS.flatMap((l) => l.characters.map((c) => c.char)))]

export default function App() {
  const [lessonId, setLessonId] = useState(LESSONS[0].id)
  const [tab, setTab] = useState('learn') // learn | words | sentences | game
  const [voiceTick, setVoiceTick] = useState(0)
  const {
    profiles,
    currentProfile,
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
  } = useProgress()

  const lesson = LESSONS.find((l) => l.id === lessonId) ?? LESSONS[0]
  const sentences = lesson.sentences ?? []

  // Voices may load asynchronously — refresh once they're ready.
  useEffect(() => {
    if (!canSpeak()) return undefined
    const synth = window.speechSynthesis
    const refresh = () => setVoiceTick((t) => t + 1)
    synth.addEventListener?.('voiceschanged', refresh)
    refresh()
    const t = setTimeout(refresh, 1000)
    return () => {
      synth.removeEventListener?.('voiceschanged', refresh)
      clearTimeout(t)
    }
  }, [])

  const voiceIssue = useMemo(() => {
    void voiceTick
    if (!canSpeak()) return '呢部裝置唔支援語音朗讀，淨係得文字。This device has no speech support.'
    if (!hasChineseVoice())
      return '暫時搵唔到廣東話語音，讀音可能唔準。No Cantonese voice found — speech may be inaccurate.'
    return null
  }, [voiceTick])

  const total = lesson.characters.length
  const heardCount = lesson.characters.filter((c) => progress.heard.includes(c.char)).length
  const complete = heardCount >= total
  const isRevision = total === 0

  // Global star total across all lessons, capped at 3 stars per character.
  const earnedStars = useMemo(() => totalStars(progress, ALL_CHARS), [progress])
  const maxStars = ALL_CHARS.length * STAR_RESULTS

  const switchTab = (next) => {
    stopSpeaking()
    setTab(next)
  }

  const switchLesson = (id) => {
    stopSpeaking()
    setLessonId(id)
    const nextLesson = LESSONS.find((l) => l.id === id)
    setTab(nextLesson && nextLesson.characters.length === 0 ? 'words' : 'learn')
  }

  // Revisions have no characters, so the Learn tab is never available.
  const activeTab = isRevision && tab === 'learn' ? 'words' : tab

  const handleLearn = (item) => {
    markHeard(item.char)
    speak(item.char, { rate: 0.75 })
  }

  const handleReadWord = (item) => {
    markWordRead(item.word)
    speak(item.word, { rate: 0.8 })
  }

  const handleReadSentence = (item) => {
    markSentenceRead(item.sentence)
    speak(item.sentence, { rate: 0.7 })
  }

  const handleReset = () => {
    const answer = window.prompt('重設進度？請輸入 reset 確認。\nReset all progress for this profile? Type reset to confirm.')
    if (answer === 'reset') {
      reset()
    }
  }

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <span className="brand__mascot" aria-hidden="true">
            🐻
          </span>
          <div>
            <h1 className="brand__title">Kinderchi 學中文</h1>
            <p className="brand__sub">
              幼稚園廣東話 · {lesson.title} {lesson.titleEn}
              {!isRevision && ` · ${total} 個生字`}
              {lesson.words.length > 0 && ` · ${lesson.words.length} 個詞語`}
              {sentences.length > 0 && ` · ${sentences.length} 個句子`}
            </p>
          </div>
        </div>
        <div className="topbar__actions">
          <ProfileSwitcher
            profiles={profiles}
            currentProfile={currentProfile}
            onSwitch={switchProfile}
            onAdd={addProfile}
            onRename={renameProfile}
            onDelete={removeProfile}
          />
          <span className="badge-stars" title="星星 Stars earned">
            ⭐ {earnedStars} / {maxStars}
          </span>
        </div>
      </header>

      <nav className="lessons" aria-label="Lessons">
        {LESSONS.map((l) => {
          const lessonStars = starsForLesson(progress, l.characters)
          return (
            <button
              key={l.id}
              type="button"
              className={`lesson-pill${l.id === lessonId ? ' lesson-pill--active' : ''}`}
              onClick={() => switchLesson(l.id)}
              aria-current={l.id === lessonId ? 'true' : undefined}
            >
              <span aria-hidden="true">{l.characters.length === 0 ? '📘' : `L${l.id}`}</span>
              <span>{l.title}</span>
              {l.characters.length > 0 ? (
                <span className="lesson-pill__stars" aria-label={`${lessonStars} / 3 粒星`}>
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className={`lesson-pill__star${i < lessonStars ? ' lesson-pill__star--on' : ''}`}
                    >
                      {i < lessonStars ? '⭐' : '☆'}
                    </span>
                  ))}
                </span>
              ) : (
                <span className="lesson-pill__count">
                  {l.words.length}
                </span>
              )}
            </button>
          )
        })}
      </nav>

      <div className="progress" aria-label={`已學 ${heardCount} / ${total}`}>
        <div className="progress__track">
          <div
            className={`progress__fill${complete ? ' progress__fill--done' : ''}`}
            style={{ width: `${!isRevision ? (heardCount / total) * 100 : 100}%` }}
          />
        </div>
        <span className="progress__label">
          {isRevision ? '📘 溫習 Revision' : complete ? '🎉 生字學完喇！' : `已學 ${heardCount} / ${total}`}
        </span>
      </div>

      {voiceIssue && (
        <div className="notice" role="status">
          ⚠️ {voiceIssue}
        </div>
      )}

      <nav className="tabs" aria-label="Sections">
        {!isRevision && (
          <button
            type="button"
            className={`tab${activeTab === 'learn' ? ' tab--active' : ''}`}
            onClick={() => switchTab('learn')}
          >
            📖 學生字<span className="tab__en"> Learn</span>
          </button>
        )}
        <button
          type="button"
          className={`tab${activeTab === 'words' ? ' tab--active' : ''}`}
          onClick={() => switchTab('words')}
        >
          📚 讀詞語<span className="tab__en"> Words</span>
        </button>
        {sentences.length > 0 && (
          <button
            type="button"
            className={`tab${activeTab === 'sentences' ? ' tab--active' : ''}`}
            onClick={() => switchTab('sentences')}
          >
            ✍️ 讀句子<span className="tab__en"> Sentences</span>
          </button>
        )}
        {!isRevision && (
          <button
            type="button"
            className={`tab${activeTab === 'game' ? ' tab--active' : ''}`}
            onClick={() => switchTab('game')}
          >
            🎮 小遊戲<span className="tab__en"> Game</span>
          </button>
        )}
      </nav>

      {activeTab === 'learn' && (
        <main className="learn">
          {complete && (
            <div className="banner">
              🎉 好叻呀！{lesson.title} {total} 個生字全部學完！Lesson complete!
              <span className="banner__actions">
                <button type="button" className="banner__cta" onClick={() => switchTab('words')}>
                  去讀詞語 📚
                </button>
                <button
                  type="button"
                  className="banner__cta banner__cta--alt"
                  onClick={() => switchTab('game')}
                >
                  去玩小遊戲 ▶
                </button>
              </span>
            </div>
          )}
          <p className="learn__hint">點一下生字就會讀出嚟 · Tap a character to hear it</p>
          <div className="grid">
            {lesson.characters.map((item) => (
              <CharacterCard
                key={item.char}
                item={item}
                heard={progress.heard.includes(item.char)}
                stars={starsForChar(progress, item.char)}
                results={resultsForChar(progress, item.char)}
                onLearn={() => handleLearn(item)}
                onSpeakWord={() => speak(item.word, { rate: 0.8 })}
              />
            ))}
          </div>
        </main>
      )}

      {activeTab === 'words' && (
        <main>
          <WordDrill
            words={lesson.words}
            heard={progress.heard}
            wordsRead={progress.wordsRead}
            lessonOf={(char) => CHAR_LESSON[char]}
            onReadWord={handleReadWord}
            onLearnTab={() => switchTab('learn')}
          />
        </main>
      )}

      {activeTab === 'sentences' && sentences.length > 0 && (
        <main>
          <SentenceDrill
            sentences={sentences}
            heard={progress.heard}
            sentencesRead={progress.sentencesRead}
            lessonOf={(char) => CHAR_LESSON[char]}
            onReadSentence={handleReadSentence}
            onLearnTab={() => switchTab('learn')}
          />
        </main>
      )}

      {activeTab === 'game' && (
        <main>
          <Quiz
            characters={lesson.characters}
            best={progress.quizBest}
            starsFor={(char) => starsForChar(progress, char)}
            recordCharResult={recordCharResult}
            recordQuiz={recordQuiz}
            onBack={() => switchTab('learn')}
          />
        </main>
      )}

      <footer className="footer">
        <span>
          進度會儲存喺呢部裝置嘅瀏覽器 · Progress is saved on this device (localStorage)
        </span>
        <button type="button" className="reset-link" onClick={handleReset}>
          重設進度 Reset
        </button>
      </footer>
    </div>
  )
}
