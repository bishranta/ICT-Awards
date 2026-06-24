import { HISTORY } from '@/data/history'
import SectionHeading from '@/components/ui/SectionHeading'
import clsx from 'clsx'

export default function HistoryPage() {
  return (
    <div>
      <SectionHeading
        title="ICT Award History"
        subtitle="A decade of evolution — from a single ceremony to Nepal's most comprehensive tech recognition."
        className="mb-10"
      />

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gold/20 hidden md:block" />
        <div className="space-y-6">
          {HISTORY.map((entry, idx) => (
            <div key={entry.year} className="flex gap-6 group">
              <div className="relative flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-surface border-2 border-gold/40 group-hover:border-gold flex items-center justify-center transition-colors z-10">
                  <span className="text-spectrum-a font-black text-xs">{entry.year}</span>
                </div>
              </div>
              <div className={clsx(
                'flex-1 rounded-xl p-5 border transition-colors',
                idx % 2 === 0
                  ? 'bg-surface-alt border-border-subtle hover:border-gold/20'
                  : 'bg-surface border-border-subtle hover:border-gold/20'
              )}>
                {entry.milestone && (
                  <span className="inline-block bg-gold/10 text-ink text-xs font-bold px-2 py-0.5 rounded-full mb-2">
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
  )
}
