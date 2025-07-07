// During/OutroSection.tsx
'use client'

/**
 * Outro portion of the "During" phase highlighting immediate achievements.
 */

import { motion } from 'framer-motion'
import SectionHeader from '@/components/common/SectionHeader'
import VideoPlayer from '@/components/common/VideoPlayer'
import Image from 'next/image'

export default function OutroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-12 text-center bg-gray-100 text-black">
      <SectionHeader title="Interactive StoryMaps present real-time updates in a way that's easy to follow" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-8 w-full flex flex-col items-center justify-center gap-4"
      >
        <Image  src={'/storymap.png'}
                    alt={'storymap'}
            width={800}
            height={100}
            className="object-contain rounded-2xl"/>
                  <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 } }
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center text-sm md:text-base text-gray-700 max-w-xl"
      >
        StoryMaps offer geospatial storytelling and situational awareness
      </motion.p>
      <button
        onClick={() => window.open('https://ims.unmas.org/portal/apps/storymaps/stories/17dda5186f7f493a9fda335e9156c97d', '_blank')}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        View StoryMap
      </button>
              <VideoPlayer
  src="/videos/during.mp4"
  poster=""
  autoPlay
  muted
  loop
  
  className="rounded-xl shadow-xl w-1/3"
/>
      </motion.div>
    </section>
  )
}
