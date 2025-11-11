// Lightweight sanity test executed manually (no test runner configured)
import { computeActiveHotspots } from './hotspotWindow'
import { Hotspot } from '@/types/hotspot'

const hotspots: Hotspot[] = [
  { id: 'a', time: 5, title: 'A', description: '' },
  { id: 'b', time: 10, title: 'B', description: '' },
]

function run() {
  console.log('Test computeActiveHotspots')
  console.log(computeActiveHotspots(hotspots, 5)) // expect ['a']
  console.log(computeActiveHotspots(hotspots, 5.7)) // within 0.8 -> ['a']
  console.log(computeActiveHotspots(hotspots, 9.4)) // within 0.8 of b? diff=0.6 -> ['b']
  console.log(computeActiveHotspots(hotspots, 7)) // none
}

run()
