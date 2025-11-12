"use client"
"use client"

import { motion } from 'framer-motion'
// import Image from 'next/image'
import { Hotspot } from '@/types/hotspot'

export type HotspotButtonProps = {
  hotspot: Hotspot
  onClick: (hotspot: Hotspot) => void
  active: boolean
}

export function HotspotButton({ hotspot, onClick, active }: HotspotButtonProps) {
  const { position } = hotspot
  const style: React.CSSProperties = position ? {
    left: `${position.xPercent}%`,
    top: `${position.yPercent}%`,
    transform: 'translate(-50%, -50%)'
  } : { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: active ? 1 : 0, opacity: active ? 1 : 0 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="absolute z-400 w-10 h-10 rounded-full bg-emerald-500 text-white shadow-lg flex items-center justify-center ring-2 ring-white/60 hover:scale-110 focus:outline-none"
      style={style}
      onClick={() => onClick(hotspot)}
      aria-label={`Show details for ${hotspot.title}`}
    >
      <span className="text-md font-bold">i</span>
    </motion.button>
  )
}
