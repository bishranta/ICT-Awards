import SectionHeading from '@/components/ui/SectionHeading'

const JOINT_PARTNERS = [
  { name: 'Living with ICT', abbr: 'LwICT' },
  { name: 'IFN', abbr: 'IFN' },
]

export default function PartnersSection() {
  return (
    <section className="bg-cream section-padding">
      <div className="container-max">
        <SectionHeading
          title="Partners & Supporters"
          subtitle="Organizations and contributors who make the ICT Award possible."
          className="mb-10"
        />

        {/* Joint initiative */}
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-ink/40 mb-4">Joint Initiative of</p>
          <div className="flex flex-wrap gap-4">
            {JOINT_PARTNERS.map(({ name, abbr }) => (
              // ponytail: logo placeholder until official partner logos are provided
              <div
                key={abbr}
                className="flex items-center gap-3 bg-surface border border-border-subtle rounded-xl px-6 py-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-ink font-black text-xs">{abbr.slice(0, 2)}</span>
                </div>
                <span className="text-ink font-semibold text-sm">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Event management partner */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-ink/40 mb-4">Event Management Partner</p>
          <div className="inline-flex items-center gap-3 bg-surface border border-border-subtle rounded-xl px-6 py-4">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
              <span className="text-ink font-black text-xs">GS</span>
            </div>
            <span className="text-ink font-semibold text-sm">Global Spark</span>
          </div>
        </div>
      </div>
    </section>
  )
}
