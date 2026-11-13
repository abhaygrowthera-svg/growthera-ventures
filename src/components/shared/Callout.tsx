import { Info } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ICON_STROKE } from '@/lib/icons'

type CalloutProps = {
  title?: string
  children: React.ReactNode
  className?: string
}

export function Callout({ title = 'Please note', children, className }: CalloutProps) {
  return (
    <aside
      className={cn(
        'relative overflow-hidden rounded-2xl bg-purple-soft/60 p-5 md:p-6 shadow-soft',
        className
      )}
      role="note"
    >
      <div className="flex gap-3">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple text-white">
          <Info strokeWidth={ICON_STROKE} className="h-4 w-4" />
        </div>
        <div>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-purple">
            {title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/80">{children}</p>
        </div>
      </div>
    </aside>
  )
}
