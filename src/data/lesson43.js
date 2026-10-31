// 第四十三課 Lesson 43 — 生字
export const CHARACTERS = [
  { char: '胡', jyutping: 'wu4', word: '胡說', wordJyutping: 'wu4 syut3', emoji: '🗣️', meaning: 'talk nonsense' },
  { char: '虎', jyutping: 'fu2', word: '老虎', wordJyutping: 'lou5 fu2', emoji: '🐯', meaning: 'tiger' },
  { char: '貼', jyutping: 'tip3', word: '貼紙', wordJyutping: 'tip3 zi2', emoji: '🏷️', meaning: 'stick/sticker' },
  { char: '才', jyutping: 'coi4', word: '天才', wordJyutping: 'tin1 coi4', emoji: '🧠', meaning: 'talent/genius' },
  { char: '數', jyutping: 'sou3', word: '數學', wordJyutping: 'sou3 hok6', emoji: '🔢', meaning: 'number/count' },
  { char: '更', jyutping: 'gang3', word: '更好', wordJyutping: 'gang3 hou2', emoji: '⬆️', meaning: 'even better' },
  { char: '朵', jyutping: 'do2', word: '花朵', wordJyutping: 'faa1 do2', emoji: '🌸', meaning: 'flower (measure word)' },
  { char: '紙', jyutping: 'zi2', word: '紙張', wordJyutping: 'zi2 zoeng1', emoji: '📄', meaning: 'paper' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '一張', jyutping: 'jat1 zoeng1', emoji: '1️⃣', meaning: 'one (sheet)', requires: ['一', '張'] },
  { word: '張口', jyutping: 'zoeng1 hau2', emoji: '😮', meaning: 'open the mouth', requires: ['張', '口'] },
  { word: '張大', jyutping: 'zoeng1 daai6', emoji: '😲', meaning: 'open wide', requires: ['張', '大'] },
  { word: '大網', jyutping: 'daai6 mong5', emoji: '🕸️', meaning: 'big net', requires: ['大', '網'] },
  { word: '網子', jyutping: 'mong5 zi2', emoji: '🕸️', meaning: 'net', requires: ['網', '子'] },
  { word: '漁網', jyutping: 'jyu4 mong5', emoji: '🎣', meaning: 'fishing net', requires: ['漁', '網'] },
  { word: '上網', jyutping: 'soeng5 mong5', emoji: '💻', meaning: 'go online', requires: ['上', '網'] },
  { word: '毛蟲', jyutping: 'mou4 cung4', emoji: '🐛', meaning: 'caterpillar', requires: ['毛', '蟲'] },
  { word: '咬人', jyutping: 'ngaau5 jan4', emoji: '😬', meaning: 'bite people', requires: ['咬', '人'] },
  { word: '不咬', jyutping: 'bat1 ngaau5', emoji: '🙅', meaning: "don't bite", requires: ['不', '咬'] },
  { word: '咬牙', jyutping: 'ngaau5 ngaa4', emoji: '😖', meaning: 'grit one’s teeth', requires: ['咬', '牙'] },
  { word: '咬東西', jyutping: 'ngaau5 dung1 sai1', emoji: '🦷', meaning: 'bite things', requires: ['咬', '東', '西'] },
  { word: '用力', jyutping: 'jung6 lik6', emoji: '💪', meaning: 'use force', requires: ['用', '力'] },
  { word: '力氣', jyutping: 'lik6 hei3', emoji: '💪', meaning: 'strength', requires: ['力', '氣'] },
  { word: '大力水手', jyutping: 'daai6 lik6 seoi2 sau2', emoji: '💪', meaning: 'Popeye', requires: ['大', '力', '水', '手'] },
  { word: '來啊', jyutping: 'loi4 aa3', emoji: '👋', meaning: 'come on', requires: ['來', '啊'] },
  { word: '走啊', jyutping: 'zau2 aa3', emoji: '🚶', meaning: "let's go", requires: ['走', '啊'] },
  { word: '吃啊', jyutping: 'hek3 aa3', emoji: '🍽️', meaning: 'eat', requires: ['吃', '啊'] },
  { word: '長牙', jyutping: 'coeng4 ngaa4', emoji: '🦷', meaning: 'grow teeth', requires: ['長', '牙'] },
  { word: '門牙', jyutping: 'mun4 ngaa4', emoji: '🦷', meaning: 'front tooth', requires: ['門', '牙'] },
  { word: '蛀牙', jyutping: 'zyu3 ngaa4', emoji: '🦷', meaning: 'tooth decay', requires: ['蛀', '牙'] },
  { word: '掉牙', jyutping: 'diu6 ngaa4', emoji: '🦷', meaning: 'lose a tooth', requires: ['掉', '牙'] },
  { word: '月牙', jyutping: 'jyut6 ngaa4', emoji: '🌙', meaning: 'crescent moon', requires: ['月', '牙'] },
  { word: '尖牙', jyutping: 'zim1 ngaa4', emoji: '🧛', meaning: 'sharp tooth', requires: ['尖', '牙'] },
  { word: '小嘴', jyutping: 'siu2 zeoi2', emoji: '👄', meaning: 'little mouth', requires: ['小', '嘴'] },
  { word: '嘴裏', jyutping: 'zeoi2 leoi5', emoji: '👄', meaning: 'inside the mouth', requires: ['嘴', '裏'] },
  { word: '嘴巴', jyutping: 'zeoi2 baa1', emoji: '👄', meaning: 'mouth', requires: ['嘴', '巴'] },
  { word: '張嘴', jyutping: 'zoeng1 zeoi2', emoji: '😮', meaning: 'open the mouth', requires: ['張', '嘴'] },
  { word: '漂着', jyutping: 'piu1 zoek6', emoji: '🌊', meaning: 'floating', requires: ['漂', '着'] },
  { word: '漂白', jyutping: 'piu3 baak6', emoji: '🤍', meaning: 'bleach', requires: ['漂', '白'] },
  { word: '漂亮', jyutping: 'piu3 loeng6', emoji: '✨', meaning: 'pretty', requires: ['漂', '亮'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    title: '大灰狼拔牙',
    sentence: [
      '大灰狼牙痛，牠就去找大猩猩。大猩猩問牠：「你怎麼啦？」大灰狼說：「我的牙痛得很，咬不動東西，天天都覺得肚子餓。很不好過。怎麼辦呢？」大猩猩說：「我來給你拔吧！」大灰狼說：「怎麼拔呢？」大猩猩想了想，說：「是呀！用甚麼東西拔呢？」',
      '正在這時，小猴子來了，大猩猩就請小猴子幫着想。小猴子想了想，說：「有了。」就去拿了一塊石頭，叫大灰狼用力咬。',
      '大灰狼不敢咬，說：「你這哪裏是幫我拔牙，你是在害我呀！」小猴子聽了，回頭就走。大猩猩也要走了。',
      '大灰狼着急了，想快把痛的牙拔了去，好去找東西吃。',
      '「好吧，好吧。我咬，我咬。是不是能拔掉呢？」小猴子說：「你要用最大的力氣咬，不用力是拔不掉的。」',
      '大灰狼就用了最大的力氣，大口一咬。',
      '「啊呀！啊呀！不得了啦，好痛呀！」大灰狼一邊喊，一邊叫，一邊跳。原來，大灰狼一嘴的牙都咬掉了。',
      '大灰狼再也吃不了肉了，再也沒有誰怕牠了。',
    ],
    jyutping: '',
    meaning: '',
  },
]
