import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import { CompareSlider } from '@/components/compare-slider'
import { SectionHeading } from '@/components/section-heading'
import { useLanguage } from '@/i18n/language'
import { media } from '@/lib/utils'

const PAIRS = [
  { before: 'hall-before.webp', after: 'hall-after.webp' },
  { before: 'room-before.webp', after: 'room-after.webp' },
]

function Reel() {
  const { t } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  // Reproduce solo mientras está en pantalla
  useEffect(() => {
    const video = videoRef.current
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? video.play().catch(() => {}) : video.pause()),
      { threshold: 0.5 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  const toggle = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) video.play().catch(() => {})
    else video.pause()
  }

  return (
    <figure className="flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-ink sm:aspect-[3/5]">
        <video
          ref={videoRef}
          className="absolute inset-0 size-full object-cover"
          src={media('reel.mp4')}
          poster={media('reel-poster.webp')}
          muted
          loop
          playsInline
          preload="none"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? t.work.pause : t.work.play}
          className="absolute right-4 bottom-4 grid size-12 place-items-center rounded-full bg-white/90 text-ink shadow-lg backdrop-blur transition hover:scale-105 hover:bg-white focus-visible:ring-4 focus-visible:ring-brand focus-visible:outline-none"
        >
          {playing ? <Pause className="size-5" fill="currentColor" /> : <Play className="ml-0.5 size-5" fill="currentColor" />}
        </button>
      </div>
      <figcaption className="mt-5 px-1">
        <h3 className="text-xl font-semibold tracking-tight text-ink">{t.work.reelTitle}</h3>
        <p className="mt-1.5 text-muted-foreground">{t.work.reelText}</p>
      </figcaption>
    </figure>
  )
}

export function BeforeAfter() {
  const { t } = useLanguage()

  return (
    <section id="antes-despues" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={t.work.eyebrow} title={t.work.title} text={t.work.text} />

        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {PAIRS.map((pair, i) => (
            <figure
              key={pair.before}
              data-reveal
              style={{ '--reveal-delay': `${i * 100}ms` } as React.CSSProperties}
              className="flex flex-col"
            >
              <CompareSlider
                before={media(pair.before)}
                after={media(pair.after)}
                beforeLabel={t.work.before}
                afterLabel={t.work.after}
                alt={t.work.items[i].title}
                ariaLabel={t.work.sliderLabel}
                width={536}
                height={1088}
              />
              <figcaption className="mt-5 px-1">
                <h3 className="text-xl font-semibold tracking-tight text-ink">{t.work.items[i].title}</h3>
                <p className="mt-1.5 text-muted-foreground">{t.work.items[i].text}</p>
              </figcaption>
            </figure>
          ))}
          <div data-reveal style={{ '--reveal-delay': '200ms' } as React.CSSProperties} className="sm:col-span-2 sm:mx-auto sm:w-1/2 sm:px-3 lg:col-span-1 lg:w-full lg:px-0">
            <Reel />
          </div>
        </div>
      </div>
    </section>
  )
}
