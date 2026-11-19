import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo.jsx'
import { Link, usePath } from '../router.jsx'
import { services, IconMenu, IconClose, IconArrow } from '../data.jsx'

const links = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Capabilities', href: '/services', menu: true },
  { label: 'How we work', href: '/how-we-work' },
  { label: 'Contact', href: '/contact' },
]

function Chevron() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Navbar() {
  const path = usePath()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setMenu(false)
  }, [path])

  const linkCls = (href) =>
    `text-[15px] font-medium tracking-[-0.005em] transition-colors hover:text-brand ${
      path === href ? 'text-brand' : 'text-ink'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-white/85 shadow-[0_8px_30px_-18px_rgba(15,27,61,0.3)] backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1328px] items-center justify-between px-6 transition-[height] duration-300 lg:px-8 ${
          scrolled ? 'h-20' : 'h-20 lg:h-[108px]'
        }`}
      >
        <Link to="/" aria-label="Otarel Solutions home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex xl:gap-10">
          {links.map((l) =>
            l.menu ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => setMenu(true)}
                onMouseLeave={() => setMenu(false)}
              >
                <button
                  type="button"
                  aria-expanded={menu}
                  onClick={() => setMenu((v) => !v)}
                  className={`flex items-center gap-1 ${linkCls('/none')} ${
                    path.startsWith('/services/') ? 'text-brand' : ''
                  }`}
                >
                  {l.label}
                  <span className={`transition-transform ${menu ? 'rotate-180' : ''}`}>
                    <Chevron />
                  </span>
                </button>
                <AnimatePresence>
                  {menu && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3"
                    >
                      <div className="rounded-2xl border border-line bg-white p-2 shadow-[0_24px_60px_-20px_rgba(31,102,242,0.35)]">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink hover:bg-surface"
                          >
                            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-brand/10 text-brand">
                              <s.icon className="h-4 w-4" />
                            </span>
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={l.label} to={l.href} className={linkCls(l.href)}>
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden h-12 items-center gap-2 rounded-[14px] bg-linear-to-r from-[#1f66f2] via-[#4a63f4] to-[#8b5cf6] px-7 text-[15px] font-semibold text-white shadow-[0_12px_30px_-10px_rgba(70,90,245,0.8)] transition-transform hover:scale-[1.04] sm:inline-flex"
          >
            Let's talk
            <IconArrow className="h-4 w-4" />
          </Link>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-ink lg:hidden"
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6">
              {links
                .filter((l) => !l.menu)
                .map((l) => (
                  <Link
                    key={l.label}
                    to={l.href}
                    className="rounded-xl px-3 py-3 text-lg font-medium text-ink hover:bg-surface"
                  >
                    {l.label}
                  </Link>
                ))}
              <Link
                to="/contact"
                className="mt-2 flex h-12 items-center justify-center rounded-xl bg-linear-to-r from-brand to-violet font-semibold text-white"
              >
                Let's talk
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
