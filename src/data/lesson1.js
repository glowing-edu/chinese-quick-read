// 第一課 Lesson 1 — 16 個生字
// To add more lessons, create lesson2.js etc. with the same shape.
export const CHARACTERS = [
  { char: '人', jyutping: 'jan4', word: '家人', wordJyutping: 'gaa1 jan4', emoji: '👨‍👩‍👧', meaning: 'person' },
  { char: '口', jyutping: 'hau2', word: '口罩', wordJyutping: 'hau2 zaau6', emoji: '😷', meaning: 'mouth' },
  { char: '大', jyutping: 'daai6', word: '大象', wordJyutping: 'daai6 zoeng6', emoji: '🐘', meaning: 'big' },
  { char: '中', jyutping: 'zung1', word: '中文', wordJyutping: 'zung1 man2', emoji: '📖', meaning: 'middle' },
  { char: '小', jyutping: 'siu2', word: '小貓', wordJyutping: 'siu2 maau1', emoji: '🐱', meaning: 'small' },
  { char: '哭', jyutping: 'huk1', word: '大哭', wordJyutping: 'daai3 huk1', emoji: '😭', meaning: 'cry' },
  { char: '笑', jyutping: 'siu3', word: '大笑', wordJyutping: 'daai3 siu3', emoji: '😄', meaning: 'laugh' },
  { char: '一', jyutping: 'jat1', word: '一個', wordJyutping: 'jat1 go3', emoji: '1️⃣', meaning: 'one' },
  { char: '上', jyutping: 'soeng6', word: '上學', wordJyutping: 'soeng6 hok6', emoji: '🎒', meaning: 'up / go to' },
  { char: '下', jyutping: 'haa6', word: '下雨', wordJyutping: 'haa6 jyu5', emoji: '🌧️', meaning: 'down' },
  { char: '爸', jyutping: 'baa1', word: '爸爸', wordJyutping: 'baa1 baa1', emoji: '👨', meaning: 'dad' },
  { char: '媽', jyutping: 'maa1', word: '媽媽', wordJyutping: 'maa1 maa1', emoji: '👩', meaning: 'mom' },
  { char: '天', jyutping: 'tin1', word: '天空', wordJyutping: 'tin1 hung1', emoji: '🌈', meaning: 'sky / day' },
  { char: '太', jyutping: 'taai3', word: '太陽', wordJyutping: 'taai3 joeng3', emoji: '☀️', meaning: 'too / very' },
  { char: '月', jyutping: 'jyut6', word: '月亮', wordJyutping: 'jyut6 loeng6', emoji: '🌙', meaning: 'moon' },
  { char: '二', jyutping: 'ji6', word: '二月', wordJyutping: 'ji6 jyut6', emoji: '✌️', meaning: 'two' },
]

// 讀詞語 Reading words — each word unlocks once its component characters are learned.
export const WORDS = [
  { word: '大人', jyutping: 'daai6 jan4', emoji: '🧔', meaning: 'grown-up', requires: ['大', '人'] },
  { word: '小人', jyutping: 'siu2 jan4', emoji: '👶', meaning: 'little person', requires: ['小', '人'] },
  { word: '大哭', jyutping: 'daai3 huk1', emoji: '😭', meaning: 'cry loudly', requires: ['大', '哭'] },
  { word: '大笑', jyutping: 'daai3 siu3', emoji: '😄', meaning: 'laugh out loud', requires: ['大', '笑'] },
  { word: '大口', jyutping: 'daai6 hau2', emoji: '😃', meaning: 'big mouth', requires: ['大', '口'] },
  { word: '小口', jyutping: 'siu2 hau2', emoji: '😙', meaning: 'small mouth', requires: ['小', '口'] },
]

export const SENTENCES = []
