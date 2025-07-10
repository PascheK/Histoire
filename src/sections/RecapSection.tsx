'use client'

/**
 * Final section summarising the three phases and providing a downloadable
 * report.
 */

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import SectionHeader from '@/components/common/SectionHeader'
import IframePlayer from '@/components/common/IframePlayer'

export default function RecapSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-16 bg-black text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full max-w-4/5 flex flex-col items-center gap-6"
      >
        <SectionHeader title="Crisis Response Summary" />

        <p className="mb-10 text-base sm:text-lg opacity-80">
          The Hurricane Beryl response was structured into three operational phases: <br/>
Preparation, Emergency Management, and Recovery. <br/>
The Dashboard below summarises the result of the analysis pipeline.

        </p>
          <IframePlayer
  src="https://geoportal-psc.unops.org/arcgis/apps/dashboards/8bbe3516127d4fd09c2f5235a22b26f1"
  allow="autoplay; encrypted-media"
  allowFullScreen
  className="w-full"
/>  
 
        <motion.a
          href="/beryl-report.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-lg font-semibold text-white shadow-lg"
        >
          <Download className="w-5 h-5" />
          Download Full Report
        </motion.a>
      </motion.div>
    </section>
  )
}
