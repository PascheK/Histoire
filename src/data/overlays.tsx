import type { OverlayItem } from '@/types/overlay'
import type { Hotspot } from '@/types/hotspot'
import { courseSlides, buildOverlaysFromSlides, buildHotspotsFromSlides } from './courseContent'
/**
 * Overlay configuration objects for each presentation phase. These values are
 * consumed by `renderOverlays` to create actual overlay elements.
 */



export const afterCheckpoints: number[] = courseSlides.map(s => s.time)
export const afterCheckpointTitles: string[] = courseSlides.map(s => s.title)


export const afterOverlays: OverlayItem[] = buildOverlaysFromSlides(courseSlides)

/**
 * Generate one hotspot per checkpoint time with alternating button positions.
 */

export const afterHotspots: Hotspot[] = buildHotspotsFromSlides(courseSlides)
