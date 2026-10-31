// 第五十九課 Lesson 59 — 生字
export const CHARACTERS = [
  { char: '祝', jyutping: 'zuk1', word: '祝福', wordJyutping: 'zuk1 fuk1', emoji: '🎉', meaning: 'wish/bless' },
  { char: '賀', jyutping: 'ho6', word: '祝賀', wordJyutping: 'zuk1 ho6', emoji: '🎊', meaning: 'congratulate' },
  { char: '腦', jyutping: 'nou5', word: '大腦', wordJyutping: 'daai6 nou5', emoji: '🧠', meaning: 'brain' },
  { char: '呆', jyutping: 'ngoi4', word: '發呆', wordJyutping: 'faat3 ngoi4', emoji: '😶', meaning: 'blank/stay' },
  { char: '牀', jyutping: 'cong4', word: '牀上', wordJyutping: 'cong4 soeng6', emoji: '🛏️', meaning: 'bed' },
  { char: '鬧', jyutping: 'naau6', word: '熱鬧', wordJyutping: 'jit6 naau6', emoji: '🎉', meaning: 'noisy/rowdy' },
  { char: '鐘', jyutping: 'zung1', word: '時鐘', wordJyutping: 'si4 zung1', emoji: '🕰️', meaning: 'clock' },
  { char: '撥', jyutping: 'but6', word: '撥電話', wordJyutping: 'but6 din6 waa2', emoji: '📞', meaning: 'dial' },
  { char: '準', jyutping: 'zeon2', word: '準備', wordJyutping: 'zeon2 bei6', emoji: '✅', meaning: 'accurate/prepare' },
  { char: '備', jyutping: 'bei6', word: '準備', wordJyutping: 'zeon2 bei6', emoji: '✅', meaning: 'prepare' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '騎車', jyutping: 'ke4 ce1', emoji: '🚲', meaning: 'ride a bike', requires: ['騎', '車'] },
  { word: '騎自行車', jyutping: 'ke4 zi6 hang4 ce1', emoji: '🚲', meaning: 'ride a bicycle', requires: ['騎', '自', '行', '車'] },
  { word: '騎馬', jyutping: 'ke4 maa5', emoji: '🐎', meaning: 'ride a horse', requires: ['騎', '馬'] },
  { word: '行人', jyutping: 'haang4 jan4', emoji: '🚶', meaning: 'pedestrian', requires: ['行', '人'] },
  { word: '人行道', jyutping: 'jan4 hang4 dou6', emoji: '🚶', meaning: 'sidewalk', requires: ['人', '行', '道'] },
  { word: '行走', jyutping: 'haang4 zau2', emoji: '🚶', meaning: 'walk', requires: ['行', '走'] },
  { word: '遠近', jyutping: 'jyun5 kan5', emoji: '🌍', meaning: 'far and near', requires: ['遠', '近'] },
  { word: '很遠', jyutping: 'han2 jyun5', emoji: '🛣️', meaning: 'very far', requires: ['很', '遠'] },
  { word: '走遠', jyutping: 'zau2 jyun5', emoji: '🚶', meaning: 'walk far away', requires: ['走', '遠'] },
  { word: '遠方', jyutping: 'jyun5 fong1', emoji: '🏞️', meaning: 'distant place', requires: ['遠', '方'] },
  { word: '出遠門', jyutping: 'ceot1 jyun5 mun4', emoji: '🧳', meaning: 'travel far', requires: ['出', '遠', '門'] },
  { word: '經過', jyutping: 'ging1 gwo3', emoji: '➡️', meaning: 'pass by', requires: ['經', '過'] },
  { word: '一旁', jyutping: 'jat1 pong4', emoji: '📍', meaning: 'to one side', requires: ['一', '旁'] },
  { word: '旁邊', jyutping: 'pong4 bin1', emoji: '📍', meaning: 'beside', requires: ['旁', '邊'] },
  { word: '旁人', jyutping: 'pong4 jan4', emoji: '👥', meaning: 'bystanders', requires: ['旁', '人'] },
  { word: '路旁', jyutping: 'lou6 pong4', emoji: '🛣️', meaning: 'roadside', requires: ['路', '旁'] },
  { word: '旁聽', jyutping: 'pong4 teng1', emoji: '👂', meaning: 'sit in/listen', requires: ['旁', '聽'] },
  { word: '大嬸', jyutping: 'daai6 sam2', emoji: '👩', meaning: 'aunt', requires: ['大', '嬸'] },
  { word: '嫂子', jyutping: 'sou2 zi2', emoji: '👩', meaning: 'sister-in-law', requires: ['嫂', '子'] },
  { word: '笑呵呵', jyutping: 'siu3 ho1 ho1', emoji: '😄', meaning: 'laughing', requires: ['笑', '呵'] },
  { word: '樂呵呵', jyutping: 'lok6 ho1 ho1', emoji: '😄', meaning: 'cheerful', requires: ['樂', '呵'] },
  { word: '稀奇', jyutping: 'hei1 kei4', emoji: '🔍', meaning: 'rare/strange', requires: ['稀', '奇'] },
  { word: '稀少', jyutping: 'hei1 siu2', emoji: '🔍', meaning: 'scarce', requires: ['稀', '少'] },
  { word: '稀飯', jyutping: 'hei1 faan6', emoji: '🥣', meaning: 'congee', requires: ['稀', '飯'] },
  { word: '奇怪', jyutping: 'kei4 gwaai3', emoji: '❓', meaning: 'strange', requires: ['奇', '怪'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    title: '兩個蘋果',
    sentence: [
      '小花狗騎着自行車回家，從車的後籃裏掉下來兩個大蘋果。小羊看見了，喊道：「小花狗，蘋果掉了！」喊了好幾聲，小花狗都沒有聽見。小羊只好拿着兩個大蘋果，看着小花狗騎遠了。',
      '小豬看見了，對小羊說：「小花狗已經走遠了，就給我吃一個吧！」',
      '小羊說：「不行。」',
      '小豬說：「你一個人想吃兩個。真壞！」',
      '小白兔開着小汽車經過這裏，小羊急忙叫着：「小白兔，小白兔，你停一停，幫我把大蘋果還給小花狗。」',
      '小白兔說：「你坐上來吧。我開車追上小花狗，你自己還給牠吧！」',
      '小豬在一旁，聽見牠們說的話，臉紅了。',
      '小白兔開車趕上了小花狗，小花狗接過小羊的蘋果，說：「謝謝小羊，謝謝你們大家。」',
    ],
    jyutping: '',
    meaning: '',
  },
]
