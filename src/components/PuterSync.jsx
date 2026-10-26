import { useCallback, useEffect, useRef, useState } from 'react'
import { usePuterSync } from '../hooks/usePuterSync'
import { getCloudSummary, getLocalOnlyProfiles } from '../lib/puterSync'

const formatTime = (ts) => {
  if (!ts) return '—'
  return new Date(ts).toLocaleString('zh-HK', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function PuterSync({ profiles = [], onDeleteProfile }) {
  const { available, signedIn, user, syncing, lastSync, error, signIn, signOut, sync, loadFromCloud } =
    usePuterSync()
  const [open, setOpen] = useState(false)
  const [cloud, setCloud] = useState(null)
  const [loadingCloud, setLoadingCloud] = useState(false)
  const [checking, setChecking] = useState(false)
  const [note, setNote] = useState(null)
  // { localOnly: [{id,name,avatar}], action: () => Promise }
  const [reconcile, setReconcile] = useState(null)
  const [deleteIds, setDeleteIds] = useState(() => new Set())
  const runningRef = useRef(false)

  void lastSync

  const refreshCloud = useCallback(async () => {
    setLoadingCloud(true)
    setNote(null)
    try {
      const summary = await getCloudSummary()
      setCloud(summary)
    } catch (err) {
      setNote(err.message)
    } finally {
      setLoadingCloud(false)
    }
  }, [])

  useEffect(() => {
    if (open && signedIn) refreshCloud()
  }, [open, signedIn, refreshCloud])

  const busy = syncing || loadingCloud || checking

  // Before a manual sync, look for profiles that exist only on this device.
  // Default is to keep them. Only explicitly ticked profiles are deleted.
  const runWithReconcile = useCallback(
    async (action) => {
      if (busy || runningRef.current) return
      runningRef.current = true
      setNote(null)
      setChecking(true)
      try {
        const localOnly = await getLocalOnlyProfiles()
        setChecking(false)
        if (localOnly.length === 0) {
          await action()
          return
        }
        setDeleteIds(new Set())
        setReconcile({ localOnly, action })
      } catch (err) {
        setNote(err.message)
      } finally {
        setChecking(false)
        runningRef.current = false
      }
    },
    [busy],
  )

  const toggleDelete = (id) => {
    setDeleteIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const canDeleteLocal = (id) => {
    // The app always needs one active local profile.
    return !(profiles.length <= 1 && profiles[0]?.id === id)
  }

  const selectedDeletes = reconcile
    ? reconcile.localOnly.filter((p) => deleteIds.has(p.id) && canDeleteLocal(p.id))
    : []
  // Ticking every active profile would leave the app without a child profile.
  const wouldDeleteAll = selectedDeletes.length > 0 && selectedDeletes.length >= profiles.length

  const continueReconcile = async () => {
    if (!reconcile || runningRef.current || wouldDeleteAll) return
    runningRef.current = true
    const { localOnly, action } = reconcile
    const toDelete = localOnly.filter((p) => deleteIds.has(p.id) && canDeleteLocal(p.id))
    setReconcile(null)
    setDeleteIds(new Set())
    setNote(null)

    try {
      let failed = false
      for (const p of toDelete) {
        const ok = onDeleteProfile?.(p.id)
        if (ok === false) failed = true
      }
      if (failed) {
        setNote('未能刪除（至少要保留一個小朋友）· Could not delete (at least one profile must remain)')
        return
      }
      await action()
    } finally {
      runningRef.current = false
    }
  }

  const cancelReconcile = () => {
    setReconcile(null)
    setDeleteIds(new Set())
    setNote('已取消同步 Sync cancelled')
  }

  if (!available) return null

  return (
    <div className="puter-sync" style={{ position: 'relative' }}>
      <button
        className="puter-sync__btn"
        onClick={() => setOpen(!open)}
        style={{
          padding: '6px 12px',
          background: signedIn ? '#e8f5e9' : '#fff',
          border: '2px solid #ddd',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        {signedIn ? `☁️ ${user?.username || user?.email || '已登入'}` : '☁️ 登入同步'}
      </button>

      {open && (
        <div
          className="puter-sync__dropdown"
          style={{
            position: 'absolute',
            right: 0,
            top: '100%',
            marginTop: '8px',
            background: 'white',
            border: '2px solid #ddd',
            borderRadius: '12px',
            padding: '16px',
            width: '300px',
            maxHeight: '70vh',
            overflowY: 'auto',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            zIndex: 1000,
            fontSize: '13px',
          }}
        >
          {!signedIn ? (
            <div>
              <p style={{ margin: '0 0 12px 0', fontSize: '14px' }}>
                使用 Puter 帳戶同步進度
                <br />
                <small style={{ color: '#666' }}>Sign in with Puter to sync</small>
              </p>
              <button
                onClick={signIn}
                style={{
                  width: '100%',
                  padding: '8px',
                  background: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                登入 Sign In
              </button>
            </div>
          ) : (
            <div>
              <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#666' }}>
                {user?.username || user?.email}
              </p>

              <div
                style={{
                  background: '#f7f9fc',
                  border: '1px solid #e3e9f1',
                  borderRadius: '8px',
                  padding: '8px 10px',
                  marginBottom: '10px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ fontSize: '12px' }}>雲端資料 Cloud</strong>
                  <button
                    onClick={refreshCloud}
                    disabled={loadingCloud}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#2196F3',
                      cursor: 'pointer',
                      fontSize: '12px',
                      padding: 0,
                    }}
                  >
                    {loadingCloud ? '讀取中…' : '↻ 重新整理'}
                  </button>
                </div>
                {loadingCloud && <p style={{ margin: '6px 0 0', color: '#888' }}>讀取中…</p>}
                {!loadingCloud && !cloud && (
                  <p style={{ margin: '6px 0 0', color: '#b26a00' }}>雲端未有資料 No cloud data</p>
                )}
                {!loadingCloud && cloud && (
                  <>
                    <p style={{ margin: '6px 0 4px', color: '#666', fontSize: '12px' }}>
                      更新 Updates: {formatTime(cloud.updatedAt)}
                    </p>
                    <p style={{ margin: '0 0 4px', fontSize: '12px' }}>
                      {cloud.profiles.length} 個小朋友 ·{' '}
                      {cloud.profiles.map((p) => `${p.avatar || ''}${p.name}`).join('、')}
                    </p>
                    {cloud.deletedCount > 0 && (
                      <p style={{ margin: 0, color: '#888', fontSize: '11px' }}>
                        另有 {cloud.deletedCount} 個已刪除（保留中）· {cloud.deletedCount} deleted (kept)
                      </p>
                    )}
                  </>
                )}
              </div>

              {lastSync && (
                <p style={{ margin: '0 0 10px 0', fontSize: '12px', color: '#666' }}>
                  上次同步: {formatTime(lastSync)}
                </p>
              )}
              {error && (
                <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#d32f2f' }}>{error}</p>
              )}

              <button
                onClick={() => runWithReconcile(sync)}
                disabled={busy}
                style={{
                  width: '100%',
                  padding: '8px',
                  marginBottom: '8px',
                  background: busy ? '#ccc' : '#2196F3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: busy ? 'not-allowed' : 'pointer',
                }}
              >
                {checking ? '檢查中...' : syncing ? '同步中...' : '上載本機進度 Upload Local'}
              </button>
              <button
                onClick={() => runWithReconcile(loadFromCloud)}
                disabled={busy}
                style={{
                  width: '100%',
                  padding: '8px',
                  marginBottom: '8px',
                  background: busy ? '#ccc' : '#FF9800',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: busy ? 'not-allowed' : 'pointer',
                }}
              >
                {checking ? '檢查中...' : syncing ? '載入中...' : '下載雲端進度 Download Cloud'}
              </button>

              {note && (
                <p style={{ margin: '0 0 10px 0', fontSize: '12px', color: '#d32f2f' }}>{note}</p>
              )}

              <button
                onClick={signOut}
                disabled={busy}
                style={{
                  width: '100%',
                  padding: '8px',
                  background: '#f5f5f5',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  cursor: busy ? 'not-allowed' : 'pointer',
                }}
              >
                登出 Sign Out
              </button>
              <p style={{ margin: '12px 0 0 0', fontSize: '11px', color: '#666' }}>
                上載只會合併，唔會刪除雲端嘅小朋友。本機有但雲端冇嘅小朋友會先問你。
                <br />
                Uploads only merge. No cloud profile is ever deleted automatically.
              </p>
            </div>
          )}
        </div>
      )}

      {reconcile && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            zIndex: 2000,
          }}
        >
          <div
            style={{
              width: 'min(420px, 96vw)',
              maxHeight: '80vh',
              overflowY: 'auto',
              background: 'white',
              border: '2px solid #ddd',
              borderRadius: '16px',
              padding: '18px',
              boxShadow: '0 16px 40px rgba(0,0,0,0.2)',
              fontSize: '14px',
            }}
          >
            <h3 style={{ margin: '0 0 6px', fontSize: '16px' }}>本機有，雲端冇</h3>
            <p style={{ margin: '0 0 12px', color: '#666', fontSize: '13px', lineHeight: 1.5 }}>
              以下小朋友只喺呢部機有。預設會保留，唔會刪除。
              <br />
              These profiles exist only on this device. They are kept by default.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
              {reconcile.localOnly.map((p) => {
                const deletable = canDeleteLocal(p.id)
                return (
                  <label
                    key={p.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      border: '1px solid #eee',
                      borderRadius: '10px',
                      padding: '8px 10px',
                      cursor: deletable ? 'pointer' : 'not-allowed',
                      background: deleteIds.has(p.id) ? '#fff1f0' : '#fff',
                    }}
                  >
                    <span style={{ fontSize: '22px' }}>{p.avatar || '🐻'}</span>
                    <span style={{ flex: 1, fontWeight: 700 }}>{p.name}</span>
                    {deletable ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#d32f2f' }}>
                        <input
                          type="checkbox"
                          checked={deleteIds.has(p.id)}
                          onChange={() => toggleDelete(p.id)}
                        />
                        刪除 Delete
                      </span>
                    ) : (
                      <span style={{ color: '#888', fontSize: '11px' }}>
                        至少保留一個 Must keep one
                      </span>
                    )}
                  </label>
                )
              })}
            </div>

            <p style={{ margin: '0 0 14px', color: '#888', fontSize: '11px', lineHeight: 1.5 }}>
              只有剔選「刪除」嘅小朋友會喺本機刪除（30 日內可還原）。之後會繼續你揀嘅同步。
              <br />
              Only ticked profiles are deleted locally (recoverable for 30 days). Your sync then
              continues.
            </p>

            {wouldDeleteAll && (
              <p style={{ margin: '0 0 14px', color: '#d32f2f', fontSize: '12px' }}>
                至少要保留一個小朋友。請取消剔選其中一個。
                <br />
                Keep at least one profile. Untick one to continue.
              </p>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                onClick={cancelReconcile}
                style={{
                  padding: '8px 14px',
                  background: '#f5f5f5',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                取消 Cancel
              </button>
              <button
                onClick={continueReconcile}
                disabled={wouldDeleteAll}
                style={{
                  padding: '8px 14px',
                  background: wouldDeleteAll ? '#ccc' : '#2196F3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: wouldDeleteAll ? 'not-allowed' : 'pointer',
                  fontWeight: 700,
                }}
              >
                繼續 Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
