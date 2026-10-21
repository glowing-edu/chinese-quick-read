// 第二十一課 Lesson 21 — 生字
export const CHARACTERS = [
  { char: '蟲', jyutping: 'cung4', word: '蟲子', wordJyutping: 'cung4 zi2', emoji: '🐛', meaning: 'insect/worm' },
  { char: '把', jyutping: 'baa2', word: '一把', wordJyutping: 'jat1 baa2', emoji: '🤏', meaning: 'handle/classifier' },
  { char: '鵝', jyutping: 'ngo4', word: '天鵝', wordJyutping: 'tin1 ngo4', emoji: '🦢', meaning: 'goose/swan' },
  { char: '河', jyutping: 'ho4', word: '小河', wordJyutping: 'siu2 ho4', emoji: '🏞️', meaning: 'river' },
  { char: '禮', jyutping: 'lai5', word: '禮貌', wordJyutping: 'lai5 maau6', emoji: '🙏', meaning: 'courtesy/ritual' },
  { char: '背', jyutping: 'bui3', word: '背心', wordJyutping: 'bui3 sam1', emoji: '🎽', meaning: 'back/carry on back' },
  { char: '拿', jyutping: 'naa4', word: '拿來', wordJyutping: 'naa4 loi4', emoji: '✋', meaning: 'take/hold' },
  { char: '裡', jyutping: 'leoi5', word: '家裡', wordJyutping: 'gaa1 leoi5', emoji: '🏠', meaning: 'inside' },
  { char: '後', jyutping: 'hau6', word: '後天', wordJyutping: 'hau6 tin1', emoji: '➡️', meaning: 'back/after' },
  { char: '謝', jyutping: 'ze6', word: '謝謝', wordJyutping: 'ze6 ze6', emoji: '🙏', meaning: 'thank' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '蟲子', jyutping: 'cung4 zi2', emoji: '🐛', meaning: 'insect/worm', requires: ['蟲', '子'] },
  { word: '一把', jyutping: 'jat1 baa2', emoji: '🤏', meaning: 'a handful/handle', requires: ['一', '把'] },
  { word: '把手', jyutping: 'baa2 sau2', emoji: '🤝', meaning: 'handle', requires: ['把', '手'] },
  { word: '把戲', jyutping: 'baa2 hei3', emoji: '🎭', meaning: 'trick/play', requires: ['把', '戲'] },
  { word: '天鵝', jyutping: 'tin1 ngo4', emoji: '🦢', meaning: 'swan', requires: ['天', '鵝'] },
  { word: '白鵝', jyutping: 'baak6 ngo4', emoji: '🦢', meaning: 'white goose', requires: ['白', '鵝'] },
  { word: '小河', jyutping: 'siu2 ho4', emoji: '🏞️', meaning: 'small river', requires: ['小', '河'] },
  { word: '大河', jyutping: 'daai6 ho4', emoji: '🏞️', meaning: 'big river', requires: ['大', '河'] },
  { word: '河水', jyutping: 'ho4 seoi2', emoji: '💧', meaning: 'river water', requires: ['河', '水'] },
  { word: '黃河', jyutping: 'wong4 ho4', emoji: '🏞️', meaning: 'Yellow River', requires: ['黃', '河'] },
  { word: '河馬', jyutping: 'ho4 maa5', emoji: '🦛', meaning: 'hippopotamus', requires: ['河', '馬'] },
  { word: '背心', jyutping: 'bui3 sam1', emoji: '🎽', meaning: 'vest', requires: ['背', '心'] },
  { word: '背上', jyutping: 'bui3 soeng6', emoji: '⬆️', meaning: 'on the back', requires: ['背', '上'] },
  { word: '手背', jyutping: 'sau2 bui3', emoji: '✋', meaning: 'back of hand', requires: ['手', '背'] },
  { word: '背著', jyutping: 'bui3 zoek6', emoji: '🤱', meaning: 'carrying on back', requires: ['背', '著'] },
  { word: '拿著', jyutping: 'naa4 zoek6', emoji: '✋', meaning: 'holding', requires: ['拿', '著'] },
  { word: '拿來', jyutping: 'naa4 loi4', emoji: '➡️', meaning: 'bring/take here', requires: ['拿', '來'] },
  { word: '拿去', jyutping: 'naa4 heoi3', emoji: '⬅️', meaning: 'take away', requires: ['拿', '去'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  { sentence: '下雨了，媽媽把我背在背上，飛快地跑回了家。媽媽對我真好！我要好好地愛我的媽媽。', jyutping: 'haa6 jyu5 liu5，maa1 maa1 baa2 ngo5 bui3 zoi6 bui3 soeng6，fei1 faai3 dik1 paau2 wui4 liu5 gaa1。maa1 maa1 deoi3 ngo5 zan1 hou2！ngo5 jiu3 hou2 hou2 dik1 oi3 ngo5 dik1 maa1 maa1', meaning: 'It rained, mom carried me on her back and ran home quickly. Mom is so good to me!' },
  { sentence: '就要下大雨了，天上的雲變得很黑。白馬媽媽很著急，就在家門口大叫：「小白馬，小白馬，快快回家來，就要下大雨了！」又叫了一會兒，還是不見小白馬回家。', jyutping: 'zau6 jiu3 haa6 daai6 jyu5 liu5，tin1 soeng6 dik1 wan4 bin3 dak1 han2 hak1。baak6 maa5 maa1 maa1 han2 zoek6 gap1，zau6 zoi6 gaa1 mun4 hau2 daai6 giu3：「siu2 baak6 maa5，siu2 baak6 maa5，faai3 faai3 wui4 gaa1 loi4，zau6 jiu3 haa6 daai6 jyu5 liu5！」jau6 giu3 liu5 jat1 wui6 ji4，waan4 si6 bat1 gin3 siu2 baak6 maa5 wui4 gaa1', meaning: 'It is about to rain heavily. White horse mom is worried and calls for little white horse.' },
  { sentence: '過了一會兒，小牛跑來對白馬媽媽說：「小白馬在河邊，帶著小山羊過河去了。河裡的水很大，小山羊過不了河，回不了家。小白馬就帶他過河了。」', jyutping: 'gwo3 liu5 jat1 wui6 ji4，siu2 ngau4 paau2 loi4 deoi3 baak6 maa5 maa1 maa1 syut3：「siu2 baak6 maa5 zoi6 ho4 bin1，daai3 zoek6 siu2 saan1 joeng4 gwo3 ho4 heoi3 liu5。ho4 leoi5 dik1 seoi2 han2 daai6，siu2 saan1 joeng4 gwo3 bat1 liu5 ho4，wui4 bat1 liu5 gaa1。siu2 baak6 maa5 zau6 daai3 taa1 gwo3 ho4 liu5」', meaning: 'After a while, little cow tells white horse mom that little white horse took little goat across the river.' },
  { sentence: '白馬媽媽高興地說：「小白馬真是個好孩子。」', jyutping: 'baak6 maa5 maa1 maa1 gou1 hing3 dik1 syut3：「siu2 baak6 maa5 zan1 si6 go3 hou2 haai4 zi2」', meaning: 'White horse mom happily says little white horse is such a good child.' },
]
