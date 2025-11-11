'use client'

/**
 * Wraps the "After" phase video content and provides a trigger to return to the
 * previous phase.
 */

import FullScrollSection from '@/components/FullScrollSection'
import IntroSection from './IntroSection'
import OutroSection from './OutroSection'
import { renderOverlays } from '@/utils/overlayUtils'
import { useMemo } from 'react'
import { afterOverlays, afterCheckpoints, afterCheckpointTitles, afterHotspots } from '@/data/overlays'
import type { Hotspot } from '@/types/hotspot'
import Navbar from '@/components/layout/Navbar'


export default function AfterSection() {
  // Map overlay configs to React elements once
  const overlays = useMemo(() => renderOverlays(afterOverlays), [])

  // Hotspots: one per checkpoint
  const hotspots: Hotspot[] = afterHotspots
  const checkpoints = afterCheckpoints
  const checkpointTitles = afterCheckpointTitles

  return (
    <>
      <FullScrollSection
        videoSrc="/videos/crise_1929.mp4"
        sectionId="after-section"
        scrollSpeed={1000}
        introSection={<IntroSection />}
        outroSection={<OutroSection />}
          autoScrollMode="step"
          autoScrollThreshold={120}
          overlays={overlays}
        hotspots={hotspots}
        checkpoints={checkpoints}
        controls={({ currentCheckpointIndex, checkpoints: cps, scrollToCheckpoint, isReady }) => (
          <>
            {/* Vertical checkpoint list pinned to the right (inside the video only) */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
              <div className="pointer-events-auto bg-black/60 backdrop-blur rounded-lg p-2 w-40 max-h-[70vh] overflow-y-auto shadow-lg">
                <ul className="flex flex-col gap-1">
                  {cps.map((_, i) => {
                    const t = checkpointTitles[i] ?? `Étape ${i + 1}`
                    const active = i === currentCheckpointIndex
                    return (
                      <li key={t}>
                        <button
                          type="button"
                          onClick={() => isReady && scrollToCheckpoint(i)}
                          disabled={!isReady}
                          className={`w-full text-left px-2 py-1 rounded-md text-xs transition ${!isReady ? 'opacity-50 cursor-not-allowed' : active ? 'bg-white text-black font-semibold' : 'text-white/80 hover:bg-white/10'}`}
                        >
                          {t}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            {/* Compact horizontal navbar at the bottom center of the video */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              <div className="pointer-events-auto">
                <Navbar
                  onPrev={() => isReady && scrollToCheckpoint(Math.max(0, currentCheckpointIndex - 1))}
                  onNext={() => isReady && scrollToCheckpoint(Math.min(cps.length - 1, currentCheckpointIndex + 1))}
                  disablePrev={!isReady || currentCheckpointIndex <= 0}
                  disableNext={!isReady || currentCheckpointIndex >= cps.length - 1}
                  currentIndex={currentCheckpointIndex}
                  total={cps.length}
                  showCounter
                />
              </div>
            </div>
          </>
        )}
      />
      
    </>
  )
}
