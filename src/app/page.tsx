/**
 * Entry page that stitches together the hero, main presentation
 * (before/during/after) and final recap section.
 */
import HeroSection from '@/sections/HeroSection'
import RecapSection from '@/sections/RecapSection'
import PresentationSection from '@/components/PresentationSection'

/**
 * Renders the main landing page of the application.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PresentationSection />
      <RecapSection />
    </>

  )
}
