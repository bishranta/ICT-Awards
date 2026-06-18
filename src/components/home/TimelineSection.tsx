import { ICT_2026_TIMELINE } from '@/data/timeline'
import SectionHeading from '@/components/ui/SectionHeading'
import clsx from 'clsx'

export default function TimelineSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        <SectionHeading
          title="ICT Award 2026 Timeline"
          subtitle="Key milestones for the 11th edition of Nepal's most prestigious tech award."
          centered
          className="mb-12"
        />

        <div className="relative">
          {/* Horizontal line (desktop) */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gray-200" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {ICT_2026_TIMELINE.map((event, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center">
                {/* Dot */}
                <div
                  className={clsx(
                    'relative z-10 w-4 h-4 rounded-full border-2 mb-4 flex-shrink-0',
                    event.highlight
                      ? 'bg-gold border-gold shadow-gold-sm'
                      : 'bg-white border-gray-300'
                  )}
                />
                {/* Content */}
                <div
                  className={clsx(
                    'rounded-xl p-4 w-full',
                    event.highlight ? 'bg-gold/10 border border-gold/40' : 'bg-surface-alt border border-gray-100'
                  )}
                >
                  <div className={clsx('text-xs font-bold uppercase tracking-widest mb-1', event.highlight ? 'text-gold' : 'text-ink/50')}>
                    {event.date}
                  </div>
                  <div className={clsx('font-bold text-sm', event.highlight ? 'text-gold' : 'text-ink')}>
                    {event.label}
                  </div>
                  {event.description && (
                    <p className="mt-1 text-xs text-ink/50">{event.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
