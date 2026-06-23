import clsx from 'clsx'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  dark?: boolean
  className?: string
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={clsx(centered && 'text-center', className)}>
      <div className={clsx('w-12 h-1 bg-spectrum-gradient mb-4 rounded-full', centered && 'mx-auto')} />
      <h2 className={clsx('text-3xl md:text-4xl font-bold leading-tight tracking-tight text-balance', dark ? 'text-white' : 'text-ink')}>
        {title}
      </h2>
      {subtitle && (
        <p className={clsx('mt-4 text-lg leading-relaxed text-pretty', dark ? 'text-white/70' : 'text-ink/70')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
