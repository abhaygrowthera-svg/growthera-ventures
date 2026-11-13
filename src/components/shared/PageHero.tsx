import { Reveal } from '@/components/shared/Reveal'
import { CornerDecor } from '@/components/shared/CornerDecor'
import { cn } from '@/lib/utils'

type PageHeroProps = {
  label?: string
  title: string
  tagline?: string
  description?: string
  className?: string
}

export function PageHero({
  title,
  tagline,
  description,
  className,
}: PageHeroProps) {
  return (
    <section className={cn('relative overflow-hidden bg-navy pb-16 pt-32 md:pb-20 md:pt-36', className)}>
      <CornerDecor />
      <div className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="max-w-3xl font-heading text-display-sm md:text-display-md font-extrabold uppercase tracking-wide text-white">
            {title}
          </h1>
          {tagline && <p className="mt-4 text-lg font-medium text-purple-light">{tagline}</p>}
          <div className="mt-4 h-1 w-14 rounded-full bg-gold" />
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75">{description}</p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
