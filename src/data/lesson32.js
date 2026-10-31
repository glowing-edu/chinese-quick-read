// 第三十二課 Lesson 32 — 生字
export const CHARACTERS = [
  { char: '摔', jyutping: 'seot1', word: '摔了', wordJyutping: 'seot1 liu5', emoji: '🤕', meaning: 'fall/throw' },
  { char: '聲', jyutping: 'sing1', word: '大聲', wordJyutping: 'daai6 seng1', emoji: '📢', meaning: 'sound/voice' },
  { char: '誰', jyutping: 'seoi4', word: '是誰', wordJyutping: 'si6 seoi4', emoji: '❓', meaning: 'who' },
  { char: '呢', jyutping: 'ne1', word: '我呢', wordJyutping: 'ngo5 ne1', emoji: '🙋', meaning: 'question particle' },
  { char: '認', jyutping: 'jing6', word: '認得', wordJyutping: 'jing6 dak1', emoji: '🤝', meaning: 'recognize/know' },
  { char: '原', jyutping: 'jyun4', word: '原來', wordJyutping: 'jyun4 loi4', emoji: '💡', meaning: 'originally/turns out' },
  { char: '痛', jyutping: 'tung3', word: '好痛', wordJyutping: 'hou2 tung3', emoji: '🤕', meaning: 'pain/painful' },
  { char: '喊', jyutping: 'haam3', word: '大喊', wordJyutping: 'daai6 haam3', emoji: '📣', meaning: 'cry/shout' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '南邊', jyutping: 'naam4 bin1', emoji: '🧭', meaning: 'south side', requires: ['南', '邊'] },
  { word: '南方', jyutping: 'naam4 fong1', emoji: '🧭', meaning: 'the south', requires: ['南', '方'] },
  { word: '南面', jyutping: 'naam4 min6', emoji: '🧭', meaning: 'south side', requires: ['南', '面'] },
  { word: '南風', jyutping: 'naam4 fung1', emoji: '🌬️', meaning: 'south wind', requires: ['南', '風'] },
  { word: '椅子', jyutping: 'ji2 zi2', emoji: '🪑', meaning: 'chair', requires: ['椅', '子'] },
  { word: '請坐', jyutping: 'cing2 co5', emoji: '🙏', meaning: 'please sit', requires: ['請', '坐'] },
  { word: '坐下', jyutping: 'co5 haa6', emoji: '🪑', meaning: 'sit down', requires: ['坐', '下'] },
  { word: '坐著', jyutping: 'co5 zoek6', emoji: '🪑', meaning: 'sitting', requires: ['坐', '著'] },
  { word: '身子', jyutping: 'san1 zi2', emoji: '🧍', meaning: 'body', requires: ['身', '子'] },
  { word: '身上', jyutping: 'san1 soeng6', emoji: '🧍', meaning: 'on one\'s body', requires: ['身', '上'] },
  { word: '身高', jyutping: 'san1 gou1', emoji: '📏', meaning: 'height', requires: ['身', '高'] },
  { word: '身邊', jyutping: 'san1 bin1', emoji: '🤝', meaning: 'at one\'s side', requires: ['身', '邊'] },
  { word: '來吧', jyutping: 'loi4 baa6', emoji: '👋', meaning: 'come on', requires: ['來', '吧'] },
  { word: '去吧', jyutping: 'heoi3 baa6', emoji: '➡️', meaning: 'go on', requires: ['去', '吧'] },
  { word: '好吧', jyutping: 'hou2 baa6', emoji: '👍', meaning: 'okay', requires: ['好', '吧'] },
  { word: '吃吧', jyutping: 'hek3 baa6', emoji: '🍽️', meaning: 'let\'s eat', requires: ['吃', '吧'] },
  { word: '桌子', jyutping: 'coek3 zi2', emoji: '🪵', meaning: 'table', requires: ['桌', '子'] },
  { word: '書桌', jyutping: 'syu1 coek3', emoji: '📚', meaning: 'desk', requires: ['書', '桌'] },
  { word: '方桌', jyutping: 'fong1 coek3', emoji: '🪑', meaning: 'square table', requires: ['方', '桌'] },
  { word: '桌椅', jyutping: 'coek3 ji2', emoji: '🪑', meaning: 'tables and chairs', requires: ['桌', '椅'] },
  { word: '花布', jyutping: 'faa1 bou3', emoji: '🌸', meaning: 'floral cloth', requires: ['花', '布'] },
  { word: '桌布', jyutping: 'coek3 bou3', emoji: '🧵', meaning: 'tablecloth', requires: ['桌', '布'] },
  { word: '抱著', jyutping: 'pou5 zyu6', emoji: '🤗', meaning: 'holding/hugging', requires: ['抱', '著'] },
  { word: '抱起', jyutping: 'pou5 hei2', emoji: '🤗', meaning: 'pick up in one\'s arms', requires: ['抱', '起'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    sentence: [
      '媽媽不在家，燕燕哭著要找媽媽。',
      '小椅子跑過來說：“燕燕不哭，燕燕不哭。坐在我身上，我來做你的媽媽。”燕燕看著小椅子，還是哭。',
      '小桌子跑過來說：“燕燕不哭，燕燕不哭。坐在我身上，我來做你的媽媽。”燕燕看著小桌子，還是哭。',
      '布猴子跑過來說：“燕燕不哭，燕燕不哭。把我跑起來，你來做我的媽媽。”燕燕看著布猴子，不哭了。',
      '她抱起布猴子，和它玩起了“過家家”的遊戲。',
    ],
    jyutping: '',
    meaning: '',
  },
  {
    sentence: [
      '我家有我的小桌子和小椅子。我的書和文具盒都放在桌子上面。',
      '我有很多好看的書，文具盒裡還有筆、小刀和尺子。我天天都坐在桌子後面的小椅子上看書，畫畫。',
      '我愛我的小桌子和小椅子。它們都是我的好朋友。',
    ],
    jyutping: '',
    meaning: '',
  },
]
