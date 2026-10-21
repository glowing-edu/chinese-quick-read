// 第五課 Lesson 5 — 8 個生字
export const CHARACTERS = [
  { char: '明', jyutping: 'ming4', word: '明白', wordJyutping: 'ming4 baak6', emoji: '💡', meaning: 'bright / clear' },
  { char: '頭', jyutping: 'tau4', word: '頭髮', wordJyutping: 'tau4 faat3', emoji: '👤', meaning: 'head' },
  { char: '眉', jyutping: 'mei4', word: '眉毛', wordJyutping: 'mei4 mou4', emoji: '😌', meaning: 'eyebrow' },
  { char: '鼻', jyutping: 'bei6', word: '鼻哥', wordJyutping: 'bei6 go1', emoji: '👃', meaning: 'nose' },
  { char: '手', jyutping: 'sau2', word: '手仔', wordJyutping: 'sau2 zai2', emoji: '✋', meaning: 'hand' },
  { char: '花', jyutping: 'faa1', word: '花園', wordJyutping: 'faa1 jyun4', emoji: '🌸', meaning: 'flower' },
  { char: '樹', jyutping: 'syu6', word: '大樹', wordJyutping: 'daai6 syu6', emoji: '🌳', meaning: 'tree' },
  { char: '五', jyutping: 'ng5', word: '五個', wordJyutping: 'ng5 go3', emoji: '5️⃣', meaning: 'five' },
]

// 讀詞語 Reading words — each word unlocks once its component characters are learned
// (characters may come from any lesson).
export const WORDS = [
  { word: '大牛', jyutping: 'daai6 ngau4', emoji: '🐂', meaning: 'big cow', requires: ['大', '牛'] },
  { word: '小牛', jyutping: 'siu2 ngau4', emoji: '🐮', meaning: 'calf', requires: ['小', '牛'] },
  { word: '水牛', jyutping: 'seoi2 ngau4', emoji: '🦬', meaning: 'water buffalo', requires: ['水', '牛'] },
  { word: '山羊', jyutping: 'saan1 joeng4', emoji: '🐐', meaning: 'goat', requires: ['山', '羊'] },
  { word: '小羊', jyutping: 'siu2 joeng4', emoji: '🐑', meaning: 'lamb', requires: ['小', '羊'] },
  { word: '小心', jyutping: 'siu2 sam1', emoji: '⚠️', meaning: 'be careful', requires: ['小', '心'] },
  { word: '中心', jyutping: 'zung1 sam1', emoji: '🎯', meaning: 'center', requires: ['中', '心'] },
  { word: '心中', jyutping: 'sam1 zung1', emoji: '❤️', meaning: 'in the heart', requires: ['心', '中'] },
  { word: '四月', jyutping: 'sei3 jyut6', emoji: '📅', meaning: 'April', requires: ['四', '月'] },
  { word: '四天', jyutping: 'sei3 tin1', emoji: '🗓️', meaning: 'four days', requires: ['四', '天'] },
]

// 讀句子 Sentences — unlock automatically once every character in the sentence is learned.
export const SENTENCES = [
  {
    sentence: '地上有小草和大樹。',
    jyutping: 'dei6 soeng6 jau5 siu2 cou2 wo4 daai6 syu6',
    meaning: 'On the ground there is grass and big trees.',
  },
  {
    sentence: '草地上有水牛和小山羊。',
    jyutping: 'cou2 dei6 soeng6 jau5 seoi2 ngau4 wo4 siu2 saan1 joeng4',
    meaning: 'On the grassland there are water buffaloes and little goats.',
  },
  {
    sentence: '爸爸和媽媽心中有我。',
    jyutping: 'baa1 baa1 wo4 maa1 maa1 sam1 zung1 jau5 ngo5',
    meaning: 'Dad and Mom have me in their hearts.',
  },
  {
    sentence: '我心中有爸爸和媽媽。',
    jyutping: 'ngo5 sam1 zung1 jau5 baa1 baa1 wo4 maa1 maa1',
    meaning: 'I have Dad and Mom in my heart.',
  },
]
