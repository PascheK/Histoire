'use client'

/**
 * Closing text for the "After" phase encouraging long-term recovery efforts.
 */

import SectionHeader from '@/components/common/SectionHeader'
import { motion } from 'framer-motion'

export default function OutroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-12 text-left bg-gray-100 text-black gap-10">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <SectionHeader title="Sources & Bibliographie" />
        <motion.ul
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="space-y-3 text-sm md:text-base list-disc ml-5"
        >
          <li>Galbraith, John Kenneth – <em>The Great Crash 1929</em> (analyse classique des mécanismes spéculatifs).</li>
          <li>Bernanke, Ben S. – travaux sur la transmission financière et la crise des années 30.</li>
          <li>Archives de la Federal Reserve (statistiques historiques sur production et chômage).</li>
          <li>Discours et documents officiels de Franklin D. Roosevelt (New Deal, régulation bancaire).</li>
          <li>Articles de presse (New York Times, 1929–1933) pour la perception publique des événements.</li>
          <li>Ouvrages de synthèse sur l’entre-deux-guerres (contextes sociaux et politiques internationaux).</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xs md:text-sm text-gray-600"
        >
          Cette sélection peut être enrichie selon le niveau de la classe (ajout de sources primaires ou d’analyses historiographiques).
        </motion.p>
      </div>
    </section>
  )
}
