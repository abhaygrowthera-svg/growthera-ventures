import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PageSkeleton } from '@/components/layout/PageSkeleton'
import { ScrollRestoration, ScrollToTopButton } from '@/components/layout/ScrollToTop'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { useLenis } from '@/hooks/useLenis'

export function Layout() {
  useLenis()
  const location = useLocation()
  const reduce = useReducedMotion()

  return (
    <div className="flex min-h-screen flex-col bg-surface-page font-body text-navy">
      <ScrollRestoration />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Suspense fallback={<PageSkeleton />}>
              <Outlet />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  )
}
