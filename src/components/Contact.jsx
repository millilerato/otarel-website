import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { IconArrow } from '../data.jsx'
import { SITE, hasPhone, hasWhatsApp, mailLink, telLink, waLink } from '../config.js'

const needs = [
  'Website or web app',
  'Custom software / business system',
  'Business automation',
  'CRM & lead generation',
  'AI solution or agent',
  'Not sure yet',
]

// Budget ranges in rand. EDIT these to match how Otarel prices projects.
const budgets = ['Under R15k', 'R15k to R50k', 'R50k+', 'Not sure yet']

const field =
  'h-13 w-full rounded-xl border border-line bg-surface px-4 text-base text-ink placeholder:text-muted/60 outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10'

const saTime = () =>
  new Intl.DateTimeFormat('en-ZA', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Africa/Johannesburg',
  }).format(new Date())

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
        active
          ? 'border-brand bg-brand/10 font-semibold text-brand'
          : 'border-line bg-white font-medium text-muted hover:border-brand/40 hover:text-ink'
      }`}
    >
      {children}
    </button>
  )
}

export default function Contact({ page = false }) {
  const [form, setForm] = useState({ name: '', email: '', need: needs[0], budget: '', message: '' })
  const [sent, setSent] = useState(false)
  const [time, setTime] = useState(saTime)

  useEffect(() => {
    const t = setInterval(() => setTime(saTime()), 30000)
    return () => clearInterval(t)
  }, [])

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const pick = (k, v) => setForm((f) => ({ ...f, [k]: f[k] === v && k === 'budget' ? '' : v }))

  const onSubmit = (e) => {
    e.preventDefault()
    const body =
      `Name: ${form.name}\nEmail: ${form.email}\nInterested in: ${form.need}\n` +
      (form.budget ? `Budget: ${form.budget}\n` : '') +
      `\n${form.message}`
    window.location.href = mailLink(`Website enquiry from ${form.name}`, body)
    setSent(true)
  }

  return (
    <section
      id="contact"
      className={`relative overflow-hidden bg-[linear-gradient(180deg,#f3f7ff_0%,#eaf1ff_100%)] ${
        page ? 'pb-28 pt-36' : 'py-28'
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-[380px] w-[380px] rounded-full bg-sky/30 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-violet/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-[1480px] gap-14 px-6 lg:px-8 lg:grid-cols-2">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Contact</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.06] tracking-tight text-ink md:text-6xl">
            Let's talk about <span className="text-gradient">your project</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Share a few details and we'll get back to you with next steps. Prefer a quick chat? Message
            us on WhatsApp.
          </p>
          <a
            href={mailLink('Project enquiry', 'Hi Otarel Solutions,\n\n')}
            className="mt-8 inline-flex h-14 items-center gap-3 rounded-2xl bg-linear-to-r from-brand to-violet px-8 font-semibold text-white shadow-[0_18px_40px_-14px_rgba(70,90,245,0.85)] transition-transform hover:scale-[1.04]"
          >
            Email us
            <IconArrow className="h-5 w-5" />
          </a>

          <div className="mt-10 flex flex-col gap-3 text-muted">
            <a href={`mailto:${SITE.email}`} className="w-fit transition-colors hover:text-brand">
              {SITE.email}
            </a>
            {hasPhone && (
              <a href={telLink()} className="w-fit transition-colors hover:text-brand">
                {SITE.phone}
              </a>
            )}
            {hasWhatsApp && (
              <a
                href={waLink('Hi Otarel Solutions, I would like to discuss a project.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit transition-colors hover:text-brand"
              >
                WhatsApp us
              </a>
            )}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Open for projects
              </span>
              <span className="text-muted/40">|</span>
              <span>South Africa · {time} local time</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-white bg-white p-7 shadow-[0_30px_80px_-30px_rgba(47,95,240,0.35)] md:p-9">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-ink">Almost there!</h3>
                  <p className="mx-auto mt-3 max-w-xs text-muted">
                    Your email app should have opened with your message ready. Just press send and we'll reply
                    shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 font-semibold text-brand underline-offset-4 hover:underline"
                  >
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col gap-5"
                >
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold text-ink">
                      Full name
                    </label>
                    <input id="name" required value={form.name} onChange={update('name')} placeholder="Your name" className={field} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-ink">
                      Email address
                    </label>
                    <input id="email" type="email" required value={form.email} onChange={update('email')} placeholder="you@company.co.za" className={field} />
                  </div>

                  <div className="flex flex-col gap-3">
                    <span id="need-label" className="text-sm font-semibold text-ink">
                      What do you need?
                    </span>
                    <div role="group" aria-labelledby="need-label" className="flex flex-wrap gap-2">
                      {needs.map((n) => (
                        <Chip key={n} active={form.need === n} onClick={() => pick('need', n)}>
                          {n}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <span id="budget-label" className="text-sm font-semibold text-ink">
                      Budget <span className="font-normal text-muted">(optional)</span>
                    </span>
                    <div role="group" aria-labelledby="budget-label" className="flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <Chip key={b} active={form.budget === b} onClick={() => pick('budget', b)}>
                          {b}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold text-ink">
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={update('message')}
                      placeholder="A few lines is plenty"
                      className={`${field} h-auto resize-y py-3`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-brand to-violet font-semibold text-white shadow-[0_18px_40px_-14px_rgba(90,100,255,0.8)] transition-transform hover:scale-[1.02]"
                  >
                    Send enquiry ↗
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}