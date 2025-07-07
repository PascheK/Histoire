'use client'

/**
 * Introductory screen for the "After" phase detailing recovery priorities and
 * presenting early assessment data.
 */

import SectionHeader from '@/components/common/SectionHeader'
import { motion } from 'framer-motion'

export default function IntroSection() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center p-8 text-center bg-white text-black gap-8">
      <SectionHeader title="Interpretable, Scalable, Actionable: Our Post-Disaster Workflow" />
          <motion.p
        className="max-w-2xl text-lg mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Data becomes action.
We analyze affected buildings, estimate debris volumes, and simulate future risks—all in a transparent and interpretable way.
      </motion.p>
    </section>
  )
}
