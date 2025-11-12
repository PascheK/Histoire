'use client'

import { useEffect, useState } from 'react'

type Props = {
  children: React.ReactNode
}

export default function MobileGuard({ children }: Props) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900 || window.innerHeight < 600)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (isMobile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-black text-white">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Accès non disponible sur mobile</h1>
        <p className="max-w-xl text-base sm:text-lg opacity-80 mb-6">
          Ce cours interactif est optimisé pour les écrans larges. Veuillez utiliser un ordinateur ou élargir la fenêtre pour continuer.
        </p>
        <p className="text-xs opacity-60">Largeur minimale: 900px · Hauteur minimale: 600px</p>
      </div>
    )
  }

  return <>{children}</>
}
