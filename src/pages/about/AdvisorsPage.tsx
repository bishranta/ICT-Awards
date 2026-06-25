import { ADVISOR_GROUPS } from '@/data/jury'
import SectionHeading from '@/components/ui/SectionHeading'

export default function AdvisorsPage() {
  return (
    <div>
      <SectionHeading
        title="Advisors"
        subtitle="Advisory bodies guiding the ICT Award selection process."
        className="mb-8"
      />

      {/* "2026 coming soon" notice */}
      <div className="mb-8 px-4 py-3 rounded-lg bg-gold/10 border border-gold/20 text-sm text-ink/70">
        <span className="font-semibold text-ink">Note:</span> Advisor lists for ICT Award 2026 will be updated very soon.
      </div>

      <div className="space-y-10">
        {ADVISOR_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="text-ink font-bold text-base mb-4 pb-2 border-b border-border-subtle">
              {group.title}
            </h3>
            <div className="overflow-hidden rounded-xl border border-border-subtle">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt border-b border-border-subtle">
                    <th className="text-left px-4 py-3 font-bold text-ink/70 w-8">#</th>
                    <th className="text-left px-4 py-3 font-bold text-ink/70">Name</th>
                    <th className="text-left px-4 py-3 font-bold text-ink/70 hidden sm:table-cell">Designation</th>
                    <th className="text-left px-4 py-3 font-bold text-ink/70 hidden lg:table-cell">Organization</th>
                  </tr>
                </thead>
                <tbody>
                  {group.members.map((member, i) => (
                    <tr
                      key={member.name}
                      className="border-b border-border-subtle last:border-0 hover:bg-surface-alt transition-colors"
                    >
                      <td className="px-4 py-3 text-ink/40 font-mono text-xs">{i + 1}</td>
                      <td className="px-4 py-3">
                        <div className="font-semibold text-ink">{member.name}</div>
                        <div className="sm:hidden text-ink/60 text-xs mt-0.5">{member.designation}</div>
                        {member.organization && (
                          <div className="sm:hidden text-ink/50 text-xs">{member.organization}</div>
                        )}
                      </td>
                      <td className="px-4 py-3 text-ink/70 hidden sm:table-cell">{member.designation}</td>
                      <td className="px-4 py-3 text-ink/60 hidden lg:table-cell">{member.organization ?? '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
