import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Section, SectionHeading } from '@/components/shared/Section'
import { Reveal } from '@/components/shared/Reveal'
import { Callout } from '@/components/shared/Callout'
import { industries } from '@/data/industries'
import { getIcon, ICON_STROKE } from '@/lib/icons'
import { Button } from '@/components/ui/button'

export function IndustriesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <Section id="industries" tone="lavender">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <SectionHeading
            label={industries.label}
            title={industries.heading}
            tagline={industries.tagline}
          />
        </Reveal>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous industry"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-navy shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple hover:text-white hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
          >
            <ChevronLeft strokeWidth={ICON_STROKE} className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next industry"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-navy shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple hover:text-white hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
          >
            <ChevronRight strokeWidth={ICON_STROKE} className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-10 overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {industries.items.map((item) => {
            const Icon = getIcon(item.icon)
            return (
              <article
                key={item.id}
                className="group min-w-0 shrink-0 grow-0 basis-[85%] rounded-2xl border border-transparent bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-purple/20 hover:shadow-card sm:basis-[45%] lg:basis-[30%]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy-soft text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Icon strokeWidth={ICON_STROKE} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-heading text-base font-bold uppercase tracking-wide text-navy transition-colors group-hover:text-purple">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/65">{item.description}</p>

                {/* Animated progress bar */}
                <div className="mt-4 h-0.5 w-full overflow-hidden rounded-full bg-border/30">
                  <div className="h-full w-0 rounded-full bg-gradient-to-r from-purple to-gold transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <Callout className="md:max-w-2xl">{industries.note}</Callout>
        <Button asChild variant="secondary">
          <Link to="/industries">Explore Industries</Link>
        </Button>
      </div>
    </Section>
  )
}
