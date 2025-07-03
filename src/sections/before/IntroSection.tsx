// Before/IntroSection.tsx
'use client'

/**
 * Intro screen for the "Before" phase outlining preparation steps.
 */

/**
 * Intro screen for the "Before" phase outlining preparation steps.
 */

import { motion } from 'framer-motion'
import SectionHeader from '@/components/common/SectionHeader'
import BulletPointCard from '@/components/common/BulletPointCard'

export default function IntroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-12 text-center bg-white text-black">
      <SectionHeader title="Preparedness Phase" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-8"
      >
        <BulletPointCard
          title="Pre-Landfall Actions"
          points={[
            'Evacuation plans activated in high-risk zones.',
            'Emergency communication systems tested and deployed.',
            'Critical infrastructure safeguarded against impact.'
          ]}
        />
      </motion.div>
    </section>
  )
}