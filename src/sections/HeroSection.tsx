'use client'

/**
 * Landing hero introducing the storytelling experience.
 * Displays a background image with animated text and a pulsing icon.
 */

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
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


          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-md"
          >
            Hurricane Beryl
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-xl sm:text-2xl font-semibold mb-4 drop-shadow-md"
          >
            Building Damage Analysis with Open Data and Scalable Tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg sm:text-xl text-white/90 drop-shadow-sm"
          >
            A transparent, open-source analysis of Hurricane Beryl&apos;s aftermath across the Caribbean —from preparedness to actionable insights.
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
