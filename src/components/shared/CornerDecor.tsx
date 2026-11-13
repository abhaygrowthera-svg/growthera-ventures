import { cn } from '@/lib/utils'

type CornerDecorProps = {
  className?: string
}

export function CornerDecor({ className }: CornerDecorProps) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      {/* Top-right layered triangles */}
      <svg
        className="absolute -right-2 -top-2 h-28 w-28 md:h-36 md:w-36"
        viewBox="0 0 140 140"
        fill="none"
      >
        <path d="M140 0H40L140 100V0Z" fill="#6F63C8" opacity="0.9" />
        <path d="M140 0H70L140 70V0Z" fill="#2B2550" opacity="0.85" />
        <path d="M140 18L122 0H140V18Z" fill="#A99FE6" />
      </svg>

      {/* Bottom-left layered triangles */}
      <svg
        className="absolute -bottom-2 -left-2 h-24 w-24 md:h-32 md:w-32"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path d="M0 120V20L100 120H0Z" fill="#6F63C8" opacity="0.85" />
        <path d="M0 120V50L70 120H0Z" fill="#2B2550" opacity="0.9" />
      </svg>
    </div>
  )
}
