import { Link } from 'react-router-dom'
import { Trophy, ArrowRight } from '@phosphor-icons/react'
import { getWinnersByYear } from '@/data/winners'
import SectionHeading from '@/components/ui/SectionHeading'

export default function RecentWinnersSection() {
  const winners2025 = getWinnersByYear(2025).filter(w => !w.isProvince).slice(0, 6)

  return (
    <section className="bg-surface-alt section-padding">
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            title="ICT Award 2025 Winners"
            subtitle="Celebrating Nepal's most outstanding tech achievers from our 10th anniversary edition."
          />
          <Link to="/winners/2025" className="text-spectrum-a font-bold hover:text-ink flex items-center gap-2 whitespace-nowrap flex-shrink-0">
            All Winners
            <ArrowRight size={16} className="icon-spectrum" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {winners2025.map((w, idx) => (
            <div
              key={idx}
              className="bg-surface border border-border-subtle hover:border-gold/30 rounded-xl p-5 group transition-all hover:shadow-gold"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Trophy size={18} className="icon-spectrum" weight="fill" />
                </div>
                <div>
                  <div className="text-spectrum-a text-xs font-bold uppercase tracking-wider mb-1">
                    {w.categoryName}
                  </div>
                  <div className="text-ink font-bold leading-tight">{w.winnerName}</div>
                  {w.organization && (
                    <div className="text-ink/80 text-xs mt-0.5">{w.organization}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
