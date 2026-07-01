import { RenderIcon } from '@/lib/renderIcon'
import SectionHeading from '@/components/ui/SectionHeading'

const SIGNIFICANCE = [
  { icon: 'RocketLaunch', title: 'Fostering Startup Culture', desc: 'Identifies and honors early-stage ventures, stimulating entrepreneurship and experimentation.' },
  { icon: 'Lightbulb', title: 'Celebrating Digital Impact', desc: 'Highlights groundbreaking digital campaigns and ICT solutions improving lives and transforming systems.' },
  { icon: 'Sparkle', title: 'Inspiring Next Generation', desc: 'Showcases role models encouraging youth to pursue careers in science, technology, and entrepreneurship.' },
  { icon: 'Handshake', title: 'Enabling Collaboration', desc: 'Nominees gain access to an ecosystem of peers, investors, mentors, and policymakers.' },
  { icon: 'Globe', title: 'National & Global Visibility', desc: 'Recognition translates into credibility, media exposure, and international interest.' },
  { icon: 'ChartBar', title: 'Setting Standards', desc: 'Rigorous selection promotes accountability, quality, and ethical digital practices.' },
  { icon: 'Briefcase', title: 'Economic Development', desc: "Elevates technology-led solutions supporting Nepal's goals from digital inclusion to health and governance." },
  { icon: 'Users', title: 'Empowering Communities', desc: 'Recognizes projects addressing local challenges, amplifying social impact at grassroots level.' },
  { icon: 'Buildings', title: 'Shaping National Agenda', desc: 'With backing from government, academia, and industry, influences digital policy and ICT ecosystem.' },
  { icon: 'Globe', title: 'Celebrating Diversity in Tech', desc: 'Spanning e-governance, fintech, edtech, agritech, healthtech, and more — highlighting technology\'s wide-ranging potential to drive change.' },
]

export default function IntroductionPage() {
  return (
    <div>
      <SectionHeading
        title="What is the ICT Award?"
        subtitle="Nepal's most prestigious technology recognition since 2016."
        className="mb-8"
      />
      <p className="text-ink/70 leading-relaxed mb-4">
        The ICT Award is a prestigious award in Nepal given to individuals, innovations, and organizations for outstanding achievements and excellence in ICT. This includes innovative use of technology, exceptional contributions to the ICT industry, and outstanding products and services.
      </p>
      <p className="text-ink/70 leading-relaxed mb-4">
        The ICT Award accelerates progress on the SDGs based on the "four I's" framework: <span className="text-spectrum-a font-semibold">Infrastructure, Investment, Innovation, and Inclusivity</span>. ICT forms the backbone of the digital economy and has the potential to fast-forward progress on SDGs and improve lives.
      </p>
      <p className="text-ink/70 leading-relaxed mb-10">
        Join us as we honor outstanding contributions that inspire pride, unity, and innovation within the ICT sector of Nepal and beyond.
      </p>

      <p className="text-ink/70 leading-relaxed mb-10">
        As we commemorate a decade of digital excellence, the 11th edition of the ICT Award is more than just an award — it's a celebration of Nepal's progress toward becoming a digitally empowered nation. It reflects how far we've come, while igniting the vision for the future: a Nepal where technology is inclusive, empowering, and transformative.
      </p>

      <h3 className="text-ink font-bold text-base mb-4">Why the ICT Award Matters</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SIGNIFICANCE.map((item) => (
          <div key={item.title} className="bg-surface-alt border border-border-subtle rounded-xl p-6 hover:border-gold/20 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center mb-3">
              <RenderIcon name={item.icon} size={18} />
            </div>
            <h4 className="text-ink font-bold text-sm mb-1">{item.title}</h4>
            <p className="text-ink/80 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
