// 第十課 Lesson 10 — 8 個生字
export const CHARACTERS = [
  { char: '貝', jyutping: 'bui3', word: '寶貝', wordJyutping: 'bou2 bui3', emoji: '🐚', meaning: 'shell/treasure' },
  { char: '生', jyutping: 'saang1', word: '學生', wordJyutping: 'hok6 saang1', emoji: '👨‍🎓', meaning: 'birth/live' },
  { char: '習', jyutping: 'zaap6', word: '習慣', wordJyutping: 'zaap6 gwaan3', emoji: '📝', meaning: 'practice' },
  { char: '看', jyutping: 'hon3', word: '看書', wordJyutping: 'hon3 syu1', emoji: '👀', meaning: 'look/watch' },
  { char: '戲', jyutping: 'hei3', word: '看戲', wordJyutping: 'hon3 hei3', emoji: '🎭', meaning: 'play/opera' },
  { char: '字', jyutping: 'zi6', word: '生字', wordJyutping: 'saang1 zi6', emoji: '🔤', meaning: 'character' },
  { char: '氣', jyutping: 'hei3', word: '生氣', wordJyutping: 'saang1 hei3', emoji: '😡', meaning: 'air/angry' },
  { char: '十', jyutping: 'sap6', word: '十個', wordJyutping: 'sap6 go3', emoji: '🔟', meaning: 'ten' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '寶寶', jyutping: 'bou2 bou2', emoji: '👶', meaning: 'baby', requires: ['寶'] },
  { word: '在家', jyutping: 'zoi6 gaa1', emoji: '🏡', meaning: 'at home', requires: ['在', '家'] },
  { word: '不在', jyutping: 'bat1 zoi6', emoji: '🚪', meaning: 'not at home', requires: ['不', '在'] },
  { word: '游水', jyutping: 'jau4 seoi2', emoji: '🏊', meaning: 'swim', requires: ['游', '水'] },
  { word: '朋友', jyutping: 'pang4 jau5', emoji: '👫', meaning: 'friend', requires: ['朋', '友'] },
  { word: '友人', jyutping: 'jau5 jan4', emoji: '🤝', meaning: 'friend', requires: ['友', '人'] },
  { word: '花兒', jyutping: 'faa1 ji4', emoji: '🌸', meaning: 'flowers', requires: ['花', '兒'] },
  { word: '兒子', jyutping: 'ji4 zi2', emoji: '👦', meaning: 'son', requires: ['兒', '子'] },
  { word: '兒歌', jyutping: 'ji4 go1', emoji: '🎶', meaning: 'children song', requires: ['兒', '歌'] },
  { word: '歌兒', jyutping: 'go1 ji4', emoji: '🎼', meaning: 'song', requires: ['歌', '兒'] },
  { word: '九日', jyutping: 'gau2 jat6', emoji: '📅', meaning: '9th', requires: ['九', '日'] },
  { word: '九月', jyutping: 'gau2 jyut6', emoji: '📆', meaning: 'September', requires: ['九', '月'] },
  { word: '九天', jyutping: 'gau2 tin1', emoji: '🗓️', meaning: 'nine days', requires: ['九', '天'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    sentence: '我是寶寶，我在家愛唱兒歌。',
    jyutping: 'ngo5 si6 bou2 bou2，ngo5 zoi6 gaa1 oi3 coeng3 ji4 go1',
    meaning: 'I am baby, I love to sing children songs at home.',
  },
  {
    sentence: '我不愛哭，我愛笑。',
    jyutping: 'ngo5 bat1 oi3 huk1，ngo5 oi3 siu3',
    meaning: "I don't love to cry, I love to laugh.",
  },
  {
    sentence: '我的好朋友是聰聰。',
    jyutping: 'ngo5 dik1 hou2 pang4 jau5 si6 cung1 cung1',
    meaning: 'My good friend is Chung-chung.',
  },
  {
    sentence: '爸爸和兒子玩遊戲。',
    jyutping: 'baa1 baa1 wo4 ji4 zi2 waan4 jau4 hei3',
    meaning: 'Dad and son play games.',
  },
]
