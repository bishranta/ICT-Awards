import SectionHeading from '@/components/ui/SectionHeading'

const JOINT_PARTNERS = [
  { name: 'Living with ICT', logo: '/Partner/LWICT.png' },
  { name: 'IFN', logo: '/Partner/IFN-final-Logo.png' },
]

const EVENT_PARTNER = { name: 'Global Spark', logo: '/Partner/Global Spark.png' }

export default function PartnersSection() {
  return (
    <section className="bg-cream section-padding">
      <div className="container-max">
        <SectionHeading
          title="Partners & Supporters"
          subtitle="Organizations and contributors who make the ICT Award possible."
          className="mb-10"
          centered
        />

        {/* Joint initiative */}
        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-ink/40 mb-4">Joint Initiative of</p>
          <div className="flex flex-wrap justify-center gap-4">
            {JOINT_PARTNERS.map(({ name, logo }) => (
              <div
                key={name}
                className="w-64 h-32 flex items-center justify-center bg-surface border border-border-subtle rounded-xl px-8 py-6"
              >
                <img src={logo} alt={name} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Event management partner */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-ink/40 mb-4">Event Management Partner</p>
          <div className="flex justify-center">
            <div className="w-64 h-32 flex items-center justify-center bg-surface border border-border-subtle rounded-xl px-8 py-6">
              <img src={EVENT_PARTNER.logo} alt={EVENT_PARTNER.name} className="max-h-full max-w-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
