import { useRef, useState } from 'react'
import { Image as ImageIcon, CaretUp, CaretDown } from '@phosphor-icons/react'
import Lightbox from '@/components/ui/Lightbox'

interface PhotoGalleryProps {
  photos: string[]
  year: number
}

export default function PhotoGallery({ photos, year }: PhotoGalleryProps) {
  const [open, setOpen] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollable = photos.length > 8

  const scrollByRow = (dir: 1 | -1) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ top: dir * (el.clientHeight / 2), behavior: 'smooth' })
  }

  if (photos.length === 0) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="aspect-video rounded-xl bg-surface-muted border border-border-subtle flex flex-col items-center justify-center gap-2"
          >
            <ImageIcon size={22} className="text-ink/20" />
            <span className="text-ink/20 text-xs">Photo {i + 1}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className={scrollable ? 'overflow-y-auto max-h-[22rem] pr-1' : ''}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {photos.map((photo, i) => (
            <button
              key={photo}
              onClick={() => setOpen(i)}
              className="group aspect-video rounded-xl overflow-hidden border border-border-subtle bg-ink/5 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <img
                src={encodeURI(photo)}
                alt={`ICT Award ${year} photo ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </button>
          ))}
        </div>
      </div>

      {scrollable && (
        <div className="flex justify-center gap-2 mt-4">
          <button
            onClick={() => scrollByRow(-1)}
            aria-label="Scroll up"
            className="w-9 h-9 rounded-full bg-surface border border-border-subtle hover:border-gold/40 hover:text-gold text-ink flex items-center justify-center transition-colors"
          >
            <CaretUp size={16} weight="bold" />
          </button>
          <button
            onClick={() => scrollByRow(1)}
            aria-label="Scroll down"
            className="w-9 h-9 rounded-full bg-surface border border-border-subtle hover:border-gold/40 hover:text-gold text-ink flex items-center justify-center transition-colors"
          >
            <CaretDown size={16} weight="bold" />
          </button>
        </div>
      )}

      {open !== null && (
        <Lightbox
          photos={photos}
          index={open}
          onClose={() => setOpen(null)}
          onIndexChange={setOpen}
          alt={`ICT Award ${year} photo`}
        />
      )}
    </div>
  )
}
