import { useState } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import clsx from 'clsx'

const SELECTION_STEPS = {
  A: [
    'Call for Nominations',
    'Preliminary Criteria Check & Document Review',
    'First Phase of Jury Evaluation',
    'Selection of Top 12/15 Finalists',
    'Public Idea/Startup Showcase',
    'Presentation & Speed Dating with Grand Jury',
    'Television Broadcast Featuring Top 12 Finalists',
    'Top 5 Finalist Selection',
    'Public Voting Among Top 5',
    'Field/Industry Visit for Final Evaluation',
    'Grand Finale and Winner Announcement',
  ],
  B: [
    'Call for Nominations',
    'Preliminary Criteria Check & Document Review',
    'First Phase of Jury Evaluation',
    'Second Phase — Top 10 Selection',
    'Third Phase — Internal Presentations',
    'Final Selection of Top 3 Finalists',
    'Grand Finale and Winner Announcement',
  ],
  C: [
    'Call for Nominations',
    'Preliminary Criteria Check & Document Review',
    'First Phase of Jury Evaluation',
    'Second Phase — Top 10 Selection',
    'Third Phase — Presentations of Selected Nominees',
    'Final Selection of Top 3 Finalists',
    'Grand Finale and Winner Announcement',
  ],
}

export default function SelectionPage() {
  const [activeGroup, setActiveGroup] = useState<'A' | 'B' | 'C'>('A')

  return (
    <div>
      <SectionHeading
        title="Selection Procedure"
        subtitle="A rigorous multi-stage evaluation process ensuring the most deserving are recognized."
        className="mb-8"
      />

      <div className="bg-surface rounded-xl p-4 border border-gold/20 mb-6 text-sm text-ink/80 leading-relaxed">
        <span className="text-spectrum-a font-bold">Core Evaluation Factors:</span> Impact on the ICT industry · Level of innovation and originality · Quality and execution of work · Creativity and societal relevance. Over <span className="text-ink font-semibold">25 jury meetings</span> are conducted throughout the evaluation period.
      </div>

      <div className="flex gap-2 mb-8">
        {(['A', 'B', 'C'] as const).map((g) => (
          <button
            key={g}
            onClick={() => setActiveGroup(g)}
            className={clsx(
              'px-5 py-2.5 rounded-full text-sm font-bold transition-all',
              activeGroup === g ? 'bg-gold text-ink' : 'border border-gold/30 text-ink hover:bg-gold/10'
            )}
          >
            {g === 'A' ? 'Startup & Innovation' : g === 'B' ? 'Individual Excellence' : 'Organizations'}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {SELECTION_STEPS[activeGroup].map((step, idx) => (
          <div key={idx} className="flex items-start gap-4 bg-surface border border-border-subtle rounded-xl px-5 py-4">
            <div className="w-7 h-7 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-ink text-xs font-black flex-shrink-0">
              {idx + 1}
            </div>
            <p className="text-ink/70 text-sm leading-relaxed">{step}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
