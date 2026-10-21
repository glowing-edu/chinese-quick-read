// 第十八課 Lesson 18 — 10 個生字
export const CHARACTERS = [
  { char: '方', jyutping: 'fong1', word: '地方', wordJyutping: 'dei6 fong1', emoji: '📍', meaning: 'place/square' },
  { char: '爬', jyutping: 'paa4', word: '爬山', wordJyutping: 'paa4 saan1', emoji: '🧗', meaning: 'climb' },
  { char: '藏', jyutping: 'cong4', word: '捉迷藏', wordJyutping: 'zuk1 mai4 cong4', emoji: '🙈', meaning: 'hide' },
  { char: '興', jyutping: 'hing3', word: '高興', wordJyutping: 'gou1 hing3', emoji: '😃', meaning: 'happy' },
  { char: '向', jyutping: 'hoeng3', word: '方向', wordJyutping: 'fong1 hoeng3', emoji: '➡️', meaning: 'towards' },
  { char: '對', jyutping: 'deoi3', word: '對不起', wordJyutping: 'deoi3 bat1 hei2', emoji: '🙏', meaning: 'right/correct' },
  { char: '能', jyutping: 'nang4', word: '不能', wordJyutping: 'bat1 nang4', emoji: '🚫', meaning: 'can/able' },
  { char: '叫', jyutping: 'giu3', word: '大叫', wordJyutping: 'daai6 giu3', emoji: '📣', meaning: 'call/shout' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '遊玩', jyutping: 'jau4 waan4', emoji: '🎮', meaning: 'play', requires: ['遊', '玩'] },
  { word: '玩球', jyutping: 'waan4 kau4', emoji: '⚽', meaning: 'play ball', requires: ['玩', '球'] },
  { word: '玩水', jyutping: 'waan4 seoi2', emoji: '🏊', meaning: 'play water', requires: ['玩', '水'] },
  { word: '玩遊戲', jyutping: 'waan4 jau4 hei3', emoji: '🎮', meaning: 'play games', requires: ['玩', '遊', '戲'] },
  { word: '大球', jyutping: 'daai6 kau4', emoji: '🏀', meaning: 'big ball', requires: ['大', '球'] },
  { word: '氣球', jyutping: 'hei3 kau4', emoji: '🎈', meaning: 'balloon', requires: ['氣', '球'] },
  { word: '很好', jyutping: 'han2 hou2', emoji: '👍', meaning: 'very good', requires: ['很', '好'] },
  { word: '很大', jyutping: 'han2 daai6', emoji: '📏', meaning: 'very big', requires: ['很', '大'] },
  { word: '很小', jyutping: 'han2 siu2', emoji: '🔍', meaning: 'very small', requires: ['很', '小'] },
  { word: '高大', jyutping: 'gou1 daai6', emoji: '🗼', meaning: 'tall', requires: ['高', '大'] },
  { word: '高山', jyutping: 'gou1 saan1', emoji: '🏔️', meaning: 'high mountain', requires: ['高', '山'] },
  { word: '高個子', jyutping: 'gou1 go3 zi2', emoji: '👨', meaning: 'tall person', requires: ['高', '個', '子'] },
  { word: '跳高', jyutping: 'tiu3 gou1', emoji: '🧗', meaning: 'high jump', requires: ['跳', '高'] },
  { word: '小鴨子', jyutping: 'siu2 aap3 zi2', emoji: '🦆', meaning: 'duckling', requires: ['小', '鴨', '子'] },
  { word: '哈哈笑', jyutping: 'haa1 haa1 siu3', emoji: '😂', meaning: 'laugh loudly', requires: ['哈', '哈', '笑'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  { sentence: '小黃牛和小山羊一起在山上遊玩，他們玩得哈哈大笑，很是開心。', jyutping: 'siu2 wong4 ngau4 wo4 siu2 saan1 joeng4 jat1 hei2 zoi6 saan1 soeng6 jau4 waan4，taa1 mun4 waan4 dak1 haa1 haa1 daai6 siu3，han2 si6 hoi1 sam1', meaning: 'Cows and goats play on mountain, laughing happily.' },
  { sentence: '小鳥和小雞、小鴨在一起玩。小鳥說：「我要飛到很高的樹上去玩，你們也飛上去玩，好不好？」小鴨說：「我飛不上去。」小雞說：「我也飛不上去。」小鳥也就不飛了，還是和小雞、小鴨一起在地上玩。他們真是好朋友。', jyutping: 'siu2 niu5 wo4 siu2 gai1、siu2 aap3 zoi6 jat1 hei2 waan4。siu2 niu5 syut3：「ngo5 jiu3 fei1 dou3 han2 gou1 dik1 syu6 soeng6 heoi3 waan4，nei5 mun4 jaa5 fei1 soeng6 heoi3 waan4，hou2 bat1 hou2？」siu2 aap3 syut3：「ngo5 fei1 bat1 soeng6 heoi3。」siu2 gai1 syut3：「ngo5 jaa5 fei1 bat1 soeng6 heoi3。」siu2 niu5 jaa5 zau6 bat1 fei1 liu5，waan4 si6 wo4 siu2 gai1、siu2 aap3 jat1 hei2 zoi6 dei6 soeng6 waan4。taa1 mun4 zan1 si6 hou2 pang4 jau5', meaning: 'They play together. Bird wants to fly up tree, but ducks/chickens can’t fly up, so they all play on ground — good friends.' },
]
