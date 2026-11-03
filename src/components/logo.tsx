import { cn } from 'cn'
import { media } from '@/lib/utils'

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <img src={media('logo-mark.webp')} alt="" width={40} height={40} className="size-10 shrink-0" />
      <span className="font-heading text-[1.2rem] leading-none font-extrabold tracking-tight">
        <span className={inverted ? 'text-white' : 'text-ink'}>G&amp;C</span>{' '}
        <span className={inverted ? 'text-brand' : 'text-brand-deep'}>Pinturas</span>
      </span>
    </span>
  )
}
