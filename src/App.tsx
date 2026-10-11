import { WhatsAppFab } from '@/components/whatsapp-fab'
import { BeforeAfter } from '@/components/sections/before-after'
import { Contact } from '@/components/sections/contact'
import { Faq } from '@/components/sections/faq'
import { Footer } from '@/components/sections/footer'
import { Header } from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import { Process } from '@/components/sections/process'
import { ServiceArea } from '@/components/sections/service-area'
import { Services } from '@/components/sections/services'
import { Story } from '@/components/sections/story'
import { WhyUs } from '@/components/sections/why-us'
import { useReveal } from '@/hooks/use-reveal'

export default function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <BeforeAfter />
        <Services />
        <WhyUs />
        <Story />
        <Process />
        <ServiceArea />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
