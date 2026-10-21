// 第十四課 Lesson 14 — 9 個生字
export const CHARACTERS = [
  { char: '馬', jyutping: 'maa5', word: '大馬', wordJyutping: 'daai6 maa5', emoji: '🐎', meaning: 'horse' },
  { char: '米', jyutping: 'mai5', word: '大米', wordJyutping: 'daai6 mai5', emoji: '🍚', meaning: 'rice' },
  { char: '哥', jyutping: 'go1', word: '哥哥', wordJyutping: 'go1 go1', emoji: '👦', meaning: 'older brother' },
  { char: '姐', jyutping: 'ze2', word: '姐姐', wordJyutping: 'ze2 ze2', emoji: '👧', meaning: 'older sister' },
  { char: '來', jyutping: 'loi4', word: '來去', wordJyutping: 'loi4 heoi3', emoji: '➡️', meaning: 'come' },
  { char: '黑', jyutping: 'hak1', word: '黑色', wordJyutping: 'hak1 sik1', emoji: '⚫', meaning: 'black' },
  { char: '去', jyutping: 'heoi3', word: '去玩', wordJyutping: 'heoi3 waan4', emoji: '⬅️', meaning: 'go' },
  { char: '出', jyutping: 'ceot1', word: '出來', wordJyutping: 'ceot1 loi4', emoji: '🚪', meaning: 'out' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '大狗', jyutping: 'daai6 gau2', emoji: '🐕', meaning: 'big dog', requires: ['大', '狗'] },
  { word: '小狗', jyutping: 'siu2 gau2', emoji: '🐶', meaning: 'puppy', requires: ['小', '狗'] },
  { word: '黃狗', jyutping: 'wong4 gau2', emoji: '🐕', meaning: 'yellow dog', requires: ['黃', '狗'] },
  { word: '黑狗', jyutping: 'hak1 gau2', emoji: '🐕', meaning: 'black dog', requires: ['黑', '狗'] },
  { word: '大貓', jyutping: 'daai6 maau1', emoji: '🐈', meaning: 'big cat', requires: ['大', '貓'] },
  { word: '小貓', jyutping: 'siu2 maau1', emoji: '🐱', meaning: 'kitten', requires: ['小', '貓'] },
  { word: '花貓', jyutping: 'faa1 maau1', emoji: '🐈', meaning: 'tabby cat', requires: ['花', '貓'] },
  { word: '白貓', jyutping: 'baak6 maau1', emoji: '🐈', meaning: 'white cat', requires: ['白', '貓'] },
  { word: '藍天', jyutping: 'laam4 tin1', emoji: '☁️', meaning: 'blue sky', requires: ['藍', '天'] },
  { word: '藍貓', jyutping: 'laam4 maau1', emoji: '🐈', meaning: 'blue cat', requires: ['藍', '貓'] },
  { word: '落下', jyutping: 'lok6 haa6', emoji: '⬇️', meaning: 'fall down', requires: ['落', '下'] },
  { word: '落葉', jyutping: 'lok6 jip6', emoji: '🍂', meaning: 'fallen leaves', requires: ['落', '葉'] },
  { word: '真是', jyutping: 'zan1 si6', emoji: '😲', meaning: 'really is', requires: ['真', '是'] },
  { word: '真的', jyutping: 'zan1 dik1', emoji: '✅', meaning: 'really/truly', requires: ['真', '的'] },
  { word: '天真', jyutping: 'tin1 zan1', emoji: '😇', meaning: 'naive/innocent', requires: ['天', '真'] },
  { word: '開心', jyutping: 'hoi1 sam1', emoji: '😊', meaning: 'happy', requires: ['開', '心'] },
  { word: '開會', jyutping: 'hoi1 wui6', emoji: '👥', meaning: 'meeting', requires: ['開', '會'] },
  { word: '開花', jyutping: 'hoi1 faa1', emoji: '🌸', meaning: 'bloom', requires: ['開', '花'] },
  { word: '開門', jyutping: 'hoi1 mun4', emoji: '🚪', meaning: 'open door', requires: ['開', '門'] },
  { word: '也要', jyutping: 'jaa5 jiu3', emoji: '➕', meaning: 'also want', requires: ['也', '要'] },
  { word: '也是', jyutping: 'jaa5 si6', emoji: '✅', meaning: 'also is', requires: ['也', '是'] },
  { word: '也不要', jyutping: 'jaa5 bat1 jiu3', emoji: '🚫', meaning: "also don't want", requires: ['也', '不', '要'] },
  { word: '也不是', jyutping: 'jaa5 bat1 si6', emoji: '❌', meaning: 'also not', requires: ['也', '不', '是'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  { sentence: '我家的小白狗和小花貓是好朋友。', jyutping: 'ngo5 gaa1 dik1 siu2 baak6 gau2 wo4 siu2 faa1 maau1 si6 hou2 pang4 jau5', meaning: 'My white puppy and tabby cat are good friends.' },
  { sentence: '藍藍的天上有白白的雲。', jyutping: 'laam4 laam4 dik1 tin1 soeng6 jau5 baak6 baak6 dik1 wan4', meaning: 'In the blue sky there are white clouds.' },
  { sentence: '青青的草地上有紅花、黃花和藍花。', jyutping: 'cing1 cing1 dik1 cou2 dei6 soeng6 jau5 hung4 faa1、wong4 faa1 wo4 laam4 faa1', meaning: 'On the green grassland there are red, yellow and blue flowers.' },
  { sentence: '四季是春季、夏季、秋季、冬季。春季草青，夏季花開，秋季葉落，冬季雪飛。', jyutping: 'sei3 gwai3 si6 ceon1 gwai3、haa6 gwai3、cau1 gwai3、dung1 gwai3。ceon1 gwai3 cou2 cing1，haa6 gwai3 faa1 hoi1，cau1 gwai3 jip6 lok6，dung1 gwai3 syut3 fei1', meaning: 'Four seasons: spring/summer/autumn/winter. Grass green, flowers bloom, leaves fall, snow flies.' },
  { sentence: '我學會好多生字，爸爸、媽媽都說我是個愛學習的好孩子。', jyutping: 'ngo5 hok6 wui5 hou2 do1 saang1 zi6，baa1 baa1、maa1 maa1 dou1 syut3 ngo5 si6 go3 oi3 hok6 zaap6 dik1 hou2 haai4 zi2', meaning: "I learned many characters, my parents say I'm a good child who loves to learn." },
]
