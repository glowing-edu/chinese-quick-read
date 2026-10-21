import { useEffect, useRef, useState } from 'react'

// Reuses the .profile__* classes from ProfileSwitcher: the two dropdowns sit
// side by side in the topbar and should look and behave identically.

const ERROR_TEXT = {
  not_signed_in: '請先登入 Google · Please sign in first',
  signin_failed: '登入失敗，請再試一次 · Sign-in failed, try again',
  popup_blocked: '彈出視窗被封鎖，請允許彈出視窗 · Pop-up was blocked',
  cancelled: '已取消登入 · Sign-in cancelled',
  state_mismatch: '安全檢查失敗，請重試 · Security check failed',
  access_denied: '未取得權限 · Permission not granted',
  invalid_grant: '需要重新登入 Google · Please sign in again',
  not_configured: '未設定雲端同步 · Cloud sync not configured',
  timeout: '登入逾時 · Sign-in timed out',
  network: '網絡有問題，稍後再試 · Network problem, try later',
  forbidden: 'Google 拒絕存取 · Google refused access',
  rate_limited: '請求太多，請稍後再試 · Too many requests, try later',
  server: 'Google 服務暫時有問題 · Google is having trouble',
  request_failed: '同步失敗，稍後再試 · Sync failed, try later',
  bad_payload: '雲端備份格式有問題 · Backup on Drive is malformed',
  empty: '雲端暫時沒有備份 · No backup in the cloud yet',
}

function timeAgo(ts) {
  if (!ts) return ''
  const mins = Math.floor((Date.now() - ts) / 60000)
  if (mins < 1) return '啱啱 just now'
  if (mins < 60) return `${mins} 分鐘前 ${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs} 小時前 ${hrs}h ago`
  const days = Math.floor(hrs / 24)
  return `${days} 日前 ${days}d ago`
}

export default function CloudSync({ sync }) {
  const [open, setOpen] = useState(false)
  const [busy, setBusy] = useState(null) // null | 'sync' | 'restore' | 'signin' | 'signout'
  const rootRef = useRef(null)

  // Close when tapping anywhere outside — otherwise this dropdown and the
  // profile dropdown could both be open at once.
  useEffect(() => {
    if (!open) return undefined
    const onDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  if (!sync.available) return null

  const close = () => {
    setOpen(false)
    setBusy(null)
  }

  const run = async (kind, fn) => {
    if (busy) return
    setBusy(kind)
    try {
      await fn()
    } finally {
      setBusy(null)
    }
  }

  const handleSignIn = () => run('signin', () => sync.signIn().then(() => setOpen(true)))

  const handleSync = () => run('sync', () => sync.syncNow())

  const handleRestore = () =>
    run('restore', async () => {
      const answer = window.prompt(
        '從雲端合併進度？請輸入 restore 確認。\nMerge progress from Google Drive into this device? Type restore to confirm.',
      )
      if (answer !== 'restore') return
      await sync.restoreFromCloud()
    })

  const handleSignOut = () =>
    run('signout', async () => {
      if (
        !window.confirm(
          '登出後呢部裝置會停止自動同步，本地進度會保留。\nSign out? This device stops syncing; local progress is kept.',
        )
      ) {
        return
      }
      await sync.signOut()
      close()
    })

  const errorText = sync.error ? ERROR_TEXT[sync.error] ?? ERROR_TEXT.request_failed : null

  if (!sync.signedIn) {
    return (
      <button
        ref={rootRef}
        type="button"
        className="profile__btn sync__btn"
        onClick={handleSignIn}
        disabled={busy === 'signin'}
        aria-label="備份到 Google Drive Backup to Google Drive"
      >
        <span aria-hidden="true">{busy === 'signin' ? '⏳' : '☁️'}</span>
        <span className="sync__label">
          {busy === 'signin' ? '連接中… Connecting…' : '備份 Backup'}
        </span>
      </button>
    )
  }

  const dot =
    sync.status === 'error'
      ? ' sync__dot--error'
      : sync.status === 'syncing' || sync.status === 'connecting'
        ? ' sync__dot--busy'
        : ' sync__dot--ok'

  return (
    <div className="profile" ref={rootRef}>
      <button
        type="button"
        className="profile__btn sync__btn"
        onClick={() => setOpen((o) => !o)}
        aria-label="雲端同步 Cloud sync"
      >
        <span className={`sync__dot${dot}`} aria-hidden="true" />
        <span className="sync__label">☁️</span>
        <span aria-hidden="true">▾</span>
      </button>

      {open && (
        <div className="profile__dropdown sync__dropdown" role="dialog" aria-modal="true">
          <div className="profile__form">
            <h3 className="profile__title">雲端同步 Cloud sync</h3>

            <div className="sync__account">
              {sync.user?.picture ? (
                <img className="sync__pic" src={sync.user.picture} alt="" />
              ) : (
                <span className="sync__pic sync__pic--fallback" aria-hidden="true">
                  🔗
                </span>
              )}
              <span className="sync__email">{sync.user?.email || sync.user?.name || ''}</span>
            </div>

            <p className="sync__status" aria-live="polite">
              {sync.status === 'syncing' && '⏳ 同步中 Syncing…'}
              {sync.status === 'connecting' && '⏳ 連接中 Connecting…'}
              {sync.status === 'idle' && `☁️ 待命 Idle · 上次 ${timeAgo(sync.lastSyncedAt)}`}
              {sync.status === 'synced' && `✅ 已同步 Synced · ${timeAgo(sync.lastSyncedAt)}`}
              {sync.status === 'error' && `⚠️ ${errorText}`}
            </p>

            <div className="profile__form-actions sync__actions">
              <button
                type="button"
                className="btn btn--ghost btn--small"
                onClick={handleSync}
                disabled={busy !== null}
              >
                🔄 {busy === 'sync' ? '同步中…' : '立即同步 Sync now'}
              </button>
              <button
                type="button"
                className="btn btn--ghost btn--small"
                onClick={handleRestore}
                disabled={busy !== null}
              >
                📥 {busy === 'restore' ? '還原中…' : '從雲端還原 Restore'}
              </button>
              <button
                type="button"
                className="btn btn--primary btn--small"
                onClick={handleSignOut}
                disabled={busy !== null}
              >
                ⏏️ 登出 Sign out
              </button>
            </div>

            <p className="sync__hint">
              進度會自動同步到呢部 Google 帳戶 · Progress syncs automatically to this Google account
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
