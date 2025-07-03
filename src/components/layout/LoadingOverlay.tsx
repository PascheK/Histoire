// components/LoadingOverlay.tsx
'use client'

/**
 * Full-screen overlay used to indicate loading during section changes. The
 * visibility is controlled via `LoadingOverlayContext`.
 */

import { motion, AnimatePresence } from 'framer-motion'
import { useLoadingOverlay } from '@/context/LoadingOverlayContext'
type Props = {
  text?: string
}

/**
 * Render the loading overlay if `isVisible` from context is true.
 */
export default function LoadingOverlay({ text = 'Loading...' }: Props) {
  const { isVisible } = useLoadingOverlay()

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black text-white flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <div className="text-center space-y-4">
            <p className="text-lg font-semibold">{text}</p>
            <div className="w-24 h-1 bg-white animate-pulse mx-auto" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
