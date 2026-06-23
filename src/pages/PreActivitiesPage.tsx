import { PRE_ACTIVITIES } from '@/data/preActivities'
import { RenderIcon } from '@/lib/renderIcon'
import SectionHeading from '@/components/ui/SectionHeading'

export default function PreActivitiesPage() {
  const preEvents = PRE_ACTIVITIES.filter(a => a.category === 'pre-event')
  const otherActivities = PRE_ACTIVITIES.filter(a => a.category === 'other')

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-surface section-padding text-center">
        <div className="container-max">
          <div className="w-12 h-1 bg-gold rounded-full mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-black text-ink">
            Pre-Award <span className="text-spectrum-a">Activities</span>
          </h1>
          <p className="mt-4 text-ink/80 max-w-2xl mx-auto">
            A rich ecosystem of events, mentoring, and outreach that runs alongside the award selection process, nurturing Nepal's ICT talent year-round.
          </p>
        </div>
      </section>

      {/* Pre-Events */}
      <section className="bg-surface-alt section-padding">
        <div className="container-max">
          <SectionHeading
            title="Pre-Events"
            subtitle="Structured events designed to identify, nurture, and showcase Nepal's best ICT talent."
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {preEvents.map((activity) => (
              <div key={activity.id} className="gold-border-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <RenderIcon name={activity.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="text-ink font-bold text-xl mb-2">{activity.title}</h3>
                    <p className="text-ink/80 leading-relaxed">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Activities */}
      <section className="bg-surface section-padding">
        <div className="container-max">
          <SectionHeading
            title="Other Activities"
            subtitle="Broadening the reach of ICT Award through media, community engagement, and regional outreach."
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherActivities.map((activity) => (
              <div key={activity.id} className="bg-surface-alt border border-border-subtle hover:border-gold/30 rounded-xl p-6 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <RenderIcon name={activity.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="text-ink font-bold text-xl mb-2">{activity.title}</h3>
                    <p className="text-ink/80 leading-relaxed">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
