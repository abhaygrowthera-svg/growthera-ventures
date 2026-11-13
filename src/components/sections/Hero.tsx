import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { HexCluster } from '@/components/shared/HexCluster'
import { Button } from '@/components/ui/button'
import { company } from '@/data/company'
import { ArrowRight, Sparkles } from 'lucide-react'
import { ICON_STROKE } from '@/lib/icons'

const particlePositions = [
  { left: '10%', top: '20%', size: 3, delay: 0 },
  { left: '85%', top: '15%', size: 2, delay: 1.5 },
  { left: '75%', top: '75%', size: 4, delay: 0.8 },
  { left: '15%', top: '70%', size: 2.5, delay: 2.2 },
  { left: '55%', top: '10%', size: 2, delay: 3 },
  { left: '30%', top: '85%', size: 3, delay: 1 },
]

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="noise-overlay relative overflow-hidden bg-navy pb-20 pt-28 md:pb-28 md:pt-36">
      {/* Layered corner triangles matching PDF cover */}
      <svg
        className="pointer-events-none absolute -right-4 -top-4 h-40 w-40 md:h-56 md:w-56"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <path d="M200 0H50L200 150V0Z" fill="#6F63C8" />
        <path d="M200 0H100L200 100V0Z" fill="#A99FE6" opacity="0.7" />
        <path d="M200 0H140L200 60V0Z" fill="#2B2550" />
      </svg>
      <svg
        className="pointer-events-none absolute -bottom-6 -left-6 h-36 w-36 md:h-48 md:w-48"
        viewBox="0 0 180 180"
        fill="none"
        aria-hidden="true"
      >
        <path d="M0 180V40L140 180H0Z" fill="#6F63C8" opacity="0.85" />
        <path d="M0 180V90L90 180H0Z" fill="#A99FE6" opacity="0.5" />
      </svg>

      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-purple/25 blur-3xl" aria-hidden="true" />

      {/* Extra ambient orb */}
      <div className="pointer-events-none absolute -right-20 top-1/4 h-60 w-60 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />

      {/* Floating particles */}
      {!reduce &&
        particlePositions.map((p, i) => (
          <motion.span
            key={i}
            className="pointer-events-none absolute rounded-full bg-purple-light/40"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 5,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            aria-hidden="true"
          />
        ))}

      {/* Slow spinning ring behind hero content */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
        <div className="h-[500px] w-[500px] animate-spin-slow rounded-full border border-dashed border-white/[0.06] md:h-[650px] md:w-[650px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-content items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-6">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            {/* Premium badge */}
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-light/30 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
            >
              <Sparkles strokeWidth={ICON_STROKE} className="h-3.5 w-3.5 text-gold" />
              <span className="text-xs font-semibold tracking-wide text-purple-light">
                Business Consulting & Growth Solutions
              </span>
            </motion.div>

            <h1 className="font-heading text-display-sm font-extrabold uppercase tracking-wide text-white md:text-display-lg">
              {company.tagline}
            </h1>
            <p className="mt-5 text-lg font-medium text-purple-light md:text-xl">
              {company.subTagline}
            </p>

            {/* Animated accent bar */}
            <motion.div
              className="mt-4 h-1 rounded-full bg-gradient-to-r from-gold via-gold to-purple-light"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">{company.intro}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/services">
                  Explore Services
                  <ArrowRight strokeWidth={ICON_STROKE} className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Talk to Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-6">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <HexCluster />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
