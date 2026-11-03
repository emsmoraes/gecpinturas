import { Clock, Gauge, MessageCircleHeart, ShieldCheck, Sparkles, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { useLanguage } from '@/i18n/language'
import { media } from '@/lib/utils'

const ICONS: LucideIcon[] = [Sparkles, Clock, Gauge, ShieldCheck, MessageCircleHeart]

export function WhyUs() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 -right-40 size-[36rem] rounded-full bg-brand/15 blur-3xl" />
      <div className="container-page relative grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} tone="dark" />

          <ul className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {t.why.items.map((item, i) => {
              const Icon = ICONS[i]
              return (
                <li
                  key={item.title}
                  data-reveal
                  style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
                  className="flex gap-4"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/[0.06] text-brand ring-1 ring-white/10">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-1 leading-relaxed text-white/60">{item.text}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <figure data-reveal className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-white/10">
            <img
              src={media('obra-salon.webp')}
              alt={t.why.imageAlt}
              width={960}
              height={1280}
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          </div>
          <figcaption className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-ink shadow-lg">
            <ShieldCheck className="size-4" />
            {t.why.imageCaption}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
