// 第五十二課 Lesson 52 — 生字
export const CHARACTERS = [
  { char: '湖', jyutping: 'wu4', word: '湖水', wordJyutping: 'wu4 seoi2', emoji: '🏞️', meaning: 'lake' },
  { char: '棵', jyutping: 'po1', word: '一棵樹', wordJyutping: 'jat1 po1 syu6', emoji: '🌳', meaning: '(classifier for trees)' },
  { char: '瓜', jyutping: 'gwaa1', word: '西瓜', wordJyutping: 'sai1 gwaa1', emoji: '🍉', meaning: 'melon' },
  { char: '透', jyutping: 'tau3', word: '透明', wordJyutping: 'tau3 ming4', emoji: '🔍', meaning: 'transparent/through' },
  { char: '腿', jyutping: 'teoi2', word: '大腿', wordJyutping: 'daai6 teoi2', emoji: '🦵', meaning: 'leg' },
  { char: '狐', jyutping: 'wu4', word: '狐狸', wordJyutping: 'wu4 lei4', emoji: '🦊', meaning: 'fox' },
  { char: '粗', jyutping: 'cou1', word: '粗心', wordJyutping: 'cou1 sam1', emoji: '😅', meaning: 'coarse/careless' },
  { char: '竿', jyutping: 'gon1', word: '竹竿', wordJyutping: 'zuk1 gon1', emoji: '🎋', meaning: 'pole/rod' },
  { char: '狸', jyutping: 'lei4', word: '狐狸', wordJyutping: 'wu4 lei4', emoji: '🦊', meaning: 'fox' },
  { char: '跟', jyutping: 'gan1', word: '跟住', wordJyutping: 'gan1 zyu6', emoji: '👣', meaning: 'follow/with' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '被子', jyutping: 'bei6 zi2', emoji: '🛏️', meaning: 'quilt', requires: ['被', '子'] },
  { word: '被告', jyutping: 'bei6 gou3', emoji: '⚖️', meaning: 'defendant', requires: ['被', '告'] },
  { word: '夠不夠', jyutping: 'gau3 bat1 gau3', emoji: '❓', meaning: 'enough or not', requires: ['夠', '不'] },
  { word: '不夠', jyutping: 'bat1 gau3', emoji: '❌', meaning: 'not enough', requires: ['不', '夠'] },
  { word: '能夠', jyutping: 'nang4 gau3', emoji: '✅', meaning: 'can/be able to', requires: ['能', '夠'] },
  { word: '不夠高', jyutping: 'bat1 gau3 gou1', emoji: '📏', meaning: 'not tall enough', requires: ['不', '夠', '高'] },
  { word: '夠朋友', jyutping: 'gau3 pang4 jau5', emoji: '🤝', meaning: 'a true friend', requires: ['夠', '朋', '友'] },
  { word: '碰到', jyutping: 'pung3 dou3', emoji: '🤝', meaning: 'bump into/meet', requires: ['碰', '到'] },
  { word: '碰不到', jyutping: 'pung3 bat1 dou3', emoji: '🚫', meaning: 'cannot reach/touch', requires: ['碰', '不', '到'] },
  { word: '人命', jyutping: 'jan4 ming6', emoji: '💓', meaning: 'human life', requires: ['人', '命'] },
  { word: '生命', jyutping: 'sang1 ming6', emoji: '🌱', meaning: 'life', requires: ['生', '命'] },
  { word: '救命', jyutping: 'gau3 ming6', emoji: '🆘', meaning: 'help/save a life', requires: ['救', '命'] },
  { word: '長頸鹿', jyutping: 'coeng4 geng2 luk6', emoji: '🦒', meaning: 'giraffe', requires: ['長', '頸', '鹿'] },
  { word: '一定', jyutping: 'jat1 ding6', emoji: '💯', meaning: 'certainly', requires: ['一', '定'] },
  { word: '不一定', jyutping: 'bat1 jat1 ding6', emoji: '🤔', meaning: 'not necessarily', requires: ['不', '一', '定'] },
  { word: '定時', jyutping: 'ding6 si4', emoji: '⏰', meaning: 'at fixed times', requires: ['定', '時'] },
  { word: '定期', jyutping: 'ding6 kei4', emoji: '📅', meaning: 'regularly', requires: ['定', '期'] },
  { word: '坐定', jyutping: 'co5 ding6', emoji: '🪑', meaning: 'sit still', requires: ['坐', '定'] },
  { word: '定心', jyutping: 'ding6 sam1', emoji: '🧘', meaning: 'settle one’s mind', requires: ['定', '心'] },
  { word: '嚇人', jyutping: 'haak3 jan4', emoji: '😱', meaning: 'frightening', requires: ['嚇', '人'] },
  { word: '啄米', jyutping: 'doeng1 mai5', emoji: '🐦', meaning: 'peck rice', requires: ['啄', '米'] },
  { word: '啄食', jyutping: 'doeng1 sik6', emoji: '🐦', meaning: 'peck food', requires: ['啄', '食'] },
  { word: '啄破', jyutping: 'doeng1 po3', emoji: '💥', meaning: 'peck and break', requires: ['啄', '破'] },
  { word: '啄木鳥', jyutping: 'doeng1 muk6 niu5', emoji: '🐦', meaning: 'woodpecker', requires: ['啄', '木', '鳥'] },
  { word: '破了', jyutping: 'po3 liu5', emoji: '💔', meaning: 'broken', requires: ['破', '了'] },
  { word: '破開', jyutping: 'po3 hoi1', emoji: '🔨', meaning: 'break open', requires: ['破', '開'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    title: '小白兔上天',
    sentence: [
      '媽媽拿着氣球給小白兔，告訴牠說氣球是大猩猩伯伯送的，小白兔高興地接過氣球。可是，牠一接過這串氣球，就被氣球帶着，往天上飛去。',
      '兔媽媽跳啊跳啊，根本不夠高，牠着急地大聲喊叫：「快快救救小白兔，誰快來救救小白兔呀！」',
      '長頸鹿聽見了，趕快跑來，牠想，自己這麼高，一定能夠拉住往上飛的小白兔。可是，長頸鹿碰不到小白兔。',
      '小猴子也聽到兔媽媽的喊聲，牠飛快地爬上了樹，想去救小白兔。可是，牠也碰不到往天上飛得很快的小白兔。',
      '被氣球帶往天空的小白兔嚇得一邊「嗚~~」地哭，一邊喊着：「救命啊！救命啊！誰來救救我呀！」',
      '正帶着小鳥在天上練習飛的鳥媽媽聽見了小白兔的哭喊聲，馬上對小鳥們說：「我們趕快去救小白兔！」',
      '「我們怎麼救牠呀？」小鳥問。',
      '「我們去啄氣球，把氣球啄破了，小白兔就可以掉到地上去了。可是不能把氣球一下都啄破，要一個一個地啄破。」鳥媽媽說。',
      '「為甚麼不能一下子都啄破呢？」',
      '「要是一下子把氣球都啄破，小白兔就會很快往下掉，那樣會摔死的。一個一個地啄破，小白兔慢慢地往地上掉，就沒有事了。」',
      '小鳥們飛到小白兔身邊，一個個啄破氣球，當啄破兩個氣球以後，小白兔就停住了，不再往上飛。當啄破四個氣球以後，小白兔開始往下掉。',
      '就這樣，小白兔慢慢地到了地上。',
      '兔媽媽撲到小白兔身邊，抱起小白兔，一邊親牠，一邊說：「你真是個勇敢的孩子。」又一邊對救了牠的小鳥們說：「謝謝你們，謝謝你們救了我的孩子。」',
    ],
    jyutping: '',
    meaning: '',
  },
]
