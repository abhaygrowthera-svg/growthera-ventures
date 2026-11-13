import {
  BadgeCheck,
  Building2,
  FileText,
  Laptop,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from 'lucide-react'
import { ICON_STROKE } from '@/lib/icons'
import { cn } from '@/lib/utils'

const badges = [
  { Icon: FileText, label: 'Docs', top: '8%', left: '-6%' },
  { Icon: ShieldCheck, label: 'Compliance', top: '28%', right: '-8%' },
  { Icon: Laptop, label: 'Digital', bottom: '18%', left: '-4%' },
  { Icon: BadgeCheck, label: 'Ready', bottom: '6%', right: '-2%' },
]

const tiles = [
  {
    Icon: Building2,
    label: 'Setup',
    tone: 'from-[#EDEAF8] to-[#E8E5F7]',
    visual: 'bars' as const,
  },
  {
    Icon: Wallet,
    label: 'Fund',
    tone: 'from-[#E8E5F7] to-[#DDD8F5]',
    visual: 'trend' as const,
  },
  {
    Icon: TrendingUp,
    label: 'Grow',
    tone: 'from-[#DDD8F5] to-[#D4CDF0]',
    visual: 'ring' as const,
  },
]

function TileVisual({ type }: { type: 'bars' | 'trend' | 'ring' }) {
  if (type === 'bars') {
    return (
      <div className="mt-auto flex h-10 items-end justify-center gap-1">
        {[40, 65, 50, 85, 70].map((h, i) => (
          <span
            key={i}
            className="w-1.5 rounded-sm bg-purple/70"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    )
  }

  if (type === 'trend') {
    return (
      <svg className="mt-auto h-10 w-full" viewBox="0 0 64 32" fill="none" aria-hidden="true">
        <path
          d="M2 26 L14 20 L26 22 L38 12 L50 14 L62 6"
          stroke="#6F63C8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="62" cy="6" r="2.5" fill="#E0A93B" />
      </svg>
    )
  }

  return (
    <div className="mt-auto flex justify-center">
      <svg className="h-10 w-10" viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="14" fill="none" stroke="#C8C0EE" strokeWidth="4" />
        <circle
          cx="20"
          cy="20"
          r="14"
          fill="none"
          stroke="#6F63C8"
          strokeWidth="4"
          strokeDasharray="66 88"
          strokeLinecap="round"
          transform="rotate(-90 20 20)"
        />
        <text
          x="20"
          y="23"
          textAnchor="middle"
          className="fill-navy"
          fontSize="8"
          fontWeight="700"
          fontFamily="Plus Jakarta Sans, sans-serif"
        >
          5
        </text>
      </svg>
    </div>
  )
}

export function IllustrationCard({ className }: { className?: string }) {
  return (
    <div className={cn('relative mx-auto w-full max-w-md', className)}>
      <div
        className="absolute -inset-6 rounded-[40%] bg-purple-light/30 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lift">
        <div className="flex items-center gap-2 bg-surface-muted px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#51CF66]" />
          <span className="ml-3 h-2 flex-1 rounded-full bg-border" />
        </div>

        <div className="space-y-4 p-6">
          <div>
            <p className="font-heading text-[10px] font-bold uppercase tracking-[0.16em] text-purple">
              Growth Dashboard
            </p>
            <div className="mt-2 h-2.5 w-2/3 rounded-full bg-purple-soft" />
            <div className="mt-2 h-2 w-full rounded-full bg-lavender-mist" />
            <div className="mt-1.5 h-2 w-5/6 rounded-full bg-lavender-mist" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {tiles.map(({ Icon, label, tone, visual }) => (
              <div
                key={label}
                className={cn(
                  'flex aspect-square flex-col rounded-xl bg-gradient-to-br p-2.5',
                  tone
                )}
              >
                <div className="flex items-center justify-between gap-1">
                  <Icon strokeWidth={ICON_STROKE} className="h-3.5 w-3.5 text-purple" />
                  <span className="font-heading text-[8px] font-bold uppercase tracking-wider text-navy/60">
                    {label}
                  </span>
                </div>
                <TileVisual type={visual} />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-navy p-4 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple">
              <ShieldCheck strokeWidth={ICON_STROKE} className="h-5 w-5" />
            </div>
            <div>
              <p className="font-heading text-xs font-bold uppercase tracking-wider">
                Structured Support
              </p>
              <p className="mt-1 text-xs text-white/70">Setup · Fund · Protect · Grow</p>
            </div>
          </div>
        </div>
      </div>

      {badges.map(({ Icon, label, ...pos }, index) => (
        <div
          key={label}
          className="absolute z-10 flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-card"
          style={pos as React.CSSProperties}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple text-white">
            <Icon strokeWidth={ICON_STROKE} className="h-3.5 w-3.5" />
          </span>
          <span className="pr-1 font-heading text-[10px] font-bold uppercase tracking-wider text-navy">
            {label}
          </span>
          <span
            className="pointer-events-none absolute -z-10 h-px w-8 bg-purple/25"
            style={{
              [index % 2 === 0 ? 'right' : 'left']: '-2rem',
              top: '50%',
            }}
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  )
}
