import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import { cn } from 'cn'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Props = {
  before: string
  after: string
  beforeLabel: string
  afterLabel: string
  alt: string
  ariaLabel: string
  width: number
  height: number
  className?: string
}

const clamp = (value: number) => Math.min(100, Math.max(0, value))

export function CompareSlider({ before, after, beforeLabel, afterLabel, alt, ariaLabel, width, height, className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)
  const [touched, setTouched] = useState(false)
  const touchedRef = useRef(false)

  const updateFromPointer = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100))
  }, [])

  // Pequeña animación la primera vez que se ve, para indicar que se puede deslizar
  useEffect(() => {
    const el = containerRef.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          if (touchedRef.current) return
          const t = Math.min(1, (now - start) / 1800)
          setPosition(50 + Math.sin(t * Math.PI * 2) * 18 * (1 - t))
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [])

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    setDragging(true)
    setTouched(true)
    touchedRef.current = true
    updateFromPointer(event.clientX)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? 10 : 2
    const keys: Record<string, number> = {
      ArrowLeft: position - step,
      ArrowDown: position - step,
      ArrowRight: position + step,
      ArrowUp: position + step,
      Home: 0,
      End: 100,
    }
    if (!(event.key in keys)) return
    event.preventDefault()
    setTouched(true)
    touchedRef.current = true
    setPosition(clamp(keys[event.key]))
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'group relative aspect-[4/5] cursor-ew-resize touch-pan-y overflow-hidden rounded-[1.75rem] bg-sand select-none sm:aspect-[3/5]',
        className,
      )}
      onPointerDown={onPointerDown}
      onPointerMove={event => dragging && updateFromPointer(event.clientX)}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
    >
      <img
        src={after}
        alt={`${alt} — ${afterLabel}`}
        width={width}
        height={height}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <img
          src={before}
          alt={`${alt} — ${beforeLabel}`}
          width={width}
          height={height}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 size-full object-cover"
        />
      </div>

      <span
        className="pointer-events-none absolute top-4 left-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur transition-opacity"
        style={{ opacity: position > 18 ? 1 : 0 }}
      >
        {beforeLabel}
      </span>
      <span
        className="pointer-events-none absolute top-4 right-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold tracking-wide text-ink uppercase transition-opacity"
        style={{ opacity: position < 82 ? 1 : 0 }}
      >
        {afterLabel}
      </span>

      <div className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(0,0,0,0.35)]" style={{ left: `${position}%` }} />
      <div
        role="slider"
        tabIndex={0}
        aria-label={ariaLabel}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`${Math.round(position)}% ${beforeLabel}`}
        onKeyDown={onKeyDown}
        className={cn(
          'absolute top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-xl ring-4 ring-white/40 transition-transform outline-none focus-visible:ring-brand',
          dragging ? 'scale-95' : 'group-hover:scale-105',
        )}
        style={{ left: `${position}%` }}
      >
        <ChevronLeft className="-mr-1 size-4" strokeWidth={2.5} />
        <ChevronRight className="-ml-1 size-4" strokeWidth={2.5} />
        {!touched && <span className="animate-ping-soft absolute inset-0 -z-10 rounded-full bg-white" />}
      </div>
    </div>
  )
}
