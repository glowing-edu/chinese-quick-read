// 第二十四課 Lesson 24 — 生字
export const CHARACTERS = [
  { char: '用', jyutping: 'jung6', word: '有用', wordJyutping: 'jau5 jung6', emoji: '🔧', meaning: 'use' },
  { char: '總', jyutping: 'zung2', word: '總是', wordJyutping: 'zung2 si6', emoji: '➕', meaning: 'always/total' },
  { char: '尾', jyutping: 'mei5', word: '尾巴', wordJyutping: 'mei5 baa1', emoji: '🐕', meaning: 'tail' },
  { char: '巴', jyutping: 'baa1', word: '尾巴', wordJyutping: 'mei5 baa1', emoji: '🐾', meaning: 'tail' },
  { char: '玉', jyutping: 'juk6', word: '玉米', wordJyutping: 'juk6 mai5', emoji: '🌽', meaning: 'jade' },
  { char: '尖', jyutping: 'zim1', word: '尖的', wordJyutping: 'zim1 dik1', emoji: '🔺', meaning: 'pointed/sharp' },
  { char: '竹', jyutping: 'zuk1', word: '竹子', wordJyutping: 'zuk1 zi2', emoji: '🎋', meaning: 'bamboo' },
  { char: '苗', jyutping: 'miu4', word: '小苗', wordJyutping: 'siu2 miu4', emoji: '🌱', meaning: 'sprout/seedling' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '小時', jyutping: 'siu2 si4', emoji: '⏰', meaning: 'childhood', requires: ['小', '時'] },
  { word: '正在', jyutping: 'zing3 zoi6', emoji: '⏰', meaning: 'in the process', requires: ['正', '在'] },
  { word: '正是', jyutping: 'zing3 si6', emoji: '✅', meaning: 'exactly is', requires: ['正', '是'] },
  { word: '正好', jyutping: 'zing3 hou2', emoji: '✅', meaning: 'just right', requires: ['正', '好'] },
  { word: '中文', jyutping: 'zung1 man4', emoji: '📚', meaning: 'Chinese', requires: ['中', '文'] },
  { word: '文字', jyutping: 'man4 zi6', emoji: '📝', meaning: 'character/writing', requires: ['文', '字'] },
  { word: '文人', jyutping: 'man4 jan4', emoji: '👨‍🎓', meaning: 'scholar', requires: ['文', '人'] },
  { word: '文明', jyutping: 'man4 ming4', emoji: '🏛️', meaning: 'civilization', requires: ['文', '明'] },
  { word: '文學', jyutping: 'man4 hok6', emoji: '📚', meaning: 'literature', requires: ['文', '學'] },
  { word: '文具', jyutping: 'man4 geoi6', emoji: '✏️', meaning: 'stationery', requires: ['文', '具'] },
  { word: '文具盒', jyutping: 'man4 geoi6 hap6', emoji: '📦', meaning: 'pencil case', requires: ['文', '具', '盒'] },
  { word: '玩具', jyutping: 'waan4 geoi6', emoji: '🧸', meaning: 'toy', requires: ['玩', '具'] },
  { word: '傢俱', jyutping: 'gaa1 geoi6', emoji: '🛋️', meaning: 'furniture', requires: ['傢', '俱'] },
  { word: '畫畫', jyutping: 'waa2 waa2', emoji: '🎨', meaning: 'draw', requires: ['畫'] },
  { word: '畫家', jyutping: 'waa2 gaa1', emoji: '👨‍🎨', meaning: 'painter', requires: ['畫', '家'] },
  { word: '畫筆', jyutping: 'waa2 bat1', emoji: '🖌️', meaning: 'paintbrush', requires: ['畫', '筆'] },
  { word: '筆頭', jyutping: 'bat1 tau4', emoji: '✏️', meaning: 'pen tip', requires: ['筆', '頭'] },
  { word: '長大', jyutping: 'zoeng2 daai6', emoji: '📈', meaning: 'grow up', requires: ['長', '大'] },
  { word: '長高', jyutping: 'zoeng2 gou1', emoji: '📈', meaning: 'grow tall', requires: ['長', '高'] },
  { word: '生長', jyutping: 'saang1 zoeng2', emoji: '🌱', meaning: 'grow', requires: ['生', '長'] },
  { word: '成長', jyutping: 'sing4 zoeng2', emoji: '📈', meaning: 'growth', requires: ['成', '長'] },
  { word: '放著', jyutping: 'fong3 zoek6', emoji: '⬇️', meaning: 'putting', requires: ['放', '著'] },
  { word: '放開', jyutping: 'fong3 hoi1', emoji: '🔓', meaning: 'let go', requires: ['放', '開'] },
  { word: '放大', jyutping: 'fong3 daai6', emoji: '🔍', meaning: 'enlarge', requires: ['放', '大'] },
  { word: '放火', jyutping: 'fong3 fo2', emoji: '🔥', meaning: 'set fire', requires: ['放', '火'] },
  { word: '放心', jyutping: 'fong3 sam1', emoji: '😌', meaning: 'rest assured', requires: ['放', '心'] },
  { word: '放學', jyutping: 'fong3 hok6', emoji: '🎒', meaning: 'end of school', requires: ['放', '學'] },
  { word: '放牛', jyutping: 'fong3 ngau4', emoji: '🐮', meaning: 'graze cattle', requires: ['放', '牛'] },
  { word: '放羊', jyutping: 'fong3 joeng4', emoji: '🐑', meaning: 'graze sheep', requires: ['放', '羊'] },
  { word: '放手', jyutping: 'fong3 sau2', emoji: '🤝', meaning: 'let go', requires: ['放', '手'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  { sentence: '我們把筆、尺子、刀子都叫做「文具」，放文具的盒子，就叫做「文具盒」。', jyutping: 'ngo5 mun4 baa2 bat1、cek3 zi2、dou1 zi2 dou1 giu3 zou6「man4 geoi6」，fong3 man4 geoi6 dik1 hap6 zi2，zau6 giu3 zou6「man4 geoi6 hap6」', meaning: 'Pen, ruler, knife are called stationery; box for them is called pencil case.' },
  { sentence: '方方的文具盒裡放著很多文具，有尺子、筆，還有小刀。他用畫筆畫了很多好看的畫。', jyutping: 'fong1 fong1 dik1 man4 geoi6 hap6 leoi5 fong3 zoek6 han2 do1 man4 geoi6，jau5 cek3 zi2、bat1，waan4 jau5 siu2 dou1。taa1 jung6 waa2 bat1 waa2 liu5 han2 do1 hou2 hon3 dik1 waa2', meaning: 'Fangfang\'s pencil case has many stationery items. He uses paintbrush to draw many nice pictures.' },
  { sentence: '天上有太陽、月亮、星星。太陽公公一出來，天就亮了。他照著爸爸、媽媽去上班，照著我去幼稚園。太陽公公一回家，天就黑了。月亮婆婆出來時，我正做著一個甜甜的夢。', jyutping: 'tin1 soeng6 jau5 taai3 joeng3、jyut6 loeng6、sing1 sing1。taai3 joeng3 gung1 gung1 jat1 ceot1 loi4，tin1 zau6 loeng6 liu5。taa1 ziu3 zoek6 baa1 baa1、maa1 maa1 heoi3 soeng6 baan1，ziu3 zoek6 ngo5 heoi3 jau3 zi6 jyun4。taai3 joeng3 gung1 gung1 jat1 wui4 gaa1，tin1 zau6 hak1 liu5。jyut6 loeng6 po4 po4 ceot1 loi4 si4，ngo5 zing3 zou6 zoek6 jat1 go3 tim4 tim4 dik1 mung6', meaning: 'Sun rises and lights the way for parents to work and me to kindergarten. Moon comes when I am dreaming.' },
]
