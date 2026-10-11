import type { Lang } from '@/i18n/translations'

export const EMAIL = 'gcpinturas.es@gmail.com'

export const INSTAGRAM = { handle: '@gc.pinturas1dia', url: 'https://www.instagram.com/gc.pinturas1dia/' }

export const PHONES = {
  es: { raw: '34624273052', display: '+34 624 27 30 52' },
  en: { raw: '34624464406', display: '+34 624 46 44 06' },
} as const satisfies Record<Lang, { raw: string; display: string }>

export function whatsappUrl(lang: Lang, text?: string) {
  const base = `https://wa.me/${PHONES[lang].raw}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}
