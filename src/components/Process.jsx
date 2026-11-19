import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { steps } from '../data.jsx'

export default function Process({ hideHeading = false }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 55%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <section id="process" className={`relative bg-white ${hideHeading ? 'pb-28 pt-16' : 'py-28'}`}>
      <div className="mx-auto max-w-[1328px] px-6 lg:px-8">
        {!hideHeading && <SectionHeading eyebrow="How we work" title="A clear process from first call to launch" />}

        <div ref={ref} className={`relative max-w-3xl ${hideHeading ? '' : 'mt-16'}`}>
          <div className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-line" />
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-linear-to-b from-brand to-violet"
          />

          <div className="flex flex-col gap-14">
            {steps.map((s) => (
              <Reveal key={s.n} className="relative pl-16">
                <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-brand/40 bg-white font-display text-sm font-semibold text-brand shadow-[0_6px_20px_-8px_rgba(47,95,240,0.5)]">
                  {s.n}
                </span>
                <h3 className="font-display text-3xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
