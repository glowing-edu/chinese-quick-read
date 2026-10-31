// 第四十八課 Lesson 48 — 生字
export const CHARACTERS = [
  { char: '朝', jyutping: 'ciu4', word: '朝早', wordJyutping: 'ciu4 zou2', emoji: '🌅', meaning: 'morning/towards' },
  { char: '熊', jyutping: 'hung4', word: '熊貓', wordJyutping: 'hung4 maau1', emoji: '🐼', meaning: 'bear' },
  { char: '娃', jyutping: 'waa1', word: '娃娃', wordJyutping: 'waa1 waa1', emoji: '🧸', meaning: 'baby/doll' },
  { char: '汽', jyutping: 'hei3', word: '汽車', wordJyutping: 'hei3 ce1', emoji: '🚗', meaning: 'steam/motor' },
  { char: '車', jyutping: 'ce1', word: '汽車', wordJyutping: 'hei3 ce1', emoji: '🚗', meaning: 'car/vehicle' },
  { char: '北', jyutping: 'bak1', word: '北方', wordJyutping: 'bak1 fong1', emoji: '🧭', meaning: 'north' },
  { char: '京', jyutping: 'ging1', word: '北京', wordJyutping: 'bak1 ging1', emoji: '🏯', meaning: 'capital' },
  { char: '往', jyutping: 'wong5', word: '往來', wordJyutping: 'wong5 loi4', emoji: '↔️', meaning: 'towards/come and go' },
  { char: '嗚', jyutping: 'wu1', word: '嗚嗚', wordJyutping: 'wu1 wu1', emoji: '💨', meaning: 'sound (woo)' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '閃電', jyutping: 'sim2 din6', emoji: '⚡', meaning: 'lightning', requires: ['閃', '電'] },
  { word: '閃亮', jyutping: 'sim2 loeng6', emoji: '✨', meaning: 'shining', requires: ['閃', '亮'] },
  { word: '閃光', jyutping: 'sim2 gwong1', emoji: '📸', meaning: 'flash', requires: ['閃', '光'] },
  { word: '閃動', jyutping: 'sim2 dung6', emoji: '✨', meaning: 'flicker', requires: ['閃', '動'] },
  { word: '閃開', jyutping: 'sim2 hoi1', emoji: '↔️', meaning: 'dodge/move aside', requires: ['閃', '開'] },
  { word: '金魚', jyutping: 'gam1 jyu2', emoji: '🐠', meaning: 'goldfish', requires: ['金', '魚'] },
  { word: '金星', jyutping: 'gam1 sing1', emoji: '⭐', meaning: 'Venus', requires: ['金', '星'] },
  { word: '金子', jyutping: 'gam1 zi2', emoji: '🪙', meaning: 'gold', requires: ['金', '子'] },
  { word: '黃金', jyutping: 'wong4 gam1', emoji: '🪙', meaning: 'gold', requires: ['黃', '金'] },
  { word: '金光', jyutping: 'gam1 gwong1', emoji: '✨', meaning: 'golden light', requires: ['金', '光'] },
  { word: '美好', jyutping: 'mei5 hou2', emoji: '🌈', meaning: 'wonderful', requires: ['美', '好'] },
  { word: '美麗', jyutping: 'mei5 lai6', emoji: '🌸', meaning: 'beautiful', requires: ['美', '麗'] },
  { word: '當中', jyutping: 'dong1 zung1', emoji: '🎯', meaning: 'among', requires: ['當', '中'] },
  { word: '當面', jyutping: 'dong1 min6', emoji: '🙂', meaning: 'face to face', requires: ['當', '面'] },
  { word: '當心', jyutping: 'dong1 sam1', emoji: '⚠️', meaning: 'be careful', requires: ['當', '心'] },
  { word: '當着', jyutping: 'dong1 zoek6', emoji: '👀', meaning: 'in front of', requires: ['當', '着'] },
  { word: '扇子', jyutping: 'sin3 zi2', emoji: '🪭', meaning: 'fan', requires: ['扇', '子'] },
  { word: '扇面', jyutping: 'sin3 min6', emoji: '🪭', meaning: 'fan surface', requires: ['扇', '面'] },
  { word: '電扇', jyutping: 'din6 sin3', emoji: '🌀', meaning: 'electric fan', requires: ['電', '扇'] },
  { word: '一扇門', jyutping: 'jat1 sin3 mun4', emoji: '🚪', meaning: 'a door', requires: ['一', '扇', '門'] },
  { word: '滿天', jyutping: 'mun5 tin1', emoji: '🌌', meaning: 'whole sky', requires: ['滿', '天'] },
  { word: '滿地', jyutping: 'mun5 dei6', emoji: '🌍', meaning: 'whole ground', requires: ['滿', '地'] },
  { word: '滿心', jyutping: 'mun5 sam1', emoji: '💖', meaning: 'whole heart', requires: ['滿', '心'] },
  { word: '滿月', jyutping: 'mun5 jyut6', emoji: '🌕', meaning: 'full moon', requires: ['滿', '月'] },
  { word: '滿了', jyutping: 'mun5 liu5', emoji: '🈵', meaning: 'full', requires: ['滿', '了'] },
  { word: '很滿', jyutping: 'han2 mun5', emoji: '🈵', meaning: 'very full', requires: ['很', '滿'] },
  { word: '幹甚麼', jyutping: 'gon3 sam6 mo1', emoji: '❓', meaning: 'what are you doing', requires: ['幹', '甚', '麼'] },
  { word: '乾巴巴', jyutping: 'gon1 baa1 baa1', emoji: '🏜️', meaning: 'dry', requires: ['乾', '巴'] },
  { word: '真能幹', jyutping: 'zan1 nang4 gon3', emoji: '👍', meaning: 'really capable', requires: ['真', '能', '幹'] },
  { word: '乾草', jyutping: 'gon1 cou2', emoji: '🌾', meaning: 'hay', requires: ['乾', '草'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    title: '短文一',
    sentence: [
      '我愛畫藍藍的天，白白的雲，紅紅的太陽閃閃金光。',
      '我愛畫綠綠的草，美麗的花朵，小鳥在樹上唱歌。',
      '我愛畫可愛的小白兔，聰明的小猴子，長着鬍子的山羊。',
      '我還愛畫我的爺爺、奶奶、爸爸、媽媽和好朋友方方。',
      '我長大了要當畫家。',
    ],
    jyutping: '',
    meaning: '',
  },
  {
    title: '短文二',
    sentence: [
      '下雪了，大地一片雪白。',
      '會畫梅花的小狗在雪地上跑，會畫竹葉的小雞在雪地上跑，會畫扇子的小鴨在雪地上跑，會畫月牙的小馬也在雪地上跑。',
      '跑呀跑，畫呀畫，一邊跑，一邊畫。雪地上畫滿了梅花、竹葉、扇子和月牙。',
      '大家笑着說：「哈哈哈，哈哈哈，我們都是小畫家。不用筆，不用紙，畫得滿地都是畫。」',
    ],
    jyutping: '',
    meaning: '',
  },
  {
    title: '短文三',
    sentence: [
      '面向着北方，背朝着南方。右手指着東，左手指着西。',
      '面向着南方，背朝着北方。右手指着西，左手指着東。',
      '面向着東方，背朝着西方。右手指着南，左手指着北。',
      '面向着西方，背朝着東方。右手指着北，左手指着南。',
    ],
    jyutping: '',
    meaning: '',
  },
]
