// 第二十六課 Lesson 26 — 生字
export const CHARACTERS = [
  { char: '訴', jyutping: 'sou3', word: '告訴', wordJyutping: 'gou3 sou3', emoji: '📢', meaning: 'tell/sue' },
  { char: '念', jyutping: 'nim6', word: '念書', wordJyutping: 'nim6 syu1', emoji: '📚', meaning: 'read/recite' },
  { char: '飯', jyutping: 'faan6', word: '米飯', wordJyutping: 'mai5 faan6', emoji: '🍚', meaning: 'rice/meal' },
  { char: '乖', jyutping: 'gwaai1', word: '乖孩子', wordJyutping: 'gwaai1 haai4 zi2', emoji: '😊', meaning: 'well-behaved' },
  { char: '想', jyutping: 'soeng2', word: '想念', wordJyutping: 'soeng2 nim6', emoji: '💭', meaning: 'think/miss' },
  { char: '面', jyutping: 'min6', word: '面前', wordJyutping: 'min6 cin4', emoji: '👀', meaning: 'face/surface' },
  { char: '住', jyutping: 'zyu6', word: '住家', wordJyutping: 'zyu6 gaa1', emoji: '🏠', meaning: 'live/reside' },
  { char: '前', jyutping: 'cin4', word: '前面', wordJyutping: 'cin4 min6', emoji: '⬆️', meaning: 'front/before' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '聽見', jyutping: 'ting3 gin3', emoji: '👂', meaning: 'hear', requires: ['聽', '見'] },
  { word: '聽說', jyutping: 'ting3 syut3', emoji: '👂', meaning: 'hear/rumor', requires: ['聽', '說'] },
  { word: '聽話', jyutping: 'ting3 waa6', emoji: '👂', meaning: 'obedient', requires: ['聽', '話'] },
  { word: '好聽', jyutping: 'hou2 ting3', emoji: '👂', meaning: 'nice to hear', requires: ['好', '聽'] },
  { word: '說話', jyutping: 'syut3 waa6', emoji: '💬', meaning: 'talk', requires: ['說', '話'] },
  { word: '猴子', jyutping: 'hau4 zi2', emoji: '🐵', meaning: 'monkey', requires: ['猴', '子'] },
  { word: '猩猩', jyutping: 'sing1 sing1', emoji: '🦍', meaning: 'orangutan/gorilla', requires: ['猩'] },
  { word: '給你', jyutping: 'kap1 nei5', emoji: '🎁', meaning: 'give you', requires: ['給', '你'] },
  { word: '給我', jyutping: 'kap1 ngo5', emoji: '🎁', meaning: 'give me', requires: ['給', '我'] },
  { word: '給他', jyutping: 'kap1 taa1', emoji: '🎁', meaning: 'give him', requires: ['給', '他'] },
  { word: '不給', jyutping: 'bat1 kap1', emoji: '❌', meaning: 'not giving', requires: ['不', '給'] },
  { word: '進來', jyutping: 'zeon3 loi4', emoji: '➡️', meaning: 'come in', requires: ['進', '來'] },
  { word: '進去', jyutping: 'zeon3 heoi3', emoji: '⬅️', meaning: 'go in', requires: ['進', '去'] },
  { word: '進出', jyutping: 'zeon3 ceot1', emoji: '↔️', meaning: 'in and out', requires: ['進', '出'] },
  { word: '進門', jyutping: 'zeon3 mun4', emoji: '🚪', meaning: 'enter door', requires: ['進', '門'] },
  { word: '進口', jyutping: 'zeon3 hau2', emoji: '📥', meaning: 'import/entrance', requires: ['進', '口'] },
  { word: '電話', jyutping: 'din6 waa2', emoji: '📞', meaning: 'telephone', requires: ['電', '話'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  { sentence: '小猴子給小猩猩打電話，請小猩猩到他家去玩，還說有很多好朋友也都來玩。小猩猩很高興，不一會兒就來到了小猴子家。小猩猩一進門，就看到了小山羊、小白兔、小黃狗和小花貓。大家在一起開心地玩「過家家」的遊戲。', jyutping: 'siu2 hau4 zi2 kap1 siu2 sing1 sing1 daa2 din6 waa2，cing2 siu2 sing1 sing1 dou3 taa1 gaa1 heoi3 waan4，waan4 syut3 jau5 han2 do1 hou2 pang4 jau5 jaa5 dou1 loi4 waan4。siu2 sing1 sing1 han2 gou1 hing3，bat1 jat1 wui6 ji4 zau6 loi4 dou3 liu5 siu2 hau4 zi2 gaa1。siu2 sing1 sing1 jat1 zeon3 mun4，zau6 hon3 dou3 liu5 siu2 saan1 joeng4、siu2 baak6 tou3、siu2 wong4 gau2 wo4 siu2 faa1 maau1。daai6 gaa1 zoi6 jat1 hei2 hoi1 sam1 dik1 waan4「gwo3 gaa1 gaa1」dik1 jau4 hei3', meaning: 'Monkey calls gorilla to come play. Many friends are there. They all play house happily.' },
  { sentence: '春天，我和爸爸、媽媽一起到公園去玩。公園裡有很多高高的大樹，在青青的草地上還有很多好看的花。有紅花，有黃花，有藍花，還有白花。小鳥在樹上唱著很好聽的歌。小朋友們在遊樂園裡快樂地玩。還有不少爺爺、奶奶也在公園裡說話看書。我愛公園裡的花草、樹木，愛和我一起玩遊戲的小朋友，也愛公園裡的爺爺和奶奶。', jyutping: 'ceon1 tin1，ngo5 wo4 baa1 baa1、maa1 maa1 jat1 hei2 dou3 gung1 jyun4 heoi3 waan4。gung1 jyun4 leoi5 jau5 han2 do1 gou1 gou1 dik1 daai6 syu6，zoi6 cing1 cing1 dik1 cou2 dei6 soeng6 waan4 jau5 han2 do1 hou2 hon3 dik1 faa1。jau5 hung4 faa1，jau5 wong4 faa1，jau5 laam4 faa1，waan4 jau5 baak6 faa1。siu2 niu5 zoi6 syu6 soeng6 coeng3 zoek6 han2 hou2 ting3 dik1 go1。siu2 pang4 jau5 mun4 zoi6 jau4 lok6 jyun4 leoi5 faai3 lok6 dik1 waan4。waan4 jau5 bat1 siu2 je4 je4、naai5 naai5 jaa5 zoi6 gung1 jyun4 leoi5 syut3 waa6 hon3 syu1。ngo5 oi3 gung1 jyun4 leoi5 dik1 faa1 cou2、syu6 muk6，oi3 wo4 ngo5 jat1 hei2 waan4 jau4 hei3 dik1 siu2 pang4 jau5，jaa5 oi3 gung1 jyun4 leoi5 dik1 je4 je4 wo4 naai5 naai5', meaning: 'In spring park, there are big trees, beautiful flowers, birds singing. I love the park and everyone there.' },
]
