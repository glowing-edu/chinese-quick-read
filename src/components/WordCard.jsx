export default function WordCard({ item, learned, read, lessonOf, onRead }) {
  const missing = item.requires.filter((c) => !learned.includes(c))
  const locked = missing.length > 0

  if (locked) {
    return (
      <div
        className="wordcard wordcard--locked"
        aria-label={`未解鎖 locked — 先學 ${missing.join('、')}`}
      >
        <span className="wordcard__lock" aria-hidden="true">
          🔒
        </span>
        <span className="wordcard__text wordcard__text--dim" aria-hidden="true">
          {[...item.word].map((ch, i) => (
            <span key={i}>{ch}</span>
          ))}
        </span>
        <span className="wordcard__hint">
          先學 · Learn first:
          {item.requires.map((c) => (
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
      className={`wordcard${read ? ' wordcard--read' : ''}`}
      role="button"
      tabIndex={0}
      aria-label={`詞語 ${item.word}，粵拼 ${item.jyutping}`}
      onClick={onRead}
      onKeyDown={handleKeyDown}
    >
      {read && (
        <span className="wordcard__badge" title="已讀過">
          ⭐
        </span>
      )}
      <span className="wordcard__speak" aria-hidden="true">
        🔊
      </span>
      <span className="wordcard__text">
        {[...item.word].map((ch, i) => (
          <span key={i}>{ch}</span>
        ))}
      </span>
      <span className="wordcard__jyut">{item.jyutping}</span>
      <span className="wordcard__emoji" aria-hidden="true">
        {item.emoji}
      </span>
      <span className="wordcard__meaning">{item.meaning}</span>
    </div>
  )
}
