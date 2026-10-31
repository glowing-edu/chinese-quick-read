// 溫習四 Revision 4
export const CHARACTERS = []

// 讀詞語 Reading words
export const WORDS = [
  { word: '清早', jyutping: 'cing1 zou2', emoji: '🌅', meaning: 'early morning', requires: ['清', '早'] },
  { word: '清醒', jyutping: 'cing1 sing2', emoji: '🙂', meaning: 'awake/clear-headed', requires: ['清', '醒'] },
  { word: '清風', jyutping: 'cing1 fung1', emoji: '🍃', meaning: 'cool breeze', requires: ['清', '風'] },
  { word: '清水', jyutping: 'cing1 seoi2', emoji: '💧', meaning: 'clear water', requires: ['清', '水'] },
  { word: '清香', jyutping: 'cing1 hoeng1', emoji: '🌸', meaning: 'fresh fragrance', requires: ['清', '香'] },
  { word: '分清', jyutping: 'fan1 cing1', emoji: '🔍', meaning: 'tell apart', requires: ['分', '清'] },
  { word: '今天', jyutping: 'gam1 tin1', emoji: '📅', meaning: 'today', requires: ['今', '天'] },
  { word: '今日', jyutping: 'gam1 jat6', emoji: '📅', meaning: 'today', requires: ['今', '日'] },
  { word: '今年', jyutping: 'gam1 nin4', emoji: '📆', meaning: 'this year', requires: ['今', '年'] },
  { word: '今後', jyutping: 'gam1 hau6', emoji: '➡️', meaning: 'from now on', requires: ['今', '後'] },
  { word: '昨天', jyutping: 'zok6 tin1', emoji: '📆', meaning: 'yesterday', requires: ['昨', '天'] },
  { word: '昨日', jyutping: 'zok6 jat6', emoji: '📆', meaning: 'yesterday', requires: ['昨', '日'] },
  { word: '陽光', jyutping: 'joeng4 gwong1', emoji: '☀️', meaning: 'sunshine', requires: ['陽', '光'] },
  { word: '日光', jyutping: 'jat6 gwong1', emoji: '🌞', meaning: 'sunlight', requires: ['日', '光'] },
  { word: '月光', jyutping: 'jyut6 gwong1', emoji: '🌙', meaning: 'moonlight', requires: ['月', '光'] },
  { word: '星光', jyutping: 'sing1 gwong1', emoji: '✨', meaning: 'starlight', requires: ['星', '光'] },
  { word: '光明', jyutping: 'gwong1 ming4', emoji: '💡', meaning: 'bright/light', requires: ['光', '明'] },
  { word: '光頭', jyutping: 'gwong1 tau4', emoji: '🧑‍🦲', meaning: 'bald head', requires: ['光', '頭'] },
  { word: '光亮', jyutping: 'gwong1 loeng6', emoji: '✨', meaning: 'bright/shiny', requires: ['光', '亮'] },
  { word: '眼光', jyutping: 'ngaan5 gwong1', emoji: '👀', meaning: 'eyesight/judgement', requires: ['眼', '光'] },
  { word: '亮光', jyutping: 'loeng6 gwong1', emoji: '🔦', meaning: 'light/glow', requires: ['亮', '光'] },
  { word: '火光', jyutping: 'fo2 gwong1', emoji: '🔥', meaning: 'firelight', requires: ['火', '光'] },
  { word: '光陰', jyutping: 'gwong1 jam1', emoji: '⏳', meaning: 'time', requires: ['光', '陰'] },
  { word: '陰天', jyutping: 'jam1 tin1', emoji: '☁️', meaning: 'cloudy day', requires: ['陰', '天'] },
  { word: '錯了', jyutping: 'co3 liu5', emoji: '❌', meaning: 'wrong', requires: ['錯', '了'] },
  { word: '大錯', jyutping: 'daai6 co3', emoji: '❗', meaning: 'big mistake', requires: ['大', '錯'] },
  { word: '小錯', jyutping: 'siu2 co3', emoji: '⚠️', meaning: 'small mistake', requires: ['小', '錯'] },
  { word: '過錯', jyutping: 'gwo3 co3', emoji: '😔', meaning: 'fault/mistake', requires: ['過', '錯'] },
  { word: '錯字', jyutping: 'co3 zi6', emoji: '✍️', meaning: 'wrong character', requires: ['錯', '字'] },
  { word: '認錯', jyutping: 'jing6 co3', emoji: '🙏', meaning: 'admit a mistake', requires: ['認', '錯'] },
  { word: '錯過', jyutping: 'co3 gwo3', emoji: '⏰', meaning: 'miss out', requires: ['錯', '過'] },
  { word: '手指', jyutping: 'sau2 zi2', emoji: '👆', meaning: 'finger', requires: ['手', '指'] },
  { word: '指頭', jyutping: 'zi2 tau4', emoji: '👆', meaning: 'fingertip/finger', requires: ['指', '頭'] },
  { word: '拇指', jyutping: 'mou5 zi2', emoji: '👍', meaning: 'thumb', requires: ['拇', '指'] },
  { word: '中指', jyutping: 'zung1 zi2', emoji: '🖕', meaning: 'middle finger', requires: ['中', '指'] },
  { word: '小指', jyutping: 'siu2 zi2', emoji: '🤏', meaning: 'little finger', requires: ['小', '指'] },
  { word: '指尖', jyutping: 'zi2 zim1', emoji: '👆', meaning: 'fingertip', requires: ['指', '尖'] },
  { word: '指著', jyutping: 'zi2 zoek6', emoji: '👉', meaning: 'pointing at', requires: ['指', '著'] },
  { word: '指向', jyutping: 'zi2 hoeng3', emoji: '➡️', meaning: 'point towards', requires: ['指', '向'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    title: '',
    sentence: [
      '你分得清嗎？今天是星期四，昨天是星期三，前天是星期二，大前天是星期一。今天是星期四，明天是星期五，後天是星期六，大後天是星期日。',
      '你知道嗎？明天的明天是後天，昨天的昨天是前天，明天的昨天是今天，昨天的明天還是今天。',
      '你明白嗎？有很多很多個昨天，有很多很多個今天，還有很多很多個明天。可是，光陰一去不再來，不能錯過好光陰。',
    ],
    jyutping: '',
    meaning: '',
  },
  {
    title: '他們愛吃什麼',
    sentence: [
      '小山羊和小雞是朋友。小雞請小山羊吃蟲子。小山羊說：「謝謝你，我不吃蟲子。」',
      '小山羊和小貓是朋友。小貓請小山羊吃魚。小山羊說：「謝謝你，我不吃魚。」',
      '小山羊和小猴子是朋友。小猴子請小山羊吃桃子。小山羊說：「謝謝你，我不吃桃子。」',
      '小山羊和小牛是朋友。小牛請小山羊吃青草。小山羊說：「謝謝你！」',
      '小山羊和小牛快快樂樂地一同吃青草。',
    ],
    jyutping: '',
    meaning: '',
  },
]
