// import { motion } from 'framer-motion'
// import TiltCard from './TiltCard.jsx'
// import { Link } from '../router.jsx'
// import { IconArrow, IconWhatsApp, IconUsers, IconZap } from '../data.jsx'
// import { waLink } from '../config.js'

// const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } }
// const item = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
// }

// const flow = [
//   { icon: IconArrow, title: 'New enquiry from your website', sub: 'Form details captured instantly' },
//   { icon: IconUsers, title: 'Added to your CRM', sub: 'Assigned to the right person' },
//   { icon: IconWhatsApp, title: 'WhatsApp follow-up sent', sub: 'Client hears back without waiting' },
// ]

// /* ---------- duotone trust icons (blue gradient, like the reference) ---------- */
// function GradDefs({ id }) {
//   return (
//     <defs>
//       <linearGradient id={`${id}-s`} x1="0" y1="1" x2="1" y2="0">
//         <stop offset="0" stopColor="#1f66f2" />
//         <stop offset="1" stopColor="#4f8dff" />
//       </linearGradient>
//       <linearGradient id={`${id}-f`} x1="0" y1="1" x2="1" y2="0">
//         <stop offset="0" stopColor="#5b95ff" stopOpacity="0.35" />
//         <stop offset="1" stopColor="#9cc0ff" stopOpacity="0.2" />
//       </linearGradient>
//     </defs>
//   )
// }

// const iconProps = {
//   viewBox: '0 0 40 40',
//   className: 'h-10 w-10 flex-none',
//   fill: 'none',
//   strokeWidth: 2.2,
//   strokeLinecap: 'round',
//   strokeLinejoin: 'round',
//   'aria-hidden': true,
// }

// function IconRocket() {
//   return (
//     <svg {...iconProps}>
//       <GradDefs id="rk" />
//       <path
//         d="M24.5 6.5c4.8-1.4 8.6-1.1 9 .1.4 1.2-.3 5-2 9.2-1.9 4.6-5.6 8.7-10.3 11.7l-6.7-6.7c3-4.7 6.3-12.2 10-14.3z"
//         fill="url(#rk-f)"
//         stroke="url(#rk-s)"
//       />
//       <circle cx="25.5" cy="14.5" r="2.6" stroke="url(#rk-s)" />
//       <path d="M14.8 20.6 9 21.8l4.2-6.3 5.8-1.1M19.4 25.2 18.2 31l6.3-4.2 1.1-5.8" stroke="url(#rk-s)" />
//       <path d="M12.6 27.4c-1.7.4-3.3 1.9-4.1 4.6 2.7-.8 4.2-2.4 4.6-4.1" stroke="url(#rk-s)" />
//       <path d="M5 26l3-3M8 34l4-4" stroke="url(#rk-s)" />
//     </svg>
//   )
// }

// function IconShield() {
//   return (
//     <svg {...iconProps}>
//       <GradDefs id="sh" />
//       <path d="M20 4.5 32.5 9v9.4c0 7.8-5.2 13.9-12.5 17.1C12.7 32.3 7.5 26.2 7.5 18.4V9L20 4.5z" fill="url(#sh-f)" stroke="url(#sh-s)" />
//       <path d="M14.6 19.8l3.9 3.9 7.2-7.4" stroke="url(#sh-s)" strokeWidth="2.6" />
//     </svg>
//   )
// }

// function IconGrowth() {
//   return (
//     <svg {...iconProps}>
//       <GradDefs id="gr" />
//       <rect x="7" y="25" width="5" height="9" rx="1.2" fill="url(#gr-f)" stroke="url(#gr-s)" />
//       <rect x="17.5" y="20" width="5" height="14" rx="1.2" fill="url(#gr-f)" stroke="url(#gr-s)" />
//       <rect x="28" y="16" width="5" height="18" rx="1.2" fill="url(#gr-f)" stroke="url(#gr-s)" />
//       <path d="M6 19l8-7 5 4 12-10M25 6h6v6" stroke="url(#gr-s)" />
//     </svg>
//   )
// }

// const trust = [
//   { label: ['Innovative', 'Solutions'], Icon: IconRocket },
//   { label: ['Reliable', 'Support'], Icon: IconShield },
//   { label: ['Scalable', 'for Growth'], Icon: IconGrowth },
// ]

// // Bar heights (px) and colours taken from the reference: blue on the left, violet on the right.
// const bars = [
//   { h: 16, c: '#3b7bfa' },
//   { h: 30, c: '#3d78fa' },
//   { h: 35, c: '#4a74f8' },
//   { h: 54, c: '#7b67f5' },
//   { h: 29, c: '#8a6af6' },
//   { h: 32, c: '#8c6bf6' },
//   { h: 27, c: '#8f6df6' },
//   { h: 27, c: '#926ff6' },
// ]

// const chipBase =
//   'absolute z-10 flex items-center gap-2 whitespace-nowrap rounded-2xl border border-white bg-white px-4 py-2.5 text-[13.5px] font-medium text-ink shadow-[0_14px_36px_-14px_rgba(47,95,240,0.45)]'

// export default function Hero() {
//   return (
//     <section
//       id="top"
//       className="relative overflow-hidden bg-[#f7f9ff] pt-20 lg:flex lg:min-h-[max(100svh,760px)] lg:items-center lg:pt-[108px]"
//     >
//       {/* background taken from the approved reference design */}
//       <div className="pointer-events-none absolute inset-0" aria-hidden="true">
//         <div
//           className="absolute inset-0 bg-cover bg-no-repeat"
//           style={{ backgroundImage: 'url(/hero-bg.webp)', backgroundPosition: '75% center' }}
//         />
//         <div className="absolute inset-0 bg-white/45 lg:hidden" />
//       </div>

//       <div className="relative mx-auto grid w-full max-w-[1328px] items-center gap-16 px-6 pb-24 pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,580px)] lg:gap-10 lg:px-8 lg:pb-14 lg:pt-6">
//         {/* left: copy */}
//         <motion.div variants={container} initial="hidden" animate="show">
//           <motion.div
//             variants={item}
//             className="inline-flex items-center gap-2.5 rounded-full border border-white/80 bg-[#edf2ff]/90 px-4 py-[7px] text-[13px] text-ink/85 shadow-[0_6px_20px_-12px_rgba(31,102,242,0.35)]"
//           >
//             <span className="relative flex h-2 w-2">
//               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
//               <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
//             </span>
//             <span className="bg-linear-to-r from-[#1f66f2] via-[#7a5af8] to-[#e056c8] bg-clip-text font-display font-extrabold text-transparent">
//               Build. Automate. Scale.
//             </span>
//             <span className="text-muted/60">·</span>
//             <span className="hidden sm:inline">Technology partner – South Africa</span>
//           </motion.div>

//           <motion.h1
//             variants={item}
//             className="mt-7 font-display text-[3.1rem] font-extrabold leading-[0.98] tracking-[-0.038em] text-ink sm:text-[4.2rem] lg:text-[4.9rem] xl:text-[5.3rem]"
//           >
//             Build the <span className="text-[#1e6bff]">digital</span>
//             <br className="hidden sm:block" /> <span className="text-[#1e6bff]">engine</span> behind
//             <br className="hidden sm:block" /> your business<span className="text-[#1e6bff]">.</span>
//           </motion.h1>

//           <motion.p variants={item} className="mt-6 max-w-[31rem] text-[18px] leading-[1.48] text-ink/90 lg:text-[19.5px]">
//             We design and build websites, custom software, business automation and AI solutions that help
//             businesses work smarter and grow.
//           </motion.p>

//           <motion.div variants={item} className="mt-9 flex flex-wrap gap-4 sm:gap-5">
//             <Link
//               to="/contact"
//               className="group inline-flex h-[60px] items-center gap-3 rounded-full bg-linear-to-r from-[#1f66f2] via-[#4a62f5] to-[#8f5cf6] px-10 text-[16.5px] font-semibold text-white shadow-[0_18px_40px_-14px_rgba(70,90,245,0.85)] transition-transform hover:scale-[1.04]"
//             >
//               Book a free consultation
//               <svg viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//                 <path d="M7.5 4.5 13 10l-5.5 5.5" />
//               </svg>
//             </Link>
//             {/* <a
//               href={waLink('Hi Otarel Solutions, I would like to discuss a project.')}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex h-[60px] items-center gap-3 rounded-full border-[1.5px] border-transparent px-9 text-[16px] font-semibold text-ink shadow-[0_12px_30px_-18px_rgba(90,90,245,0.6)] transition-transform [background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(90deg,#1f66f2,#8f5cf6)_border-box] hover:scale-[1.03]"
//             >
//               <IconWhatsApp className="h-5 w-5 text-brand" />
//               Chat on WhatsApp
//             </a> */}
//           </motion.div>

//           <motion.ul
//             variants={item}
//             className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-y-6"
//           >
//             {trust.map((t, i) => (
//               <li
//                 key={t.label[0]}
//                 className={`flex items-center gap-4 sm:pr-8 ${i > 0 ? 'sm:border-l sm:border-[#dde5f3] sm:pl-8' : ''}`}
//               >
//                 <t.Icon />
//                 <span className="text-[14px] leading-[1.35] text-ink/85">
//                   {t.label[0]}
//                   <br />
//                   {t.label[1]}
//                 </span>
//               </li>
//             ))}
//           </motion.ul>
//         </motion.div>

//         {/* right: automation dashboard */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.94, y: 40 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//           className="relative mx-auto mt-8 w-full max-w-[470px] lg:mt-0"
//         >
//           <TiltCard intensity={5}>
//             <div className="relative rounded-[26px] border border-white bg-white px-6 pb-6 pt-5">
//               <div className="flex items-center justify-between">
//                 <div className="flex gap-2">
//                   <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
//                   <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
//                   <span className="h-3 w-3 rounded-full bg-[#28c840]" />
//                 </div>
//                 <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf1ff] px-3.5 py-1.5 text-[13px] font-semibold text-brand">
//                   <IconZap className="h-3.5 w-3.5" /> Automated
//                 </span>
//               </div>

//               <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
//                 Enquiry to follow-up
//               </p>

//               <div className="mt-5 flex flex-col">
//                 {flow.map((s, idx) => (
//                   <div key={s.title}>
//                     <motion.div
//                       initial={{ opacity: 0, x: 24 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.8 + idx * 0.3, duration: 0.6 }}
//                       className="flex items-center gap-4"
//                     >
//                       <span className="flex h-12 w-12 flex-none items-center justify-center rounded-[14px] bg-[#eaf1ff] text-brand">
//                         <s.icon className="h-5 w-5" />
//                       </span>
//                       <div>
//                         <div className="text-[15px] font-semibold text-ink">{s.title}</div>
//                         <div className="text-[13.5px] text-muted">{s.sub}</div>
//                       </div>
//                     </motion.div>
//                     {idx < flow.length - 1 && <div className="my-1 ml-6 h-[19px] w-px bg-[#cfdaf0]" />}
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-6 flex h-[86px] items-end gap-3 rounded-2xl bg-[#f2f5fd] px-3.5 pb-3">
//                 {bars.map((b, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ height: 0 }}
//                     animate={{ height: b.h }}
//                     transition={{ duration: 0.9, delay: 1 + idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
//                     className="w-full rounded-t-[7px] rounded-b-[3px]"
//                     style={{ background: `linear-gradient(to bottom, ${b.c}, ${b.c}99)` }}
//                   />
//                 ))}
//               </div>
//             </div>
//           </TiltCard>

//           <motion.div
//             animate={{ y: [0, -8, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//             className={`${chipBase} -top-10 left-0 sm:-left-6`}
//           >
//             <IconZap className="h-[18px] w-[18px] text-brand" />
//             <span className="font-semibold">Business automation workflow</span>
//           </motion.div>
//           <motion.div
//             animate={{ y: [0, -8, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
//             className={`${chipBase} right-0 top-[48%] hidden sm:flex sm:-right-9`}
//           >
//             <span className="h-2 w-2 rounded-full bg-brand" />
//             CRM updated
//           </motion.div>
//           <motion.div
//             animate={{ y: [0, -8, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
//             className={`${chipBase} -bottom-6 right-12`}
//           >
//             <span className="h-2 w-2 rounded-full bg-brand" />
//             Reply sent
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

import { motion } from 'framer-motion'
import TiltCard from './TiltCard.jsx'
import { Link } from '../router.jsx'
import { IconArrow, IconWhatsApp, IconUsers, IconZap } from '../data.jsx'
import { waLink } from '../config.js'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const flow = [
  { icon: IconArrow, title: 'New enquiry from your website', sub: 'Form details captured instantly' },
  { icon: IconUsers, title: 'Added to your CRM', sub: 'Assigned to the right person' },
  { icon: IconWhatsApp, title: 'WhatsApp follow-up sent', sub: 'Client hears back without waiting' },
]

/* ---------- duotone trust icons (blue gradient, like the reference) ---------- */
function GradDefs({ id }) {
  return (
    <defs>
      <linearGradient id={`${id}-s`} x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stopColor="#1f66f2" />
        <stop offset="1" stopColor="#4f8dff" />
      </linearGradient>
      <linearGradient id={`${id}-f`} x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stopColor="#5b95ff" stopOpacity="0.35" />
        <stop offset="1" stopColor="#9cc0ff" stopOpacity="0.2" />
      </linearGradient>
    </defs>
  )
}

const iconProps = {
  viewBox: '0 0 40 40',
  className: 'h-10 w-10 flex-none',
  fill: 'none',
  strokeWidth: 2.2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

function IconRocket() {
  return (
    <svg {...iconProps}>
      <GradDefs id="rk" />
      <path
        d="M24.5 6.5c4.8-1.4 8.6-1.1 9 .1.4 1.2-.3 5-2 9.2-1.9 4.6-5.6 8.7-10.3 11.7l-6.7-6.7c3-4.7 6.3-12.2 10-14.3z"
        fill="url(#rk-f)"
        stroke="url(#rk-s)"
      />
      <circle cx="25.5" cy="14.5" r="2.6" stroke="url(#rk-s)" />
      <path d="M14.8 20.6 9 21.8l4.2-6.3 5.8-1.1M19.4 25.2 18.2 31l6.3-4.2 1.1-5.8" stroke="url(#rk-s)" />
      <path d="M12.6 27.4c-1.7.4-3.3 1.9-4.1 4.6 2.7-.8 4.2-2.4 4.6-4.1" stroke="url(#rk-s)" />
      <path d="M5 26l3-3M8 34l4-4" stroke="url(#rk-s)" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg {...iconProps}>
      <GradDefs id="sh" />
      <path d="M20 4.5 32.5 9v9.4c0 7.8-5.2 13.9-12.5 17.1C12.7 32.3 7.5 26.2 7.5 18.4V9L20 4.5z" fill="url(#sh-f)" stroke="url(#sh-s)" />
      <path d="M14.6 19.8l3.9 3.9 7.2-7.4" stroke="url(#sh-s)" strokeWidth="2.6" />
    </svg>
  )
}

function IconGrowth() {
  return (
    <svg {...iconProps}>
      <GradDefs id="gr" />
      <rect x="7" y="25" width="5" height="9" rx="1.2" fill="url(#gr-f)" stroke="url(#gr-s)" />
      <rect x="17.5" y="20" width="5" height="14" rx="1.2" fill="url(#gr-f)" stroke="url(#gr-s)" />
      <rect x="28" y="16" width="5" height="18" rx="1.2" fill="url(#gr-f)" stroke="url(#gr-s)" />
      <path d="M6 19l8-7 5 4 12-10M25 6h6v6" stroke="url(#gr-s)" />
    </svg>
  )
}

const trust = [
  { label: ['Innovative', 'Solutions'], Icon: IconRocket },
  { label: ['Reliable', 'Support'], Icon: IconShield },
  { label: ['Scalable', 'for Growth'], Icon: IconGrowth },
]

// Bar heights (px) and colours taken from the reference: blue on the left, violet on the right.
const bars = [
  { h: 16, c: '#3b7bfa' },
  { h: 30, c: '#3d78fa' },
  { h: 35, c: '#4a74f8' },
  { h: 54, c: '#7b67f5' },
  { h: 29, c: '#8a6af6' },
  { h: 32, c: '#8c6bf6' },
  { h: 27, c: '#8f6df6' },
  { h: 27, c: '#926ff6' },
]

const chipBase =
  'absolute z-10 flex items-center gap-2 whitespace-nowrap rounded-2xl border border-white bg-white px-4 py-2.5 text-[13.5px] font-medium text-ink shadow-[0_14px_36px_-14px_rgba(47,95,240,0.45)]'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#f7f9ff] pt-20 lg:flex lg:min-h-[max(100svh,760px)] lg:items-center lg:pt-[108px]"
    >
      {/* background taken from the approved reference design */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-bg.webp)', backgroundPosition: '75% center' }}
        />
        <div className="absolute inset-0 bg-white/45 lg:hidden" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1328px] items-center gap-16 px-6 pb-24 pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,580px)] lg:gap-10 lg:px-8 lg:pb-14 lg:pt-6">
        {/* left: copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/80 bg-[#edf2ff]/90 px-4 py-[7px] text-[13px] text-ink/85 shadow-[0_6px_20px_-12px_rgba(31,102,242,0.35)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            <span className="bg-linear-to-r from-[#1f66f2] via-[#7a5af8] to-[#e056c8] bg-clip-text font-display font-extrabold text-transparent">
              Build. Automate. Scale.
            </span>
            <span className="text-muted/60">·</span>
            <span className="hidden sm:inline">Technology partner – South Africa</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 font-display text-[3.1rem] font-extrabold leading-[0.98] tracking-[-0.038em] text-ink sm:text-[4.2rem] lg:text-[4.9rem] xl:text-[5.3rem]"
          >
            Build the <span className="text-[#1e6bff]">digital</span>
            <br className="hidden sm:block" /> <span className="text-[#1e6bff]">engine</span> behind
            <br className="hidden sm:block" /> your business<span className="text-[#1e6bff]">.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-[31rem] text-[18px] leading-[1.48] text-ink/90 lg:text-[19.5px]">
            We design and build websites, custom software, business automation and AI solutions that help
            businesses work smarter and grow.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4 sm:gap-5 sm:pl-17">
            <Link
              to="/contact"
              className="group inline-flex h-[60px] items-center gap-3 rounded-full bg-linear-to-r from-[#1f66f2] via-[#4a62f5] to-[#8f5cf6] px-10 text-[16.5px] font-semibold text-white shadow-[0_18px_40px_-14px_rgba(70,90,245,0.85)] transition-transform hover:scale-[1.04]"
            >
              Book a free consultation
              <svg viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7.5 4.5 13 10l-5.5 5.5" />
              </svg>
            </Link>
            {/* <a
              href={waLink('Hi Otarel Solutions, I would like to discuss a project.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[60px] items-center gap-3 rounded-full border-[1.5px] border-transparent px-9 text-[16px] font-semibold text-ink shadow-[0_12px_30px_-18px_rgba(90,90,245,0.6)] transition-transform [background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(90deg,#1f66f2,#8f5cf6)_border-box] hover:scale-[1.03]"
            >
              <IconWhatsApp className="h-5 w-5 text-brand" />
              Chat on WhatsApp
            </a> */}
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-y-6"
          >
            {trust.map((t, i) => (
              <li
                key={t.label[0]}
                className={`flex items-center gap-4 sm:pr-8 ${i > 0 ? 'sm:border-l sm:border-[#dde5f3] sm:pl-8' : ''}`}
              >
                <t.Icon />
                <span className="text-[14px] leading-[1.35] text-ink/85">
                  {t.label[0]}
                  <br />
                  {t.label[1]}
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* right: automation dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-8 w-full max-w-[470px] lg:mt-0"
        >
          <TiltCard intensity={5}>
            <div className="relative rounded-[26px] border border-white bg-white px-6 pb-6 pt-5">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf1ff] px-3.5 py-1.5 text-[13px] font-semibold text-brand">
                  <IconZap className="h-3.5 w-3.5" /> Automated
                </span>
              </div>

              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Enquiry to follow-up
              </p>

              <div className="mt-5 flex flex-col">
                {flow.map((s, idx) => (
                  <div key={s.title}>
                    <motion.div
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + idx * 0.3, duration: 0.6 }}
                      className="flex items-center gap-4"
                    >
                      <span className="flex h-12 w-12 flex-none items-center justify-center rounded-[14px] bg-[#eaf1ff] text-brand">
                        <s.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-[15px] font-semibold text-ink">{s.title}</div>
                        <div className="text-[13.5px] text-muted">{s.sub}</div>
                      </div>
                    </motion.div>
                    {idx < flow.length - 1 && <div className="my-1 ml-6 h-[19px] w-px bg-[#cfdaf0]" />}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex h-[86px] items-end gap-3 rounded-2xl bg-[#f2f5fd] px-3.5 pb-3">
                {bars.map((b, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ height: 0 }}
                    animate={{ height: b.h }}
                    transition={{ duration: 0.9, delay: 1 + idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full rounded-t-[7px] rounded-b-[3px]"
                    style={{ background: `linear-gradient(to bottom, ${b.c}, ${b.c}99)` }}
                  />
                ))}
              </div>
            </div>
          </TiltCard>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className={`${chipBase} -top-10 left-0 sm:-left-6`}
          >
            <IconZap className="h-[18px] w-[18px] text-brand" />
            <span className="font-semibold">Business automation workflow</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            className={`${chipBase} right-0 top-[48%] hidden sm:flex sm:-right-9`}
          >
            <span className="h-2 w-2 rounded-full bg-brand" />
            CRM updated
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
            className={`${chipBase} -bottom-6 right-12`}
          >
            <span className="h-2 w-2 rounded-full bg-brand" />
            Reply sent
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}