// 第三十一課 Lesson 31 — 生字
export const CHARACTERS = [
  { char: '片', jyutping: 'pin3', word: '一片', wordJyutping: 'jat1 pin3', emoji: '🍃', meaning: 'slice/piece' },
  { char: '吹', jyutping: 'ceoi1', word: '吹風', wordJyutping: 'ceoi1 fung1', emoji: '💨', meaning: 'blow' },
  { char: '澆', jyutping: 'giu1', word: '澆水', wordJyutping: 'giu1 seoi2', emoji: '💧', meaning: 'pour/water' },
  { char: '燕', jyutping: 'jin3', word: '燕子', wordJyutping: 'jin3 zi2', emoji: '🦅', meaning: 'swallow (bird)' },
  { char: '睡', jyutping: 'seoi6', word: '睡覺', wordJyutping: 'seoi6 gaau3', emoji: '😴', meaning: 'sleep' },
  { char: '醒', jyutping: 'sing2', word: '醒來', wordJyutping: 'sing2 loi4', emoji: '👀', meaning: 'wake up' },
  { char: '蛙', jyutping: 'waa1', word: '青蛙', wordJyutping: 'cing1 waa1', emoji: '🐸', meaning: 'frog' },
  { char: '呱', jyutping: 'gwaa1', word: '呱呱', wordJyutping: 'gwaa1 gwaa1', emoji: '🐸', meaning: 'ribbit' },
  { char: '南', jyutping: 'naam4', word: '南方', wordJyutping: 'naam4 fong1', emoji: '🧭', meaning: 'south' },
  { char: '椅', jyutping: 'ji2', word: '椅子', wordJyutping: 'ji2 zi2', emoji: '🪑', meaning: 'chair' },
  { char: '坐', jyutping: 'co5', word: '坐下', wordJyutping: 'co5 haa6', emoji: '🪑', meaning: 'sit' },
  { char: '身', jyutping: 'san1', word: '身體', wordJyutping: 'san1 tai2', emoji: '🧍', meaning: 'body' },
  { char: '吧', jyutping: 'baa6', word: '來吧', wordJyutping: 'loi4 baa6', emoji: '💬', meaning: 'particle' },
  { char: '桌', jyutping: 'coek3', word: '桌子', wordJyutping: 'coek3 zi2', emoji: '🪵', meaning: 'table/desk' },
  { char: '步', jyutping: 'bou6', word: '一步', wordJyutping: 'jat1 bou6', emoji: '👣', meaning: 'step' },
  { char: '抱', jyutping: 'pou5', word: '抱住', wordJyutping: 'pou5 zyu6', emoji: '🤗', meaning: 'hold/hug' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '一片', jyutping: 'jat1 pin3', emoji: '🍃', meaning: 'a piece/slice', requires: ['一', '片'] },
  { word: '吹風', jyutping: 'ceoi1 fung1', emoji: '💨', meaning: 'blow wind', requires: ['吹', '風'] },
  { word: '吹氣', jyutping: 'ceoi1 hei3', emoji: '💨', meaning: 'blow air', requires: ['吹', '氣'] },
  { word: '吹牛', jyutping: 'ceoi1 ngau4', emoji: '💬', meaning: 'brag/boast', requires: ['吹', '牛'] },
  { word: '澆水', jyutping: 'giu1 seoi2', emoji: '💧', meaning: 'water', requires: ['澆', '水'] },
  { word: '澆花', jyutping: 'giu1 faa1', emoji: '🌻', meaning: 'water flowers', requires: ['澆', '花'] },
  { word: '澆地', jyutping: 'giu1 dei6', emoji: '🌱', meaning: 'water ground', requires: ['澆', '地'] },
  { word: '燕子', jyutping: 'jin3 zi2', emoji: '🦅', meaning: 'swallow', requires: ['燕', '子'] },
  { word: '睡醒', jyutping: 'seoi6 sing2', emoji: '😴', meaning: 'wake from sleep', requires: ['睡', '醒'] },
  { word: '睡夢', jyutping: 'seoi6 mung6', emoji: '💭', meaning: 'sleep dream', requires: ['睡', '夢'] },
  { word: '早睡', jyutping: 'zou2 seoi6', emoji: '😴', meaning: 'go to bed early', requires: ['早', '睡'] },
  { word: '早起', jyutping: 'zou2 hei2', emoji: '☀️', meaning: 'get up early', requires: ['早', '起'] },
  { word: '醒了', jyutping: 'sing2 liu5', emoji: '👀', meaning: 'awakened', requires: ['醒', '了'] },
  { word: '醒來', jyutping: 'sing2 loi4', emoji: '👀', meaning: 'wake up', requires: ['醒', '來'] },
  { word: '青蛙', jyutping: 'cing1 waa1', emoji: '🐸', meaning: 'frog', requires: ['青', '蛙'] },
  { word: '牛蛙', jyutping: 'ngau4 waa1', emoji: '🐸', meaning: 'bullfrog', requires: ['牛', '蛙'] },
  { word: '呱呱叫', jyutping: 'gwaa1 gwaa1 giu3', emoji: '🐸', meaning: 'ribbit', requires: ['呱', '呱', '叫'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    title: '春天來了',
    sentence: [
      '春風吹，春雨下。吹綠了柳樹，澆紅了桃花。吹來了燕子，澆醒了青蛙。小朋友們快樂地唱著兒歌。春天到了，在南方過冬的燕子飛回了它的老家。小燕子們飛來飛去，高興地問好。睡了一個冬天的青蛙也醒了過來，“呱，呱”地說著話。',
      '春天裡，大家都很快樂！',
    ],
    jyutping: '',
    meaning: '',
  },
  {
    title: '春天真好',
    sentence: [
      '早上，飛來一隻小黃鳥，落在門前的樹上。它快樂地唱著歌：“春天到了！春天到了！桃花紅了，柳樹綠了。農民伯伯要下種種地了。”春天是一年中最好的季節。在春天裡，桃樹上開出了紅紅的花，柳樹上長出了綠綠的葉，青青的小草從地裡長出來，農民伯伯種的種子也長出了小苗。大地一片青綠。天氣不冷了，媽媽說要去郊遊了。',
      '春天真好，我愛春天！',
    ],
    jyutping: '',
    meaning: '',
  },
]
