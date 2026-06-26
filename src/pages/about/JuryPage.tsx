import { JURY_2025 } from '@/data/jury'
import SectionHeading from '@/components/ui/SectionHeading'
import PersonCard from '@/components/ui/PersonCard'

export default function JuryPage() {
  return (
    <div>
      <SectionHeading
        title="Jury Members"
        subtitle="ICT Award 2025 jury panel — 2026 list will be updated before nominations open."
        className="mb-8"
      />

      <div className="mb-8 px-4 py-3 rounded-lg bg-gold/10 border border-gold/20 text-sm text-ink/70">
        <span className="font-semibold text-ink">Note:</span> Jury lists for ICT Award 2026 will be updated very soon.
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {JURY_2025.map(member => (
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
  )
}
