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
  photo?: string    // image URL/path; avatar-initials fallback used when absent
  profile?: string  // short bio/description; placeholder text used when absent
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

export interface HistoryCard {
  milestone?: string   // badge label
  description: string
  image?: string       // URL/path; placeholder shown when absent
}

export interface HistoryEntry {
  year: number
  cards: HistoryCard[]
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface MediaCoverage {
  id: string
  outlet: string
  url: string
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

export interface Edition {
  year: number
  title?: string
  intro: string
  venue?: string
  chiefGuest?: string
  broadcast?: string
}

export interface TeamMember {
  name: string
  role: string
}

export interface JuryMember {
  name: string
  designation: string
  organization?: string
}

export interface AdvisorGroup {
  title: string
  members: JuryMember[]
}
