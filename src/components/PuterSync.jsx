import { useCallback, useEffect, useState } from 'react'
import { usePuterSync } from '../hooks/usePuterSync'
import { getCloudSummary, loadCloudBackups, restoreCloudBackup } from '../lib/puterSync'

const formatTime = (ts) => {
  if (!ts) return '—'
  return new Date(ts).toLocaleString('zh-HK', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function PuterSync() {
  const { available, signedIn, user, syncing, lastSync, error, signIn, signOut, sync, loadFromCloud } =
    usePuterSync()
  const [open, setOpen] = useState(false)
  const [cloud, setCloud] = useState(null)
  const [backups, setBackups] = useState([])
  const [loadingCloud, setLoadingCloud] = useState(false)
  const [restoring, setRestoring] = useState(false)
  const [note, setNote] = useState(null)

  void lastSync

  const refreshCloud = useCallback(async () => {
    setLoadingCloud(true)
    try {
      const [summary, list] = await Promise.all([getCloudSummary(), loadCloudBackups()])
      setCloud(summary)
      setBackups(list)
    } catch (err) {
      console.error(err)
    } finally {
      setLoadingCloud(false)
    }
  }, [])

  useEffect(() => {
    if (open && signedIn) refreshCloud()
  }, [open, signedIn, refreshCloud])

  const handleRestore = async (index) => {
    if (!window.confirm('用呢個備份覆蓋本機同雲端進度？\nReplace local and cloud progress with this backup?')) {
      return
    }
    setRestoring(true)
    setNote(null)
    try {
      const result = await restoreCloudBackup(index)
      if (result.ok) {
        window.location.reload()
      } else {
        setNote('還原失敗 Restore failed')
      }
    } catch (err) {
      setNote(err.message)
    } finally {
      setRestoring(false)
    }
  }

  if (!available) return null

  const busy = syncing || loadingCloud || restoring

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
                onClick={sync}
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
                {syncing ? '同步中...' : '上載本機進度 Upload Local'}
              </button>
              <button
                onClick={loadFromCloud}
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
                {syncing ? '載入中...' : '下載雲端進度 Download Cloud'}
              </button>

              {backups.length > 0 && (
                <div style={{ marginBottom: '10px' }}>
                  <p style={{ margin: '0 0 6px', fontWeight: 700, fontSize: '12px' }}>
                    雲端備份 Backups
                  </p>
                  {backups.map((b) => (
                    <div
                      key={b.index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '8px',
                        padding: '6px 8px',
                        border: '1px solid #eee',
                        borderRadius: '6px',
                        marginBottom: '4px',
                      }}
                    >
                      <span style={{ fontSize: '12px', color: '#555' }}>
                        {formatTime(b.savedAt)}
                        <br />
                        <span style={{ color: '#888' }}>
                          {b.profiles.map((p) => `${p.avatar || ''}${p.name}`).join('、')}
                        </span>
                      </span>
                      <button
                        onClick={() => handleRestore(b.index)}
                        disabled={busy}
                        style={{
                          padding: '4px 8px',
                          background: busy ? '#ccc' : '#fff',
                          border: '1px solid #bbb',
                          borderRadius: '4px',
                          cursor: busy ? 'not-allowed' : 'pointer',
                          fontSize: '12px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        還原
                      </button>
                    </div>
                  ))}
                </div>
              )}

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
                上載會合併本機同雲端進度，唔會刪除雲端嘅小朋友。
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
