import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowSquareOut, Image as ImageIcon } from '@phosphor-icons/react'
import { MEDIA_COVERAGES } from '@/data/media'
import SectionHeading from '@/components/ui/SectionHeading'

const PREVIEW = MEDIA_COVERAGES.slice(0, 4)

function NewsCard({ item }: { item: (typeof MEDIA_COVERAGES)[0] }) {
  const [imgErr, setImgErr] = useState(false)
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-surface-alt border border-border-subtle rounded-xl hover:border-gold/30 hover:shadow-gold-sm transition-all overflow-hidden"
    >
      {item.thumbnail && !imgErr ? (
        <div className="w-full aspect-video overflow-hidden">
          <img
            src={item.thumbnail}
            alt={item.outlet}
            onError={() => setImgErr(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="w-full aspect-video bg-surface-muted flex items-center justify-center">
          <ImageIcon size={28} className="text-ink/20" />
        </div>
      )}
      <div className="flex items-start justify-between gap-3 p-4">
        <div className="min-w-0">
          <div className="font-bold text-xs uppercase tracking-wider text-spectrum-a mb-1">{item.outlet}</div>
          {item.title && (
            <p className="text-ink text-sm font-medium leading-snug line-clamp-2">{item.title}</p>
          )}
        </div>
        <ArrowSquareOut size={16} className="text-ink/30 group-hover:text-spectrum-a transition-colors flex-shrink-0 mt-0.5" />
      </div>
    </a>
  )
}

export default function NewsPreview() {
  return (
    <section className="bg-surface section-padding">
      <div className="container-max">
        <div className="relative mb-10">
          <SectionHeading
            title="News & Media"
            subtitle="ICT Award as featured in leading Nepali media publications."
            centered
          />
          <Link
            to="/media?tab=media-coverages"
            className="mt-4 flex justify-center text-spectrum-a font-bold hover:text-ink items-center gap-2 whitespace-nowrap md:mt-0 md:absolute md:top-0 md:right-0"
          >
            More Coverage <ArrowRight size={16} className="icon-spectrum" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PREVIEW.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
