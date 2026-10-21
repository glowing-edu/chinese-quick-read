// Google OAuth (Authorization Code flow with PKCE) — no backend required.
// GitHub Pages is a public client, so there is no client secret; the PKCE
// code_verifier is what makes the authorisation code single-use and useless
// if intercepted.

import { GOOGLE_CLIENT_ID, GOOGLE_ENABLED } from '../config.js'

const AUTH_KEY = 'kinderchi-google-auth-v1'
const TOKEN_ENDPOINT = 'https://oauth2.googleapis.com/token'
const AUTH_ENDPOINT = 'https://accounts.google.com/o/oauth2/v2/auth'
const REVOKE_ENDPOINT = 'https://oauth2.googleapis.com/revoke'
const USERINFO_ENDPOINT = 'https://www.googleapis.com/oauth2/v3/userinfo'
const MESSAGE_TYPE = 'kinderchi-auth-code'

// drive.appdata keeps the backup in a private folder the user never sees in
// their Drive UI — no clutter, and children's progress isn't browsable.
const SCOPES = [
  'openid',
  'email',
  'profile',
  'https://www.googleapis.com/auth/drive.appdata',
].join(' ')

export class AuthError extends Error {
  constructor(code) {
    super(code)
    this.name = 'AuthError'
    this.code = code
  }
}

// ---------------------------------------------------------------------------
// Small crypto helpers (crypto.subtle needs a secure context — GitHub Pages
// and localhost both qualify)
// ---------------------------------------------------------------------------

function randomString(bytes) {
  const buf = crypto.getRandomValues(new Uint8Array(bytes))
  return base64Url(buf)
}

function base64Url(bytes) {
  let binary = ''
  for (const b of bytes) binary += String.fromCharCode(b)
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

async function sha256Challenge(verifier) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier))
  return base64Url(new Uint8Array(digest))
}

// ---------------------------------------------------------------------------
// Storage
// ---------------------------------------------------------------------------

export function getAuth() {
  try {
    const raw = window.localStorage.getItem(AUTH_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function saveAuth(auth) {
  try {
    window.localStorage.setItem(AUTH_KEY, JSON.stringify(auth))
  } catch {
    // ignore — sync simply stays signed out
  }
}

function clearAuth() {
  try {
    window.localStorage.removeItem(AUTH_KEY)
  } catch {
    // ignore
  }
}

export function isSignedIn() {
  const auth = getAuth()
  return Boolean(auth?.refreshToken || auth?.accessToken)
}

// ---------------------------------------------------------------------------
// Redirect URI
// ---------------------------------------------------------------------------

// Must exactly match an entry in the OAuth client's "Authorized redirect URIs".
// Normalising away the query/hash and a trailing index.html keeps it stable
// whether the user lands on the directory URL or the file itself.
export function redirectUri() {
  const url = new URL(window.location.href)
  url.search = ''
  url.hash = ''
  if (url.pathname.endsWith('index.html')) {
    url.pathname = url.pathname.slice(0, -'index.html'.length)
  }
  return url.toString()
}

function clientId() {
  if (!GOOGLE_ENABLED) throw new AuthError('not_configured')
  return GOOGLE_CLIENT_ID
}

// ---------------------------------------------------------------------------
// Token requests
// ---------------------------------------------------------------------------

async function tokenRequest(body) {
  let res
  try {
    res = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(body),
    })
  } catch {
    throw new AuthError('network')
  }

  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    // invalid_grant means the refresh token expired/was revoked → sign out.
    throw new AuthError(data.error || (res.status === 400 ? 'invalid_grant' : 'token_failed'))
  }
  return data
}

function storeTokenResponse(auth, data) {
  const next = {
    ...auth,
    accessToken: data.access_token,
    expiresAt: Date.now() + (Number(data.expires_in) || 3600) * 1000,
  }
  // Google omits refresh_token on repeat authorisations — keep the old one.
  if (data.refresh_token) next.refreshToken = data.refresh_token
  saveAuth(next)
  return next
}

/** Refresh the access token, always hitting the network. Returns token or null. */
export async function forceRefreshToken() {
  const auth = getAuth()
  if (!auth?.refreshToken) return null
  try {
    const data = await tokenRequest({
      client_id: clientId(),
      refresh_token: auth.refreshToken,
      grant_type: 'refresh_token',
    })
    return storeTokenResponse(auth, data).accessToken
  } catch {
    return null
  }
}

/** Returns a valid access token, refreshing silently if it has expired. */
export async function ensureAccessToken() {
  const auth = getAuth()
  if (!auth) return null
  if (auth.accessToken && auth.expiresAt > Date.now() + 60_000) return auth.accessToken
  return forceRefreshToken()
}

// ---------------------------------------------------------------------------
// Sign in / out
// ---------------------------------------------------------------------------

function buildAuthUrl({ state, challenge }) {
  const params = new URLSearchParams({
    client_id: clientId(),
    redirect_uri: redirectUri(),
    response_type: 'code',
    scope: SCOPES,
    access_type: 'offline',
    // Guarantees a refresh_token is issued so background sync never needs a popup.
    prompt: 'consent',
    include_granted_scopes: 'true',
    state,
    code_challenge: challenge,
    code_challenge_method: 'S256',
  })
  return `${AUTH_ENDPOINT}?${params}`
}

async function fetchUserInfo(accessToken) {
  try {
    const res = await fetch(USERINFO_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    if (!res.ok) return {}
    const data = await res.json()
    return {
      email: data.email || '',
      name: data.name || data.email || '',
      picture: data.picture || '',
    }
  } catch {
    return {}
  }
}

/**
 * Opens the Google consent screen in a popup and resolves once the app on the
 * other side has posted the authorisation code back. See forwardAuthCode().
 */
export function signIn() {
  const verifier = randomString(64)
  return sha256Challenge(verifier).then(
    (challenge) =>
      new Promise((resolve, reject) => {
        const state = randomString(32)
        let popup
        let poll
        let timeout
        try {
          // Do NOT pass noopener here: the popup must keep window.opener so it
          // can post the authorisation code back to this window.
          popup = window.open(
            buildAuthUrl({ state, challenge }),
            'kinderchi-google-signin',
            'width=520,height=640',
          )
        } catch {
          reject(new AuthError('popup_blocked'))
          return
        }
        if (!popup) {
          reject(new AuthError('popup_blocked'))
          return
        }

        const cleanup = () => {
          window.removeEventListener('message', onMessage)
          clearInterval(poll)
          clearTimeout(timeout)
        }

        const onMessage = async (event) => {
          if (event.origin !== window.location.origin) return
          const data = event.data
          if (!data || data.type !== MESSAGE_TYPE) return
          if (data.state && data.state !== state) {
            cleanup()
            reject(new AuthError('state_mismatch'))
            return
          }
          if (data.error) {
            cleanup()
            reject(new AuthError(data.error))
            return
          }
          cleanup()
          try {
            const tokens = await tokenRequest({
              client_id: clientId(),
              code: data.code,
              code_verifier: verifier,
              redirect_uri: redirectUri(),
              grant_type: 'authorization_code',
            })
            const auth = storeTokenResponse({}, tokens)
            const info = await fetchUserInfo(auth.accessToken)
            const withUser = { ...auth, ...info, signedInAt: Date.now() }
            saveAuth(withUser)
            resolve(withUser)
          } catch (err) {
            reject(err)
          }
        }

        window.addEventListener('message', onMessage)

        // Popup closed without completing → user dismissed it.
        poll = setInterval(() => {
          if (popup.closed) {
            cleanup()
            reject(new AuthError('cancelled'))
          }
        }, 500)

        timeout = setTimeout(() => {
          cleanup()
          reject(new AuthError('timeout'))
        }, 120_000)
      }),
  )
}

/**
 * Called on app boot. If this document was loaded as the OAuth redirect
 * target, hand the code back to the opener and shut down — never mounts the
 * main app in that window.
 */
export function forwardAuthCode() {
  const params = new URLSearchParams(window.location.search)
  const error = params.get('error')
  const code = params.get('code')
  const state = params.get('state')
  if (!code && !error) return false

  // Nothing to hand off to (e.g. the URL was pasted directly) — just strip the
  // parameters and let the app boot normally.
  if (!window.opener || window.opener.closed) {
    window.history.replaceState({}, '', window.location.pathname)
    return false
  }

  try {
    window.opener.postMessage(
      { type: MESSAGE_TYPE, code, state, error },
      window.location.origin,
    )
  } catch {
    // ignore
  }
  window.history.replaceState({}, '', window.location.pathname)
  setTimeout(() => window.close(), 150)
  return true
}

export async function signOut() {
  const auth = getAuth()
  if (auth?.refreshToken) {
    // Revoke at Google so the stored refresh token can't be reused.
    try {
      await fetch(REVOKE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ token: auth.refreshToken }),
      })
    } catch {
      // ignore — we still clear local state
    }
  }
  clearAuth()
}
