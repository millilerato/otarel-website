import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import { projects } from '../data.jsx'

export default function Work() {
  return (
    <section id="work" className="relative bg-surface py-28">
      <div className="mx-auto max-w-[1328px] px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Real projects, real results"
          text="A look at what we have built for businesses like yours."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {projects.map((p, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <TiltCard intensity={6}>
                <article className="group overflow-hidden rounded-3xl border border-line bg-white shadow-[0_1px_2px_rgba(15,27,61,0.04)] transition-all duration-300 hover:border-brand/30 hover:shadow-[0_24px_60px_-24px_rgba(47,95,240,0.35)]">
                  {/* Replace this block with <img src={p.image} alt={p.title} /> once you have screenshots */}
                  <div className={`relative h-52 bg-linear-to-br ${p.gradient}`}>
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink shadow-sm">
                      Project 0{idx + 1}
                    </span>
                    <div className="absolute inset-5 top-12 rounded-xl border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur">
                      <div className="flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-ink/20" />
                        <span className="h-2 w-2 rounded-full bg-ink/20" />
                        <span className="h-2 w-2 rounded-full bg-ink/20" />
                      </div>
                      <div className="mt-4 h-2.5 w-2/3 rounded bg-ink/15" />
                      <div className="mt-2.5 h-2.5 w-1/2 rounded bg-ink/10" />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                      {p.tag}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-semibold text-ink">{p.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1 font-semibold text-brand transition-all group-hover:gap-2"
                      >
                        View project →
                      </a>
                    )}
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
