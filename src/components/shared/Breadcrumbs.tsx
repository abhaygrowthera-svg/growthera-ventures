import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { ICON_STROKE } from '@/lib/icons'
import { cn } from '@/lib/utils'

export type Crumb = {
  label: string
  href?: string
}

type BreadcrumbsProps = {
  items: Crumb[]
  className?: string
  light?: boolean
}

export function Breadcrumbs({ items, className, light = false }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('mb-5', className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium tracking-wide">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight
                  strokeWidth={ICON_STROKE}
                  className={cn('h-3.5 w-3.5', light ? 'text-white/40' : 'text-navy/30')}
                  aria-hidden="true"
                />
              )}
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className={cn(
                    'rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple',
                    light ? 'text-white/65 hover:text-white' : 'text-navy/55 hover:text-purple'
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(light ? 'text-gold' : 'text-purple')}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
