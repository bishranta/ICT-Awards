import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Image as ImageIcon, ArrowRight } from '@phosphor-icons/react'
import { EDITIONS } from '@/data/editions'
import SectionHeading from '@/components/ui/SectionHeading'

const YEARS = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016]
const LOGO_MAP = Object.fromEntries(EDITIONS.map(e => [e.year, e.logo]))

// Duplicate for seamless loop: track is 500% wide (20 items, 4 visible at once).
// Each card slot = 5% of track = 25% of container.
// Animation scrolls exactly -50% of track = 10 card widths = one full pass through originals.
const TRACK = [...YEARS, ...YEARS]

function GlimpseCard({ year }: { year: number }) {
  const [err, setErr] = useState(false)
  const logo = LOGO_MAP[year]

  return (
    <Link
      to={`/editions/${year}`}
      className="group block bg-surface border border-border-subtle rounded-xl overflow-hidden hover:border-gold/30 hover:shadow-gold-sm transition-colors"
    >
      {logo && !err ? (
        <div className="w-full aspect-video bg-ink flex items-center justify-center border-b border-border-subtle p-3">
          <img
            src={logo}
            alt={`ICT Award ${year}`}
            onError={() => setErr(true)}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ) : (
        <div className="w-full aspect-video bg-surface-muted flex flex-col items-center justify-center gap-1.5 border-b border-border-subtle">
          <ImageIcon size={22} className="text-ink/20" />
          <span className="text-ink/20 text-xs font-medium">{year}</span>
        </div>
      )}
      <div className="p-3 text-center">
        <div className="text-ink font-black text-sm group-hover:text-spectrum-a transition-colors">
          ICT Award {year}
        </div>
      </div>
    </Link>
  )
}

export default function GlimpsesSection() {
  return (
    <section className="bg-surface-alt section-padding">
      <div className="container-max">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <SectionHeading
            title="Glimpses of Past Events"
            subtitle="A decade of celebrations — explore every ICT Award edition."
          />
          <Link
            to="/editions"
            className="text-spectrum-a font-bold hover:text-ink flex items-center gap-1.5 text-sm whitespace-nowrap flex-shrink-0"
          >
            All Editions <ArrowRight size={14} className="icon-spectrum" />
          </Link>
        </div>

        <div className="overflow-hidden glimpse-ticker">
          <div className="flex animate-glimpse" style={{ width: '500%' }}>
            {TRACK.map((year, i) => (
              <div key={i} style={{ width: '5%' }} className="px-2 flex-shrink-0">
                <GlimpseCard year={year} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
