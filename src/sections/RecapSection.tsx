'use client'

/**
 * Final section summarising the three phases and providing a downloadable
 * report.
 */

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import SectionHeader from '@/components/common/SectionHeader'

export default function RecapSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-16 bg-black text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl"
      >
        <SectionHeader title="Crisis Response Summary" />

        <p className="mb-10 text-base sm:text-lg opacity-80">
          The Hurricane Beryl response was structured into three operational phases:
          preparation, emergency management, and recovery. This page summarizes
          the critical findings and actions undertaken at each step.
        </p>

        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-6 mb-12 text-left text-white">
          <div className="flex items-start gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-md text-white text-sm sm:text-base max-w-xl">
            <div className="w-6 h-6 flex items-center justify-center text-white">
              <span>🧭</span>
            </div>
            <p className="leading-snug">🟡 Before: Local teams assessed emergency supplies, validated shelter locations, and activated early warning systems.</p>
          </div>
          <div className="flex items-start gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-md text-white text-sm sm:text-base max-w-xl">
            <div className="w-6 h-6 flex items-center justify-center text-white">
              <span>🌪️</span>
            </div>
            <p className="leading-snug">🔴 During: Real-time damage monitoring, rescue coordination, and meteorological alerts enabled targeted interventions.</p>
          </div>
          <div className="flex items-start gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-md text-white text-sm sm:text-base max-w-xl">
            <div className="w-6 h-6 flex items-center justify-center text-white">
              <span>🔧</span>
            </div>
            <p className="leading-snug">🟢 After: Population safety assessments, hospital reopenings, and debris clearance were initiated immediately.</p>
          </div>
        </div>
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
