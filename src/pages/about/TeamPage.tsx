import { TEAM } from '@/data/team'
import SectionHeading from '@/components/ui/SectionHeading'

export default function TeamPage() {
  return (
    <div>
      <SectionHeading
        title="Our Team"
        subtitle="The dedicated professionals behind the ICT Award."
        className="mb-10"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {TEAM.map((member) => (
          <div
            key={member.name}
            className="flex items-center gap-4 p-4 rounded-xl border border-border-subtle bg-surface hover:border-gold/30 transition-colors"
          >
            {/* Avatar placeholder */}
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
              <span className="text-ink font-bold text-sm">
                {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
              </span>
            </div>
            <div>
              <div className="font-bold text-ink text-sm">{member.name}</div>
              <div className="text-ink/60 text-xs mt-0.5">{member.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
