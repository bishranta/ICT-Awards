import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Image as ImageIcon, MapPin, Television, UserCircle } from '@phosphor-icons/react'
import { EDITIONS } from '@/data/editions'
import { WINNERS } from '@/data/winners'
import { GRAND_FINALES } from '@/data/media'
import WinnerCard from '@/components/winners/WinnerCard'
import YoutubeEmbed from '@/components/ui/YoutubeEmbed'
import SectionHeading from '@/components/ui/SectionHeading'

function EditionLogo({ logo, year }: { logo?: string; year: number }) {
  const [err, setErr] = useState(false)
  if (logo && !err) {
    return (
      <div className="flex-shrink-0 w-48 md:w-56 bg-white/5 rounded-2xl border border-white/10 p-5 flex items-center justify-center">
        <img
          src={logo}
          alt={`ICT Award ${year} logo`}
          onError={() => setErr(true)}
          className="max-h-32 max-w-full object-contain"
        />
      </div>
    )
  }
  return null
}

const EDITION_ORDINALS: Record<number, string> = {
  2016: '1st', 2017: '2nd', 2018: '3rd', 2019: '4th', 2020: '5th',
  2021: '6th', 2022: '7th', 2023: '8th', 2024: '9th', 2025: '10th',
}

export default function EditionDetailPage() {
  const { year } = useParams<{ year: string }>()
  const y = parseInt(year ?? '', 10)

  const edition = EDITIONS.find(e => e.year === y)
  if (!edition) return <Navigate to="/editions" replace />

  const winners = WINNERS.filter(w => w.year === y)
  const mainWinners = winners.filter(w => !w.isProvince)
  const provinceWinners = winners.filter(w => w.isProvince)
  const finale = GRAND_FINALES.find(f => f.year === y)
  const ordinal = EDITION_ORDINALS[y] ?? ''

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-ink section-padding relative overflow-hidden">
        <div className="h-1 w-full bg-spectrum-gradient absolute top-0 left-0" />
        <div className="container-max">
          <Link
            to="/editions"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-gold text-sm font-semibold mb-8 transition-colors"
          >
            <ArrowLeft size={15} /> All Editions
          </Link>

          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Edition logo */}
            <EditionLogo logo={edition.logo} year={edition.year} />

            {/* Text block */}
            <div>
              <div className="text-gold text-sm font-bold uppercase tracking-widest mb-2">
                {ordinal} Edition
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
                ICT Award {edition.year}
              </h1>
              {edition.title && (
                <p className="text-white/50 text-lg mb-4">{edition.title}</p>
              )}
              {/* Key details */}
              <div className="flex flex-col gap-2 mt-2">
                {edition.venue && (
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <MapPin size={15} className="text-gold flex-shrink-0" />
                    {edition.venue}
                  </div>
                )}
                {edition.chiefGuest && (
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <UserCircle size={15} className="text-gold flex-shrink-0" />
                    {edition.chiefGuest}
                  </div>
                )}
                {edition.broadcast && (
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <Television size={15} className="text-gold flex-shrink-0" />
                    {edition.broadcast}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="bg-surface section-padding">
        <div className="container-max max-w-3xl">
          {edition.intro.split('\n\n').map((para, i) => (
            <p key={i} className="text-ink/70 leading-relaxed mb-4 last:mb-0">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Photo gallery placeholder */}
      <section className="bg-surface-alt section-padding">
        <div className="container-max">
          <SectionHeading title="Photo Gallery" subtitle={`Highlights from ICT Award ${edition.year}.`} className="mb-8" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              // ponytail: placeholder until real gallery photos are provided
              <div
                key={i}
                className="aspect-video rounded-xl bg-surface-muted border border-border-subtle flex flex-col items-center justify-center gap-2"
              >
                <ImageIcon size={22} className="text-ink/20" />
                <span className="text-ink/20 text-xs">Photo {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grand Finale video */}
      {finale && (
        <section className="bg-surface section-padding">
          <div className="container-max max-w-3xl">
            <SectionHeading
              title="Grand Finale Live"
              subtitle={`Full recording of ICT Award ${edition.year} Grand Finale.`}
              className="mb-8"
            />
            <div className="rounded-xl overflow-hidden border border-border-subtle">
              <YoutubeEmbed videoId={finale.youtubeId} title={`ICT Award ${edition.year} Grand Finale`} />
            </div>
          </div>
        </section>
      )}

      {/* Winners */}
      {mainWinners.length > 0 && (
        <section className="bg-surface-alt section-padding">
          <div className="container-max">
            <SectionHeading
              title={`ICT Award ${edition.year} Winners`}
              subtitle={`Honoring ${mainWinners.length + provinceWinners.length} outstanding achievers across all categories.`}
              className="mb-10"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {mainWinners.map((w, i) => (
                <WinnerCard key={`${w.categoryId}-${i}`} winner={w} />
              ))}
            </div>

            {provinceWinners.length > 0 && (
              <div className="mt-10">
                <h3 className="text-ink font-bold text-lg mb-6">Province Startup ICT Recognition {edition.year}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {provinceWinners.map((w, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-surface rounded-xl border border-border-subtle">
                      <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      <div>
                        <div className="text-ink font-semibold text-sm">{w.winnerName}</div>
                        {w.province && <div className="text-ink/50 text-xs mt-0.5">{w.province}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Prev / Next edition nav */}
      <section className="bg-surface section-padding">
        <div className="container-max flex justify-between gap-4">
          {y > 2016 ? (
            <Link
              to={`/editions/${y - 1}`}
              className="flex items-center gap-2 text-sm font-semibold text-ink/60 hover:text-spectrum-a transition-colors"
            >
              <ArrowLeft size={15} /> ICT Award {y - 1}
            </Link>
          ) : <span />}
          {y < 2025 ? (
            <Link
              to={`/editions/${y + 1}`}
              className="flex items-center gap-2 text-sm font-semibold text-ink/60 hover:text-spectrum-a transition-colors ml-auto"
            >
              ICT Award {y + 1} <ArrowLeft size={15} className="rotate-180" />
            </Link>
          ) : <span />}
        </div>
      </section>
    </div>
  )
}
