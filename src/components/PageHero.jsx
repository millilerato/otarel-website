import { motion } from 'framer-motion'
import { Link } from '../router.jsx'

// Light header used at the top of every inner page.
export default function PageHero({ eyebrow, title, text, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-[#f7f9ff] pb-16 pt-36">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-bg.webp)', backgroundPosition: '80% 85%' }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-white/70 via-white/30 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-[1328px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted">
            <Link to="/" className="hover:text-brand">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-2">
                <span>/</span>
                {c.to ? (
                  <Link to={c.to} className="hover:text-brand">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-ink md:text-6xl">
            {title}
          </h1>
          {text && <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink/80">{text}</p>}
        </motion.div>
      </div>
    </section>
  )
}
