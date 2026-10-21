// 第十一課 Lesson 11 — 15 個生字
export const CHARACTERS = [
  { char: '會', jyutping: 'wui5', word: '學會', wordJyutping: 'hok6 wui5', emoji: '🎓', meaning: 'can / will' },
  { char: '見', jyutping: 'gin3', word: '看見', wordJyutping: 'hon3 gin3', emoji: '👀', meaning: 'see' },
  { char: '早', jyutping: 'zou2', word: '早上', wordJyutping: 'zou2 soeng6', emoji: '🌅', meaning: 'early' },
  { char: '雪', jyutping: 'syut3', word: '下雪', wordJyutping: 'haa6 syut3', emoji: '❄️', meaning: 'snow' },
  { char: '雞', jyutping: 'gai1', word: '小雞', wordJyutping: 'siu2 gai1', emoji: '🐔', meaning: 'chicken' },
  { char: '綠', jyutping: 'luk6', word: '綠色', wordJyutping: 'luk6 sik1', emoji: '💚', meaning: 'green' },
  { char: '黃', jyutping: 'wong4', word: '黃色', wordJyutping: 'wong4 sik1', emoji: '💛', meaning: 'yellow' },
  { char: '青', jyutping: 'cing1', word: '青草', wordJyutping: 'cing1 cou2', emoji: '🌿', meaning: 'blue/green' },
  { char: '魚', jyutping: 'jyu4', word: '小魚', wordJyutping: 'siu2 jyu4', emoji: '🐟', meaning: 'fish' },
  { char: '做', jyutping: 'zou6', word: '做嘢', wordJyutping: 'zou6 je5', emoji: '✍️', meaning: 'do/make' },
  { char: '飛', jyutping: 'fei1', word: '飛鳥', wordJyutping: 'fei1 niu5', emoji: '🦅', meaning: 'fly' },
  { char: '跑', jyutping: 'paau2', word: '奔跑', wordJyutping: 'ban1 paau2', emoji: '🏃', meaning: 'run' },
  { char: '要', jyutping: 'jiu3', word: '我要', wordJyutping: 'ngo5 jiu3', emoji: '👉', meaning: 'want/need' },
  { char: '吃', jyutping: 'hek3', word: '吃飯', wordJyutping: 'hek3 faan6', emoji: '🍚', meaning: 'eat' },
  { char: '鳥', jyutping: 'niu5', word: '小鳥', wordJyutping: 'siu2 niu5', emoji: '🐦', meaning: 'bird' },
  { char: '他', jyutping: 'taa1', word: '他們', wordJyutping: 'taa1 mun4', emoji: '👨', meaning: 'he/him' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '看見', jyutping: 'hon3 gin3', emoji: '👀', meaning: 'see', requires: ['看', '見'] },
  { word: '會見', jyutping: 'wui5 gin3', emoji: '🤝', meaning: 'meet', requires: ['會', '見'] },
  { word: '學會', jyutping: 'hok6 wui5', emoji: '🎓', meaning: 'learned', requires: ['學', '會'] },
  { word: '早上', jyutping: 'zou2 soeng6', emoji: '🌅', meaning: 'morning', requires: ['早', '上'] },
  { word: '大雪', jyutping: 'daai6 syut3', emoji: '❄️', meaning: 'heavy snow', requires: ['大', '雪'] },
  { word: '小雪', jyutping: 'siu2 syut3', emoji: '❄️', meaning: 'light snow', requires: ['小', '雪'] },
  { word: '雪花', jyutping: 'syut3 faa1', emoji: '❄️', meaning: 'snowflake', requires: ['雪', '花'] },
  { word: '白雪', jyutping: 'baak6 syut3', emoji: '❄️', meaning: 'white snow', requires: ['白', '雪'] },
  { word: '雪人', jyutping: 'syut3 jan4', emoji: '⛄', meaning: 'snowman', requires: ['雪', '人'] },
  { word: '雪山', jyutping: 'syut3 saan1', emoji: '🏔️', meaning: 'snow mountain', requires: ['雪', '山'] },
  { word: '雪地', jyutping: 'syut3 dei6', emoji: '🏞️', meaning: 'snowy ground', requires: ['雪', '地'] },
  { word: '小雞', jyutping: 'siu2 gai1', emoji: '🐤', meaning: 'chick', requires: ['小', '雞'] },
  { word: '大雞', jyutping: 'daai6 gai1', emoji: '🐔', meaning: 'big chicken', requires: ['大', '雞'] },
  { word: '綠草', jyutping: 'luk6 cou2', emoji: '🌱', meaning: 'green grass', requires: ['綠', '草'] },
  { word: '綠葉', jyutping: 'luk6 jip6', emoji: '🍃', meaning: 'green leaves', requires: ['綠', '葉'] },
  { word: '黃花', jyutping: 'wong4 faa1', emoji: '🌻', meaning: 'yellow flower', requires: ['黃', '花'] },
  { word: '黃牛', jyutping: 'wong4 ngau4', emoji: '🐂', meaning: 'yellow cow', requires: ['黃', '牛'] },
  { word: '青草', jyutping: 'cing1 cou2', emoji: '🌿', meaning: 'green grass', requires: ['青', '草'] },
  { word: '下雪天', jyutping: 'haa6 syut3 tin1', emoji: '❄️', meaning: 'snowy day', requires: ['下', '雪', '天'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  { sentence: '我學會好多生字。', jyutping: 'ngo5 hok6 wui5 hou2 do1 saang1 zi6', meaning: 'I learned many new characters.' },
  { sentence: '樹上有愛唱歌的小黃鳥。', jyutping: 'syu6 soeng6 jau5 oi3 coeng3 go1 dik1 siu2 wong4 niu5', meaning: 'There is a little yellow bird that loves to sing on the tree.' },
  { sentence: '天下大雪。早上，我看見地上有好多白雪。', jyutping: 'tin1 haa6 daai6 syut3。zou2 soeng6，ngo5 hon3 gin3 dei6 soeng6 jau5 hou2 do1 baak6 syut3', meaning: 'It snowed heavily. In the morning I saw lots of white snow on the ground.' },
  { sentence: '我和媽媽、爸爸去奶奶家。在奶奶家，我看見大山、水田和水牛。', jyutping: 'ngo5 wo4 maa1 maa1、baa1 baa1 heoi3 naai5 naai5 gaa1。在 naai5 naai5 gaa1，ngo5 hon3 gin3 daai6 saan1、seoi2 tin4 wo4 seoi2 ngau4', meaning: "I went to Grandma's with Mom and Dad. I saw mountains, rice fields and water buffaloes there." },
]
