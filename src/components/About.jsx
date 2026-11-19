import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { about } from '../data.jsx'

// One word of the statement: fades from light grey to full navy as you scroll past it.
function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  )
}

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.55'] })
  const words = about.statement.split(' ')

  return (
    <section id="about" className="relative bg-white py-28">
      <div className="mx-auto max-w-[1328px] px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">{about.eyebrow}</p>
        </Reveal>

        <p
          ref={ref}
          className="mt-6 max-w-4xl font-display text-3xl font-semibold leading-[1.2] tracking-tight text-ink md:text-5xl"
        >
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>
          ))}
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {about.points.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 0.1}>
              <div className="border-t border-line pt-6">
                <span className="font-display text-sm font-semibold text-violet">0{idx + 1}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
