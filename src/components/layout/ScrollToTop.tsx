import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { ICON_STROKE } from '@/lib/icons'
import { cn } from '@/lib/utils'

/** Route scroll reset is handled in useLenis — this only renders the FAB */
export function ScrollRestoration() {
  return null
}

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white shadow-lift transition-all duration-300 hover:bg-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      )}
    >
      <ArrowUp strokeWidth={ICON_STROKE} className="h-5 w-5" />
    </button>
  )
}
