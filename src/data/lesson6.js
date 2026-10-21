// 第六課 Lesson 6 — 8 個生字
export const CHARACTERS = [
  { char: '草', jyutping: 'cou2', word: '小草', wordJyutping: 'siu2 cou2', emoji: '🌱', meaning: 'grass' },
  { char: '葉', jyutping: 'jip6', word: '樹葉', wordJyutping: 'syu6 jip6', emoji: '🍃', meaning: 'leaf' },
  { char: '日', jyutping: 'jat6', word: '日月', wordJyutping: 'jat6 jyut6', emoji: '🌞', meaning: 'sun/day' },
  { char: '風', jyutping: 'fung1', word: '風雨', wordJyutping: 'fung1 jyu5', emoji: '💨', meaning: 'wind' },
  { char: '雨', jyutping: 'jyu5', word: '下雨', wordJyutping: 'haa6 jyu5', emoji: '🌧️', meaning: 'rain' },
  { char: '的', jyutping: 'dik1', word: '我的', wordJyutping: 'ngo5 dik1', emoji: '🏷️', meaning: '(possessive)' },
  { char: '孩', jyutping: 'haai4', word: '孩子', wordJyutping: 'haai4 zi2', emoji: '🧒', meaning: 'child' },
  { char: '六', jyutping: 'luk6', word: '六個', wordJyutping: 'luk6 go3', emoji: '6️⃣', meaning: 'six' },
]

// 讀詞語 Reading words — each word unlocks once its component characters are learned
// (characters may come from any lesson).
export const WORDS = [
  { word: '聰明', jyutping: 'cung1 ming4', emoji: '🧠', meaning: 'clever/intelligent', requires: ['聰', '明'] },
  { word: '明亮', jyutping: 'ming4 loeng6', emoji: '✨', meaning: 'bright/shiny', requires: ['明', '亮'] },
  { word: '明天', jyutping: 'ming4 tin1', emoji: '📅', meaning: 'tomorrow', requires: ['明', '天'] },
  { word: '明月', jyutping: 'ming4 jyut6', emoji: '🌕', meaning: 'bright moon', requires: ['明', '月'] },
  { word: '眉頭', jyutping: 'mei4 tau4', emoji: '😟', meaning: 'eyebrows / worry', requires: ['眉', '頭'] },
  { word: '鼻頭', jyutping: 'bei6 tau4', emoji: '👃', meaning: 'nose tip', requires: ['鼻', '頭'] },
  { word: '石頭', jyutping: 'sek6 tau4', emoji: '🪨', meaning: 'stone/rock', requires: ['石', '頭'] },
  { word: '木頭', jyutping: 'muk6 tau4', emoji: '🪵', meaning: 'wood/log', requires: ['木', '頭'] },
  { word: '心頭', jyutping: 'sam1 tau4', emoji: '💗', meaning: 'in the heart', requires: ['心', '頭'] },
  { word: '小手', jyutping: 'siu2 sau2', emoji: '✋', meaning: 'small hand', requires: ['小', '手'] },
  { word: '小花', jyutping: 'siu2 faa1', emoji: '🌼', meaning: 'small flower', requires: ['小', '花'] },
  { word: '大樹', jyutping: 'daai6 syu6', emoji: '🌳', meaning: 'big tree', requires: ['大', '樹'] },
  { word: '小樹', jyutping: 'siu2 syu6', emoji: '🌲', meaning: 'small tree', requires: ['小', '樹'] },
  { word: '樹木', jyutping: 'syu6 muk6', emoji: '🌳', meaning: 'trees and shrubs', requires: ['樹', '木'] },
  { word: '五月', jyutping: 'ng5 jyut6', emoji: '📆', meaning: 'May', requires: ['五', '月'] },
  { word: '五天', jyutping: 'ng5 tin1', emoji: '🗓️', meaning: 'five days', requires: ['五', '天'] },
  { word: '手心', jyutping: 'sau2 sam1', emoji: '🤲', meaning: 'palm of hand', requires: ['手', '心'] },
]

// 讀句子 Sentences — unlock automatically once every character in the sentence is learned.
export const SENTENCES = [
  {
    sentence: '我有小手。',
    jyutping: 'ngo5 jau5 siu2 sau2',
    meaning: 'I have small hands.',
  },
  {
    sentence: '頭上有眉、目、耳、鼻和口。',
    jyutping: 'tau4 soeng6 jau5 mei4、muk6、ji5、bei6 wo4 hau2',
    meaning: 'On the head there are eyebrows, eyes, ears, nose and mouth.',
  },
  {
    sentence: '眉下有目，鼻下有口。',
    jyutping: 'mei4 haa6 jau5 muk6，bei6 haa6 jau5 hau2',
    meaning: 'Under the eyebrows there are eyes, under the nose there is mouth.',
  },
  {
    sentence: '樹上有花和葉。',
    jyutping: 'syu6 soeng6 jau5 faa1 wo4 jip6',
    meaning: 'On the tree there are flowers and leaves.',
  },
]
