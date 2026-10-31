// 第三十九課 Lesson 39 — 生字
export const CHARACTERS = [
  { char: '付', jyutping: 'fu6', word: '付錢', wordJyutping: 'fu6 cin2', emoji: '💵', meaning: 'pay' },
  { char: '頂', jyutping: 'ding2', word: '山頂', wordJyutping: 'saan1 ding2', emoji: '⛰️', meaning: 'top/head with horns' },
  { char: '角', jyutping: 'gok3', word: '牛角', wordJyutping: 'ngau4 gok3', emoji: '🐂', meaning: 'horn/corner' },
  { char: '死', jyutping: 'sei2', word: '死了', wordJyutping: 'sei2 liu5', emoji: '💀', meaning: 'die' },
  { char: '撲', jyutping: 'pok3', word: '撲過去', wordJyutping: 'pok3 gwo3 heoi3', emoji: '🐾', meaning: 'pounce' },
  { char: '期', jyutping: 'kei4', word: '日期', wordJyutping: 'jat6 kei4', emoji: '📅', meaning: 'date/period' },
  { char: '帶', jyutping: 'daai3', word: '帶路', wordJyutping: 'daai3 lou6', emoji: '🚶', meaning: 'lead the way' },
  { char: '分', jyutping: 'fan1', word: '分開', wordJyutping: 'fan1 hoi1', emoji: '✂️', meaning: 'separate/divide' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '知道', jyutping: 'zi1 dou3', emoji: '💡', meaning: 'know', requires: ['知', '道'] },
  { word: '不知道', jyutping: 'bat1 zi1 dou3', emoji: '🤷', meaning: "don't know", requires: ['不', '知', '道'] },
  { word: '知心', jyutping: 'zi1 sam1', emoji: '💞', meaning: 'close/intimate', requires: ['知', '心'] },
  { word: '道路', jyutping: 'dou6 lou6', emoji: '🛣️', meaning: 'road', requires: ['道', '路'] },
  { word: '道謝', jyutping: 'dou6 ze6', emoji: '🙏', meaning: 'thank', requires: ['道', '謝'] },
  { word: '上午', jyutping: 'soeng6 ng5', emoji: '🌤️', meaning: 'morning', requires: ['上', '午'] },
  { word: '中午', jyutping: 'zung1 ng5', emoji: '☀️', meaning: 'noon', requires: ['中', '午'] },
  { word: '下午', jyutping: 'haa6 ng5', emoji: '🌇', meaning: 'afternoon', requires: ['下', '午'] },
  { word: '午飯', jyutping: 'ng5 faan6', emoji: '🍚', meaning: 'lunch', requires: ['午', '飯'] },
  { word: '午睡', jyutping: 'ng5 seoi6', emoji: '😴', meaning: 'afternoon nap', requires: ['午', '睡'] },
  { word: '午前', jyutping: 'ng5 cin4', emoji: '🕚', meaning: 'before noon', requires: ['午', '前'] },
  { word: '午後', jyutping: 'ng5 hau6', emoji: '🕐', meaning: 'after noon', requires: ['午', '後'] },
  { word: '這個', jyutping: 'ze5 go3', emoji: '👉', meaning: 'this one', requires: ['這', '個'] },
  { word: '這裡', jyutping: 'ze5 leoi5', emoji: '📍', meaning: 'here', requires: ['這', '裡'] },
  { word: '這兒', jyutping: 'ze5 ji4', emoji: '📍', meaning: 'here', requires: ['這', '兒'] },
  { word: '這邊', jyutping: 'ze5 bin1', emoji: '➡️', meaning: 'this side', requires: ['這', '邊'] },
  { word: '這樣', jyutping: 'ze5 joeng6', emoji: '👌', meaning: 'like this', requires: ['這', '樣'] },
  { word: '這麼', jyutping: 'ze5 mo1', emoji: '😲', meaning: 'so/this much', requires: ['這', '麼'] },
  { word: '一座山', jyutping: 'jat1 zo6 saan1', emoji: '⛰️', meaning: 'a mountain', requires: ['一', '座', '山'] },
  { word: '山洞', jyutping: 'saan1 dung6', emoji: '🕳️', meaning: 'cave', requires: ['山', '洞'] },
  { word: '洞子', jyutping: 'dung6 zi2', emoji: '🕳️', meaning: 'hole', requires: ['洞', '子'] },
  { word: '洞口', jyutping: 'dung6 hau2', emoji: '🕳️', meaning: 'cave entrance', requires: ['洞', '口'] },
  { word: '什麼', jyutping: 'sam6 mo1', emoji: '❓', meaning: 'what', requires: ['什', '麼'] },
  { word: '害怕', jyutping: 'hoi6 paa3', emoji: '😨', meaning: 'afraid', requires: ['害', '怕'] },
  { word: '害蟲', jyutping: 'hoi6 cung4', emoji: '🐛', meaning: 'pest', requires: ['害', '蟲'] },
  { word: '害鳥', jyutping: 'hoi6 niu5', emoji: '🐦', meaning: 'harmful bird', requires: ['害', '鳥'] },
  { word: '蟲害', jyutping: 'cung4 hoi6', emoji: '🐛', meaning: 'pest damage', requires: ['蟲', '害'] },
  { word: '害人', jyutping: 'hoi6 jan4', emoji: '😈', meaning: 'harm others', requires: ['害', '人'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    title: '三隻羊',
    sentence: [
      '在一座山下，住著三隻羊：白羊、黑羊和黃羊。在山上的洞裡，躲著一隻大灰狼。',
      '一天，白羊上山去吃青草，大灰狼聽見了白羊走路的聲音，就在山洞裡問：「你來做什麼？」白羊說：「上山來吃草。」',
      '「我要吃掉你！」白羊很害怕，趕快逃下了山。',
      '黑羊也上山去吃青草，大灰狼聽見了黑羊走路的聲音，就在山洞裡問：「你來做什麼？」黑羊說：「上山來吃草。」',
      '「我要吃掉你！」黑羊很害怕，也趕快逃下了山。',
      '白羊和黑羊在山下碰見了黃羊，就告訴黃羊說：「你不能上山去吃草了。山洞裡有一隻大灰狼，它要吃掉我們。」黃羊說：',
      '「不要害怕，我們一起來對付它。白羊用頭頂，我和黑羊用角頂，把大灰狼頂下山去，摔死它！」',
      '三隻羊就一起上了山。大灰狼聽見了它們走路的聲音，就在山洞裡問：「誰呀？」',
      '三隻羊一起說：「我們來吃草。」',
      '「我要吃掉你們！」大灰狼一邊說，一邊從洞裡出來，向三隻羊撲去。',
      '三隻羊一起對付大灰狼，用頭和角把它頂下山去。大灰狼摔死了。',
    ],
    jyutping: '',
    meaning: '',
  },
]
