'use client'

/**
 * Internal component responsible for binding a video element to scroll progress
 * using the `useScrollVideo` hook. Any overlay children are automatically
 * cloned with the current video time injected so they can control their
 * visibility.
 */

import {
  ReactElement,
  Children,
  cloneElement,
  isValidElement,
} from 'react'
import type { OverlayProps } from './Overlay'
import { useScrollVideo } from '@/hooks/useScrollVideo'

type Props = {
  src: string
  scrollSpeed?: number
  children?: ReactElement<OverlayProps> | ReactElement<OverlayProps>[]
  onReady?: () => void
  activateTriggers?: boolean
}

/**
 * Displays a video that advances as the user scrolls.
 *
 * @param props.source Video source and configuration for the scroll linkage.
 */
export default function ScrollVideoSection({ 
  src,
  scrollSpeed = 400,
  children,
  onReady,
  activateTriggers = false,
}: Props) {
  const {
    containerRef,
    videoRef,
    wrapperRef,
    currentTime,
  } = useScrollVideo({
    src,
    scrollSpeed,
    activate: activateTriggers,
    onReady,
  })

  return (
    <div ref={containerRef} className="relative bg-black z-0">
      <div
        ref={wrapperRef}
        className="sticky top-0 w-screen h-screen flex items-center justify-center z-10 overflow-hidden will-change-transform backface-hidden"
      >
        {/* Background video, controlled via scroll */}
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover rounded-xl will-change-opacity"
        />

        {/*
          Inject each overlay with the currentTime so it can decide when to
          render itself.
        */}
        {Children.map(children, (child) =>
          isValidElement<OverlayProps>(child)
            ? cloneElement(child, { currentTime })
            : null
        )}
      </div>
    </div>
  )
}
