import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Trophy } from '@phosphor-icons/react'
import { WINNERS, WINNER_YEARS, getWinnersByYear } from '@/data/winners'
import clsx from 'clsx'

const PROVINCES = ['Koshi', 'Madhesh', 'Bagmati', 'Gandaki', 'Lumbini', 'Karnali', 'Sudurpaschim']

export default function WinnersPage() {
  const { year: yearParam } = useParams()
  const defaultYear = yearParam ? parseInt(yearParam) : 2025
  const [activeYear, setActiveYear] = useState(defaultYear)

  const allWinners = getWinnersByYear(activeYear)
  const mainWinners = allWinners.filter(w => !w.isProvince)
  const provinceWinners = allWinners.filter(w => w.isProvince)

  const totalWinners = WINNERS.length

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-white section-padding text-center">
        <div className="container-max">
          <div className="w-12 h-1 bg-gold rounded-full mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-black text-ink">
            Award <span className="text-gold">Winners</span>
          </h1>
          <p className="mt-4 text-ink/60 max-w-xl mx-auto">
            Celebrating {totalWinners}+ outstanding achievers across 10 editions of ICT Award Nepal.
          </p>
        </div>
      </section>

      {/* Year Selector */}
      <section className="bg-surface-muted sticky top-16 lg:top-20 z-30 border-b border-gray-100">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
            {WINNER_YEARS.map((y) => (
              <button
                key={y}
                onClick={() => setActiveYear(y)}
                className={clsx(
                  'flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all',
                  activeYear === y
                    ? 'bg-gold text-ink shadow-gold-sm'
                    : 'text-ink/60 hover:text-gold hover:bg-gold/10'
                )}
              >
                {y}
                {y === 2025 && <span className="ml-1 text-xs opacity-70">10th</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Winners Grid */}
      <section className="bg-surface-alt section-padding">
        <div className="container-max">
          {mainWinners.length === 0 ? (
            <p className="text-ink/40 text-center py-16">No winners data available for {activeYear}.</p>
          ) : (
            <>
              <h2 className="text-xl font-black text-ink mb-6">
                ICT Award <span className="text-gold">{activeYear}</span> — {mainWinners.length} Winners
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {mainWinners.map((w, idx) => (
                  <div key={idx} className="gold-border-card group">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                        <Trophy size={18} className="text-gold" weight="fill" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-gold text-xs font-bold uppercase tracking-wider mb-1 leading-tight">
                          {w.categoryName}
                        </div>
                        <div className="text-ink font-bold leading-snug">{w.winnerName}</div>
                        {w.organization && (
                          <div className="text-ink/50 text-xs mt-1">{w.organization}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Province Winners */}
              {provinceWinners.length > 0 && (
                <>
                  <h2 className="text-xl font-black text-ink mb-6">
                    Province Startup ICT Recognition <span className="text-gold">{activeYear}</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {PROVINCES.map((prov) => {
                      const pw = provinceWinners.find(w => w.province === prov)
                      return (
                        <div
                          key={prov}
                          className={clsx(
                            'rounded-xl p-4 border',
                            pw
                              ? 'bg-white border-gold/20 hover:border-gold/40 transition-colors'
                              : 'bg-white border-gray-100 opacity-50'
                          )}
                        >
                          <div className="text-xs text-gold/70 font-bold uppercase tracking-wider mb-1">{prov} Province</div>
                          {pw ? (
                            <div className="text-ink font-bold text-sm">{pw.winnerName}</div>
                          ) : (
                            <div className="text-ink/30 text-sm">—</div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}
