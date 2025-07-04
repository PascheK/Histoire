'use client'

/**
 * Landing hero introducing the storytelling experience.
 * Displays a background image with animated text and a pulsing icon.
 */

import { motion } from 'framer-motion'
import { AlertTriangle, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <Image
        src="/hero.jpg"
        alt="Satellite view of Hurricane Beryl at night"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay foncé pour lisibilité */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      <div className="z-10 flex flex-col items-center max-w-3xl text-white h-[80%] justify-evenly">
        <div className='flex flex-col items-center mb-8'>
<motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          <AlertTriangle className="w-12 h-12 text-yellow-400 animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-md"
        >
          Understanding Disaster Impact with Open Data and Scalable Tools
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg sm:text-xl text-white/90 drop-shadow-sm"
        >
          A transparent, open-source analysis of Hurricane Beryl&apos;s aftermath across the Caribbean.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-4 text-sm sm:text-base text-white/80 max-w-xl"
        >
          A walkthrough of our full disaster analysis workflow—from preparedness to actionable insights.
        </motion.p>
        </div>
        

        <motion.div
          className="bottom-12 text-white flex flex-col items-center gap-2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-sm sm:text-base opacity-80">
            Scroll down to explore the workflow from preparedness to analysis.
          </span>
          <ChevronDown className="w-7 h-7 opacity-80" />
        </motion.div>
      </div>
    </section>
  )
}
