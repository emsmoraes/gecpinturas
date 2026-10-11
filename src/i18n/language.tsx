import { createContext, use, useEffect, useState, type ReactNode } from 'react'
import { dictionaries, type Dictionary, type Lang } from './translations'

const STORAGE_KEY = 'gc-lang'

function detectLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (fromUrl === 'es' || fromUrl === 'en') return fromUrl
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'es' || stored === 'en') return stored
  } catch {
    // almacenamiento no disponible
  }
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es'
}

type LanguageContextValue = { lang: Lang; t: Dictionary; setLang: (lang: Lang) => void }

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectLang)
  const t = dictionaries[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)

    const url = new URL(window.location.href)
    if (lang === 'es') url.searchParams.delete('lang')
    else url.searchParams.set('lang', lang)
    window.history.replaceState(null, '', url)

    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // almacenamiento no disponible
    }
  }, [lang, t])

  return <LanguageContext value={{ lang, t, setLang }}>{children}</LanguageContext>
}

export function useLanguage() {
  const ctx = use(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
