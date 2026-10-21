// 第十五課 Lesson 15 — 8 個生字
export const CHARACTERS = [
  { char: '跳', jyutping: 'tiu3', word: '跳高', wordJyutping: 'tiu3 gou1', emoji: '🤸', meaning: 'jump' },
  { char: '著', jyutping: 'zoek6', word: '穿著', wordJyutping: 'cyun1 zoek6', emoji: '👗', meaning: '(continuative)' },
  { char: '了', jyutping: 'liu5', word: '完了', wordJyutping: 'jyun4 liu5', emoji: '✅', meaning: 'completed' },
  { char: '你', jyutping: 'nei5', word: '你們', wordJyutping: 'nei5 mun4', emoji: '👤', meaning: 'you' },
  { char: '又', jyutping: 'jau6', word: '又來', wordJyutping: 'jau6 loi4', emoji: '🔁', meaning: 'again/also' },
  { char: '弟', jyutping: 'dai6', word: '弟弟', wordJyutping: 'dai6 dai6', emoji: '👦', meaning: 'younger brother' },
  { char: '妹', jyutping: 'mui6', word: '妹妹', wordJyutping: 'mui6 mui6', emoji: '👧', meaning: 'younger sister' },
  { char: '東', jyutping: 'dung1', word: '東西', wordJyutping: 'dung1 sai1', emoji: '🧭', meaning: 'east' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '大馬', jyutping: 'daai6 maa5', emoji: '🐎', meaning: 'big horse', requires: ['大', '馬'] },
  { word: '小馬', jyutping: 'siu2 maa5', emoji: '🐴', meaning: 'pony', requires: ['小', '馬'] },
  { word: '白馬', jyutping: 'baak6 maa5', emoji: '🐎', meaning: 'white horse', requires: ['白', '馬'] },
  { word: '黑馬', jyutping: 'hak1 maa5', emoji: '🐎', meaning: 'black horse', requires: ['黑', '馬'] },
  { word: '大米', jyutping: 'daai6 mai5', emoji: '🍚', meaning: 'rice', requires: ['大', '米'] },
  { word: '小米', jyutping: 'siu2 mai5', emoji: '🍚', meaning: 'millet', requires: ['小', '米'] },
  { word: '白米', jyutping: 'baak6 mai5', emoji: '🍚', meaning: 'white rice', requires: ['白', '米'] },
  { word: '黑米', jyutping: 'hak1 mai5', emoji: '🍚', meaning: 'black rice', requires: ['黑', '米'] },
  { word: '哥哥', jyutping: 'go1 go1', emoji: '👦', meaning: 'older brother', requires: ['哥'] },
  { word: '大哥', jyutping: 'daai6 go1', emoji: '👦', meaning: 'big brother', requires: ['大', '哥'] },
  { word: '姐姐', jyutping: 'ze2 ze2', emoji: '👧', meaning: 'older sister', requires: ['姐'] },
  { word: '小姐', jyutping: 'siu2 ze2', emoji: '👧', meaning: 'Miss', requires: ['小', '姐'] },
  { word: '天黑', jyutping: 'tin1 hak1', emoji: '🌃', meaning: 'dark', requires: ['天', '黑'] },
  { word: '出來', jyutping: 'ceot1 loi4', emoji: '🚪', meaning: 'come out', requires: ['出', '來'] },
  { word: '出去', jyutping: 'ceot1 heoi3', emoji: '➡️', meaning: 'go out', requires: ['出', '去'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  { sentence: '山羊、黃牛都愛吃青草，大白馬也愛吃青草。小雞不吃青草，他愛吃白米。', jyutping: 'saan1 joeng4、wong4 ngau4 dou1 oi3 hek3 cing1 cou2，daai6 baak6 maa5 jaa5 oi3 hek3 cing1 cou2。siu2 gai1 bat1 hek3 cing1 cou2，taa1 oi3 hek3 baak6 mai5', meaning: 'Goats and cows love grass, big white horse also loves grass. Chicks don’t love grass, they love rice.' },
  { sentence: '小黑馬的爸爸是黑馬，媽媽是白馬。哥哥和姐姐也都是黑馬。', jyutping: 'siu2 hak1 maa5 dik1 baa1 baa1 si6 hak1 maa5，maa1 maa1 si6 baak6 maa5。go1 go1 wo4 ze2 ze2 jaa5 dou1 si6 hak1 maa5', meaning: 'Black pony’s dad is black horse, mom white horse. Older brother and sister also black horses.' },
  { sentence: '下雪天，雪花飛。天是白的，地是白的，樹是白的。我們的雪人也是白的。真好看！', jyutping: 'haa6 syut3 tin1，syut3 faa1 fei1。tin1 si6 baak6 dik1，dei6 si6 baak6 dik1，syu6 si6 baak6 dik1。ngo5 mun4 dik1 syut3 jan4 jaa5 si6 baak6 dik1。zan1 hou2 hon3', meaning: 'Snowy day, snowflakes fly. Sky white, ground white, trees white. Our snowman also white. Beautiful!' },
  { sentence: '太陽出來天亮了，藍天、白雲真好看。太陽下山天黑了，星星、月亮出來了。', jyutping: 'taai3 joeng3 ceot1 loi4 tin1 loeng6 liu5，laam4 tin1、baak6 wan4 zan1 hou2 hon3。taai3 joeng3 haa6 saan1 tin1 hak1 liu5，sing1 sing1、jyut6 loeng6 ceot1 loi4 liu5', meaning: 'Sun comes up, sky bright. Sun sets, dark. Stars and moon come out.' },
]
