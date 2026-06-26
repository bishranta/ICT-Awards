interface Props {
  name: string
  designation: string
  organization?: string
  photo?: string
}

function initials(name: string) {
  return name
    .replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.|Prof\.|Er\.)\s+/g, '')
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase()
}

export default function PersonCard({ name, designation, organization, photo }: Props) {
  return (
    <div className="bg-white rounded-xl border border-border-light p-4 flex flex-col items-center text-center gap-3 hover:shadow-gold-sm transition-shadow">
      <div className="w-24 h-24 rounded-full overflow-hidden bg-ink/5 flex-shrink-0 ring-2 ring-gold/20">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover"
            onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-ink/30">
            {initials(name)}
          </div>
        )}
      </div>
      <div>
        <div className="font-semibold text-ink text-sm leading-snug">{name}</div>
        <div className="text-ink/60 text-xs mt-1 leading-snug">{designation}</div>
        {organization && (
          <div className="text-ink/40 text-xs mt-0.5 leading-snug">{organization}</div>
        )}
      </div>
    </div>
  )
}
