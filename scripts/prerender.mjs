// Genera el HTML estático de cada idioma (dist/index.html y dist/en/index.html), sitemap.xml y robots.txt.
// Se ejecuta tras `vite build` (cliente) y `vite build --ssr` (dist-ssr).
import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const serverDir = path.join(root, 'dist-ssr')

const { render, LANGS, langPath, absoluteUrl } = await import(path.join(serverDir, 'entry-server.js'))
const template = await readFile(path.join(dist, 'index.html'), 'utf8')

// Precarga de las fuentes latinas (las demás variantes se cargan solo si hacen falta por unicode-range)
const assets = await readdir(path.join(dist, 'assets'))
const fontPreloads = assets
  .filter(file => /^(geist|bricolage-grotesque)-latin-wght-normal-.*\.woff2$/.test(file))
  .map(file => `<link rel="preload" as="font" type="font/woff2" href="/assets/${file}" crossorigin />`)
  .join('\n    ')

for (const lang of LANGS) {
  const { html, head } = render(lang)
  const page = template
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace(/<!--app-head-->[\s\S]*<!--\/app-head-->/, `${head}\n    ${fontPreloads}`)
    .replace('<!--app-html-->', html)

  const outDir = path.join(dist, langPath(lang))
  await mkdir(outDir, { recursive: true })
  await writeFile(path.join(outDir, 'index.html'), page)
  console.log(`prerendered ${path.relative(root, path.join(outDir, 'index.html'))}`)
}

const lastmod = new Date().toISOString().slice(0, 10)
const alternates = [
  ...LANGS.map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${absoluteUrl(langPath(l))}" />`),
  `    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(langPath('es'))}" />`,
].join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LANGS.map(lang => `  <url>
    <loc>${absoluteUrl(langPath(lang))}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates}
  </url>`).join('\n')}
</urlset>
`
await writeFile(path.join(dist, 'sitemap.xml'), sitemap)
await writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl('/sitemap.xml')}\n`)
console.log('wrote dist/sitemap.xml, dist/robots.txt')

await rm(serverDir, { recursive: true, force: true })
