import { TEAM } from '@/data/team'
import SectionHeading from '@/components/ui/SectionHeading'
import PersonCard from '@/components/ui/PersonCard'

export default function TeamPage() {
  return (
    <div>
      <SectionHeading
        title="Our Team"
        subtitle="The dedicated professionals behind the ICT Award."
        className="mb-8"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {TEAM.map(member => (
          <PersonCard
            key={member.name}
            name={member.name}
            designation={member.role}
            photo={member.photo}
          />
        ))}
      </div>
    </div>
  )
}
