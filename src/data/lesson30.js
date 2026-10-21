// 第三十課 Lesson 30 — 生字
export const CHARACTERS = [
  { char: '堆', jyutping: 'deoi1', word: '一堆', wordJyutping: 'jat1 deoi1', emoji: '🏔️', meaning: 'pile/heap' },
  { char: '仗', jyutping: 'zoeng6', word: '打仗', wordJyutping: 'daa2 zoeng6', emoji: '⚔️', meaning: 'battle/fight' },
  { char: '柳', jyutping: 'lau5', word: '柳樹', wordJyutping: 'lau5 syu6', emoji: '🌳', meaning: 'willow' },
  { char: '農', jyutping: 'nung4', word: '農民', wordJyutping: 'nung4 man4', emoji: '👨‍🌾', meaning: 'farm/agriculture' },
  { char: '民', jyutping: 'man4', word: '人民', wordJyutping: 'jan4 man4', emoji: '👥', meaning: 'people/citizen' },
  { char: '伯', jyutping: 'baak3', word: '伯伯', wordJyutping: 'baak3 baak3', emoji: '👴', meaning: 'uncle/elder' },
  { char: '種', jyutping: 'zung2', word: '種花', wordJyutping: 'zung2 faa1', emoji: '🌱', meaning: 'plant/type' },
  { char: '最', jyutping: 'zeoi3', word: '最好', wordJyutping: 'zeoi3 hou2', emoji: '🏆', meaning: 'most/best' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '菊花', jyutping: 'guk1 faa1', emoji: '🌼', meaning: 'chrysanthemum', requires: ['菊', '花'] },
  { word: '秋菊', jyutping: 'cau1 guk1', emoji: '🌼', meaning: 'autumn chrysanthemum', requires: ['秋', '菊'] },
  { word: '梅花', jyutping: 'mui4 faa1', emoji: '🌸', meaning: 'plum blossom', requires: ['梅', '花'] },
  { word: '梅子', jyutping: 'mui4 zi2', emoji: '🍑', meaning: 'plum fruit', requires: ['梅', '子'] },
  { word: '冷天', jyutping: 'laang5 tin1', emoji: '❄️', meaning: 'cold day', requires: ['冷', '天'] },
  { word: '很冷', jyutping: 'han2 laang5', emoji: '❄️', meaning: 'very cold', requires: ['很', '冷'] },
  { word: '冷的', jyutping: 'laang5 dik1', emoji: '❄️', meaning: 'cold (adjective)', requires: ['冷', '的'] },
  { word: '冷水', jyutping: 'laang5 seoi2', emoji: '💧', meaning: 'cold water', requires: ['冷', '水'] },
  { word: '冷風', jyutping: 'laang5 fung1', emoji: '💨', meaning: 'cold wind', requires: ['冷', '風'] },
  { word: '冷氣', jyutping: 'laang5 hei3', emoji: '❄️', meaning: 'air conditioning/cold air', requires: ['冷', '氣'] },
  { word: '冷笑', jyutping: 'laang5 siu3', emoji: '😏', meaning: 'sneer', requires: ['冷', '笑'] },
  { word: '天冷', jyutping: 'tin1 laang5', emoji: '❄️', meaning: 'weather is cold', requires: ['天', '冷'] },
  { word: '它的', jyutping: 'taa1 dik1', emoji: '🐾', meaning: 'its', requires: ['它', '的'] },
  { word: '它們', jyutping: 'taa1 mun4', emoji: '🐾', meaning: 'they (animals)', requires: ['它', '們'] },
  { word: '不怕', jyutping: 'bat1 paa3', emoji: '💪', meaning: 'not afraid', requires: ['不', '怕'] },
  { word: '怕人', jyutping: 'paa3 jan4', emoji: '😱', meaning: 'afraid of people', requires: ['怕', '人'] },
  { word: '怕生', jyutping: 'paa3 saang1', emoji: '😱', meaning: 'shy/timid', requires: ['怕', '生'] },
  { word: '怕冷', jyutping: 'paa3 laang5', emoji: '😱', meaning: 'afraid of cold', requires: ['怕', '冷'] },
  { word: '躲藏', jyutping: 'do2 cong4', emoji: '🙈', meaning: 'hide/conceal', requires: ['躲', '藏'] },
  { word: '躲起來', jyutping: 'do2 hei2 loi4', emoji: '🙈', meaning: 'hide away', requires: ['躲', '起', '來'] },
  { word: '躲雨', jyutping: 'do2 jyu5', emoji: '☔', meaning: 'take shelter from rain', requires: ['躲', '雨'] },
  { word: '勇敢', jyutping: 'jung5 gam2', emoji: '🦸', meaning: 'brave/courageous', requires: ['勇', '敢'] },
  { word: '勇氣', jyutping: 'jung5 hei3', emoji: '🦸', meaning: 'courage/bravery', requires: ['勇', '氣'] },
  { word: '敢想', jyutping: 'gam2 soeng2', emoji: '💭', meaning: 'dare to think', requires: ['敢', '想'] },
  { word: '敢說', jyutping: 'gam2 syut3', emoji: '💬', meaning: 'dare to speak', requires: ['敢', '說'] },
  { word: '敢問', jyutping: 'gam2 man6', emoji: '❓', meaning: 'dare to ask', requires: ['敢', '問'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  { sentence: '一年有四季：春季、夏季、秋季、冬季。一年四季都會開花，不同的花在不同的季節裡開。春天桃花開，夏天荷花開，秋天菊花開，冬天梅花開。', jyutping: 'jat1 nin4 jau5 sei3 gwai3：ceon1 gwai3、haa6 gwai3、cau1 gwai3、dung1 gwai3。jat1 nin4 sei3 gwai3 dou1 wui5 hoi1 faa1，bat1 tung4 dik1 faa1 zoi6 bat1 tung4 dik1 gwai3 zit3 leoi5 hoi1。ceon1 tin1 tou4 faa1 hoi1，haa6 tin1 ho4 faa1 hoi1，cau1 tin1 guk1 faa1 hoi1，dung1 tin1 mui4 faa1 hoi1', meaning: 'Four seasons - different flowers bloom in different seasons: peach in spring, lotus in summer, chrysanthemum in autumn, plum in winter.' },
  { sentence: '冬天到了，下大雪了，天氣好冷好冷。小猩猩、小猴子、小山羊、小白兔、小馬、小牛、小狗、小貓、小雞、小鴨、還有小鵝，都躲在家裡。', jyutping: 'dung1 tin1 dou3 liu5，haa6 daai6 syut3 liu5，tin1 hei3 hou2 laang5 hou2 laang5。siu2 sing1 sing1、siu2 hau4 zi2、siu2 saan1 joeng4、siu2 baak6 tou3、siu2 maa5、siu2 ngau4、siu2 gau2、siu2 maau1、siu2 gai1、siu2 aap3、waan4 jau5 siu2 ngo4，dou1 do2 zoi6 gaa1 leoi5', meaning: 'Winter is cold and snowy - all animals hide at home.' },
  { sentence: '「我也不出去，天氣太冷了。」小朋友們也都躲在家裡。只有梅花不怕冷，他在樹上笑。從天上飛下來的雪花也對著梅花笑，還對他說：「你真勇敢！」', jyutping: '「ngo5 jaa5 bat1 ceot1 heoi3，tin1 hei3 taai3 laang5 liu5。」siu2 pang4 jau5 mun4 jaa5 dou1 do2 zoi6 gaa1 leoi5。zi2 jau5 mui4 faa1 bat1 paa3 laang5，taa1 zoi6 syu6 soeng6 siu3。cung4 tin1 soeng6 fei1 haa6 loi4 dik1 syut3 faa1 jaa5 deoi3 zoek6 mui4 faa1 siu3，waan4 deoi3 taa1 syut3：「nei5 zan1 jung5 gam2」', meaning: 'Only the plum blossom is not afraid of the cold - it smiles bravely in the snow.' },
]
