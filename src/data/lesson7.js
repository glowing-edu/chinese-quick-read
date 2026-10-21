// 第七課 Lesson 7 — 8 個生字
export const CHARACTERS = [
  { char: '白', jyutping: 'baak6', word: '白雲', wordJyutping: 'baak6 wan4', emoji: '⚪', meaning: 'white' },
  { char: '紅', jyutping: 'hung4', word: '紅花', wordJyutping: 'hung4 faa1', emoji: '🔴', meaning: 'red' },
  { char: '是', jyutping: 'si6', word: '是的', wordJyutping: 'si6 dik1', emoji: '✅', meaning: 'yes / be' },
  { char: '家', jyutping: 'gaa1', word: '我家', wordJyutping: 'ngo5 gaa1', emoji: '🏠', meaning: 'home/family' },
  { char: '多', jyutping: 'do1', word: '多少', wordJyutping: 'do1 siu2', emoji: '➕', meaning: 'many/much' },
  { char: '唱', jyutping: 'coeng3', word: '唱歌', wordJyutping: 'coeng3 go1', emoji: '🎤', meaning: 'sing' },
  { char: '子', jyutping: 'zi2', word: '孩子', wordJyutping: 'haai4 zi2', emoji: '🧒', meaning: 'child' },
  { char: '七', jyutping: 'cat1', word: '七個', wordJyutping: 'cat1 go3', emoji: '7️⃣', meaning: 'seven' },
]

// 讀詞語 Reading words — each word unlocks once its component characters are learned
export const WORDS = [
  { word: '花草', jyutping: 'faa1 cou2', emoji: '🌿', meaning: 'flowers and grass', requires: ['花', '草'] },
  { word: '小草', jyutping: 'siu2 cou2', emoji: '🌱', meaning: 'small grass', requires: ['小', '草'] },
  { word: '草地', jyutping: 'cou2 dei6', emoji: '🌾', meaning: 'lawn/grassland', requires: ['草', '地'] },
  { word: '樹葉', jyutping: 'syu6 jip6', emoji: '🍃', meaning: 'tree leaves', requires: ['樹', '葉'] },
  { word: '一日', jyutping: 'jat1 jat6', emoji: '📅', meaning: 'one day', requires: ['一', '日'] },
  { word: '大風', jyutping: 'daai6 fung1', emoji: '💨', meaning: 'strong wind', requires: ['大', '風'] },
  { word: '大雨', jyutping: 'daai6 jyu5', emoji: '🌧️', meaning: 'heavy rain', requires: ['大', '雨'] },
  { word: '小雨', jyutping: 'siu2 jyu5', emoji: '🌦️', meaning: 'light rain', requires: ['小', '雨'] },
  { word: '下雨', jyutping: 'haa6 jyu5', emoji: '🌧️', meaning: 'raining', requires: ['下', '雨'] },
  { word: '風雨', jyutping: 'fung1 jyu5', emoji: '⛈️', meaning: 'wind and rain', requires: ['風', '雨'] },
  { word: '雨水', jyutping: 'jyu5 seoi2', emoji: '💧', meaning: 'rainwater', requires: ['雨', '水'] },
  { word: '我的', jyutping: 'ngo5 dik1', emoji: '👤', meaning: 'mine/my', requires: ['我', '的'] },
  { word: '六月', jyutping: 'luk6 jyut6', emoji: '📆', meaning: 'June', requires: ['六', '月'] },
  { word: '六日', jyutping: 'luk6 jat6', emoji: '📅', meaning: '6th of month', requires: ['六', '日'] },
  { word: '六天', jyutping: 'luk6 tin1', emoji: '🗓️', meaning: 'six days', requires: ['六', '天'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    sentence: '天上有明亮的太陽和月亮。',
    jyutping: 'tin1 soeng6 jau5 ming4 loeng6 dik1 taai3 joeng3 wo4 jyut6 loeng6',
    meaning: 'In the sky there are the bright sun and moon.',
  },
  {
    sentence: '我有爸爸和媽媽。',
    jyutping: 'ngo5 jau5 baa1 baa1 wo4 maa1 maa1',
    meaning: 'I have a dad and a mom.',
  },
  {
    sentence: '明日有大風，下大雨。',
    jyutping: 'ming4 jat6 jau5 daai6 fung1，haa6 daai6 jyu5',
    meaning: 'Tomorrow there will be strong wind and heavy rain.',
  },
  {
    sentence: '石頭上有小草和小花。',
    jyutping: 'sek6 tau4 soeng6 jau5 siu2 cou2 wo4 siu2 faa1',
    meaning: 'On the rocks there is grass and small flowers.',
  },
]
