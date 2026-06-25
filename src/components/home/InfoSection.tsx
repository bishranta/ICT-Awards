import { Link } from 'react-router-dom'
import { GridFour, ClipboardText, BookOpen, ListChecks, CalendarCheck, Scales } from '@phosphor-icons/react'
import SectionHeading from '@/components/ui/SectionHeading'

const BLOCKS = [
  {
    icon: GridFour,
    label: 'Categories',
    text: 'There are 16 awards. Each award is presented to the most innovative ICT solution entered in the category.',
    to: '/categories',
  },
  {
    icon: ClipboardText,
    label: 'How to Enter',
    text: 'Applicants fill the registration form and must ensure they fulfill all criteria and guidelines. Entry is FREE.',
    to: '/apply',
  },
  {
    icon: BookOpen,
    label: 'Guidelines',
    text: 'This section provides the guidelines for participating in the competition and the evaluation criteria.',
    to: '/apply',
  },
  {
    icon: ListChecks,
    label: 'Selection Procedure',
    text: 'Applicants are shortlisted based upon the evaluation of their performance and submitted documents.',
    to: '/about/selection',
  },
  {
    icon: CalendarCheck,
    label: 'Schedule',
    text: 'Multiple programs and events are scheduled prior to the grand event — presentations, Q&A, public voting and more.',
    to: '/pre-activities',
  },
  {
    icon: Scales,
    label: 'Judging Panel',
    text: 'A comprehensive judging process where all nominations are evaluated on their category guidelines by industry experts.',
    to: '/about/jury',
  },
]

export default function InfoSection() {
  return (
    <section className="bg-surface section-padding">
      <div className="container-max">
        <SectionHeading
          title="Everything You Need to Know"
          subtitle="A complete overview of the ICT Award process — from categories to the judging panel."
          className="mb-10"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BLOCKS.map(({ icon: Icon, label, text, to }) => (
            <Link
              key={label}
              to={to}
              className="group bg-surface-alt border border-border-subtle rounded-xl p-6 hover:border-gold/30 hover:shadow-gold-sm transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center mb-4 transition-colors">
                <Icon size={20} className="icon-spectrum" />
              </div>
              <h3 className="text-ink font-bold text-base mb-2 group-hover:text-spectrum-a transition-colors">
                {label}
              </h3>
              <p className="text-ink/65 text-sm leading-relaxed">{text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
