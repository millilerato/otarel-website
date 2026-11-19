import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'
import NotFound from './NotFound.jsx'
import { Link } from '../router.jsx'
import { services } from '../data.jsx'
import { serviceContent } from '../serviceContent.js'

export default function ServiceDetail({ slug }) {
  const service = services.find((s) => s.slug === slug)
  const content = serviceContent[slug]
  if (!service || !content) return <NotFound />

  const others = services.filter((s) => s.slug !== slug)

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.num}`}
        title={service.title}
        text={content.headline}
        crumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]}
      />

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-[1328px] gap-14 px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <Reveal>
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-brand/12 to-violet/12 text-brand">
              <service.icon className="h-8 w-8" />
            </span>
            <p className="mt-8 text-xl leading-relaxed text-ink/85">{content.intro}</p>
            <h2 className="mt-10 font-display text-2xl font-bold text-ink">What you get</h2>
            <ul className="mt-5 space-y-4">
              {content.points.map((p) => (
                <li key={p} className="flex gap-4 text-lg text-ink/85">
                  <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand/10 text-brand">
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                      <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="rounded-3xl border border-line bg-surface p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">Best for</p>
              <p className="mt-3 text-lg leading-relaxed text-ink">{content.bestFor}</p>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-brand">Includes</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {service.tags.map((t) => (
                  <li key={t} className="rounded-full border border-line bg-white px-3 py-1 text-sm font-medium text-muted">
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-xl bg-linear-to-r from-brand to-violet font-semibold text-white shadow-[0_14px_30px_-12px_rgba(70,90,245,0.85)] transition-transform hover:scale-[1.02]"
              >
                Get a quote
              </Link>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-[1328px] px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink">Other services</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group rounded-2xl border border-line bg-white p-5 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_50px_-24px_rgba(31,102,242,0.4)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <s.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 font-display font-semibold leading-snug text-ink">{s.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
