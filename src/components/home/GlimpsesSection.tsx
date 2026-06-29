import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Image as ImageIcon, ArrowRight, CaretLeft, CaretRight } from '@phosphor-icons/react'
import { EDITIONS } from '@/data/editions'
import SectionHeading from '@/components/ui/SectionHeading'

const YEARS = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016]
const LOGO_MAP = Object.fromEntries(EDITIONS.map(e => [e.year, e.logo]))
const VISIBLE = 4

function GlimpseCard({ year }: { year: number }) {
  const [err, setErr] = useState(false)
  const logo = LOGO_MAP[year]

  return (
    <Link
      to={`/editions/${year}`}
      className="group block bg-surface border border-border-subtle rounded-xl overflow-hidden hover:border-gold/30 hover:shadow-gold-sm transition-all"
    >
      {logo && !err ? (
        <div className="w-full aspect-video bg-ink flex items-center justify-center p-3">
          <img
            src={logo}
            alt={`ICT Award ${year}`}
            onError={() => setErr(true)}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="w-full aspect-video bg-surface-muted flex flex-col items-center justify-center gap-1.5">
          <ImageIcon size={22} className="text-ink/20" />
          <span className="text-ink/20 text-xs font-medium">{year}</span>
        </div>
      )}
    </Link>
  )
}

export default function GlimpsesSection() {
  const [idx, setIdx] = useState(0)
  const max = YEARS.length - VISIBLE

  return (
    <section className="bg-surface-alt section-padding">
      <div className="container-max">
        <div className="relative mb-8">
          <SectionHeading
            title="Glimpses of Past Events"
            subtitle="A decade of celebrations — explore every ICT Award edition."
            centered
          />
          <Link
            to="/editions"
            className="mt-4 flex justify-center text-spectrum-a font-bold hover:text-ink items-center gap-1.5 text-sm whitespace-nowrap md:mt-0 md:absolute md:top-0 md:right-0"
          >
            All Editions <ArrowRight size={14} className="icon-spectrum" />
          </Link>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${idx * (100 / VISIBLE)}%)` }}
            >
              {YEARS.map(year => (
                <div key={year} style={{ width: `${100 / VISIBLE}%` }} className="px-2 flex-shrink-0">
                  <GlimpseCard year={year} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIdx(i => Math.max(0, i - 1))}
            disabled={idx === 0}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-surface border border-border-subtle shadow-sm flex items-center justify-center text-ink hover:border-gold/40 hover:text-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <CaretLeft size={16} weight="bold" />
          </button>

          <button
            onClick={() => setIdx(i => Math.min(max, i + 1))}
            disabled={idx === max}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-surface border border-border-subtle shadow-sm flex items-center justify-center text-ink hover:border-gold/40 hover:text-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <CaretRight size={16} weight="bold" />
          </button>
        </div>

        <div className="flex justify-center gap-1.5 mt-5">
          {Array.from({ length: max + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`rounded-full transition-all duration-200 ${i === idx ? 'w-5 h-2 bg-gold' : 'w-2 h-2 bg-ink/20 hover:bg-ink/40'}`}
              aria-label={`Go to position ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
