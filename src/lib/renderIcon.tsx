import {
  Trophy, RocketLaunch, Star, Sparkle, Lightbulb, ChartBar,
  Buildings, GraduationCap, Users, Globe, Briefcase, Code,
  Gear, ClipboardText, CalendarCheck, CheckSquare, Television,
  MagnifyingGlass, Handshake, Target, Lightning, Medal,
  Building, MapTrifold, DeviceMobile, HourglassHigh, UserCircle,
  ArrowRight, ArrowDown, CaretDown, List, X, Factory, VideoCamera,
} from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'

const ICON_MAP: Record<string, Icon> = {
  Trophy, RocketLaunch, Star, Sparkle, Lightbulb, ChartBar,
  Buildings, GraduationCap, Users, Globe, Briefcase, Code,
  Gear, ClipboardText, CalendarCheck, CheckSquare, Television,
  MagnifyingGlass, Handshake, Target, Lightning, Medal,
  Building, MapTrifold, DeviceMobile, HourglassHigh, UserCircle,
  ArrowRight, ArrowDown, CaretDown, List, X, Factory, VideoCamera,
}

interface RenderIconProps {
  name: string
  size?: number
  className?: string
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
}

export function renderIcon(name: string, size = 20, className?: string) {
  const Icon = ICON_MAP[name]
  if (!Icon) return null
  return <Icon size={size} className={className} weight="regular" />
}

export function RenderIcon({ name, size = 20, className, weight = 'regular' }: RenderIconProps) {
  const Icon = ICON_MAP[name]
  if (!Icon) return null
  return <Icon size={size} className={className} weight={weight} />
}
