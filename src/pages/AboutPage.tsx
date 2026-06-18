import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaretDown, HourglassHigh } from '@phosphor-icons/react'
import { HISTORY } from '@/data/history'
import { FAQS } from '@/data/faqs'
import { RenderIcon } from '@/lib/renderIcon'
import SectionHeading from '@/components/ui/SectionHeading'
import clsx from 'clsx'

const SELECTION_STEPS = {
  A: [
    'Call for Nominations',
    'Preliminary Criteria Check & Document Review',
    'First Phase of Jury Evaluation',
    'Selection of Top 12/15 Finalists',
    'Public Idea/Startup Showcase',
    'Presentation & Speed Dating with Grand Jury',
    'Television Broadcast Featuring Top 12 Finalists',
    'Top 5 Finalist Selection',
    'Public Voting Among Top 5',
    'Field/Industry Visit for Final Evaluation',
    'Grand Finale and Winner Announcement',
  ],
  B: [
    'Call for Nominations',
    'Preliminary Criteria Check & Document Review',
    'First Phase of Jury Evaluation',
    'Second Phase — Top 10 Selection',
    'Third Phase — Internal Presentations',
    'Final Selection of Top 3 Finalists',
    'Grand Finale and Winner Announcement',
  ],
  C: [
    'Call for Nominations',
    'Preliminary Criteria Check & Document Review',
    'First Phase of Jury Evaluation',
    'Second Phase — Top 10 Selection',
    'Third Phase — Presentations of Selected Nominees',
    'Final Selection of Top 3 Finalists',
    'Grand Finale and Winner Announcement',
  ],
}

const SIGNIFICANCE = [
  { icon: 'RocketLaunch', title: 'Fostering Startup Culture', desc: 'Identifies and honors early-stage ventures, stimulating entrepreneurship and experimentation.' },
  { icon: 'Lightbulb', title: 'Celebrating Digital Impact', desc: 'Highlights groundbreaking digital campaigns and ICT solutions improving lives and transforming systems.' },
  { icon: 'Sparkle', title: 'Inspiring Next Generation', desc: 'Showcases role models encouraging youth to pursue careers in science, technology, and entrepreneurship.' },
  { icon: 'Handshake', title: 'Enabling Collaboration', desc: 'Nominees gain access to an ecosystem of peers, investors, mentors, and policymakers.' },
  { icon: 'Globe', title: 'National & Global Visibility', desc: 'Recognition translates into credibility, media exposure, and international interest.' },
  { icon: 'ChartBar', title: 'Setting Standards', desc: 'Rigorous selection promotes accountability, quality, and ethical digital practices.' },
  { icon: 'Briefcase', title: 'Economic Development', desc: 'Elevates technology-led solutions supporting Nepal\'s goals from digital inclusion to health and governance.' },
  { icon: 'Users', title: 'Empowering Communities', desc: 'Recognizes projects addressing local challenges, amplifying social impact at grassroots level.' },
  { icon: 'Buildings', title: 'Shaping National Agenda', desc: 'With backing from government, academia, and industry, influences digital policy and ICT ecosystem.' },
]

function FAQAccordion() {
  const [open, setOpen] = useState<string | null>(null)
  return (
    <div className="space-y-3">
      {FAQS.map((faq) => (
        <div
          key={faq.id}
          className="bg-surface-alt border border-gray-100 rounded-xl overflow-hidden hover:border-gold/20 transition-colors"
        >
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left"
            onClick={() => setOpen(open === faq.id ? null : faq.id)}
          >
            <span className="font-semibold text-ink pr-4">{faq.question}</span>
            <CaretDown
              size={18}
              className={clsx('text-gold flex-shrink-0 transition-transform', open === faq.id && 'rotate-180')}
            />
          </button>
          {open === faq.id && (
            <div className="px-6 pb-4">
              <p className="text-ink/60 leading-relaxed text-sm">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function AboutPage() {
  const [activeSelectionGroup, setActiveSelectionGroup] = useState<'A' | 'B' | 'C'>('A')

  return (
    <div className="pt-20">
      {/* Introduction */}
      <section id="introduction" className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-3xl">
            <SectionHeading
              title="What is the ICT Award?"
              subtitle="Nepal's most prestigious technology recognition since 2016."
              className="mb-8"
            />
            <p className="text-ink/70 leading-relaxed mb-4">
              The ICT Award is a prestigious award in Nepal given to individuals, innovations, and organizations for outstanding achievements and excellence in ICT. This includes innovative use of technology, exceptional contributions to the ICT industry, and outstanding products and services.
            </p>
            <p className="text-ink/70 leading-relaxed mb-4">
              The ICT Award accelerates progress on the SDGs based on the "four I's" framework: <span className="text-gold font-semibold">Infrastructure, Investment, Innovation, and Inclusivity</span>. ICT forms the backbone of the digital economy and has the potential to fast-forward progress on SDGs and improve lives.
            </p>
            <p className="text-ink/70 leading-relaxed mb-8">
              Join us as we honor outstanding contributions that inspire pride, unity, and innovation within the ICT sector of Nepal and beyond.
            </p>
          </div>

          {/* Significance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {SIGNIFICANCE.map((item) => (
              <div key={item.title} className="bg-surface-alt border border-gray-100 rounded-xl p-5 hover:border-gold/20 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center mb-3">
                  <RenderIcon name={item.icon} size={18} className="text-gold" />
                </div>
                <h3 className="text-ink font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-ink/50 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Procedure */}
      <section id="selection" className="bg-surface-muted section-padding">
        <div className="container-max">
          <SectionHeading
            title="Selection Procedure"
            subtitle="A rigorous multi-stage evaluation process ensuring the most deserving are recognized."
            className="mb-10"
          />

          <div className="bg-white rounded-xl p-4 border border-gold/20 mb-6 text-sm text-ink/60 leading-relaxed">
            <span className="text-gold font-bold">Core Evaluation Factors:</span> Impact on the ICT industry · Level of innovation and originality · Quality and execution of work · Creativity and societal relevance. Over <span className="text-ink font-semibold">25 jury meetings</span> are conducted throughout the evaluation period.
          </div>

          {/* Group Tabs */}
          <div className="flex gap-2 mb-8">
            {(['A', 'B', 'C'] as const).map((g) => (
              <button
                key={g}
                onClick={() => setActiveSelectionGroup(g)}
                className={clsx(
                  'px-5 py-2.5 rounded-full text-sm font-bold transition-all',
                  activeSelectionGroup === g ? 'bg-gold text-ink' : 'border border-gold/30 text-gold hover:bg-gold/10'
                )}
              >
                {g === 'A' ? 'Startup & Innovation' : g === 'B' ? 'Individual Excellence' : 'Organizations'}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {SELECTION_STEPS[activeSelectionGroup].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl px-5 py-4">
                <div className="w-7 h-7 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-xs font-black flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-ink/70 text-sm leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section id="history" className="bg-white section-padding">
        <div className="container-max">
          <SectionHeading
            title="ICT Award History"
            subtitle="A decade of evolution — from a single ceremony to Nepal's most comprehensive tech recognition."
            className="mb-12"
          />

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gold/20 hidden md:block" />
            <div className="space-y-6">
              {HISTORY.map((entry, idx) => (
                <div key={entry.year} className="flex gap-6 group">
                  <div className="relative flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-gold/40 group-hover:border-gold flex items-center justify-center transition-colors z-10">
                      <span className="text-gold font-black text-xs">{entry.year}</span>
                    </div>
                  </div>
                  <div className={clsx(
                    'flex-1 rounded-xl p-5 border transition-colors',
                    idx % 2 === 0
                      ? 'bg-surface-alt border-gray-100 hover:border-gold/20'
                      : 'bg-white border-gray-100 hover:border-gold/20'
                  )}>
                    {entry.milestone && (
                      <span className="inline-block bg-gold/10 text-gold text-xs font-bold px-2 py-0.5 rounded-full mb-2">
                        {entry.milestone}
                      </span>
                    )}
                    <p className="text-ink/70 text-sm leading-relaxed">{entry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team & Jury */}
      <section id="team" className="bg-surface-muted section-padding">
        <div className="container-max">
          <SectionHeading
            title="Team & Jury"
            subtitle="Our jury panel consists of industry experts, academicians, government representatives, and ICT professionals."
            className="mb-10"
          />
          <div className="bg-white border border-gold/20 rounded-xl p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
              <HourglassHigh size={24} className="text-gold" />
            </div>
            <p className="text-ink/60">Jury and Advisor lists for ICT Award 2026 will be updated soon.</p>
            <p className="text-gold/70 text-sm mt-2">Check back after nominations open on July 17, 2026.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="bg-white section-padding">
        <div className="container-max max-w-3xl">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about applying for the ICT Award 2026."
            className="mb-10"
          />
          <FAQAccordion />

          <div className="mt-10 text-center">
            <p className="text-ink/50 mb-4">Have more questions?</p>
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 bg-gold text-ink font-bold px-6 py-3 rounded-full hover:bg-gold-light transition-colors"
            >
              Apply Now — It's Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
