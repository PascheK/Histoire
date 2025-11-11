'use client'

/**
 * Introductory screen for the "After" phase detailing recovery priorities and
 * presenting early assessment data.
 */

import SectionHeader from '@/components/common/SectionHeader'
import { motion } from 'framer-motion'

export default function IntroSection() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center p-8 text-center bg-white text-black gap-8">
      <SectionHeader title="Objectifs du cours" />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="text-xl sm:text-2xl font-semibold mb-6 drop-shadow-md"
      >
        À la fin du cours vous devriez être capable de :
      </motion.h2>
      <motion.ul
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="max-w-3xl w-full text-left space-y-4 text-base sm:text-lg leading-relaxed"
      >
        <li className="flex gap-3"><span className="text-green-600 font-bold">•</span><span>Comprendre les causes économiques et sociales qui ont conduit au krach de 1929.</span></li>
        <li className="flex gap-3"><span className="text-green-600 font-bold">•</span><span>Expliquer le déroulement chronologique du krach (Jeudi Noir, Lundi Noir, Mardi Noir).</span></li>
        <li className="flex gap-3"><span className="text-green-600 font-bold">•</span><span>Identifier les conséquences sociales, économiques et politiques aux États-Unis et dans le monde.</span></li>
        <li className="flex gap-3"><span className="text-green-600 font-bold">•</span><span>Analyser le rôle de Herbert Hoover, son inaction, et la transition vers le New Deal de Franklin D. Roosevelt.</span></li>
        <li className="flex gap-3"><span className="text-green-600 font-bold">•</span><span>Retenir l’importance d’une régulation économique pour éviter les excès spéculatifs et protéger la population.</span></li>
      </motion.ul>
    </section>
  )
}
