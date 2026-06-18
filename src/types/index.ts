export type CategoryGroup = 'A' | 'B' | 'C' | 'D' | 'E'

export interface Category {
  id: string
  group: CategoryGroup
  name: string
  description: string
  eligibility?: string
  icon?: string
}

export interface Winner {
  year: number
  categoryId: string
  categoryName: string
  winnerName: string
  organization?: string
  isProvince?: boolean
  province?: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
  icon: string
}

export interface TimelineEvent {
  date: string
  label: string
  description?: string
  highlight?: boolean
}

export interface HistoryEntry {
  year: number
  description: string
  milestone?: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface TvEpisode {
  id: string
  year: number
  episodeNumber: number
  youtubeId: string
  channel?: string
}

export interface GrandFinale {
  year: number
  youtubeId: string
}

export interface PreActivity {
  id: string
  title: string
  description: string
  icon: string
  category: 'pre-event' | 'other'
}

export interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}
