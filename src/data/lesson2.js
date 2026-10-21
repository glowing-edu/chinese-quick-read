// 第二課 Lesson 2 — 8 個生字
export const CHARACTERS = [
  { char: '地', jyutping: 'dei6', word: '地球', wordJyutping: 'dei6 kau4', emoji: '🌍', meaning: 'earth' },
  { char: '陽', jyutping: 'joeng4', word: '太陽', wordJyutping: 'taai3 joeng3', emoji: '☀️', meaning: 'sun' },
  { char: '亮', jyutping: 'loeng6', word: '月亮', wordJyutping: 'jyut6 loeng6', emoji: '🌙', meaning: 'bright' },
  { char: '星', jyutping: 'sing1', word: '星星', wordJyutping: 'sing1 sing1', emoji: '⭐', meaning: 'star' },
  { char: '雲', jyutping: 'wan4', word: '白雲', wordJyutping: 'baak6 wan4', emoji: '☁️', meaning: 'cloud' },
  { char: '火', jyutping: 'fo2', word: '火山', wordJyutping: 'fo2 saan1', emoji: '🌋', meaning: 'fire' },
  { char: '水', jyutping: 'seoi2', word: '水果', wordJyutping: 'seoi2 gwo2', emoji: '🍉', meaning: 'water' },
  { char: '三', jyutping: 'saam1', word: '三個', wordJyutping: 'saam1 go3', emoji: '3️⃣', meaning: 'three' },
]

// 讀詞語 Reading words — each word unlocks once its component characters are learned
// (characters may come from Lesson 1, Lesson 2, or both).
export const WORDS = [
  { word: '爸爸', jyutping: 'baa1 baa1', emoji: '👨', meaning: 'dad', requires: ['爸'] },
  { word: '媽媽', jyutping: 'maa1 maa1', emoji: '👩', meaning: 'mom', requires: ['媽'] },
  { word: '上天', jyutping: 'soeng6 tin1', emoji: '🚀', meaning: 'up to the sky', requires: ['上', '天'] },
  { word: '天上', jyutping: 'tin1 soeng6', emoji: '✈️', meaning: 'in the sky', requires: ['天', '上'] },
  { word: '太大', jyutping: 'taai3 daai6', emoji: '📏', meaning: 'too big', requires: ['太', '大'] },
  { word: '太小', jyutping: 'taai3 siu2', emoji: '🔬', meaning: 'too small', requires: ['太', '小'] },
  { word: '一天', jyutping: 'jat1 tin1', emoji: '📅', meaning: 'one day', requires: ['一', '天'] },
  { word: '一月', jyutping: 'jat1 jyut6', emoji: '🗓️', meaning: 'January', requires: ['一', '月'] },
  { word: '二月', jyutping: 'ji6 jyut6', emoji: '📆', meaning: 'February', requires: ['二', '月'] },
  { word: '上上', jyutping: 'soeng6 soeng6', emoji: '⏫', meaning: 'up up', requires: ['上'] },
  { word: '下下', jyutping: 'haa6 haa6', emoji: '⏬', meaning: 'down down', requires: ['下'] },
]

export const SENTENCES = []
