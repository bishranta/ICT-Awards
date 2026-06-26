import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  Television, VideoCamera, Newspaper, FileText,
  DownloadSimple, FilmSlate, ArrowSquareOut, Image as ImageIcon,
} from '@phosphor-icons/react'
import { TV_EPISODES, GRAND_FINALES, MEDIA_COVERAGES } from '@/data/media'
import YoutubeEmbed from '@/components/ui/YoutubeEmbed'
import SectionHeading from '@/components/ui/SectionHeading'
import clsx from 'clsx'

type Tab = 'tv-shows' | 'grand-finale' | 'media-coverages' | 'press-notes' | 'downloads' | 'promo-videos'

const TABS: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: 'tv-shows',        label: 'TV Shows',        icon: Television },
  { id: 'grand-finale',    label: 'Grand Finale',    icon: VideoCamera },
  { id: 'media-coverages', label: 'Media Coverages', icon: Newspaper },
  { id: 'press-notes',     label: 'Press Notes',     icon: FileText },
  { id: 'downloads',       label: 'Downloads',       icon: DownloadSimple },
  { id: 'promo-videos',    label: 'Promo Videos',    icon: FilmSlate },
]

const TV_YEARS = [2025, 2024, 2023, 2022]

function ComingSoon({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4">
        <FilmSlate size={28} className="text-ink/30" />
      </div>
      <p className="text-ink font-semibold">{label}</p>
      <p className="text-ink/50 text-sm mt-1">Content will be available soon.</p>
    </div>
  )
}

function CoverageCard({ item }: { item: (typeof MEDIA_COVERAGES)[0] }) {
  const [imgErr, setImgErr] = useState(false)
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-surface rounded-xl border border-border-subtle hover:border-gold/30 hover:shadow-gold-sm transition-all overflow-hidden"
    >
      {item.thumbnail && !imgErr ? (
        <div className="w-full aspect-video bg-surface-muted overflow-hidden">
          <img
            src={item.thumbnail}
            alt={item.outlet}
            onError={() => setImgErr(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="w-full aspect-video bg-surface-muted flex items-center justify-center">
          <ImageIcon size={28} className="text-ink/20" />
        </div>
      )}
      <div className="flex items-start justify-between gap-3 p-4">
        <div className="min-w-0">
          <div className="font-bold text-xs uppercase tracking-wider text-spectrum-a mb-1">{item.outlet}</div>
          {item.title && (
            <p className="text-ink text-sm font-medium leading-snug line-clamp-2">{item.title}</p>
          )}
        </div>
        <ArrowSquareOut size={16} className="text-ink/30 group-hover:text-spectrum-a transition-colors flex-shrink-0 mt-0.5" />
      </div>
    </a>
  )
}

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
            Media & <span className="text-spectrum-a">Coverage</span>
          </h1>
          <p className="mt-4 text-ink/80 max-w-xl mx-auto">
            TV shows, grand finale broadcasts, press coverage, and more from every ICT Award edition.
          </p>
        </div>
      </section>

      {/* Tab Nav */}
      <div className="bg-surface-muted border-b border-border-subtle sticky top-16 lg:top-20 z-30">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-3 overflow-x-auto">
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={clsx(
                  'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all flex-shrink-0',
                  activeTab === id ? 'bg-gold text-ink' : 'text-ink/80 hover:text-spectrum-a hover:bg-gold/10'
                )}
              >
                <Icon size={15} />
                {label}
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
              <div className="flex gap-2 flex-shrink-0">
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

      {/* Media Coverages */}
      {activeTab === 'media-coverages' && (
        <section className="bg-surface-alt section-padding">
          <div className="container-max">
            <SectionHeading
              title="Media Coverages"
              subtitle="Press and online coverage of ICT Award from leading Nepali media outlets."
              className="mb-10"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {MEDIA_COVERAGES.map((item) => (
                <CoverageCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Press Notes */}
      {activeTab === 'press-notes' && (
        <section className="bg-surface-alt section-padding">
          <div className="container-max">
            <SectionHeading title="Press Notes" subtitle="Official press releases and notes from ICT Award." className="mb-10" />
            <ComingSoon label="Press notes coming soon" />
          </div>
        </section>
      )}

      {/* Downloads */}
      {activeTab === 'downloads' && (
        <section className="bg-surface-alt section-padding">
          <div className="container-max">
            <SectionHeading title="Downloads" subtitle="Logos, branding assets, and official documents." className="mb-10" />
            <ComingSoon label="Downloads coming soon" />
          </div>
        </section>
      )}

      {/* Promo Videos */}
      {activeTab === 'promo-videos' && (
        <section className="bg-surface-alt section-padding">
          <div className="container-max">
            <SectionHeading title="Promo Videos" subtitle="Official promotional videos and highlights from ICT Award." className="mb-10" />
            <ComingSoon label="Promo videos coming soon" />
          </div>
        </section>
      )}
    </div>
  )
}
