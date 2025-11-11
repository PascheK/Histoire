"use client"

import React from 'react'

type Props = {
  titles: string[]
  currentIndex: number
  onSelect: (index: number) => void
}

export default function VerticalCheckpointNav({ titles, currentIndex, onSelect }: Props) {
  return (
    <nav
      className="absolute right-4 top-1/2 -translate-y-1/2 z-50 pointer-events-auto bg-black/50 text-white backdrop-blur-md rounded-xl p-2 sm:p-3 max-h-[80vh] overflow-y-auto shadow-lg"
      aria-label="Navigation des checkpoints"
    >
      <ul className="flex flex-col gap-2">
        {titles.map((title, i) => {
          const active = i === currentIndex
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => onSelect(i)}
                className={`text-left text-xs sm:text-sm px-3 py-2 rounded-md transition w-48 sm:w-56 ${
                  active
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {title}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
