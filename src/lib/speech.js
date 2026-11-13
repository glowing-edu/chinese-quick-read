// Cantonese text-to-speech via the browser's Web Speech API.
// Prefers a user-selected voice, then a Hong Kong / Cantonese voice, then
// falls back to whatever zh voice exists.

const VOICE_KEY = 'kinderchi-voice-uri-v1'

function isCantoneseVoice(voice) {
  const lang = (voice.lang || '').replace('_', '-')
  const name = (voice.name || '').toLowerCase()
  return (
    /(^|[-_])zh[-_]?HK/i.test(lang) ||
    /zh[-_]?Hant[-_]?HK/i.test(lang) ||
    /^yue/i.test(lang) ||
    name.includes('hong kong') ||
    name.includes('cantonese')
  )
}

function pickVoice() {
  if (!canSpeak()) return null
  const voices = window.speechSynthesis.getVoices()
  if (!voices.length) return null
  const selectedURI = getSelectedVoiceURI()
  const selected = selectedURI ? voices.find((v) => v.voiceURI === selectedURI) : null
  return (
    selected ||
    voices.find(isCantoneseVoice) ||
    voices.find((v) => /^zh[-_]?(Hant|TW|HK)/i.test(v.lang || '')) ||
    voices.find((v) => /^zh/i.test(v.lang || '')) ||
    null
  )
}

export function getSelectedVoiceURI() {
  if (typeof localStorage === 'undefined') return null
  try {
    return localStorage.getItem(VOICE_KEY) || null
  } catch {
    return null
  }
}

// Pass null/'' to go back to the automatic Cantonese voice.
export function setSelectedVoiceURI(uri) {
  if (typeof localStorage === 'undefined') return
  try {
    if (uri) localStorage.setItem(VOICE_KEY, uri)
    else localStorage.removeItem(VOICE_KEY)
  } catch {
    // Ignore unavailable storage; the current session still uses the fallback.
  }
}

export function canSpeak() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

// Voices load asynchronously on most browsers; call after voiceschanged too.
export function hasCantoneseVoice() {
  if (!canSpeak()) return false
  return window.speechSynthesis.getVoices().some(isCantoneseVoice)
}

export function hasChineseVoice() {
  if (!canSpeak()) return false
  return window.speechSynthesis.getVoices().some((v) => /^zh|^yue/i.test(v.lang || ''))
}

export function speak(text, { rate = 0.75, pitch = 1.1 } = {}) {
  if (!canSpeak() || !text) return false
  const synth = window.speechSynthesis
  synth.cancel()
  const utter = new SpeechSynthesisUtterance(text)
  const voice = pickVoice()
  if (voice) utter.voice = voice
  utter.lang = voice?.lang || 'zh-HK'
  utter.rate = rate
  utter.pitch = pitch
  synth.speak(utter)
  return true
}

export function stopSpeaking() {
  if (canSpeak()) window.speechSynthesis.cancel()
}
