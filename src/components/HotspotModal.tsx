"use client"
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Hotspot } from '@/types/hotspot'
import { useState } from 'react'

export type HotspotModalProps = {
  hotspot: Hotspot | null
  onClose: () => void
}

export function HotspotModal({ hotspot, onClose }: HotspotModalProps) {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({})
  const toggleSection = (i: number) => setOpenSections((s) => ({ ...s, [i]: !s[i] }))
  return (
    <AnimatePresence>
      {hotspot && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onClose()
              if (e.key === 'Escape') onClose()
            }}
            aria-label="Close details"
          />
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 140, damping: 18 }}
            className="relative z-10 w-full sm:max-w-lg mx-auto bg-neutral-900 text-white rounded-t-2xl sm:rounded-2xl shadow-xl p-6 space-y-4"
          >
            <div className="flex items-start justify-between">
              <h2 className="text-xl font-semibold pr-4">{hotspot.title}</h2>
              <button
                onClick={onClose}
                className="ml-2 text-neutral-300 hover:text-white transition"
                aria-label="Close details"
              >
                ✕
              </button>
            </div>
            {hotspot.image && (
              <div className="w-full overflow-hidden rounded-lg">
                <Image
                  src={hotspot.image}
                  alt={hotspot.title}
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
            <p className="text-sm leading-relaxed whitespace-pre-line">{hotspot.description}</p>

            {/* Collapsible sections */}
            {hotspot.sections && hotspot.sections.length > 0 && (
              <div className="space-y-2">
                {hotspot.sections.map((sec, i) => {
                  const isOpen = !!openSections[i]
                  return (
                    <div key={i} className="border border-white/10 rounded-lg overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-white/5 transition"
                        onClick={() => toggleSection(i)}
                      >
                        <span className="font-medium">{sec.heading}</span>
                        <span className="text-xs opacity-70">{isOpen ? '−' : '+'}</span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="px-3 pb-3 text-sm whitespace-pre-line"
                          >
                            {sec.content}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Gallery */}
            {hotspot.gallery && hotspot.gallery.length > 0 && (
              <div className="grid grid-cols-2 gap-2">
                {hotspot.gallery.map((g, i) => (
                  <div key={i} className="overflow-hidden rounded-md">
                    <Image src={g.src} alt={g.alt ?? hotspot.title} width={400} height={240} className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>
            )}

            {/* Sources */}
            {hotspot.sources && hotspot.sources.length > 0 && (
              <div className="pt-2 border-t border-white/10">
                <h3 className="text-sm font-semibold mb-1">Sources</h3>
                <ul className="list-disc pl-5 space-y-1 text-xs opacity-80 break-words">
                  {hotspot.sources.map((s, i) => (
                    <li key={i}>
                      {s.startsWith('http') ? (
                        <a href={s} target="_blank" rel="noreferrer" className="underline hover:text-white">
                          {s}
                        </a>
                      ) : (
                        s
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
