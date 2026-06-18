import type { TimelineEvent } from '@/types'

export const ICT_2026_TIMELINE: TimelineEvent[] = [
  { date: 'July 17, 2026', label: 'Nominations Open', highlight: true, description: 'Applications open for all award categories' },
  { date: 'Sept 2026', label: 'Screening & Evaluation', highlight: false, description: 'Jury evaluates all nominations' },
  { date: 'Oct–Nov 2026', label: 'Finalists Announced', highlight: false, description: 'Top finalists selected per category' },
  { date: 'Nov 2026', label: 'Public Voting', highlight: false, description: 'Online voting opens for public choice categories' },
  { date: 'Nov–Dec 2026', label: 'Field Visits', highlight: false, description: 'Jury conducts field assessments' },
  { date: 'Dec 18, 2026', label: 'Grand Finale', highlight: true, description: 'Award ceremony and winner announcements' },
]
