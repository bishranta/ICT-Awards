import { useState } from 'react'
import { MedalIcon, ArrowRightIcon } from '@phosphor-icons/react'
import type { Winner } from '@/types'
import WinnerModal from './WinnerModal'

interface WinnerCardProps {
  winner: Winner
}

function getInitials(name: string): string | null {
  if (name.includes(',') || name.includes('&') || name.includes('/')) return null
  const words = name.trim().split(/\s+/)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[words.length - 1][0]).toUpperCase()
}

export default function WinnerCard({ winner }: WinnerCardProps) {
  const [imgError, setImgError] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const initials = getInitials(winner.winnerName)
  const showPhoto = winner.photo && !imgError

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className="bg-surface border border-border-subtle hover:border-gold/30 rounded-xl overflow-hidden group transition-all hover:shadow-gold flex flex-col cursor-pointer"
      >
        {/* Title: category · year */}
        <div className="px-4 pt-4 pb-3 border-b border-border-subtle">
          <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-spectrum-a leading-tight">
            <MedalIcon size={15} weight="fill" className="flex-shrink-0" />
            {winner.categoryName} {winner.year}
          </p>
        </div>

        {/* Photo */}
        <div className="px-4 pt-4">
          <div className="w-full aspect-square rounded-xl overflow-hidden border border-gold/15 bg-white flex items-center justify-center">
            {showPhoto ? (
              <img
                src={winner.photo}
                alt={winner.winnerName}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            ) : (
              <div className="flex flex-col items-center gap-2">
                {initials ? (
                  <span className="text-gold font-black text-4xl leading-none">{initials}</span>
                ) : (
                  <MedalIcon size={36} className="text-gold/60" weight="fill" />
                )}
              </div>
            )}
          </div>
        </div>

        {/* Winner name + learn more */}
        <div className="px-4 pt-3 pb-4 flex items-end justify-between gap-2">
          <p className="text-ink/90 font-semibold text-base leading-snug">{winner.winnerName}</p>
          <span className="flex-shrink-0 flex items-center gap-0.5 text-xs font-semibold text-spectrum-a/70 group-hover:text-spectrum-a transition-colors whitespace-nowrap">
            <ArrowRightIcon size={12} weight="bold" />
          </span>
        </div>
      </div>

      {modalOpen && (
        <WinnerModal winner={winner} onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}
