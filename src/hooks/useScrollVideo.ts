import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

/**
 * Hook tying an HTML5 video to scroll progress via GSAP. Returns refs for the
 * container, video element and wrapper as well as the current playback time.
 */

export type UseScrollVideoProps = {
  src: string
  scrollSpeed?: number
  activate?: boolean
  onReady?: () => void
}

gsap.registerPlugin(ScrollTrigger)

/**
 * Attach scrolling behaviour to a video element.
 *
 * @param params.src          - path to the video file
 * @param params.scrollSpeed  - multiplier used to calculate scroll height
 * @param params.activate     - whether the ScrollTrigger should be active
 * @param params.onReady      - called once video metadata is loaded
 */
export function useScrollVideo({
  src,
  scrollSpeed = 400,
  activate = false,
  onReady,
}: UseScrollVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [currentTime, setCurrentTime] = useState(0)
      const lastFrame = useRef(0)
  const lenis = new Lenis();

  
  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);
    lenis.on('scroll', ScrollTrigger.update)
  useEffect(() => {
    if (!activate) return

    const video = videoRef.current
    const container = containerRef.current
    const wrapper = wrapperRef.current
    if (!video || !container || !wrapper) return

    // ensure previous ScrollTriggers are removed before creating new ones
    const killAll = () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
      gsap.globalTimeline.clear()
    }

    let tween: gsap.core.Tween | null = null
    const duration = video.duration
    if (!isFinite(duration) || duration === 0) return
    const height = duration * scrollSpeed
    killAll()
    const playhead = { frame: 0 }

    // advance the video playback in sync with scroll position
    tween = gsap.to(playhead, {
  frame: duration,
  ease: 'none',
  scrollTrigger: {
    trigger: container,
    start: 'top top',
    end: `+=${height}`,
    scrub: 0.1,
    pin: true,
    onUpdate: () => {
video.currentTime = playhead.frame

  // Seulement mettre à jour si le temps a changé de façon significative
  if (Math.abs(lastFrame.current - playhead.frame) > 0.1) {
    lastFrame.current = playhead.frame
    setCurrentTime(playhead.frame)
  }
    },
  },
})


    // secondary trigger used to slightly scale the wrapper for a subtle effect
    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: `+=${height}`,
      scrub: true,
      onUpdate: self => {
        const p = self.progress
        if (p < 0.15 || p > 0.85) {
          gsap.to(wrapper, { scale: 0.8, overwrite: 'auto' })
        } else {
          gsap.to(wrapper, { scale: 0.95, opacity: 1, overwrite: 'auto' })
        }
      },
    })

    ScrollTrigger.refresh()

    return () => {
      killAll()
      tween?.kill()
    }
  }, [activate, scrollSpeed, src])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // invoke callback once metadata is ready so caller can start animations
    const onMeta = () => {
      onReady?.()
    }

    video.addEventListener('loadedmetadata', onMeta)
    return () => {
      video.removeEventListener('loadedmetadata', onMeta)
    }
  }, [onReady])

  return { containerRef, videoRef, wrapperRef, currentTime }
}
