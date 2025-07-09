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
  const base = align === 'fullscreen' ?
    'absolute inset-0 p-6 w-screen h-screen flex items-center justify-center' :
    'absolute p-3 sm:p-6 w-[100vw] max-w-xs sm:max-w-md lg:min-w-4xl min-w-full flex flex-col items-center justify-center max-h-[90vh] overflow-y-auto'

  const positionMap: Record<string, string> = {
    top: 'top-4 left-1/2 -translate-x-1/2 sm:left-1/2',
    bottom: 'bottom-14 left-1/2 -translate-x-1/2 sm:left-1/2',
    left: 'top-1/2 left-4 -translate-y-1/2 sm:top-1/2',
    right: 'top-1/2 right-4 -translate-y-1/2 sm:top-1/2',
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'top left': 'top-4 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0',
    'top right': 'top-4 left-1/2 -translate-x-1/2 sm:left-auto sm:right-4 sm:translate-x-0',
    'bottom left': 'bottom-14 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0',
    'bottom right': 'bottom-14 left-1/2 -translate-x-1/2 sm:left-auto sm:right-4 sm:translate-x-0',
  }


  const alignment = align ?? 'center'

  return `${base} ${positionMap[alignment] || positionMap['center']}`
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
          className={`${getPositionClass(align)} ${className} z-50 backdrop-blur-sm bg-black/70 text-white rounded-xl shadow-lg`}
        >
          <div className="w-full text-center space-y-3 text-xs sm:text-sm md:text-base leading-relaxed">
            
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
