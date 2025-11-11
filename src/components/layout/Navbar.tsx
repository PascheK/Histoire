import { ChevronLeft, ChevronRight } from "lucide-react"

/** Properties for the checkpoint navigation bar. */
type Props = {
  onPrev: () => void
  onNext: () => void
  disablePrev?: boolean
  disableNext?: boolean
  /** Index courant du checkpoint (0-based) */
  currentIndex?: number
  /** Nombre total de checkpoints */
  total?: number
  /** Affiche le compteur (ex: 3 / 10) */
  showCounter?: boolean
}

/**
 * Sticky bottom navigation allowing users to jump between checkpoints.
 */
export default function Navbar({ onPrev, onNext, disablePrev, disableNext, currentIndex, total, showCounter = true }: Props) {
  const btnClass = "px-6 py-2 rounded-full transition focus-visible:outline-none focus-visible:ring focus-visible:ring-white bg-black/60 text-white hover:bg-white/80 hover:text-black disabled:bg-black/30 disabled:text-white/50 disabled:cursor-not-allowed"
  return (
    <nav className="flex items-center gap-4 backdrop-blur px-4 py-2 rounded-full shadow-lg bg-black/50">
      <button
        onClick={onPrev}
        className={btnClass}
        type="button"
        disabled={disablePrev}
      >
        <ChevronLeft />
      </button>

      <button
        onClick={onNext}
        className={btnClass}
        type="button"
        disabled={disableNext}
      >
        <ChevronRight />
      </button>
      {showCounter && typeof currentIndex === 'number' && typeof total === 'number' && (
        <span className="text-white/80 text-sm tabular-nums">{currentIndex + 1} / {total}</span>
      )}
    </nav>
  )
}
