import { Quote } from 'lucide-react'
import { useLanguage } from '@/i18n/language'
import { media } from '@/lib/utils'

const GALLERY = ['canada-spray', 'canada-living', 'canada-hallway'] as const

export function Story() {
  const { t } = useLanguage()

  return (
    <section id="nosotros" className="py-20 sm:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6 lg:py-6">
          <div data-reveal>
            <p className="eyebrow">
              <span className="h-px w-6 bg-current" />
              {t.story.eyebrow}
            </p>
            <h2 className="mt-4 text-[2.15rem] leading-[1.05] font-bold tracking-[-0.03em] text-ink sm:text-5xl">
              {t.story.title}
            </h2>
          </div>

          <div data-reveal className="relative mt-8 space-y-5 text-lg leading-relaxed text-ink/75">
            <Quote aria-hidden="true" className="absolute -top-2 -left-1 size-10 -translate-x-full text-brand/50 max-sm:hidden" />
            {t.story.paragraphs.map(p => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p className="flex items-center gap-3 pt-2 font-heading text-base font-semibold text-ink">
              <img src={media('logo-mark.png')} alt="" className="size-8" />
              {t.story.signature}
            </p>
          </div>

          <dl data-reveal className="mt-10 grid grid-cols-3 divide-x divide-border rounded-3xl border border-border bg-white">
            {t.story.stats.map(stat => (
              <div key={stat.label} className="px-3 py-5 text-center sm:px-5">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-heading text-xl font-bold tracking-tight whitespace-nowrap text-ink sm:text-3xl">{stat.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6">
          <p data-reveal className="mb-4 text-sm font-medium text-muted-foreground">
            {t.story.galleryTitle} 🇨🇦
          </p>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {GALLERY.map((name, i) => (
              <figure
                key={name}
                data-reveal
                style={{ '--reveal-delay': `${i * 90}ms` } as React.CSSProperties}
                className={i === 0 ? 'row-span-2' : ''}
              >
                <img
                  src={media(`${name}.webp`)}
                  alt={t.story.gallery[name]}
                  loading="lazy"
                  className={`w-full rounded-[1.5rem] object-cover ${i === 0 ? 'h-full' : 'aspect-[4/3.6]'}`}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
