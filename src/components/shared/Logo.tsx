import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import logoDark from '@/assets/logo-transparent.png'
import logoLight from '@/assets/logo-light.png'

type LogoProps = {
  className?: string
  variant?: 'light' | 'dark'
  /** When false, still shows the full brand mark (icon + wordmark are baked into the file) */
  showWordmark?: boolean
}

export function Logo({ className, variant = 'dark' }: LogoProps) {
  const src = variant === 'light' ? logoLight : logoDark

  return (
    <Link
      to="/"
      className={cn(
        'inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple rounded-lg',
        className
      )}
      aria-label="Growthera Ventures home"
    >
      <img
        src={src}
        alt="Growthera Ventures"
        className="h-9 w-auto max-w-[180px] object-contain object-left md:h-10 md:max-w-[210px]"
        width={210}
        height={66}
        decoding="async"
      />
    </Link>
  )
}
