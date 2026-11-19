import { useSyncExternalStore } from 'react'

// Tiny dependency-free router (History API). Works with any host that rewrites to index.html
// (see vercel.json and public/_redirects).

const EVENT = 'otarel:navigate'

const subscribe = (cb) => {
  window.addEventListener('popstate', cb)
  window.addEventListener(EVENT, cb)
  return () => {
    window.removeEventListener('popstate', cb)
    window.removeEventListener(EVENT, cb)
  }
}

export const usePath = () =>
  useSyncExternalStore(subscribe, () => window.location.pathname, () => '/')

export function navigate(to) {
  const [path, hash] = to.split('#')
  const target = (path || window.location.pathname) + (hash ? `#${hash}` : '')
  window.history.pushState({}, '', target)
  window.dispatchEvent(new Event(EVENT))
  // wait for the new page to render, then scroll
  setTimeout(() => {
    if (hash) document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, 60)
}

export function Link({ to, children, onClick, ...rest }) {
  const handle = (e) => {
    onClick?.(e)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    navigate(to)
  }
  return (
    <a href={to} onClick={handle} {...rest}>
      {children}
    </a>
  )
}
