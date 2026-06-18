import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { CATEGORIES, CATEGORY_GROUPS, GROUP_COLOR } from '@/data/categories'
import SectionHeading from '@/components/ui/SectionHeading'

export default function CategoriesPreview() {
  return (
    <section className="bg-cream section-padding">
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            title="Award Categories"
            subtitle="Recognition across 5 tracks covering innovation, individuals, organizations, and regional excellence."
          />
          <Link to="/categories" className="text-gold font-bold hover:text-gold-dark flex items-center gap-2 whitespace-nowrap flex-shrink-0">
            View All Categories
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CATEGORY_GROUPS.map((group) => {
            const cats = CATEGORIES.filter((c) => c.group === group.group)
            const color = GROUP_COLOR[group.group]
            return (
              <Link
                key={group.group}
                to={`/categories#group-${group.group}`}
                className="relative bg-white border border-gray-100 border-t-4 rounded-xl p-6 group transition-all hover:shadow-ink overflow-hidden"
                style={{ borderTopColor: color }}
              >
                {/* Watermark letter */}
                <span
                  className="absolute -right-2 -bottom-4 text-8xl font-black select-none"
                  style={{ color: color + '14' }}
                >
                  {group.group}
                </span>

                <div className="relative">
                  <div className="text-xs uppercase tracking-widest font-bold mb-1" style={{ color }}>
                    Category {group.group}
                  </div>
                  <h3 className="text-ink font-bold text-sm leading-tight mb-3 group-hover:text-gold transition-colors">
                    {group.label}
                  </h3>
                  <ul className="space-y-1">
                    {cats.slice(0, 4).map((c) => (
                      <li key={c.id} className="text-xs text-ink/50 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                        {c.name.replace(' ICT Award 2026', '').replace(' ICT Recognition 2026', '')}
                      </li>
                    ))}
                    {cats.length > 4 && (
                      <li className="text-xs font-semibold mt-1" style={{ color }}>+{cats.length - 4} more</li>
                    )}
                  </ul>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
