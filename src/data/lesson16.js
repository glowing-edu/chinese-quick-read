// 第十六課 Lesson 16 — 10 個生字
export const CHARACTERS = [
  { char: '就', jyutping: 'zau6', word: '就是', wordJyutping: 'zau6 si6', emoji: '👍', meaning: 'just/then' },
  { char: '還', jyutping: 'waan4', word: '還有', wordJyutping: 'waan4 jau5', emoji: '➕', meaning: 'still/yet' },
  { char: '快', jyutping: 'faai3', word: '快樂', wordJyutping: 'faai3 lok6', emoji: '⚡', meaning: 'fast/quick' },
  { char: '得', jyutping: 'dak1', word: '得到', wordJyutping: 'dak1 dou2', emoji: '🎁', meaning: 'obtain' },
  { char: '西', jyutping: 'sai1', word: '東西', wordJyutping: 'dung1 sai1', emoji: '🧭', meaning: 'west' },
  { char: '樂', jyutping: 'lok6', word: '快樂', wordJyutping: 'faai3 lok6', emoji: '😄', meaning: 'happy' },
  { char: '到', jyutping: 'dou3', word: '來到', wordJyutping: 'loi4 dou3', emoji: '📍', meaning: 'arrive' },
  { char: '起', jyutping: 'hei2', word: '起來', wordJyutping: 'hei2 loi4', emoji: '⬆️', meaning: 'rise/start' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '跳著', jyutping: 'tiu3 zoek6', emoji: '🤸', meaning: 'jumping', requires: ['跳', '著'] },
  { word: '吃著', jyutping: 'hek3 zoek6', emoji: '🍚', meaning: 'eating', requires: ['吃', '著'] },
  { word: '看著', jyutping: 'hon3 zoek6', emoji: '👀', meaning: 'looking', requires: ['看', '著'] },
  { word: '說著', jyutping: 'syut3 zoek6', emoji: '💬', meaning: 'talking', requires: ['說', '著'] },
  { word: '來了', jyutping: 'loi4 liu5', emoji: '➡️', meaning: 'came', requires: ['來', '了'] },
  { word: '吃了', jyutping: 'hek3 liu5', emoji: '🍚', meaning: 'ate', requires: ['吃', '了'] },
  { word: '去了', jyutping: 'heoi3 liu5', emoji: '⬅️', meaning: 'went', requires: ['去', '了'] },
  { word: '你們', jyutping: 'nei5 mun4', emoji: '👥', meaning: 'you all', requires: ['你', '們'] },
  { word: '又要', jyutping: 'jau6 jiu3', emoji: '🔁', meaning: 'want again', requires: ['又', '要'] },
  { word: '又去', jyutping: 'jau6 heoi3', emoji: '🔁', meaning: 'go again', requires: ['又', '去'] },
  { word: '又哭', jyutping: 'jau6 huk1', emoji: '😭', meaning: 'cry again', requires: ['又', '哭'] },
  { word: '又說', jyutping: 'jau6 syut3', emoji: '🔁', meaning: 'say again', requires: ['又', '說'] },
  { word: '又笑', jyutping: 'jau6 siu3', emoji: '😄', meaning: 'laugh again', requires: ['又', '笑'] },
  { word: '弟弟', jyutping: 'dai6 dai6', emoji: '👦', meaning: 'younger brother', requires: ['弟'] },
  { word: '小弟', jyutping: 'siu2 dai6', emoji: '👦', meaning: 'little brother', requires: ['小', '弟'] },
  { word: '姐妹', jyutping: 'ze2 mui6', emoji: '👧👧', meaning: 'sisters', requires: ['姐', '妹'] },
  { word: '妹妹', jyutping: 'mui6 mui6', emoji: '👧', meaning: 'younger sister', requires: ['妹'] },
  { word: '小妹', jyutping: 'siu2 mui6', emoji: '👧', meaning: 'little sister', requires: ['小', '妹'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  { sentence: '來，來，來，來上學，大家來上學。去，去，去，去遊戲，大家去遊戲。', jyutping: 'loi4，loi4，loi4，loi4 soeng6 hok6，daai6 gaa1 loi4 soeng6 hok6。heoi3，heoi3，heoi3，heoi3 jau4 hei3，daai6 gaa1 heoi3 jau4 hei3', meaning: 'Come, come, come to school. Go, go, go play.' },
  { sentence: '天上小鳥飛，地上牛羊吃青草。水中魚兒游，貓狗笑著跑又跳。', jyutping: 'tin1 soeng6 siu2 niu5 fei1，dei6 soeng6 ngau4 joeng4 hek3 cing1 cou2。seoi2 zung1 jyu4 ji4 jau4，maau1 gau2 siu3 zoek6 paau2 jau6 tiu3', meaning: 'Birds fly, cattle eat grass. Fish swim, cats and dogs run and jump.' },
  { sentence: '你的弟弟和我的妹妹都在我家學生字，他們學會了好多生字。', jyutping: 'nei5 dik1 dai6 dai6 wo4 ngo5 dik1 mui6 mui6 dou1 zoi6 ngo5 gaa1 hok6 saang1 zi6，taa1 mun4 hok6 wui5 liu5 hou2 do1 saang1 zi6', meaning: 'Your brother and my sister learn characters at my home.' },
  { sentence: '小弟和小妹吃著大米花，跑來跑去地說：「你們要不要吃大米花？真好吃。」', jyutping: 'siu2 dai6 wo4 siu2 mui6 hek3 zoek6 daai6 mai5 faa1，paau2 loi4 paau2 heoi3 dik1 syut3：「nei5 mun4 jiu3 bat1 jiu3 hek3 daai6 mai5 faa1？zan1 hou2 hek3」', meaning: 'Brother and sister eat rice crackers and ask if others want some.' },
]
