import { useRef } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion, useReducedMotion } from 'framer-motion'
import { Briefcase, TrendingUp, Users, Shield } from 'lucide-react'
import { ICON_STROKE } from '@/lib/icons'

const stats = [
  {
    icon: Briefcase,
    value: 12,
    suffix: '+',
    label: 'Business Solutions',
    description: 'End-to-end services',
  },
  {
    icon: TrendingUp,
    value: 50,
    suffix: '+',
    label: 'Schemes Tracked',
    description: 'Government funding schemes',
  },
  {
    icon: Users,
    value: 8,
    suffix: '+',
    label: 'Industry Sectors',
    description: 'Across India',
  },
  {
    icon: Shield,
    value: 100,
    suffix: '%',
    label: 'Compliance Focused',
    description: 'Documented processes',
  },
]

export function StatsCounter() {
  const reduce = useReducedMotion()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const hasAnimated = useRef(false)

  if (inView) hasAnimated.current = true

  return (
    <section className="relative overflow-hidden bg-navy py-16 md:py-20">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-purple/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-40 w-40 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />

      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <svg className="h-full w-full" aria-hidden="true">
          <defs>
            <pattern id="stats-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-grid)" />
        </svg>
      </div>

      <div ref={ref} className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Pulsing ring behind icon */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-2xl bg-purple/30 blur-lg animate-pulse-ring" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple to-purple-deep text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Icon strokeWidth={ICON_STROKE} className="h-6 w-6" />
                  </div>
                </div>

                <div className="font-heading text-display-sm font-extrabold text-white md:text-display-md">
                  {hasAnimated.current ? (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>

                <p className="mt-1 font-heading text-xs font-bold uppercase tracking-[0.14em] text-gold">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-white/50">{stat.description}</p>

                {/* Divider for non-last items on desktop */}
                {index < stats.length - 1 && (
                  <div className="pointer-events-none absolute -right-3 top-1/4 hidden h-1/2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent lg:block" aria-hidden="true" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

