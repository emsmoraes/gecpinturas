import { useEffect, useRef } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { BrushStroke, WhatsAppIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/i18n/language'
import { whatsappUrl } from '@/lib/contact'
import { media } from '@/lib/utils'

export function Hero() {
  const { t, lang } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    video.play().catch(() => {})
  }, [])

  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-[4.25rem]">
      {/* Fondo: manchas suaves de color */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-10%] size-[42rem] rounded-full bg-brand/18 blur-3xl" />
        <div className="absolute top-1/2 -left-40 size-[28rem] rounded-full bg-brand-soft blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-ink)_1px,transparent_0)] [background-size:28px_28px] opacity-[0.035]" />
      </div>

      <div className="container-page grid items-center gap-12 pt-10 pb-16 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:pt-16 lg:pb-24">
        <div className="lg:col-span-7">
          <p data-reveal className="eyebrow">
            <span className="relative flex size-2">
              <span className="animate-ping-soft absolute inset-0 rounded-full bg-brand" />
              <span className="relative size-2 rounded-full bg-brand" />
            </span>
            {t.hero.eyebrow}
          </p>

          <h1
            data-reveal
            style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
            className="mt-6 text-[2.75rem] leading-[1] font-extrabold tracking-[-0.045em] text-ink sm:text-[4.1rem] lg:text-[3.9rem] xl:text-[4.4rem]"
          >
            <span className="block">
            {t.hero.titleA}{' '}
            <span className="relative inline-block whitespace-nowrap">
              <BrushStroke className="absolute -bottom-1 left-[-2%] -z-10 h-[0.42em] w-[104%] text-brand sm:-bottom-1.5" />
              {t.hero.titleHighlight}
            </span>
            </span>
            <span className="mt-1 block text-ink/38">{t.hero.titleB}</span>
          </h1>

          <p
            data-reveal
            style={{ '--reveal-delay': '160ms' } as React.CSSProperties}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            {t.hero.text}
          </p>

          <div
            data-reveal
            style={{ '--reveal-delay': '240ms' } as React.CSSProperties}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button variant="brand" size="xl" className="h-14 px-7 text-base" nativeButton={false} render={<a href="#contacto" />}>
              {t.cta.quote}
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="h-14 border-ink/15 bg-white/60 px-7 text-base backdrop-blur hover:bg-white"
              nativeButton={false}
              render={<a href={whatsappUrl(lang)} target="_blank" rel="noopener noreferrer" />}
            >
              <WhatsAppIcon className="text-[#1faa53]" />
              {t.cta.whatsapp}
            </Button>
          </div>

          <ul
            data-reveal
            style={{ '--reveal-delay': '320ms' } as React.CSSProperties}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink/75"
          >
            {t.hero.trust.map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="grid size-5 place-items-center rounded-full bg-brand/20 text-brand-deep">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          data-reveal
          style={{ '--reveal-delay': '200ms' } as React.CSSProperties}
          className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand shadow-[0_40px_80px_-30px] shadow-ink/35 ring-1 ring-ink/5 lg:aspect-[4/5.4]">
            <video
              ref={videoRef}
              className="absolute inset-0 size-full object-cover"
              src={media('hero.mp4')}
              poster={media('hero-poster.webp')}
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/55 to-transparent" />
            <p className="absolute bottom-5 left-5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-medium text-white ring-1 ring-white/25 backdrop-blur-md">
              {t.hero.mediaBadge}
            </p>
          </div>

          <div className="animate-float absolute -bottom-6 -left-3 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-[0_20px_50px_-20px] shadow-ink/40 ring-1 ring-ink/5 sm:-left-8 lg:top-12 lg:bottom-auto lg:-left-14">
            <span className="inline-flex h-11 items-center rounded-xl bg-ink px-2.5 font-heading text-xs font-bold whitespace-nowrap text-white">
              CA<span className="text-brand">→</span>ES
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-ink">{t.hero.floatingTitle}</span>
              <span className="block text-xs text-muted-foreground">{t.hero.floatingText}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
