import { Link } from 'react-router-dom'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui/button'
import { CornerDecor } from '@/components/shared/CornerDecor'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
        path="/404"
      />
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy py-28">
        <CornerDecor />
        <div className="relative mx-auto max-w-content px-4 text-center sm:px-6 lg:px-8">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-gold">
            404
          </p>
          <h1 className="mt-4 font-heading text-display-sm md:text-display-md font-extrabold uppercase tracking-wide text-white">
            Page Not Found
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/70">
            The page you requested is unavailable. Return home or explore our services.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/">Back to Home</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
