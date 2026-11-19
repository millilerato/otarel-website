import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <Reveal className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-lg leading-relaxed text-muted">{text}</p>}
    </Reveal>
  )
}
