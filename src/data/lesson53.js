// 第五十三課 Lesson 53 — 生字
export const CHARACTERS = [
  { char: '釣', jyutping: 'diu3', word: '釣魚', wordJyutping: 'diu3 jyu2', emoji: '🎣', meaning: 'fish (with a hook)' },
  { char: '甩', jyutping: 'lat1', word: '甩掉', wordJyutping: 'lat1 diu6', emoji: '🫳', meaning: 'throw off/shake off' },
  { char: '鉤', jyutping: 'ngau1', word: '魚鉤', wordJyutping: 'jyu4 ngau1', emoji: '🪝', meaning: 'hook' },
  { char: '忘', jyutping: 'mong4', word: '忘記', wordJyutping: 'mong4 gei3', emoji: '🤔', meaning: 'forget' },
  { char: '裝', jyutping: 'zong1', word: '裝滿', wordJyutping: 'zong1 mun5', emoji: '📦', meaning: 'pack/fill' },
  { char: '餌', jyutping: 'nei6', word: '魚餌', wordJyutping: 'jyu4 nei6', emoji: '🪱', meaning: 'bait' },
  { char: '算', jyutping: 'syun3', word: '算數', wordJyutping: 'syun3 sou3', emoji: '🧮', meaning: 'calculate' },
  { char: '桶', jyutping: 'tung2', word: '水桶', wordJyutping: 'seoi2 tung2', emoji: '🪣', meaning: 'bucket' },
  { char: '壞', jyutping: 'waai6', word: '壞人', wordJyutping: 'waai6 jan4', emoji: '😈', meaning: 'bad/broken' },
  { char: '忙', jyutping: 'mong4', word: '幫忙', wordJyutping: 'bong1 mong4', emoji: '🤝', meaning: 'help/busy' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '湖水', jyutping: 'wu4 seoi2', emoji: '🏞️', meaning: 'lake water', requires: ['湖', '水'] },
  { word: '一棵', jyutping: 'jat1 po1', emoji: '🌳', meaning: 'one tree', requires: ['一', '棵'] },
  { word: '兩棵', jyutping: 'loeng5 po1', emoji: '🌳', meaning: 'two trees', requires: ['兩', '棵'] },
  { word: '冬瓜', jyutping: 'dung1 gwaa1', emoji: '🍈', meaning: 'winter melon', requires: ['冬', '瓜'] },
  { word: '南瓜', jyutping: 'naam4 gwaa1', emoji: '🎃', meaning: 'pumpkin', requires: ['南', '瓜'] },
  { word: '黃瓜', jyutping: 'wong4 gwaa1', emoji: '🥒', meaning: 'cucumber', requires: ['黃', '瓜'] },
  { word: '木瓜', jyutping: 'muk6 gwaa1', emoji: '🍈', meaning: 'papaya', requires: ['木', '瓜'] },
  { word: '瓜分', jyutping: 'gwaa1 fan1', emoji: '➗', meaning: 'divide up', requires: ['瓜', '分'] },
  { word: '透風', jyutping: 'tau3 fung1', emoji: '🍃', meaning: 'let air through', requires: ['透', '風'] },
  { word: '透雨', jyutping: 'tau3 jyu5', emoji: '🌧️', meaning: 'soaking rain', requires: ['透', '雨'] },
  { word: '透亮', jyutping: 'tau3 loeng6', emoji: '✨', meaning: 'bright/translucent', requires: ['透', '亮'] },
  { word: '透明', jyutping: 'tau3 ming4', emoji: '🔍', meaning: 'transparent', requires: ['透', '明'] },
  { word: '看透', jyutping: 'hon3 tau3', emoji: '👀', meaning: 'see through', requires: ['看', '透'] },
  { word: '透過', jyutping: 'tau3 gwo3', emoji: '🪟', meaning: 'through/via', requires: ['透', '過'] },
  { word: '大腿', jyutping: 'daai6 teoi2', emoji: '🦵', meaning: 'thigh', requires: ['大', '腿'] },
  { word: '小腿', jyutping: 'siu2 teoi2', emoji: '🦵', meaning: 'calf', requires: ['小', '腿'] },
  { word: '狗腿', jyutping: 'gau2 teoi2', emoji: '🐕', meaning: 'dog’s leg', requires: ['狗', '腿'] },
  { word: '狐狸', jyutping: 'wu4 lei4', emoji: '🦊', meaning: 'fox', requires: ['狐', '狸'] },
  { word: '狸貓', jyutping: 'lei4 maau1', emoji: '🐈', meaning: 'leopard cat', requires: ['狸', '貓'] },
  { word: '跟前', jyutping: 'gan1 cin4', emoji: '📍', meaning: 'nearby/in front', requires: ['跟', '前'] },
  { word: '跟着', jyutping: 'gan1 zoek6', emoji: '👣', meaning: 'follow', requires: ['跟', '着'] },
  { word: '跟頭', jyutping: 'gan1 tau4', emoji: '🤸', meaning: 'tumble/somersault', requires: ['跟', '頭'] },
  { word: '粗心', jyutping: 'cou1 sam1', emoji: '😅', meaning: 'careless', requires: ['粗', '心'] },
  { word: '粗細', jyutping: 'cou1 sai3', emoji: '⚖️', meaning: 'thickness', requires: ['粗', '細'] },
  { word: '竹竿', jyutping: 'zuk1 gon1', emoji: '🎋', meaning: 'bamboo pole', requires: ['竹', '竿'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    title: '“咕咕咚咚”來了',
    sentence: [
      '湖邊有棵木瓜樹，樹邊住着小白兔。一天，有一個熟透了的木瓜，被風一吹，從樹上落下來，“咕咚”一聲，正好掉在湖裏。',
      '小白兔聽到“咕咚”一聲，嚇得拔腿就跑。狐狸看見小白兔跑得那麼快，就問：「出了什麼事？」小白兔一邊跑一邊說：「咕咚，咕咚！」',
      '狐狸看到小白兔那害怕的樣子，以為“咕咚”是個很可怕的東西，就也跟着跑起來。',
      '猴子看到牠們沒命地跑，就趕上去問：「出了什麼事？」狐狸說：「“咕咚”來了！」猴子想，狐狸嚇成這個樣子，“咕咚”一定是個很可怕的東西，就也跟着跑起來。',
      '路上，牠們又碰到了狗熊、梅花鹿、老虎。牠們同樣問：「出了什麼事？」',
      '「“咕咚”來了！」於是，大家也都跟着沒命地跑起來。',
      '最後，牠們碰到了一隻長毛獅子，牠喊住了大家，問：「什麼東西把你們嚇成這個樣子？」大家上氣不接下氣地說：「不得了，“咕咚”來了！」',
      '長毛獅子問：「“咕咚”是誰？它在哪裏呀？」大家都說不知道。小白兔說：「那個“咕咚”就在我住的湖邊。」',
      '長毛獅子說：「那好，你帶我們去看看。」',
      '到了湖邊，大家東找找，西看看，哪裏有什麼“咕咚”呀！正在這時，又有一個熟透了的木瓜掉到湖裏，又是“咕咚”一聲。',
      '這時，大家才明白“咕咚”原來是木瓜掉到水裏的聲音。',
    ],
    jyutping: '',
    meaning: '',
  },
]
