'use client'

/**
 * Section handling the "During" phase. Contains a scroll-driven video and
 * navigation triggers for moving between phases.
 */

import FullScrollSection from '@/components/FullScrollSection'
import ScrollSectionTrigger from '@/components/ScrollSectionTrigger'
import IntroSection from './IntroSection'
import OutroSection from './OutroSection'
import { renderOverlays } from '@/utils/overlayUtils'
import { useMemo } from 'react'
import { duringOverlays } from '@/data/overlays'

type Props = {
  onNext: () => void
  onBack: () => void
}

export default function DuringSection({ onNext, onBack }: Props) {
  const overlays = useMemo(() => renderOverlays(duringOverlays), [])

  return (
    <>
      <ScrollSectionTrigger
        onTrigger={onBack}
        text="Go back to the previous section"
        direction="up"
      />
      <FullScrollSection
        videoSrc="/videos/pre.mp4"
        sectionId="during-section"
        scrollSpeed={500}
        introSection={<IntroSection />}
        outroSection={<OutroSection />}
        overlays={overlays}
      />
      <ScrollSectionTrigger
        onTrigger={onNext}
        text="Continue to the recovery section"
        direction="down"
      />
    </>
  )
}
