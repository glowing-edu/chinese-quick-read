// 第十二課 Lesson 12 — 8 個生字
export const CHARACTERS = [
  { char: '們', jyutping: 'mun4', word: '我們', wordJyutping: 'ngo5 mun4', emoji: '👨‍👩‍👧', meaning: '(plural)' },
  { char: '春', jyutping: 'ceon1', word: '春天', wordJyutping: 'ceon1 tin1', emoji: '🌸', meaning: 'spring' },
  { char: '夏', jyutping: 'haa6', word: '夏天', wordJyutping: 'haa6 tin1', emoji: '☀️', meaning: 'summer' },
  { char: '秋', jyutping: 'cau1', word: '秋天', wordJyutping: 'cau1 tin1', emoji: '🍂', meaning: 'autumn' },
  { char: '冬', jyutping: 'dung1', word: '冬天', wordJyutping: 'dung1 tin1', emoji: '⛄', meaning: 'winter' },
  { char: '季', jyutping: 'gwai3', word: '春季', wordJyutping: 'ceon1 gwai3', emoji: '📅', meaning: 'season' },
  { char: '都', jyutping: 'dou1', word: '都是', wordJyutping: 'dou1 si6', emoji: '✔️', meaning: 'all/both' },
  { char: '個', jyutping: 'go3', word: '一個', wordJyutping: 'jat1 go3', emoji: '1️⃣', meaning: 'individual' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '小魚', jyutping: 'siu2 jyu4', emoji: '🐟', meaning: 'small fish', requires: ['小', '魚'] },
  { word: '飛鳥', jyutping: 'fei1 niu5', emoji: '🦅', meaning: 'birds', requires: ['飛', '鳥'] },
  { word: '飛跑', jyutping: 'fei1 paau2', emoji: '🏃', meaning: 'fly and run', requires: ['飛', '跑'] },
  { word: '飛人', jyutping: 'fei1 jan4', emoji: '🦸', meaning: 'flying person', requires: ['飛', '人'] },
  { word: '不要', jyutping: 'bat1 jiu3', emoji: '🚫', meaning: "don't want", requires: ['不', '要'] },
  { word: '不吃', jyutping: 'bat1 hek3', emoji: '🚫', meaning: "don't eat", requires: ['不', '吃'] },
  { word: '愛吃', jyutping: 'oi3 hek3', emoji: '😋', meaning: 'love to eat', requires: ['愛', '吃'] },
  { word: '小鳥', jyutping: 'siu2 niu5', emoji: '🐦', meaning: 'small bird', requires: ['小', '鳥'] },
  { word: '黃鳥', jyutping: 'wong4 niu5', emoji: '🐤', meaning: 'yellow bird', requires: ['黃', '鳥'] },
  { word: '玩遊戲', jyutping: 'waan4 jau4 hei3', emoji: '🎮', meaning: 'play games', requires: ['玩', '遊', '戲'] },
  { word: '要不要', jyutping: 'jiu3 bat1 jiu3', emoji: '❓', meaning: 'want or not?', requires: ['要', '不'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  { sentence: '我看見水中有好多魚，有大魚，有小魚。', jyutping: 'ngo5 hon3 gin3 seoi2 zung1 jau5 hou2 do1 jyu4，jau5 daai6 jyu4，jau5 siu2 jyu4', meaning: 'I see many fish in the water, big and small fish.' },
  { sentence: '小鳥在天上飛，小羊在地上跑。', jyutping: 'siu2 niu5 zoi6 tin1 soeng6 fei1，siu2 joeng4 zoi6 dei6 soeng6 paau2', meaning: 'Birds fly in the sky, lambs run on the ground.' },
  { sentence: '小羊和小牛在青青的草地上吃草。', jyutping: 'siu2 joeng4 wo4 siu2 ngau4 zoi6 cing1 cing1 dik1 cou2 dei6 soeng6 hek3 cou2', meaning: 'Lambs and calves eat grass on the green grassland.' },
  { sentence: '爺爺、奶奶和我愛吃魚，爸爸和媽媽不怎麼愛吃魚。', jyutping: 'je4 je4、naai5 naai5 wo4 ngo5 oi3 hek3 jyu4，baa1 baa1 wo4 maa1 maa1 bat1 cam4 mo1 oi3 hek3 jyu4', meaning: "Grandpa, Grandma and I love fish, but Dad and Mom don't love fish much." },
  { sentence: '我和明明在他家玩遊戲。', jyutping: 'ngo5 wo4 ming4 ming4 zoi6 taa1 gaa1 waan4 jau4 hei3', meaning: 'Ming-ming and I play games at his home.' },
]
