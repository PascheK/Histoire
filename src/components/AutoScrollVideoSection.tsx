"use client"

import { useState, useMemo, ReactElement, Children, cloneElement, isValidElement } from 'react'
import { useScrollVideo } from '@/hooks/useScrollVideo'
import { Hotspot } from '@/types/hotspot'
import { HotspotButton } from './HotspotButton'
import { HotspotModal } from './HotspotModal'
import type { OverlayProps } from './Overlay'
import { HOTSPOT_EARLY_WINDOW_SEC, HOTSPOT_LATE_WINDOW_SEC } from '@/data/hotspotConfig'

export type AutoScrollVideoSectionProps = {
  src: string
  scrollSpeed?: number
  /** Enable/disable ScrollTrigger hooks */
  activateTriggers?: boolean
  /** Enable automatic scroll to next checkpoint */
  autoScroll?: boolean
  /** px window to trigger next checkpoint */
  autoScrollThreshold?: number
  /** override checkpoints in seconds */
  checkpoints?: number[]
  /** Overlay hotspots metadata */
  overlays?: Hotspot[]
  /** children overlays compatible with Overlay.tsx to be rendered */
  children?: ReactElement<OverlayProps> | ReactElement<OverlayProps>[]
  /** callback once video is ready (metadata) */
  onReady?: () => void
  /** auto scroll mode: 'continuous' (enchaîne) ou 'step' (pause à chaque checkpoint) */
  autoScrollMode?: 'continuous' | 'step'
  /** optional render-prop to render controls (e.g., Navbar) with navigation API */
  controls?: (api: {
    currentCheckpointIndex: number
    checkpoints: number[]
    scrollToCheckpoint: (index: number) => void
    isReady: boolean
  }) => ReactElement | null
}

export default function AutoScrollVideoSection({
  src,
  scrollSpeed = 400,
  activateTriggers = true,
  autoScroll = true,
  autoScrollThreshold = 100,
  checkpoints,
  overlays = [],
  children,
  onReady,
  autoScrollMode = 'step',
  controls,
}: AutoScrollVideoSectionProps) {
  const {
    containerRef,
    videoRef,
    wrapperRef,
    currentTime,
    checkpoints: computed,
    scrollToCheckpoint,
    currentCheckpointIndex,
    ready,
  } = useScrollVideo({
    src,
    scrollSpeed,
    activate: activateTriggers,
    autoScroll,
    autoScrollThreshold,
    checkpointsOverride: checkpoints,
    onReady,
    autoScrollMode,
  })

  const [openHotspot, setOpenHotspot] = useState<Hotspot | null>(null)

  // Hotspots visibles autour du checkpoint: [t - EARLY, t + LATE]
  const activeHotspotIds = useMemo(() => {
    if (!overlays.length) return new Set<string>()
    const times = computed && computed.length ? computed : overlays.map((h) => h.time)
    const ids = new Set<string>()
    overlays.forEach((h, i) => {
      const t = times[i] ?? h.time
      const ct = currentTime ?? 0
      if (ct >= t - HOTSPOT_EARLY_WINDOW_SEC && ct <= t + HOTSPOT_LATE_WINDOW_SEC) {
        ids.add(h.id)
      }
    })
    return ids
  }, [currentTime, computed, overlays])

  return (
    <div ref={containerRef} className="relative bg-black z-0">
      <div
        ref={wrapperRef}
        className="sticky top-0 w-screen h-screen flex items-center justify-center z-10 overflow-hidden will-change-transform backface-hidden"
      >
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover rounded-xl will-change-opacity"
        />

        {/* Render existing Overlay children with currentTime injected */}
        {Children.map(children, (child) =>
          isValidElement<OverlayProps>(child)
            ? cloneElement(child, { currentTime })
            : null
        )}

        {/* Hotspot buttons */}
        {overlays.map((h) => (
          <HotspotButton
            key={h.id}
            hotspot={h}
            active={activeHotspotIds.has(h.id)}
            onClick={(hs) => setOpenHotspot(hs)}
          />
        ))}

        {/* Auto scroll UI removed as per latest requirement */}
        {controls?.({
          currentCheckpointIndex,
          checkpoints: computed,
          scrollToCheckpoint: (i: number) => scrollToCheckpoint(i),
          isReady: ready,
        })}
      </div>

      {/* Hotspot modal */}
      <HotspotModal hotspot={openHotspot} onClose={() => setOpenHotspot(null)} />
    </div>
  )
}
