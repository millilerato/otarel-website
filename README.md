# Otarel Solutions Website (v5, light design)

Built with JavaScript (React 19 + JSX), Vite 6, Tailwind CSS 4 and Framer Motion.
The homepage follows the client's approved light reference: white and light-blue backgrounds,
dark navy text, blue accents and subtle purple gradients.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
npm run preview
```

## Pages

| URL | Page |
| --- | --- |
| `/` | Home (hero, marquee, about, services, process, work, contact) |
| `/about` | About |
| `/services` | All services |
| `/services/websites`, `/software`, `/automation`, `/crm`, `/ai` | Service detail pages (the "Our Capabilities" menu) |
| `/how-we-work` | Process |
| `/contact` | Contact form (opens WhatsApp with the message ready) |

Routing is a small built-in router (`src/router.jsx`), so there is no extra dependency.
`vercel.json` and `public/_redirects` make direct links work on Vercel and Netlify.

## Before showing the client

1. `src/config.js` : WhatsApp number (digits only, e.g. `27821234567`) and email.
2. `src/data.jsx` : replace the `[Project name]` entries in `projects` (shown in the Work section on the home page).
3. `src/components/Contact.jsx` : check the `budgets` ranges.
4. `index.html` : confirm the domain.

The hero background is `public/hero-bg.webp` (taken from the approved reference design). Replace that file to change it.

## Where to edit text

| File | What |
| --- | --- |
| `src/data.jsx` | Services, process steps, projects, marquee words, About text |
| `src/serviceContent.js` | Text on each service detail page |
| `src/index.css` | Colours (`@theme`), fonts |
