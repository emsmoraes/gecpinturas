import { ArrowUp } from 'lucide-react'
import { InstagramIcon } from '@/components/icons'
import { Logo } from '@/components/logo'
import { useLanguage } from '@/i18n/language'
import { EMAIL, INSTAGRAM, PHONES, whatsappUrl } from '@/lib/contact'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-paper">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm font-heading text-xl font-semibold tracking-tight text-ink">{t.footer.tagline}</p>
          <p className="mt-2 text-sm text-muted-foreground">{t.footer.line}</p>
        </div>
        <nav aria-label={t.nav.menu}>
          <ul className="space-y-2.5 text-sm">
            {[
              ['#antes-despues', t.nav.work],
              ['#servicios', t.nav.services],
              ['#nosotros', t.nav.about],
              ['#zona', t.nav.area],
              ['#contacto', t.nav.contact],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-ink/70 transition-colors hover:text-ink">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="space-y-2.5 text-sm">
          <li>
            <a href={whatsappUrl('es')} target="_blank" rel="noopener noreferrer" className="text-ink/70 hover:text-ink">
              🇪🇸 {PHONES.es.display}
            </a>
          </li>
          <li>
            <a href={whatsappUrl('en')} target="_blank" rel="noopener noreferrer" className="text-ink/70 hover:text-ink">
              🇬🇧 {PHONES.en.display}
            </a>
          </li>
          <li>
            <a href={`mailto:${EMAIL}`} className="text-ink/70 hover:text-ink">
              {EMAIL}
            </a>
          </li>
          <li>
            <a href={INSTAGRAM.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-ink/70 hover:text-ink">
              <InstagramIcon className="size-4" />
              {INSTAGRAM.handle}
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex items-center justify-between gap-4 py-6 text-xs text-muted-foreground">
          {/* El año del HTML prerenderizado puede quedar atrás del cliente en Año Nuevo */}
          <p suppressHydrationWarning>
            © {year} G&amp;C Pinturas. {t.footer.rights}
          </p>
          <a href="#inicio" className="inline-flex items-center gap-1.5 font-medium hover:text-ink">
            {t.footer.backToTop}
            <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
