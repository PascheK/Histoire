import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { useSmoothScroll } from '@/context/ScrollContext'

export type UseScrollVideoProps = {
  src: string
  scrollSpeed?: number
  activate?: boolean
  onReady?: () => void
  /** Automatically scrolls to next checkpoint when near current one */
  autoScroll?: boolean
  /** pixel threshold around checkpoint position to trigger auto advance */
  autoScrollThreshold?: number
  /** callback when auto scroll engages */
  onAutoAdvance?: (fromIndex: number, toIndex: number) => void
  /** manual checkpoints override; if not provided generated each 5s */
  checkpointsOverride?: number[]
  /** auto scroll mode: continuous chain or step-by-step (pause at each checkpoint) */
  autoScrollMode?: 'continuous' | 'step'
}

gsap.registerPlugin(ScrollTrigger)

export function useScrollVideo({
  src,
  scrollSpeed = 400,
  activate = false,
  onReady,
  autoScroll = false,
  autoScrollThreshold = 100,
  onAutoAdvance,
  checkpointsOverride,
  autoScrollMode = 'step',
}: UseScrollVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const mainScrollTriggerRef = useRef<ScrollTrigger | null>(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [ready, setReady] = useState(false)
  const [checkpoints, setCheckpoints] = useState<number[]>([])
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(autoScroll)
  const [currentCheckpointIndex, setCurrentCheckpointIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(false)
  const [lockIndex, setLockIndex] = useState<number | null>(null)
  const lastFrame = useRef(0)
  const targetTime = useRef(0)
  const { lenis } = useSmoothScroll()

  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0)

  useEffect(() => {
    if (!lenis) return
    const update = () => {
      ScrollTrigger.update()
    }
    lenis.on('scroll', update)
    return () => lenis.off('scroll', update)
  }, [lenis])

  useEffect(() => {
    if (!activate) return

    const video = videoRef.current
    const container = containerRef.current
    const wrapper = wrapperRef.current
    if (!video || !container || !wrapper) return

    const killAll = () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
      gsap.globalTimeline.clear()
    }

    let tween: gsap.core.Tween | null = null
    const duration = video.duration
    if (!isFinite(duration) || duration === 0) return
    const height = duration * scrollSpeed
    killAll()
    const playhead = { frame: 0 }

    // 🔹 Génère automatiquement des checkpoints toutes les 5 secondes
    const step = 5
    const autoCheckpoints = checkpointsOverride?.length
      ? checkpointsOverride
      : Array.from({ length: Math.ceil(duration / step) + 1 }, (_, i) => i * step)
    setCheckpoints(autoCheckpoints)

    // Synchronise la vidéo avec le scroll
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
          targetTime.current = playhead.frame
        },
      },
    })
  // Keep a reference to the main ScrollTrigger to compute precise scroll positions
  mainScrollTriggerRef.current = (tween as unknown as { scrollTrigger?: ScrollTrigger }).scrollTrigger || null

    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: `+=${height}`,
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress
        if (p < 0.15 || p > 0.85) {
          gsap.to(wrapper, { overwrite: 'auto' })
        } else {
          gsap.to(wrapper, { opacity: 1, overwrite: 'auto' })
        }
      },
    })

    ScrollTrigger.refresh()

    return () => {
      killAll()
      tween?.kill()
      mainScrollTriggerRef.current = null
    }
  }, [activate, scrollSpeed, src, checkpointsOverride])

  // 🧠 Interpolation fluide du currentTime
  useEffect(() => {
    if (!activate) return
    const video = videoRef.current
    if (!video) return

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n

    const updateTime = () => {
      // Increase interpolation factor when close to target to converge faster
      const diff = Math.abs(video.currentTime - targetTime.current)
      const t = diff < 0.25 ? 0.45 : 0.2
      video.currentTime = lerp(video.currentTime, targetTime.current, t)
      if (Math.abs(lastFrame.current - video.currentTime) > 0.1) {
        lastFrame.current = video.currentTime
        setCurrentTime(video.currentTime)
        // Debug: log current time to help tuning checkpoints (dev only)
        // dev log removed
      }
    }

    gsap.ticker.add(updateTime)
    return () => gsap.ticker.remove(updateTime)
  }, [activate])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const markReady = () => {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
      }
      setReady(true)
      onReady?.()
    }

    // If metadata is already available, mark ready immediately
    // HAVE_METADATA === 1; using duration availability as a robust proxy
    if (isFinite(video.duration) && video.duration > 0) {
      markReady()
      return
    }

    video.addEventListener('loadedmetadata', markReady)
    return () => video.removeEventListener('loadedmetadata', markReady)
  }, [onReady])

  // 🔹 Fonction utilitaire : scroll jusqu’à un checkpoint
  const scrollToCheckpoint = useCallback((index: number, opts: { duration?: number; ease?: string; onComplete?: () => void; onStart?: () => void } = {}) => {
    if (!lenis) return
    if (index < 0 || index >= checkpoints.length) return
    const durationVideo = videoRef.current?.duration || 0
    if (!durationVideo) return
    // Use main ScrollTrigger range to compute exact scrollY for the desired time
    let targetY: number
    const st = mainScrollTriggerRef.current
    if (st && typeof st.start === 'number' && typeof st.end === 'number') {
      const progress = checkpoints[index] / durationVideo
      targetY = st.start + progress * (st.end - st.start)
    } else {
      const height = durationVideo * scrollSpeed
      targetY = (checkpoints[index] / durationVideo) * height
    }

    const duration = opts.duration ?? 1.2
    const easeName = opts.ease ?? 'power2.inOut'
    // Use Lenis native scrollTo for compatibility
    opts.onStart?.()
    // Update UI index immediately so controls reflect the target
    setCurrentCheckpointIndex(index)
    try {
      lenis.scrollTo(targetY, {
        duration,
        // Lenis accepts a function easing; approximate power2.inOut
        easing: (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
      })
    } catch {
      // Fallback to GSAP if Lenis scrollTo fails
      gsap.to(window, { scrollTo: targetY, duration, ease: easeName })
    }

    // Manually invoke onComplete and snap after the duration
    window.setTimeout(() => {
      // Snap vidéo exactement sur le temps du checkpoint pour éviter tout décalage dû au lerp
      const v = videoRef.current
      const exactTime = checkpoints[index]
      if (v && isFinite(exactTime)) {
        targetTime.current = exactTime
        v.currentTime = exactTime
        lastFrame.current = exactTime
        setCurrentTime(exactTime)
        // dev log removed
      }
      opts.onComplete?.()
    }, duration * 1000 + 80)
  }, [checkpoints, lenis, scrollSpeed])

  // 🔁 Détection & auto scroll vers le prochain checkpoint
  useEffect(() => {
    if (!activate || !autoScrollEnabled) return
    if (!lenis) return
    const durationVideo = videoRef.current?.duration || 0
    if (!durationVideo) return
    const height = durationVideo * scrollSpeed

    const handleLenisScroll = () => {
      const y = window.scrollY
      // Convert checkpoint times to Y positions
      const positions = checkpoints.map((t) => (t / durationVideo) * height)
      // Trouver index courant (le plus proche)
      let closestIndex = 0
      let closestDiff = Infinity
      positions.forEach((pos, i) => {
        const diff = Math.abs(y - pos)
        if (diff < closestDiff) {
          closestDiff = diff
          closestIndex = i
        }
      })
      if (closestIndex !== currentCheckpointIndex) {
        setCurrentCheckpointIndex(closestIndex)
      }

      // Mode step: s'arrêter à chaque checkpoint et ne pas enchaîner tant qu'on est dans la zone
      if (autoScrollMode === 'step') {
        // Déverrouille si l'utilisateur s'éloigne de la zone du checkpoint courant
        if (lockIndex !== null) {
          if (closestIndex !== lockIndex || closestDiff > autoScrollThreshold) {
            setLockIndex(null)
          }
        }

        if (!isAutoScrolling && lockIndex === null && closestDiff < autoScrollThreshold && closestIndex < positions.length - 1) {
          const next = closestIndex + 1
          onAutoAdvance?.(closestIndex, next)
          setIsAutoScrolling(true)
          scrollToCheckpoint(next, {
            duration: 1.1,
            ease: 'power1.inOut',
            onComplete: () => {
              setIsAutoScrolling(false)
              // Verrouille autour du checkpoint atteint
              setLockIndex(next)
            },
          })
        }
        return
      }

      // Mode continuous: logique précédente (enchaîne si proche)
      if (closestDiff < autoScrollThreshold && closestIndex < positions.length - 1) {
        onAutoAdvance?.(closestIndex, closestIndex + 1)
        scrollToCheckpoint(closestIndex + 1, { duration: 1.1, ease: 'power1.inOut' })
      }
    }

    lenis.on('scroll', handleLenisScroll)
    return () => {
      lenis.off('scroll', handleLenisScroll)
    }
  }, [activate, autoScrollEnabled, autoScrollThreshold, autoScrollMode, checkpoints, currentCheckpointIndex, isAutoScrolling, lockIndex, lenis, onAutoAdvance, scrollSpeed, scrollToCheckpoint])

  // Keep currentCheckpointIndex synchronized with scroll position (independent of auto-scroll)
  useEffect(() => {
    if (!activate) return
    if (!lenis) return

    const handle = () => {
      const y = window.scrollY
      const durationVideo = videoRef.current?.duration || 0
      if (!durationVideo) return

      const st = mainScrollTriggerRef.current
      let positions: number[]
      if (st && typeof st.start === 'number' && typeof st.end === 'number') {
        positions = checkpoints.map((t) => st.start + (t / durationVideo) * (st.end - st.start))
      } else {
        const height = durationVideo * scrollSpeed
        positions = checkpoints.map((t) => (t / durationVideo) * height)
      }

      let closestIndex = 0
      let closestDiff = Infinity
      positions.forEach((pos, i) => {
        const diff = Math.abs(y - pos)
        if (diff < closestDiff) {
          closestDiff = diff
          closestIndex = i
        }
      })
      setCurrentCheckpointIndex((prev) => (prev !== closestIndex ? closestIndex : prev))
    }

    lenis.on('scroll', handle)
    return () => {
      lenis.off('scroll', handle)
    }
  }, [activate, lenis, checkpoints, scrollSpeed])

  // API pour activer/désactiver l'auto scroll côté UI
  const toggleAutoScroll = useCallback(() => setAutoScrollEnabled((v) => !v), [])

  const enableAutoScroll = useCallback(() => setAutoScrollEnabled(true), [])
  const disableAutoScroll = useCallback(() => setAutoScrollEnabled(false), [])

  useEffect(() => {
    setAutoScrollEnabled(autoScroll)
  }, [autoScroll])

  gsap.registerPlugin(ScrollToPlugin)

  return {
    containerRef,
    videoRef,
    wrapperRef,
    currentTime,
    checkpoints,
    currentCheckpointIndex,
    scrollToCheckpoint,
    autoScrollEnabled,
    toggleAutoScroll,
    enableAutoScroll,
    disableAutoScroll,
    ready,
  }
}