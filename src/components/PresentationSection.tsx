'use client'

/**
 * Coordinates the main scroll-driven presentation consisting of the
 * "before", "during" and "after" phases. Handles navigation logic, transitions
 * and displays a bottom navigation bar for manual section selection.
 */

import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Navbar from './layout/Navbar'
const BeforeSection = dynamic(() => import('@/sections/before/BeforeSection'))
const DuringSection = dynamic(() => import('@/sections/during/DuringSection'))
const AfterSection = dynamic(() => import('@/sections/after/AfterSection'))

import { useLoadingOverlay } from '@/context/LoadingOverlayContext'
import { useSmoothScroll } from '@/context/ScrollContext'

/**
 * Main container orchestrating section transitions and navigation controls.
 */
export default function PresentationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const lastSelected = useRef<'before' | 'during' | 'after' | null>(null)
  const [selected, setSelected] = useState<'before' | 'during' | 'after' | null>('before')
  const [canChangeSection, setCanChangeSection] = useState(true)
  const [isNavbarChanged, setIsNavbarChanged] = useState(false)
  const { show, hide } = useLoadingOverlay()
  const { lenis } = useSmoothScroll()


  // Determines whether we're moving forward or backward in section flow
  /**
   * Returns the scroll direction between two sections.
   *
   * @param from - currently active section or null
   * @param to - next section to navigate to
   */
  function getScrollDirection(
    from: string | null,
    to: string
  ): 'forward' | 'backward' {
    const order = ['before', 'during', 'after']
    if (!from) return 'forward'
    return order.indexOf(to) > order.indexOf(from) ? 'forward' : 'backward'
  }

  /**
   * Called after a section transition animation completes. Handles scrolling to
   * the appropriate element and showing a loading overlay during the movement.
   */
  const handleAfterAnimate = () => {
    if (!lastSelected.current) {
      // first load: simply show the overlay briefly before enabling scroll
      show();
      document.body.style.overflow = 'hidden'
      lenis?.stop();
      lastSelected.current = selected;
      setTimeout(() => {
        hide();
        lenis?.start();
        document.body.style.overflow = '' // Restore scroll
      }, 1600);
    } else {
      // on subsequent section changes we scroll the page to the next section
      if (!selected) return;
      const direction = !isNavbarChanged ? getScrollDirection(lastSelected.current, selected) : 'forward';
      const target = document.getElementById(`${selected}-section`);
      lastSelected.current = selected;

      if (!target) return;

      // show loading overlay while scrolling to the next section
      show();
      document.body.style.overflow = 'hidden'
      lenis?.stop();
      // slight delay to allow the overlay to appear before scrolling
      setTimeout(() => {
        target.scrollIntoView({
          behavior: 'smooth',
          block: direction === 'forward' ? 'start' : 'end',
        });

        // hide the overlay once scrolling is complete
        setTimeout(() => {
          hide();
          setIsNavbarChanged(false);
          setCanChangeSection(true);
          document.body.style.overflow = '' // Restore scroll
          lenis?.start();
        }, 1600); // ajuste en fonction de ton scroll/transition
      }, 100); // petit délai pour éviter le "flash"
    }

  };


  return (
    <section ref={sectionRef} className="relative">
      {/* Section content rendering with transition */}
      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onAnimationComplete={handleAfterAnimate}
          >
            {selected === 'before' && (
              <BeforeSection
                onNext={() => {
                  if (!canChangeSection) return;
                  lenis?.stop();
                  document.body.style.overflow = 'hidden'
                  setCanChangeSection(false);
                  setSelected('during')
                }}
              />
            )}
            {selected === 'during' && (
              <DuringSection
                onNext={() => {
                  if (!canChangeSection) return;
                  lenis?.stop();
                  document.body.style.overflow = 'hidden'
                  setCanChangeSection(false);
                  setSelected('after')
                }}
                onBack={() => {
                  if (!canChangeSection) return;
                  lenis?.stop();
                  document.body.style.overflow = 'hidden'
                  setCanChangeSection(false);
                  setSelected('before')
                }}
              />
            )}
            {selected === 'after' && (
              <AfterSection
                onBack={() => {
                  if (!canChangeSection) return;
                  lenis?.stop();
                  document.body.style.overflow = 'hidden'
                  setCanChangeSection(false);
                  setSelected('during')
                }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom navbar with animated presence */}
      <AnimatePresence>
        <motion.div
          key="navbar"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-2 left-0 w-full z-50 flex justify-center pointer-events-none"
        >
          <div className="pointer-events-auto">
            <Navbar onSelect={setSelected} selected={selected} canChangeSection={canChangeSection} onChangeSection={setCanChangeSection} onNavbarChanged={setIsNavbarChanged} />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
