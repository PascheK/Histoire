'use client'

import { useRef } from 'react'
import AfterSection from '@/sections/after/AfterSection'

export default function PresentationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  // PresentationSection n'abrite plus de logique de navigation; celle-ci vit dans AfterSection (contrôles du player)

  return (
    <section ref={sectionRef} className="relative">
      {/* Section vidéo scrollable uniquement */}
      <div id="video-scroll-container" />
      <AfterSection />

      {/* La navigation est maintenant rendue exclusivement dans AfterSection via controls */}
    </section>
  )
}