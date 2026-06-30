import { Link } from 'react-router-dom'
import { CATEGORIES, CATEGORY_GROUPS, GROUP_COLOR } from '@/data/categories'
import { RenderIcon } from '@/lib/renderIcon'
import SectionHeading from '@/components/ui/SectionHeading'
import clsx from 'clsx'

export default function CategoriesPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-surface section-padding text-center">
        <div className="container-max">
          <div className="w-12 h-1 bg-spectrum-gradient rounded-full mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-black text-ink">
            Award <span className="text-gradient-spectrum">Categories</span>
          </h1>
          <p className="mt-4 text-lg text-ink/80 max-w-2xl mx-auto">
            ICT Award 2026 recognizes excellence across 5 tracks and 16 distinct award categories covering Nepal's entire tech ecosystem.
          </p>
        </div>
      </section>

      {/* Category Groups */}
      {CATEGORY_GROUPS.map((group, gIdx) => {
        const cats = CATEGORIES.filter((c) => c.group === group.group)
        const color = GROUP_COLOR[group.group]
        return (
          <section
            key={group.group}
            id={`group-${group.group}`}
            className={clsx('section-padding', gIdx % 2 === 0 ? 'bg-cream' : 'bg-surface')}
          >
            <div className="container-max">
              {/* Group Header */}
              <div className="flex items-start gap-6 mb-10">
                <div
                  className="w-16 h-16 flex-shrink-0 rounded-xl border flex items-center justify-center"
                  style={{ backgroundColor: color + '1A', borderColor: color + '33', color }}
                >
                  <span className="text-3xl font-black">{group.group}</span>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color }}>Category {group.group}</div>
                  <SectionHeading title={group.label} className="mb-2" />
                  <p className="text-ink/80 max-w-2xl">{group.description}</p>
                </div>
              </div>

              {/* Category Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {cats.map((cat) => (
                  <div
                    key={cat.id}
                    className="gold-border-card spectrum-card group h-full"
                    style={{ '--group-color': color } as React.CSSProperties}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: color + '1A', color }}
                      >
                        <RenderIcon name={cat.icon ?? 'Star'} size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="spectrum-card-heading font-bold text-ink text-lg leading-tight mb-2 transition-colors duration-200">
                          {cat.name}
                        </h3>
                        <p className="text-ink/80 text-sm leading-relaxed mb-3 desc-scroll-5 scrollbar-subtle pr-2">
                          {cat.description}
                        </p>
                        {cat.eligibility && (
                          <div className="bg-surface-alt rounded-lg p-3 border border-border-subtle">
                            <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color }}>Eligibility</div>
                            <p className="text-ink/80 text-xs leading-relaxed">{cat.eligibility}</p>
                          </div>
                        )}
                        {cat.previousWinner && (
                          <p className="text-ink/60 text-xs leading-relaxed mt-3">{cat.previousWinner}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Apply CTA */}
      <section className="bg-gold section-padding text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-black text-ink mb-4">Ready to Apply?</h2>
          <p className="text-ink/70 mb-8 max-w-xl mx-auto">
            Nominations open July 17, 2026. Applications are free — apply to any category you qualify for.
          </p>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 bg-ink text-white font-black px-8 py-4 rounded-full text-lg hover:bg-ink/80 transition-colors"
          >
            Apply for Nominations
          </Link>
        </div>
      </section>
    </div>
  )
}
