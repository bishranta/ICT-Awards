import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Image as ImageIcon, ArrowRight } from '@phosphor-icons/react'
import { EDITIONS } from '@/data/editions'
import SectionHeading from '@/components/ui/SectionHeading'

function EditionLogoCell({ logo, year }: { logo?: string; year: number }) {
  const [err, setErr] = useState(false)
  if (logo && !err) {
    return (
      <div className="w-full aspect-video bg-ink flex items-center justify-center border-b border-border-subtle p-4">
        <img
          src={logo}
          alt={`ICT Award ${year} logo`}
          onError={() => setErr(true)}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    )
  }
  return (
    <div className="w-full aspect-video bg-surface-muted flex flex-col items-center justify-center gap-2 border-b border-border-subtle">
      <ImageIcon size={28} className="text-ink/20" />
      <span className="text-ink/25 text-xs font-medium tracking-wide">ICT Award {year}</span>
    </div>
  )
}

const sorted = [...EDITIONS].sort((a, b) => b.year - a.year)

export default function EditionsPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-surface section-padding text-center">
        <div className="container-max">
          <div className="w-12 h-1 bg-gold rounded-full mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-black text-ink">
            Glimpses of <span className="text-spectrum-a">Past Events</span>
          </h1>
          <p className="mt-4 text-ink/80 max-w-xl mx-auto">
            A decade of ICT excellence — explore each edition of Nepal's biggest tech award.
          </p>
        </div>
      </section>

      {/* Year grid */}
      <section className="bg-surface-alt section-padding">
        <div className="container-max">
          <SectionHeading
            title="ICT Award Editions"
            subtitle="From the inaugural 2016 ceremony to the 10th anniversary in 2025."
            className="mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((edition) => (
              <Link
                key={edition.year}
                to={`/editions/${edition.year}`}
                className="group bg-surface rounded-xl border border-border-subtle hover:border-gold/30 hover:shadow-gold transition-all overflow-hidden"
              >
                {/* Edition logo */}
                <EditionLogoCell logo={edition.logo} year={edition.year} />

                <div className="p-5">
                  <div className="text-spectrum-a text-xs font-bold uppercase tracking-wider mb-1">
                    {edition.year === 2025 ? '10th Edition' :
                     edition.year === 2024 ? '9th Edition' :
                     edition.year === 2023 ? '8th Edition' :
                     edition.year === 2022 ? '7th Edition' :
                     edition.year === 2021 ? '6th Edition' :
                     edition.year === 2020 ? '5th Edition' :
                     edition.year === 2019 ? '4th Edition' :
                     edition.year === 2018 ? '3rd Edition' :
                     edition.year === 2017 ? '2nd Edition' : '1st Edition'}
                  </div>
                  <h3 className="text-ink font-black text-xl mb-1">ICT Award {edition.year}</h3>
                  {edition.title && (
                    <p className="text-ink/50 text-xs mb-3">{edition.title}</p>
                  )}
                  {edition.venue && (
                    <p className="text-ink/60 text-sm mb-3 leading-snug">{edition.venue}</p>
                  )}
                  <span className="inline-flex items-center gap-1 text-spectrum-a text-sm font-semibold group-hover:gap-2 transition-all">
                    View edition <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
