import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { forwardAuthCode } from './lib/auth.js'

// OAuth popup: hand the authorisation code back to the window that opened us
// and shut down — this document never becomes the main app.
if (forwardAuthCode()) {
  document.getElementById('root').innerHTML =
    '<p class="auth-return">正在登入 Signing in…</p>'
} else {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
