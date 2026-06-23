import { useState } from 'react'
import { Trophy } from '@phosphor-icons/react'
import type { Winner } from '@/types'
import { getWinnerProfile } from '@/data/winners'

interface WinnerCardProps {
  winner: Winner
  /** Show the award year as a chip (used in the By Category view). */
  showYear?: boolean
}

/** Derive up-to-2-letter initials from a winner name.
 *  Returns null for entries that look like multiple winners ("Name, Name") or
 *  organisations with ampersands — we'll fall back to the Trophy icon. */
function getInitials(name: string): string | null {
  if (name.includes(',') || name.includes('&') || name.includes('/')) return null
  const words = name.trim().split(/\s+/)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[words.length - 1][0]).toUpperCase()
}

export default function WinnerCard({ winner, showYear = false }: WinnerCardProps) {
  const [imgError, setImgError] = useState(false)
  const initials = getInitials(winner.winnerName)
  const profile = getWinnerProfile(winner)

  const showPhoto = winner.photo && !imgError

  return (
    <div className="bg-surface border border-border-subtle hover:border-gold/30 rounded-xl p-5 group transition-all hover:shadow-gold flex flex-col gap-4">
      {/* Photo + identity row */}
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {showPhoto ? (
            <img
              src={winner.photo}
              alt={winner.winnerName}
              onError={() => setImgError(true)}
              className="w-14 h-14 rounded-xl object-cover border border-gold/20"
            />
          ) : (
            <div className="w-14 h-14 rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors flex items-center justify-center border border-gold/20">
              {initials ? (
                <span className="text-gold font-black text-lg leading-none">{initials}</span>
              ) : (
                <Trophy size={22} className="text-gold" weight="fill" />
              )}
            </div>
          )}
        </div>

        {/* Name + meta */}
        <div className="flex-1 min-w-0">
          {/* Category label */}
          <div className="text-spectrum-a text-xs font-bold uppercase tracking-wider mb-1 leading-tight">
            {winner.categoryName}
          </div>

          {/* Winner name */}
          <div className="text-ink font-black text-base leading-snug">{winner.winnerName}</div>

          {/* Organization */}
          {winner.organization && (
            <div className="text-ink/70 text-xs mt-0.5">{winner.organization}</div>
          )}

          {/* Year chip */}
          {showYear && (
            <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-gold/10 text-gold text-xs font-bold">
              {winner.year}
            </span>
          )}
        </div>
      </div>

      {/* Profile description */}
      <p className="text-ink/65 text-sm leading-relaxed border-t border-border-subtle pt-3">
        {profile}
      </p>
    </div>
  )
}
