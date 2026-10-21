// Helpers for working with sentence text.

/** Normalise a sentence (string or array of lines) into a single string. */
export function sentenceText(sentence) {
  return Array.isArray(sentence) ? sentence.join('\n') : sentence || ''
}

// Unique Chinese characters in a sentence (punctuation excluded) —
// a sentence unlocks once all of these have been learned.
export function sentenceChars(sentence) {
  const text = sentenceText(sentence)
  return [...new Set([...text].filter((ch) => /[一-鿿]/.test(ch)))]
}
