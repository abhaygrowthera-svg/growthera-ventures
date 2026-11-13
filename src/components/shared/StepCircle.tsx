import { cn } from '@/lib/utils'

type StepCircleProps = {
  number: string
  title: string
  description: string
  active?: boolean
  className?: string
}

export function StepCircle({ number, title, description, active, className }: StepCircleProps) {
  return (
    <div className={cn('relative flex gap-5', className)}>
      <div className="flex flex-col items-center">
        <div
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-full font-heading text-sm font-bold transition-colors shadow-soft',
            active
              ? 'bg-purple text-white shadow-glow'
              : 'bg-purple-soft text-purple'
          )}
        >
          {number}
        </div>
      </div>
      <div className="pb-8 pt-2">
        <h3 className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-navy">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy/70">{description}</p>
      </div>
    </div>
  )
}
