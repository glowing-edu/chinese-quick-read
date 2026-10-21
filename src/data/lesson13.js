// 第十三課 Lesson 13 — 9 個生字
export const CHARACTERS = [
  { char: '狗', jyutping: 'gau2', word: '小狗', wordJyutping: 'siu2 gau2', emoji: '🐶', meaning: 'dog' },
  { char: '貓', jyutping: 'maau1', word: '小貓', wordJyutping: 'siu2 maau1', emoji: '🐱', meaning: 'cat' },
  { char: '藍', jyutping: 'laam4', word: '藍天', wordJyutping: 'laam4 tin1', emoji: '💙', meaning: 'blue' },
  { char: '落', jyutping: 'lok6', word: '落下', wordJyutping: 'lok6 haa6', emoji: '⬇️', meaning: 'fall' },
  { char: '真', jyutping: 'zan1', word: '真的', wordJyutping: 'zan1 dik1', emoji: '✨', meaning: 'real/true' },
  { char: '開', jyutping: 'hoi1', word: '開心', wordJyutping: 'hoi1 sam1', emoji: '😊', meaning: 'open' },
  { char: '說', jyutping: 'syut3', word: '說話', wordJyutping: 'syut3 waa6', emoji: '💬', meaning: 'say/speak' },
  { char: '也', jyutping: 'jaa5', word: '也是', wordJyutping: 'jaa5 si6', emoji: '➕', meaning: 'also' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '我們', jyutping: 'ngo5 mun4', emoji: '👨‍👩‍👧', meaning: 'we/us', requires: ['我', '們'] },
  { word: '他們', jyutping: 'taa1 mun4', emoji: '👨‍👩‍👧', meaning: 'they', requires: ['他', '們'] },
  { word: '人們', jyutping: 'jan4 mun4', emoji: '👥', meaning: 'people', requires: ['人', '們'] },
  { word: '孩子們', jyutping: 'haai4 zi2 mun4', emoji: '👶', meaning: 'children', requires: ['孩', '子', '們'] },
  { word: '朋友們', jyutping: 'pang4 jau5 mun4', emoji: '👫', meaning: 'friends', requires: ['朋', '友', '們'] },
  { word: '學生們', jyutping: 'hok6 saang1 mun4', emoji: '🎓', meaning: 'students', requires: ['學', '生', '們'] },
  { word: '春季', jyutping: 'ceon1 gwai3', emoji: '🌸', meaning: 'spring', requires: ['春', '季'] },
  { word: '春天', jyutping: 'ceon1 tin1', emoji: '🌸', meaning: 'spring', requires: ['春', '天'] },
  { word: '春風', jyutping: 'ceon1 fung1', emoji: '🍃', meaning: 'spring breeze', requires: ['春', '風'] },
  { word: '春雨', jyutping: 'ceon1 jyu5', emoji: '🌧️', meaning: 'spring rain', requires: ['春', '雨'] },
  { word: '夏季', jyutping: 'haa6 gwai3', emoji: '☀️', meaning: 'summer', requires: ['夏', '季'] },
  { word: '夏天', jyutping: 'haa6 tin1', emoji: '☀️', meaning: 'summer', requires: ['夏', '天'] },
  { word: '秋季', jyutping: 'cau1 gwai3', emoji: '🍂', meaning: 'autumn', requires: ['秋', '季'] },
  { word: '秋天', jyutping: 'cau1 tin1', emoji: '🍂', meaning: 'autumn', requires: ['秋', '天'] },
  { word: '冬季', jyutping: 'dung1 gwai3', emoji: '⛄', meaning: 'winter', requires: ['冬', '季'] },
  { word: '冬天', jyutping: 'dung1 tin1', emoji: '⛄', meaning: 'winter', requires: ['冬', '天'] },
  { word: '秋風', jyutping: 'cau1 fung1', emoji: '🍂', meaning: 'autumn wind', requires: ['秋', '風'] },
  { word: '四季', jyutping: 'sei3 gwai3', emoji: '📅', meaning: 'four seasons', requires: ['四', '季'] },
  { word: '三個人', jyutping: 'saam1 go3 jan4', emoji: '👥', meaning: 'three people', requires: ['三', '個', '人'] },
  { word: '都不是', jyutping: 'dou1 bat1 si6', emoji: '❌', meaning: 'none of them', requires: ['都', '不', '是'] },
  { word: '都是', jyutping: 'dou1 si6', emoji: '✅', meaning: 'all are', requires: ['都', '是'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  { sentence: '小朋友們天天都唱歌，玩遊戲。', jyutping: 'siu2 pang4 jau5 mun4 tin1 tin1 dou1 coeng3 go1，waan4 jau4 hei3', meaning: 'Children sing and play every day.' },
  { sentence: '我愛學習，我天天都學生字。', jyutping: 'ngo5 oi3 hok6 zaap6，ngo5 tin1 tin1 dou1 hok6 saang1 zi6', meaning: 'I love learning, I learn characters every day.' },
  { sentence: '我們家有五個人：爺爺、奶奶、爸爸、媽媽和我。', jyutping: 'ngo5 mun4 gaa1 jau5 ng5 go3 jan4：je4 je4、naai5 naai5、baa1 baa1、maa1 maa1 wo4 ngo5', meaning: 'Our family has five people.' },
  { sentence: '小雞都在地上遊戲，小魚都在水中遊戲，小鳥都在天上遊戲。', jyutping: 'siu2 gai1 dou1 zoi6 dei6 soeng6 jau4 hei3，siu2 jyu4 dou1 zoi6 seoi2 zung1 jau4 hei3，siu2 niu5 dou1 zoi6 tin1 soeng6 jau4 hei3', meaning: 'Chicks play on ground, fish in water, birds in sky.' },
  { sentence: '春天，大地青青的；夏天，大地綠綠的；秋天，大地黃黃的；冬天，大地白白的。', jyutping: 'ceon1 tin1，daai6 dei6 cing1 cing1 dik1；haa6 tin1，daai6 dei6 luk6 luk6 dik1；cau1 tin1，daai6 dei6 wong4 wong4 dik1；dung1 tin1，daai6 dei6 baak6 baak6 dik1', meaning: 'Spring green earth, summer green, autumn yellow, winter white.' },
]
