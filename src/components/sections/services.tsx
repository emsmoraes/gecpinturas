import { ArrowUpRight, KeyRound, Layers, PaintRoller, TreePalm, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { useLanguage } from '@/i18n/language'
import type { ServiceKey } from '@/i18n/translations'
import { media } from '@/lib/utils'

export const SERVICES: { key: ServiceKey; icon: LucideIcon; image: string }[] = [
  { key: 'homes', icon: PaintRoller, image: 'obra-estancia.webp' },
  { key: 'rentals', icon: TreePalm, image: 'hero-poster.webp' },
  { key: 'agencies', icon: KeyRound, image: 'obra-pasillo-blanco.webp' },
  { key: 'prep', icon: Layers, image: 'wall-repair.webp' },
]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="servicios" className="bg-sand py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} text={t.services.text} />
        </div>

        <ul className="-mx-5 mt-12 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:mt-16 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
          {SERVICES.map(({ key, icon: Icon, image }, i) => (
            <li
              key={key}
              className="w-[82%] shrink-0 snap-start sm:w-auto"
              data-reveal
              style={{ '--reveal-delay': `${i * 90}ms` } as React.CSSProperties}
            >
              <a
                href="#contacto"
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white p-2 ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px] hover:shadow-ink/30 focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-sand">
                  <img
                    src={media(image)}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 grid size-11 place-items-center rounded-2xl bg-white/90 text-ink shadow-sm backdrop-blur">
                    <Icon className="size-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-4 pt-5 pb-4">
                  <h3 className="text-xl font-semibold tracking-tight text-ink">{t.services.items[key].title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{t.services.items[key].text}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep">
                    {t.services.ask}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
