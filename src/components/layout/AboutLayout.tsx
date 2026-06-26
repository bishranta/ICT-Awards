import { NavLink, Outlet } from 'react-router-dom'

const NAV = [
  { to: '/about/introduction', label: 'Introduction' },
  { to: '/about/selection', label: 'Selection Process' },
  { to: '/about/history', label: 'History' },
  { to: '/about/team', label: 'Team' },
  { to: '/about/jury', label: 'Jury Members' },
  { to: '/about/advisors', label: 'Advisors' },
  { to: '/about/faq', label: 'FAQs' },
]

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors border-l-2 ${
    isActive
      ? 'border-gold text-ink bg-gold/5'
      : 'border-transparent text-ink/60 hover:text-ink hover:bg-surface-alt'
  }`

const pillClass = ({ isActive }: { isActive: boolean }) =>
  `flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
    isActive ? 'bg-gold text-ink' : 'text-ink/60 hover:text-ink'
  }`

export default function AboutLayout() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Mobile horizontal nav */}
      <div className="md:hidden border-b border-border-subtle bg-surface sticky top-16 z-10">
        <div className="container-max">
          <nav className="flex overflow-x-auto gap-1 py-3">
            {NAV.map(({ to, label }) => (
              <NavLink key={to} to={to} className={pillClass}>{label}</NavLink>
            ))}
          </nav>
        </div>
      </div>

      <div className="container-max">
        <div className="flex gap-10 py-10 lg:py-16">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <nav className="sticky top-24 space-y-1">
              {NAV.map(({ to, label }) => (
                <NavLink key={to} to={to} className={linkClass}>{label}</NavLink>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
