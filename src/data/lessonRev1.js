// 温習 Revision 1 — uses characters from Lessons 1–10
export const CHARACTERS = []

// 讀詞語 Reading words
export const WORDS = [
  { word: '寶貝', jyutping: 'bou2 bui3', emoji: '💎', meaning: 'treasure/baby', requires: ['寶', '貝'] },
  { word: '學習', jyutping: 'hok6 zaap6', emoji: '📚', meaning: 'study/learn', requires: ['學', '習'] },
  { word: '上學', jyutping: 'soeng6 hok6', emoji: '🎒', meaning: 'go to school', requires: ['上', '學'] },
  { word: '看書', jyutping: 'hon3 syu1', emoji: '📖', meaning: 'read book', requires: ['看', '書'] },
  { word: '看戲', jyutping: 'hon3 hei3', emoji: '🎭', meaning: 'watch show', requires: ['看', '戲'] },
  { word: '遊戲', jyutping: 'jau4 hei3', emoji: '🎮', meaning: 'game/play', requires: ['游', '戲'] },
  { word: '生字', jyutping: 'saang1 zi6', emoji: '🔤', meaning: 'new characters', requires: ['生', '字'] },
  { word: '生氣', jyutping: 'saang1 hei3', emoji: '😡', meaning: 'angry', requires: ['生', '氣'] },
  { word: '氣人', jyutping: 'hei3 jan4', emoji: '😤', meaning: 'annoying/makes angry', requires: ['氣', '人'] },
  { word: '十月', jyutping: 'sap6 jyut6', emoji: '📆', meaning: 'October', requires: ['十', '月'] },
  { word: '十日', jyutping: 'sap6 jat6', emoji: '📅', meaning: '10th', requires: ['十', '日'] },
  { word: '十天', jyutping: 'sap6 tin1', emoji: '🗓️', meaning: 'ten days', requires: ['十', '天'] },
  { word: '好孩子', jyutping: 'hou2 haai4 zi2', emoji: '😊', meaning: 'good child', requires: ['好', '孩', '子'] },
  { word: '小朋友', jyutping: 'siu2 pang4 jau5', emoji: '👦', meaning: 'child/friend', requires: ['小', '朋', '友'] },
  { word: '下雨天', jyutping: 'haa6 jyu5 tin1', emoji: '☔', meaning: 'rainy day', requires: ['下', '雨', '天'] },
  { word: '好朋友', jyutping: 'hou2 pang4 jau5', emoji: '🤝', meaning: 'good friend', requires: ['好', '朋', '友'] },
  { word: '小學生', jyutping: 'siu2 hok6 saang1', emoji: '👧', meaning: 'primary school student', requires: ['小', '學', '生'] },
  { word: '中學生', jyutping: 'zung1 hok6 saang1', emoji: '👦', meaning: 'secondary school student', requires: ['中', '學', '生'] },
  { word: '大學生', jyutping: 'daai6 hok6 saang1', emoji: '👨‍🎓', meaning: 'university student', requires: ['大', '學', '生'] },
  { word: '唱兒歌', jyutping: 'coeng3 ji4 go1', emoji: '🎶', meaning: 'sing children songs', requires: ['唱', '兒', '歌'] },
  { word: '小紅花', jyutping: 'siu2 hung4 faa1', emoji: '🌺', meaning: 'small red flower', requires: ['小', '紅', '花'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    sentence: '小寶是愛學習的好孩子。',
    jyutping: 'siu2 bou2 si6 oi3 hok6 zaap6 dik1 hou2 haai4 zi2',
    meaning: 'Little Bo is a good child who loves to learn.',
  },
  {
    sentence: '爺爺愛看書，奶奶愛看戲，爸爸愛看書，媽媽愛唱歌。',
    jyutping: 'je4 je4 oi3 hon3 syu1，naai5 naai5 oi3 hon3 hei3，baa1 baa1 oi3 hon3 syu1，maa1 maa1 oi3 coeng3 go1',
    meaning: 'Grandpa loves reading, grandma loves shows, dad loves reading, mom loves singing.',
  },
  {
    sentence: '我愛爺爺、奶奶、爸爸和媽媽。我是大家的好寶貝。',
    jyutping: 'ngo5 oi3 je4 je4、naai5 naai5、baa1 baa1 wo4 maa1 maa1。ngo5 si6 daai6 gaa1 dik1 hou2 bou2 bui3',
    meaning: "I love grandpa, grandma, dad and mom. I am everyone's good treasure.",
  },
  {
    sentence: '心心和小葉子是好朋友。',
    jyutping: 'sam1 sam1 wo4 siu2 jip6 zi2 si6 hou2 pang4 jau5',
    meaning: 'Sam-sam and Little Leaf are good friends.',
  },
  {
    sentence: '我愛看書，我愛學習。我是聰明的孩子。',
    jyutping: 'ngo5 oi3 hon3 syu1，ngo5 oi3 hok6 zaap6。ngo5 si6 cung1 ming4 dik1 haai4 zi2',
    meaning: 'I love reading, I love studying. I am a clever child.',
  },
  {
    sentence: '下雨天，我和明明在我家看書。',
    jyutping: 'haa6 jyu5 tin1，ngo5 wo4 ming4 ming4 zoi6 ngo5 gaa1 hon3 syu1',
    meaning: 'On a rainy day, Ming-ming and I read books at my home.',
  },
  {
    sentence: '天上有太陽、月亮、星星和白雲；地上有土、石、山、水、花和樹木。',
    jyutping: 'tin1 soeng6 jau5 taai3 joeng3、jyut6 loeng6、sing1 sing1 wo4 baak6 wan4；dei6 soeng6 jau5 tou2、sek6、saan1、seoi2、faa1 wo4 syu6 muk6',
    meaning: 'In sky: sun, moon, stars, clouds. On ground: soil, stone, mountains, water, flowers, trees.',
  },
  {
    sentence: '不愛生氣、不愛哭的孩子是好孩子。我愛笑，我是好孩子。',
    jyutping: 'bat1 oi3 saang1 hei3、bat1 oi3 huk1 dik1 haai4 zi2 si6 hou2 haai4 zi2。ngo5 oi3 siu3，ngo5 si6 hou2 haai4 zi2',
    meaning: "A child who doesn't get angry or cry is good. I love to laugh, I'm a good child.",
  },
  {
    sentence: '我的好朋友聰聰是小學生，聰聰天天上學。',
    jyutping: 'ngo5 dik1 hou2 pang4 jau5 cung1 cung1 si6 siu2 hok6 saang1，cung1 cung1 tin1 tin1 soeng6 hok6',
    meaning: 'My good friend Chung-chung is a primary school student, he goes to school every day.',
  },
  {
    sentence: '爸爸的爸爸是爺爺。爸爸是爺爺的兒子，我是爸爸的兒子。',
    jyutping: 'baa1 baa1 dik1 baa1 baa1 si6 je4 je4。baa1 baa1 si6 je4 je4 dik1 ji4 zi2，ngo5 si6 baa1 baa1 dik1 ji4 zi2',
    meaning: "Dad's dad is Grandpa. Dad is Grandpa's son, I am Dad's son.",
  },
]
