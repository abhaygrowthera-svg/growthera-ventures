import { cn } from '@/lib/utils'

type SectionProps = {
  id?: string
  children: React.ReactNode
  className?: string
  containerClassName?: string
  tone?: 'page' | 'white' | 'navy' | 'lavender'
}

const toneClasses = {
  page: 'bg-surface-page text-navy',
  white: 'bg-white text-navy',
  navy: 'bg-navy text-white',
  lavender: 'bg-lavender-mist text-navy',
}

export function Section({
  id,
  children,
  className,
  containerClassName,
  tone = 'page',
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('relative py-16 md:py-22 lg:py-28', toneClasses[tone], className)}
    >
      <div className={cn('relative mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8', containerClassName)}>
        {children}
      </div>
    </section>
  )
}

type SectionHeadingProps = {
  label?: string
  title: string
  tagline?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionHeading({
  label,
  title,
  tagline,
  align = 'left',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'mx-auto max-w-3xl text-center', className)}>
      {label && (
        <p
          className={cn(
            'mb-3 font-heading text-[11px] font-bold uppercase tracking-[0.16em]',
            light ? 'text-gold' : 'text-purple'
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          'font-heading text-display-sm md:text-display-md font-extrabold uppercase tracking-wide',
          light ? 'text-white' : 'text-navy'
        )}
      >
        {title}
      </h2>
      {tagline && (
        <p
          className={cn(
            'mt-3 max-w-2xl text-base font-medium md:text-lg',
            light ? 'text-purple-light' : 'text-purple',
            align === 'center' && 'mx-auto'
          )}
        >
          {tagline}
        </p>
      )}
      <div
        className={cn(
          'mt-4 h-1 w-14 rounded-full bg-gradient-to-r',
          light ? 'from-gold to-gold/50' : 'from-purple to-purple-light',
          align === 'center' && 'mx-auto'
        )}
      />
    </div>
  )
}
