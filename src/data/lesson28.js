// 第二十八課 Lesson 28 — 生字
export const CHARACTERS = [
  { char: '動', jyutping: 'dung6', word: '動物', wordJyutping: 'dung6 mat6', emoji: '🐾', meaning: 'move/action' },
  { char: '關', jyutping: 'gwaan1', word: '關門', wordJyutping: 'gwaan1 mun4', emoji: '🚪', meaning: 'close/relate' },
  { char: '找', jyutping: 'zaau2', word: '找人', wordJyutping: 'zaau2 jan4', emoji: '🔍', meaning: 'find/look for' },
  { char: '按', jyutping: 'on3', word: '按鈕', wordJyutping: 'on3 lau2', emoji: '🔘', meaning: 'press' },
  { char: '年', jyutping: 'nin4', word: '年年', wordJyutping: 'nin4 nin4', emoji: '📅', meaning: 'year' },
  { char: '節', jyutping: 'zit3', word: '節日', wordJyutping: 'zit3 jat6', emoji: '🎉', meaning: 'festival/section' },
  { char: '桃', jyutping: 'tou4', word: '桃花', wordJyutping: 'tou4 faa1', emoji: '🌸', meaning: 'peach' },
  { char: '荷', jyutping: 'ho4', word: '荷花', wordJyutping: 'ho4 faa1', emoji: '🪷', meaning: 'lotus' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '從來', jyutping: 'cung4 loi4', emoji: '➡️', meaning: 'always/ever', requires: ['從', '來'] },
  { word: '從前', jyutping: 'cung4 cin4', emoji: '⬅️', meaning: 'once upon a time', requires: ['從', '前'] },
  { word: '從頭', jyutping: 'cung4 tau4', emoji: '⬆️', meaning: 'from start', requires: ['從', '頭'] },
  { word: '從小', jyutping: 'cung4 siu2', emoji: '👶', meaning: 'since childhood', requires: ['從', '小'] },
  { word: '一同', jyutping: 'jat1 tung4', emoji: '👫', meaning: 'together', requires: ['一', '同'] },
  { word: '同學', jyutping: 'tung4 hok6', emoji: '👫', meaning: 'classmate', requires: ['同', '學'] },
  { word: '同班', jyutping: 'tung4 baan1', emoji: '👫', meaning: 'same class', requires: ['同', '班'] },
  { word: '同時', jyutping: 'tung4 si4', emoji: '⏰', meaning: 'same time', requires: ['同', '時'] },
  { word: '沒有', jyutping: 'mut6 jau5', emoji: '❌', meaning: 'there is not', requires: ['沒', '有'] },
  { word: '沒來', jyutping: 'mut6 loi4', emoji: '❌', meaning: "didn't come", requires: ['沒', '來'] },
  { word: '沒了', jyutping: 'mut6 liu5', emoji: '❌', meaning: 'gone/no more', requires: ['沒', '了'] },
  { word: '沒用', jyutping: 'mut6 jung6', emoji: '❌', meaning: 'useless/no use', requires: ['沒', '用'] },
  { word: '沒去', jyutping: 'mut6 heoi3', emoji: '❌', meaning: "didn't go", requires: ['沒', '去'] },
  { word: '送給', jyutping: 'sung3 kap1', emoji: '🎁', meaning: 'give to', requires: ['送', '給'] },
  { word: '送去', jyutping: 'sung3 heoi3', emoji: '⬅️', meaning: 'send to', requires: ['送', '去'] },
  { word: '送來', jyutping: 'sung3 loi4', emoji: '➡️', meaning: 'send here', requires: ['送', '來'] },
  { word: '送東西', jyutping: 'sung3 dung1 sai1', emoji: '🎁', meaning: 'send/give things', requires: ['送', '東', '西'] },
  { word: '果園', jyutping: 'gwo2 jyun4', emoji: '🍎', meaning: 'orchard', requires: ['果', '園'] },
  { word: '果樹', jyutping: 'gwo2 syu6', emoji: '🍎', meaning: 'fruit tree', requires: ['果', '樹'] },
  { word: '果子', jyutping: 'gwo2 zi2', emoji: '🍎', meaning: 'fruit', requires: ['果', '子'] },
  { word: '水果', jyutping: 'seoi2 gwo2', emoji: '🍎', meaning: 'fruit', requires: ['水', '果'] },
  { word: '乾果', jyutping: 'gon1 gwo2', emoji: '🥜', meaning: 'dried fruit/nuts', requires: ['乾', '果'] },
  { word: '工廠', jyutping: 'gung1 cong2', emoji: '🏭', meaning: 'factory', requires: ['工', '廠'] },
  { word: '工人', jyutping: 'gung1 jan4', emoji: '👷', meaning: 'worker', requires: ['工', '人'] },
  { word: '工地', jyutping: 'gung1 dei6', emoji: '🏗️', meaning: 'construction site', requires: ['工', '地'] },
  { word: '工具', jyutping: 'gung1 geoi6', emoji: '🔧', meaning: 'tools', requires: ['工', '具'] },
  { word: '廠長', jyutping: 'cong2 zoeng2', emoji: '👨‍💼', meaning: 'factory director', requires: ['廠', '長'] },
  { word: '出廠', jyutping: 'ceot1 cong2', emoji: '🏭', meaning: 'ex-factory', requires: ['出', '廠'] },
  { word: '生產', jyutping: 'saang1 caan2', emoji: '🏭', meaning: 'produce', requires: ['生', '產'] },
  { word: '產生', jyutping: 'caan2 sang1', emoji: '🏭', meaning: 'produce/generate', requires: ['產', '生'] },
  { word: '出產', jyutping: 'ceot1 caan2', emoji: '🏭', meaning: 'produce/output', requires: ['出', '產'] },
  { word: '產地', jyutping: 'caan2 dei6', emoji: '🏭', meaning: 'place of origin', requires: ['產', '地'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  { sentence: '我的爸爸、媽媽都在工廠上班。工廠很大，有很多工人。他們生產了很多對人們有用的東西。', jyutping: 'ngo5 dik1 baa1 baa1、maa1 maa1 dou1 zoi6 gung1 cong2 soeng6 baan1。gung1 cong2 han2 daai6，jau5 han2 do1 gung1 jan4。taa1 mun4 saang1 caan2 liu5 han2 do1 deoi3 jan4 mun4 jau5 jung6 dik1 dung1 sai1', meaning: 'My parents work in a factory. They produce many useful things.' },
  { sentence: '小山羊、小白兔、小黃牛和小花狗是好朋友。小山羊住在山下邊，小白兔住在山上邊，小黃牛住在山的前面，小花狗住在山的後面。他們天天早上都從家裡出來，到山下面一同玩遊戲，有時還一同念書，一同唱歌，到了吃飯時，就都回家了。', jyutping: 'siu2 saan1 joeng4、siu2 baak6 tou3、siu2 wong4 ngau4 wo4 siu2 faa1 gau2 si6 hou2 pang4 jau5。siu2 saan1 joeng4 zyu6 zoi6 saan1 haa6 bin1，siu2 baak6 tou3 zyu6 zoi6 saan1 soeng6 bin1，siu2 wong4 ngau4 zyu6 zoi6 saan1 dik1 cin4 min6，siu2 faa1 gau2 zyu6 zoi6 saan1 dik1 hau6 min6。taa1 mun4 tin1 tin1 zou2 soeng6 dou1 cung4 gaa1 leoi5 ceot1 loi4，dou3 saan1 haa6 min6 jat1 tung4 waan4 jau4 hei3，jau5 si4 waan4 jat1 tung4 nim6 syu1，jat1 tung4 coeng3 go1，dou3 liu5 hek3 faan6 si4，zau6 dou1 wui4 gaa1 liu5', meaning: 'Friends living around the mountain play together every day.' },
  { sentence: '有一天，小白兔沒有來，小花狗就去他家找他。白兔媽媽告訴小花狗說，小白兔到爺爺家，給爺爺、奶奶送水果去了。', jyutping: 'jau5 jat1 tin1，siu2 baak6 tou3 mut6 jau5 loi4，siu2 faa1 gau2 zau6 heoi3 taa1 gaa1 zaau2 taa1。baak6 tou3 maa1 maa1 gou3 sou3 siu2 faa1 gau2 syut3，siu2 baak6 tou3 dou3 je4 je4 gaa1，kap1 je4 je4、naai5 naai5 sung3 seoi2 gwo2 heoi3 liu5', meaning: 'One day rabbit didn\'t come, dog went to find him and learned he went to send fruit to grandparents.' },
]
