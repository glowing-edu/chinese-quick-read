import { useState } from 'react'
import { AVATARS, DELETED_RETENTION_DAYS } from '../lib/progress'

const DAY_MS = 24 * 60 * 60 * 1000

function daysLeft(deletedAt) {
  if (!deletedAt) return DELETED_RETENTION_DAYS
  const elapsed = Math.floor((Date.now() - deletedAt) / DAY_MS)
  return Math.max(1, DELETED_RETENTION_DAYS - elapsed)
}

export default function ProfileSwitcher({
  profiles,
  deletedProfiles = [],
  currentProfile,
  onSwitch,
  onAdd,
  onRename,
  onDelete,
  onRestore,
}) {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState('list') // list | add | rename | restore
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState(AVATARS[0])
  const [renamingId, setRenamingId] = useState(null)

  const openAdd = () => {
    setName('')
    setAvatar(AVATARS[0])
    setMode('add')
  }

  const openRename = (profile) => {
    setRenamingId(profile.id)
    setName(profile.name)
    setAvatar(profile.avatar)
    setMode('rename')
  }

  const close = () => {
    setOpen(false)
    setMode('list')
    setRenamingId(null)
  }

  const handleAdd = () => {
    if (!name.trim()) return
    onAdd(name, avatar)
    close()
  }

  const handleRename = () => {
    if (!name.trim() || !renamingId) return
    onRename(renamingId, name, avatar)
    close()
  }

  const handleRestore = (profile) => {
    if (!window.confirm(`還原「${profile.name}」同佢嘅進度？\nRestore ${profile.name} and their progress?`)) {
      return
    }
    onRestore(profile.id)
    close()
  }

  return (
    <div className="profile">
      <button
        type="button"
        className="profile__btn"
        onClick={() => setOpen((o) => !o)}
        aria-label="切換小朋友 Switch profile"
      >
        <span className="profile__avatar">{currentProfile?.avatar || AVATARS[0]}</span>
        <span className="profile__name">{currentProfile?.name || '小朋友'}</span>
        <span aria-hidden="true">▾</span>
      </button>

      {open && (
        <div className="profile__dropdown" role="dialog" aria-modal="true">
          {mode === 'list' && (
            <>
              <div className="profile__list">
                {profiles.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className={`profile__item${p.id === currentProfile?.id ? ' profile__item--active' : ''}`}
                    onClick={() => {
                      onSwitch(p.id)
                      close()
                    }}
                  >
                    <span className="profile__avatar">{p.avatar}</span>
                    <span className="profile__name">{p.name}</span>
                    {p.id === currentProfile?.id && <span aria-hidden="true">✓</span>}
                  </button>
                ))}
              </div>
              <div className="profile__actions">
                <button type="button" className="profile__action" onClick={openAdd}>
                  ➕ 新增小朋友 Add
                </button>
                {currentProfile && (
                  <button
                    type="button"
                    className="profile__action"
                    onClick={() => openRename(currentProfile)}
                  >
                    ✏️ 改名 Rename
                  </button>
                )}
                {profiles.length > 1 && currentProfile && (
                  <button
                    type="button"
                    className="profile__action profile__action--danger"
                    onClick={() => {
                      if (
                        window.confirm(
                          `刪除「${currentProfile.name}」？進度會保留 ${DELETED_RETENTION_DAYS} 日，可以還原。\nDelete ${currentProfile.name}? Progress is kept for ${DELETED_RETENTION_DAYS} days and can be restored.`,
                        )
                      ) {
                        onDelete(currentProfile.id)
                        close()
                      }
                    }}
                  >
                    🗑️ 刪除 Delete
                  </button>
                )}
                {deletedProfiles.length > 0 && (
                  <button
                    type="button"
                    className="profile__action"
                    onClick={() => setMode('restore')}
                  >
                    ♻️ 還原小朋友 Restore ({deletedProfiles.length})
                  </button>
                )}
              </div>
            </>
          )}

          {mode === 'add' && (
            <div className="profile__form">
              <h3 className="profile__title">新增小朋友</h3>
              <input
                type="text"
                className="profile__input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="小朋友名稱 Name"
                maxLength={12}
                autoFocus
              />
              <div className="profile__avatars">
                {AVATARS.map((a) => (
                  <button
                    key={a}
                    type="button"
                    className={`profile__av${avatar === a ? ' profile__av--selected' : ''}`}
                    onClick={() => setAvatar(a)}
                    aria-label={a}
                  >
                    {a}
                  </button>
                ))}
              </div>
              <div className="profile__form-actions">
                <button type="button" className="btn btn--ghost btn--small" onClick={() => setMode('list')}>
                  取消 Cancel
                </button>
                <button type="button" className="btn btn--primary btn--small" onClick={handleAdd}>
                  儲存 Save
                </button>
              </div>
            </div>
          )}

          {mode === 'rename' && (
            <div className="profile__form">
              <h3 className="profile__title">改名</h3>
              <input
                type="text"
                className="profile__input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="小朋友名稱 Name"
                maxLength={12}
                autoFocus
              />
              <div className="profile__avatars">
                {AVATARS.map((a) => (
                  <button
                    key={a}
                    type="button"
                    className={`profile__av${avatar === a ? ' profile__av--selected' : ''}`}
                    onClick={() => setAvatar(a)}
                    aria-label={a}
                  >
                    {a}
                  </button>
                ))}
              </div>
              <div className="profile__form-actions">
                <button type="button" className="btn btn--ghost btn--small" onClick={() => setMode('list')}>
                  取消 Cancel
                </button>
                <button type="button" className="btn btn--primary btn--small" onClick={handleRename}>
                  儲存 Save
                </button>
              </div>
            </div>
          )}

          {mode === 'restore' && (
            <div className="profile__form">
              <h3 className="profile__title">還原小朋友</h3>
              <p className="profile__hint">
                刪除咗嘅小朋友會保留 {DELETED_RETENTION_DAYS} 日，之後會自動清除。
                <br />
                Deleted profiles are kept for {DELETED_RETENTION_DAYS} days.
              </p>
              {deletedProfiles.length === 0 ? (
                <p className="profile__hint">冇可以還原嘅小朋友。Nothing to restore.</p>
              ) : (
                <div className="profile__deleted-list">
                  {deletedProfiles.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      className="profile__item profile__item--deleted"
                      onClick={() => handleRestore(p)}
                    >
                      <span className="profile__avatar">{p.avatar}</span>
                      <span className="profile__deleted-info">
                        <span className="profile__name">{p.name}</span>
                        <span className="profile__deleted-meta">
                          仲有 {daysLeft(p.deletedAt)} 日 · {daysLeft(p.deletedAt)} days left
                        </span>
                      </span>
                      <span aria-hidden="true">♻️</span>
                    </button>
                  ))}
                </div>
              )}
              <div className="profile__form-actions">
                <button type="button" className="btn btn--ghost btn--small" onClick={() => setMode('list')}>
                  返回 Back
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
