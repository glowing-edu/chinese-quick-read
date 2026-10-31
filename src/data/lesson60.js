// 第六十課 Lesson 60 — 生字
export const CHARACTERS = [
  { char: '其', jyutping: 'kei4', word: '其他', wordJyutping: 'kei4 taa1', emoji: '➕', meaning: 'other/its' },
  { char: '實', jyutping: 'sat6', word: '其實', wordJyutping: 'kei4 sat6', emoji: '💡', meaning: 'real/actually' },
  { char: '輕', jyutping: 'heng1', word: '輕輕', wordJyutping: 'heng1 heng1', emoji: '🪶', meaning: 'light' },
  { char: '響', jyutping: 'hoeng2', word: '響聲', wordJyutping: 'hoeng2 sing1', emoji: '🔔', meaning: 'sound/ring' },
  { char: '遲', jyutping: 'ci4', word: '遲到', wordJyutping: 'ci4 dou3', emoji: '⏰', meaning: 'late' },
  { char: '已', jyutping: 'ji5', word: '已經', wordJyutping: 'ji5 ging1', emoji: '✅', meaning: 'already' },
  { char: '叠', jyutping: 'dip6', word: '叠好', wordJyutping: 'dip6 hou2', emoji: '📚', meaning: 'stack/fold' },
  { char: '包', jyutping: 'baau1', word: '書包', wordJyutping: 'syu1 baau1', emoji: '🎒', meaning: 'bag/wrap' },
  { char: '碗', jyutping: 'wun2', word: '飯碗', wordJyutping: 'faan6 wun2', emoji: '🍚', meaning: 'bowl' },
  { char: '寫', jyutping: 'se2', word: '寫字', wordJyutping: 'se2 zi6', emoji: '✍️', meaning: 'write' },
  { char: '冒', jyutping: 'mou6', word: '冒險', wordJyutping: 'mou6 him2', emoji: '🧗', meaning: 'brave/emit' },
  { char: '您', jyutping: 'nei5', word: '您好', wordJyutping: 'nei5 hou2', emoji: '🙇', meaning: 'you (polite)' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '祝賀', jyutping: 'zuk1 ho6', emoji: '🎊', meaning: 'congratulate', requires: ['祝', '賀'] },
  { word: '賀信', jyutping: 'ho6 seon3', emoji: '💌', meaning: 'congratulatory letter', requires: ['賀', '信'] },
  { word: '賀電', jyutping: 'ho6 din6', emoji: '📨', meaning: 'congratulatory telegram', requires: ['賀', '電'] },
  { word: '賀禮', jyutping: 'ho6 lai5', emoji: '🎁', meaning: 'congratulatory gift', requires: ['賀', '禮'] },
  { word: '腦子', jyutping: 'nou5 zi2', emoji: '🧠', meaning: 'brain/mind', requires: ['腦', '子'] },
  { word: '頭腦', jyutping: 'tau4 nou5', emoji: '🧠', meaning: 'mind', requires: ['頭', '腦'] },
  { word: '大腦', jyutping: 'daai6 nou5', emoji: '🧠', meaning: 'cerebrum', requires: ['大', '腦'] },
  { word: '右腦', jyutping: 'jau6 nou5', emoji: '🧠', meaning: 'right brain', requires: ['右', '腦'] },
  { word: '左腦', jyutping: 'zo2 nou5', emoji: '🧠', meaning: 'left brain', requires: ['左', '腦'] },
  { word: '小腦', jyutping: 'siu2 nou5', emoji: '🧠', meaning: 'cerebellum', requires: ['小', '腦'] },
  { word: '發呆', jyutping: 'faat3 ngoi4', emoji: '😶', meaning: 'blank out', requires: ['發', '呆'] },
  { word: '呆呆地', jyutping: 'ngoi4 ngoi4 dei6', emoji: '😶', meaning: 'blankly', requires: ['呆', '地'] },
  { word: '呆頭呆腦', jyutping: 'ngoi4 tau4 ngoi4 nou5', emoji: '🤪', meaning: 'dull-looking', requires: ['呆', '頭', '腦'] },
  { word: '起牀', jyutping: 'hei2 cong4', emoji: '🛏️', meaning: 'get out of bed', requires: ['起', '牀'] },
  { word: '小牀', jyutping: 'siu2 cong4', emoji: '🛏️', meaning: 'small bed', requires: ['小', '牀'] },
  { word: '打鬧', jyutping: 'daa2 naau6', emoji: '🤼', meaning: 'roughhouse', requires: ['打', '鬧'] },
  { word: '熱鬧', jyutping: 'jit6 naau6', emoji: '🎉', meaning: 'lively', requires: ['熱', '鬧'] },
  { word: '鬧鐘', jyutping: 'naau6 zung1', emoji: '⏰', meaning: 'alarm clock', requires: ['鬧', '鐘'] },
  { word: '看鐘', jyutping: 'hon3 zung1', emoji: '🕰️', meaning: 'look at the clock', requires: ['看', '鐘'] },
  { word: '打鐘', jyutping: 'daa2 zung1', emoji: '🔔', meaning: 'ring the bell', requires: ['打', '鐘'] },
  { word: '鐘點', jyutping: 'zung1 dim2', emoji: '🕰️', meaning: 'hour', requires: ['鐘', '點'] },
  { word: '撥動', jyutping: 'but6 dung6', emoji: '👆', meaning: 'move/dial', requires: ['撥', '動'] },
  { word: '準時', jyutping: 'zeon2 si4', emoji: '⏰', meaning: 'on time', requires: ['準', '時'] },
  { word: '準備', jyutping: 'zeon2 bei6', emoji: '✅', meaning: 'prepare', requires: ['準', '備'] },
  { word: '準是', jyutping: 'zeon2 si6', emoji: '✅', meaning: 'must be', requires: ['準', '是'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    title: '虎寶寶和小貓',
    sentence: [
      '虎媽媽生了個寶寶，接生的狐狸大嬸樂呵呵地說：「看，虎寶寶真好玩，像隻可愛的小貓。」',
      '兔子正好經過這裏，沒有聽清狐狸大嬸的話，就跑去告訴松鼠：「稀奇！稀奇！虎媽媽生了一隻小貓。」',
      '松鼠想，是小貓一定會爬樹。松鼠就跑去告訴小熊：「不稀奇！不稀奇！虎媽媽生的小貓會爬樹。」',
      '小熊想，會爬樹，也一定會捉老鼠。小熊就跑去告訴小鹿：「稀奇！也不稀奇！虎媽媽生的小貓會爬到樹上捉老鼠。」',
      '於是，兔子、松鼠、小熊、小鹿一起去向虎媽媽祝賀。狐狸大嬸抱出寶寶給大家一看，喲，虎頭虎腦的，不是小貓呀！',
      '這是怎麼回事呢？小鹿怪小熊，小熊怪松鼠，松鼠怪兔子，兔子呆呆地站在那裏，不知道怪誰。',
      '你知道怪誰嗎？',
    ],
    jyutping: '',
    meaning: '',
  },
]
