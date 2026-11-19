import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import Process from '../components/Process.jsx'
import Work from '../components/Work.jsx'
import Contact from '../components/Contact.jsx'
import { SITE } from '../config.js'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Process />
      {SITE.showWork && <Work />}
      <Contact />
    </>
  )
}