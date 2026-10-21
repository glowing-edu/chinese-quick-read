export default function CharacterCard({
  item,
  heard,
  stars = 0,
  results = [],
  onLearn,
  onSpeakWord,
}) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onLearn()
    }
  }

  return (
    <div
      className={`card${heard ? ' card--heard' : ''}`}
      role="button"
      tabIndex={0}
      aria-label={`生字 ${item.char}，粵拼 ${item.jyutping}，${stars} 粒星`}
      onClick={onLearn}
      onKeyDown={handleKeyDown}
    >
      {results.length > 0 && (
        <span
          className="card__stars"
          title={`最近 ${results.length} 次：${results.map((r) => (r ? '啱' : '錯')).join('、')}`}
          aria-hidden="true"
        >
          {results.map((correct, i) => (
            <span key={i} className={`card__star${correct ? ' card__star--on' : ' card__star--miss'}`}>
              {correct ? '⭐' : '✖'}
            </span>
          ))}
        </span>
      )}
      <span className="card__speak" aria-hidden="true">
        🔊
      </span>
      <span className="card__char">{item.char}</span>
      <span className="card__jyut">{item.jyutping}</span>
      <button
        type="button"
        className="card__word"
        onClick={(event) => {
          event.stopPropagation()
          onSpeakWord()
        }}
        aria-label={`聽吓 ${item.word}`}
      >
        <span className="card__wordtext">
          {[...item.word].map((ch, i) => (
            <span key={i} className={ch === item.char ? 'card__hl' : undefined}>
              {ch}
            </span>
          ))}
        </span>
        <span className="card__emoji" aria-hidden="true">
          {item.emoji}
        </span>
      </button>
      <span className="card__meaning">{item.meaning}</span>
    </div>
  )
}
