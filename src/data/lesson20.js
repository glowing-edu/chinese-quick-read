// 第二十課 Lesson 20 — 10 個生字
export const CHARACTERS = [
  { char: '回', jyutping: 'wui4', word: '回家', wordJyutping: 'wui4 gaa1', emoji: '🏠', meaning: 'return' },
  { char: '公', jyutping: 'gung1', word: '公公', wordJyutping: 'gung1 gung1', emoji: '👴', meaning: 'public/grandpa' },
  { char: '打', jyutping: 'daa2', word: '打人', wordJyutping: 'daa2 jan4', emoji: '👊', meaning: 'hit' },
  { char: '兔', jyutping: 'tou3', word: '兔子', wordJyutping: 'tou3 zi2', emoji: '🐰', meaning: 'rabbit' },
  { char: '請', jyutping: 'cing2', word: '請你', wordJyutping: 'cing2 nei5', emoji: '🙏', meaning: 'please/invite' },
  { char: '過', jyutping: 'gwo3', word: '過來', wordJyutping: 'gwo3 loi4', emoji: '➡️', meaning: 'pass/cross' },
  { char: '嗎', jyutping: 'maa3', word: '好嗎', wordJyutping: 'hou2 maa3', emoji: '❓', meaning: 'question particle' },
  { char: '泳', jyutping: 'wing6', word: '游泳', wordJyutping: 'jau4 wing6', emoji: '🏊', meaning: 'swim' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '變了', jyutping: 'bin3 liu5', emoji: '🔄', meaning: 'changed', requires: ['變', '了'] },
  { word: '不變', jyutping: 'bat1 bin3', emoji: '➡️', meaning: 'unchanged', requires: ['不', '變'] },
  { word: '變成', jyutping: 'bin3 sing4', emoji: '🔄', meaning: 'become', requires: ['變', '成'] },
  { word: '問好', jyutping: 'man6 hou2', emoji: '👋', meaning: 'say hello', requires: ['問', '好'] },
  { word: '問人', jyutping: 'man6 jan4', emoji: '❓', meaning: 'ask people', requires: ['問', '人'] },
  { word: '再見', jyutping: 'zoi3 gin3', emoji: '👋', meaning: 'goodbye', requires: ['再', '見'] },
  { word: '再說', jyutping: 'zoi3 syut3', emoji: '💬', meaning: 'say again', requires: ['再', '說'] },
  { word: '再去', jyutping: 'zoi3 heoi3', emoji: '➡️', meaning: 'go again', requires: ['再', '去'] },
  { word: '再來', jyutping: 'zoi3 loi4', emoji: '🔁', meaning: 'come again', requires: ['再', '來'] },
  { word: '急得', jyutping: 'gap1 dak1', emoji: '😰', meaning: 'worried', requires: ['急', '得'] },
  { word: '著急', jyutping: 'zoek6 gap1', emoji: '😰', meaning: 'anxious', requires: ['著', '急'] },
  { word: '大門', jyutping: 'daai6 mun4', emoji: '🚪', meaning: 'big door', requires: ['大', '門'] },
  { word: '開門', jyutping: 'hoi1 mun4', emoji: '🚪', meaning: 'open door', requires: ['開', '門'] },
  { word: '門口', jyutping: 'mun4 hau2', emoji: '🚪', meaning: 'doorway', requires: ['門', '口'] },
  { word: '一隻', jyutping: 'jat1 zi2', emoji: '1️⃣', meaning: 'one (animal)', requires: ['一', '隻'] },
  { word: '三隻', jyutping: 'saam1 zi2', emoji: '3️⃣', meaning: 'three', requires: ['三', '隻'] },
  { word: '一聲', jyutping: 'jat1 seng1', emoji: '📣', meaning: 'a sound', requires: ['一', '聲'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  { sentence: '我家門口的樹上有一隻愛唱歌的小黃鳥。他天天都要唱很多好聽的歌。', jyutping: 'ngo5 gaa1 mun4 hau2 dik1 syu6 soeng6 jau5 jat1 zi2 oi3 coeng3 go1 dik1 siu2 wong4 niu5。taa1 tin1 tin1 dou1 jiu3 coeng3 hou2 do1 hou2 teng1 dik1 go1', meaning: 'There is a singing bird outside my house.' },
  { sentence: '我問爸爸「早上好」，爸爸對我笑；我問媽媽「早上好」，媽媽說我是好寶寶。', jyutping: 'ngo5 man6 baa1 baa1「zou2 soeng6 hou2」，baa1 baa1 deoi3 ngo5 siu3；ngo5 man6 maa1 maa1「zou2 soeng6 hou2」，maa1 maa1 syut3 ngo5 si6 hou2 bou2 bou2', meaning: 'I say good morning to parents, they smile.' },
  { sentence: '小鳥在天上飛，叫白雲和它一起落到樹上。白雲說：「我不能落，我一落到樹上，就會變成水，不能再飛了。」', jyutping: 'siu2 niu5 zoi6 tin1 soeng6 fei1，giu3 baak6 wan4 wo4 taa1 jat1 hei2 lok6 dou3 syu6 soeng6。baak6 wan4 syut3：「ngo5 bat1 nang4 lok6，ngo5 jat1 lok6 dou3 syu6 soeng6，zau6 wui5 bin3 sing4 seoi2，bat1 nang4 zoi3 fei1 liu5」', meaning: 'Bird asks cloud to come down, cloud says it would become rain.' },
]
