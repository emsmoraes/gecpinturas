import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.tsx'
import { LanguageProvider } from './i18n/language'
import { dictionaries, type Lang } from './i18n/translations'
import { EMAIL, INSTAGRAM, PHONES } from './lib/contact'
import { absoluteUrl, LANGS, langPath, SITE_URL } from './lib/site'

const OG_LOCALE: Record<Lang, string> = { es: 'es_ES', en: 'en_GB' }

const AREA = [
  'Elche', 'Santa Pola', 'Gran Alacant', 'Vega Baja', 'Torrevieja',
  'Guardamar del Segura', 'Ciudad Quesada', 'Rojales', 'Almoradí', 'Orihuela',
]

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function structuredData(lang: Lang) {
  const t = dictionaries[lang]
  const url = absoluteUrl(langPath(lang))
  const business = `${SITE_URL}/#business`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HousePainter',
        '@id': business,
        name: 'G&C Pinturas',
        url: absoluteUrl(langPath('es')),
        slogan: dictionaries.es.footer.tagline,
        description: dictionaries.es.meta.description,
        email: EMAIL,
        telephone: [`+${PHONES.es.raw}`, `+${PHONES.en.raw}`],
        sameAs: [INSTAGRAM.url],
        image: absoluteUrl('/og.jpg'),
        logo: absoluteUrl('/icon-512.png'),
        priceRange: '€€',
        knowsLanguage: ['es', 'en'],
        address: { '@type': 'PostalAddress', addressRegion: 'Alicante', addressCountry: 'ES' },
        areaServed: AREA.map(name => ({ '@type': 'City', name })),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: t.services.title,
          itemListElement: Object.values(t.services.items).map(item => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: item.title, description: item.text },
          })),
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: t.meta.title,
        description: t.meta.description,
        inLanguage: lang,
        about: { '@id': business },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage: lang,
        mainEntity: t.faq.items.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  }
}

function head(lang: Lang) {
  const t = dictionaries[lang]
  const url = absoluteUrl(langPath(lang))
  const image = absoluteUrl('/og.jpg')
  const title = escapeHtml(t.meta.title)
  const description = escapeHtml(t.meta.description)
  // `<` escapado para que ningún texto pueda cerrar el <script>
  const jsonLd = JSON.stringify(structuredData(lang)).replace(/</g, '\\u003c')

  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${url}" />`,
    ...LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="${absoluteUrl(langPath(l))}" />`),
    `<link rel="alternate" hreflang="x-default" href="${absoluteUrl(langPath('es'))}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="G&amp;C Pinturas" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="G&amp;C Pinturas" />`,
    `<meta property="og:locale" content="${OG_LOCALE[lang]}" />`,
    ...LANGS.filter(l => l !== lang).map(l => `<meta property="og:locale:alternate" content="${OG_LOCALE[l]}" />`),
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ].join('\n    ')
}

export function render(lang: Lang) {
  const html = renderToString(
    <StrictMode>
      <LanguageProvider initialLang={lang}>
        <App />
      </LanguageProvider>
    </StrictMode>,
  )
  return { html, head: head(lang) }
}

export { LANGS, langPath, absoluteUrl }
