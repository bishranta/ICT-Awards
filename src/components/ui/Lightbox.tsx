import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, CaretLeft, CaretRight } from '@phosphor-icons/react'

interface LightboxProps {
  photos: string[]
  index: number
  onClose: () => void
  onIndexChange: (i: number) => void
  alt?: string
}

export default function Lightbox({ photos, index, onClose, onIndexChange, alt = 'Photo' }: LightboxProps) {
  const total = photos.length
  const go = (delta: number) => onIndexChange((index + delta + total) % total)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, total]) // eslint-disable-line react-hooks/exhaustive-deps

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} lightbox`}
    >
      <button
        autoFocus
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={20} weight="bold" />
      </button>

      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
        {index + 1} / {total}
      </div>

      <button
        className="absolute left-3 sm:left-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
        onClick={(e) => { e.stopPropagation(); go(-1) }}
        aria-label="Previous photo"
      >
        <CaretLeft size={22} weight="bold" />
      </button>

      <img
        src={encodeURI(photos[index])}
        alt={`${alt} ${index + 1}`}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        className="absolute right-3 sm:right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
        onClick={(e) => { e.stopPropagation(); go(1) }}
        aria-label="Next photo"
      >
        <CaretRight size={22} weight="bold" />
      </button>
    </div>,
    document.body
  )
}
