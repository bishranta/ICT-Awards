import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { CalendarBlank, CheckCircle } from '@phosphor-icons/react'
import { ICT_2026_TIMELINE } from '@/data/timeline'
import SectionHeading from '@/components/ui/SectionHeading'
import clsx from 'clsx'

export default function TimelineSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  // Respect prefers-reduced-motion: skip all transitions/ripple when set.
  const [reducedMotion, setReducedMotion] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // A node / label is "visible" either when in view or when reduced motion is on
  // (so content is always present, not gated behind a transition that may never fire).
  const revealed = inView || reducedMotion

  return (
    <section className="bg-surface section-padding">
      <div className="container-max">
        <SectionHeading
          title="ICT Award 2026 Timeline"
          subtitle="Key milestones for the 11th edition of Nepal's most prestigious tech award."
          centered
          className="mb-10"
        />

        <div ref={ref} className="relative">
          {/* Animated track (desktop only) */}
          <div className="hidden md:block absolute top-[18px] left-0 right-0 h-px overflow-hidden">
            {/* Background rail */}
            <div className="absolute inset-0 bg-border-light" />
            {/* Animating fill — draws left-to-right on reveal */}
            <div
              className="absolute inset-y-0 left-0 right-0 bg-border-light origin-left"
              style={{
                transform: revealed ? 'scaleX(1)' : 'scaleX(0)',
                transition: reducedMotion ? 'none' : 'transform 1s ease-out 200ms',
              }}
            />
            {/* Short gold progress segment — first 1/6 (one milestone dot) */}
            <div
              className="absolute inset-y-0 left-0 bg-gold origin-left"
              style={{
                width: '8.5%',
                transform: revealed ? 'scaleX(1)' : 'scaleX(0)',
                transition: reducedMotion ? 'none' : 'transform 0.5s ease-out 700ms',
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {ICT_2026_TIMELINE.map((event, idx) => {
              const isHighlight = !!event.highlight
              const nodeDelay = reducedMotion ? 0 : 350 + idx * 120
              const labelDelay = reducedMotion ? 0 : 480 + idx * 120

              return (
                <div key={idx} className="relative flex flex-col items-center text-center">
                  {/* Icon node with spring-scale entrance */}
                  <div className="relative mb-4 flex-shrink-0">
                    <div
                      className={clsx(
                        'relative z-10 w-9 h-9 rounded-full border-2 flex items-center justify-center',
                        isHighlight
                          ? 'bg-gold border-gold shadow-gold-sm'
                          : 'bg-surface border-border-strong'
                      )}
                      style={{
                        transform: revealed ? 'scale(1)' : 'scale(0.2)',
                        opacity: revealed ? 1 : 0,
                        transition: reducedMotion
                          ? 'none'
                          : `transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${nodeDelay}ms, opacity 0.3s ease-out ${nodeDelay}ms`,
                      }}
                    >
                      {isHighlight ? (
                        <CheckCircle
                          size={18}
                          weight="fill"
                          className="text-ink"
                        />
                      ) : (
                        <CalendarBlank
                          size={15}
                          weight="regular"
                          className="text-ink/40"
                        />
                      )}
                    </div>

                    {/* Ripple rings — milestone nodes only, when visible and motion allowed */}
                    {isHighlight && revealed && !reducedMotion && (
                      <>
                        <span
                          className="animate-ripple absolute inset-0 rounded-full bg-gold/40 z-0"
                          style={{ animationDelay: '0.8s' }}
                        />
                        <span
                          className="animate-ripple absolute inset-0 rounded-full bg-gold/25 z-0"
                          style={{ animationDelay: '1.4s' }}
                        />
                      </>
                    )}
                  </div>

                  {/* Card with staggered fade + slide */}
                  <div
                    className={clsx(
                      'rounded-xl p-4 w-full',
                      isHighlight
                        ? 'bg-gold/10 border border-gold/40'
                        : 'bg-surface-alt border border-border-subtle'
                    )}
                    style={{
                      transform: revealed ? 'translateY(0)' : 'translateY(10px)',
                      opacity: revealed ? 1 : 0,
                      transition: reducedMotion
                        ? 'none'
                        : `transform 0.45s ease-out ${labelDelay}ms, opacity 0.35s ease-out ${labelDelay}ms`,
                    }}
                  >
                    <div
                      className={clsx(
                        'text-xs font-bold uppercase tracking-widest mb-1',
                        isHighlight ? 'text-spectrum-a' : 'text-ink/80'
                      )}
                    >
                      {event.date}
                    </div>
                    <div
                      className={clsx(
                        'text-sm',
                        isHighlight ? 'font-bold text-spectrum-a' : 'font-medium text-ink'
                      )}
                    >
                      {event.label}
                    </div>
                    {event.description && (
                      <p className="mt-1 text-xs text-ink/60">{event.description}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
