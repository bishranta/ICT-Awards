import { Link } from 'react-router-dom'
import {
  FacebookLogo, InstagramLogo, LinkedinLogo, YoutubeLogo,
  TiktokLogo, WhatsappLogo, ChatCircle,
  Envelope, Phone, MapPin,
} from '@phosphor-icons/react'

const SOCIAL_LINKS = [
  { icon: FacebookLogo,  href: 'https://www.facebook.com/ICTAward/',        label: 'Facebook' },
  { icon: InstagramLogo, href: 'https://www.instagram.com/ictawardnepal/',   label: 'Instagram' },
  { icon: LinkedinLogo,  href: 'https://www.linkedin.com/company/ictaward/', label: 'LinkedIn' },
  { icon: YoutubeLogo,   href: 'https://www.youtube.com/@ICT_AWARD',        label: 'YouTube' },
  { icon: TiktokLogo,    href: 'https://www.tiktok.com/@ict_award',         label: 'TikTok' },
  { icon: WhatsappLogo,  href: 'https://wa.me/+9779801263604',              label: 'WhatsApp' },
  { icon: ChatCircle,    href: 'viber://chat/?number=+9779801263604',       label: 'Viber' },
]

const EXPLORE_LINKS = [
  { label: 'Home',           to: '/' },
  { label: 'Categories',     to: '/categories' },
  { label: 'Pre-Activities', to: '/pre-activities' },
  { label: 'Flashbacks',     to: '/editions' },
  { label: 'Winners',        to: '/winners' },
  { label: 'Media',          to: '/media' },
  { label: 'Apply Now',      to: '/apply' },
]

const ABOUT_LINKS = [
  { label: 'Introduction',        to: '/about/introduction' },
  { label: 'Selection Procedure', to: '/about/selection' },
  { label: 'History',             to: '/about/history' },
  { label: 'Team',                to: '/about/team' },
  { label: 'Jury Members',        to: '/about/jury' },
  { label: 'Advisors',            to: '/about/advisors' },
  { label: 'FAQs',                to: '/about/faq' },
]

const PHONES = ['977-01-5315322', '+977 985-114-1348', '+977 980-126-3604']

export default function Footer() {
  return (
    <footer className="bg-ink">
      {/* Brand spectrum rule */}
      <div className="h-1 w-full bg-spectrum-gradient" />

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand — spans 2 cols */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="/logos/ICT-AWARD-Logo-Dark-Bg.png"
                alt="ICT Award"
                className="h-14 w-auto"
                onError={(e) => { (e.target as HTMLImageElement).src = '/logos/ICT-AWARD-Logo.png' }}
              />
            </Link>

            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Living with ICT (LwICT) is a prominent tech media organization and digital initiative in Nepal. 
              Living with ICT and its flagship event ICT Award contributes significantly to the growth and recognition of Nepal’s ICT sector, 
              fostering a culture of innovation and excellence in technology-driven initiatives. 
              It works on various aspects and domains of digital transformation.
            </p>

          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white/35 font-bold text-xs uppercase tracking-widest mb-5">Explore</h4>
            <ul className="space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-white/55 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white/35 font-bold text-xs uppercase tracking-widest mb-5">About</h4>
            <ul className="space-y-3">
              {ABOUT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-white/55 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white/35 font-bold text-xs uppercase tracking-widest mb-5">Get In Touch</h4>
            <div className="space-y-4 text-sm">

              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/55 leading-snug">
                  I C Tech Media Pvt. Ltd.,<br />Sankhmul, Kathmandu-31, Nepal
                </span>
              </div>

              <a
                href="mailto:admin@ictaward.org"
                className="flex items-center gap-3 text-white/55 hover:text-gold transition-colors group"
              >
                <Envelope size={15} className="text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>admin@ictaward.org</span>
              </a>

              <div className="flex items-start gap-3">
                <Phone size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <div className="space-y-1 text-white/55">
                  {PHONES.map(p => <div key={p}>{p}</div>)}
                </div>
              </div>

            </div>

            {/* Social icons */}
            <div className="flex flex-wrap gap-2.5 mt-5">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-white/50 hover:bg-gold hover:text-ink transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/35 text-xs">
            © {new Date().getFullYear()} ICT Award. All rights reserved.
          </p>
          <p className="text-white/35 text-xs">
            A joint initiative of{' '}
            <span className="text-white/55 font-medium">Living with ICT</span>
            {' '}&amp;{' '}
            <span className="text-white/55 font-medium">ICT Foundation Nepal</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
