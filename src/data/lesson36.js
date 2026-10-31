// 第三十六課 Lesson 36 — 生字
export const CHARACTERS = [
  { char: '蘿', jyutping: 'lo4', word: '蘿蔔', wordJyutping: 'lo4 baak6', emoji: '🥕', meaning: 'radish/turnip' },
  { char: '蔔', jyutping: 'baak6', word: '蘿蔔', wordJyutping: 'lo4 baak6', emoji: '🥕', meaning: 'radish/turnip' },
  { char: '熟', jyutping: 'suk6', word: '煮熟', wordJyutping: 'zyu2 suk6', emoji: '🍲', meaning: 'cooked/ripe' },
  { char: '拔', jyutping: 'bat6', word: '拔草', wordJyutping: 'bat6 cou2', emoji: '🌱', meaning: 'pull up weeds' },
  { char: '拉', jyutping: 'laai1', word: '拉手', wordJyutping: 'laai1 sau2', emoji: '🤝', meaning: 'hold hands/pull' },
  { char: '鼠', jyutping: 'syu2', word: '老鼠', wordJyutping: 'lou5 syu2', emoji: '🐭', meaning: 'mouse/rat' },
  { char: '咕', jyutping: 'gu1', word: '咕咕', wordJyutping: 'gu1 gu1', emoji: '🕊️', meaning: 'coo (sound)' },
  { char: '咚', jyutping: 'dung1', word: '咚咚', wordJyutping: 'dung1 dung1', emoji: '🥁', meaning: 'thump (sound)' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '可是', jyutping: 'ho2 si6', emoji: '🤔', meaning: 'but/however', requires: ['可', '是'] },
  { word: '可用', jyutping: 'ho2 jung6', emoji: '✅', meaning: 'usable', requires: ['可', '用'] },
  { word: '伸出', jyutping: 'san1 ceot1', emoji: '🖐️', meaning: 'reach out', requires: ['伸', '出'] },
  { word: '伸手', jyutping: 'san1 sau2', emoji: '🖐️', meaning: 'reach out a hand', requires: ['伸', '手'] },
  { word: '門縫', jyutping: 'mun4 fung4', emoji: '🚪', meaning: 'door gap', requires: ['門', '縫'] },
  { word: '小縫', jyutping: 'siu2 fung4', emoji: '🪡', meaning: 'small gap', requires: ['小', '縫'] },
  { word: '夾縫', jyutping: 'gaap3 fung4', emoji: '↔️', meaning: 'narrow gap', requires: ['夾', '縫'] },
  { word: '縫子', jyutping: 'fung4 zi2', emoji: '🪡', meaning: 'seam/gap', requires: ['縫', '子'] },
  { word: '夾子', jyutping: 'gaap3 zi2', emoji: '🧷', meaning: 'clip', requires: ['夾', '子'] },
  { word: '夾住', jyutping: 'gaap3 zyu6', emoji: '🦞', meaning: 'pinched/clamped', requires: ['夾', '住'] },
  { word: '夾起來', jyutping: 'gaap3 hei2 loi4', emoji: '🥢', meaning: 'pick up with tongs', requires: ['夾', '起', '來'] },
  { word: '一根', jyutping: 'jat1 gan1', emoji: '1️⃣', meaning: 'one (stick/strand)', requires: ['一', '根'] },
  { word: '草根', jyutping: 'cou2 gan1', emoji: '🌱', meaning: 'grass roots', requires: ['草', '根'] },
  { word: '樹根', jyutping: 'syu6 gan1', emoji: '🌳', meaning: 'tree roots', requires: ['樹', '根'] },
  { word: '根苗', jyutping: 'gan1 miu4', emoji: '🌱', meaning: 'root and shoot', requires: ['根', '苗'] },
  { word: '根子', jyutping: 'gan1 zi2', emoji: '🌱', meaning: 'root/base', requires: ['根', '子'] },
  { word: '棍子', jyutping: 'gwan3 zi2', emoji: '🪵', meaning: 'stick', requires: ['棍', '子'] },
  { word: '木棍', jyutping: 'muk6 gwan3', emoji: '🪵', meaning: 'wooden stick', requires: ['木', '棍'] },
  { word: '丟了', jyutping: 'diu1 liu5', emoji: '🗑️', meaning: 'lost/threw away', requires: ['丟', '了'] },
  { word: '丟掉', jyutping: 'diu1 diu6', emoji: '🗑️', meaning: 'throw away', requires: ['丟', '掉'] },
  { word: '丟人', jyutping: 'diu1 jan4', emoji: '😳', meaning: 'embarrassing', requires: ['丟', '人'] },
  { word: '大灰狼', jyutping: 'daai6 fui1 long4', emoji: '🐺', meaning: 'big grey wolf', requires: ['大', '灰', '狼'] },
  { word: '灰白', jyutping: 'fui1 baak6', emoji: '🌫️', meaning: 'greyish white', requires: ['灰', '白'] },
  { word: '白灰', jyutping: 'baak6 fui1', emoji: '🤍', meaning: 'white ash/lime', requires: ['白', '灰'] },
  { word: '灰心', jyutping: 'fui1 sam1', emoji: '😞', meaning: 'discouraged', requires: ['灰', '心'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    title: '小兔子和大灰狼的故事',
    sentence: [
      '兔媽媽有三個孩子，一個叫白白，一個叫紅紅，一個叫黃黃。',
      '有一天，兔媽媽要出門去，就對三個孩子說：「你們好好看家，我一會兒就回來，誰來了也不要開門。」',
      '兔媽媽回來了，她在門外唱著：「小兔子乖乖，把門開開，快點開開，我要進來。」小兔子們聽見了媽媽的聲音，就放心地把門打開了。',
      '可是，躲在大樹後面的大灰狼學會了兔媽媽的歌。',
      '過了一天，兔媽媽又出去了。大灰狼來了，它學著兔媽媽的聲音唱著：「小兔子乖乖，把門開開，快點開開，我要進來。」',
      '白白說：「不對，這不是媽媽的聲音。」',
      '紅紅從門縫裡看見了大灰狼，說：「快看！快看！是大灰狼。」',
      '大灰狼說：「我是你們的媽媽呀，快開門吧。」',
      '黃黃說：「你把尾巴伸進來給我們看看。」',
      '小兔子們把門打開了一點兒，大灰狼就把尾巴從門縫裡伸了進去。小兔子們用力把門關上，夾住了大灰狼的尾巴。痛得大灰狼又喊又叫。',
      '這時，兔媽媽回來了。她拿起一根大棍子就打。痛得大灰狼丟掉尾巴，趕快逃跑了。',
    ],
    jyutping: '',
    meaning: '',
  },
]
