import { techStack, capabilities } from '../data.jsx'

function Row({ items, reverse = false, className = '' }) {
  const row = [...items, ...items]
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={`flex w-max gap-10 whitespace-nowrap ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {row.map((t, i) => (
          <span key={`${t}-${i}`} className={`flex items-center gap-10 font-display font-semibold ${className}`}>
            {t}
            <span aria-hidden="true" className="text-violet/70">
              ✳
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <section
      aria-label="Technologies and capabilities"
      className="flex flex-col gap-4 border-b border-line bg-white py-8"
    >
      <Row items={techStack} className="text-xl text-ink/55" />
      <Row items={capabilities} reverse className="text-3xl text-brand/80 md:text-4xl" />
    </section>
  )
}
