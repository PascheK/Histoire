'use client'

/**
 * Closing text for the "After" phase encouraging long-term recovery efforts.
 */

import { motion } from 'framer-motion'
import SectionHeader from '@/components/common/SectionHeader'
import VideoPlayer from '@/components/common/VideoPlayer'
import IframePlayer from '@/components/common/IframePlayer'

export default function OutroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-12 text-center bg-gray-100 text-black">
      <SectionHeader title="A Path Forward" />
      <motion.p
        className="max-w-2xl text-lg mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        With damage assessed and resources mobilized, the focus now shifts to long-term recovery. Coordinated efforts will ensure safe rebuilding, informed planning, and stronger preparedness for the future.
      </motion.p>
<VideoPlayer
  src="/videos/Flood_Simulation.mp4"
  poster=""
  autoPlay
  muted
  loop
  controls
  className="rounded-xl shadow-xl"
/>

<IframePlayer
  src="https://ims.unmas.org/portal/apps/dashboards/54adbd9526a646cf8135a30717b493c6"
  allow="autoplay; encrypted-media"
  allowFullScreen
  className="rounded-xl shadow-md"
/>



    </section>
  )
}
