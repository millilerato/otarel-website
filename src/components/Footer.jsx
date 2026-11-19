import Logo from './Logo.jsx'
import { Link } from '../router.jsx'
import { navLinks } from '../data.jsx'

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-white">
      <div className="mx-auto flex max-w-[1328px] flex-col items-start justify-between gap-6 px-6 py-10 lg:flex-row lg:items-center lg:px-8">
        <Link to="/" aria-label="Otarel Solutions home">
          <Logo small />
        </Link>
        <nav aria-label="Footer" className="flex flex-wrap gap-6 text-sm text-muted">
          {navLinks.map((l) => (
            <Link key={l.href} to={l.href} className="transition-colors hover:text-brand">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <p>© {new Date().getFullYear()} Otarel Solutions. All rights reserved.</p>
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="font-medium text-ink transition-colors hover:text-brand">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
