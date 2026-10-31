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
    sentence:
      '小明在山上跑步，一不小心就摔了。他的頭好痛，就大聲喊起來。',
    jyutping:
      'siu2 ming4 zoi6 saan1 soeng6 paau2 bou6，jat1 bat1 siu2 sam1 zau6 seot1 liu5。taa1 dik1 tau4 hou2 tung3，zau6 daai6 seng1 haam3 hei2 loi4',
    meaning:
      'Xiaoming was running on the hill and fell. His head hurt, so he started crying loudly.',
  },
  {
    sentence:
      '媽媽聽到大喊聲，就來問：「誰在喊呢？是誰摔了？」小明認得媽媽，就說：「是我！原來是我摔了！」',
    jyutping:
      'maa1 maa1 teng1 dou3 daai6 haam3 seng1，zau6 loi4 man6：「seoi4 zoi6 haam3 ne1？si6 seoi4 seot1 liu5？」siu2 ming4 jing6 dak1 maa1 maa1，zau6 syut3：「si6 ngo5！jyun4 loi4 si6 ngo5 seot1 liu5！」',
    meaning:
      'Mum heard the loud crying and came to ask: "Who is crying? Who fell?" Xiaoming recognised Mum and said: "It is me! It turns out I fell!"',
  },
  {
    sentence:
      '媽媽說：「不要哭，我來抱你。很快就不痛了。」小明笑了，說：「謝謝媽媽！我會小心，不會再摔了。」',
    jyutping:
      'maa1 maa1 syut3：「bat1 jiu3 huk1，ngo5 loi4 pou5 nei5。han2 faai3 zau6 bat1 tung3 liu5。」siu2 ming4 siu3 liu5，syut3：「ze6 ze6 maa1 maa1！ngo5 wui5 siu2 sam1，bat1 wui5 zoi3 seot1 liu5。」',
    meaning:
      'Mum said: "Do not cry, I will hug you. It will stop hurting soon." Xiaoming laughed and said: "Thank you, Mum! I will be careful and will not fall again."',
  },
]
