// 第二十五課 Lesson 25 — 生字
export const CHARACTERS = [
  { char: '聽', jyutping: 'ting3', word: '聽見', wordJyutping: 'ting3 gin3', emoji: '👂', meaning: 'listen/hear' },
  { char: '話', jyutping: 'waa6', word: '說話', wordJyutping: 'syut3 waa6', emoji: '💬', meaning: 'speech/words' },
  { char: '猴', jyutping: 'hau4', word: '猴子', wordJyutping: 'hau4 zi2', emoji: '🐵', meaning: 'monkey' },
  { char: '猩', jyutping: 'sing1', word: '猩猩', wordJyutping: 'sing1 sing1', emoji: '🦍', meaning: 'ape/gorilla' },
  { char: '給', jyutping: 'kap1', word: '給你', wordJyutping: 'kap1 nei5', emoji: '🎁', meaning: 'give' },
  { char: '進', jyutping: 'zeon3', word: '進來', wordJyutping: 'zeon3 loi4', emoji: '➡️', meaning: 'enter/advance' },
  { char: '告', jyutping: 'gou3', word: '告訴', wordJyutping: 'gou3 sou3', emoji: '📢', meaning: 'tell/announce' },
  { char: '電', jyutping: 'din6', word: '電話', wordJyutping: 'din6 waa2', emoji: '📞', meaning: 'electric/phone' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '有用', jyutping: 'jau5 jung6', emoji: '✅', meaning: 'useful', requires: ['有', '用'] },
  { word: '不用', jyutping: 'bat1 jung6', emoji: '❌', meaning: 'not need to use', requires: ['不', '用'] },
  { word: '用來', jyutping: 'jung6 loi4', emoji: '🔧', meaning: 'used for', requires: ['用', '來'] },
  { word: '用心', jyutping: 'jung6 sam1', emoji: '❤️', meaning: 'carefully/attentively', requires: ['用', '心'] },
  { word: '總是', jyutping: 'zung2 si6', emoji: '✅', meaning: 'always', requires: ['總', '是'] },
  { word: '尾巴', jyutping: 'mei5 baa1', emoji: '🐕', meaning: 'tail', requires: ['尾', '巴'] },
  { word: '巴不得', jyutping: 'baa1 bat1 dak1', emoji: '😆', meaning: 'eager to', requires: ['巴', '不', '得'] },
  { word: '玉米', jyutping: 'juk6 mai5', emoji: '🌽', meaning: 'corn', requires: ['玉', '米'] },
  { word: '玉石', jyutping: 'juk6 sek6', emoji: '💎', meaning: 'jade stone', requires: ['玉', '石'] },
  { word: '玉兔', jyutping: 'juk6 tou3', emoji: '🐰', meaning: 'jade rabbit', requires: ['玉', '兔'] },
  { word: '寶玉', jyutping: 'bou2 juk6', emoji: '💎', meaning: 'precious jade', requires: ['寶', '玉'] },
  { word: '尖的', jyutping: 'zim1 dik1', emoji: '🔺', meaning: 'pointed', requires: ['尖', '的'] },
  { word: '尖刀', jyutping: 'zim1 dou1', emoji: '🔪', meaning: 'sharp knife', requires: ['尖', '刀'] },
  { word: '刀尖', jyutping: 'dou1 zim1', emoji: '🔪', meaning: 'knife tip', requires: ['刀', '尖'] },
  { word: '筆尖', jyutping: 'bat1 zim1', emoji: '✏️', meaning: 'pen tip', requires: ['筆', '尖'] },
  { word: '尖子', jyutping: 'zim1 zi2', emoji: '🔺', meaning: 'tip/top student', requires: ['尖', '子'] },
  { word: '竹子', jyutping: 'zuk1 zi2', emoji: '🎋', meaning: 'bamboo', requires: ['竹', '子'] },
  { word: '竹馬', jyutping: 'zuk1 maa5', emoji: '🐎', meaning: 'bamboo horse', requires: ['竹', '馬'] },
  { word: '竹葉', jyutping: 'zuk1 jip6', emoji: '🍃', meaning: 'bamboo leaves', requires: ['竹', '葉'] },
  { word: '小苗', jyutping: 'siu2 miu4', emoji: '🌱', meaning: 'seedling', requires: ['小', '苗'] },
  { word: '竹苗', jyutping: 'zuk1 miu4', emoji: '🌱', meaning: 'bamboo shoot', requires: ['竹', '苗'] },
  { word: '苗兒', jyutping: 'miu4 ji4', emoji: '🌱', meaning: 'seedling', requires: ['苗', '兒'] },
  { word: '青苗', jyutping: 'cing1 miu4', emoji: '🌱', meaning: 'young sprout', requires: ['青', '苗'] },
  { word: '綠苗', jyutping: 'luk6 miu4', emoji: '🌱', meaning: 'green sprout', requires: ['綠', '苗'] },
  { word: '苗子', jyutping: 'miu4 zi2', emoji: '🌱', meaning: 'seedling/sprout', requires: ['苗', '子'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  { sentence: '幼稚園的小朋友畫了很多好看的畫。有快樂的小兔子，小羊和小牛，有正在看書的小朋友，有長著尾巴的玉米，還有尖尖的竹苗。真好看！', jyutping: 'jau3 zi6 jyun4 dik1 siu2 pang4 jau5 waa2 liu5 han2 do1 hou2 hon3 dik1 waa2。jau5 faai3 lok6 dik1 siu2 tou3，siu2 joeng4 wo4 siu2 ngau4，jau5 zing3 zoi6 hon3 syu1 dik1 siu2 pang4 jau5，jau5 zoeng2 zoek6 mei5 baa1 dik1 juk6 mai5，waan4 jau5 zim1 zim1 dik1 zuk1 miu4。zan1 hou2 hon3', meaning: 'Kindergarten children drew many nice pictures - animals and corn with tail and pointed bamboo shoots.' },
  { sentence: '苗苗的大盒子裡放著好多玩具。有小山羊、小黃牛，有小花貓、小白狗，還有會飛的小鳥、會吃米的小雞、會游水的小鴨子。你愛玩嗎？', jyutping: 'miu4 miu4 dik1 daai6 hap6 zi2 leoi5 fong3 zoek6 hou2 do1 waan4 geoi6。jau5 siu2 saan1 joeng4、siu2 wong4 ngau4，jau5 siu2 faa1 maau1、siu2 baak6 gau2，waan4 jau5 wui5 fei1 dik1 siu2 niu5、wui5 hek3 mai5 dik1 siu2 gai1、wui5 jau4 seoi2 dik1 siu2 aap3 zi2。nei5 oi3 waan4 maa3', meaning: 'Miaomiao\'s big box has many toys - animals and air, land and water. Do you love to play?' },
  { sentence: '小兔子白白學畫畫，總是畫不好，白白急得哭起來，兔媽媽對他說：「不要著急，不要哭。只要用心畫，很快就會畫好的。」白白不哭了，用心地畫起來，真的畫好了一隻小花貓。白白笑了，兔媽媽也高興地笑了。', jyutping: 'siu2 tou3 zi2 baak6 baak6 hok6 waa2 waa2，zung2 si6 waa2 bat1 hou2，baak6 baak6 gap1 dak1 huk1 hei2 loi4，tou3 maa1 maa1 deoi3 taa1 syut3：「bat1 jiu3 zoek6 gap1，bat1 jiu3 huk1。zi2 jiu3 jung6 sam1 waa2，han2 faai3 zau6 wui5 waa2 hou2 dik1。」baak6 baak6 bat1 huk1 liu5，jung6 sam1 dik1 waa2 hei2 loi4，zan1 waa2 hou2 liu5 jat1 zi2 siu2 faa1 maau1。baak6 baak6 siu3 liu5，tou3 maa1 maa1 jaa5 gou1 hing3 dik1 siu3 liu5', meaning: 'Little rabbit Baibai couldn\'t draw well. Mom says draw attentively and you\'ll succeed. He draws a nice cat and both laugh happily.' },
]
