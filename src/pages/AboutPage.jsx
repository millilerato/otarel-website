import PageHero from '../components/PageHero.jsx'
import About from '../components/About.jsx'
import Marquee from '../components/Marquee.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A technology partner built around your business"
        text="Otarel Solutions is a South African technology company. We build websites, custom systems, automation, CRM and AI solutions that help growing businesses save time and win more clients."
        crumbs={[{ label: 'About' }]}
      />
      <Marquee />
      <About />
      <CtaBand />
    </>
  )
}
