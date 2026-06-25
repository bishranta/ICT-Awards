import { Link } from 'react-router-dom'

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Categories', to: '/categories' },
      { label: 'Winners', to: '/winners' },
      { label: 'Media', to: '/media' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Introduction', to: '/about/introduction' },
      { label: 'Selection Procedure', to: '/about/selection' },
      { label: 'History', to: '/about/history' },
      { label: 'Team & Jury', to: '/about/team' },
      { label: 'FAQs', to: '/about/faq' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'Apply Now', to: '/apply' },
      { label: 'Pre-Activities', to: '/pre-activities' },
      { label: 'TV Shows', to: '/media?tab=tv-shows' },
      { label: 'Grand Finale', to: '/media?tab=grand-finale' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink">
      {/* Brand spectrum rule */}
      <div className="h-1 w-full bg-spectrum-gradient" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="/logos/ICT-AWARD-Logo-Dark-Bg.png"
              alt="ICT Award"
              className="h-14 w-auto mb-4"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/logos/ICT-AWARD-Logo.png'
              }}
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Honoring Excellence in the Technology Sector of Nepal and Beyond.
              Recognizing outstanding achievements in ICT since 2016.
            </p>
            <p className="mt-4 text-xs text-white/60">
              A joint initiative of <span className="text-gold font-semibold">Living with ICT</span> & <span className="text-gold font-semibold">IFN</span>
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-gold font-bold text-sm uppercase tracking-widest mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-white/60 hover:text-gold text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} ICT Award Nepal. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            <span className="inline-flex items-center gap-1.5 align-middle"><span className="w-1.5 h-1.5 rounded-full bg-live" /><span className="text-white/70 font-semibold">Nominations Open:</span></span> <span className="text-gold font-semibold">July 17, 2026</span> &nbsp;|&nbsp; Grand Finale: <span className="text-gold font-semibold">December 18, 2026</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
