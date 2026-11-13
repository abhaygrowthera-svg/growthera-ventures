import { useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Layers, Globe, Workflow, Mail, LucideIcon } from 'lucide-react'
import { Section, SectionHeading } from '@/components/shared/Section'
import { Reveal, Stagger, StaggerItem } from '@/components/shared/Reveal'
import { navLinks } from '@/data/navigation'
import { ICON_STROKE } from '@/lib/icons'

type PageDetail = {
  icon: LucideIcon
  title: string
  description: string
  action: string
  gradient: string
}

const pageData: Record<string, PageDetail> = {
  '/about': {
    icon: Building2,
    title: 'About Growthera',
    description: 'Our mission, core values, leadership philosophy, and advisory credentials.',
    action: 'Discover Our Story',
    gradient: 'from-purple to-purple-deep',
  },
  '/services': {
    icon: Layers,
    title: 'Our Services',
    description: 'Twelve structured consulting, fundraising, compliance, and scaling solutions.',
    action: 'Explore Solutions',
    gradient: 'from-navy to-navy-soft',
  },
  '/industries': {
    icon: Globe,
    title: 'Industries We Empower',
    description: 'Deep sector focus across manufacturing, healthcare, technology, and more.',
    action: 'View Sectors',
    gradient: 'from-purple-deep to-navy',
  },
  '/process': {
    icon: Workflow,
    title: 'Working Process',
    description: 'A systematic 4-phase engagement methodology from discovery to realization.',
    action: 'See Our Process',
    gradient: 'from-navy-soft to-purple',
  },
  '/contact': {
    icon: Mail,
    title: 'Contact Us',
    description: 'Connect directly with our team in Sector 63, Noida for custom advisory.',
    action: 'Get in Touch',
    gradient: 'from-purple to-navy',
  },
}

function SpotlightLink({ page, info }: { page: { href: string; label: string }; info: PageDetail }) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const Icon = info.icon

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }, [])

  return (
    <Link
      ref={cardRef}
      to={page.href}
      onMouseMove={handleMouseMove}
      className="spotlight-card group flex h-full flex-col justify-between rounded-2xl border border-white/80 bg-white p-6 shadow-soft transition-all duration-400 hover:-translate-y-2 hover:border-purple/30 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${info.gradient} text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
            <Icon strokeWidth={ICON_STROKE} className="h-5 w-5" />
          </div>
        </div>

        <h3 className="mt-4 font-heading text-base font-bold uppercase tracking-wide text-navy transition-colors group-hover:text-purple">
          {info.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-navy/70">
          {info.description}
        </p>
      </div>

      <div className="relative z-10 mt-6 flex items-center justify-between border-t border-border/60 pt-4">
        <span className="font-heading text-xs font-bold uppercase tracking-[0.12em] text-purple transition-colors duration-200 group-hover:text-navy">
          {info.action}
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-soft text-purple transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-purple group-hover:to-purple-deep group-hover:text-white group-hover:translate-x-0.5 group-hover:shadow-md">
          <ArrowRight strokeWidth={ICON_STROKE} className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  )
}

export function SitePages() {
  const pages = navLinks.filter((link) => link.href !== '/')

  return (
    <Section tone="lavender">
      <Reveal>
        <SectionHeading
          title="Continue Exploring"
          tagline="Open a dedicated page for the area you want to learn more about"
          align="center"
        />
      </Reveal>

      <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((page) => {
          const info = pageData[page.href]
          if (!info) return null
          return (
            <StaggerItem key={page.href}>
              <SpotlightLink page={page} info={info} />
            </StaggerItem>
          )
        })}
      </Stagger>
    </Section>
  )
}
