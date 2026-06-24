import { Image as ImageIcon } from '@phosphor-icons/react'
import { HISTORY } from '@/data/history'
import type { HistoryCard } from '@/types'
import SectionHeading from '@/components/ui/SectionHeading'
import clsx from 'clsx'

// Placeholder shown until a real image URL is added to the card
function CardImage({ src, year }: { src?: string; year: number }) {
  if (src) {
    return (
      <img
        src={src}
        alt={`ICT Award ${year}`}
        className="w-full aspect-video object-cover rounded-xl"
      />
    )
  }
  return (
    // ponytail: placeholder until real images land in history data
    <div className="w-full aspect-video rounded-xl bg-surface-muted border border-border-subtle flex flex-col items-center justify-center gap-2">
      <ImageIcon size={28} className="text-ink/20" />
      <span className="text-ink/25 text-xs font-medium tracking-wide">ICT Award {year}</span>
    </div>
  )
}

function HistoryCardBlock({ card, year }: { card: HistoryCard; year: number }) {
  return (
    <div className="rounded-xl border border-border-subtle bg-surface overflow-hidden hover:border-gold/30 transition-colors">
      <CardImage src={card.image} year={year} />
      <div className="p-5">
        {card.milestone && (
          <span className="inline-block bg-gold/10 text-ink text-xs font-bold px-3 py-1 rounded-full mb-3">
            {card.milestone}
          </span>
        )}
        <p className="text-ink/70 text-sm leading-relaxed">{card.description}</p>
      </div>
    </div>
  )
}

export default function HistoryPage() {
  return (
    <div>
      <SectionHeading
        title="ICT Award History"
        subtitle="A decade of evolution — from a single ceremony to Nepal's most comprehensive tech recognition."
        className="mb-16"
      />

      {/* ── DESKTOP: center-rail zig-zag ──────────────────────────────────── */}
      <div className="hidden md:block relative">
        {/* Central vertical rail */}
        <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-gold/10 via-gold/30 to-gold/10" />

        <div className="space-y-0">
          {HISTORY.map((entry, idx) => {
            const isLeft = idx % 2 === 0  // cards on left for even, right for odd
            return (
              <div key={entry.year} className="relative grid grid-cols-[1fr_auto_1fr] items-start py-12">

                {/* Left column */}
                <div className={clsx('pr-12', !isLeft && 'col-start-1')} >
                  {isLeft && (
                    <div className="space-y-6">
                      {/* Year anchor */}
                      <div className="text-right">
                        <div className="text-5xl font-black text-ink leading-none">{entry.year}</div>
                        <div className="mt-2 ml-auto h-1 w-10 rounded-full bg-spectrum-gradient" />
                      </div>
                      {/* Cards */}
                      {entry.cards.map((card, ci) => (
                        <HistoryCardBlock key={ci} card={card} year={entry.year} />
                      ))}
                    </div>
                  )}
                </div>

                {/* Center: dot node on rail */}
                <div className="flex items-start justify-center w-8 pt-3 z-10">
                  <div className="w-3 h-3 rounded-full bg-surface border-2 border-gold/50 flex-shrink-0" />
                </div>

                {/* Right column */}
                <div className="pl-12">
                  {!isLeft && (
                    <div className="space-y-6">
                      {/* Year anchor */}
                      <div>
                        <div className="text-5xl font-black text-ink leading-none">{entry.year}</div>
                        <div className="mt-2 h-1 w-10 rounded-full bg-spectrum-gradient" />
                      </div>
                      {/* Cards */}
                      {entry.cards.map((card, ci) => (
                        <HistoryCardBlock key={ci} card={card} year={entry.year} />
                      ))}
                    </div>
                  )}
                </div>

              </div>
            )
          })}
        </div>
      </div>

      {/* ── MOBILE: single left-rail stack ────────────────────────────────── */}
      <div className="md:hidden space-y-10">
        {HISTORY.map((entry) => (
          <div key={entry.year} className="flex gap-5">
            {/* Left rail */}
            <div className="flex flex-col items-center flex-shrink-0 pt-1">
              <div className="w-px flex-1 bg-gold/20" />
              <div className="w-2.5 h-2.5 rounded-full border-2 border-gold/50 bg-surface my-1 flex-shrink-0" />
              <div className="w-px flex-1 bg-gold/20" />
            </div>

            {/* Content */}
            <div className="flex-1 pb-2">
              <div className="mb-4">
                <div className="text-3xl font-black text-ink leading-none">{entry.year}</div>
                <div className="mt-1.5 h-0.5 w-8 rounded-full bg-spectrum-gradient" />
              </div>
              <div className="space-y-4">
                {entry.cards.map((card, ci) => (
                  <HistoryCardBlock key={ci} card={card} year={entry.year} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
