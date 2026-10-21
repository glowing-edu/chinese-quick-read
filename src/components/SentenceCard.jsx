import { sentenceChars, sentenceText } from '../lib/sentence.js'

export default function SentenceCard({ item, learned, read, lessonOf, onRead }) {
  const text = sentenceText(item.sentence)
  const requires = sentenceChars(text)
  const missing = requires.filter((c) => !learned.includes(c))
  const locked = missing.length > 0

  if (locked) {
    return (
      <div
        className="sentence sentence--locked"
        aria-label={`未解鎖 locked — 先學 ${missing.join('、')}`}
      >
        <span className="sentence__lock" aria-hidden="true">
          🔒
        </span>
        {item.title && <div className="sentence__title">{item.title}</div>}
        <span className="sentence__text sentence__text--dim" aria-hidden="true">
          {text}
        </span>
        <span className="wordcard__hint">
          先學 · Learn first:
          {requires.map((c) => (
            <span
              key={c}
              className={`chip${missing.includes(c) ? ' chip--missing' : ' chip--have'}`}
            >
              {c}
              {missing.includes(c) && lessonOf?.(c) && (
                <sup className="chip__lesson" title={`第${lessonOf(c)}課`}>
                  {lessonOf(c)}
                </sup>
              )}
            </span>
          ))}
        </span>
        <span className="sentence__meaning">{item.meaning}</span>
      </div>
    )
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onRead()
    }
  }

  return (
    <div
      className={`sentence${read ? ' sentence--read' : ''}`}
      role="button"
      tabIndex={0}
      aria-label={`句子 ${text}`}
      onClick={onRead}
      onKeyDown={handleKeyDown}
    >
      {read && (
        <span className="sentence__badge" title="已讀過">
          ⭐
        </span>
      )}
      <span className="sentence__speak" aria-hidden="true">
        🔊
      </span>
      {item.title && <div className="sentence__title">{item.title}</div>}
      <span className="sentence__text">{text}</span>
      {item.jyutping && <span className="sentence__jyut">{item.jyutping}</span>}
      {item.meaning && <span className="sentence__meaning">{item.meaning}</span>}
    </div>
  )
}
