import { useEffect } from 'react'
import { MotionConfig, motion } from 'framer-motion'
import ScrollProgress from './components/ScrollProgress.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import { usePath } from './router.jsx'
import { services } from './data.jsx'
import Home from './pages/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import ProcessPage from './pages/ProcessPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFound from './pages/NotFound.jsx'

const BASE_TITLE = 'Otarel Solutions'

function resolve(rawPath) {
  const path = rawPath.length > 1 ? rawPath.replace(/\/+$/, '') : rawPath
  if (path === '/') return { page: <Home />, title: `${BASE_TITLE} | Web Development, Automation, CRM & AI in South Africa` }
  if (path === '/about') return { page: <AboutPage />, title: `About | ${BASE_TITLE}` }
  if (path === '/services') return { page: <ServicesPage />, title: `Services | ${BASE_TITLE}` }
  if (path === '/how-we-work') return { page: <ProcessPage />, title: `How we work | ${BASE_TITLE}` }
  if (path === '/contact') return { page: <ContactPage />, title: `Contact | ${BASE_TITLE}` }
  const m = path.match(/^\/services\/([\w-]+)$/)
  if (m) {
    const s = services.find((x) => x.slug === m[1])
    if (s) return { page: <ServiceDetail slug={m[1]} />, title: `${s.title} | ${BASE_TITLE}` }
  }
  return { page: <NotFound />, title: `Page not found | ${BASE_TITLE}` }
}

export default function App() {
  const path = usePath()
  const { page, title } = resolve(path)

  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Navbar />
      <motion.main
        key={path}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative"
      >
        {page}
      </motion.main>
      <Footer />
      <WhatsAppFloat />
    </MotionConfig>
  )
}
