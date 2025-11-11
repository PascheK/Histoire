// Returns active hotspot ids for a given currentTime and window (seconds)
import { Hotspot } from '@/types/hotspot'
export function computeActiveHotspots(hotspots: Hotspot[], currentTime: number, windowSec = 0.8): string[] {
  return hotspots.filter(h => Math.abs(currentTime - h.time) <= windowSec).map(h => h.id)
}
