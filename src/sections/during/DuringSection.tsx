'use client'

/**
 * Section handling the "During" phase. Contains a scroll-driven video and
 * navigation triggers for moving between phases.
 */

import ScrollSectionTrigger from '@/components/ScrollSectionTrigger'
import IntroSection from './IntroSection'
import {  useRef } from 'react'
type Props = {
  onNext: () => void
  onBack: () => void
}

export default function DuringSection({ onNext, onBack }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <ScrollSectionTrigger
        onTrigger={onBack}
        text="Go back to the previous section"
        direction="up"
      />
          <section id='during-section' ref={wrapperRef} className="relative bg-black text-white">
           <IntroSection />
          </section>
      <ScrollSectionTrigger
        onTrigger={onNext}
        text="Continue to next section"
        direction="down"
      />
    </>
  )
}
