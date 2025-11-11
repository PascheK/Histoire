import type { Hotspot } from '../types/hotspot'
import type { OverlayItem, OverlayAlign } from '../types/overlay'

export type CourseSlide = {
  time: number
  title: string
  sections: { heading: string; content: string }[]
  sources?: string[]
  mainImage?: string
  gallery?: { src: string; alt?: string }[]
  // Alignement de l'overlay associé à cette slide (ex: 'top left', 'center', ...)
  align?: OverlayAlign
}

export const courseSlides: CourseSlide[] = [
  {
    time: 3.69,
    title: "L’Amérique en plein essor – Les Années folles",
    align: 'top left',
    sections: [
      {
        heading: "Une vie où tout paraît possible",
        content: `À la fin des années 1920, New York symbolise l’euphorie des Années folles : rues animées, innovations techniques, consommation de masse. 
Les Américains achètent voitures, radios et réfrigérateurs, souvent à crédit. 
Les États-Unis, sortis victorieux de la Première Guerre mondiale, deviennent la première puissance économique mondiale.`,
      },
      {
        heading: "La ruée vers l’or",
        content: `Le fordisme et la hausse des salaires stimulent la production. 
Des millions d’Américains, même modestes, investissent en Bourse. 
Les journaux évoquent un “miracle économique”, convaincus que les actions ne feront que monter.`,
      },
      {
        heading: "Du rêve américain au cauchemar",
        content: `Derrière cette prospérité, les déséquilibres s’accumulent : surproduction, dettes et spéculation à crédit. 
Le 24 octobre 1929, tout s’effondre : c’est le krach de Wall Street. 
Des milliards disparaissent et des millions de personnes perdent leur emploi : le rêve tourne au cauchemar.`,
      },
    ],
    mainImage: "",
  },
  {
    time: 7.20,
    title: "L’économie dopée par la spéculation",
    align: 'top right',
    sections: [
      {
        heading: "Une croissance illusoire",
        content: `Après 1918, les États-Unis dominent l’économie mondiale et prêtent massivement à l’Europe. 
Mais la croissance repose sur le crédit et sur la spéculation, non sur une économie réelle solide.`,
      },
      {
        heading: "Les déséquilibres qui mènent au krach",
        content: `La production augmente plus vite que les salaires, entraînant une surproduction. 
Les Américains s’endettent pour consommer et investir. 
Les actions s’échangent à crédit jusqu’à 90 % de leur valeur, créant une bulle spéculative prête à exploser.`,
      },
    ],
    mainImage: "/images/photo_2.jpg",
  },
  {
    time: 10.76,
    title: "Les signaux avant-coureurs ignorés",
    align: 'bottom left',
    sections: [
      {
        heading: "Les signes d’alerte",
        content: `Dès 1928, la production industrielle et automobile ralentit, les prix chutent, et les investisseurs étrangers retirent leurs capitaux. 
Les banques restreignent le crédit, mais les autorités restent confiantes. 
Les marchés continuent à grimper, ignorant les avertissements.`,
      },
    ],
    mainImage: "/images/photo_3.jpg",
  },
  {
    time: 14.28,
    title: "Jeudi Noir – L’effondrement de Wall Street",
    align: 'bottom right',
    sections: [
      {
        heading: "Une vague de panique",
        content: `Le 24 octobre 1929, des millions d’actions sont vendues dans la panique. 
Le Dow Jones chute de 22,6 % en une journée : c’est le Jeudi Noir.`,
      },
      {
        heading: "Des fortunes anéanties",
        content: `Les investisseurs endettés sont ruinés. 
Les banques réclament leurs crédits, aggravant l’effondrement du système.`,
      },
    ],
    mainImage: "/images/photo_4.jpg",
  },
  {
    time: 17.83,
    title: "Lundi noir – L’intensification du krach",
    align: 'bottom right',
    sections: [
      {
        heading: "Une panique incontrôlable",
        content: `Le 28 octobre 1929, la panique reprend de plus belle. 
Les investisseurs vendent massivement : la confiance disparaît totalement.`,
      },
      {
        heading: "Des entreprises anéanties",
        content: `16,4 millions d’actions sont échangées. 
Les entreprises et les particuliers perdent tout : la crise s’étend à toute l’économie.`,
      },
    ],
    mainImage: "/images/photo_5.jpg",
  },
  {
    time: 21.29,
    title: "Mardi noir – L’effondrement total de Wall Street",
    align: 'top right',
    sections: [
      {
        heading: "Le point de non-retour",
        content: `Le 29 octobre 1929, la Bourse s’écroule définitivement. 
Les investisseurs, submergés par la panique, vendent à tout prix. 
Le marché s’effondre : c’est le début de la Grande Dépression.`,
      },
    ],
    mainImage: "/images/photo_6.jpg",
  },
  {
    time: 24.87,
    title: "La politique de Hoover – L’inaction fatale",
    align: 'bottom left',
    sections: [
      {
        heading: "Une confiance aveugle dans le marché",
        content: `Hoover croit que l’économie s’autorégulera sans intervention. 
Il refuse d’aider directement les chômeurs ou les entreprises.`,
      },
      {
        heading: "Des mesures tardives et inefficaces",
        content: `La Reconstruction Finance Corporation (1932) soutient les banques, mais trop tard. 
Pendant ce temps, 13 millions d’Américains perdent leur emploi.`,
      },
      {
        heading: "Vers le changement",
        content: `L’échec de Hoover ouvre la voie au New Deal de Roosevelt et à un rôle accru de l’État.`,
      },
    ],
    mainImage: "/images/photo_7.jpg",
  },
  {
    time: 28.43,
    title: "La propagation mondiale de la crise",
    align: 'bottom right',
    sections: [
      {
        heading: "Un effet domino planétaire",
        content: `Les banques américaines rappellent leurs prêts, provoquant des faillites en Europe. 
En 1931, la Creditanstalt de Vienne fait faillite, entraînant une panique mondiale.`,
      },
      {
        heading: "Le commerce mondial s’effondre",
        content: `Le commerce international chute de 60 %. 
La loi Smoot-Hawley déclenche une vague de protectionnisme. 
La crise devient globale.`,
      },
      {
        heading: "Des répercussions sociales et politiques",
        content: `Le chômage et la misère alimentent la montée des régimes autoritaires, notamment en Allemagne avec Hitler.`,
      },
    ],
    mainImage: "/images/photo_8.jpg",
  },
  {
    time: 31.95,
    title: "Synthèse – Du krach au New Deal",
    align: 'bottom right',
    sections: [
      {
        heading: "De l’euphorie à la désillusion",
        content: `Entre 1920 et 1933, le monde passe de la prospérité des Années folles à la misère de la Grande Dépression.`,
      },
      {
        heading: "Le tournant du New Deal",
        content: `Élu en 1932, Roosevelt lance une série de réformes : 
relance économique, emplois publics et encadrement de la finance. 
L’État reprend un rôle central dans l’économie.`,
      },
    ],
    mainImage: "/images/photo_9.jpg",
  },
  {
    time: 35.56,
    title: "Conclusion – Le jour où le monde s’est arrêté",
    align: 'top right',
    sections: [
      {
        heading: "Une leçon universelle",
        content: `Le krach de 1929 révèle les dangers d’une croissance sans régulation. 
Il montre que la prospérité durable repose sur l’équilibre et la solidarité. 
De cette crise naît un nouveau modèle économique fondé sur la responsabilité collective.`,
      },
    ],
    mainImage: "/images/conclusion.jpg",
  },
]

export const contentCheckpoints = courseSlides.map(s => s.time)
export const contentTitles = courseSlides.map(s => s.title)

export function buildOverlaysFromSlides(slides: CourseSlide[]): OverlayItem[] {
  return slides.map((s, i) => {
    console.log("Building overlay for slide:", slides[i + 1]?.time);
    const nextTime = slides[i]?.time+0.20
    return {
      key: `slide-${i}`,
      appear: s.time-2,
      disappear: nextTime ? nextTime : s.time,
      align: s.align ?? 'center',
      type: 'transparent',
      content: (
        <div className="min-w-[220px] max-w-[320px] text-left">
          <h3 className="text-lg md:text-xl font-bold mb-2">{s.title}</h3>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            {s.sections.slice(0, 3).map(sec => (
              <li key={sec.heading}>{sec.heading}</li>
            ))}
          </ul>
        </div>
      ),
      withIcon: false,
    }
  })
}

export function buildHotspotsFromSlides(slides: CourseSlide[]): Hotspot[] {
  return slides.map((s, i) => ({
    id: `slide-hotspot-${i + 1}`,
    time: s.time,
    title: s.title,
    description: `Résumé: ${s.title}`,
    image: s.mainImage,
    sections: s.sections,
    sources: s.sources,
    gallery: s.gallery,
    position: { xPercent: 50, yPercent: 50 },
  }))
}
