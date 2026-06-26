import { ADVISOR_GROUPS } from '@/data/jury'
import SectionHeading from '@/components/ui/SectionHeading'
import PersonCard from '@/components/ui/PersonCard'

export default function AdvisorsPage() {
  return (
    <div>
      <SectionHeading
        title="Advisors"
        subtitle="Advisory bodies guiding the ICT Award selection process."
        className="mb-8"
      />

      <div className="mb-8 px-4 py-3 rounded-lg bg-gold/10 border border-gold/20 text-sm text-ink/70">
        <span className="font-semibold text-ink">Note:</span> Advisor lists for ICT Award 2026 will be updated very soon.
      </div>

      <div className="space-y-10">
        {ADVISOR_GROUPS.map(group => (
          <div key={group.title}>
            <h3 className="text-ink font-bold text-base mb-4 pb-2 border-b border-border-subtle">
              {group.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {group.members.map(member => (
                <PersonCard
                  key={member.name}
                  name={member.name}
                  designation={member.designation}
                  organization={member.organization}
                  photo={member.photo}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
