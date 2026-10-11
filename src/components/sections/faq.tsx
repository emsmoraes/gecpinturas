import { SectionHeading } from '@/components/section-heading'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useLanguage } from '@/i18n/language'

export function Faq() {
  const { t } = useLanguage()

  return (
    <section className="bg-sand py-20 sm:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} className="lg:col-span-5" />
        <div data-reveal className="lg:col-span-7">
          <Accordion className="rounded-[1.75rem] bg-white px-5 ring-1 ring-ink/5 sm:px-8">
            {t.faq.items.map((item, i) => (
              <AccordionItem key={item.q} value={i}>
                <AccordionTrigger className="py-6 text-base font-semibold text-ink hover:no-underline sm:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
