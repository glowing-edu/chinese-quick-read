# Kinderchi 學中文

A Cantonese (Jyutping) Chinese-learning web app for kindergarten students.
Built with React + Vite.

## Lesson 1 — 16 個生字

人 口 大 中 小 哭 笑 一 上 下 爸 媽 天 太 月 二

**Reading words (讀詞語):** 大人 小人 大哭 大笑 大口 小口

## Lesson 2 — 8 個生字

地 陽 亮 星 雲 火 水 三

**Reading words (讀詞語):** 爸爸 媽媽 上天 天上 太大 太小 一天 一月 二月 上上 下下

## Lesson 3 — 8 個生字

土 山 石 木 我 好 有 田

**Reading words (讀詞語):** 天地 大地 太陽 月亮 星星 天亮 大火 大水 火星 水星 三天 三月 地上 地下

Words unlock once their component characters are learned — characters can come from any lesson, and locked cards show a superscript with the lesson number of each missing character.

## Lesson 4 — 8 個生字

牛 羊 聰 耳 目 心 和 四

**Reading words (讀詞語):** 土地 大山 小山 土山 石山 火山 土星 木星 好人 田地 水田 我有 我爸 我媽 我哭 我笑 好山好水

**Reading sentences (讀句子):**
- 我有好爸爸、好媽媽。
- 天上有太陽、月亮、星星。
- 地上有土、石、山、水田。
- 爸爸上山，媽媽下山。

## Lesson 5 — 8 個生字

明 頭 眉 鼻 手 花 樹 五

**Reading words (讀詞語):** 大牛 小牛 水牛 山羊 小羊 小心 中心 心中 四月 四天

**Reading sentences (讀句子):**
- 地上有小草和大樹。
- 草地上有水牛和小山羊。
- 爸爸和媽媽心中有我。
- 我心中有爸爸和媽媽。

## Lesson 6 — 8 個生字

草 葉 日 風 雨 的 孩 六

**Reading words (讀詞語):** 聰明 明亮 明天 明月 眉頭 鼻頭 石頭 木頭 心頭 小手 小花 大樹 小樹 樹木 五月 五天 手心

**Reading sentences (讀句子):**
- 我有小手。
- 頭上有眉、目、耳、鼻和口。
- 眉下有目，鼻下有口。
- 樹上有花和葉。

Sentences unlock once every character in them has been learned (the ✍️ 讀句子 tab appears for lessons that have sentences).

## Features

- 📖 **Character cards** — big tap targets with the character, Jyutping, example word, emoji and English meaning
- 🔊 **Audio** — tap a card (or word chip) to hear it spoken in Cantonese via the browser's Web Speech API
- 📚 **Reading words** — 大人 小人 大哭 大笑 大口 小口 built from the lesson's characters; words unlock one by one as the child learns the component characters (locked cards show exactly which characters are still needed)
- ✍️ **Reading sentences** — full sentences (e.g. 「我有好爸爸、好媽媽。」) that unlock once every character in them is learned
- 🎮 **Listening quiz** — "tap the character you hear", 8 questions, 1 star per correct answer
- ⭐ **Progress in localStorage** — characters learned, words/sentences read, total stars and best quiz score are saved on the device and survive refreshes (key: `kinderchi-progress-v1`)

> Speech uses the device's built-in Cantonese voice (macOS/iOS: Settings → Accessibility → Spoken Content → Voices → Chinese (Hong Kong)). If none is installed, the app shows a warning banner.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
npm run lint
```

## Deploy to GitHub Pages

1. Push this repo to GitHub (default branch `main`).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `dist/` automatically.

The Vite config uses `base: './'` so the build works on project Pages sites (`https://<user>.github.io/kinderchi/`) as well as locally.

## Project structure

```
src/
  data/lesson1.js        # Lesson 1 character + word data
  data/lesson2.js        # Lesson 2 character + word data
  data/lesson3.js        # Lesson 3 character + word data
  data/lesson4.js        # Lesson 4 character + word + sentence data
  data/lesson5.js        # Lesson 5 character + word + sentence data
  data/lesson6.js        # Lesson 6 character + word + sentence data
  data/lesson7.js        # Lesson 7 character + word + sentence data
  data/lesson8.js        # Lesson 8 character + word + sentence data
  data/lesson9.js        # Lesson 9 character + word + sentence data
  data/lesson10.js       # Lesson 10 character + word + sentence data
  data/lessonRev1.js     # Revision 1 word + sentence data (review)
  data/lessons.js        # Lesson registry — add new lessons here
  lib/speech.js          # Cantonese text-to-speech helpers
  lib/progress.js        # useProgress() — localStorage-backed progress
  components/
    CharacterCard.jsx    # tap-to-hear character card
    WordCard.jsx         # reading word card (locked until its characters are learned)
    WordDrill.jsx        # 讀詞語 reading section
    SentenceCard.jsx     # reading sentence card (locked until every character is learned)
    SentenceDrill.jsx    # 讀句子 reading section
    Quiz.jsx             # listening quiz game
  App.jsx                # layout, lesson picker, tabs, header, progress bar
  index.css              # all styling
```

## Adding a new lesson

1. Create `src/data/lesson4.js` with the same shape as `lesson1.js` (`CHARACTERS` + `WORDS`).
2. Register it in `src/data/lessons.js` — the lesson picker, progress bar, word unlocking and quiz all pick it up automatically.
