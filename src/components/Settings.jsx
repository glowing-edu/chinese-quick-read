import { useMemo, useState } from 'react'
import { canSpeak, speak } from '../lib/speech'

let rowSeq = 0
function newRow() {
  rowSeq += 1
  return { id: rowSeq, char: '', jyutping: '', word: '', emoji: '', meaning: '' }
}

function isCantonese(voice) {
  const lang = (voice.lang || '').replace('_', '-')
  const name = (voice.name || '').toLowerCase()
  return (
    /(^|-)zh-?HK/i.test(lang) ||
    /^yue/i.test(lang) ||
    name.includes('cantonese') ||
    name.includes('hong kong')
  )
}

function isChinese(voice) {
  return /^zh|^yue/i.test(voice.lang || '')
}

function voiceRank(voice) {
  if (isCantonese(voice)) return 0
  if (isChinese(voice)) return 1
  return 2
}

function voiceLabel(voice) {
  const tag = isCantonese(voice) ? '廣東話 · ' : isChinese(voice) ? '中文 · ' : ''
  return `${tag}${voice.name} (${voice.lang || '—'})`
}

export default function Settings({
  customLessons = [],
  voices = [],
  selectedVoiceURI,
  onCreateLesson,
  onDeleteLesson,
  onSelectVoice,
  onClose,
}) {
  const [title, setTitle] = useState('')
  const [titleEn, setTitleEn] = useState('')
  const [rows, setRows] = useState(() => [newRow()])
  const [bulk, setBulk] = useState('')
  const [bulkNote, setBulkNote] = useState('')
  const [error, setError] = useState('')
  const [saved, setSaved] = useState('')

  const sortedVoices = useMemo(() => {
    const seen = new Set()
    return [...voices]
      .sort((a, b) => voiceRank(a) - voiceRank(b) || a.name.localeCompare(b.name))
      .filter((voice) => {
        if (seen.has(voice.voiceURI)) return false
        seen.add(voice.voiceURI)
        return true
      })
  }, [voices])

  const selectedMissing =
    Boolean(selectedVoiceURI) && !voices.some((voice) => voice.voiceURI === selectedVoiceURI)

  const updateRow = (id, field, value) => {
    setRows((prev) => prev.map((row) => (row.id === id ? { ...row, [field]: value } : row)))
  }

  const addRow = () => setRows((prev) => [...prev, newRow()])

  const removeRow = (id) => {
    setRows((prev) => (prev.length === 1 ? [newRow()] : prev.filter((row) => row.id !== id)))
  }

  const addBulkCharacters = () => {
    setError('')
    setSaved('')
    const found = [...new Set([...bulk].filter((ch) => /[一-鿿]/.test(ch)))]
    if (found.length === 0) {
      setBulkNote('')
      setError('貼上嘅文字入面搵唔到中文字。No Chinese characters found in the pasted text.')
      return
    }

    const existing = new Set(rows.map((row) => row.char.trim()).filter(Boolean))
    const fresh = found.filter((char) => !existing.has(char))
    if (fresh.length === 0) {
      setBulkNote('呢啲生字已經喺列表。These characters are already in the lesson.')
      return
    }

    const kept = rows.filter(
      (row) =>
        row.char.trim() ||
        row.jyutping.trim() ||
        row.word.trim() ||
        row.emoji.trim() ||
        row.meaning.trim(),
    )
    setRows([...kept, ...fresh.map((char) => ({ ...newRow(), char }))])
    setBulk('')
    const skipped = found.length - fresh.length
    setBulkNote(
      `已加入 ${fresh.length} 個生字${skipped ? `，略過 ${skipped} 個重複` : ''}。Added ${fresh.length} character${fresh.length > 1 ? 's' : ''}${skipped ? `, skipped ${skipped} duplicate${skipped > 1 ? 's' : ''}` : ''}.`,
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')
    setSaved('')

    const name = title.trim()
    if (!name) {
      setError('請輸入課堂名稱。Please enter a lesson name.')
      return
    }

    const characters = []
    const seen = new Set()
    for (const row of rows) {
      const char = row.char.trim()
      const jyutping = row.jyutping.trim()
      if (!char && !jyutping && !row.word.trim() && !row.meaning.trim() && !row.emoji.trim()) {
        continue
      }
      if (!char) {
        setError('請輸入生字。Each row needs a character.')
        return
      }
      if ([...char].length !== 1) {
        setError('每個生字只可以有一個字。Each row needs exactly one character.')
        return
      }
      if (seen.has(char)) {
        setError(`「${char}」重複咗。Duplicate character: ${char}.`)
        return
      }
      seen.add(char)
      characters.push({
        char,
        jyutping,
        word: row.word.trim(),
        emoji: row.emoji.trim(),
        meaning: row.meaning.trim(),
      })
    }

    if (characters.length === 0) {
      setError('請最少加一個生字。Add at least one character.')
      return
    }

    const lesson = onCreateLesson({ title: name, titleEn: titleEn.trim(), characters })
    if (!lesson) {
      setError('儲存唔到，請再試一次。Could not save the lesson.')
      return
    }

    setTitle('')
    setTitleEn('')
    setRows([newRow()])
    setBulk('')
    setBulkNote('')
    setSaved(`已新增「${lesson.title}」！新課堂會喺課堂列表最上面。Lesson added to the top of the list.`)
  }

  return (
    <main className="settings">
      <div className="settings__head">
        <div>
          <h2 className="settings__title">⚙️ 設定 Settings</h2>
          <p className="settings__subtitle">揀語音同新增自己嘅課堂 · Choose a voice and add your own lessons</p>
        </div>
        <button type="button" className="btn btn--ghost btn--small" onClick={onClose}>
          ← 返去 Back
        </button>
      </div>

      <section className="settings__panel" aria-labelledby="settings-voice">
        <h3 id="settings-voice">🔊 語音 Voice</h3>
        <p className="settings__hint">
          用嚟讀生字、詞語同句子。自動模式會優先揀廣東話語音。
          <br />
          Used for all speech. Auto prefers a Cantonese voice.
        </p>
        {!canSpeak() ? (
          <p className="settings__warning">呢部裝置唔支援語音朗讀。This device has no speech support.</p>
        ) : sortedVoices.length === 0 ? (
          <p className="settings__hint">仲未載入到語音… Loading voices…</p>
        ) : (
          <div className="settings__voice-row">
            <label className="settings__field settings__field--grow">
              <span>語音 Voice</span>
              <select
                className="settings__select"
                value={selectedVoiceURI || ''}
                onChange={(event) => onSelectVoice(event.target.value || null)}
              >
                <option value="">自動（推薦廣東話）· Auto (Cantonese preferred)</option>
                {sortedVoices.map((voice) => (
                  <option key={voice.voiceURI} value={voice.voiceURI}>
                    {voiceLabel(voice)}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              className="btn btn--ghost btn--small"
              onClick={() => speak('盧海鵬試mic。', { rate: 0.75 })}
            >
              🔊 試聽 Preview
            </button>
          </div>
        )}
        {selectedMissing && (
          <p className="settings__warning">
            之前揀嘅語音而家唔可用，會暫時用自動語音。
            <br />
            The saved voice is unavailable right now; auto voice will be used.
          </p>
        )}
      </section>

      <section className="settings__panel" aria-labelledby="settings-lessons">
        <h3 id="settings-lessons">➕ 新增課堂 Add a lesson</h3>
        <p className="settings__hint">
          自訂課堂支援生字同小遊戲。粵拼、Emoji、詞語同意思可以留空。新課堂會出現喺課堂列表最上面。登入
          Puter 同步後，自訂課堂亦會備份到雲端。
          <br />
          Custom lessons include the character and game tabs. Jyutping, emoji, word and meaning are
          optional. New lessons appear at the top of the lesson list and are backed up when you sync
          with Puter.
        </p>
        <form className="lesson-form" onSubmit={handleSubmit}>
          <div className="lesson-form__titles">
            <label className="settings__field">
              <span>課堂名稱 Lesson name</span>
              <input
                className="settings__input"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="例如：我嘅生字"
                maxLength={24}
              />
            </label>
            <label className="settings__field">
              <span>English name (optional)</span>
              <input
                className="settings__input"
                type="text"
                value={titleEn}
                onChange={(event) => setTitleEn(event.target.value)}
                placeholder="e.g. My characters"
                maxLength={36}
              />
            </label>
          </div>

          <div className="lesson-bulk">
            <label className="settings__field">
              <span>快速貼上生字 Bulk add characters</span>
              <textarea
                className="settings__input settings__textarea"
                value={bulk}
                onChange={(event) => {
                  setBulk(event.target.value)
                  if (bulkNote) setBulkNote('')
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
                    event.preventDefault()
                    addBulkCharacters()
                  }
                }}
                rows={3}
                placeholder={'例如：山 水 火 木\nPaste characters separated by spaces, commas or new lines.'}
                aria-label="快速貼上生字 Bulk add characters"
              />
            </label>
            <div className="lesson-bulk__actions">
              <span className="settings__hint">
                會自動抽出中文字同去重。Chinese characters are extracted and duplicates skipped.
              </span>
              <button
                type="button"
                className="btn btn--ghost btn--small"
                onClick={addBulkCharacters}
                aria-label="加入生字 Add characters"
              >
                ➕ 加入 Add
              </button>
            </div>
            {bulkNote && (
              <p className="lesson-bulk__note" role="status">
                {bulkNote}
              </p>
            )}
          </div>

          <div className="lesson-form__rows">
            {rows.map((row) => (
              <div className="lesson-row" key={row.id}>
                <label className="settings__field lesson-row__char">
                  <span>字 Char</span>
                  <input
                    className="settings__input"
                    type="text"
                    value={row.char}
                    onChange={(event) => updateRow(row.id, 'char', event.target.value)}
                    placeholder="人"
                    maxLength={1}
                    aria-label="生字 Character"
                  />
                </label>
                <label className="settings__field">
                  <span>粵拼 Jyutping (optional)</span>
                  <input
                    className="settings__input"
                    type="text"
                    value={row.jyutping}
                    onChange={(event) => updateRow(row.id, 'jyutping', event.target.value)}
                    placeholder="jan4"
                    maxLength={18}
                    aria-label="粵拼 Jyutping"
                  />
                </label>
                <label className="settings__field">
                  <span>詞語 Word (optional)</span>
                  <input
                    className="settings__input"
                    type="text"
                    value={row.word}
                    onChange={(event) => updateRow(row.id, 'word', event.target.value)}
                    placeholder="家人"
                    maxLength={8}
                    aria-label="詞語 Word"
                  />
                </label>
                <label className="settings__field lesson-row__emoji">
                  <span>Emoji</span>
                  <input
                    className="settings__input"
                    type="text"
                    value={row.emoji}
                    onChange={(event) => updateRow(row.id, 'emoji', event.target.value)}
                    placeholder="👨‍👩‍👧"
                    maxLength={12}
                    aria-label="Emoji (optional)"
                  />
                </label>
                <label className="settings__field">
                  <span>意思 Meaning (optional)</span>
                  <input
                    className="settings__input"
                    type="text"
                    value={row.meaning}
                    onChange={(event) => updateRow(row.id, 'meaning', event.target.value)}
                    placeholder="person"
                    maxLength={36}
                    aria-label="意思 Meaning"
                  />
                </label>
                <button
                  type="button"
                  className="lesson-row__remove"
                  onClick={() => removeRow(row.id)}
                  aria-label="移除呢個生字 Remove this character"
                  title="移除 Remove"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="lesson-form__actions">
            <button type="button" className="btn btn--ghost btn--small" onClick={addRow}>
              ➕ 加一行 Add row
            </button>
            <button type="submit" className="btn btn--primary btn--small">
              儲存課堂 Save lesson
            </button>
          </div>

          {error && (
            <p className="settings__error" role="alert">
              {error}
            </p>
          )}
          {saved && (
            <p className="settings__saved" role="status">
              {saved}
            </p>
          )}
        </form>
      </section>

      <section className="settings__panel" aria-labelledby="settings-custom">
        <h3 id="settings-custom">📚 我嘅課堂 Your lessons</h3>
        {customLessons.length === 0 ? (
          <p className="settings__hint">仲未有自訂課堂。No custom lessons yet.</p>
        ) : (
          <ul className="settings__lesson-list">
            {customLessons.map((lesson) => (
              <li className="settings__lesson-item" key={lesson.id}>
                <span className="settings__lesson-icon" aria-hidden="true">
                  ✨
                </span>
                <span className="settings__lesson-info">
                  <strong>{lesson.title}</strong>
                  <small>
                    {lesson.titleEn} · {lesson.characters.length} 個生字
                  </small>
                </span>
                <button
                  type="button"
                  className="btn btn--ghost btn--small"
                  onClick={() => {
                    if (
                      window.confirm(
                        `刪除「${lesson.title}」？已學進度會保留。\nDelete ${lesson.title}? Learned progress stays.`,
                      )
                    ) {
                      onDeleteLesson(lesson.id)
                    }
                  }}
                >
                  🗑️ 刪除 Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}
