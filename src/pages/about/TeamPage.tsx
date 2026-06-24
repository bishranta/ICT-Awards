import { HourglassHigh } from '@phosphor-icons/react'
import SectionHeading from '@/components/ui/SectionHeading'

export default function TeamPage() {
  return (
    <div>
      <SectionHeading
        title="Team & Jury"
        subtitle="Our jury panel consists of industry experts, academicians, government representatives, and ICT professionals."
        className="mb-10"
      />
      <div className="bg-surface border border-gold/20 rounded-xl p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
          <HourglassHigh size={24} className="icon-spectrum" />
        </div>
        <p className="text-ink/80">Jury and Advisor lists for ICT Award 2026 will be updated soon.</p>
        <p className="text-spectrum-a text-sm mt-2">Check back after nominations open on July 17, 2026.</p>
      </div>
    </div>
  )
}
