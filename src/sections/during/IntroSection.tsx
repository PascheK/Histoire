// During/IntroSection.tsx
'use client'

/**
 * Intro for the "During" phase presenting key observations while the storm was
 * ongoing.
 */

import { motion } from 'framer-motion'
import SectionHeader from '@/components/common/SectionHeader'
import BulletPointCard from '@/components/common/BulletPointCard'

export default function IntroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-12 text-center bg-white text-black">
      <SectionHeader title="Crisis Response in Action" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-8"
      >
        <BulletPointCard
          title="Key Observations"
          points={[
            'Over 90% of buildings sustained damage, with widespread power and communication outages.',
            'Emergency response teams were deployed immediately to assess and stabilize affected areas.',
            'Coordination with local and international partners was crucial for efficient resource deployment.'
          ]}
        />
      </motion.div>
    </section>
  )
}
