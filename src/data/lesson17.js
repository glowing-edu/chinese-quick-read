// 第十七課 Lesson 17 — 10 個生字
export const CHARACTERS = [
  { char: '玩', jyutping: 'waan4', word: '玩遊戲', wordJyutping: 'waan4 jau4 hei3', emoji: '🎮', meaning: 'play' },
  { char: '捉', jyutping: 'zuk1', word: '捉迷藏', wordJyutping: 'zuk1 mai4 cong4', emoji: '🙈', meaning: 'catch' },
  { char: '迷', jyutping: 'mai4', word: '迷藏', wordJyutping: 'mai4 cong4', emoji: '🕵️', meaning: 'hidden' },
  { char: '球', jyutping: 'kau4', word: '氣球', wordJyutping: 'hei3 kau4', emoji: '⚽', meaning: 'ball' },
  { char: '很', jyutping: 'han2', word: '很好', wordJyutping: 'han2 hou2', emoji: '👍', meaning: 'very' },
  { char: '高', jyutping: 'gou1', word: '跳高', wordJyutping: 'tiu3 gou1', emoji: '🧗', meaning: 'high' },
  { char: '鴨', jyutping: 'aap3', word: '小鴨', wordJyutping: 'siu2 aap3', emoji: '🦆', meaning: 'duck' },
  { char: '哈', jyutping: 'haa1', word: '哈哈', wordJyutping: 'haa1 haa1', emoji: '😂', meaning: 'haha' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '就是', jyutping: 'zau6 si6', emoji: '✅', meaning: 'exactly', requires: ['就', '是'] },
  { word: '還是', jyutping: 'waan4 si6', emoji: '❓', meaning: 'or', requires: ['還', '是'] },
  { word: '還有', jyutping: 'waan4 jau5', emoji: '➕', meaning: 'also have', requires: ['還', '有'] },
  { word: '得了', jyutping: 'dak1 liu5', emoji: '✅', meaning: 'okay', requires: ['得', '了'] },
  { word: '得到', jyutping: 'dak1 dou2', emoji: '🎁', meaning: 'get', requires: ['得', '到'] },
  { word: '來到', jyutping: 'loi4 dou3', emoji: '➡️', meaning: 'arrive', requires: ['來', '到'] },
  { word: '去到', jyutping: 'heoi3 dou3', emoji: '⬅️', meaning: 'go to', requires: ['去', '到'] },
  { word: '到了', jyutping: 'dou3 liu5', emoji: '📍', meaning: 'arrived', requires: ['到', '了'] },
  { word: '東西', jyutping: 'dung1 sai1', emoji: '📦', meaning: 'thing', requires: ['東', '西'] },
  { word: '東風', jyutping: 'dung1 fung1', emoji: '💨', meaning: 'east wind', requires: ['東', '風'] },
  { word: '快樂', jyutping: 'faai3 lok6', emoji: '😄', meaning: 'happy', requires: ['快', '樂'] },
  { word: '起來', jyutping: 'hei2 loi4', emoji: '⬆️', meaning: 'get up', requires: ['起', '來'] },
  { word: '一起', jyutping: 'jat1 hei2', emoji: '👨‍👩‍👦', meaning: 'together', requires: ['一', '起'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  { sentence: '天上的白雲飛的真快，小鳥飛不快，就哭了起來。媽媽說：「不要哭，不要哭！你是好孩子。」小鳥就不哭了。', jyutping: 'tin1 soeng6 dik1 baak6 wan4 fei1 dik1 zan1 faai3，siu2 niu5 fei1 bat1 faai3，zau6 huk1 liu5 hei2 loi4。maa1 maa1 syut3：「bat1 jiu3 huk1，bat1 jiu3 huk1！nei5 si6 hou2 haai4 zi2。」siu2 niu5 zau6 bat1 huk1 liu5', meaning: "Clouds fly fast, bird flies slow and cries. Mom says don't cry, you're a good child. Bird stops crying." },
  { sentence: '我看見天上有很多很多氣球，有大氣球、小氣球，有紅氣球、黃氣球，有藍氣球、白氣球，還有綠氣球，真好看！', jyutping: 'ngo5 hon3 gin3 tin1 soeng6 jau5 han2 do1 han2 do1 hei3 kau4，jau5 daai6 hei3 kau4、siu2 hei3 kau4，jau5 hung4 hei3 kau4、wong4 hei3 kau4，jau5 laam4 hei3 kau4、baak6 hei3 kau4，waan4 jau5 luk6 hei3 kau4，zan1 hou2 hon3', meaning: 'I see many balloons in the sky — big/small, red/yellow, blue/white, and green ones.' },
  { sentence: '我有四個好朋友，他們是小雲、明明、小紅和小葉子。我們大家一起學習，一起唱歌，一起遊戲。我們在一起真快樂！', jyutping: 'ngo5 jau5 sei3 go3 hou2 pang4 jau5，taa1 mun4 si6 siu2 wan4、ming4 ming4、siu2 hung4 wo4 siu2 jip6 zi2。ngo5 mun4 daai6 gaa1 jat1 hei2 hok6 zaap6，jat1 hei2 coeng3 go1，jat1 hei2 jau4 hei3。ngo5 mun4 zoi6 jat1 hei2 zan1 faai3 lok6', meaning: 'I have four good friends. We study, sing and play together — very happy together.' },
  { sentence: '我們家有七個人：爺爺、奶奶、爸爸和媽媽四個大人，還有哥哥、姐姐和我三個小孩子。哥哥、姐姐和我都是愛學習的好孩子。', jyutping: 'ngo5 mun4 gaa1 jau5 cat1 go3 jan4：je4 je4、naai5 naai5、baa1 baa1 wo4 maa1 maa1 sei3 go3 daai6 jan4，waan4 jau5 go1 go1、ze2 ze2 wo4 ngo5 saam1 go3 siu2 haai4 zi2。go1 go1、ze2 ze2 wo4 ngo5 dou1 si6 oi3 hok6 zaap6 dik1 hou2 haai4 zi2', meaning: 'Our family has 7 people — 4 adults and 3 children. We are all good children who love learning.' },
]
