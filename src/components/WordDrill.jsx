import WordCard from './WordCard'

export default function WordDrill({
  words,
  heard,
  wordsRead,
  lessonOf,
  onReadWord,
  onLearnTab,
}) {
  const total = words.length
  const readCount = words.filter((w) => wordsRead.includes(w.word)).length
  const allRead = readCount >= total
  const allUnlocked = words.every((w) => w.requires.every((c) => heard.includes(c)))

  return (
    <section className="words">
      <p className="learn__hint">
        用學咗嘅生字組成詞語，點一下就會讀出嚟 · Words built from characters you've learned —
        tap to hear
      </p>

      {!allUnlocked && (
        <div className="notice">
          🔒 紅色生字係未學嘅 — 細細嘅數字代表嗰個生字喺第幾課 · Red chips are characters you haven't
          learned yet — the small number shows which lesson they're in
        </div>
      )}

      <p className="words__progress">
        {allRead ? '🎉 全部讀到！All words read!' : `已讀 ${readCount} / ${total}`}
      </p>

      {allRead && (
        <div className="banner">
          🎉 {total} 個詞語全部讀到！{words.map((w) => w.word).join('、')} — 好叻呀！
          <button type="button" className="banner__cta" onClick={onLearnTab}>
            返去學生字 📖
          </button>
        </div>
      )}

      <div className="grid">
        {words.map((item) => (
          <WordCard
            key={item.word}
            item={item}
            learned={heard}
            read={wordsRead.includes(item.word)}
            lessonOf={lessonOf}
            onRead={() => onReadWord(item)}
          />
        ))}
      </div>
    </section>
  )
}
