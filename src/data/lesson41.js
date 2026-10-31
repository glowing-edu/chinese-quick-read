// 第四十一課 Lesson 41 — 生字
export const CHARACTERS = [
  { char: '食', jyutping: 'sik6', word: '食物', wordJyutping: 'sik6 mat6', emoji: '🍚', meaning: 'food/eat' },
  { char: '無', jyutping: 'mou4', word: '無名', wordJyutping: 'mou4 ming4', emoji: '🚫', meaning: 'without/none' },
  { char: '名', jyutping: 'ming4', word: '名字', wordJyutping: 'ming4 zi6', emoji: '📛', meaning: 'name' },
  { char: '加', jyutping: 'gaa1', word: '加油', wordJyutping: 'gaa1 jau2', emoji: '➕', meaning: 'add/cheer on' },
  { char: '共', jyutping: 'gung6', word: '共同', wordJyutping: 'gung6 tung4', emoji: '🤝', meaning: 'together/common' },
  { char: '事', jyutping: 'si6', word: '做事', wordJyutping: 'zou6 si6', emoji: '📋', meaning: 'matter/affair' },
  { char: '幫', jyutping: 'bong1', word: '幫手', wordJyutping: 'bong1 sau2', emoji: '🙋', meaning: 'help' },
  { char: '餓', jyutping: 'ngo6', word: '肚餓', wordJyutping: 'tou5 ngo6', emoji: '🍽️', meaning: 'hungry' },
  { char: '肚', jyutping: 'tou5', word: '肚仔', wordJyutping: 'tou5 zai2', emoji: '🫃', meaning: 'belly' },
  { char: '獅', jyutping: 'si1', word: '獅子', wordJyutping: 'si1 zi2', emoji: '🦁', meaning: 'lion' },
  { char: '覺', jyutping: 'gok3', word: '覺得', wordJyutping: 'gok3 dak1', emoji: '💭', meaning: 'feel/think' },
  { char: '毛', jyutping: 'mou4', word: '毛巾', wordJyutping: 'mou4 gan1', emoji: '🧻', meaning: 'hair/wool' },
  { char: '求', jyutping: 'kau4', word: '要求', wordJyutping: 'jiu1 kau4', emoji: '🙏', meaning: 'beg/request' },
  { char: '等', jyutping: 'dang2', word: '等待', wordJyutping: 'dang2 doi6', emoji: '⏳', meaning: 'wait' },
  { char: '香', jyutping: 'hoeng1', word: '香味', wordJyutping: 'hoeng1 mei6', emoji: '🌸', meaning: 'fragrant' },
  { char: '肉', jyutping: 'juk6', word: '牛肉', wordJyutping: 'ngau4 juk6', emoji: '🥩', meaning: 'meat' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '冷食', jyutping: 'laang5 sik6', emoji: '🧊', meaning: 'cold food', requires: ['冷', '食'] },
  { word: '甜食', jyutping: 'tim4 sik6', emoji: '🍬', meaning: 'sweet food', requires: ['甜', '食'] },
  { word: '食指', jyutping: 'sik6 zi2', emoji: '☝️', meaning: 'index finger', requires: ['食', '指'] },
  { word: '中指', jyutping: 'zung1 zi2', emoji: '🖕', meaning: 'middle finger', requires: ['中', '指'] },
  { word: '無名指', jyutping: 'mou4 ming4 zi2', emoji: '💍', meaning: 'ring finger', requires: ['無', '名', '指'] },
  { word: '無風', jyutping: 'mou4 fung1', emoji: '🍃', meaning: 'windless', requires: ['無', '風'] },
  { word: '無邊', jyutping: 'mou4 bin1', emoji: '🌊', meaning: 'boundless', requires: ['無', '邊'] },
  { word: '無能', jyutping: 'mou4 nang4', emoji: '😞', meaning: 'incapable', requires: ['無', '能'] },
  { word: '無心', jyutping: 'mou4 sam1', emoji: '💭', meaning: 'unintentional', requires: ['無', '心'] },
  { word: '名字', jyutping: 'ming4 zi6', emoji: '📛', meaning: 'name', requires: ['名', '字'] },
  { word: '名人', jyutping: 'ming4 jan4', emoji: '🌟', meaning: 'famous person', requires: ['名', '人'] },
  { word: '名山', jyutping: 'ming4 saan1', emoji: '⛰️', meaning: 'famous mountain', requires: ['名', '山'] },
  { word: '加上', jyutping: 'gaa1 soeng5', emoji: '➕', meaning: 'add/plus', requires: ['加', '上'] },
  { word: '加班', jyutping: 'gaa1 baan1', emoji: '💼', meaning: 'work overtime', requires: ['加', '班'] },
  { word: '一共', jyutping: 'jat1 gung6', emoji: '🔢', meaning: 'altogether', requires: ['一', '共'] },
  { word: '共同', jyutping: 'gung6 tung4', emoji: '🤝', meaning: 'common/joint', requires: ['共', '同'] },
  { word: '共有', jyutping: 'gung6 jau5', emoji: '🔢', meaning: 'altogether have', requires: ['共', '有'] },
  { word: '公共', jyutping: 'gung1 gung6', emoji: '🏛️', meaning: 'public', requires: ['公', '共'] },
  { word: '做事', jyutping: 'zou6 si6', emoji: '📋', meaning: 'do things/work', requires: ['做', '事'] },
  { word: '大事', jyutping: 'daai6 si6', emoji: '❗', meaning: 'big matter', requires: ['大', '事'] },
  { word: '小事', jyutping: 'siu2 si6', emoji: '🔹', meaning: 'small matter', requires: ['小', '事'] },
  { word: '好事', jyutping: 'hou2 si6', emoji: '👍', meaning: 'good deed', requires: ['好', '事'] },
  { word: '事後', jyutping: 'si6 hau6', emoji: '⏱️', meaning: 'afterwards', requires: ['事', '後'] },
  { word: '有事', jyutping: 'jau5 si6', emoji: '📞', meaning: 'have something to do', requires: ['有', '事'] },
  { word: '幫我', jyutping: 'bong1 ngo5', emoji: '🙋', meaning: 'help me', requires: ['幫', '我'] },
  { word: '幫你', jyutping: 'bong1 nei5', emoji: '🙋', meaning: 'help you', requires: ['幫', '你'] },
  { word: '幫他', jyutping: 'bong1 taa1', emoji: '🙋', meaning: 'help him', requires: ['幫', '他'] },
  { word: '幫手', jyutping: 'bong1 sau2', emoji: '🤝', meaning: 'helper/help', requires: ['幫', '手'] },
  { word: '幫工', jyutping: 'bong1 gung1', emoji: '👷', meaning: 'helper/worker', requires: ['幫', '工'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    title: '大拇指生氣了',
    sentence: [
      '一隻手有五個手指：大拇指、食指、中指、無名指，還有小指。左手和右手加起來，一共有十個手指。大家在一起很快樂，做甚麼事都是你幫我，我幫他，做得都很好。',
      '有一天，大拇指生了氣，它大聲對食指、中指、無名指和小指說：「你們不要再來找我，做事不要找我。玩，也不要來找我。」',
      '大家看大拇指生了這麼大的氣，也不敢找它。',
      '到了吃飯時，它還在生氣。不好了，大拇指不和大家一起做事，就甚麼東西也拿不到手上。飯也吃不到口裏。吃不到東西，大家只好餓肚子了。',
    ],
    jyutping: '',
    meaning: '',
  },
]
