import { useId, useState, type FormEvent } from 'react'
import { cn } from 'cn'
import { ArrowUpRight, Mail, Send } from 'lucide-react'
import { InstagramIcon, WhatsAppIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useLanguage } from '@/i18n/language'
import type { ServiceKey } from '@/i18n/translations'
import { EMAIL, INSTAGRAM, PHONES, whatsappUrl } from '@/lib/contact'
import { SERVICES } from './services'

export function Contact() {
  const { t, lang } = useLanguage()
  const f = t.contact.form
  const id = useId()
  const [name, setName] = useState('')
  const [town, setTown] = useState('')
  const [service, setService] = useState<ServiceKey | null>(null)
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!name.trim()) {
      setError(true)
      document.getElementById(`${id}-name`)?.focus()
      return
    }
    const details = [
      `• ${f.name}: ${name.trim()}`,
      town.trim() && `• ${f.town}: ${town.trim()}`,
      service && `• ${f.service} ${t.services.items[service].title}`,
      message.trim() && `• ${f.message}: ${message.trim()}`,
    ].filter(Boolean)
    const text = [f.greeting, '', ...details].join('\n')
    window.open(whatsappUrl(lang, text), '_blank', 'noopener,noreferrer')
  }

  const channels = [
    { href: whatsappUrl('es'), label: t.contact.channels.whatsappEs, value: PHONES.es.display, flag: '🇪🇸', icon: WhatsAppIcon, external: true },
    { href: whatsappUrl('en'), label: t.contact.channels.whatsappEn, value: PHONES.en.display, flag: '🇬🇧', icon: WhatsAppIcon, external: true },
    { href: `mailto:${EMAIL}`, label: t.contact.channels.email, value: EMAIL, flag: null, icon: Mail, external: false },
    { href: INSTAGRAM.url, label: t.contact.channels.instagram, value: INSTAGRAM.handle, flag: null, icon: InstagramIcon, external: true },
  ]

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-ink px-5 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -left-32 size-[34rem] rounded-full bg-brand/20 blur-3xl" />
          <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div data-reveal>
                <p className="eyebrow text-brand">
                  <span className="h-px w-6 bg-current" />
                  {t.contact.eyebrow}
                </p>
                <h2 className="mt-4 text-[2.4rem] leading-[1.02] font-bold tracking-[-0.035em] sm:text-6xl">
                  {t.contact.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-white/65">{t.contact.text}</p>
              </div>

              <ul data-reveal className="mt-10 space-y-3">
                {channels.map(channel => (
                  <li key={channel.href}>
                    <a
                      href={channel.href}
                      {...(channel.external && { target: '_blank', rel: 'noopener noreferrer' })}
                      className="group flex items-center gap-4 rounded-2xl bg-white/[0.05] p-4 ring-1 ring-white/10 transition hover:bg-white/[0.09] focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand text-ink">
                        <channel.icon className="size-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs text-white/55">
                          {channel.flag && <span className="mr-1">{channel.flag}</span>}
                          {channel.label}
                        </span>
                        <span className="block truncate font-semibold tracking-tight">{channel.value}</span>
                      </span>
                      <ArrowUpRight className="size-5 shrink-0 text-white/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <form
              data-reveal
              noValidate
              onSubmit={onSubmit}
              className="rounded-[1.75rem] bg-white p-5 text-ink shadow-2xl sm:p-8 lg:col-span-7"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor={`${id}-name`}>{f.name}</Label>
                  <Input
                    id={`${id}-name`}
                    autoComplete="name"
                    placeholder={f.namePlaceholder}
                    value={name}
                    aria-invalid={error || undefined}
                    aria-describedby={error ? `${id}-name-error` : undefined}
                    onChange={e => {
                      setName(e.target.value)
                      setError(false)
                    }}
                    className="h-12 rounded-xl px-4 text-base"
                  />
                  {error && (
                    <p id={`${id}-name-error`} className="text-sm text-destructive">
                      {f.required}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`${id}-town`}>{f.town}</Label>
                  <Input
                    id={`${id}-town`}
                    autoComplete="address-level2"
                    placeholder={f.townPlaceholder}
                    value={town}
                    onChange={e => setTown(e.target.value)}
                    className="h-12 rounded-xl px-4 text-base"
                  />
                </div>
              </div>

              <fieldset className="mt-6">
                <legend className="text-sm font-medium">{f.service}</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {SERVICES.map(({ key, icon: Icon }) => {
                    const selected = service === key
                    return (
                      <label
                        key={key}
                        className={cn(
                          'inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition has-focus-visible:ring-2 has-focus-visible:ring-brand',
                          selected ? 'border-ink bg-ink text-white' : 'border-border bg-paper text-ink/80 hover:border-ink/30',
                        )}
                      >
                        <input
                          type="radio"
                          name={`${id}-service`}
                          value={key}
                          checked={selected}
                          onChange={() => setService(key)}
                          className="sr-only"
                        />
                        <Icon className={cn('size-4', selected ? 'text-brand' : 'text-ink/50')} />
                        {t.services.items[key].title}
                      </label>
                    )
                  })}
                </div>
              </fieldset>

              <div className="mt-6 space-y-2">
                <Label htmlFor={`${id}-message`}>{f.message}</Label>
                <Textarea
                  id={`${id}-message`}
                  rows={4}
                  placeholder={f.messagePlaceholder}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="min-h-28 rounded-xl px-4 py-3 text-base"
                />
              </div>

              <Button type="submit" variant="brand" size="xl" className="mt-7 h-14 w-full text-base">
                <WhatsAppIcon />
                {f.submit}
                <Send data-icon="inline-end" />
              </Button>
              <p className="mt-3 text-center text-sm text-muted-foreground">{f.hint}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
