import SentenceCard from './SentenceCard'

export default function SentenceDrill({
  sentences,
  heard,
  sentencesRead,
  lessonOf,
  onReadSentence,
  onLearnTab,
}) {
  const total = sentences.length
  const readCount = sentences.filter((s) => {
    const key = Array.isArray(s.sentence) ? s.sentence.join('\n') : s.sentence
    return sentencesRead.includes(key)
  }).length
  const allRead = total > 0 && readCount >= total

  return (
    <section className="words">
      <p className="learn__hint">
        讀出完整句子，點一下就會聽到 · Read the whole sentence — tap to hear it
      </p>

      <p className="words__progress">
        {allRead ? '🎉 全部讀到！All sentences read!' : `已讀 ${readCount} / ${total}`}
      </p>

      {allRead && (
        <div className="banner">
          🎉 {total} 個句子全部讀到！好叻呀！
          <button type="button" className="banner__cta" onClick={onLearnTab}>
            返去學生字 📖
          </button>
        </div>
      )}

      <div className="grid grid--sentences">
        {sentences.map((item) => {
          const key = Array.isArray(item.sentence) ? item.sentence.join('\n') : item.sentence
          return (
            <SentenceCard
              key={key}
              item={item}
              learned={heard}
              read={sentencesRead.includes(key)}
              lessonOf={lessonOf}
              onRead={() => onReadSentence({ ...item, sentence: key })}
            />
          )
        })}
      </div>
    </section>
  )
}
