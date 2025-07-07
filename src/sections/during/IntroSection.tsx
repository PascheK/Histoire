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
      <SectionHeader title="Coordinated Action During the Storm" />
      <motion.p
        className="max-w-2xl text-lg mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        When a disaster hits, coordination is critical.
We create shared dashboards and map interfaces to ensure all actors work with the same data, and have the same level of knowledge.
      </motion.p>
<IframePlayer
  src="https://ims.unmas.org/portal/apps/dashboards/54adbd9526a646cf8135a30717b493c6"
  allow="autoplay; encrypted-media"
  allowFullScreen
  className=""
/>   
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 } }
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center text-sm md:text-base text-gray-700 max-w-xl"
      >
        ArcGIS Dashboards connect responders in real time.
      </motion.p>
    </section>
  )
}
