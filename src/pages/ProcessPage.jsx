import PageHero from '../components/PageHero.jsx'
import Process from '../components/Process.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="A clear process from first call to launch"
        text="You see the design before anything is built, and regular previews along the way, so there are no surprises."
        crumbs={[{ label: 'How we work' }]}
      />
      <Process hideHeading />
      <CtaBand />
    </>
  )
}
