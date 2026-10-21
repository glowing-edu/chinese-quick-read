// 第十九課 Lesson 19 — 10 個生字
export const CHARACTERS = [
  { char: '變', jyutping: 'bin3', word: '變了', wordJyutping: 'bin3 liu5', emoji: '🔄', meaning: 'change' },
  { char: '問', jyutping: 'man6', word: '問好', wordJyutping: 'man6 hou2', emoji: '❓', meaning: 'ask' },
  { char: '成', jyutping: 'sing4', word: '變成', wordJyutping: 'bin3 sing4', emoji: '➡️', meaning: 'become' },
  { char: '再', jyutping: 'zoi3', word: '再見', wordJyutping: 'zoi3 gin3', emoji: '👋', meaning: 'again' },
  { char: '急', jyutping: 'gap1', word: '著急', wordJyutping: 'zoek6 gap1', emoji: '😰', meaning: 'urgent' },
  { char: '教', jyutping: 'gaau3', word: '教學', wordJyutping: 'gaau3 hok6', emoji: '👨‍🏫', meaning: 'teach' },
  { char: '門', jyutping: 'mun4', word: '大門', wordJyutping: 'daai6 mun4', emoji: '🚪', meaning: 'door' },
  { char: '只', jyutping: 'zi2', word: '一只', wordJyutping: 'jat1 zi2', emoji: '1️⃣', meaning: 'only/classifier' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '地方', jyutping: 'dei6 fong1', emoji: '📍', meaning: 'place', requires: ['地', '方'] },
  { word: '上方', jyutping: 'soeng6 fong1', emoji: '⬆️', meaning: 'above', requires: ['上', '方'] },
  { word: '爬山', jyutping: 'paa4 saan1', emoji: '🏔️', meaning: 'climb mountain', requires: ['爬', '山'] },
  { word: '爬樹', jyutping: 'paa4 syu6', emoji: '🌳', meaning: 'climb tree', requires: ['爬', '樹'] },
  { word: '高興', jyutping: 'gou1 hing3', emoji: '😃', meaning: 'happy', requires: ['高', '興'] },
  { word: '方向', jyutping: 'fong1 hoeng3', emoji: '➡️', meaning: 'direction', requires: ['方', '向'] },
  { word: '向著', jyutping: 'hoeng3 zoek6', emoji: '➡️', meaning: 'towards', requires: ['向', '著'] },
  { word: '捉迷藏', jyutping: 'zuk1 mai4 cong4', emoji: '🙈', meaning: 'hide and seek', requires: ['捉', '迷', '藏'] },
  { word: '對著', jyutping: 'deoi3 zoek6', emoji: '👀', meaning: 'facing', requires: ['對', '著'] },
  { word: '不對', jyutping: 'bat1 deoi3', emoji: '❌', meaning: 'wrong', requires: ['不', '對'] },
  { word: '對不對', jyutping: 'deoi3 bat1 deoi3', emoji: '❓', meaning: 'right or wrong?', requires: ['對', '不'] },
  { word: '大叫', jyutping: 'daai6 giu3', emoji: '📣', meaning: 'shout', requires: ['大', '叫'] },
  { word: '叫著', jyutping: 'giu3 zoek6', emoji: '📣', meaning: 'shouting', requires: ['叫', '著'] },
  { word: '不能', jyutping: 'bat1 nang4', emoji: '🚫', meaning: 'cannot', requires: ['不', '能'] },
  { word: '對不起', jyutping: 'deoi3 bat1 hei2', emoji: '🙏', meaning: 'sorry', requires: ['對', '不', '起'] },
  { word: '能不能', jyutping: 'nang4 bat1 nang4', emoji: '❓', meaning: 'can or not?', requires: ['能', '不'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  { sentence: '小狗不會爬樹，向小白貓學習。小白貓在樹上看著小狗爬樹，見小狗爬不上去，就樂得哈哈大笑。你說，小白貓做得對不對？', jyutping: 'siu2 gau2 bat1 wui5 paa4 syu6，hoeng3 siu2 baak6 maau1 hok6 zaap6。siu2 baak6 maau1 zoi6 syu6 soeng6 hon3 zoek6 siu2 gau2 paa4 syu6，gin3 siu2 gau2 paa4 bat1 soeng6 heoi3，zau6 lok6 dak1 haa1 haa1 daai6 siu3。nei5 syut3，siu2 baak6 maau1 zou6 dak1 deoi3 bat1 deoi3', meaning: "Dog can't climb tree, learns from cat. Cat laughs when dog fails. Is cat right?" },
  { sentence: '我在田方家裡看見了小紅姐姐、東東哥哥、牛牛弟弟和白雪妹妹。我們在一起玩「捉迷藏」的遊戲。大家高興得又唱又跳。', jyutping: 'ngo5 zoi6 tin4 fong1 gaa1 leoi5 hon3 gin3 liu5 siu2 hung4 ze2 ze2、dung1 dung1 go1 go1、ngau4 ngau4 dai6 dai6 wo4 baak6 syut3 mui6 mui6。ngo5 mun4 zoi6 jat1 hei2 waan4「zuk1 mai4 cong4」dik1 jau4 hei3。daai6 gaa1 gou1 hing3 dak1 jau6 coeng3 jau6 tiu3', meaning: 'I see friends at home and we play hide-and-seek, singing and jumping.' },
]
