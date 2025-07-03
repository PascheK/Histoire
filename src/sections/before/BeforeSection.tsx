'use client'

/**
 * Combines the intro, scroll video and outro for the "Before" phase.
 * Overlays are built from configuration defined in `data/overlays`.
 */

import FullScrollSection from '@/components/FullScrollSection'
import IntroSection from './IntroSection'
import OutroSection from './OutroSection'
import ScrollSectionTrigger from '@/components/ScrollSectionTrigger'
import { renderOverlays } from '@/utils/overlayUtils'
import { useMemo } from 'react'
import { beforeOverlays } from '@/data/overlays'

type Props = {
  onNext: () => void
}

export default function BeforeSection({ onNext }: Props) {
  const overlays = useMemo(() => renderOverlays(beforeOverlays), [])

  return (
    <>
      <FullScrollSection
        videoSrc="/videos/test.mp4"
        sectionId="before-section"
        scrollSpeed={500}
        introSection={<IntroSection />}
        outroSection={<OutroSection />}
        overlays={overlays}
      />
      <ScrollSectionTrigger
        onTrigger={onNext}
        text="Continue to the during section"
        direction="down"
      />
    </>
  )
}
