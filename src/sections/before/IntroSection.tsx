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

export default function IntroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-12 text-center bg-white text-black">
      <SectionHeader title="Laying the Groundwork:
       Preparedness Before Disaster Strikes" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-8"
      >
                <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg sm:text-xl text-black/90 drop-shadow-sm"
        >
          We can’t turn back time to collect data. But we can prepare: <br/>
          Using open building footprint datasets and satellite imagery, we create a pre-disaster exposure baseline
        </motion.p>
      </motion.div>
    </section>
  )
}