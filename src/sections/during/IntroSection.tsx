// During/IntroSection.tsx
'use client'

/**
 * Intro for the "During" phase presenting key observations while the storm was
 * ongoing.
 */

import { motion } from 'framer-motion'
import SectionHeader from '@/components/common/SectionHeader'
import IframePlayer from '@/components/common/IframePlayer'

export default function IntroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-12 text-center bg-white text-black">
      <SectionHeader title="Monitoring the situation" />
      <motion.p
        className="max-w-2xl text-lg mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        When a disaster hits, coordination is critical. <br />
        We create shared dashboards and map interfaces to ensure all actors work with the same level of knowledge.

      </motion.p>
      <div className='md:w-4/5 w-full flex justify-center mt-8 mb-4'>
        <IframePlayer
          src="https://ims.unmas.org/portal/apps/storymaps/stories/17dda5186f7f493a9fda335e9156c97d"
          allow="autoplay; encrypted-media"
          allowFullScreen

        />
      </div>

      <button
        onClick={() => window.open('https://ims.unmas.org/portal/apps/storymaps/stories/17dda5186f7f493a9fda335e9156c97d', '_blank')}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        View StoryMap
      </button>

    </section>
  )
}
