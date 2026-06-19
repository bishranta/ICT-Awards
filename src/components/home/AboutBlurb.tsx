import { Link } from 'react-router-dom'
import { MagnifyingGlass, Lightbulb, Users, Gear, ArrowRight } from '@phosphor-icons/react'
import SectionHeading from '@/components/ui/SectionHeading'

const CARDS = [
  { label: 'WHAT', text: 'With participation from diverse sectors, the ICT Awards reflects the diversity of national interaction.', Icon: MagnifyingGlass },
  { label: 'WHY', text: 'We have made these awards an annual event with the hope to act as a catalyst for growth of the ICT sector.', Icon: Lightbulb },
  { label: 'WHO', text: 'We are an ICT Media that caters to information which matters in technology, developments, practices and trends.', Icon: Users },
  { label: 'HOW', text: 'Through rigorous evaluation by industry experts, government representatives, and academic professionals.', Icon: Gear },
]

export default function AboutBlurb() {
  return (
    <section className="bg-cream section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              title="Honoring Excellence in the Technology Sector of Nepal and Beyond"
              className="mb-6"
            />
            <p className="text-ink/70 leading-relaxed mb-4">
              The ICT Award is a prestigious award in Nepal, which is awarded to individuals, innovation
              and organizations for outstanding achievements and excellence in the field of Information
              and Communications Technology (ICT).
            </p>
            <p className="text-ink/70 leading-relaxed mb-8">
              Recognizing the profound impact of technology in developed and developing nations,
              we proudly present these awards annually. The ICT Award is dedicated to fostering
              the growth of the ICT sector by <strong className="text-ink">Encouraging, Recognizing,
              Promoting, and Acknowledging</strong> remarkable achievements.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-spectrum-a font-bold hover:gap-3 transition-all"
            >
              Know More
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {CARDS.map(({ label, text, Icon }) => (
              <div key={label} className="bg-surface rounded-xl p-5 shadow-sm border border-border-subtle hover:border-gold/30 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-gold" />
                </div>
                <div className="text-spectrum-a font-black text-sm uppercase tracking-widest mb-1">{label}</div>
                <p className="text-ink/70 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
