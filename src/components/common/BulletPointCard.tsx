'use client'

/**
 * Simple card displaying a list of bullet points with an optional leading
 * icon. Used for concise summaries within sections.
 */

import { CheckCircle2 } from 'lucide-react'

interface BulletPointCardProps {
  title?: string
  points: string[]
  icon?: React.ReactNode
}

/**
 * Renders a stylised list of bullet points.
 */
export default function BulletPointCard({ title, points, icon = <CheckCircle2 className="w-4 h-4" /> }: BulletPointCardProps) {
  return (
    <div className="w-full max-w-xl bg-white/10 rounded-xl backdrop-blur-md p-6 ">
      <h4 className="text-lg font-semibold mb-4">{title}</h4>
      <ul className="space-y-3 flex flex-col list-disc list-inside text-black/80">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3 text-sm sm:text-base m-auto">
            <div className="mt-1 ">{icon}</div>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
