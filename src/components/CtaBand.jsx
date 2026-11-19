import Reveal from './Reveal.jsx'
import { IconArrow } from '../data.jsx'
import { mailLink } from '../config.js'

export default function CtaBand({
  title = 'Ready to build the digital engine behind your business?',
  text = "Tell us about your business and we'll suggest the right solution, with no obligation.",
}) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#eaf1ff] via-white to-[#efeaff] p-8 shadow-[0_30px_80px_-40px_rgba(31,102,242,0.45)] ring-1 ring-line md:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sky/30 blur-[90px]" />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-4xl">
                  {title}
                </h2>
                <p className="mt-3 text-lg text-muted">{text}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={mailLink('Free consultation request', "Hi Otarel Solutions,\n\nI'd like to book a free consultation.\n\n")}
                  className="group inline-flex h-14 items-center gap-3 rounded-2xl bg-linear-to-r from-brand to-violet px-8 font-semibold text-white shadow-[0_18px_40px_-14px_rgba(70,90,245,0.85)] transition-transform hover:scale-[1.04]"
                >
                  Book a free consultation
                  <IconArrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}