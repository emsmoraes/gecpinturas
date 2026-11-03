import { createContext, use, useEffect, useState, type ReactNode } from 'react'
import { langPath } from '@/lib/site'
import { dictionaries, type Dictionary, type Lang } from './translations'

export const STORAGE_KEY = 'gc-lang'

type LanguageContextValue = { lang: Lang; t: Dictionary; setLang: (lang: Lang) => void }

const LanguageContext = createContext<LanguageContextValue | null>(null)

/**
 * El idioma lo decide la URL (`/` español, `/en/` inglés) para que el HTML prerenderizado,
 * los buscadores y la app coincidan. La preferencia guardada solo redirige desde `/` (ver index.html).
 */
export function LanguageProvider({ initialLang, children }: { initialLang: Lang; children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)
  const t = dictionaries[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [lang, t])

  const setLang = (next: Lang) => {
    setLangState(next)
    window.history.replaceState(null, '', `${langPath(next)}${window.location.hash}`)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // almacenamiento no disponible
    }
  }

  return <LanguageContext value={{ lang, t, setLang }}>{children}</LanguageContext>
}

export function useLanguage() {
  const ctx = use(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
