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
  { word: '摔了', jyutping: 'seot1 liu5', emoji: '🤕', meaning: 'fell down', requires: ['摔', '了'] },
  { word: '大聲', jyutping: 'daai6 seng1', emoji: '📢', meaning: 'loud', requires: ['大', '聲'] },
  { word: '出聲', jyutping: 'ceot1 seng1', emoji: '🗣️', meaning: 'speak up', requires: ['出', '聲'] },
  { word: '一聲', jyutping: 'jat1 seng1', emoji: '📣', meaning: 'a sound', requires: ['一', '聲'] },
  { word: '笑聲', jyutping: 'siu3 seng1', emoji: '😄', meaning: 'laughter', requires: ['笑', '聲'] },
  { word: '歌聲', jyutping: 'go1 seng1', emoji: '🎵', meaning: 'singing voice', requires: ['歌', '聲'] },
  { word: '是誰', jyutping: 'si6 seoi4', emoji: '❓', meaning: 'who is it', requires: ['是', '誰'] },
  { word: '誰人', jyutping: 'seoi4 jan4', emoji: '❓', meaning: 'who', requires: ['誰', '人'] },
  { word: '誰的', jyutping: 'seoi4 dik1', emoji: '❓', meaning: 'whose', requires: ['誰', '的'] },
  { word: '我呢', jyutping: 'ngo5 ne1', emoji: '🙋', meaning: 'and me?', requires: ['我', '呢'] },
  { word: '呢個', jyutping: 'ni1 go3', emoji: '👉', meaning: 'this one', requires: ['呢', '個'] },
  { word: '認得', jyutping: 'jing6 dak1', emoji: '🤝', meaning: 'recognize', requires: ['認', '得'] },
  { word: '認字', jyutping: 'jing6 zi6', emoji: '📖', meaning: 'recognize words', requires: ['認', '字'] },
  { word: '認真', jyutping: 'jing6 zan1', emoji: '🧐', meaning: 'serious/earnest', requires: ['認', '真'] },
  { word: '原來', jyutping: 'jyun4 loi4', emoji: '💡', meaning: 'it turns out', requires: ['原', '來'] },
  { word: '草原', jyutping: 'cou2 jyun4', emoji: '🌾', meaning: 'grassland', requires: ['草', '原'] },
  { word: '好痛', jyutping: 'hou2 tung3', emoji: '🤕', meaning: 'very painful', requires: ['好', '痛'] },
  { word: '心痛', jyutping: 'sam1 tung3', emoji: '💔', meaning: 'heartache', requires: ['心', '痛'] },
  { word: '頭痛', jyutping: 'tau4 tung3', emoji: '🤕', meaning: 'headache', requires: ['頭', '痛'] },
  { word: '痛了', jyutping: 'tung3 liu5', emoji: '😣', meaning: 'started to hurt', requires: ['痛', '了'] },
  { word: '大喊', jyutping: 'daai6 haam3', emoji: '📣', meaning: 'cry loudly', requires: ['大', '喊'] },
  { word: '喊叫', jyutping: 'haam3 giu3', emoji: '🗣️', meaning: 'cry out', requires: ['喊', '叫'] },
  { word: '喊聲', jyutping: 'haam3 seng1', emoji: '😭', meaning: 'sound of crying', requires: ['喊', '聲'] },
  { word: '大喊聲', jyutping: 'daai6 haam3 seng1', emoji: '📢', meaning: 'loud crying', requires: ['大', '喊', '聲'] },
  { word: '大聲喊', jyutping: 'daai6 seng1 haam3', emoji: '📣', meaning: 'cry loudly', requires: ['大', '聲', '喊'] },
  { word: '又喊', jyutping: 'jau6 haam3', emoji: '😭', meaning: 'cry again', requires: ['又', '喊'] },
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
