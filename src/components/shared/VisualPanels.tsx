import { cn } from '@/lib/utils'
import { getIcon, ICON_STROKE } from '@/lib/icons'

type PanelProps = {
  className?: string
  title?: string
}

/** Growth bars + trend line — for About / Why Choose */
export function GrowthChartPanel({ className, title = 'Structured Growth Path' }: PanelProps) {
  const bars = [28, 42, 55, 68, 82, 94]
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy to-purple-deep p-6 text-white shadow-lift md:p-8',
        className
      )}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple/30 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-8 left-8 h-28 w-28 rounded-full bg-gold/20 blur-2xl" />

      <p className="font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
        Business Logic
      </p>
      <h3 className="mt-2 font-heading text-lg font-bold uppercase tracking-wide">{title}</h3>

      <div className="mt-8 flex h-40 items-end gap-3">
        {bars.map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-2">
            <div
              className="w-full rounded-t-lg bg-gradient-to-t from-purple to-purple-light transition-all"
              style={{ height: `${h}%` }}
            />
            <span className="font-heading text-[10px] text-white/50">S{i + 1}</span>
          </div>
        ))}
      </div>

      <svg className="mt-2 h-12 w-full" viewBox="0 0 240 40" fill="none" aria-hidden="true">
        <path
          d="M4 32 C40 28, 60 20, 90 18 S140 8, 180 10 S220 4, 236 2"
          stroke="#E0A93B"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {[4, 90, 180, 236].map((x, i) => (
          <circle key={i} cx={x} cy={[32, 18, 10, 2][i]} r="3" fill="#E0A93B" />
        ))}
      </svg>

      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        {['Plan', 'Execute', 'Scale'].map((label) => (
          <div key={label} className="rounded-xl bg-white/10 px-2 py-2.5">
            <p className="font-heading text-[10px] font-bold uppercase tracking-wider text-purple-light">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

/** Donut + checklist — for About preview / consultation */
export function FocusRingPanel({ className }: PanelProps) {
  const items = [
    { label: 'Setup', pct: 22 },
    { label: 'Funding', pct: 24 },
    { label: 'Compliance', pct: 20 },
    { label: 'Digital', pct: 18 },
    { label: 'Growth', pct: 16 },
  ]
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl bg-white p-6 shadow-lift md:p-8',
        className
      )}
    >
      <div className="pointer-events-none absolute -right-6 top-6 h-32 w-32 rounded-full bg-purple-soft" />
      <p className="font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-purple">
        Focus Map
      </p>
      <h3 className="mt-2 font-heading text-lg font-bold uppercase tracking-wide text-navy">
        Where Support Is Scoped
      </h3>

      <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row">
        <div className="relative h-40 w-40 shrink-0">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
            <circle cx="60" cy="60" r="46" fill="none" stroke="#E8E5F7" strokeWidth="14" />
            <circle
              cx="60"
              cy="60"
              r="46"
              fill="none"
              stroke="#6F63C8"
              strokeWidth="14"
              strokeDasharray="115 289"
              strokeLinecap="round"
            />
            <circle
              cx="60"
              cy="60"
              r="46"
              fill="none"
              stroke="#2B2550"
              strokeWidth="14"
              strokeDasharray="72 289"
              strokeDashoffset="-115"
              strokeLinecap="round"
            />
            <circle
              cx="60"
              cy="60"
              r="46"
              fill="none"
              stroke="#A99FE6"
              strokeWidth="14"
              strokeDasharray="58 289"
              strokeDashoffset="-187"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-heading text-2xl font-extrabold text-navy">5</span>
            <span className="text-[10px] uppercase tracking-wider text-navy/50">Areas</span>
          </div>
        </div>

        <ul className="w-full space-y-2.5">
          {items.map((item) => (
            <li key={item.label} className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-purple" />
              <span className="flex-1 text-sm font-medium text-navy">{item.label}</span>
              <span className="font-heading text-xs text-navy/40">{item.pct}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/** Horizontal process flow diagram */
export function LogicFlowPanel({ className }: PanelProps) {
  const steps = ['Assess', 'Structure', 'Document', 'Apply', 'Follow-up']
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl bg-lavender-mist p-6 shadow-lift md:p-8',
        className
      )}
    >
      <p className="font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-purple">
        Engagement Logic
      </p>
      <h3 className="mt-2 font-heading text-lg font-bold uppercase tracking-wide text-navy">
        Clear Sequence Of Work
      </h3>

      <div className="mt-8 space-y-3">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy font-heading text-xs font-bold text-white">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-white">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple to-purple-light"
                style={{ width: `${100 - i * 12}%` }}
              />
            </div>
            <span className="w-20 shrink-0 text-right font-heading text-xs font-bold uppercase tracking-wide text-navy">
              {step}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-white p-4 shadow-soft">
        <p className="text-xs leading-relaxed text-navy/65">
          Scope, timelines and responsibilities are confirmed before execution begins — so every
          step stays measurable and accountable.
        </p>
      </div>
    </div>
  )
}

/** Strength matrix grid */
export function StrengthMatrixPanel({ className }: PanelProps) {
  const cells = [
    'One roof',
    'Clear scope',
    'Docs ready',
    'Funding path',
    'Compliance',
    'Digital',
    'All stages',
    'Client-led',
  ]
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl bg-navy p-6 text-white shadow-lift md:p-8',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-0 h-full w-px bg-white/10" />
        <div className="absolute left-2/4 top-0 h-full w-px bg-white/10" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-white/10" />
        <div className="absolute top-1/3 h-px w-full bg-white/10" />
        <div className="absolute top-2/3 h-px w-full bg-white/10" />
      </div>

      <p className="relative font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
        Capability Grid
      </p>
      <h3 className="relative mt-2 font-heading text-lg font-bold uppercase tracking-wide">
        Connected Support Layers
      </h3>

      <div className="relative mt-8 grid grid-cols-2 gap-3">
        {cells.map((cell, i) => (
          <div
            key={cell}
            className={cn(
              'rounded-2xl px-4 py-4 text-center font-heading text-xs font-bold uppercase tracking-wider',
              i % 3 === 0 ? 'bg-purple' : i % 3 === 1 ? 'bg-white/10' : 'bg-purple-deep'
            )}
          >
            {cell}
          </div>
        ))}
      </div>
    </div>
  )
}

/** Industry-specific abstract panel */
export function IndustryVisual({
  icon,
  title,
  className,
}: {
  icon: string
  title: string
  className?: string
}) {
  const Icon = getIcon(icon)
  return (
    <div
      className={cn(
        'relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy-soft to-purple-deep',
        className
      )}
    >
      <svg className="absolute inset-0 h-full w-full opacity-20" aria-hidden="true">
        <defs>
          <pattern id={`grid-${title.replace(/\s+/g, '-')}`} width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${title.replace(/\s+/g, '-')})`} />
      </svg>
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
          <Icon strokeWidth={ICON_STROKE} className="h-8 w-8" />
        </div>
        <p className="max-w-[80%] text-center font-heading text-xs font-bold uppercase tracking-[0.14em] text-white/80">
          {title}
        </p>
      </div>
      <span className="absolute bottom-4 right-4 h-2 w-2 rounded-full bg-gold" />
      <span className="absolute left-6 top-6 h-1.5 w-1.5 rounded-full bg-purple-light" />
    </div>
  )
}

/** Service detail diagram — offerings as layered stack */
export function ServiceLogicPanel({
  title,
  offerings,
  className,
}: {
  title: string
  offerings: string[]
  className?: string
}) {
  const preview = offerings.slice(0, 5)
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface-page to-purple-soft p-6 shadow-lift md:p-8',
        className
      )}
    >
      <p className="font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-purple">
        Delivery Framework
      </p>
      <h3 className="mt-2 font-heading text-base font-bold uppercase tracking-wide text-navy md:text-lg">
        {title}
      </h3>

      <div className="mt-8 space-y-3">
        {preview.map((item, i) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-soft"
            style={{ marginLeft: `${i * 8}px` }}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy font-heading text-[10px] font-bold text-white">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="text-sm font-medium text-navy/80 line-clamp-1">{item}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-2">
        <div className="h-1.5 flex-1 rounded-full bg-white">
          <div className="h-full w-3/4 rounded-full bg-purple" />
        </div>
        <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-navy/50">
          Scoped
        </span>
      </div>
    </div>
  )
}

/** Mini funnel for funding / conversion logic */
export function FunnelPanel({ className }: PanelProps) {
  const layers = [
    { label: 'Business Assessment', w: '100%' },
    { label: 'Scheme Fit', w: '82%' },
    { label: 'Documentation', w: '64%' },
    { label: 'Application', w: '48%' },
    { label: 'Follow-up', w: '34%' },
  ]
  return (
    <div className={cn('rounded-3xl border border-border/80 bg-white p-6 shadow-card md:p-8 lg:p-10', className)}>
      <div>
        <p className="font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-purple">
          Decision Funnel
        </p>
        <h3 className="mt-1.5 font-heading text-lg md:text-xl font-bold uppercase tracking-wide text-navy">
          From Need To Next Step
        </h3>
        <p className="mt-1 text-sm text-navy/65">
          Structured qualification and preparation stages before regulatory or funding submission.
        </p>
      </div>
      <div className="mx-auto mt-8 flex w-full max-w-3xl flex-col items-center gap-2.5">
        {layers.map((layer, i) => (
          <div
            key={layer.label}
            className="rounded-xl bg-gradient-to-r from-navy to-purple py-3 text-center text-xs font-semibold text-white shadow-soft transition-transform duration-200 hover:scale-[1.01] sm:py-3.5 sm:text-sm"
            style={{ width: layer.w }}
          >
            {String(i + 1).padStart(2, '0')} · {layer.label}
          </div>
        ))}
      </div>
    </div>
  )
}
