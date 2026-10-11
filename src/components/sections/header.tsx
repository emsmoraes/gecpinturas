import { useState } from 'react'
import { cn } from 'cn'
import { ArrowRight, Menu } from 'lucide-react'
import { WhatsAppIcon } from '@/components/icons'
import { LanguageSwitch } from '@/components/language-switch'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useScrolled } from '@/hooks/use-scrolled'
import { useLanguage } from '@/i18n/language'
import { whatsappUrl } from '@/lib/contact'

export function Header() {
  const { t, lang } = useLanguage()
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#antes-despues', label: t.nav.work },
    { href: '#servicios', label: t.nav.services },
    { href: '#nosotros', label: t.nav.about },
    { href: '#zona', label: t.nav.area },
    { href: '#contacto', label: t.nav.contact },
  ]

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled ? 'border-b border-border/70 bg-paper/85 backdrop-blur-xl' : 'border-b border-transparent',
      )}
    >
      <div className="container-page flex h-[4.25rem] items-center justify-between gap-4">
        <a href="#inicio" aria-label={`G&C Pinturas · ${t.nav.home}`} className="rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brand">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch className="hidden sm:inline-grid" />
          <Button
            variant="ink"
            size="xl"
            className="hidden h-10 px-5 text-sm md:inline-flex"
            nativeButton={false}
            render={<a href="#contacto" />}
          >
            {t.cta.quoteShort}
            <ArrowRight data-icon="inline-end" />
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button variant="outline" size="icon-lg" className="size-10 rounded-full bg-white/70 lg:hidden" />}
            >
              <Menu />
              <span className="sr-only">{t.nav.menu}</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88%] gap-0 bg-paper p-0">
              <div className="flex h-[4.25rem] items-center border-b border-border px-5">
                <SheetTitle render={<div />}>
                  <Logo />
                </SheetTitle>
              </div>
              <nav aria-label={t.nav.menu} className="flex-1 overflow-y-auto px-3 py-4">
                <ul>
                  {links.map(link => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-xl px-3 py-3.5 font-heading text-2xl font-semibold tracking-tight text-ink hover:bg-ink/5"
                      >
                        {link.label}
                        <ArrowRight className="size-5 text-ink/30" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="space-y-3 border-t border-border p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{t.nav.language}</span>
                  <LanguageSwitch />
                </div>
                <Button
                  variant="brand"
                  size="xl"
                  className="w-full"
                  nativeButton={false}
                  render={<a href={whatsappUrl(lang)} target="_blank" rel="noopener noreferrer" />}
                >
                  <WhatsAppIcon />
                  {t.cta.whatsapp}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
