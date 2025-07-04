'use client'

/**
 * Preloads essential assets (currently videos) before rendering the
 * application. This prevents scroll-based calculations from running before the
 * media metadata is available.
 */

import { useEffect, useState } from 'react'

// List of videos to preload
const videoSources = ['/videos/pre.mp4']

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {

    const waitForVideos = async () => {
      // create hidden video elements to preload metadata
      const loadPromises = videoSources.map((src) => {
        return new Promise<void>((resolve) => {
          const video = document.createElement('video')
          video.src = src
          video.preload = 'auto'
          video.muted = true
          video.playsInline = true
          video.load() // ok ici car utilisé une seule fois

          video.addEventListener('loadedmetadata', () => resolve())
        })
      })

      await Promise.all(loadPromises)
      setIsReady(true)
    }

    waitForVideos()
  }, [])

  // Don't render children until the initial assets are preloaded
  if (!isReady) return null
  return <>{children}</>
}
