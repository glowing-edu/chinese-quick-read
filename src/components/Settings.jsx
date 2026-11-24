import { useMemo, useRef, useState } from 'react'
import { downloadTextFile } from '../lib/download'
import { canSpeak, speak } from '../lib/speech'
import {
  LESSON_JSON_TEMPLATE,
  LESSON_MARKDOWN_TEMPLATE,
  lessonToJson,
  lessonToMarkdown,
  parseLessonFile,
} from '../lib/lessonFile'

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
  onImportLesson,
  onDeleteLesson,
  onSelectVoice,
  onClose,
}) {
  const [fileName, setFileName] = useState('')
  const [preview, setPreview] = useState(null)
  const [importError, setImportError] = useState('')
  const [importResult, setImportResult] = useState(null)
  const fileRef = useRef(null)

  const sortedVoices = useMemo(() => {
    const seen = new Set()
    return [...voices]
      .filter(isChinese)
      .sort((a, b) => voiceRank(a) - voiceRank(b) || a.name.localeCompare(b.name))
      .filter((voice) => {
        if (seen.has(voice.voiceURI)) return false
        seen.add(voice.voiceURI)
        return true
      })
  }, [voices])

  const selectedAvailable =
    Boolean(selectedVoiceURI) && sortedVoices.some((voice) => voice.voiceURI === selectedVoiceURI)
  const selectedMissing =
    Boolean(selectedVoiceURI) && voices.length > 0 && !selectedAvailable

  const handleFile = async (event) => {
    const file = event.target.files?.[0]
    const input = event.target
    if (!file) return
    setFileName(file.name)
    setPreview(null)
    setImportError('')
    setImportResult(null)
    try {
      const text = await file.text()
      setPreview(parseLessonFile(text, file.name))
    } catch (err) {
      setImportError(err.message || String(err))
    } finally {
      input.value = ''
    }
  }

  const handleImport = () => {
    if (!preview) return
    setImportError('')
    setImportResult(null)
    const result = onImportLesson(preview)
    if (!result) {
      setImportError('儲存唔到課堂，請再試一次。Could not save the lesson.')
      return
    }
    setImportResult(result)
    setPreview(null)
    setFileName('')
  }

  const cancelPreview = () => {
    setPreview(null)
    setFileName('')
    setImportError('')
  }

  const exportLesson = (lesson, format) => {
    const id = lesson.custom ? lesson.sourceId || `custom-${lesson.uid}` : `lesson-${lesson.id}`
    const safeId =
      String(id)
        .replace(/[^a-z0-9._-]+/gi, '-')
        .replace(/^-+|-+$/g, '') || `lesson-${lesson.id}`
    if (format === 'json') {
      downloadTextFile(lessonToJson(lesson), `${safeId}.json`, 'application/json')
    } else {
      downloadTextFile(lessonToMarkdown(lesson), `${safeId}.md`, 'text/markdown')
    }
  }

  const handleDelete = (lesson) => {
    if (
      !window.confirm(
        `刪除「${lesson.title}」？已學進度會保留。\nDelete ${lesson.title}? Learned progress stays.`,
      )
    ) {
      return
    }
    onDeleteLesson(lesson.id)
  }

  return (
    <main className="settings">
      <div className="settings__head">
        <div>
          <h2 className="settings__title">⚙️ 設定 Settings</h2>
          <p className="settings__subtitle">揀語音、匯入同匯出課堂 · Choose a voice and import or export lessons</p>
        </div>
        <button type="button" className="btn btn--ghost btn--small" onClick={onClose}>
          ← 返去 Back
        </button>
      </div>

      <section className="settings__panel" aria-labelledby="settings-voice">
        <h3 id="settings-voice">🔊 語音 Voice</h3>
        <p className="settings__hint">
          用嚟讀生字、詞語同句子。自動模式會優先揀廣東話語音。只會顯示中文／廣東話語音。
          <br />
          Used for all speech. Auto prefers a Cantonese voice. Only Chinese and Cantonese voices are
          shown.
        </p>
        {!canSpeak() ? (
          <p className="settings__warning">呢部裝置唔支援語音朗讀。This device has no speech support.</p>
        ) : voices.length === 0 ? (
          <p className="settings__hint">仲未載入到語音… Loading voices…</p>
        ) : sortedVoices.length === 0 ? (
          <p className="settings__warning">
            搵唔到中文或廣東話語音。No Chinese or Cantonese voices found.
          </p>
        ) : (
          <div className="settings__voice-row">
            <label className="settings__field settings__field--grow">
              <span>語音 Voice</span>
              <select
                className="settings__select"
                value={selectedAvailable ? selectedVoiceURI : ''}
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
              onClick={() => speak('盧海鵬試Mike。', { rate: 0.75 })}
            >
              🔊 試聽 Preview
            </button>
          </div>
        )}
        {selectedMissing && (
          <p className="settings__warning">
            之前揀嘅語音而家唔可用或者唔係中文，會暫時用自動語音。
            <br />
            The saved voice is unavailable or not Chinese; auto voice will be used.
          </p>
        )}
      </section>

      <section className="settings__panel" aria-labelledby="settings-lessons">
        <h3 id="settings-lessons">➕ 匯入課堂 Import a lesson</h3>
        <p className="settings__hint">
          上載包含生字、詞語、句子同課堂名稱嘅 JSON 或 Markdown 檔案。用同一個
          ID 再匯入會更新同一課。登入 Puter 同步後會自動備份到雲端。
          <br />
          Upload a JSON or Markdown file with characters, words, sentences and a lesson name.
          Re-importing the same ID updates that lesson. It is backed up when you sync with Puter.
        </p>

        <label className="settings__field lesson-file">
          <span>課堂檔案 Lesson file (.json / .md)</span>
          <input
            ref={fileRef}
            className="settings__file"
            type="file"
            accept=".json,.md,.markdown,application/json,text/markdown,text/plain"
            onChange={handleFile}
          />
        </label>

        {fileName && <p className="settings__hint">已選擇 Selected: {fileName}</p>}

        {preview && (
          <div className="lesson-import__preview">
            <strong>{preview.title}</strong>
            {preview.titleEn && <span className="lesson-import__en">{preview.titleEn}</span>}
            <div className="lesson-import__counts">
              <span>{preview.characters.length} 生字</span>
              <span>{preview.words.length} 詞語</span>
              <span>{preview.sentences.length} 句子</span>
            </div>
            {preview.sourceId && (
              <p className="settings__hint">
                ID: {preview.sourceId} · 再匯入會更新呢一課 Re-importing updates this lesson
              </p>
            )}
            <div className="lesson-import__actions">
              <button type="button" className="btn btn--ghost btn--small" onClick={cancelPreview}>
                取消 Cancel
              </button>
              <button type="button" className="btn btn--primary btn--small" onClick={handleImport}>
                匯入課堂 Import lesson
              </button>
            </div>
          </div>
        )}

        {importError && (
          <p className="settings__error" role="alert">
            {importError}
          </p>
        )}
        {importResult && (
          <p className="settings__saved" role="status">
            已{importResult.updated ? '更新' : '新增'}「{importResult.lesson.title}」：{importResult.lesson.characters.length}{' '}
            生字、{importResult.lesson.words.length} 詞語、{importResult.lesson.sentences.length} 句子。
            Lesson {importResult.updated ? 'updated' : 'added'}.
          </p>
        )}

        <div className="lesson-import__templates">
          <span className="settings__hint">下載範例 Templates:</span>
          <div className="lesson-import__template-buttons">
            <button
              type="button"
              className="btn btn--ghost btn--small"
              onClick={() => downloadTextFile(LESSON_JSON_TEMPLATE, 'kinderchi-lesson.json', 'application/json')}
            >
              JSON
            </button>
            <button
              type="button"
              className="btn btn--ghost btn--small"
              onClick={() =>
                downloadTextFile(LESSON_MARKDOWN_TEMPLATE, 'kinderchi-lesson.md', 'text/markdown')
              }
            >
              Markdown
            </button>
          </div>
        </div>
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
                    {lesson.titleEn} · {lesson.characters.length} 生字 · {lesson.words.length} 詞語 ·{' '}
                    {lesson.sentences.length} 句子
                  </small>
                </span>
                <div className="settings__lesson-actions">
                  <button
                    type="button"
                    className="settings__mini-btn"
                    onClick={() => exportLesson(lesson, 'json')}
                  >
                    ⬇️ JSON
                  </button>
                  <button
                    type="button"
                    className="settings__mini-btn"
                    onClick={() => exportLesson(lesson, 'markdown')}
                  >
                    ⬇️ Markdown
                  </button>
                  <button
                    type="button"
                    className="settings__mini-btn settings__mini-btn--danger"
                    onClick={() => handleDelete(lesson)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}
