import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { PRE_ACTIVITIES } from '@/data/preActivities'
import { RenderIcon } from '@/lib/renderIcon'
import SectionHeading from '@/components/ui/SectionHeading'

export default function PreEventsSection() {
  const featured = PRE_ACTIVITIES.slice(0, 4)

  return (
    <section className="bg-cream section-padding">
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            title="Pre-Award Activities"
            subtitle="An ecosystem of events, mentoring, and outreach that runs alongside the award selection process."
          />
          <Link to="/pre-activities" className="text-gold font-bold hover:text-gold-dark flex items-center gap-2 whitespace-nowrap flex-shrink-0">
            More Pre-Events
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((activity) => (
            <div key={activity.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-gold/30 transition-all group">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-3">
                <RenderIcon name={activity.icon} size={20} className="text-gold" />
              </div>
              <h3 className="font-bold text-ink text-lg mb-2 group-hover:text-gold transition-colors">
                {activity.title}
              </h3>
              <p className="text-ink/60 text-sm leading-relaxed">
                {activity.description.slice(0, 100)}…
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
