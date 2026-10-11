import { SectionHeading } from '@/components/section-heading'
import { useLanguage } from '@/i18n/language'

export function Process() {
  const { t } = useLanguage()

  return (
    <section className="bg-sand py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} align="center" />

        <div className="relative mt-14 lg:mt-16">
          <div aria-hidden="true" className="absolute top-8 right-[12.5%] left-[12.5%] hidden h-px bg-[repeating-linear-gradient(90deg,var(--color-ink)_0_6px,transparent_6px_14px)] opacity-20 lg:block" />
          <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, i) => (
            <li
              key={step.title}
              data-reveal
              style={{ '--reveal-delay': `${i * 110}ms` } as React.CSSProperties}
              className="relative flex flex-col items-center rounded-[1.75rem] bg-white px-6 pt-0 pb-8 text-center ring-1 ring-ink/5 lg:bg-transparent lg:ring-0"
            >
              <span className="-mt-px grid size-16 place-items-center rounded-full bg-ink font-heading text-2xl font-bold text-brand shadow-[0_0_0_8px_var(--color-sand)] max-lg:mt-6">
                {i + 1}
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">{step.title}</h3>
              <p className="mt-2 max-w-64 leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
