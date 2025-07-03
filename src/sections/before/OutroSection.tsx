// Before/OutroSection.tsx
'use client'

/**
 * Outro for the "Before" phase summarising mitigation effects.
 */

import { motion } from 'framer-motion'
import SectionHeader from '@/components/common/SectionHeader'
import BulletPointCard from '@/components/common/BulletPointCard'

export default function OutroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-12 text-center bg-gray-100 text-black">
      <SectionHeader title="Preparedness Outcomes" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-8"
      >
        <BulletPointCard
          title="Impacts Mitigated"
          points={[
            'Timely evacuations reduced potential casualties.',
            'Local authorities coordinated effectively before landfall.',
            'Pre-deployment of resources ensured rapid crisis response.'
          ]}
        />
      </motion.div>
    </section>
  )
}
