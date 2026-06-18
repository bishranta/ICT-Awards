import { Link } from 'react-router-dom'
import clsx from 'clsx'

interface ButtonProps {
  variant?: 'gold' | 'outline-gold' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  external?: boolean
}

export default function Button({
  variant = 'gold',
  size = 'md',
  href,
  to,
  onClick,
  children,
  className,
  type = 'button',
  external,
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold'

  const variants = {
    gold: 'bg-gold text-ink hover:bg-gold-light active:bg-gold-dark shadow-gold-sm hover:shadow-gold',
    'outline-gold': 'border-2 border-gold text-gold hover:bg-gold hover:text-ink',
    ghost: 'text-gold hover:bg-gold/10',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2',
  }

  const cls = clsx(base, variants[variant], sizes[size], className)

  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href)
    return external
      ? <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
      : <a href={href} className={cls}>{children}</a>
  return <button type={type} onClick={onClick} className={cls}>{children}</button>
}
