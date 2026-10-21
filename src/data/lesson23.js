// 第二十三課 Lesson 23 — 生字
export const CHARACTERS = [
  { char: '時', jyutping: 'si4', word: '時間', wordJyutping: 'si4 gaan3', emoji: '⏰', meaning: 'time' },
  { char: '正', jyutping: 'zing3', word: '正在', wordJyutping: 'zing3 zoi6', emoji: '✅', meaning: 'just/exact' },
  { char: '文', jyutping: 'man4', word: '中文', wordJyutping: 'zung1 man4', emoji: '📚', meaning: 'language/culture' },
  { char: '具', jyutping: 'geoi6', word: '文具', wordJyutping: 'man4 geoi6', emoji: '✏️', meaning: 'tool/equipment' },
  { char: '筆', jyutping: 'bat1', word: '鉛筆', wordJyutping: 'jyun4 bat1', emoji: '✏️', meaning: 'pen/pencil' },
  { char: '畫', jyutping: 'waa2', word: '畫畫', wordJyutping: 'waa2 waa2', emoji: '🎨', meaning: 'draw/painting' },
  { char: '長', jyutping: 'coeng4', word: '長大', wordJyutping: 'zoeng2 daai6', emoji: '📏', meaning: 'long/grow' },
  { char: '放', jyutping: 'fong3', word: '放下', wordJyutping: 'fong3 haa6', emoji: '⬇️', meaning: 'put/release' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '照著', jyutping: 'ziu3 zoek6', emoji: '☀️', meaning: 'shining on', requires: ['照', '著'] },
  { word: '照看', jyutping: 'ziu3 hon3', emoji: '👀', meaning: 'look after', requires: ['照', '看'] },
  { word: '照明', jyutping: 'ziu3 ming4', emoji: '💡', meaning: 'lighting', requires: ['照', '明'] },
  { word: '甜的', jyutping: 'tim4 dik1', emoji: '🍭', meaning: 'sweet', requires: ['甜', '的'] },
  { word: '做夢', jyutping: 'zou6 mung6', emoji: '💭', meaning: 'dream', requires: ['做', '夢'] },
  { word: '夢見', jyutping: 'mung6 gin3', emoji: '💭', meaning: 'dream of', requires: ['夢', '見'] },
  { word: '夢游', jyutping: 'mung6 jau4', emoji: '💭', meaning: 'sleepwalking', requires: ['夢', '游'] },
  { word: '老人', jyutping: 'lou5 jan4', emoji: '👴', meaning: 'old person', requires: ['老', '人'] },
  { word: '老家', jyutping: 'lou5 gaa1', emoji: '🏠', meaning: 'hometown', requires: ['老', '家'] },
  { word: '尺子', jyutping: 'cek3 zi2', emoji: '📏', meaning: 'ruler', requires: ['尺', '子'] },
  { word: '盒子', jyutping: 'hap6 zi2', emoji: '📦', meaning: 'box', requires: ['盒', '子'] },
  { word: '刀子', jyutping: 'dou1 zi2', emoji: '🔪', meaning: 'knife', requires: ['刀', '子'] },
  { word: '小刀', jyutping: 'siu2 dou1', emoji: '🔪', meaning: 'small knife', requires: ['小', '刀'] },
  { word: '老公公', jyutping: 'lou5 gung1 gung1', emoji: '👴', meaning: 'grandpa (old)', requires: ['老', '公'] },
  { word: '老奶奶', jyutping: 'lou5 naai5 naai5', emoji: '👵', meaning: 'grandma (old)', requires: ['老', '奶'] },
  { word: '老人家', jyutping: 'lou5 jan4 gaa1', emoji: '👴', meaning: 'elderly person', requires: ['老', '人', '家'] },
  { word: '老婆婆', jyutping: 'lou5 po4 po4', emoji: '👵', meaning: 'old lady', requires: ['老', '婆'] },
  { word: '老爺爺', jyutping: 'lou5 je4 je4', emoji: '👴', meaning: 'old grandpa', requires: ['老', '爺'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  { sentence: '我夢見我飛到了天上，和星星、月亮、白雲在一起玩「捉迷藏」的遊戲。', jyutping: 'ngo5 mung6 gin3 ngo5 fei1 dou3 liu5 tin1 soeng6，wo4 sing1 sing1、jyut6 loeng6、baak6 wan4 zoi6 jat1 hei2 waan4「zuk1 mai4 cong4」dik1 jau4 hei3', meaning: 'I dreamed I flew to the sky and played hide-and-seek with stars, moon and clouds.' },
  { sentence: '爸爸的盒子裡有一把刀子和一把尺子。他叫我不要玩刀子。', jyutping: 'baa1 baa1 dik1 hap6 zi2 leoi5 jau5 jat1 baa2 dou1 zi2 wo4 jat1 baa2 cek3 zi2。taa1 giu3 ngo5 bat1 jiu3 waan4 dou1 zi2', meaning: "Dad's box has a knife and a ruler. He told me not to play with the knife." },
  { sentence: '太陽高高照，寶寶起得早，來到幼稚園，見到大家問「你早」。', jyutping: 'taai3 joeng3 gou1 gou1 ziu3，bou2 bou2 hei2 dak1 zou2，loi4 dou3 jau3 zi6 jyun4，gin3 dou3 daai6 gaa1 man6「nei5 zou2」', meaning: 'The sun is shining high. Baby wakes early and greets everyone at kindergarten.' },
  { sentence: '早上，在公園裡，有很多爺爺、奶奶，還有老婆婆、老公公。他們有的在遊玩，有的在看書，還有的又唱又跳。很開心！我和媽媽看著，也很快樂。', jyutping: 'zou2 soeng6，zoi6 gung1 jyun4 leoi5，jau5 han2 do1 je4 je4、naai5 naai5，waan4 jau5 lou5 po4 po4、lou5 gung1 gung1。taa1 mun4 jau5 dik1 zoi6 jau4 waan4，jau5 dik1 zoi6 hon3 syu1，waan4 jau5 dik1 jau6 coeng3 jau6 tiu3。han2 hoi1 sam1！ngo5 wo4 maa1 maa1 hon3 zoek6，jaa5 han2 faai3 lok6', meaning: 'Many elderly people in park - some playing, some reading, some singing and dancing. Very happy!' },
  { sentence: '爺爺、奶奶老了，爸爸、媽媽對他們很好。有好吃的東西，有好看的書，都要他們吃，要他們看。爺爺、奶奶的心裡甜甜的。我也要學我的爸爸和媽媽。', jyutping: 'je4 je4、naai5 naai5 lou5 liu5，baa1 baa1、maa1 maa1 deoi3 taa1 mun4 han2 hou2。jau5 hou2 hek3 dik1 dung1 sai1，jau5 hou2 hon3 dik1 syu1，dou1 jiu3 taa1 mun4 hek3，jiu3 taa1 mun4 hon3。je4 je4、naai5 naai5 dik1 sam1 leoi5 tim4 tim4 dik1。ngo5 jaa5 jiu3 hok6 ngo5 dik1 baa1 baa1 wo4 maa1 maa1', meaning: 'Grandparents are old. We must treat them well. Their hearts are sweet. I must learn from my parents.' },
]
