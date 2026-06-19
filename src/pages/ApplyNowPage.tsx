import { Link } from 'react-router-dom'
import { CATEGORIES, CATEGORY_GROUPS } from '@/data/categories'
import { ICT_2026_TIMELINE } from '@/data/timeline'
import { RenderIcon } from '@/lib/renderIcon'

export default function ApplyNowPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-surface section-padding text-center">
        <div className="container-max max-w-3xl">
          <div className="w-12 h-1 bg-gold rounded-full mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-black text-ink">
            Apply for <span className="text-spectrum-a">ICT Award 2026</span>
          </h1>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed">
            Nominations open <strong className="text-spectrum-a">July 17, 2026</strong>. Applications are completely free — apply to any category you qualify for.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2 text-ink text-sm font-semibold">
            <span className="w-2 h-2 bg-gold rounded-full" />
            Nominations Open: July 17, 2026
          </div>
        </div>
      </section>

      {/* Key Dates */}
      <section className="bg-surface-muted section-padding">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl font-black text-ink mb-6">Key Dates</h2>
          <div className="space-y-3">
            {ICT_2026_TIMELINE.map((event, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-4 p-4 rounded-xl border ${
                  event.highlight ? 'bg-gold/10 border-gold/30' : 'bg-surface border-border-subtle'
                }`}
              >
                <div className={`w-3 h-3 rounded-full flex-shrink-0 ${event.highlight ? 'bg-gold' : 'bg-border-strong'}`} />
                <div className="flex-1">
                  <div className={`font-bold ${event.highlight ? 'text-spectrum-a' : 'text-ink'}`}>{event.label}</div>
                  <div className="text-ink/80 text-sm">{event.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Categories */}
      <section className="bg-surface-alt section-padding">
        <div className="container-max">
          <h2 className="text-2xl font-black text-ink mb-2">Available Categories</h2>
          <p className="text-ink/80 mb-8">Choose the category that best matches your achievement, innovation, or contribution.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CATEGORY_GROUPS.map((group) => {
              const cats = CATEGORIES.filter(c => c.group === group.group)
              return (
                <div key={group.group} className="bg-surface border border-border-subtle rounded-xl p-6">
                  <div className="text-xs text-spectrum-a font-bold uppercase tracking-widest mb-1">Category {group.group}</div>
                  <h3 className="text-ink font-bold text-lg mb-3">{group.label}</h3>
                  <ul className="space-y-1.5">
                    {cats.map(c => (
                      <li key={c.id} className="flex items-center gap-2 text-sm text-ink/80">
                        <RenderIcon name={c.icon ?? 'Star'} size={14} className="text-gold/70 flex-shrink-0" />
                        {c.name.replace(' ICT Award 2026', '').replace(' ICT Recognition 2026', '')}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold section-padding text-center">
        <div className="container-max max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black text-ink mb-4">Ready to Make History?</h2>
          <p className="text-ink/70 mb-2">Nominations open July 17, 2026. Grand Finale: December 18, 2026.</p>
          <p className="text-ink/70 mb-8">Application is <strong>free</strong> for all categories. Previous year applicants are welcome to re-apply.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-ink text-white font-black px-8 py-4 rounded-full text-lg hover:bg-ink/80 transition-colors"
            >
              Start Application (Opens July 17)
            </a>
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 border-2 border-ink text-ink font-bold px-8 py-4 rounded-full text-lg hover:bg-ink hover:text-white transition-colors"
            >
              Browse Categories
            </Link>
          </div>
          <p className="mt-6 text-sm text-ink/80">Have questions? Visit our <Link to="/about#faq" className="underline font-semibold">FAQ page</Link></p>
        </div>
      </section>
    </div>
  )
}
