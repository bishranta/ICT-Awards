import {
  Trophy, RocketLaunch, Star, Sparkle, Lightbulb, ChartBar,
  Buildings, GraduationCap, Users, Globe, Briefcase, Code,
  ClipboardText, CalendarCheck, CheckSquare, Television,
  Handshake, Target, Lightning, Medal,
  Building, MapTrifold, DeviceMobile, UserCircle,
} from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'

const ICON_MAP: Record<string, Icon> = {
  Trophy, RocketLaunch, Star, Sparkle, Lightbulb, ChartBar,
  Buildings, GraduationCap, Users, Globe, Briefcase, Code,
  ClipboardText, CalendarCheck, CheckSquare, Television,
  Handshake, Target, Lightning, Medal,
  Building, MapTrifold, DeviceMobile, UserCircle,
}

interface RenderIconProps {
  name: string
  size?: number
  className?: string
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
}

export function RenderIcon({ name, size = 20, className, weight = 'regular' }: RenderIconProps) {
  const Icon = ICON_MAP[name]
  if (!Icon) return null
  const classes = className ? `icon-spectrum ${className}` : 'icon-spectrum'
  return <Icon size={size} className={classes} weight={weight} />
}
