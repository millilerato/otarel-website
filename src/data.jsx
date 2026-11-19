// All site content lives here, so it is easy to edit.

const Svg = ({ children, className = 'h-6 w-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
)

export const IconWeb = (p) => (
  <Svg {...p}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M8 20h8M12 16v4" />
  </Svg>
)
export const IconCode = (p) => (
  <Svg {...p}>
    <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
  </Svg>
)
export const IconZap = (p) => (
  <Svg {...p}>
    <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
  </Svg>
)
export const IconUsers = (p) => (
  <Svg {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
    <path d="M17 11a3 3 0 1 0 0-6M18.5 14.3c2 .6 3.5 2.4 3.5 5.7" />
  </Svg>
)
export const IconSpark = (p) => (
  <Svg {...p}>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
    <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />
  </Svg>
)
export const IconWhatsApp = (p) => (
  <Svg {...p}>
    <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5z" />
  </Svg>
)
export const IconArrow = (p) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
)
export const IconArrowUpRight = (p) => (
  <Svg {...p}>
    <path d="M7 17L17 7M8 7h9v9" />
  </Svg>
)
export const IconServer = (p) => (
  <Svg {...p}>
    <rect x="3" y="4" width="18" height="6" rx="2" />
    <rect x="3" y="14" width="18" height="6" rx="2" />
    <path d="M7 7h.01M7 17h.01M12 7h5M12 17h5" />
  </Svg>
)
export const IconMenu = (p) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
)
export const IconClose = (p) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Svg>
)

export const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'How we work', href: '/how-we-work' },
  { label: 'Contact', href: '/contact' },
]

export const rotatingWords = [
  'Websites',
  'Business systems',
  'Automation',
  'CRM & lead generation',
  'AI agents',
]

// Two marquee rows (the second one scrolls the other way)
export const techStack = [
  'React',
  'Node.js',
  'Tailwind CSS',
  'Python',
  'PostgreSQL',
  'WhatsApp Business API',
  'REST APIs',
  'Automation workflows',
  'AI agents',
  'CRM integrations',
]

export const capabilities = [
  'Design',
  'Development',
  'Automation',
  'CRM',
  'AI agents',
  'Lead generation',
  'Support',
]

export const about = {
  eyebrow: 'About Otarel',
  // Revealed word by word as you scroll
  statement:
    "We don't just build websites. We build the digital engine that captures leads, saves your team time and helps your business grow.",
  points: [
    {
      title: 'Built around your business',
      text: 'Every system starts with how your team actually works, not with a template.',
    },
    {
      title: 'Clear, honest communication',
      text: 'You see the design and regular previews before anything goes live, so there are no surprises.',
    },
    {
      title: 'Support after launch',
      text: 'We stay on hand to improve and extend what we build as your business grows.',
    },
  ],
}

// `visual` adds a small preview inside the card: 'browser' | 'dashboard'
export const services = [
  {
    num: '01',
    slug: 'websites',
    title: 'Websites & Web Applications',
    text: 'Fast, responsive sites and web apps that present your business properly and turn visitors into enquiries.',
    icon: IconWeb,
    span: 'md:col-span-2',
    visual: 'browser',
    tags: ['React', 'Responsive design', 'Web apps'],
  },
  {
    num: '02',
    slug: 'software',
    title: 'Custom Software & Business Systems',
    text: 'Management systems built around how your team actually works, not the other way round.',
    icon: IconCode,
    span: 'md:col-span-2',
    visual: 'dashboard',
    tags: ['Node.js', 'PostgreSQL', 'Dashboards'],
  },
  {
    num: '03',
    slug: 'automation',
    title: 'Business Process Automation',
    text: 'Remove repetitive admin. Approvals, reports and notifications run on their own.',
    icon: IconZap,
    span: 'md:col-span-2',
    tags: ['Workflows', 'Reports', 'Notifications'],
  },
  {
    num: '04',
    slug: 'crm',
    title: 'CRM & Lead Generation',
    text: 'Capture, track and follow up on every lead in one place, helping you stay organised and turn more enquiries into opportunities.',
    icon: IconUsers,
    span: 'md:col-span-2',
    tags: ['Lead capture', 'Follow-ups', 'Integrations'],
  },
  {
    num: '05',
    slug: 'ai',
    title: 'AI Solutions & Intelligent Agents',
    text: 'Practical AI assistants that answer questions, qualify leads and route work for your team.',
    icon: IconSpark,
    span: 'md:col-span-2',
    tags: ['AI agents', 'Lead qualification', 'Routing'],
  },
  {
    num: '06',
    slug: 'hosting',
    title: 'Hosting & Domains',
    text: 'Domain registration, reliable hosting and business email, all managed for you so your site stays online.',
    icon: IconServer,
    span: 'md:col-span-2',
    tags: ['Domains', 'Hosting', 'Business email'],
  },
]

export const steps = [
  {
    n: '01',
    title: 'Discover',
    text: 'We learn your business, your goals and where time and leads are being lost today.',
  },
  {
    n: '02',
    title: 'Design',
    text: 'You see the layout and flow before anything is built, and shape it with us.',
  },
  {
    n: '03',
    title: 'Build',
    text: 'Clean, tested development with regular previews so there are no surprises.',
  },
  {
    n: '04',
    title: 'Launch & support',
    text: 'We go live with you, then stay on hand to improve and extend what we built.',
  },
]

// REPLACE these with real projects: title, tag, text. Optional: `image` and `href` (adds a "View project" link).
export const projects = [
  {
    title: '[Project name]',
    tag: 'Web app',
    text: '[One line on the problem solved and the result for the client.]',
    gradient: 'from-brand/25 via-sky/20 to-violet/25',
  },
  {
    title: '[Project name]',
    tag: 'Automation',
    text: '[One line on the problem solved and the result for the client.]',
    gradient: 'from-violet/25 via-brand/20 to-sky/25',
  },
  {
    title: '[Project name]',
    tag: 'CRM',
    text: '[One line on the problem solved and the result for the client.]',
    gradient: 'from-sky/25 via-violet/20 to-brand/25',
  },
]
