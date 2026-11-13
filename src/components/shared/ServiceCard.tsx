import { useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { getIcon, ICON_STROKE } from '@/lib/icons'
import { cn } from '@/lib/utils'
import type { Service } from '@/data/services'

type ServiceCardProps = {
  service: Service
  index?: number
  className?: string
}

export function ServiceCard({ service, index, className }: ServiceCardProps) {
  const Icon = getIcon(service.icon)
  const cardRef = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }, [])

  return (
    <Link
      ref={cardRef}
      to={`/services/${service.slug}`}
      onMouseMove={handleMouseMove}
      className={cn(
        'spotlight-card glow-border group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-soft transition-all duration-400 hover:-translate-y-2 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple',
        service.bentoSpan === 'wide' && 'md:col-span-2',
        className
      )}
    >
      <div className="relative z-10 mb-5 flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-soft text-purple transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-purple group-hover:to-purple-deep group-hover:text-white group-hover:shadow-md">
          <Icon strokeWidth={ICON_STROKE} className="h-5 w-5" />
        </div>
        {typeof index === 'number' && (
          <span className="font-heading text-xs font-semibold tracking-[0.16em] text-navy/30">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>
      <h3 className="relative z-10 font-heading text-base font-bold uppercase tracking-wide text-navy transition-colors group-hover:text-purple md:text-lg">
        {service.title}
      </h3>
      <p className="relative z-10 mt-2 text-sm font-medium text-purple">{service.tagline}</p>
      <p className="relative z-10 mt-3 flex-1 text-sm leading-relaxed text-navy/65">{service.shortDescription}</p>

      {/* Animated bottom bar */}
      <div className="relative z-10 mt-5 flex items-center justify-between border-t border-border/40 pt-4">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-purple">
          View service
          <ArrowUpRight
            strokeWidth={ICON_STROKE}
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
        <div className="h-1 w-0 rounded-full bg-gradient-to-r from-purple to-gold transition-all duration-500 group-hover:w-12" />
      </div>
    </Link>
  )
}
