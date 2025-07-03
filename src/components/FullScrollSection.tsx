'use client'

/**
 * Wrapper component that renders a scroll-controlled video between an intro and
 * outro section. It waits for the video metadata to load before activating any
 * overlay triggers to ensure GSAP calculations are correct.
 */

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollVideoSection from './ScrollVideoSection'
import type { ReactElement } from 'react'
import type { OverlayProps } from './Overlay'
gsap.registerPlugin(ScrollTrigger)

interface FullScrollSectionProps {
  videoSrc: string
  scrollSpeed?: number
  sectionId: string
  overlays?: ReactElement<OverlayProps> | ReactElement<OverlayProps>[]
  introSection: ReactElement
  outroSection: ReactElement
}

/**
 * Renders a full screen section containing a scroll-synced video and optional
 * overlays. Intro and outro content are provided as React elements so each
 * section can customise them.
 */
export default function FullScrollSection({
  videoSrc,
  scrollSpeed = 400,
  sectionId,
  overlays,
  introSection,
  outroSection,
}: FullScrollSectionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  // track when the video metadata has loaded so ScrollTrigger can be activated
  const [videoReady, setVideoReady] = useState(false)


  return (
    <section id={sectionId} ref={wrapperRef} className="relative bg-black text-white">
      {/* Section Intro */}
      {introSection}

      {/* Vidéo scrollable */}
      <ScrollVideoSection
        src={videoSrc}
        scrollSpeed={scrollSpeed}
        activateTriggers={videoReady}
        onReady={() => setVideoReady(true)}
      >
        {overlays}
      </ScrollVideoSection>

      {/* Section Outro */}
      {outroSection}
    </section>
  )
}
