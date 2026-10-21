// 第四課 Lesson 4 — 8 個生字
export const CHARACTERS = [
  { char: '牛', jyutping: 'ngau4', word: '牛奶', wordJyutping: 'ngau4 naai5', emoji: '🥛', meaning: 'cow' },
  { char: '羊', jyutping: 'joeng4', word: '小羊', wordJyutping: 'siu2 joeng4', emoji: '🐑', meaning: 'sheep' },
  { char: '聰', jyutping: 'cung1', word: '聰明', wordJyutping: 'cung1 ming4', emoji: '🧠', meaning: 'clever' },
  { char: '耳', jyutping: 'ji5', word: '耳仔', wordJyutping: 'ji5 zai2', emoji: '👂', meaning: 'ear' },
  { char: '目', jyutping: 'muk6', word: '節目', wordJyutping: 'git3 muk6', emoji: '📺', meaning: 'eye' },
  { char: '心', jyutping: 'sam1', word: '開心', wordJyutping: 'hoi1 sam1', emoji: '😊', meaning: 'heart' },
  { char: '和', jyutping: 'wo4', word: '和平', wordJyutping: 'wo4 ping4', emoji: '🕊️', meaning: 'and / peace' },
  { char: '四', jyutping: 'sei3', word: '四個', wordJyutping: 'sei3 go3', emoji: '4️⃣', meaning: 'four' },
]

// 讀詞語 Reading words — each word unlocks once its component characters are learned
// (characters may come from any lesson).
export const WORDS = [
  { word: '土地', jyutping: 'tou2 dei6', emoji: '🪴', meaning: 'land / soil', requires: ['土', '地'] },
  { word: '大山', jyutping: 'daai6 saan1', emoji: '🏔️', meaning: 'big mountain', requires: ['大', '山'] },
  { word: '小山', jyutping: 'siu2 saan1', emoji: '⛰️', meaning: 'small hill', requires: ['小', '山'] },
  { word: '土山', jyutping: 'tou2 saan1', emoji: '🟤', meaning: 'earth hill', requires: ['土', '山'] },
  { word: '石山', jyutping: 'sek6 saan1', emoji: '🗿', meaning: 'rocky mountain', requires: ['石', '山'] },
  { word: '火山', jyutping: 'fo2 saan1', emoji: '🌋', meaning: 'volcano', requires: ['火', '山'] },
  { word: '土星', jyutping: 'tou2 sing1', emoji: '🪐', meaning: 'Saturn', requires: ['土', '星'] },
  { word: '木星', jyutping: 'muk6 sing1', emoji: '🪐', meaning: 'Jupiter', requires: ['木', '星'] },
  { word: '好人', jyutping: 'hou2 jan4', emoji: '👍', meaning: 'good person', requires: ['好', '人'] },
  { word: '田地', jyutping: 'tin4 dei6', emoji: '🌾', meaning: 'fields', requires: ['田', '地'] },
  { word: '水田', jyutping: 'seoi2 tin4', emoji: '🏞️', meaning: 'paddy field', requires: ['水', '田'] },
  { word: '我有', jyutping: 'ngo5 jau5', emoji: '🙋', meaning: 'I have', requires: ['我', '有'] },
  { word: '我爸', jyutping: 'ngo5 baa1', emoji: '👨', meaning: 'my dad', requires: ['我', '爸'] },
  { word: '我媽', jyutping: 'ngo5 maa1', emoji: '👩', meaning: 'my mom', requires: ['我', '媽'] },
  { word: '我哭', jyutping: 'ngo5 huk1', emoji: '😭', meaning: 'I cry', requires: ['我', '哭'] },
  { word: '我笑', jyutping: 'ngo5 siu3', emoji: '😄', meaning: 'I laugh', requires: ['我', '笑'] },
  {
    word: '好山好水',
    jyutping: 'hou2 saan1 hou2 seoi2',
    emoji: '🏞️',
    meaning: 'beautiful scenery',
    requires: ['好', '山', '水'],
  },
]

// 讀句子 Sentences — unlock automatically once every character in the sentence is learned.
export const SENTENCES = [
  {
    sentence: '我有好爸爸、好媽媽。',
    jyutping: 'ngo5 jau5 hou2 baa1 baa1、maa1 maa1',
    meaning: 'I have a good dad and a good mom.',
  },
  {
    sentence: '天上有太陽、月亮、星星。',
    jyutping: 'tin1 soeng6 jau5 taai3 joeng3、jyut6 loeng6、sing1 sing1',
    meaning: 'In the sky there is the sun, the moon and the stars.',
  },
  {
    sentence: '地上有土、石、山、水田。',
    jyutping: 'dei6 soeng6 jau5 tou2、sek6、saan1、seoi2 tin4',
    meaning: 'On the ground there is soil, stone, mountains and paddy fields.',
  },
  {
    sentence: '爸爸上山，媽媽下山。',
    jyutping: 'baa1 baa1 soeng6 saan1，maa1 maa1 haa6 saan1',
    meaning: 'Dad goes up the mountain, Mom goes down the mountain.',
  },
]
