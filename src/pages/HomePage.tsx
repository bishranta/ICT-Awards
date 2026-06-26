import HeroSection from '@/components/home/HeroSection'
import AboutBlurb from '@/components/home/AboutBlurb'
import StatsSection from '@/components/home/StatsSection'
import InfoSection from '@/components/home/InfoSection'
import CategoriesPreview from '@/components/home/CategoriesPreview'
import PreEventsSection from '@/components/home/PreEventsSection'
import PartnersSection from '@/components/home/PartnersSection'
import NewsPreview from '@/components/home/NewsPreview'
import GlimpsesSection from '@/components/home/GlimpsesSection'
import TimelineSection from '@/components/home/TimelineSection'
import RecentWinnersSection from '@/components/home/RecentWinnersSection'
import CtaBanner from '@/components/home/CtaBanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutBlurb />
      <StatsSection />
      <InfoSection />
      <CategoriesPreview />
      <PreEventsSection />
      <PartnersSection />
      <NewsPreview />
      <GlimpsesSection />
      <TimelineSection />
      <RecentWinnersSection />
      <CtaBanner />
    </>
  )
}
