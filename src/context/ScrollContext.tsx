"use client"

import Lenis from "lenis"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useEffect, createContext, useContext, useState } from "react"

type SmoothScrollContextType = {
  lenis: Lenis | null
}

const SmoothScrollContext = createContext<SmoothScrollContextType | null>(null)

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    const scroller = new Lenis()
    setLenis(scroller)

    function raf(time: number) {
      scroller.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    scroller.on("scroll", ScrollTrigger.update)

    return () => {
      scroller.off("scroll", ScrollTrigger.update)
      scroller.destroy()
    }
  }, [])

  return (
    <SmoothScrollContext.Provider value={{ lenis }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}

export function useSmoothScroll() {
  const context = useContext(SmoothScrollContext)
  if (!context) {
    throw new Error("useSmoothScroll must be used within SmoothScrollProvider")
  }
  return context
}
