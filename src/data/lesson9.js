// 第九課 Lesson 9 — 8 個生字
export const CHARACTERS = [
  { char: '寶', jyutping: 'bou2', word: '寶貝', wordJyutping: 'bou2 bui3', emoji: '💎', meaning: 'treasure' },
  { char: '在', jyutping: 'zoi6', word: '在家', wordJyutping: 'zoi6 gaa1', emoji: '🏡', meaning: 'at/in' },
  { char: '學', jyutping: 'hok6', word: '學習', wordJyutping: 'hok6 zaap6', emoji: '📚', meaning: 'study' },
  { char: '書', jyutping: 'syu1', word: '看書', wordJyutping: 'hon3 syu1', emoji: '📖', meaning: 'book' },
  { char: '游', jyutping: 'jau4', word: '游水', wordJyutping: 'jau4 seoi2', emoji: '🏊', meaning: 'swim' },
  { char: '友', jyutping: 'jau5', word: '朋友', wordJyutping: 'pang4 jau5', emoji: '🤝', meaning: 'friend' },
  { char: '兒', jyutping: 'ji4', word: '兒子', wordJyutping: 'ji4 zi2', emoji: '👦', meaning: 'child/son' },
  { char: '九', jyutping: 'gau2', word: '九個', wordJyutping: 'gau2 go3', emoji: '9️⃣', meaning: 'nine' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '爺爺', jyutping: 'je4 je4', emoji: '👴', meaning: 'grandpa', requires: ['爺'] },
  { word: '奶奶', jyutping: 'naai5 naai5', emoji: '👵', meaning: 'grandma', requires: ['奶'] },
  { word: '多少', jyutping: 'do1 siu2', emoji: '❓', meaning: 'how many/how much', requires: ['多', '少'] },
  { word: '唱歌', jyutping: 'coeng3 go1', emoji: '🎤', meaning: 'sing', requires: ['唱', '歌'] },
  { word: '愛笑', jyutping: 'oi3 siu3', emoji: '😄', meaning: 'love to laugh', requires: ['愛', '笑'] },
  { word: '愛哭', jyutping: 'oi3 huk1', emoji: '😭', meaning: 'love to cry', requires: ['愛', '哭'] },
  { word: '愛唱', jyutping: 'oi3 coeng3', emoji: '🎵', meaning: 'love to sing', requires: ['愛', '唱'] },
  { word: '不愛', jyutping: 'bat1 oi3', emoji: '🚫', meaning: "don't like/love", requires: ['不', '愛'] },
  { word: '不哭', jyutping: 'bat1 huk1', emoji: '😌', meaning: "don't cry", requires: ['不', '哭'] },
  { word: '不笑', jyutping: 'bat1 siu3', emoji: '😐', meaning: "don't laugh", requires: ['不', '笑'] },
  { word: '不唱', jyutping: 'bat1 coeng3', emoji: '🤫', meaning: "don't sing", requires: ['不', '唱'] },
  { word: '不是', jyutping: 'bat1 si6', emoji: '❌', meaning: 'is not', requires: ['不', '是'] },
  { word: '是不是', jyutping: 'si6 bat1 si6', emoji: '❓', meaning: 'is it?', requires: ['是', '不'] },
  { word: '好不好', jyutping: 'hou2 bat1 hou2', emoji: '👍', meaning: 'ok or not?', requires: ['好', '不'] },
  { word: '不好', jyutping: 'bat1 hou2', emoji: '👎', meaning: 'not good', requires: ['不', '好'] },
  { word: '八日', jyutping: 'baat3 jat6', emoji: '📅', meaning: '8th', requires: ['八', '日'] },
  { word: '八月', jyutping: 'baat3 jyut6', emoji: '📆', meaning: 'August', requires: ['八', '月'] },
  { word: '八天', jyutping: 'baat3 tin1', emoji: '🗓️', meaning: 'eight days', requires: ['八', '天'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    sentence: '明天多雲，有小雨。',
    jyutping: 'ming4 tin1 do1 wan4，jau5 siu2 jyu5',
    meaning: 'Tomorrow cloudy with light rain.',
  },
  {
    sentence: '聰聰愛唱歌。',
    jyutping: 'cung1 cung1 oi3 coeng3 go1',
    meaning: 'Chung-chung loves to sing.',
  },
  {
    sentence: '我家有爺爺、奶奶、爸爸、媽媽和我。',
    jyutping: 'ngo5 gaa1 jau5 je4 je4、naai5 naai5、baa1 baa1、maa1 maa1 wo4 ngo5',
    meaning: 'My family has grandpa, grandma, dad, mom and me.',
  },
  {
    sentence: '爺爺愛我，奶奶愛我，爸爸愛我，媽媽愛我。',
    jyutping: 'je4 je4 oi3 ngo5，naai5 naai5 oi3 ngo5，baa1 baa1 oi3 ngo5，maa1 maa1 oi3 ngo5',
    meaning: 'Grandpa loves me, grandma loves me, dad loves me, mom loves me.',
  },
  {
    sentence: '我愛爺爺，我愛奶奶，我愛爸爸，我愛媽媽。',
    jyutping: 'ngo5 oi3 je4 je4，ngo5 oi3 naai5 naai5，ngo5 oi3 baa1 baa1，ngo5 oi3 maa1 maa1',
    meaning: 'I love grandpa, grandma, dad, mom.',
  },
]
