// context/LoadingOverlayContext.tsx
'use client'

/**
 * React context controlling the visibility of the global loading overlay.
 */

import { createContext, useContext, useState } from 'react'

type LoadingOverlayContextType = {
  show: () => void
  hide: () => void
  isVisible: boolean
}

const LoadingOverlayContext = createContext<LoadingOverlayContextType | null>(null)

/**
 * Wraps part of the React tree with a provider exposing show/hide functions for
 * the loading overlay.
 */
export function LoadingOverlayProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)

  const show = () => setIsVisible(true)
  const hide = () => setIsVisible(false)

  return (
    <LoadingOverlayContext.Provider value={{ show, hide, isVisible }}>
      {children}
    </LoadingOverlayContext.Provider>
  )
}

/**
 * Hook returning the loading overlay controls. Must be used within the
 * provider.
 */
export function useLoadingOverlay() {
  const context = useContext(LoadingOverlayContext)
  if (!context) throw new Error('useLoadingOverlay must be used within LoadingOverlayProvider')
  return context
}
