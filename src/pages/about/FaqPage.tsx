import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaretDown } from '@phosphor-icons/react'
import { FAQS } from '@/data/faqs'
import SectionHeading from '@/components/ui/SectionHeading'
import clsx from 'clsx'

function FAQAccordion() {
  const [open, setOpen] = useState<string | null>(null)
  return (
    <div className="space-y-3">
      {FAQS.map((faq) => (
        <div
          key={faq.id}
          className="bg-surface-alt border border-border-subtle rounded-xl overflow-hidden hover:border-gold/20 transition-colors"
        >
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left"
            onClick={() => setOpen(open === faq.id ? null : faq.id)}
          >
            <span className="font-semibold text-ink pr-4">{faq.question}</span>
            <CaretDown
              size={18}
              className={clsx('icon-spectrum flex-shrink-0 transition-transform', open === faq.id && 'rotate-180')}
            />
          </button>
          {open === faq.id && (
            <div className="px-6 pb-4">
              <p className="text-ink/80 leading-relaxed text-sm">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function FaqPage() {
  return (
    <div className="max-w-3xl">
      <SectionHeading
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about applying for the ICT Award 2026."
        className="mb-8"
      />
      <FAQAccordion />
      <div className="mt-10 text-center">
        <p className="text-ink/80 mb-4">Have more questions?</p>
        <Link
          to="/apply"
          className="inline-flex items-center gap-2 bg-gold text-ink font-bold px-6 py-3 rounded-full hover:bg-gold-light transition-colors"
        >
          Apply Now — It's Free
        </Link>
      </div>
    </div>
  )
}
