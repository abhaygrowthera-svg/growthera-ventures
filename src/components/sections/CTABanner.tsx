import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { company } from '@/data/company'
import { ArrowRight, Phone } from 'lucide-react'
import { ICON_STROKE } from '@/lib/icons'

export function CTABanner() {
  const reduce = useReducedMotion()

  return (
    <section className="noise-overlay relative overflow-hidden bg-gradient-to-br from-navy via-navy-soft to-purple-deep py-20 md:py-24">
      {/* Corner triangles */}
      <svg
        className="pointer-events-none absolute -right-2 -top-2 h-32 w-32"
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
      >
        <path d="M120 0H30L120 90V0Z" fill="#6F63C8" />
        <path d="M120 0H70L120 50V0Z" fill="#E0A93B" opacity="0.85" />
      </svg>
      <svg
        className="pointer-events-none absolute -bottom-2 -left-2 h-28 w-28"
        viewBox="0 0 110 110"
        fill="none"
        aria-hidden="true"
      >
        <path d="M0 110V25L85 110H0Z" fill="#A99FE6" opacity="0.5" />
      </svg>

      {/* Animated glow orbs */}
      <motion.div
        className="pointer-events-none absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-purple/20 blur-3xl"
        animate={reduce ? {} : { scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-gold/15 blur-3xl"
        animate={reduce ? {} : { scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 5, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <svg className="h-full w-full">
          <defs>
            <pattern id="cta-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M50 0H0V50" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-content px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/20 text-gold">
              <ArrowRight strokeWidth={ICON_STROKE} className="h-7 w-7" />
            </div>

            <h2 className="font-heading text-display-sm font-extrabold uppercase tracking-wide text-white md:text-display-md">
              {company.ctaTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70">
              {company.ctaBody}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Get a Free Consultation
                  <ArrowRight strokeWidth={ICON_STROKE} className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={company.phoneHref}>
                  <Phone strokeWidth={ICON_STROKE} className="mr-1 h-4 w-4" />
                  Call {company.phone}
                </a>
              </Button>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
