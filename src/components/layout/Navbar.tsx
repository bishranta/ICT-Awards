import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CaretDown, List, X } from '@phosphor-icons/react'
import clsx from 'clsx'

const NAV_ITEMS = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About',
    to: '/about/introduction',
    children: [
      { label: 'Introduction', to: '/about/introduction' },
      { label: 'Selection Procedure', to: '/about/selection' },
      { label: 'ICT Award History', to: '/about/history' },
      { label: 'Team', to: '/about/team' },
      { label: 'Jury Members', to: '/about/jury' },
      { label: 'Advisors', to: '/about/advisors' },
      { label: 'FAQs', to: '/about/faq' },
    ],
  },
  { label: 'Categories', to: '/categories' },
  { label: 'Pre-Activities', to: '/pre-activities' },
  { label: 'Flashbacks', to: '/editions' },
  { label: 'Winners', to: '/winners' },
  {
    label: 'Media',
    to: '/media',
    children: [
      { label: 'TV Shows', to: '/media?tab=tv-shows' },
      { label: 'Grand Finale', to: '/media?tab=grand-finale' },
      { label: 'Media Coverages', to: '/media?tab=media-coverages' },
      { label: 'Press Notes', to: '/media?tab=press-notes' },
      { label: 'Downloads', to: '/media?tab=downloads' },
      { label: 'Promo Videos', to: '/media?tab=promo-videos' },
    ],
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-surface/95 backdrop-blur-sm shadow-sm border-b border-border-subtle' : 'bg-surface/95 backdrop-blur-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/logos/ICT-AWARD-Logo.png"
              alt="ICT Award"
              className="h-10 lg:h-12 w-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/logos/ICT-AWARD-Logo-Dark-Bg.png'
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    clsx(
                      'px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 flex items-center gap-1',
                      isActive ? 'text-spectrum-a' : 'text-ink/70 hover:text-spectrum-a'
                    )
                  }
                >
                  {item.label}
                  {item.children && (
                    <CaretDown size={12} className="icon-spectrum opacity-60" />
                  )}
                </NavLink>

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 z-50 pt-2">
                    {(() => {
                      const half = Math.ceil(item.children.length / 2)
                      const col1 = item.children.slice(0, half)
                      const col2 = item.children.slice(half)
                      return (
                        <div className="bg-surface border border-border-subtle rounded-xl shadow-md py-2 flex divide-x divide-gold">
                          <div className="flex flex-col">
                            {col1.map((child) => (
                              <Link key={child.label} to={child.to} className="px-4 py-2.5 text-sm text-ink/70 hover:text-spectrum-a hover:bg-gold/5 transition-colors whitespace-nowrap" onClick={() => setActiveDropdown(null)}>{child.label}</Link>
                            ))}
                          </div>
                          <div className="flex flex-col">
                            {col2.map((child) => (
                              <Link key={child.label} to={child.to} className="px-4 py-2.5 text-sm text-ink/70 hover:text-spectrum-a hover:bg-gold/5 transition-colors whitespace-nowrap" onClick={() => setActiveDropdown(null)}>{child.label}</Link>
                            ))}
                          </div>
                        </div>
                      )
                    })()}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Apply Now CTA */}
          <div className="hidden lg:block">
            <Link
              to="/apply"
              className="bg-gold text-ink font-bold px-5 py-2.5 rounded-full text-sm hover:bg-gold-light transition-colors"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} className="icon-spectrum" /> : <List size={22} className="icon-spectrum" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface border-t border-border-subtle">
          <div className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    clsx(
                      'block px-4 py-3 rounded-lg font-semibold',
                      isActive ? 'text-spectrum-a bg-gold/10' : 'text-ink/70 hover:text-spectrum-a hover:bg-gold/5'
                    )
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="block px-4 py-2 text-sm text-ink/80 hover:text-spectrum-a hover:bg-gold/5 rounded-lg"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2">
              <Link
                to="/apply"
                className="block text-center bg-gold text-ink font-bold px-5 py-3 rounded-full hover:bg-gold-light transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
