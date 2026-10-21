// 第二十七課 Lesson 27 — 生字
export const CHARACTERS = [
  { char: '從', jyutping: 'cung4', word: '從前', wordJyutping: 'cung4 cin4', emoji: '⬅️', meaning: 'from/since' },
  { char: '同', jyutping: 'tung4', word: '同學', wordJyutping: 'tung4 hok6', emoji: '👫', meaning: 'same/together' },
  { char: '沒', jyutping: 'mut6', word: '沒有', wordJyutping: 'mut6 jau5', emoji: '❌', meaning: 'no/not have' },
  { char: '送', jyutping: 'sung3', word: '送給', wordJyutping: 'sung3 kap1', emoji: '🎁', meaning: 'send/give' },
  { char: '果', jyutping: 'gwo2', word: '水果', wordJyutping: 'seoi2 gwo2', emoji: '🍎', meaning: 'fruit/result' },
  { char: '工', jyutping: 'gung1', word: '工人', wordJyutping: 'gung1 jan4', emoji: '👷', meaning: 'work/labor' },
  { char: '廠', jyutping: 'cong2', word: '工廠', wordJyutping: 'gung1 cong2', emoji: '🏭', meaning: 'factory' },
  { char: '產', jyutping: 'caan2', word: '生產', wordJyutping: 'saang1 caan2', emoji: '🏭', meaning: 'produce' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '告訴', jyutping: 'gou3 sou3', emoji: '📢', meaning: 'tell', requires: ['告', '訴'] },
  { word: '念書', jyutping: 'nim6 syu1', emoji: '📚', meaning: 'study/read', requires: ['念', '書'] },
  { word: '念頭', jyutping: 'nim6 tau4', emoji: '💭', meaning: 'idea/thought', requires: ['念', '頭'] },
  { word: '想念', jyutping: 'soeng2 nim6', emoji: '💭', meaning: 'miss', requires: ['想', '念'] },
  { word: '吃飯', jyutping: 'hek3 faan6', emoji: '🍚', meaning: 'eat meal', requires: ['吃', '飯'] },
  { word: '早飯', jyutping: 'zou2 faan6', emoji: '🍳', meaning: 'breakfast', requires: ['早', '飯'] },
  { word: '午飯', jyutping: 'ng5 faan6', emoji: '🍱', meaning: 'lunch', requires: ['午', '飯'] },
  { word: '米飯', jyutping: 'mai5 faan6', emoji: '🍚', meaning: 'rice', requires: ['米', '飯'] },
  { word: '飯盒', jyutping: 'faan6 hap6', emoji: '🍱', meaning: 'lunchbox', requires: ['飯', '盒'] },
  { word: '乖乖', jyutping: 'gwaai1 gwaai1', emoji: '😊', meaning: 'obediently', requires: ['乖'] },
  { word: '乖孩子', jyutping: 'gwaai1 haai4 zi2', emoji: '😊', meaning: 'good child', requires: ['乖', '孩', '子'] },
  { word: '乖寶貝', jyutping: 'gwaai1 bou2 bui3', emoji: '😊', meaning: 'good baby', requires: ['乖', '寶', '貝'] },
  { word: '乖巧', jyutping: 'gwaai1 haau2', emoji: '😊', meaning: 'clever and obedient', requires: ['乖', '巧'] },
  { word: '想你', jyutping: 'soeng2 nei5', emoji: '💭', meaning: 'miss you', requires: ['想', '你'] },
  { word: '想不到', jyutping: 'soeng2 bat1 dou2', emoji: '😲', meaning: 'unexpected', requires: ['想', '不', '到'] },
  { word: '想得到', jyutping: 'soeng2 dak1 dou2', emoji: '💭', meaning: 'can imagine', requires: ['想', '得', '到'] },
  { word: '上面', jyutping: 'soeng6 min6', emoji: '⬆️', meaning: 'above/on top', requires: ['上', '面'] },
  { word: '下面', jyutping: 'haa6 min6', emoji: '⬇️', meaning: 'below/under', requires: ['下', '面'] },
  { word: '正面', jyutping: 'zing3 min6', emoji: '⬆️', meaning: 'front side', requires: ['正', '面'] },
  { word: '對面', jyutping: 'deoi3 min6', emoji: '↔️', meaning: 'opposite side', requires: ['對', '面'] },
  { word: '前面', jyutping: 'cin4 min6', emoji: '⬆️', meaning: 'front side', requires: ['前', '面'] },
  { word: '後面', jyutping: 'hau6 min6', emoji: '⬅️', meaning: 'back side', requires: ['後', '面'] },
  { word: '面具', jyutping: 'min6 geoi6', emoji: '🎭', meaning: 'mask', requires: ['面', '具'] },
  { word: '住房', jyutping: 'zyu6 fong2', emoji: '🏠', meaning: 'housing', requires: ['住', '房'] },
  { word: '站住', jyutping: 'zaam6 zyu6', emoji: '🧍', meaning: 'stop/stay', requires: ['站', '住'] },
  { word: '住家', jyutping: 'zyu6 gaa1', emoji: '🏠', meaning: 'home/residence', requires: ['住', '家'] },
  { word: '住口', jyutping: 'zyu6 hau2', emoji: '🤐', meaning: 'shut up', requires: ['住', '口'] },
  { word: '住手', jyutping: 'zyu6 sau2', emoji: '✋', meaning: 'stop (action)', requires: ['住', '手'] },
  { word: '前後', jyutping: 'cin4 hau6', emoji: '↔️', meaning: 'front and back', requires: ['前', '後'] },
  { word: '前邊', jyutping: 'cin4 bin1', emoji: '➡️', meaning: 'front side', requires: ['前', '邊'] },
  { word: '後邊', jyutping: 'hau6 bin1', emoji: '⬅️', meaning: 'back side', requires: ['後', '邊'] },
  { word: '面前', jyutping: 'min6 cin4', emoji: '⬆️', meaning: 'in front of', requires: ['面', '前'] },
  { word: '前天', jyutping: 'cin4 tin1', emoji: '📆', meaning: 'day before yesterday', requires: ['前', '天'] },
  { word: '前方', jyutping: 'cin4 fong1', emoji: '➡️', meaning: 'front', requires: ['前', '方'] },
  { word: '前頭', jyutping: 'cin4 tau4', emoji: '➡️', meaning: 'front/head', requires: ['前', '頭'] },
  { word: '眼前', jyutping: 'ngaan5 cin4', emoji: '👀', meaning: 'in front of eyes', requires: ['眼', '前'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  { sentence: '我給爺爺和奶奶打電話，告訴他們我學會了好多生字，會念好多書了。又告訴他們，我吃飯吃得又多又快，媽媽說我會長得很高很高。爺爺和奶奶聽了後，都說我是個愛學習又聽話的乖寶寶。', jyutping: 'ngo5 kap1 je4 je4 wo4 naai5 naai5 daa2 din6 waa2，gou3 sou3 taa1 mun4 ngo5 hok6 wui5 liu5 hou2 do1 saang1 zi6，wui5 nim6 hou2 do1 syu1 liu5。jau6 gou3 sou3 taa1 mun4，ngo5 hek3 faan6 hek3 dak1 jau6 do1 jau6 faai3，maa1 maa1 syut3 ngo5 wui5 zoeng2 dak1 han2 gou1 han2 gou1。je4 je4 wo4 naai5 naai5 ting3 liu5 hau6，dou1 syut3 ngo5 si6 go3 oi3 hok6 zaap6 jau6 ting3 waa6 dik1 gwaai1 bou2 bui3', meaning: 'I call grandparents and tell them I learned many characters and read well. They say I am a good obedient child.' },
  { sentence: '小山羊愛叫「媽媽」。想媽媽時，叫「媽媽」；想吃飯時，叫「媽媽」；生氣想哭時，也叫「媽媽」。小牛愛叫「門兒，門兒」，不愛叫「媽媽」。我說小牛好，他長大了，不是天天都叫「媽媽」了。', jyutping: 'siu2 saan1 joeng4 oi3 giu3「maa1 maa1」。soeng2 maa1 maa1 si4，giu3「maa1 maa1」；soeng2 hek3 faan6 si4，giu3「maa1 maa1」；saang1 hei3 soeng2 huk1 si4，jaa5 giu3「maa1 maa1」。siu2 ngau4 oi3 giu3「mun4 ji4，mun4 ji4」，bat1 oi3 giu3「maa1 maa1」。ngo5 syut3 siu2 ngau4 hou2，taa1 zoeng2 daai6 liu5，bat1 si6 tin1 tin1 dou1 giu3「maa1 maa1」liu5', meaning: 'Little goat always calls mom. Little cow calls differently as it grows up.' },
]
