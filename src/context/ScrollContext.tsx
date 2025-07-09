"use client"

import Lenis from "lenis"
import gsap from "gsap"
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

    // sync Lenis with GSAP's internal ticker for consistent timing
    const updateLenis = (time: number) => {
      scroller.raf(time * 1000)
    }

    gsap.ticker.add(updateLenis)
    gsap.ticker.fps(30) // reduce frame updates to minimise jank

    const handleScroll = () => ScrollTrigger.update()
    scroller.on('scroll', handleScroll)

    return () => {
      scroller.off('scroll', handleScroll)
      gsap.ticker.remove(updateLenis)
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
