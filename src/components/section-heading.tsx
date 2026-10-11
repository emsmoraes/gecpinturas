import type { ReactNode } from 'react'
import { cn } from 'cn'

type Props = {
  eyebrow: string
  title: ReactNode
  text?: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionHeading({ eyebrow, title, text, align = 'left', tone = 'light', className }: Props) {
  const dark = tone === 'dark'
  return (
    <div data-reveal className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <p className={cn('eyebrow', dark && 'text-brand')}>
        <span className={cn('h-px w-6 bg-current', align === 'center' && 'hidden')} />
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-4 text-[2.15rem] leading-[1.05] font-bold tracking-[-0.03em] sm:text-5xl',
          dark ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {text && (
        <p className={cn('mt-5 text-lg leading-relaxed', dark ? 'text-white/65' : 'text-muted-foreground')}>{text}</p>
      )}
    </div>
  )
}
