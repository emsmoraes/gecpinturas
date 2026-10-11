import { cn } from 'cn'
import { useLanguage } from '@/i18n/language'
import type { Lang } from '@/i18n/translations'

const OPTIONS: { value: Lang; label: string; name: string }[] = [
  { value: 'es', label: 'ES', name: 'Español' },
  { value: 'en', label: 'EN', name: 'English' },
]

export function LanguageSwitch({ className }: { className?: string }) {
  const { lang, setLang, t } = useLanguage()
  return (
    <div
      role="radiogroup"
      aria-label={t.nav.language}
      className={cn('relative inline-grid grid-cols-2 rounded-full border border-border bg-white/70 p-0.5 text-xs font-semibold', className)}
    >
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-y-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-ink transition-transform duration-300 ease-out',
          lang === 'en' && 'translate-x-full',
        )}
      />
      {OPTIONS.map(option => (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={lang === option.value}
          aria-label={option.name}
          lang={option.value}
          onClick={() => setLang(option.value)}
          className={cn(
            'relative z-10 h-8 rounded-full px-3 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand',
            lang === option.value ? 'text-white' : 'text-muted-foreground hover:text-ink',
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
