// 第三十七課 Lesson 37 — 生字
export const CHARACTERS = [
  { char: '倒', jyutping: 'dou2', word: '倒下', wordJyutping: 'dou2 haa6', emoji: '⬇️', meaning: 'fall down' },
  { char: '抬', jyutping: 'toi4', word: '抬頭', wordJyutping: 'toi4 tau4', emoji: '🙂', meaning: 'lift/look up' },
  { char: '晚', jyutping: 'maan5', word: '晚上', wordJyutping: 'maan5 soeng6', emoji: '🌙', meaning: 'evening/night' },
  { char: '左', jyutping: 'zo2', word: '左手', wordJyutping: 'zo2 sau2', emoji: '👈', meaning: 'left' },
  { char: '右', jyutping: 'jau6', word: '右手', wordJyutping: 'jau6 sau2', emoji: '👉', meaning: 'right' },
  { char: '怎', jyutping: 'zam2', word: '怎樣', wordJyutping: 'zam2 joeng6', emoji: '❓', meaning: 'how' },
  { char: '麼', jyutping: 'mo1', word: '什麼', wordJyutping: 'sam6 mo1', emoji: '❓', meaning: 'what' },
  { char: '辦', jyutping: 'baan6', word: '辦法', wordJyutping: 'baan6 faat3', emoji: '💡', meaning: 'way/method' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '蘿蔔', jyutping: 'lo4 baak6', emoji: '🥕', meaning: 'radish/turnip', requires: ['蘿', '蔔'] },
  { word: '熟了', jyutping: 'suk6 liu5', emoji: '🍲', meaning: 'ripe/cooked', requires: ['熟', '了'] },
  { word: '成熟', jyutping: 'sing4 suk6', emoji: '🌾', meaning: 'mature/ripe', requires: ['成', '熟'] },
  { word: '背熟了', jyutping: 'bui3 suk6 liu5', emoji: '🧠', meaning: 'memorized', requires: ['背', '熟', '了'] },
  { word: '拔出來', jyutping: 'bat6 ceot1 loi4', emoji: '🥕', meaning: 'pull out', requires: ['拔', '出', '來'] },
  { word: '拔草', jyutping: 'bat6 cou2', emoji: '🌱', meaning: 'pull up weeds', requires: ['拔', '草'] },
  { word: '拔起', jyutping: 'bat6 hei2', emoji: '⬆️', meaning: 'pull up', requires: ['拔', '起'] },
  { word: '拔河', jyutping: 'bat6 ho4', emoji: '🪢', meaning: 'tug of war', requires: ['拔', '河'] },
  { word: '拉手', jyutping: 'laai1 sau2', emoji: '🤝', meaning: 'hold hands', requires: ['拉', '手'] },
  { word: '拉著', jyutping: 'laai1 zoek6', emoji: '🤝', meaning: 'holding/pulling', requires: ['拉', '著'] },
  { word: '拉住', jyutping: 'laai1 zyu6', emoji: '✋', meaning: 'hold on to', requires: ['拉', '住'] },
  { word: '拉走', jyutping: 'laai1 zau2', emoji: '➡️', meaning: 'pull away', requires: ['拉', '走'] },
  { word: '拉來', jyutping: 'laai1 loi4', emoji: '⬅️', meaning: 'pull over', requires: ['拉', '來'] },
  { word: '老鼠', jyutping: 'lou5 syu2', emoji: '🐭', meaning: 'mouse/rat', requires: ['老', '鼠'] },
  { word: '田鼠', jyutping: 'tin4 syu2', emoji: '🐹', meaning: 'field mouse', requires: ['田', '鼠'] },
  { word: '咕咚', jyutping: 'gu1 dung1', emoji: '💥', meaning: 'thud (sound)', requires: ['咕', '咚'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    title: '拔蘿蔔',
    sentence: [
      '小葉子種了一個蘿蔔。蘿蔔長呀長呀，長得很大很大。蘿蔔長熟了，可以拔出來吃了。',
      '小葉子就去拔蘿蔔，拔呀拔呀，拔不出來。',
      '小葉子去把爺爺請來和她一起拔。小葉子拉著蘿蔔葉，爺爺拉著小葉子，拔呀拔呀，拔不出來。',
      '小葉子又去把奶奶請來和她們一起拔。小葉子拉著蘿蔔葉，爺爺拉著小葉子，奶奶拉著爺爺，拔呀拔呀，拔不出來。小葉子又去把爸爸請來和她們一起拔。小葉子拉著蘿蔔葉，爺爺拉著小葉子，奶奶拉著爺爺，爸爸拉著奶奶，拔呀拔呀，還是拔不出來。',
      '小葉子又去把媽媽請來和她們一起拔。小葉子拉著蘿蔔葉，爺爺拉著小葉子，奶奶拉著爺爺，爸爸拉著奶奶，媽媽拉著爸爸，拔呀拔呀，還是拔不出來。',
      '小葉子又去把小狗請來和她們一起拔。小葉子拉著蘿蔔葉，爺爺拉著小葉子，奶奶拉著爺爺，爸爸拉著奶奶，媽媽拉著爸爸，小狗拉著媽媽，拔呀拔呀，還是拔不出來。',
      '小葉子又去把小貓請來和她們一起拔。小葉子拉著蘿蔔葉，爺爺拉著小葉子，奶奶拉著爺爺，爸爸拉著奶奶，媽媽拉著爸爸，小狗拉著媽媽，小貓拉著小狗，拔呀拔呀，還是拔不出來。',
      '小葉子又去把小老鼠請來和她們一起拔。小葉子拉著蘿蔔葉，爺爺拉著小葉子，奶奶拉著爺爺，爸爸拉著奶奶，媽媽拉著爸爸，小狗拉著媽媽，小貓拉著小狗，小老鼠拉著小貓。',
      '「一、二、三！」大家用力一起拔。「咕咚」一聲，大家都摔倒了，大蘿蔔也拔出來了。',
      '大家高高興興地抬著大蘿蔔回家了。',
    ],
    jyutping: '',
    meaning: '',
  },
]
