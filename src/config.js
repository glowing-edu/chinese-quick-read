// Build-time configuration.
//
// VITE_GOOGLE_CLIENT_ID is a public identifier (browsers cannot keep a
// secret), which is exactly why this flow uses PKCE instead of a client
// secret. When it is absent the whole Cloud Sync UI stays hidden and the app
// behaves exactly as it does without the feature.

export const GOOGLE_CLIENT_ID = (import.meta.env.VITE_GOOGLE_CLIENT_ID || '').trim()

export const GOOGLE_ENABLED = GOOGLE_CLIENT_ID.length > 0
