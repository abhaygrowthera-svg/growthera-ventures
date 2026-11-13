import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Logo } from '@/components/shared/Logo'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { navLinks } from '@/data/navigation'
import { useScrolled } from '@/hooks/useScrolled'
import { ICON_STROKE } from '@/lib/icons'
import { cn } from '@/lib/utils'

/** Pages whose top section is the dark navy hero */
const DARK_TOP_ROUTES = ['/', '/about', '/services', '/industries', '/process', '/contact']

function isDarkTopRoute(pathname: string) {
  if (DARK_TOP_ROUTES.includes(pathname)) return true
  if (pathname.startsWith('/services/')) return true
  return false
}

export function Navbar() {
  const scrolled = useScrolled(20)
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const overDarkHero = !scrolled && isDarkTopRoute(pathname)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || !overDarkHero
          ? 'bg-white/95 shadow-navbar backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-18 max-w-content items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo variant={overDarkHero ? 'light' : 'dark'} />

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-2.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple lg:px-3',
                  overDarkHero
                    ? isActive
                      ? 'bg-white/15 text-white'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                    : isActive
                      ? 'bg-purple-soft text-purple'
                      : 'text-navy/70 hover:bg-lavender-mist hover:text-navy'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link to="/contact">Get a Free Consultation</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className={cn(
                'inline-flex h-10 w-10 items-center justify-center rounded-xl md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple',
                overDarkHero ? 'text-white hover:bg-white/10' : 'text-navy hover:bg-lavender-mist'
              )}
              aria-label="Open menu"
            >
              <Menu strokeWidth={ICON_STROKE} className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-navy/40">Site pages</p>
            <nav className="mt-4 flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide transition-colors',
                      isActive ? 'bg-purple-soft text-purple' : 'text-navy hover:bg-lavender-mist'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <Button asChild className="mt-8 w-full">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get a Free Consultation
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
