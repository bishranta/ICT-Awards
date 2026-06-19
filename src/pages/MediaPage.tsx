import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Television, VideoCamera } from '@phosphor-icons/react'
import { TV_EPISODES, GRAND_FINALES } from '@/data/media'
import YoutubeEmbed from '@/components/ui/YoutubeEmbed'
import SectionHeading from '@/components/ui/SectionHeading'
import clsx from 'clsx'

type Tab = 'tv-shows' | 'grand-finale'
const TV_YEARS = [2025, 2024, 2023, 2022]

export default function MediaPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeTab = (searchParams.get('tab') as Tab) ?? 'tv-shows'
  const [tvYear, setTvYear] = useState(2025)

  const setTab = (tab: Tab) => setSearchParams({ tab })
  const episodes = TV_EPISODES.filter(e => e.year === tvYear)

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-surface section-padding text-center">
        <div className="container-max">
          <div className="w-12 h-1 bg-gold rounded-full mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-black text-ink">
            Media & <span className="text-spectrum-a">Videos</span>
          </h1>
          <p className="mt-4 text-ink/80 max-w-xl mx-auto">
            Watch ICT Award TV shows, grand finale broadcasts, and recap videos from past editions.
          </p>
        </div>
      </section>

      {/* Tab Nav */}
      <div className="bg-surface-muted border-b border-border-subtle sticky top-16 lg:top-20 z-30">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-3">
            {(['tv-shows', 'grand-finale'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setTab(tab)}
                className={clsx(
                  'flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all',
                  activeTab === tab ? 'bg-gold text-ink' : 'text-ink/80 hover:text-spectrum-a hover:bg-gold/10'
                )}
              >
                {tab === 'tv-shows'
                  ? <><Television size={16} /> TV Shows</>
                  : <><VideoCamera size={16} /> Grand Finale</>
                }
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* TV Shows */}
      {activeTab === 'tv-shows' && (
        <section className="bg-surface-alt section-padding">
          <div className="container-max">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <SectionHeading
                title="TV Show Episodes"
                subtitle="ICT Award's annual TV series broadcast on national television featuring top finalists."
              />
              <div className="flex gap-2">
                {TV_YEARS.map((y) => (
                  <button
                    key={y}
                    onClick={() => setTvYear(y)}
                    className={clsx(
                      'px-4 py-2 rounded-full text-sm font-bold transition-all',
                      tvYear === y ? 'bg-gold text-ink' : 'border border-gold/30 text-ink hover:bg-gold/10'
                    )}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            {episodes.length > 0 && (
              <p className="text-ink/70 text-sm mb-6">
                Season {tvYear} · Broadcasted on {episodes[0].channel}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {episodes.map((ep) => (
                <div key={ep.id} className="bg-surface rounded-xl overflow-hidden border border-border-subtle hover:border-gold/20 transition-colors">
                  <YoutubeEmbed videoId={ep.youtubeId} title={`ICT Award ${ep.year} Episode ${ep.episodeNumber}`} />
                  <div className="p-4">
                    <div className="text-spectrum-a text-xs font-bold uppercase tracking-wider mb-1">Episode {ep.episodeNumber}</div>
                    <div className="text-ink font-semibold">ICT Award {ep.year} — Episode {ep.episodeNumber}</div>
                    <div className="text-ink/70 text-xs mt-1">{ep.channel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Grand Finale */}
      {activeTab === 'grand-finale' && (
        <section className="bg-surface-alt section-padding">
          <div className="container-max">
            <SectionHeading
              title="Grand Finale Archives"
              subtitle="Full live recordings of ICT Award Grand Finale ceremonies from every edition."
              className="mb-10"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {GRAND_FINALES.map((finale) => (
                <div key={finale.year} className="bg-surface rounded-xl overflow-hidden border border-border-subtle hover:border-gold/20 transition-colors">
                  <YoutubeEmbed videoId={finale.youtubeId} title={`ICT Award ${finale.year} Grand Finale`} />
                  <div className="p-4">
                    <div className="text-spectrum-a text-xs font-bold uppercase tracking-wider mb-1">Grand Finale</div>
                    <div className="text-ink font-semibold">ICT Award {finale.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
