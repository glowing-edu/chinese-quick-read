// 第二十九課 Lesson 29 — 生字
export const CHARACTERS = [
  { char: '菊', jyutping: 'guk1', word: '菊花', wordJyutping: 'guk1 faa1', emoji: '🌼', meaning: 'chrysanthemum' },
  { char: '梅', jyutping: 'mui4', word: '梅花', wordJyutping: 'mui4 faa1', emoji: '🌸', meaning: 'plum blossom' },
  { char: '冷', jyutping: 'laang5', word: '天冷', wordJyutping: 'tin1 laang5', emoji: '❄️', meaning: 'cold' },
  { char: '它', jyutping: 'taa1', word: '它的', wordJyutping: 'taa1 dik1', emoji: '🐾', meaning: 'it' },
  { char: '怕', jyutping: 'paa3', word: '怕冷', wordJyutping: 'paa3 laang5', emoji: '😱', meaning: 'fear/afraid' },
  { char: '躲', jyutping: 'do2', word: '躲起來', wordJyutping: 'do2 hei2 loi4', emoji: '🙈', meaning: 'hide' },
  { char: '勇', jyutping: 'jung5', word: '勇敢', wordJyutping: 'jung5 gam2', emoji: '🦸', meaning: 'brave/courage' },
  { char: '敢', jyutping: 'gam2', word: '敢說', wordJyutping: 'gam2 syut3', emoji: '💪', meaning: 'dare' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '動工', jyutping: 'dung6 gung1', emoji: '🏗️', meaning: 'start work/construction', requires: ['動', '工'] },
  { word: '動氣', jyutping: 'dung6 hei3', emoji: '😡', meaning: 'get angry', requires: ['動', '氣'] },
  { word: '動手', jyutping: 'dung6 sau2', emoji: '✋', meaning: 'start work/take action', requires: ['動', '手'] },
  { word: '動聽', jyutping: 'dung6 ting3', emoji: '👂', meaning: 'pleasant to hear', requires: ['動', '聽'] },
  { word: '動心', jyutping: 'dung6 sam1', emoji: '❤️', meaning: 'moved/touched', requires: ['動', '心'] },
  { word: '找東西', jyutping: 'zaau2 dung1 sai1', emoji: '🔍', meaning: 'look for things', requires: ['找', '東', '西'] },
  { word: '找不到', jyutping: 'zaau2 bat1 dou2', emoji: '❌', meaning: 'cannot find', requires: ['找', '不', '到'] },
  { word: '找到', jyutping: 'zaau2 dou2', emoji: '✅', meaning: 'found', requires: ['找', '到'] },
  { word: '找人', jyutping: 'zaau2 jan4', emoji: '🔍', meaning: 'look for someone', requires: ['找', '人'] },
  { word: '動用', jyutping: 'dung6 jung6', emoji: '🔧', meaning: 'use/mobilize', requires: ['動', '用'] },
  { word: '出動', jyutping: 'ceot1 dung6', emoji: '🚀', meaning: 'dispatch/mobilize', requires: ['出', '動'] },
  { word: '開動', jyutping: 'hoi1 dung6', emoji: '🚗', meaning: 'start/move', requires: ['開', '動'] },
  { word: '開關', jyutping: 'hoi1 gwaan1', emoji: '🔌', meaning: 'switch/on-off', requires: ['開', '關'] },
  { word: '關門', jyutping: 'gwaan1 mun4', emoji: '🚪', meaning: 'close door', requires: ['關', '門'] },
  { word: '一年', jyutping: 'jat1 nin4', emoji: '📅', meaning: 'one year', requires: ['一', '年'] },
  { word: '四年', jyutping: 'sei3 nin4', emoji: '📅', meaning: 'four years', requires: ['四', '年'] },
  { word: '青年', jyutping: 'cing1 nin4', emoji: '👨‍🎓', meaning: 'youth', requires: ['青', '年'] },
  { word: '年月', jyutping: 'nin4 jyut6', emoji: '📅', meaning: 'year and month', requires: ['年', '月'] },
  { word: '明年', jyutping: 'ming4 nin4', emoji: '📅', meaning: 'next year', requires: ['明', '年'] },
  { word: '去年', jyutping: 'heoi3 nin4', emoji: '📅', meaning: 'last year', requires: ['去', '年'] },
  { word: '過年', jyutping: 'gwo3 nin4', emoji: '🎊', meaning: 'Chinese New Year', requires: ['過', '年'] },
  { word: '年年', jyutping: 'nin4 nin4', emoji: '📅', meaning: 'every year', requires: ['年'] },
  { word: '節日', jyutping: 'zit3 jat6', emoji: '🎉', meaning: 'festival', requires: ['節', '日'] },
  { word: '季節', jyutping: 'gwai3 zit3', emoji: '🌱', meaning: 'season', requires: ['季', '節'] },
  { word: '春節', jyutping: 'ceon1 zit3', emoji: '🎊', meaning: 'Spring Festival', requires: ['春', '節'] },
  { word: '過節', jyutping: 'gwo3 zit3', emoji: '🎉', meaning: 'celebrate festival', requires: ['過', '節'] },
  { word: '桃樹', jyutping: 'tou4 syu6', emoji: '🌸', meaning: 'peach tree', requires: ['桃', '樹'] },
  { word: '桃花', jyutping: 'tou4 faa1', emoji: '🌸', meaning: 'peach blossom', requires: ['桃', '花'] },
  { word: '桃子', jyutping: 'tou4 zi2', emoji: '🍑', meaning: 'peach fruit', requires: ['桃', '子'] },
  { word: '桃紅', jyutping: 'tou4 hung4', emoji: '🌸', meaning: 'peach pink', requires: ['桃', '紅'] },
  { word: '荷花', jyutping: 'ho4 faa1', emoji: '🪷', meaning: 'lotus flower', requires: ['荷', '花'] },
  { word: '荷葉', jyutping: 'ho4 jip6', emoji: '🪷', meaning: 'lotus leaf', requires: ['荷', '葉'] },
  { word: '關心', jyutping: 'gwaan1 sam1', emoji: '❤️', meaning: 'care/concern', requires: ['關', '心'] },
  { word: '關照', jyutping: 'gwaan1 ziu3', emoji: '❤️', meaning: 'take care', requires: ['關', '照'] },
  { word: '按時', jyutping: 'on3 si4', emoji: '⏰', meaning: 'on time', requires: ['按', '時'] },
  { word: '節約', jyutping: 'zit3 joek3', emoji: '💰', meaning: 'save/frugal', requires: ['節', '約'] },
  { word: '節目', jyutping: 'zit3 muk6', emoji: '📺', meaning: 'program/show', requires: ['節', '目'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  { sentence: '春節到了。爸爸、媽媽都不去上班，我也不去幼稚園了。天天都能和小朋友們玩遊戲，還能和爸爸、媽媽一起去找他們的朋友。還有很多很多好東西吃。真開心！我天天都想過春節！', jyutping: 'ceon1 zit3 dou3 liu5。baa1 baa1、maa1 maa1 dou1 bat1 heoi3 soeng6 baan1，ngo5 jaa5 bat1 heoi3 jau3 zi6 jyun4 liu5。tin1 tin1 dou1 nang4 wo4 siu2 pang4 jau5 mun4 waan4 jau4 hei3，waan4 nang4 wo4 baa1 baa1、maa1 maa1 jat1 hei2 heoi3 zaau2 taa1 mun4 dik1 pang4 jau5。waan4 jau5 han2 do1 han2 do1 hou2 dung1 sai1 hek3。zan1 hoi1 sam1！ngo5 tin1 tin1 dou1 soeng2 gwo3 ceon1 zit3', meaning: 'Spring Festival is here! No school, can play and eat lots of yummy food. So happy!' },
  { sentence: '小猴子的工廠開工了。工廠生產電動玩具。人們只要一按開關，玩具就會動起來。小鳥會飛，小狗會跑，小雞會吃米，小鴨會在水中游泳。你想要會動的玩具嗎？快快到小猴子的工廠去找小猴子。', jyutping: 'siu2 hau4 zi2 dik1 gung1 cong2 hoi1 gung1 liu5。gung1 cong2 saang1 caan2 din6 dung6 waan4 geoi6。jan4 mun4 zi2 jiu3 jat1 on3 hoi1 gwaan1，waan4 geoi6 zau6 wui5 dung6 hei2 loi4。siu2 niu5 wui5 fei1，siu2 gau2 wui5 paau2，siu2 gai1 wui5 hek3 mai5，siu2 aap3 wui5 zoi6 seoi2 zung1 jau4 wing6。nei5 soeng2 jiu3 wui5 dung6 dik1 waan4 geoi6 maa3？faai3 faai3 dou3 siu2 hau4 zi2 dik1 gung1 cong2 heoi3 zaau2 siu2 hau4 zi2', meaning: 'Monkey\'s factory makes battery/electric toys that move when you press the switch. Fun!' },
]
