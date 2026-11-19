import PageHero from '../components/PageHero.jsx'
import Services from '../components/Services.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything your business needs to work smarter online"
        text="Six focused services, one team that understands how they fit together."
        crumbs={[{ label: 'Services' }]}
      />
      <Services hideHeading />
      <CtaBand />
    </>
  )
}
