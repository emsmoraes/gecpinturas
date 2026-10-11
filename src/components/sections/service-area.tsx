import { MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ServiceMap } from '@/components/service-map'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/i18n/language'

const MAIN = ['Elche', 'Santa Pola', 'Gran Alacant', 'Vega Baja']
const ALSO = ['Torrevieja', 'Guardamar del Segura', 'Ciudad Quesada / Rojales', 'Almoradí', 'Orihuela']

export function ServiceArea() {
  const { t } = useLanguage()

  return (
    <section id="zona" className="py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow={t.area.eyebrow} title={t.area.title} text={t.area.text} />

          <div data-reveal className="mt-10 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-ink">{t.area.main}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {MAIN.map(town => (
                  <li key={town}>
                    <Badge className="h-9 gap-1.5 rounded-full px-4 text-sm font-semibold">
                      <MapPin />
                      {town}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-ink">{t.area.also}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {ALSO.map(town => (
                  <li key={town}>
                    <Badge variant="outline" className="h-9 rounded-full bg-white px-4 text-sm font-medium">
                      {town}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-muted-foreground">
              <a href="#contacto" className="font-medium text-brand-deep underline-offset-4 hover:underline">
                {t.area.ask}
              </a>
            </p>
          </div>
        </div>

        <div data-reveal className="lg:col-span-7">
          <div className="overflow-hidden rounded-[2rem] bg-[color-mix(in_oklch,var(--color-sand),var(--color-brand-soft)_40%)] p-3 ring-1 ring-ink/5 sm:p-5">
            <ServiceMap />
          </div>
        </div>
      </div>
    </section>
  )
}
