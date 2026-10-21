// Unique Chinese characters in a sentence (punctuation excluded) —
// a sentence unlocks once all of these have been learned.
export function sentenceChars(sentence) {
  return [...new Set([...sentence].filter((ch) => /[一-鿿]/.test(ch)))]
}

export default function SentenceCard({ item, learned, read, lessonOf, onRead }) {
  const requires = sentenceChars(item.sentence)
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
        <span className="sentence__text sentence__text--dim" aria-hidden="true">
          {item.sentence}
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
      aria-label={`句子 ${item.sentence}`}
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
      <span className="sentence__text">{item.sentence}</span>
      <span className="sentence__jyut">{item.jyutping}</span>
      <span className="sentence__meaning">{item.meaning}</span>
    </div>
  )
}
