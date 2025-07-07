'use client'

import Lenis from "lenis"
import React, { useEffect, createContext, useContext, useState } from "react"
type SmoothScrollContextType = {
  lenisRef: Lenis | null
}
const SmoothScrollContext = createContext< SmoothScrollContextType | null>(null)


export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [lenisRef, setLenisRef] = useState<Lenis | null>(null)
  const [, setRafState] = useState<number | null>(null)

  useEffect(() => {
    const scroller = new Lenis()
    let rf;

    function raf(time: number) {
      scroller.raf(time)
      rf = requestAnimationFrame(raf)
    }
    rf = requestAnimationFrame(raf);
    setRafState(rf)
    setLenisRef(scroller);

  }, [])

    return (
    <SmoothScrollContext.Provider value={{ lenisRef }}>
      {children}
    </SmoothScrollContext.Provider>
  )

}


export function useSmoothScroll() {
  const context = useContext(SmoothScrollContext)
  if (!context) throw new Error('useLoadingOverlay must be used within LoadingOverlayProvider')
  return context
}
