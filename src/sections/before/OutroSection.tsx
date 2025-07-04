// Before/OutroSection.tsx
'use client'

/**
 * Outro for the "Before" phase summarising mitigation effects.
 */

import SectionHeader from '@/components/common/SectionHeader'
import VideoPlayer from '@/components/common/VideoPlayer'

export default function OutroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-12 text-center bg-gray-100 text-black">
      <SectionHeader title="Our early-warning system automatically detects events and triggers response protocols." />
      <VideoPlayer
  src="/videos/Alert.mp4"
  poster=""
  autoPlay
  muted
  loop
  
  className="rounded-xl shadow-xl w-1/3"
/>
    </section>
  )
}
