import { cn } from '@/lib/utils'

type SectionLabelProps = {
  children: React.ReactNode
  className?: string
  tone?: 'purple' | 'navy' | 'light'
}

export function SectionLabel({ children, className, tone = 'purple' }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-[0.14em]',
        tone === 'purple' && 'bg-purple text-white',
        tone === 'navy' && 'bg-navy text-white',
        tone === 'light' && 'bg-white/15 text-white',
        className
      )}
    >
      {children}
    </span>
  )
}
