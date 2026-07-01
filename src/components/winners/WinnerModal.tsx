import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { XIcon, MedalIcon } from '@phosphor-icons/react'
import { ArrowSquareOutIcon, LinkedinLogoIcon } from '@phosphor-icons/react'
import type { Winner } from '@/types'

interface WinnerModalProps {
  winner: Winner
  onClose: () => void
}

function getInitials(name: string): string | null {
  if (name.includes(',') || name.includes('&') || name.includes('/')) return null
  const words = name.trim().split(/\s+/)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[words.length - 1][0]).toUpperCase()
}

export default function WinnerModal({ winner, onClose }: WinnerModalProps) {
  const [imgError, setImgError] = useState(false)
  const initials = getInitials(winner.winnerName)
  const showPhoto = winner.photo && !imgError

  // close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 bg-surface rounded-2xl shadow-ink w-full max-w-2xl animate-modal-in"
        onClick={e => e.stopPropagation()}
      >
        {/* Header: category · year */}
        <div className="px-6 pt-5 pb-3 border-b border-border-subtle flex items-start justify-between gap-3">
          <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-spectrum-a leading-tight">
            <MedalIcon size={14} weight="fill" className="flex-shrink-0" />
            {winner.categoryName} · {winner.year}
          </p>
          <button
            onClick={onClose}
            className="flex-shrink-0 text-ink/40 hover:text-ink transition-colors"
            aria-label="Close"
          >
            <XIcon size={18} weight="bold" />
          </button>
        </div>

        {/* Body: photo left, content right */}
        <div className="flex gap-6 p-6">
          {/* Photo */}
          <div className="flex-shrink-0 w-48">
            <div className="w-full aspect-square rounded-xl overflow-hidden border border-gold/15 bg-gold/5 flex items-center justify-center">
              {showPhoto ? (
                <img
                  src={winner.photo}
                  alt={winner.winnerName}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-2">
                  {initials ? (
                    <span className="text-gold font-black text-4xl leading-none">{initials}</span>
                  ) : (
                    <MedalIcon size={40} className="text-gold/60" weight="fill" />
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 flex flex-col justify-between gap-4">
            <div>
              <p className="text-ink font-bold text-xl leading-snug">{winner.winnerName}</p>
              {winner.organization && (
                <p className="text-ink/50 text-sm mt-0.5">{winner.organization}</p>
              )}
              {winner.profile && (
                <p className="text-ink/70 text-sm leading-relaxed mt-3">{winner.profile}</p>
              )}
            </div>

            {/* Links */}
            {(winner.website || winner.linkedin) && (
              <div className="flex items-center gap-3">
                {winner.website && (
                  <a
                    href={winner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border-subtle text-xs font-semibold text-ink/70 hover:text-ink hover:border-gold/40 transition-colors"
                  >
                    <ArrowSquareOutIcon size={14} weight="bold" />
                    Website
                  </a>
                )}
                {winner.linkedin && (
                  <a
                    href={winner.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border-subtle text-xs font-semibold text-ink/70 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-colors"
                  >
                    <LinkedinLogoIcon size={14} weight="fill" />
                    LinkedIn
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
