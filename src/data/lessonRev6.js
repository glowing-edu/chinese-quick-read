// 溫習六 Revision 6
export const CHARACTERS = []

// 讀詞語 Reading words
export const WORDS = [
  { word: '其中', jyutping: 'kei4 zung1', emoji: '🔍', meaning: 'among them', requires: ['其', '中'] },
  { word: '其實', jyutping: 'kei4 sat6', emoji: '💡', meaning: 'actually', requires: ['其', '實'] },
  { word: '其他', jyutping: 'kei4 taa1', emoji: '➕', meaning: 'other', requires: ['其', '他'] },
  { word: '老實', jyutping: 'lou5 sat6', emoji: '😇', meaning: 'honest', requires: ['老', '實'] },
  { word: '實話', jyutping: 'sat6 waa6', emoji: '🗣️', meaning: 'truth', requires: ['實', '話'] },
  { word: '果實', jyutping: 'gwo2 sat6', emoji: '🍎', meaning: 'fruit', requires: ['果', '實'] },
  { word: '輕輕地', jyutping: 'heng1 heng1 dei6', emoji: '🪶', meaning: 'gently', requires: ['輕', '地'] },
  { word: '輕快', jyutping: 'heng1 faai3', emoji: '🎵', meaning: 'light and brisk', requires: ['輕', '快'] },
  { word: '輕聲', jyutping: 'heng1 sing1', emoji: '🤫', meaning: 'soft voice', requires: ['輕', '聲'] },
  { word: '輕鬆', jyutping: 'hing1 sung1', emoji: '😌', meaning: 'relaxed', requires: ['輕', '鬆'] },
  { word: '響亮', jyutping: 'hoeng2 loeng6', emoji: '🔊', meaning: 'loud and clear', requires: ['響', '亮'] },
  { word: '響聲', jyutping: 'hoeng2 sing1', emoji: '🔔', meaning: 'sound', requires: ['響', '聲'] },
  { word: '很響', jyutping: 'han2 hoeng2', emoji: '📢', meaning: 'very loud', requires: ['很', '響'] },
  { word: '遲到', jyutping: 'ci4 dou3', emoji: '⏰', meaning: 'late', requires: ['遲', '到'] },
  { word: '遲早', jyutping: 'ci4 zou2', emoji: '⏳', meaning: 'sooner or later', requires: ['遲', '早'] },
  { word: '已經', jyutping: 'ji5 ging1', emoji: '✅', meaning: 'already', requires: ['已', '經'] },
  { word: '以往', jyutping: 'ji5 wong5', emoji: '🕰️', meaning: 'in the past', requires: ['以', '往'] },
  { word: '叠起', jyutping: 'dip6 hei2', emoji: '📚', meaning: 'stack up', requires: ['叠', '起'] },
  { word: '叠被', jyutping: 'dip6 pei5', emoji: '🛏️', meaning: 'fold the quilt', requires: ['叠', '被'] },
  { word: '包子', jyutping: 'baau1 zi2', emoji: '🥟', meaning: 'steamed bun', requires: ['包', '子'] },
  { word: '書包', jyutping: 'syu1 baau1', emoji: '🎒', meaning: 'schoolbag', requires: ['書', '包'] },
  { word: '紙包', jyutping: 'zi2 baau1', emoji: '📦', meaning: 'paper packet', requires: ['紙', '包'] },
  { word: '大碗', jyutping: 'daai6 wun2', emoji: '🍜', meaning: 'big bowl', requires: ['大', '碗'] },
  { word: '小碗', jyutping: 'siu2 wun2', emoji: '🥣', meaning: 'small bowl', requires: ['小', '碗'] },
  { word: '水碗', jyutping: 'seoi2 wun2', emoji: '💧', meaning: 'water bowl', requires: ['水', '碗'] },
  { word: '飯碗', jyutping: 'faan6 wun2', emoji: '🍚', meaning: 'rice bowl', requires: ['飯', '碗'] },
  { word: '寫字', jyutping: 'se2 zi6', emoji: '✍️', meaning: 'write characters', requires: ['寫', '字'] },
  { word: '寫信', jyutping: 'se2 seon3', emoji: '💌', meaning: 'write a letter', requires: ['寫', '信'] },
  { word: '寫日記', jyutping: 'se2 jat6 gei3', emoji: '📔', meaning: 'keep a diary', requires: ['寫', '日', '記'] },
  { word: '寫書', jyutping: 'se2 syu1', emoji: '📖', meaning: 'write a book', requires: ['寫', '書'] },
  { word: '冒出來', jyutping: 'mou6 ceot1 loi4', emoji: '🌱', meaning: 'emerge', requires: ['冒', '出', '來'] },
  { word: '了不起', jyutping: 'liu5 bat1 hei2', emoji: '👍', meaning: 'amazing', requires: ['了', '不', '起'] },
  { word: '了不得', jyutping: 'liu5 bat1 dak1', emoji: '🌟', meaning: 'extraordinary', requires: ['了', '不', '得'] },
  { word: '不得了', jyutping: 'bat1 dak1 liu5', emoji: '😲', meaning: 'oh no/terrible', requires: ['不', '得', '了'] },
  { word: '了結', jyutping: 'liu5 git3', emoji: '🔚', meaning: 'settle/end', requires: ['了', '結'] },
  { word: '了解', jyutping: 'liu5 gaai2', emoji: '🧠', meaning: 'understand', requires: ['了', '解'] },
  { word: '您好', jyutping: 'nei5 hou2', emoji: '🙇', meaning: 'hello (polite)', requires: ['您', '好'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    title: '鬧鐘響遲了',
    sentence: [
      '天黑了，兔寶寶上牀睡覺了。兔媽媽把鬧鐘撥到 6 點，準備早上起來給兔寶寶做早飯。',
      '其實，兔寶寶一直沒有睡着，牠在等着媽媽睡覺。等到兔媽媽睡着了，兔寶寶就輕輕地起了牀，把鬧鐘撥到了 7 點。',
      '第二天早上，鬧鐘響了，兔媽媽坐起來一看，不得了！都 7 點了。兔寶寶會遲到的。',
      '可是一看，兔寶寶牀上的被子已經疊好了，書包也沒有了。兔寶寶已經上學去了。',
      '在桌子上放着一碗麵條，一個荷包蛋，還在冒熱氣呢。旁邊有一張紙條，上面寫着：「媽媽：能夠幫您做點事，我很快樂！請吃早飯吧，我去上學了。」',
      '你知道兔寶寶為什麼要這樣做嗎？因為牠覺得自己長大了，應該幫着媽媽做事情了。',
    ],
    jyutping: '',
    meaning: '',
  },
]
