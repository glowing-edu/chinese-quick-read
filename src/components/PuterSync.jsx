import { useState } from 'react'
import { usePuterSync } from '../hooks/usePuterSync'

export default function PuterSync() {
  const { available, signedIn, user, syncing, lastSync, error, signIn, signOut, sync, loadFromCloud } = usePuterSync()
  const [open, setOpen] = useState(false)

  if (!available) return null

  const formatTime = (ts) => {
    if (!ts) return ''
    const d = new Date(ts)
    return d.toLocaleTimeString('zh-HK', { hour: '2-digit', minute: '2-digit' })
  }

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
            minWidth: '260px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            zIndex: 1000,
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
              {lastSync && (
                <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#666' }}>
                  上次同步: {formatTime(lastSync)}
                </p>
              )}
              {error && (
                <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#d32f2f' }}>
                  {error}
                </p>
              )}
              <button
                onClick={sync}
                disabled={syncing}
                style={{
                  width: '100%',
                  padding: '8px',
                  marginBottom: '8px',
                  background: syncing ? '#ccc' : '#2196F3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: syncing ? 'not-allowed' : 'pointer',
                }}
              >
                {syncing ? '同步中...' : '上載本機進度 Upload Local'}
              </button>
              <button
                onClick={loadFromCloud}
                disabled={syncing}
                style={{
                  width: '100%',
                  padding: '8px',
                  marginBottom: '8px',
                  background: syncing ? '#ccc' : '#FF9800',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: syncing ? 'not-allowed' : 'pointer',
                }}
              >
                {syncing ? '載入中...' : '下載雲端進度 Download Cloud'}
              </button>
              <button
                onClick={signOut}
                style={{
                  width: '100%',
                  padding: '8px',
                  background: '#f5f5f5',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                登出 Sign Out
              </button>
              <p style={{ margin: '12px 0 0 0', fontSize: '11px', color: '#666' }}>
                本機進度會上載為新檔案，不會覆蓋雲端現有資料
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
