'use client'

/**
 * Animated overlay element that becomes visible when the current video time is
 * within the provided `[appear, disappear]` range. Positioning is controlled
 * via the `align` prop.
 */

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
 
export type OverlayProps = {
  appear: number
  disappear?: number
  currentTime?: number
  align?:
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'center'
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right'
  | 'fullscreen'
  className?: string
  children: ReactNode
}

/**
 * Maps an alignment value to Tailwind classes describing where the overlay
 * should appear on screen.
 */
function getPositionClass(align?: string): string {
  // Base area: use a quadrant (1/2 width x 1/2 height). The inner box will take 75% of this area.
  if (align === 'fullscreen') {
    return 'absolute inset-0 p-6 w-screen h-screen flex items-center justify-center';
  }

  const quadrantBase = 'absolute w-1/2 h-1/2 flex items-center justify-center p-2 sm:p-4';

  const quadrantPos: Record<string, string> = {
    top: 'top-0 left-1/2 -translate-x-1/2',
    bottom: 'bottom-0 left-1/2 -translate-x-1/2',
    left: 'top-1/2 left-0 -translate-y-1/2',
    right: 'top-1/2 right-0 -translate-y-1/2',
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'top left': 'top-0 left-0',
    'top right': 'top-0 right-0',
    'bottom left': 'bottom-0 left-0',
    'bottom right': 'bottom-0 right-0',
  };

  const alignment = align ?? 'center';
  return `${quadrantBase} ${quadrantPos[alignment] || quadrantPos['center']}`;
}

/**
 * Displays content as an animated overlay tied to video playback.
 *
 * @param {OverlayProps} props Overlay configuration.
 */
export default function Overlay({
  appear,
  disappear,
  currentTime,
  align = 'center',
  className = '',
  children,
}: OverlayProps) {
  // Overlay is shown only when the current video timestamp falls within the
  // designated range
  const isVisible =
    currentTime !== undefined &&
    currentTime >= appear &&
    (disappear === undefined || currentTime < disappear)

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className={`${getPositionClass(align)} ${className} z-50`}
          >
            {/* Inner content box: centered inside its quadrant, roughly 1/8 screen (1/2 of quadrant size) */}
            <div className="max-w-full max-h-full flex items-center justify-center">
              <div className="backdrop-blur-sm bg-black/70 text-white rounded-3xl shadow-2xl px-10 sm:px-12 py-8 sm:py-9 overflow-auto text-center space-y-8 text-4xl sm:text-5xl md:text-6xl leading-relaxed w-full h-full flex flex-col justify-center">
                {children}
              </div>
            </div>
          </motion.div>
      )}
    </AnimatePresence>
  )
}
