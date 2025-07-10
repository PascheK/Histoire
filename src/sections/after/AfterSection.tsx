'use client'

/**
 * Wraps the "After" phase video content and provides a trigger to return to the
 * previous phase.
 */

import FullScrollSection from '@/components/FullScrollSection'
import ScrollSectionTrigger from '@/components/ScrollSectionTrigger'
import IntroSection from './IntroSection'
import OutroSection from './OutroSection'
import { renderOverlays } from '@/utils/overlayUtils'
import { useMemo } from 'react'
import { afterOverlays } from '@/data/overlays'

type Props = {
  onBack: () => void
}

export default function AfterSection({ onBack }: Props) {
  const overlays = useMemo(() => renderOverlays(afterOverlays), [])

  return (
    <>
      <ScrollSectionTrigger
        onTrigger={onBack}
        text="Go back to the previous section"
        direction="up"
      />
      <FullScrollSection
        videoSrc="/videos/post.mp4"
        sectionId="after-section"
        scrollSpeed={200}
        introSection={<IntroSection />}
        outroSection={<OutroSection />}
        overlays={overlays}
      />
    </>
  )
}
