import clsx from 'clsx'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  accentWord?: string
  centered?: boolean
  dark?: boolean
  className?: string
}

export default function SectionHeading({
  title,
  subtitle,
  accentWord,
  centered = false,
  dark = false,
  className,
}: SectionHeadingProps) {
  const highlighted = accentWord
    ? title.replace(accentWord, `<span class="${dark ? 'text-gold' : 'text-spectrum-a'}">${accentWord}</span>`)
    : title

  return (
    <div className={clsx(centered && 'text-center', className)}>
      <div className={clsx('w-12 h-1 bg-spectrum-gradient mb-4 rounded-full', centered && 'mx-auto')} />
      <h2
        className={clsx('text-3xl md:text-4xl font-black leading-tight', dark ? 'text-white' : 'text-ink')}
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
      {subtitle && (
        <p className={clsx('mt-4 text-lg leading-relaxed', dark ? 'text-white/70' : 'text-ink/70')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
