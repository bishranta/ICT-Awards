import { STATS } from '@/data/stats'
import CounterStat from '@/components/ui/CounterStat'

export default function StatsSection() {
  return (
    <section className="bg-surface-muted border-y border-border-subtle">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-10">
          <p className="text-spectrum-a text-xs uppercase tracking-widest font-bold">ICT Award 2016–2025</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-balance text-ink mt-1">10 Years of Impact</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-border-light">
          {STATS.map((stat) => (
            <CounterStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
