import PageHero from '../components/PageHero.jsx'
import { Link } from '../router.jsx'

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="We couldn't find that page"
        text="The page may have moved. Head back home or get in touch and we'll point you in the right direction."
      />
      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-[1328px] gap-4 px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex h-12 items-center rounded-xl bg-linear-to-r from-brand to-violet px-6 font-semibold text-white"
          >
            Back to home
          </Link>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center rounded-xl border-2 border-brand px-6 font-semibold text-ink"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
