'use client'

import SectionHeader from '@/components/common/SectionHeader'
import { motion } from 'framer-motion'

export default function OutroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-12 text-left bg-gray-100 text-black gap-10">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <SectionHeader title="Bibliographie et Sources" />

        <motion.ul
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="space-y-3 text-sm md:text-base list-disc ml-5"
        >
          <li>
            ARTE. (2021). <em>Faire casquer les riches – Capitalisme américain, le culte de la croissance</em> [Vidéo en ligne]. 
            Repéré à : <a href="https://www.youtube.com/watch?v=eW3sHzjxs3E" target="_blank" className="underline text-blue-600">YouTube</a>.
          </li>
          <li>
            ChatGPT. I.A. ChatGPT : corrections syntaxiques et vérification historique du document (consulté le 10.11.2025).
          </li>
          <li>
            « Après l’épreuve : les années folles », <em>Radio France</em>. Repéré à : 
            <a href="https://www.radiofrance.fr/franceculture/podcasts/concordance-des-temps/apres-l-epreuve-les-annees-folles-3962239" target="_blank" className="underline text-blue-600">radiofrance.fr</a>.
          </li>
          <li>
            « Herbert Hoover : le moins aimé des présidents américains », <em>Radio Canada</em>. Repéré à :
            <a href="https://ici.radio-canada.ca/ohdio/premiere/emissions/aujourd-hui-l-histoire/segments/chronique/23260/herbert-hoover-krash" target="_blank" className="underline text-blue-600">ici.radio-canada.ca</a>.
          </li>
          <li>
            « Il y a 95 ans, le krach boursier d’octobre 1929 changeait le cours de l’économie mondiale », <em>Journal de Montréal</em>. Repéré à :
            <a href="https://www.journaldemontreal.com/2024/10/23/il-y-a-95-ans-le-krach-boursier-doctobre-1929-changeait-le-cours-de-leconomie-mondiale" target="_blank" className="underline text-blue-600">journaldemontreal.com</a>.
          </li>
          <li>
            « D’une crise américaine à une crise mondiale », <em>Digischool</em>. Repéré à :
            <a href="https://www.digischool.fr/cours/d-une-crise-americaine-a-une-crise-mondiale-exwr" target="_blank" className="underline text-blue-600">digischool.fr</a>.
          </li>
          <li>
            « Krach boursier de 1929 », <em>Histoire pour Tous</em>. Repéré à :
            <a href="https://www.histoire-pour-tous.fr/dossiers/2703-crise-financiere-economique-1929.html" target="_blank" className="underline text-blue-600">histoire-pour-tous.fr</a>.
          </li>
          <li>
            « L’année 1929 : le krach qui changea le monde », <em>Les Yeux du Monde</em>. Repéré à :
            <a href="https://www.les-yeux-du-monde.fr/ressources/histoire-geographie/annee-en-bref/17212-lannee-1929-le-krach-qui-changea" target="_blank" className="underline text-blue-600">les-yeux-du-monde.fr</a>.
          </li>
          <li>
            « Y’a 90 ans, Wall Street vivait le jeudi noir », <em>Le Temps</em>. Repéré à :
            <a href="https://www.letemps.ch/economie/y-90-ans-wall-street-vivait-jeudi-noir" target="_blank" className="underline text-blue-600">letemps.ch</a>.
          </li>
          <li>
            « Il y a 85 ans aujourd’hui débutait la pire crise économique », <em>Le Guide de l’Auto</em>. Repéré à :
            <a href="https://mobile.guideautoweb.com/articles/26944/" target="_blank" className="underline text-blue-600">guideautoweb.com</a>.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xs md:text-sm text-gray-600"
        >
          Ce projet s’appuie sur une combinaison de sources journalistiques, académiques et audiovisuelles, 
          permettant d’allier rigueur historique et approche interactive. Les documents d’archives, les podcasts 
          et les analyses d’époque ont contribué à restituer avec fidélité la dynamique de la crise de 1929 et son 
          impact mondial.
        </motion.p>
      </div>
    </section>
  )
}