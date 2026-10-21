// 第二十二課 Lesson 22 — 生字
export const CHARACTERS = [
  { char: '照', jyutping: 'ziu3', word: '照著', wordJyutping: 'ziu3 zoek6', emoji: '☀️', meaning: 'shine/illuminate' },
  { char: '婆', jyutping: 'po4', word: '老婆婆', wordJyutping: 'lou5 po4 po4', emoji: '👵', meaning: 'elderly woman' },
  { char: '甜', jyutping: 'tim4', word: '甜的', wordJyutping: 'tim4 dik1', emoji: '🍭', meaning: 'sweet' },
  { char: '夢', jyutping: 'mung6', word: '做夢', wordJyutping: 'zou6 mung6', emoji: '💭', meaning: 'dream' },
  { char: '老', jyutping: 'lou5', word: '老人', wordJyutping: 'lou5 jan4', emoji: '🧓', meaning: 'old' },
  { char: '盒', jyutping: 'hap6', word: '盒子', wordJyutping: 'hap6 zi2', emoji: '📦', meaning: 'box' },
  { char: '尺', jyutping: 'cek3', word: '尺子', wordJyutping: 'cek3 zi2', emoji: '📏', meaning: 'ruler' },
  { char: '刀', jyutping: 'dou1', word: '刀子', wordJyutping: 'dou1 zi2', emoji: '🔪', meaning: 'knife' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '家裡', jyutping: 'gaa1 leoi5', emoji: '🏠', meaning: 'at home', requires: ['家', '裡'] },
  { word: '裡頭', jyutping: 'leoi5 tau4', emoji: '🏠', meaning: 'inside', requires: ['裡', '頭'] },
  { word: '手裡', jyutping: 'sau2 leoi5', emoji: '✋', meaning: 'in hand', requires: ['手', '裡'] },
  { word: '心裡', jyutping: 'sam1 leoi5', emoji: '❤️', meaning: 'in heart', requires: ['心', '裡'] },
  { word: '後天', jyutping: 'hau6 tin1', emoji: '📆', meaning: 'day after tomorrow', requires: ['後', '天'] },
  { word: '後來', jyutping: 'hau6 loi4', emoji: '↪️', meaning: 'later', requires: ['後', '來'] },
  { word: '後頭', jyutping: 'hau6 tau4', emoji: '⬅️', meaning: 'behind', requires: ['後', '頭'] },
  { word: '後門', jyutping: 'hau6 mun4', emoji: '🚪', meaning: 'back door', requires: ['後', '門'] },
  { word: '後背', jyutping: 'hau6 bui3', emoji: '⬅️', meaning: 'back (body)', requires: ['後', '背'] },
  { word: '謝謝', jyutping: 'ze6 ze6', emoji: '🙏', meaning: 'thank you', requires: ['謝'] },
  { word: '禮貌', jyutping: 'lai5 maau6', emoji: '🙏', meaning: 'polite', requires: ['禮', '貌'] },
  { word: '後邊', jyutping: 'hau6 bin1', emoji: '⬅️', meaning: 'behind (side)', requires: ['後', '邊'] },
  { word: '裡邊', jyutping: 'leoi5 bin1', emoji: '➡️', meaning: 'inside side', requires: ['裡', '邊'] },
  { word: '東邊', jyutping: 'dung1 bin1', emoji: '🧭', meaning: 'east side', requires: ['東', '邊'] },
  { word: '西邊', jyutping: 'sai1 bin1', emoji: '🧭', meaning: 'west side', requires: ['西', '邊'] },
  { word: '河邊', jyutping: 'ho4 bin1', emoji: '🏞️', meaning: 'riverbank', requires: ['河', '邊'] },
  { word: '大班', jyutping: 'daai6 baan1', emoji: '👶', meaning: 'senior class', requires: ['大', '班'] },
  { word: '中班', jyutping: 'zung1 baan1', emoji: '👶', meaning: 'middle class', requires: ['中', '班'] },
  { word: '小班', jyutping: 'siu2 baan1', emoji: '👶', meaning: 'junior class', requires: ['小', '班'] },
  { word: '上班', jyutping: 'soeng6 baan1', emoji: '💼', meaning: 'go to work', requires: ['上', '班'] },
  { word: '下班', jyutping: 'haa6 baan1', emoji: '🏠', meaning: 'off work', requires: ['下', '班'] },
  { word: '幼兒', jyutping: 'jau3 ji4', emoji: '👶', meaning: 'young child', requires: ['幼', '兒'] },
  { word: '幼稚園', jyutping: 'jau3 zi6 jyun4', emoji: '🏫', meaning: 'kindergarten', requires: ['幼', '稚', '園'] },
  { word: '幼小', jyutping: 'jau3 siu2', emoji: '👶', meaning: 'young and small', requires: ['幼', '小'] },
  { word: '幼蟲', jyutping: 'jau3 cung4', emoji: '🐛', meaning: 'larva', requires: ['幼', '蟲'] },
  { word: '公園', jyutping: 'gung1 jyun4', emoji: '🌳', meaning: 'park', requires: ['公', '園'] },
  { word: '花園', jyutping: 'faa1 jyun4', emoji: '🌸', meaning: 'garden', requires: ['花', '園'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  { sentence: '小鴨、小雞和小鵝是好朋友。一天，小鴨和小鵝在河裡游泳，他們一邊游泳，一邊吃水草，玩得很開心。小雞不會游泳，就在河邊吃蟲。後來，小雞要過河去玩，小鵝就把小雞放在背上，遊過了河。', jyutping: 'siu2 aap3、siu2 gai1 wo4 siu2 ngo4 si6 hou2 pang4 jau5。jat1 tin1，siu2 aap3 wo4 siu2 ngo4 zoi6 ho4 leoi5 jau4 wing6，taa1 mun4 jat1 bin1 jau4 wing6，jat1 bin1 hek3 seoi2 cou2，waan4 dak1 han2 hoi1 sam1。siu2 gai1 bat1 wui5 jau4 wing6，zau6 zoi6 ho4 bin1 hek3 cung4。hau6 loi4，siu2 gai1 jiu3 gwo3 ho4 heoi3 waan4，siu2 ngo4 zau6 baa2 siu2 gai1 fong3 zoi6 bui3 soeng6，jau4 gwo3 liu5 ho4', meaning: 'Duck, chicken and goose are friends. Goose carried chicken across the river on its back.' },
  { sentence: '幼稚園裡有很多小朋友。幼稚園裡有大班、中班，還有小班。我在中班學習。', jyutping: 'jau3 zi6 jyun4 leoi5 jau5 han2 do1 siu2 pang4 jau5。jau3 zi6 jyun4 leoi5 jau5 daai6 baan1、zung1 baan1，waan4 jau5 siu2 baan1。ngo5 zoi6 zung1 baan1 hok6 zaap6', meaning: 'Kindergarten has many children - big class, middle class and small class. I am in middle class.' },
  { sentence: '一天，小白兔到小山羊家裡去玩。小山羊和山羊媽媽都很高興。山羊媽媽拿來很多好吃的東西，請小白兔吃。小白兔很有禮貌地說：「謝謝小山羊和山羊媽媽。」', jyutping: 'jat1 tin1，siu2 baak6 tou3 dou3 siu2 saan1 joeng4 gaa1 leoi5 heoi3 waan4。siu2 saan1 joeng4 wo4 saan1 joeng4 maa1 maa1 dou1 han2 gou1 hing3。saan1 joeng4 maa1 maa1 naa4 loi4 han2 do1 hou2 hek3 dik1 dung1 sai1，cing2 siu2 baak6 tou3 hek3。siu2 baak6 tou3 han2 jau5 lai5 maau6 dik1 syut3：「ze6 ze6 siu2 saan1 joeng4 wo4 saan1 joeng4 maa1 maa1」', meaning: 'Little white rabbit visits little goat. Goat mom serves food and rabbit politely says thank you.' },
]
