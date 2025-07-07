'use client'

/**
 * Closing text for the "After" phase encouraging long-term recovery efforts.
 */

import SectionHeader from '@/components/common/SectionHeader'
import VideoPlayer from '@/components/common/VideoPlayer'
import { motion } from 'framer-motion'

export default function OutroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-12 text-center bg-gray-100 text-black gap-3">
      <SectionHeader title="A Path Forward" />


            <VideoPlayer
        src="/videos/Flood_Simulation.mp4"
        poster=""
        autoPlay
        muted
        loop
        
        className="rounded-xl shadow-xl"
      />
                  <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 } }
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center text-sm md:text-base text-gray-700 max-w-xl mt-4"
      >
        Adding flood simulation provides another layer of insight for planning recovery.
      </motion.p>



    </section>
  )
}
