// 第四十二課 Lesson 42 — 生字
export const CHARACTERS = [
  { char: '摔', jyutping: 'seot1', word: '摔倒', wordJyutping: 'seot1 dou2', emoji: '🤕', meaning: 'fall/throw down' },
  { char: '網', jyutping: 'mong5', word: '網子', wordJyutping: 'mong5 zi2', emoji: '🕸️', meaning: 'net' },
  { char: '咬', jyutping: 'ngaau5', word: '咬開', wordJyutping: 'ngaau5 hoi1', emoji: '🦷', meaning: 'bite' },
  { char: '力', jyutping: 'lik6', word: '用力', wordJyutping: 'jung6 lik6', emoji: '💪', meaning: 'strength' },
  { char: '啊', jyutping: 'aa3', word: '好啊', wordJyutping: 'hou2 aa3', emoji: '💬', meaning: 'particle (ah)' },
  { char: '牙', jyutping: 'ngaa4', word: '牙齒', wordJyutping: 'ngaa4 ci2', emoji: '🦷', meaning: 'tooth' },
  { char: '嘴', jyutping: 'zeoi2', word: '嘴巴', wordJyutping: 'zeoi2 baa1', emoji: '👄', meaning: 'mouth' },
  { char: '漂', jyutping: 'piu3', word: '漂亮', wordJyutping: 'piu3 loeng6', emoji: '✨', meaning: 'pretty' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '肚子', jyutping: 'tou5 zi2', emoji: '🫃', meaning: 'belly', requires: ['肚', '子'] },
  { word: '餓了', jyutping: 'ngo6 liu5', emoji: '🍽️', meaning: 'hungry', requires: ['餓', '了'] },
  { word: '肚子餓', jyutping: 'tou5 zi2 ngo6', emoji: '🍽️', meaning: 'belly is hungry', requires: ['肚', '子', '餓'] },
  { word: '獅子', jyutping: 'si1 zi2', emoji: '🦁', meaning: 'lion', requires: ['獅', '子'] },
  { word: '獅子狗', jyutping: 'si1 zi2 gau2', emoji: '🐶', meaning: 'Pekingese dog', requires: ['獅', '子', '狗'] },
  { word: '睡覺', jyutping: 'seoi6 gaau3', emoji: '😴', meaning: 'sleep', requires: ['睡', '覺'] },
  { word: '毛筆', jyutping: 'mou4 bat1', emoji: '🖌️', meaning: 'writing brush', requires: ['毛', '筆'] },
  { word: '毛蟲', jyutping: 'mou4 cung4', emoji: '🐛', meaning: 'caterpillar', requires: ['毛', '蟲'] },
  { word: '毛毛', jyutping: 'mou4 mou4', emoji: '🧸', meaning: 'furry', requires: ['毛'] },
  { word: '毛毛蟲', jyutping: 'mou4 mou4 cung4', emoji: '🐛', meaning: 'caterpillar', requires: ['毛', '蟲'] },
  { word: '毛毛雨', jyutping: 'mou4 mou4 jyu5', emoji: '🌦️', meaning: 'drizzle', requires: ['毛', '雨'] },
  { word: '求求你', jyutping: 'kau4 kau4 nei5', emoji: '🙏', meaning: 'please (begging)', requires: ['求', '你'] },
  { word: '要求', jyutping: 'jiu1 kau4', emoji: '🙏', meaning: 'request/demand', requires: ['要', '求'] },
  { word: '請求', jyutping: 'cing2 kau4', emoji: '🙏', meaning: 'request', requires: ['請', '求'] },
  { word: '求人', jyutping: 'kau4 jan4', emoji: '🙇', meaning: 'ask for help', requires: ['求', '人'] },
  { word: '醒來', jyutping: 'sing2 loi4', emoji: '👀', meaning: 'wake up', requires: ['醒', '來'] },
  { word: '求救', jyutping: 'kau4 gau3', emoji: '🆘', meaning: 'call for help', requires: ['求', '救'] },
  { word: '等一等', jyutping: 'dang2 jat1 dang2', emoji: '✋', meaning: 'wait a moment', requires: ['等', '一'] },
  { word: '等等我', jyutping: 'dang2 dang2 ngo5', emoji: '🏃', meaning: 'wait for me', requires: ['等', '我'] },
  { word: '等到', jyutping: 'dang2 dou3', emoji: '⏳', meaning: 'wait until', requires: ['等', '到'] },
  { word: '高等', jyutping: 'gou1 dang2', emoji: '🎓', meaning: 'higher (level)', requires: ['高', '等'] },
  { word: '中等', jyutping: 'zung1 dang2', emoji: '📏', meaning: 'medium', requires: ['中', '等'] },
  { word: '好香', jyutping: 'hou2 hoeng1', emoji: '🌸', meaning: 'smells good', requires: ['好', '香'] },
  { word: '香甜', jyutping: 'hoeng1 tim4', emoji: '🍯', meaning: 'sweet-smelling', requires: ['香', '甜'] },
  { word: '香花', jyutping: 'hoeng1 faa1', emoji: '🌺', meaning: 'fragrant flower', requires: ['香', '花'] },
  { word: '香水', jyutping: 'hoeng1 seoi2', emoji: '🧴', meaning: 'perfume', requires: ['香', '水'] },
  { word: '香氣', jyutping: 'hoeng1 hei3', emoji: '💨', meaning: 'fragrance', requires: ['香', '氣'] },
  { word: '吃肉', jyutping: 'hek3 juk6', emoji: '🍖', meaning: 'eat meat', requires: ['吃', '肉'] },
  { word: '牛肉', jyutping: 'ngau4 juk6', emoji: '🥩', meaning: 'beef', requires: ['牛', '肉'] },
  { word: '羊肉', jyutping: 'joeng4 juk6', emoji: '🍖', meaning: 'mutton', requires: ['羊', '肉'] },
  { word: '魚肉', jyutping: 'jyu4 juk6', emoji: '🐟', meaning: 'fish meat', requires: ['魚', '肉'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    title: '小老鼠救獅子',
    sentence: [
      '在大草原上，一頭獅子正在睡覺。一隻老鼠從這裏走過，還在獅子頭上的毛裏坐了一會兒。',
      '「是誰！」獅子醒了，生氣地一把捉住了老鼠：「原來是你。也好，正好做我的午飯。」',
      '老鼠哭着求獅子：「放了我吧，我還有七個孩子在家等着我呢！你要是放了我，我會好好謝你，我是不會說假話的。」獅子想了想，想到老鼠的七個孩子還在等媽媽，就把老鼠放掉了。',
      '過了一天，獅子出來找吃的東西。',
      '「好香呀！」獅子走過去，看見地上有一堆肉。正想去拿，一張大網一下子網住了牠。動也不能動。獅子急得又喊又叫。',
      '這時，正好鼠媽媽和牠的孩子們從這兒走過。',
      '「呀！獅子大哥，你怎麼在這裏面呀？只有我能救你了。來！孩子們，我們一起來咬開這張網。」',
      '咬啊，咬啊，老鼠媽媽和小老鼠們把大網咬開了。獅子從裏面跳了出來。',
      '「謝謝你，老鼠太太。謝謝你們，老鼠小朋友。」',
    ],
    jyutping: '',
    meaning: '',
  },
]
