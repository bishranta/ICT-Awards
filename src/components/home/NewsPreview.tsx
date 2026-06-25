import { Link } from 'react-router-dom'
import { ArrowRight, ArrowSquareOut } from '@phosphor-icons/react'
import { MEDIA_COVERAGES } from '@/data/media'
import SectionHeading from '@/components/ui/SectionHeading'

const PREVIEW = MEDIA_COVERAGES.slice(0, 4)

export default function NewsPreview() {
  return (
    <section className="bg-surface section-padding">
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeading
            title="News & Media"
            subtitle="ICT Award as featured in leading Nepali media publications."
          />
          <Link
            to="/media?tab=media-coverages"
            className="text-spectrum-a font-bold hover:text-ink flex items-center gap-2 whitespace-nowrap flex-shrink-0"
          >
            More Coverage <ArrowRight size={16} className="icon-spectrum" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PREVIEW.map((item, i) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 p-5 bg-surface-alt border border-border-subtle rounded-xl hover:border-gold/30 hover:shadow-gold-sm transition-all group"
            >
              <div className="flex items-center gap-3">
                <span className="text-ink/25 font-mono text-xs w-4 text-right flex-shrink-0">{i + 1}</span>
                <div>
                  <div className="font-bold text-ink group-hover:text-spectrum-a transition-colors">
                    {item.outlet}
                  </div>
                  <div className="text-ink/50 text-xs mt-0.5 truncate max-w-xs">{item.url}</div>
                </div>
              </div>
              <ArrowSquareOut size={16} className="text-ink/25 group-hover:text-spectrum-a transition-colors flex-shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
