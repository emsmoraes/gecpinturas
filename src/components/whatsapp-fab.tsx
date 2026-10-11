import { useEffect, useState } from 'react'
import { cn } from 'cn'
import { WhatsAppIcon } from '@/components/icons'
import { useLanguage } from '@/i18n/language'
import { whatsappUrl } from '@/lib/contact'

/** Botón flotante de WhatsApp: aparece tras el hero y se oculta en la sección de contacto. */
export function WhatsAppFab() {
  const { t, lang } = useLanguage()
  const [pastHero, setPastHero] = useState(false)
  const [atContact, setAtContact] = useState(false)

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const contact = document.getElementById('contacto')
    const observer = new IntersectionObserver(([entry]) => setAtContact(entry.isIntersecting), { threshold: 0.25 })
    if (contact) observer.observe(contact)

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  const visible = pastHero && !atContact

  return (
    <a
      href={whatsappUrl(lang)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.cta.whatsapp}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        'group fixed right-4 bottom-4 z-30 flex h-14 items-center gap-2 rounded-full bg-[#25d366] pr-5 pl-4 text-[0.95rem] font-semibold text-ink shadow-[0_16px_40px_-12px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-ink/30 focus-visible:outline-none sm:right-6 sm:bottom-6',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0',
      )}
    >
      <WhatsAppIcon className="size-6" />
      <span>{t.cta.whatsappShort}</span>
    </a>
  )
}
