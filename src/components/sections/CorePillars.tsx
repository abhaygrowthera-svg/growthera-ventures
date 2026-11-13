import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { ICON_STROKE } from '@/lib/icons'

const pillars = [
  {
    title: 'Business Consulting',
    description: 'Strategy, Structuring & Entity Advisory',
  },
  {
    title: 'Funding Assistance',
    description: 'Government Schemes, Subsidies & Capital',
  },
  {
    title: 'Compliance Support',
    description: 'Registrations, Licenses & Filings',
  },
  {
    title: 'Digital Growth',
    description: 'Branding, Web Presence & Market Reach',
  },
]

export function CorePillars() {
  const reduce = useReducedMotion()

  return (
    <section className="relative z-20 -mt-8 sm:-mt-10 md:-mt-12" aria-label="Core Service Pillars">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-2xl border border-border/80 bg-white p-5 shadow-card sm:p-6 lg:p-7">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:divide-x lg:divide-border/60">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  whileHover={reduce ? {} : { y: -4, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`group flex cursor-default items-center gap-3.5 rounded-xl p-2 transition-colors duration-300 hover:bg-surface-page ${
                    index > 0 ? 'lg:pl-6' : ''
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold shadow-sm transition-all duration-300 group-hover:bg-gold group-hover:text-white group-hover:shadow-md">
                    <CheckCircle2 strokeWidth={ICON_STROKE} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-navy">
                      {pillar.title}
                    </h3>
                    <p className="mt-0.5 text-xs leading-snug text-navy/65">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
