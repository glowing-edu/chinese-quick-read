// 第三十八課 Lesson 38 — 生字
export const CHARACTERS = [
  { char: '知', jyutping: 'zi1', word: '知道', wordJyutping: 'zi1 dou3', emoji: '💡', meaning: 'know' },
  { char: '道', jyutping: 'dou3', word: '知道', wordJyutping: 'zi1 dou3', emoji: '💡', meaning: 'know/way' },
  { char: '午', jyutping: 'ng5', word: '中午', wordJyutping: 'zung1 ng5', emoji: '☀️', meaning: 'noon' },
  { char: '這', jyutping: 'ze5', word: '這個', wordJyutping: 'ze5 go3', emoji: '👉', meaning: 'this' },
  { char: '座', jyutping: 'zo6', word: '座位', wordJyutping: 'zo6 wai2', emoji: '💺', meaning: 'seat' },
  { char: '洞', jyutping: 'dung6', word: '山洞', wordJyutping: 'saan1 dung6', emoji: '🕳️', meaning: 'hole/cave' },
  { char: '什', jyutping: 'sam6', word: '什麼', wordJyutping: 'sam6 mo1', emoji: '❓', meaning: 'what' },
  { char: '害', jyutping: 'hoi6', word: '害怕', wordJyutping: 'hoi6 paa3', emoji: '😨', meaning: 'afraid/harm' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '倒了', jyutping: 'dou2 liu5', emoji: '⬇️', meaning: 'fell down', requires: ['倒', '了'] },
  { word: '倒下', jyutping: 'dou2 haa6', emoji: '⬇️', meaning: 'fall down', requires: ['倒', '下'] },
  { word: '摔倒', jyutping: 'seot1 dou2', emoji: '🤕', meaning: 'trip and fall', requires: ['摔', '倒'] },
  { word: '倒車', jyutping: 'dou2 ce1', emoji: '🚗', meaning: 'reverse a car', requires: ['倒', '車'] },
  { word: '抬著', jyutping: 'toi4 zoek6', emoji: '🙌', meaning: 'carrying', requires: ['抬', '著'] },
  { word: '抬頭', jyutping: 'toi4 tau4', emoji: '🙂', meaning: 'look up', requires: ['抬', '頭'] },
  { word: '抬起', jyutping: 'toi4 hei2', emoji: '⬆️', meaning: 'lift up', requires: ['抬', '起'] },
  { word: '抬走', jyutping: 'toi4 zau2', emoji: '🚶', meaning: 'carry away', requires: ['抬', '走'] },
  { word: '晚上', jyutping: 'maan5 soeng6', emoji: '🌙', meaning: 'evening/night', requires: ['晚', '上'] },
  { word: '明晚', jyutping: 'ming4 maan5', emoji: '🌃', meaning: 'tomorrow night', requires: ['明', '晚'] },
  { word: '晚了', jyutping: 'maan5 liu5', emoji: '⌚', meaning: 'late', requires: ['晚', '了'] },
  { word: '左手', jyutping: 'zo2 sau2', emoji: '👈', meaning: 'left hand', requires: ['左', '手'] },
  { word: '左邊', jyutping: 'zo2 bin1', emoji: '⬅️', meaning: 'left side', requires: ['左', '邊'] },
  { word: '左面', jyutping: 'zo2 min6', emoji: '⬅️', meaning: 'left side', requires: ['左', '面'] },
  { word: '左右', jyutping: 'zo2 jau6', emoji: '↔️', meaning: 'left and right', requires: ['左', '右'] },
  { word: '右手', jyutping: 'jau6 sau2', emoji: '👉', meaning: 'right hand', requires: ['右', '手'] },
  { word: '右邊', jyutping: 'jau6 bin1', emoji: '➡️', meaning: 'right side', requires: ['右', '邊'] },
  { word: '右面', jyutping: 'jau6 min6', emoji: '➡️', meaning: 'right side', requires: ['右', '面'] },
  { word: '怎麼', jyutping: 'zam2 mo1', emoji: '❓', meaning: 'how', requires: ['怎', '麼'] },
  { word: '辦公', jyutping: 'baan6 gung1', emoji: '🏢', meaning: 'work (in an office)', requires: ['辦', '公'] },
  { word: '怎麼了', jyutping: 'zam2 mo1 liu5', emoji: '🤔', meaning: "what's wrong?", requires: ['怎', '麼', '了'] },
  { word: '怎麼辦', jyutping: 'zam2 mo1 baan6', emoji: '😟', meaning: 'what should we do?', requires: ['怎', '麼', '辦'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    title: '下大雨',
    sentence: [
      '大雨下了一個晚上。天亮了，雞媽媽要送小雞寶寶上幼稚園。可是，開門一看，前後左右都是水，雞寶寶出不了門。怎麼辦呢？雞媽媽著急得很。',
      '鵝爺爺和鴨伯伯知道了，趕快游水過來。',
      '「快上來，快上來，爬到我們的背上來。我們帶你們去幼稚園。」',
      '「幼稚園到啦！幼稚園到啦！我們下來了。」雞寶寶一邊下來，一邊說。',
      '「下午放學時，要是還是這麼大的水，我們就再來帶你們回家。」鵝爺爺和鴨伯伯說。',
      '「謝謝鵝爺爺，謝謝鴨伯伯。再見！」',
    ],
    jyutping: '',
    meaning: '',
  },
]
