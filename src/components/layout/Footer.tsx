import { Link } from 'react-router-dom'
import {
  FacebookLogo, InstagramLogo, LinkedinLogo, YoutubeLogo,
  TiktokLogo, WhatsappLogo, ChatCircle,
  Envelope, Phone, MapPin,
} from '@phosphor-icons/react'

const SOCIAL_LINKS = [
  { icon: FacebookLogo,  href: 'https://www.facebook.com/ICTAward/',              label: 'Facebook' },
  { icon: InstagramLogo, href: 'https://www.instagram.com/ictawardnepal/',         label: 'Instagram' },
  { icon: LinkedinLogo,  href: 'https://www.linkedin.com/company/ictaward/',       label: 'LinkedIn' },
  { icon: YoutubeLogo,   href: 'https://www.youtube.com/@ICT_AWARD',              label: 'YouTube' },
  { icon: TiktokLogo,    href: 'https://www.tiktok.com/@ict_award',               label: 'TikTok' },
  { icon: WhatsappLogo,  href: 'https://wa.me/+9779801263604',                    label: 'WhatsApp' },
  { icon: ChatCircle,    href: 'viber://chat/?number=+9779801263604',             label: 'Viber' },
]

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about/introduction' },
  { label: 'Categories', to: '/categories' },
  { label: 'Winners', to: '/winners' },
  { label: 'Media', to: '/media' },
]

const ABOUT_LINKS = [
  { label: 'Introduction', to: '/about/introduction' },
  { label: 'Selection Procedure', to: '/about/selection' },
  { label: 'History', to: '/about/history' },
  { label: 'Team', to: '/about/team' },
  { label: 'FAQs', to: '/about/faq' },
]

const QUICK_LINKS = [
  { label: 'Apply Now', to: '/apply' },
  { label: 'Pre-Activities', to: '/pre-activities' },
  { label: 'Flashbacks', to: '/editions' },
  { label: 'TV Shows', to: '/media?tab=tv-shows' },
  { label: 'Grand Finale', to: '/media?tab=grand-finale' },
]

export default function Footer() {
  return (
    <footer className="bg-ink">
      {/* Brand spectrum rule */}
      <div className="h-1 w-full bg-spectrum-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Organizer + Contact + Socials — spans 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <img
              src="/logos/ICT-AWARD-Logo-Dark-Bg.png"
              alt="ICT Award"
              className="h-14 w-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/logos/ICT-AWARD-Logo.png'
              }}
            />

            {/* LwICT organizer blurb */}
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Living with ICT (LwICT) is a prominent tech media organization in Nepal. LwICT and its flagship event ICT Award contribute significantly to the growth and recognition of Nepal's ICT sector, fostering a culture of innovation and excellence in technology-driven initiatives.
            </p>

            <p className="text-xs text-white/60">
              A joint initiative of{' '}
              <span className="text-gold font-semibold">Living with ICT</span>
              {' '}&amp;{' '}
              <span className="text-gold font-semibold">IFN</span>
            </p>

            {/* Contact */}
            <div className="space-y-2 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <span>I C Tech Media Pvt. Ltd., Sankhmul, Kathmandu-31, Nepal</span>
              </div>
              <a href="mailto:admin@ictaward.org" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Envelope size={15} className="text-gold flex-shrink-0" />
                <span>admin@ictaward.org</span>
              </a>
              <div className="flex items-start gap-2">
                <Phone size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <span>977-01-5315322 · 9851141348 · 9801263604</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-gold hover:text-ink transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gold font-bold text-sm uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-white/60 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-gold font-bold text-sm uppercase tracking-widest mb-4">About</h4>
            <ul className="space-y-2">
              {ABOUT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-white/60 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-bold text-sm uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-white/60 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} ICT Award Nepal. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            <span className="inline-flex items-center gap-1.5 align-middle">
              <span className="w-1.5 h-1.5 rounded-full bg-live" />
              <span className="text-white/70 font-semibold">Nominations Open:</span>
            </span>{' '}
            <span className="text-gold font-semibold">July 17, 2026</span>
            &nbsp;|&nbsp;
            Grand Finale: <span className="text-gold font-semibold">December 18, 2026</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
