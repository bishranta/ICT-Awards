import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { CATEGORIES, CATEGORY_GROUPS, GROUP_COLOR } from '@/data/categories'
import type { CategoryGroup } from '@/types'
import SectionHeading from '@/components/ui/SectionHeading'

function GroupCard({ group: g, className = '' }: { group: typeof CATEGORY_GROUPS[number]; className?: string }) {
  const cats = CATEGORIES.filter((c) => c.group === g.group)
  const color = GROUP_COLOR[g.group as CategoryGroup]
  return (
    <Link
      to={`/categories#group-${g.group}`}
      className={`relative bg-surface border border-border-subtle border-t-4 rounded-xl p-6 group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden h-full flex flex-col ${className}`}
      style={{ borderTopColor: color }}
    >
      {/* ponytail: color overlay avoids dynamic hover:bg-[color] which JIT purges */}
      <span
        className="absolute -top-1 right-0 bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      <div className="relative z-10 flex flex-col flex-1">
        <h3 className="text-ink font-bold text-lg leading-tight mb-3 group-hover:text-cream transition-colors duration-300">
          {g.label}
        </h3>
        <ul className="space-y-1 flex-1">
          {cats.map((c) => (
            <li key={c.id} className="text-sm text-ink group-hover:text-cream/80 flex items-center gap-1.5 transition-colors duration-300">
              <span className="w-1 h-1 rounded-full flex-shrink-0 bg-ink/40 group-hover:bg-white/40 transition-colors duration-300" />
              {c.name}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center gap-1 -translate-x-1 group-hover:translate-x-0 transition-all duration-300">
          <span className="text-xs font-semibold text-ink/50 group-hover:text-cream transition-colors duration-300">Explore</span>
          <ArrowRight size={12} className="text-ink/50 group-hover:text-cream transition-colors duration-300" />
        </div>
      </div>
    </Link>
  )
}

export default function CategoriesPreview() {
  return (
    <section className="bg-cream section-padding">
      <div className="container-max">
        <div className="relative mb-10">
          <SectionHeading
            title="Award Categories"
            subtitle="Recognition across 5 Categories covering innovation, individuals, organizations, and regional excellence."
            centered
          />
          <Link to="/categories" className="mt-4 flex justify-center text-spectrum-a font-bold hover:text-ink items-center gap-2 whitespace-nowrap md:mt-0 md:absolute md:top-0 md:right-0">
            View All Categories
            <ArrowRight size={16} className="icon-spectrum" />
          </Link>
        </div>

        {/* Both rows share a 6-col track so card widths are identical (each card = 2/6 = ⅓).
            Row 2 (D, E) starts at col 2, leaving a gap on each side to center the pair. */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
            {CATEGORY_GROUPS.slice(0, 3).map((g) => (
              <GroupCard key={g.group} group={g} className="sm:col-span-2" />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
            {CATEGORY_GROUPS.slice(3).map((g, i) => (
              <GroupCard key={g.group} group={g} className={`sm:col-span-2${i === 0 ? ' sm:col-start-2' : ''}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
