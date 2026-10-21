// Google Drive backup stored in appDataFolder — a private folder that only
// this app can see. It never appears in the user's Drive and can't be opened
// by children, and it doesn't need a file-picker UI.

import { ensureAccessToken, forceRefreshToken } from './auth.js'

const FILES_URL = 'https://www.googleapis.com/drive/v3/files'
const UPLOAD_URL = 'https://www.googleapis.com/upload/drive/v3/files'
const FILE_NAME = 'kinderchi-backup.json'
const FOLDER = 'appDataFolder'

export class SyncError extends Error {
  constructor(code) {
    super(code)
    this.name = 'SyncError'
    this.code = code
  }
}

// --- request plumbing -------------------------------------------------------

async function authFetch(url, init = {}) {
  let token = await ensureAccessToken()
  if (!token) throw new SyncError('not_signed_in')

  const attempt = async (accessToken) => {
    try {
      return await fetch(url, {
        ...init,
        headers: { ...init.headers, Authorization: `Bearer ${accessToken}` },
      })
    } catch {
      throw new SyncError('network')
    }
  }

  let res = await attempt(token)
  if (res.status === 401) {
    // Token expired or was revoked mid-flight — refresh once and retry.
    token = await forceRefreshToken()
    if (!token) throw new SyncError('not_signed_in')
    res = await attempt(token)
  }
  return res
}

function raise(res) {
  if (res.status === 403) throw new SyncError('forbidden')
  if (res.status === 429) throw new SyncError('rate_limited')
  if (res.status >= 500) throw new SyncError('server')
  throw new SyncError('request_failed')
}

// --- operations -------------------------------------------------------------

/** Find our single backup file in appDataFolder, or null if none exists. */
export async function findBackup() {
  const query = `name='${FILE_NAME}' and '${FOLDER}' in parents`
  const url = `${FILES_URL}?q=${encodeURIComponent(query)}&spaces=${FOLDER}&fields=files(id,name,modifiedTime)&pageSize=1`

  const res = await authFetch(url)
  if (!res.ok) raise(res)
  const data = await res.json().catch(() => ({}))
  return data.files?.[0] ?? null
}

function multipartBody(payload) {
  const boundary = 'kinderchi' + Math.random().toString(36).slice(2)
  const metadata = JSON.stringify({
    name: FILE_NAME,
    parents: [FOLDER],
    mimeType: 'application/json',
  })
  const body =
    `--${boundary}\r\n` +
    `Content-Type: application/json; charset=UTF-8\r\n\r\n` +
    `${metadata}\r\n` +
    `--${boundary}\r\n` +
    `Content-Type: application/json; charset=UTF-8\r\n\r\n` +
    `${JSON.stringify(payload)}\r\n` +
    `--${boundary}--`
  return { contentType: `multipart/related; boundary=${boundary}`, body }
}

/** Create or update the backup. Pass fileId when it already exists. */
export async function uploadBackup(payload, fileId, { keepalive = false } = {}) {
  const { contentType, body } = multipartBody(payload)

  const url = fileId
    ? `${UPLOAD_URL}/${fileId}?uploadType=multipart`
    : `${UPLOAD_URL}?uploadType=multipart`

  const res = await authFetch(url, {
    method: fileId ? 'PATCH' : 'POST',
    headers: { 'Content-Type': contentType },
    body,
    keepalive,
  })
  if (!res.ok) raise(res)
  return res.json().catch(() => ({}))
}

/** Download the backup body. Throws a typed error if the payload is unusable. */
export async function downloadBackup(fileId) {
  const res = await authFetch(`${FILES_URL}/${fileId}?alt=media`)
  if (!res.ok) raise(res)
  try {
    const data = await res.json()
    if (!data || typeof data !== 'object' || !Array.isArray(data.profiles)) {
      throw new SyncError('bad_payload')
    }
    return data
  } catch (err) {
    if (err instanceof SyncError) throw err
    throw new SyncError('bad_payload')
  }
}
