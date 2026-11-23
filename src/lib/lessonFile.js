// Import lessons from JSON or Markdown files.
// The parser returns the raw lesson shape; customLessons.js normalizes it.

const HAN_RE = /[一-鿿]/

const DEFAULT_FIELDS = {
  characters: ['char', 'jyutping', 'word', 'wordJyutping', 'emoji', 'meaning'],
  words: ['word', 'jyutping', 'emoji', 'meaning', 'requires'],
  sentences: ['sentence', 'jyutping', 'meaning', 'title'],
}

function cleanText(value, fallback = '') {
  return typeof value === 'string' ? value.trim() : fallback
}

function asArray(value) {
  if (Array.isArray(value)) return value
  if (value === null || value === undefined || value === '') return []
  return [value]
}

function stripWrapping(value) {
  const text =
    typeof value === 'string' ? value : value === null || value === undefined ? '' : String(value)
  return cleanText(text).replace(/^["'“”‘’]+|["'“”‘’]+$/g, '').trim()
}

function stripInlineMarkdown(value) {
  return cleanText(value).replace(/^[*_`]+|[*_`]+$/g, '').trim()
}

function normKey(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[\s_-]+/g, '')
    .replace(/[()（）]/g, '')
}

function sectionKind(heading) {
  const s = heading.toLowerCase()
  if (/生字|character|\bchars?\b/.test(s)) return 'characters'
  if (/詞語|\bwords?\b/.test(s)) return 'words'
  if (/句子|\bsentences?\b/.test(s)) return 'sentences'
  return null
}

function fieldForHeader(header) {
  const h = normKey(header)
  if (!h) return null
  if (h.includes('句子') || h.includes('sentence') || h === 'text') return 'sentence'
  if (h.includes('需要') || h.includes('require') || h.includes('component')) return 'requires'
  if (h.includes('詞語粵拼') || h.includes('wordjyutping') || h.includes('wordjyut')) {
    return 'wordJyutping'
  }
  if (h.startsWith('字') || h.includes('character') || h === 'char') return 'char'
  if (h.includes('詞語') || h === '詞' || h.includes('word')) return 'word'
  if (h.includes('粵拼') || h.includes('拼音') || h.includes('jyutping') || h === 'jyut') {
    return 'jyutping'
  }
  if (h.includes('emoji') || h.includes('表情')) return 'emoji'
  if (h.includes('意思') || h.includes('meaning') || h.includes('解釋')) return 'meaning'
  if (h.includes('標題') || h.includes('title')) return 'title'
  return null
}

function cleanCell(value) {
  return cleanText(value)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/\\n/g, '\n')
    .replace(/\\\|/g, '|')
}

function splitPipeRow(line) {
  const source = line.trim().replace(/^\|/, '').replace(/\|$/, '')
  const cells = []
  let current = ''
  let escaped = false

  for (const char of source) {
    if (escaped) {
      current += char
      escaped = false
    } else if (char === '\\') {
      escaped = true
    } else if (char === '|') {
      cells.push(current)
      current = ''
    } else {
      current += char
    }
  }
  cells.push(current)
  return cells.map(cleanCell)
}

function isSeparator(cells) {
  return (
    cells.length > 0 &&
    cells.every((cell) => /^:?-{3,}:?$/.test(cell.replace(/\s+/g, '')))
  )
}

function normalizeRawItem(item, kind) {
  if (typeof item === 'string') {
    if (kind === 'characters') return { char: cleanText(item) }
    if (kind === 'words') return { word: cleanText(item) }
    return { sentence: cleanText(item) }
  }
  if (!item || typeof item !== 'object') return null
  if (kind === 'characters') {
    return { ...item, char: cleanText(item.char) || cleanText(item.character) }
  }
  if (kind === 'words') {
    return { ...item, word: cleanText(item.word) }
  }
  return { ...item, sentence: item.sentence ?? item.text }
}

function normalizeRawItems(items, kind) {
  return asArray(items).map((item) => normalizeRawItem(item, kind)).filter(Boolean)
}

function finalizeData(data) {
  const title = stripWrapping(data.title)
  if (!title) {
    throw new Error('檔案缺少課堂名稱。The file is missing a lesson name.')
  }

  const characters = normalizeRawItems(data.characters, 'characters')
  const words = normalizeRawItems(data.words, 'words')
  const sentences = normalizeRawItems(data.sentences, 'sentences')

  if (characters.length === 0) {
    throw new Error('最少要有一個生字。At least one character is required.')
  }

  const badCharacter = characters.find((item) => [...cleanText(item.char)].length !== 1)
  if (badCharacter) {
    throw new Error(
      `生字「${cleanText(badCharacter.char)}」只可以有一個字。Each character must be exactly one character.`,
    )
  }

  return {
    title,
    titleEn: stripWrapping(data.titleEn),
    sourceId: stripWrapping(data.sourceId),
    characters,
    words,
    sentences,
  }
}

function parseJson(text) {
  let parsed
  try {
    parsed = JSON.parse(text)
  } catch (err) {
    throw new Error(`JSON 格式錯誤。Invalid JSON: ${err.message}`)
  }

  const root =
    parsed && typeof parsed === 'object' && parsed.lesson && typeof parsed.lesson === 'object'
      ? parsed.lesson
      : parsed
  if (!root || typeof root !== 'object' || Array.isArray(root)) {
    throw new Error('JSON 必須係一個課堂物件。JSON must be a lesson object.')
  }

  const pick = (...keys) => {
    for (const key of keys) {
      if (root[key] !== undefined && root[key] !== null && root[key] !== '') return root[key]
    }
    return ''
  }

  return {
    title: pick('title', 'name', 'lessonName', 'lesson_name'),
    titleEn: pick('titleEn', 'title_en', 'nameEn', 'english', 'lessonNameEn'),
    sourceId: pick('sourceId', 'source_id', 'slug', 'key', 'id'),
    characters: pick('characters', 'chars'),
    words: pick('words'),
    sentences: pick('sentences'),
  }
}

function parseMeta(line) {
  const match = /^([^:：]+)[:：]\s*(.*)$/.exec(line.trim())
  if (!match) return null
  const key = normKey(match[1])
  const value = stripWrapping(match[2])
  if (!value) return null
  if (['title', 'name', 'lesson', '課堂', '課堂名稱', '名稱'].includes(key)) {
    return { field: 'title', value }
  }
  if (['titleen', 'nameen', 'english', '英文', '英文名稱'].includes(key)) {
    return { field: 'titleEn', value }
  }
  if (['id', 'slug', 'key', 'sourceid'].includes(key)) {
    return { field: 'sourceId', value }
  }
  return null
}

function addStructuredRow(cells, fields, kind, sections) {
  const item = {}
  fields.forEach((field, index) => {
    if (field && cells[index] !== undefined) item[field] = cells[index]
  })

  if (kind === 'characters') {
    if (!item.char) return
    sections.characters.push({
      char: item.char,
      jyutping: item.jyutping || '',
      word: item.word || '',
      wordJyutping: item.wordJyutping || '',
      emoji: item.emoji || '',
      meaning: item.meaning || '',
    })
  } else if (kind === 'words') {
    if (!item.word) return
    sections.words.push({
      word: item.word,
      jyutping: item.jyutping || '',
      emoji: item.emoji || '',
      meaning: item.meaning || '',
      requires: item.requires || '',
    })
  } else if (kind === 'sentences') {
    if (!item.sentence) return
    sections.sentences.push({
      sentence: item.sentence,
      jyutping: item.jyutping || '',
      meaning: item.meaning || '',
      title: item.title || '',
    })
  }
}

function addSimpleLine(content, kind, sections) {
  const value = stripInlineMarkdown(content)
  if (!value) return
  if (kind === 'characters') {
    if ([...value].length === 1 && HAN_RE.test(value)) sections.characters.push({ char: value })
    return
  }
  if (kind === 'words') {
    sections.words.push({ word: value })
    return
  }
  sections.sentences.push({ sentence: value })
}

function parseTable(block, kind, sections) {
  const rows = block.map(splitPipeRow).filter((cells) => cells.some((cell) => cell))
  if (rows.length === 0) return

  let fields = DEFAULT_FIELDS[kind]
  let dataStart = 0
  if (rows.length >= 2 && isSeparator(rows[1])) {
    const mapped = rows[0].map(fieldForHeader)
    if (mapped.some(Boolean)) fields = mapped
    dataStart = 2
  } else {
    const mapped = rows[0].map(fieldForHeader)
    if (mapped.some(Boolean)) {
      fields = mapped
      dataStart = 1
    }
  }

  for (let i = dataStart; i < rows.length; i++) {
    if (isSeparator(rows[i])) continue
    addStructuredRow(rows[i], fields, kind, sections)
  }
}

function parseMarkdown(text) {
  const lines = text.replace(/\r\n?/g, '\n').split('\n')
  const data = { title: '', titleEn: '', sourceId: '' }
  const sections = { characters: [], words: [], sentences: [] }

  let start = 0
  if (lines[0]?.trim() === '---') {
    let end = 1
    while (end < lines.length && lines[end].trim() !== '---') end++
    if (end < lines.length) {
      for (let i = 1; i < end; i++) {
        const meta = parseMeta(lines[i])
        if (meta) data[meta.field] = meta.value
      }
      start = end + 1
    }
  }

  let current = null
  for (let i = start; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) continue

    const heading = /^(#{1,6})\s+(.*)$/.exec(line)
    if (heading) {
      const headingText = heading[2].trim()
      const kind = sectionKind(headingText)
      if (kind) {
        current = kind
        continue
      }
      if (heading[1].length === 1 && !data.title) {
        data.title = stripInlineMarkdown(headingText)
      }
      current = null
      continue
    }

    if (!current) {
      const meta = parseMeta(line)
      if (meta) data[meta.field] = meta.value
      continue
    }

    if (line.startsWith('|')) {
      const block = []
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        block.push(lines[i].trim())
        i++
      }
      i--
      parseTable(block, current, sections)
      continue
    }

    if (line.startsWith('- ') || line.startsWith('* ')) {
      const content = line.slice(2).trim()
      if (content.includes('|')) {
        addStructuredRow(splitPipeRow(content), DEFAULT_FIELDS[current], current, sections)
      } else {
        addSimpleLine(content, current, sections)
      }
    }
  }

  return { ...data, ...sections }
}

export function parseLessonFile(text, filename = '') {
  const content = String(text || '')
    .replace(/^\uFEFF/, '')
    .replace(/\r\n?/g, '\n')
    .trim()
  if (!content) throw new Error('檔案係空嘅。The file is empty.')

  const ext = filename.toLowerCase().split('.').pop()
  let data
  if (ext === 'json') {
    data = parseJson(content)
  } else if (ext === 'md' || ext === 'markdown') {
    data = parseMarkdown(content)
  } else {
    try {
      data = parseJson(content)
    } catch {
      data = parseMarkdown(content)
    }
  }
  return finalizeData(data)
}

export const LESSON_JSON_TEMPLATE = JSON.stringify(
  {
    id: 'my-custom-lesson',
    title: '我嘅課堂',
    titleEn: 'My custom lesson',
    characters: [
      {
        char: '人',
        jyutping: 'jan4',
        word: '家人',
        wordJyutping: 'gaa1 jan4',
        emoji: '👨‍👩‍👧',
        meaning: 'person',
      },
    ],
    words: [
      {
        word: '家人',
        jyutping: 'gaa1 jan4',
        emoji: '👨‍👩‍👧',
        meaning: 'family',
        requires: ['人'],
      },
    ],
    sentences: [
      {
        title: '我嘅家',
        sentence: '我愛家人。',
        jyutping: 'ngo5 oi3 gaa1 jan4',
        meaning: 'I love my family.',
      },
    ],
  },
  null,
  2,
)

export const LESSON_MARKDOWN_TEMPLATE = `# 我嘅課堂

English: My custom lesson
ID: my-custom-lesson

## 生字 Characters

| 字 | 粵拼 | 詞語 | 詞語粵拼 | Emoji | 意思 |
| --- | --- | --- | --- | --- | --- |
| 人 | jan4 | 家人 | gaa1 jan4 | 👨‍👩‍👧 | person |

## 詞語 Words

| 詞語 | 粵拼 | Emoji | 意思 | 需要生字 |
| --- | --- | --- | --- | --- |
| 家人 | gaa1 jan4 | 👨‍👩‍👧 | family | 人 |

## 句子 Sentences

| 句子 | 粵拼 | 意思 | 標題 |
| --- | --- | --- | --- |
| 我愛家人。 | ngo5 oi3 gaa1 jan4 | I love my family. | 我嘅家 |
`

function exportSourceId(lesson) {
  const sourceId = cleanText(lesson?.sourceId)
  if (sourceId) return sourceId
  if (lesson?.custom) {
    return `custom-${cleanText(lesson.uid) || lesson.id || 'lesson'}`
  }
  return `lesson-${lesson?.id ?? 'custom'}`
}

function oneLine(value) {
  return cleanText(value).replace(/\s+/g, ' ')
}

function markdownCell(value) {
  const text = Array.isArray(value) ? value.join('\n') : value
  return String(text ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/\|/g, '\\|')
    .replace(/\r?\n/g, '<br>')
}

function markdownRow(cells) {
  return `| ${cells.map(markdownCell).join(' | ')} |`
}

export function lessonToJson(lesson) {
  const data = {
    id: exportSourceId(lesson),
    title: cleanText(lesson?.title),
    titleEn: cleanText(lesson?.titleEn),
    characters: (lesson?.characters || []).map((item) => ({
      char: cleanText(item.char),
      jyutping: cleanText(item.jyutping),
      word: cleanText(item.word),
      wordJyutping: cleanText(item.wordJyutping),
      emoji: cleanText(item.emoji),
      meaning: cleanText(item.meaning),
    })),
    words: (lesson?.words || []).map((item) => ({
      word: cleanText(item.word),
      jyutping: cleanText(item.jyutping),
      emoji: cleanText(item.emoji),
      meaning: cleanText(item.meaning),
      requires: Array.isArray(item.requires) ? item.requires : [],
    })),
    sentences: (lesson?.sentences || []).map((item) => ({
      title: cleanText(item.title),
      sentence: Array.isArray(item.sentence) ? item.sentence : cleanText(item.sentence),
      jyutping: cleanText(item.jyutping),
      meaning: cleanText(item.meaning),
    })),
  }
  return `${JSON.stringify(data, null, 2)}\n`
}

export function lessonToMarkdown(lesson) {
  const title = oneLine(lesson?.title) || 'Lesson'
  const titleEn = oneLine(lesson?.titleEn)
  const lines = [`# ${title}`, '']

  if (titleEn) lines.push(`English: ${titleEn}`)
  lines.push(`ID: ${oneLine(exportSourceId(lesson))}`, '')

  lines.push(
    '## 生字 Characters',
    '',
    '| 字 | 粵拼 | 詞語 | 詞語粵拼 | Emoji | 意思 |',
    '| --- | --- | --- | --- | --- | --- |',
  )
  for (const item of lesson?.characters || []) {
    lines.push(
      markdownRow([
        item.char,
        item.jyutping,
        item.word,
        item.wordJyutping,
        item.emoji,
        item.meaning,
      ]),
    )
  }

  lines.push(
    '',
    '## 詞語 Words',
    '',
    '| 詞語 | 粵拼 | Emoji | 意思 | 需要生字 |',
    '| --- | --- | --- | --- | --- |',
  )
  for (const item of lesson?.words || []) {
    lines.push(
      markdownRow([
        item.word,
        item.jyutping,
        item.emoji,
        item.meaning,
        Array.isArray(item.requires) ? item.requires.join(' ') : '',
      ]),
    )
  }

  lines.push(
    '',
    '## 句子 Sentences',
    '',
    '| 句子 | 粵拼 | 意思 | 標題 |',
    '| --- | --- | --- | --- |',
  )
  for (const item of lesson?.sentences || []) {
    lines.push(markdownRow([item.sentence, item.jyutping, item.meaning, item.title]))
  }

  return `${lines.join('\n')}\n`
}
