import clsx from 'clsx'

interface GoldDividerProps {
  className?: string
  variant?: 'gold' | 'spectrum'
}

export default function GoldDivider({ className, variant = 'gold' }: GoldDividerProps) {
  return (
    <div
      className={clsx(
        'h-px opacity-30 my-12',
        variant === 'spectrum' ? 'bg-spectrum-gradient' : 'bg-gold-gradient',
        className
      )}
    />
  )
}
