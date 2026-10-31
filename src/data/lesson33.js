// 第三十三課 Lesson 33 — 生字
export const CHARACTERS = [
  { char: '狼', jyutping: 'long4', word: '狼來了', wordJyutping: 'long4 loi4 liu5', emoji: '🐺', meaning: 'wolf' },
  { char: '啦', jyutping: 'laa1', word: '好啦', wordJyutping: 'hou2 laa1', emoji: '💬', meaning: 'particle' },
  { char: '趕', jyutping: 'gon2', word: '趕走', wordJyutping: 'gon2 zau2', emoji: '🏃', meaning: 'hurry/drive away' },
  { char: '救', jyutping: 'gau3', word: '救人', wordJyutping: 'gau3 jan4', emoji: '🆘', meaning: 'save/rescue' },
  { char: '假', jyutping: 'gaa2', word: '假裝', wordJyutping: 'gaa2 zong1', emoji: '🎭', meaning: 'fake/pretend' },
  { char: '掉', jyutping: 'diu6', word: '掉了', wordJyutping: 'diu6 liu5', emoji: '⬇️', meaning: 'drop/fall' },
  { char: '路', jyutping: 'lou6', word: '馬路', wordJyutping: 'maa5 lou6', emoji: '🛣️', meaning: 'road' },
  { char: '碰', jyutping: 'pung3', word: '碰到', wordJyutping: 'pung3 dou3', emoji: '💥', meaning: 'bump into/meet' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '摔東西', jyutping: 'seot1 dung1 sai1', emoji: '🤕', meaning: 'throw things', requires: ['摔', '東', '西'] },
  { word: '摔了', jyutping: 'seot1 liu5', emoji: '🤕', meaning: 'fell down', requires: ['摔', '了'] },
  { word: '摔打', jyutping: 'seot1 daa2', emoji: '💥', meaning: 'throw and hit', requires: ['摔', '打'] },
  { word: '大聲', jyutping: 'daai6 seng1', emoji: '📢', meaning: 'loud', requires: ['大', '聲'] },
  { word: '小聲', jyutping: 'siu2 seng1', emoji: '🤫', meaning: 'soft voice', requires: ['小', '聲'] },
  { word: '歌聲', jyutping: 'go1 seng1', emoji: '🎵', meaning: 'singing voice', requires: ['歌', '聲'] },
  { word: '笑聲', jyutping: 'siu3 seng1', emoji: '😄', meaning: 'laughter', requires: ['笑', '聲'] },
  { word: '風聲', jyutping: 'fung1 seng1', emoji: '🌬️', meaning: 'wind sound', requires: ['風', '聲'] },
  { word: '雨聲', jyutping: 'jyu5 seng1', emoji: '🌧️', meaning: 'rain sound', requires: ['雨', '聲'] },
  { word: '哭聲', jyutping: 'huk1 seng1', emoji: '😭', meaning: 'crying sound', requires: ['哭', '聲'] },
  { word: '讀書聲', jyutping: 'duk6 syu1 seng1', emoji: '📖', meaning: 'sound of reading', requires: ['讀', '書', '聲'] },
  { word: '是誰', jyutping: 'si6 seoi4', emoji: '❓', meaning: 'who is it', requires: ['是', '誰'] },
  { word: '誰的', jyutping: 'seoi4 dik1', emoji: '❓', meaning: 'whose', requires: ['誰', '的'] },
  { word: '誰呀', jyutping: 'seoi4 aa3', emoji: '❓', meaning: 'who?', requires: ['誰', '呀'] },
  { word: '認字', jyutping: 'jing6 zi6', emoji: '📖', meaning: 'recognize characters', requires: ['認', '字'] },
  { word: '認得', jyutping: 'jing6 dak1', emoji: '🤝', meaning: 'recognize', requires: ['認', '得'] },
  { word: '認生', jyutping: 'jing6 saang1', emoji: '🙈', meaning: 'shy with strangers', requires: ['認', '生'] },
  { word: '認真', jyutping: 'jing6 zan1', emoji: '🧐', meaning: 'serious/earnest', requires: ['認', '真'] },
  { word: '草原', jyutping: 'cou2 jyun4', emoji: '🌾', meaning: 'grassland', requires: ['草', '原'] },
  { word: '高原', jyutping: 'gou1 jyun4', emoji: '⛰️', meaning: 'plateau', requires: ['高', '原'] },
  { word: '原來', jyutping: 'jyun4 loi4', emoji: '💡', meaning: 'it turns out', requires: ['原', '來'] },
  { word: '好痛', jyutping: 'hou2 tung3', emoji: '🤕', meaning: 'very painful', requires: ['好', '痛'] },
  { word: '心痛', jyutping: 'sam1 tung3', emoji: '💔', meaning: 'heartache', requires: ['心', '痛'] },
  { word: '痛哭', jyutping: 'tung3 huk1', emoji: '😭', meaning: 'cry bitterly', requires: ['痛', '哭'] },
  { word: '痛快', jyutping: 'tung3 faai3', emoji: '😄', meaning: 'delighted', requires: ['痛', '快'] },
  { word: '頭痛', jyutping: 'tau4 tung3', emoji: '🤕', meaning: 'headache', requires: ['頭', '痛'] },
  { word: '喊叫', jyutping: 'haam3 giu3', emoji: '🗣️', meaning: 'shout/cry out', requires: ['喊', '叫'] },
  { word: '大喊', jyutping: 'daai6 haam3', emoji: '📣', meaning: 'cry loudly', requires: ['大', '喊'] },
  { word: '喊人', jyutping: 'haam3 jan4', emoji: '📢', meaning: 'call someone', requires: ['喊', '人'] },
  { word: '喊著', jyutping: 'haam3 zoek6', emoji: '😭', meaning: 'crying', requires: ['喊', '著'] },
  { word: '喊聲', jyutping: 'haam3 seng1', emoji: '😭', meaning: 'sound of crying', requires: ['喊', '聲'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    title: '小明生氣了',
    sentence: [
      '小明生氣了，就把書本摔到地上，又把他的玩具——小猴子、小狗、小貓、兔子、白馬都摔到了地上。',
      '過了一會兒，小明聽到了哭聲，哭聲不大。',
      '「是誰在哭呢？」',
      '小明打開門，想找找是誰在哭。沒有看見哭的人。',
      '小明回到家裡，又聽見了哭聲。認真聽聽，哭聲是從地上來的。',
      '「是誰在地上哭呢？」原來是地上的書本、小猴子、小狗、小貓、兔子和白馬。',
      '它們一邊哭一邊說：',
      '「小明把我們摔到地上，摔得好痛！」',
      '小朋友，你生氣時，是不是也摔東西，也摔書，也摔玩具？告訴你，把誰摔到地上，都是很痛的。',
    ],
    jyutping: '',
    meaning: '',
  },
]
