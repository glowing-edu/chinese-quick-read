// 第三課 Lesson 3 — 8 個生字
export const CHARACTERS = [
  { char: '土', jyutping: 'tou2', word: '土地', wordJyutping: 'tou2 dei6', emoji: '🪴', meaning: 'soil' },
  { char: '山', jyutping: 'saan1', word: '大山', wordJyutping: 'daai6 saan1', emoji: '🏔️', meaning: 'mountain' },
  { char: '石', jyutping: 'sek6', word: '石頭', wordJyutping: 'sek6 tau4', emoji: '🪨', meaning: 'stone' },
  { char: '木', jyutping: 'muk6', word: '木頭', wordJyutping: 'muk6 tau4', emoji: '🪵', meaning: 'wood' },
  { char: '我', jyutping: 'ngo5', word: '我哋', wordJyutping: 'ngo5 dei6', emoji: '👫', meaning: 'I / me' },
  { char: '好', jyutping: 'hou2', word: '好人', wordJyutping: 'hou2 jan4', emoji: '👍', meaning: 'good' },
  { char: '有', jyutping: 'jau5', word: '有人', wordJyutping: 'jau5 jan4', emoji: '👥', meaning: 'have / there is' },
  { char: '田', jyutping: 'tin4', word: '田野', wordJyutping: 'tin4 je5', emoji: '🌾', meaning: 'field' },
]

// 讀詞語 Reading words — each word unlocks once its component characters are learned
// (characters may come from any lesson).
export const WORDS = [
  { word: '天地', jyutping: 'tin1 dei6', emoji: '🌍', meaning: 'heaven and earth', requires: ['天', '地'] },
  { word: '大地', jyutping: 'daai6 dei6', emoji: '🌏', meaning: 'earth / ground', requires: ['大', '地'] },
  { word: '太陽', jyutping: 'taai3 joeng3', emoji: '☀️', meaning: 'sun', requires: ['太', '陽'] },
  { word: '月亮', jyutping: 'jyut6 loeng6', emoji: '🌙', meaning: 'moon', requires: ['月', '亮'] },
  { word: '星星', jyutping: 'sing1 sing1', emoji: '⭐', meaning: 'star', requires: ['星'] },
  { word: '天亮', jyutping: 'tin1 loeng6', emoji: '🌅', meaning: 'dawn / daybreak', requires: ['天', '亮'] },
  { word: '大火', jyutping: 'daai6 fo2', emoji: '🔥', meaning: 'big fire', requires: ['大', '火'] },
  { word: '大水', jyutping: 'daai6 seoi2', emoji: '🌊', meaning: 'flood / big water', requires: ['大', '水'] },
  { word: '火星', jyutping: 'fo2 sing1', emoji: '🔴', meaning: 'Mars', requires: ['火', '星'] },
  { word: '水星', jyutping: 'seoi2 sing1', emoji: '💧', meaning: 'Mercury', requires: ['水', '星'] },
  { word: '三天', jyutping: 'saam1 tin1', emoji: '📅', meaning: 'three days', requires: ['三', '天'] },
  { word: '三月', jyutping: 'saam1 jyut6', emoji: '📆', meaning: 'March', requires: ['三', '月'] },
  { word: '地上', jyutping: 'dei6 soeng6', emoji: '📍', meaning: 'on the ground', requires: ['地', '上'] },
  { word: '地下', jyutping: 'dei6 haa6', emoji: '🚇', meaning: 'underground', requires: ['地', '下'] },
]

export const SENTENCES = []
