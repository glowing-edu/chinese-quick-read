// 第五十課 Lesson 50 — 生字
export const CHARACTERS = [
  { char: '摸', jyutping: 'mo2', word: '摸一摸', wordJyutping: 'mo2 jat1 mo2', emoji: '✋', meaning: 'touch/feel' },
  { char: '苔', jyutping: 'toi4', word: '青苔', wordJyutping: 'cing1 toi4', emoji: '🌿', meaning: 'moss' },
  { char: '所', jyutping: 'so2', word: '所有', wordJyutping: 'so2 jau5', emoji: '📦', meaning: 'all' },
  { char: '科', jyutping: 'fo1', word: '科學', wordJyutping: 'fo1 hok6', emoji: '🔬', meaning: 'science/subject' },
  { char: '燈', jyutping: 'dang1', word: '電燈', wordJyutping: 'din6 dang1', emoji: '💡', meaning: 'lamp/light' },
  { char: '應', jyutping: 'jing1', word: '應該', wordJyutping: 'jing1 goi1', emoji: '✅', meaning: 'should' },
  { char: '該', jyutping: 'goi1', word: '應該', wordJyutping: 'jing1 goi1', emoji: '✅', meaning: 'should' },
  { char: '題', jyutping: 'tai4', word: '問題', wordJyutping: 'man6 tai4', emoji: '❓', meaning: 'question/topic' },
]

// 讀詞語 Reading words
export const WORDS = [
  { word: '梅花鹿', jyutping: 'mui4 faa1 luk6', emoji: '🦌', meaning: 'sika deer', requires: ['梅', '花', '鹿'] },
  { word: '鹿角', jyutping: 'luk6 gok3', emoji: '🦌', meaning: 'antler', requires: ['鹿', '角'] },
  { word: '森林', jyutping: 'sam1 lam4', emoji: '🌲', meaning: 'forest', requires: ['森', '林'] },
  { word: '樹林', jyutping: 'syu6 lam4', emoji: '🌳', meaning: 'woods', requires: ['樹', '林'] },
  { word: '採用', jyutping: 'coi2 jung6', emoji: '✅', meaning: 'adopt/use', requires: ['採', '用'] },
  { word: '蘑菇', jyutping: 'mo4 gu1', emoji: '🍄', meaning: 'mushroom', requires: ['蘑', '菇'] },
  { word: '採蘑菇', jyutping: 'caai2 mo4 gu1', emoji: '🍄', meaning: 'pick mushrooms', requires: ['採', '蘑', '菇'] },
  { word: '吃蘑菇', jyutping: 'hek3 mo4 gu1', emoji: '🍽️', meaning: 'eat mushrooms', requires: ['吃', '蘑', '菇'] },
  { word: '冬菇', jyutping: 'dung1 gu1', emoji: '🍄', meaning: 'shiitake mushroom', requires: ['冬', '菇'] },
  { word: '香菇', jyutping: 'hoeng1 gu1', emoji: '🍄', meaning: 'shiitake mushroom', requires: ['香', '菇'] },
  { word: '花籃', jyutping: 'faa1 laam4', emoji: '💐', meaning: 'flower basket', requires: ['花', '籃'] },
  { word: '竹籃', jyutping: 'zuk1 laam4', emoji: '🧺', meaning: 'bamboo basket', requires: ['竹', '籃'] },
  { word: '籃子', jyutping: 'laam4 zi2', emoji: '🧺', meaning: 'basket', requires: ['籃', '子'] },
  { word: '籃球', jyutping: 'laam4 kau4', emoji: '🏀', meaning: 'basketball', requires: ['籃', '球'] },
  { word: '一直', jyutping: 'jat1 zik6', emoji: '➡️', meaning: 'straight/always', requires: ['一', '直'] },
  { word: '直到', jyutping: 'zik6 dou3', emoji: '⏳', meaning: 'until', requires: ['直', '到'] },
  { word: '直接', jyutping: 'zik6 zip3', emoji: '➡️', meaning: 'direct', requires: ['直', '接'] },
]

// 讀句子 Sentences
export const SENTENCES = [
  {
    title: '採蘑菇',
    sentence: [
      '一大早，小花鹿就去找小白兔玩，小白兔說：「我今天要去森林裏採蘑菇，家裏沒有蘑菇了。」',
      '「那我們就一起去吧！」小花鹿和小白兔就一起出了門。牠們一邊走，一邊採蘑菇。採啊採啊，籃子滿了，放不下蘑菇了。',
      '「我們回家吧，天也快晚了，媽媽還在家裏等着我們呢！」',
      '小花鹿和小白兔就一起往回走。走啊，走啊，怎麼走也走不出森林，天也黑了。小花鹿和小白兔這才明白牠們在森林裏迷了路。',
      '怎麼辦？怎麼辦？天又黑，肚子又餓，心裏又害怕。小花鹿急得馬上就要哭出來了。',
      '「不要哭，不要哭。我們來想想辦法。」',
      '想啊想……「有了。我們家住在森林的北邊，我們就一直往北走，不是就走出森林，就找到家了嗎？」小白兔說。',
      '「可是哪邊是北方呢？」小花鹿說。',
      '「是啊，哪邊是北方呢？」',
      '想啊想……「對了。媽媽說過，在森林中找方向，可以用手去摸樹幹，長青苔的一面就是北方。」小花鹿想起來了。',
      '小白兔和小花鹿就去摸樹幹。找到啦，找到啦！北方找到啦！牠們就手拉着手，大聲唱着歌往北走。',
      '「小白兔~~~~」',
      '「小花鹿~~~~」',
      '原來是媽媽們找來了。',
      '當小白兔和小花鹿把怎樣想出這個辦法告訴媽媽時，媽媽都說小白兔和小花鹿是又聰明，又勇敢，又能幹的孩子。',
    ],
    jyutping: '',
    meaning: '',
  },
]
