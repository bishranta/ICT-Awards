import HeroSection from '@/components/home/HeroSection'
import AboutBlurb from '@/components/home/AboutBlurb'
import TimelineSection from '@/components/home/TimelineSection'
import StatsSection from '@/components/home/StatsSection'
import CategoriesPreview from '@/components/home/CategoriesPreview'
import PreEventsSection from '@/components/home/PreEventsSection'
import RecentWinnersSection from '@/components/home/RecentWinnersSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutBlurb />
      <StatsSection />
      <TimelineSection />
      <CategoriesPreview />
      <PreEventsSection />
      <RecentWinnersSection />
    </>
  )
}
