import { IconWhatsApp } from '../data.jsx'
import { hasWhatsApp, waLink, mailLink } from '../config.js'

// Floating chat icon. Opens WhatsApp once a number is set in config.js,
// until then it opens an email so the button is never a dead link.
export default function WhatsAppFloat() {
  const href = hasWhatsApp
    ? waLink('Hi Otarel Solutions, I would like to discuss a project.')
    : mailLink('Website enquiry', 'Hi Otarel Solutions,\n\n')

  return (
    <a
      href={href}
      target={hasWhatsApp ? '_blank' : undefined}
      rel="noopener noreferrer"
      aria-label={hasWhatsApp ? 'Chat on WhatsApp' : 'Email us'}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-brand to-violet text-white shadow-[0_14px_40px_-8px_rgba(80,90,245,0.8)] transition-transform hover:scale-110"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet/30" />
      <IconWhatsApp className="relative h-7 w-7" />
    </a>
  )
}