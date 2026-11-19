// ONE place for all contact details. Edit only this file to update them.
export const SITE = {
  name: 'Otarel Solutions',
  url: 'https://otarelsolutions.co.za',
  email: 'info@otarelsolutions.co.za',
  // Phone shown on the Contact page. Leave '' until the business number is ready.
  phone: '', // e.g. '+27 82 123 4567'
  // WhatsApp number: international format, digits only, no "+" or spaces. Leave '' until ready.
  whatsapp: '', // e.g. '27821234567'
  // Set to true once real projects are ready to show.
  showWork: false,
}

export const hasWhatsApp = /^\d{8,15}$/.test(SITE.whatsapp)
export const hasPhone = SITE.phone.trim() !== ''

export const waLink = (text = '') =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const mailLink = (subject = '', body = '') =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

export const telLink = () => `tel:${SITE.phone.replace(/[^\d+]/g, '')}`