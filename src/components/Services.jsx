import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { Link } from '../router.jsx'
import { services, IconArrow } from '../data.jsx'

function SpotlightCard({ className = '', children }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
  }
  return (
    <div
      onMouseMove={onMove}
      className={`group relative h-full overflow-hidden rounded-3xl border border-line bg-white p-8 shadow-[0_1px_2px_rgba(15,27,61,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_24px_60px_-24px_rgba(47,95,240,0.35)] ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at var(--x) var(--y), rgba(47,95,240,0.08), transparent 60%)',
        }}
      />
      <div className="relative flex h-full flex-col">{children}</div>
    </div>
  )
}

// Small decorative previews inside the two large cards
function BrowserMock() {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-line bg-surface" aria-hidden="true">
      <div className="flex items-center gap-1.5 border-b border-line bg-white px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="ml-3 rounded-md bg-surface px-2 py-0.5 text-[11px] text-muted">yourbusiness.co.za</span>
      </div>
      <div className="grid grid-cols-[1.2fr_1fr] gap-3 p-3">
        <div className="space-y-2">
          <div className="h-2.5 w-3/4 rounded bg-ink/15" />
          <div className="h-2 w-full rounded bg-ink/10" />
          <div className="h-2 w-2/3 rounded bg-ink/10" />
          <div className="mt-3 h-6 w-20 rounded-md bg-linear-to-r from-brand to-violet" />
        </div>
        <div className="h-20 rounded-lg bg-linear-to-br from-brand/25 to-violet/25" />
      </div>
    </div>
  )
}

function DashboardMock() {
  const bars = [35, 55, 42, 70, 58, 85, 66]
  return (
    <div
      className="mt-6 flex h-[118px] items-end gap-2 rounded-xl border border-line bg-surface p-3"
      aria-hidden="true"
    >
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="w-full rounded-t bg-linear-to-t from-brand/40 to-violet"
        />
      ))}
    </div>
  )
}

export default function Services({ hideHeading = false }) {
  return (
    <section id="services" className={`relative bg-surface ${hideHeading ? 'pb-28 pt-16' : 'py-28'}`}>
      <div className="mx-auto max-w-[1480px] px-6 lg:px-8">
        {!hideHeading && (
          <SectionHeading
            eyebrow="Services"
            title="Everything your business needs to work smarter online"
            text="Six focused services, one team that understands how they fit together."
          />
        )}

        <div className={`${hideHeading ? '' : 'mt-16'} grid gap-5 md:grid-cols-6`}>
          {services.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 0.08} className={s.span}>
              <SpotlightCard>
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-brand/12 to-violet/12 text-brand transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <s.icon className="h-7 w-7" />
                  </span>
                  <span className="font-display text-sm font-semibold tracking-wide text-muted">
                    {s.num} <span className="text-muted/40">/</span> 0{services.length}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold leading-snug text-ink">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.text}</p>

                {s.visual === 'browser' && <BrowserMock />}
                {s.visual === 'dashboard' && <DashboardMock />}

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Includes">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/services/${s.slug}`}
                  className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-brand"
                >
                  Learn more
                  <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </SpotlightCard>
            </Reveal>
          ))}

          <Reveal delay={0.4} className="md:col-span-6">
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#eaf1ff] via-white to-[#efeaff] p-8 shadow-[0_30px_80px_-40px_rgba(31,102,242,0.45)] ring-1 ring-line md:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sky/30 blur-[90px]" />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                    Not sure where to start?
                  </h3>
                  <p className="mt-2 text-muted">
                    Tell us about your business and we'll suggest the right solution, with no obligation.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex h-13 shrink-0 items-center rounded-2xl bg-linear-to-r from-brand to-violet px-7 py-3.5 font-semibold text-white shadow-[0_18px_40px_-14px_rgba(70,90,245,0.85)] transition-transform hover:scale-[1.04]"
                >
                  Talk to us ↗
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}