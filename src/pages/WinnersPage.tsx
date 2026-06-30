import { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CaretDown, FunnelSimple, CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react'
import {
  WINNERS,
  WINNER_YEARS,
  WINNER_CATEGORIES,
  getWinnersByYear,
  getWinnersByCategory,
} from '@/data/winners'
import WinnerCard from '@/components/winners/WinnerCard'
import clsx from 'clsx'

const PROVINCES = ['Koshi', 'Madhesh', 'Bagmati', 'Gandaki', 'Lumbini', 'Karnali', 'Sudurpaschim']

type View = 'year' | 'category'

export default function WinnersPage() {
  const { year: yearParam } = useParams()
  const defaultYear = yearParam ? (parseInt(yearParam) || 2025) : 2025

  const [view, setView] = useState<View>('year')
  const [sortOpen, setSortOpen] = useState(false)
  const sortRef = useRef<HTMLDivElement>(null)
  const [activeYear, setActiveYear] = useState(defaultYear)

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) setSortOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])
  const [activeCategoryId, setActiveCategoryId] = useState(
    WINNER_CATEGORIES[0]?.id ?? 'startup-award'
  )
  const categoryScrollRef = useRef<HTMLDivElement>(null)
  const scroll = (dir: 'left' | 'right') => {
    categoryScrollRef.current?.scrollBy({ left: dir === 'left' ? -500 : 500, behavior: 'smooth' })
  }

  const totalWinners = WINNERS.length

  // ── By Year data ──────────────────────────────────────────────────────────
  const allWinners = getWinnersByYear(activeYear)
  const mainWinners = allWinners.filter(w => !w.isProvince)
  const provinceWinners = allWinners.filter(w => w.isProvince)

  // ── By Category data ──────────────────────────────────────────────────────
  const categoryWinners = getWinnersByCategory(activeCategoryId)
  const activeCategoryName =
    WINNER_CATEGORIES.find(c => c.id === activeCategoryId)?.name ?? activeCategoryId

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-surface section-padding text-center">
        <div className="container-max">
          <div className="w-12 h-1 bg-gold rounded-full mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-black text-ink">
            Award <span className="text-spectrum-a">Winners</span>
          </h1>
          <p className="mt-4 text-ink/80 max-w-xl mx-auto">
            Celebrating {totalWinners}+ outstanding achievers across 10 editions of ICT Award Nepal.
          </p>
        </div>
      </section>

      {/* Sort by dropdown */}
      <section className="bg-surface border-b border-border-subtle">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3" ref={sortRef}>
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold border border-border-subtle hover:border-gold/40 transition-colors text-ink/70"
            >
              <FunnelSimple size={14} />
              Sort by: {view === 'year' ? 'Year' : 'Category'}
              <CaretDown size={12} className={clsx('transition-transform duration-150', sortOpen && 'rotate-180')} />
            </button>

            {sortOpen && (
              <div className="flex gap-1">
                {(['year', 'category'] as View[]).map(v => (
                  <button
                    key={v}
                    onClick={() => { setView(v); setSortOpen(false) }}
                    className={clsx(
                      'px-5 py-2 rounded-full text-sm font-bold transition-all',
                      view === v
                        ? 'bg-gold text-ink shadow-gold-sm'
                        : 'text-ink/70 hover:text-spectrum-a hover:bg-gold/10'
                    )}
                  >
                    {v === 'year' ? 'By Year' : 'By Category'}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── BY YEAR VIEW ──────────────────────────────────────────────────── */}
      {view === 'year' && (
        <>
          {/* Year Selector */}
          <section className="bg-surface-muted sticky top-16 lg:top-20 z-30 border-b border-border-subtle">
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
                        : 'text-ink/80 hover:text-spectrum-a hover:bg-gold/10'
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
                <p className="text-ink/70 text-center py-16">
                  No winners data available for {activeYear}.
                </p>
              ) : (
                <>
                  <h2 className="text-xl font-black text-ink mb-6">
                    ICT Award <span className="text-spectrum-a">{activeYear}</span>{' '}
                    — {mainWinners.length} Winners
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {mainWinners.map((w) => (
                      <WinnerCard key={`${w.year}-${w.categoryId}-${w.winnerName}`} winner={w} />
                    ))}
                  </div>

                  {/* Province Winners */}
                  {provinceWinners.length > 0 && (
                    <>
                      <h2 className="text-xl font-black text-ink mb-6">
                        Province Startup ICT Recognition{' '}
                        <span className="text-spectrum-a">{activeYear}</span>
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {PROVINCES.map((prov) => {
                          const pw = provinceWinners.find(w => w.province === prov)
                          return (
                            <div
                              key={prov}
                              className={clsx(
                                'rounded-xl p-4 border',
                                pw
                                  ? 'bg-surface border-gold/20 hover:border-gold/40 transition-colors'
                                  : 'bg-surface border-border-subtle opacity-50'
                              )}
                            >
                              <div className="text-xs text-spectrum-a font-bold uppercase tracking-wider mb-1">
                                {prov} Province
                              </div>
                              {pw ? (
                                <div className="text-ink font-bold text-sm">{pw.winnerName}</div>
                              ) : (
                                <div className="text-ink/65 text-sm">—</div>
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
        </>
      )}

      {/* ── BY CATEGORY VIEW ──────────────────────────────────────────────── */}
      {view === 'category' && (
        <>
          {/* Category Selector */}
          <section className="bg-surface-muted sticky top-16 lg:top-20 z-30 border-b border-border-subtle">
            <div className="container-max px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => scroll('left')}
                  className="flex-shrink-0 p-1.5 rounded-full text-ink/40 hover:text-ink hover:bg-gold/10 transition-colors"
                >
                  <CaretLeftIcon size={16} weight="bold" />
                </button>
                <div ref={categoryScrollRef} className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none flex-1">
                  {WINNER_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategoryId(cat.id)}
                      className={clsx(
                        'flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap',
                        activeCategoryId === cat.id
                          ? 'bg-gold text-ink shadow-gold-sm'
                          : 'text-ink/80 hover:text-spectrum-a hover:bg-gold/10'
                      )}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => scroll('right')}
                  className="flex-shrink-0 p-1.5 rounded-full text-ink/40 hover:text-ink hover:bg-gold/10 transition-colors"
                >
                  <CaretRightIcon size={16} weight="bold" />
                </button>
              </div>
            </div>
          </section>

          {/* Category Winners Grid */}
          <section className="bg-surface-alt section-padding">
            <div className="container-max">
              {categoryWinners.length === 0 ? (
                <p className="text-ink/70 text-center py-16">
                  No winners data available for this category.
                </p>
              ) : (
                <>
                  <h2 className="text-xl font-black text-ink mb-2">
                    <span className="text-spectrum-a">{activeCategoryName}</span>
                  </h2>
                  <p className="text-ink/65 text-sm mb-6">
                    {categoryWinners.length} winner{categoryWinners.length !== 1 ? 's' : ''} across all editions
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryWinners.map((w) => (
                      <WinnerCard key={`${w.year}-${w.categoryId}-${w.winnerName}`} winner={w} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  )
}
