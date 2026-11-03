import type { Lang } from '@/i18n/translations'

/** Dominio público del sitio, sin barra final. Se usa en canonical, hreflang, Open Graph, JSON-LD y sitemap. */
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? 'https://gcpinturas.es').replace(/\/$/, '')

export const LANGS: Lang[] = ['es', 'en']

/** Ruta de cada idioma: español en la raíz, inglés en /en/. */
export const langPath = (lang: Lang) => `${import.meta.env.BASE_URL}${lang === 'es' ? '' : `${lang}/`}`

export const langFromPath = (pathname: string): Lang =>
  pathname.startsWith(`${import.meta.env.BASE_URL}en/`) || pathname === `${import.meta.env.BASE_URL}en` ? 'en' : 'es'

export const absoluteUrl = (path: string) => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
