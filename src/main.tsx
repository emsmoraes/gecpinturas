import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './i18n/language'
import { langFromPath } from './lib/site'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <LanguageProvider initialLang={langFromPath(window.location.pathname)}>
      <App />
    </LanguageProvider>
  </StrictMode>
)

// En producción el HTML viene prerenderizado (scripts/prerender.mjs); en desarrollo se monta desde cero.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
