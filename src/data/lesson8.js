// 第八課 Lesson 8 — 8 個生字
export const CHARACTERS = [
  { char: '愛', jyutping: 'oi3', word: '愛笑', wordJyutping: 'oi3 siu3', emoji: '❤️', meaning: 'love' },
  { char: '爺', jyutping: 'je4', word: '爺爺', wordJyutping: 'je4 je4', emoji: '👴', meaning: 'grandpa' },
  { char: '奶', jyutping: 'naai5', word: '奶奶', wordJyutping: 'naai5 naai5', emoji: '👵', meaning: 'grandma' },
  { char: '少', jyutping: 'siu2', word: '多少', wordJyutping: 'do1 siu2', emoji: '➖', meaning: 'few/little' },
  { char: '歌', jyutping: 'go1', word: '唱歌', wordJyutping: 'coeng3 go1', emoji: '🎤', meaning: 'song' },
  { char: '不', jyutping: 'bat1', word: '不是', wordJyutping: 'bat1 si6', emoji: '❌', meaning: 'no/not' },
  { char: '朋', jyutping: 'pang4', word: '朋友', wordJyutping: 'pang4 jau5', emoji: '👫', meaning: 'friend' },
  { char: '入', jyutping: 'jap6', word: '入去', wordJyutping: 'jap6 heoi3', emoji: '⬇️', meaning: 'enter' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '白雲', jyutping: 'baak6 wan4', emoji: '☁️', meaning: 'white cloud', requires: ['白', '雲'] },
  { word: '白天', jyutping: 'baak6 tin1', emoji: '☀️', meaning: 'daytime', requires: ['白', '天'] },
  { word: '明白', jyutping: 'ming4 baak6', emoji: '💡', meaning: 'understand', requires: ['明', '白'] },
  { word: '紅花', jyutping: 'hung4 faa1', emoji: '🌹', meaning: 'red flower', requires: ['紅', '花'] },
  { word: '紅日', jyutping: 'hung4 jat6', emoji: '🌅', meaning: 'red sun', requires: ['紅', '日'] },
  { word: '火紅', jyutping: 'fo2 hung4', emoji: '🔥', meaning: 'fiery red', requires: ['火', '紅'] },
  { word: '火花', jyutping: 'fo2 faa1', emoji: '✨', meaning: 'spark', requires: ['火', '花'] },
  { word: '是的', jyutping: 'si6 dik1', emoji: '✅', meaning: 'yes', requires: ['是', '的'] },
  { word: '我是', jyutping: 'ngo5 si6', emoji: '🙋', meaning: 'I am', requires: ['我', '是'] },
  { word: '大家', jyutping: 'daai6 gaa1', emoji: '👨‍👩‍👧‍👦', meaning: 'everyone', requires: ['大', '家'] },
  { word: '我家', jyutping: 'ngo5 gaa1', emoji: '🏠', meaning: 'my home', requires: ['我', '家'] },
  { word: '人家', jyutping: 'jan4 gaa1', emoji: '🏘️', meaning: 'others', requires: ['人', '家'] },
  { word: '鼻子', jyutping: 'bei6 zi2', emoji: '👃', meaning: 'nose', requires: ['鼻', '子'] },
  { word: '葉子', jyutping: 'jip6 zi2', emoji: '🍂', meaning: 'leaf', requires: ['葉', '子'] },
  { word: '七月', jyutping: 'cat1 jyut6', emoji: '📆', meaning: 'July', requires: ['七', '月'] },
  { word: '七日', jyutping: 'cat1 jat6', emoji: '📅', meaning: '7th', requires: ['七', '日'] },
  { word: '七天', jyutping: 'cat1 tin1', emoji: '🗓️', meaning: 'seven days', requires: ['七', '天'] },
  { word: '紅太陽', jyutping: 'hung4 taai3 joeng3', emoji: '☀️', meaning: 'red sun', requires: ['紅', '太', '陽'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    sentence: '我是爸爸、媽媽的好孩子。',
    jyutping: 'ngo5 si6 baa1 baa1、maa1 maa1 dik1 hou2 haai4 zi2',
    meaning: 'I am a good child of dad and mom.',
  },
  {
    sentence: '天是太陽、月亮、星星的家。',
    jyutping: 'tin1 si6 taai3 joeng3、jyut6 loeng6、sing1 sing1 dik1 gaa1',
    meaning: 'The sky is home to the sun, moon and stars.',
  },
  {
    sentence: '白天，天上有紅太陽；地上有紅花、白花和小草。',
    jyutping: 'baak6 tin1，tin1 soeng6 jau5 hung4 taai3 joeng3；dei6 soeng6 jau5 hung4 faa1、baak6 faa1 wo4 siu2 cou2',
    meaning: 'In the day, red sun in sky; red flowers, white flowers and grass on ground.',
  },
  {
    sentence: '爺爺、奶奶家有大水牛和小山羊。',
    jyutping: 'je4 je4、naai5 naai5 gaa1 jau5 daai6 seoi2 ngau4 wo4 siu2 saan1 joeng4',
    meaning: 'At Grandpa and Grandma’s home there are buffaloes and little goats.',
  },
]
