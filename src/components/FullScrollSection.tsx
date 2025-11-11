'use client'

/**
 * Wrapper component that renders a scroll-controlled video between an intro and
 * outro section. It waits for the video metadata to load before activating any
 * overlay triggers to ensure GSAP calculations are correct.
 */

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AutoScrollVideoSection from './AutoScrollVideoSection'
import type { ReactElement } from 'react'
import type { OverlayProps } from './Overlay'
import type { Hotspot } from '@/types/hotspot'
import type { ReactElement as RE } from 'react'
gsap.registerPlugin(ScrollTrigger)

interface FullScrollSectionProps {
  videoSrc: string
  scrollSpeed?: number
  sectionId: string
  overlays?: ReactElement<OverlayProps> | ReactElement<OverlayProps>[]
  introSection: ReactElement
  outroSection: ReactElement
  // New optional props forwarded to AutoScrollVideoSection
  autoScroll?: boolean
  autoScrollThreshold?: number
  autoScrollMode?: 'continuous' | 'step'
  checkpoints?: number[]
  hotspots?: Hotspot[]
  controls?: (api: {
    currentCheckpointIndex: number
    checkpoints: number[]
    scrollToCheckpoint: (index: number) => void
    isReady: boolean
  }) => RE | null
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
  autoScroll = false,
  autoScrollThreshold = 100,
  autoScrollMode = 'step',
  checkpoints,
  hotspots = [],
  controls,
}: FullScrollSectionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  // track when the video metadata has loaded so ScrollTrigger can be activated
  const [videoReady, setVideoReady] = useState(false)


  return (
    <section id={sectionId} ref={wrapperRef} className="relative bg-black text-white">
      {/* Section Intro */}
      {introSection}

      {/* Local loading state while the video buffers */}
      {!videoReady && (
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <p className="text-sm">Loading video...</p>
        </div>
      )}

      {/* Vidéo scrollable + auto-scroll + hotspots */}
      <AutoScrollVideoSection
        src={videoSrc}
        scrollSpeed={scrollSpeed}
        activateTriggers={videoReady}
        autoScroll={autoScroll}
        autoScrollThreshold={autoScrollThreshold}
        autoScrollMode={autoScrollMode}
        checkpoints={checkpoints}
        overlays={hotspots}
        onReady={() => setVideoReady(true)}
        controls={controls}
      >
        {overlays}
      </AutoScrollVideoSection>

      {/* Section Outro */}
      {outroSection}
    </section>
  )
}
