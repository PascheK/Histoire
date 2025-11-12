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
    align: "top left",
    mainImage: "",
    sources: [
      "Radio France – « Après l’épreuve : les années folles »",
      "NYT archive photo – « Années folles – New York prosperity, 1920s »"
    ],
    sections: [
      {
        heading: "Une vie où tout paraît possible",
        content:
          "À la fin des années 1920, New York symbolise l’euphorie des Années folles : rues animées, innovations techniques, consommation de masse. " +
          "Les ménages achètent voitures, radios et réfrigérateurs, très souvent à crédit. " +
          "Les États-Unis, sortis victorieux de la Première Guerre mondiale, s’imposent comme première puissance économique mondiale ; tout semble possible."
      },
      {
        heading: "La ruée vers l’or",
        content:
          "Le fordisme (standardisation et chaîne) démultiplie la productivité ; les salaires progressent et des millions d’Américains — y compris de classe moyenne — investissent en Bourse. " +
          "La presse parle de « miracle économique » et l’idée dominante est que « les actions montent toujours »."
      },
      {
        heading: "Du rêve américain au cauchemar",
        content:
          "Derrière l’optimisme, des déséquilibres s’accumulent : production plus rapide que la demande, endettement des ménages, surévaluation d’entreprises. " +
          "Le 24 octobre 1929, le krach de Wall Street brise l’illusion : des milliards s’évaporent, des banques tombent, le chômage explose. " +
          "Le rêve des Années folles devient le cauchemar de la Grande Dépression."
      }
    ]
  },

  {
    time: 7.20,
    title: "L’économie dopée par la spéculation",
    align: "top right",
    mainImage: "/images/photo_2.jpg",
    sources: [
      "Dialogues Économiques – « Quand les bulles gonflent… (Partie I) »",
      "Les Yeux du Monde – « L’année 1929 : le krach qui changea le monde »"
    ],
    sections: [
      {
        heading: "La victoire de la Première Guerre mondiale",
        content:
          "Après 1918, les États-Unis dominent l’économie mondiale et prêtent massivement à l’Europe et à l’Amérique latine. " +
          "La décennie 1920-1929 (Roaring Twenties) est marquée par une croissance rapide, la diffusion de l’électricité, de l’automobile et de la radio, et une forte confiance collective. " +
          "La consommation de masse devient norme ; on produit, on consomme, on investit."
      },
      {
        heading: "Les déséquilibres qui mènent au krach",
        content:
          "Les gains de productivité saturent l’offre ; les salaires n’augmentent pas au même rythme, la demande ralentit. " +
          "Stocks en hausse, prix à la baisse ; ménages et agriculteurs s’endettent. " +
          "En Bourse, l’achat « sur marge » permet d’acquérir des actions en ne versant qu’environ 10 % du prix, le reste à crédit : la bulle se gonfle. " +
          "Les cours se déconnectent des fondamentaux ; l’économie devient vulnérable. " +
          "En 1930, la loi Smoot-Hawley relève les droits de douane, ce qui aggravera ensuite la contraction des échanges."
      }
    ]
  },

  {
    time: 10.76,
    title: "Les signaux avant-coureurs ignorés",
    align: "bottom left",
    mainImage: "/images/photo_3.jpg",
    sources: [
      "Le Temps – « Y’a 90 ans, Wall Street vivait le jeudi noir »",
      "Histoire pour Tous – « Krach boursier de 1929 »"
    ],
    sections: [
      {
        heading: "Les signes d’alerte",
        content:
          "Dès 1928-1929 : ralentissement de la production, notamment automobile (chute forte entre mars et septembre 1929) ; " +
          "investisseurs européens rapatrient des capitaux ; resserrement du crédit ; prix de gros en baisse en Europe. " +
          "Malgré ces signaux, euphorie et certitudes persistent : la croyance dans une hausse illimitée nourrit l’aveuglement collectif jusqu’à l’automne 1929."
      }
    ]
  },

  {
    time: 14.28,
    title: "Jeudi Noir – L’effondrement de Wall Street",
    align: "bottom right",
    mainImage: "/images/photo_4.jpg",
    sources: [
      "Les Yeux du Monde – « L’année 1929 : le krach… »",
      "Le Guide de l’Auto – « Il y a 85 ans… » (illustration)",
      "Histoire & Odyssée – « Jeudi noir » (post X / Twitter)"
    ],
    sections: [
      {
        heading: "Une vague de panique",
        content:
          "Le 24 octobre 1929, des rumeurs baissières déclenchent des ventes massives à l’ouverture. " +
          "Peur, ordres en rafale, perte de repères : la panique s’auto-alimente. Le Dow Jones s’effondre."
      },
      {
        heading: "Un record historique de transactions",
        content:
          "Plus de 12 millions d’actions échangées ; salles de courtage saturées, systèmes en retard, téléphones surchargés. " +
          "La mécanique de marché s’enraye sous le volume."
      },
      {
        heading: "Des fortunes anéanties",
        content:
          "Investisseurs surendettés ruinés en quelques heures ; appels de marge, ventes forcées, évaporation des liquidités. " +
          "Les banques réclament, mais les débiteurs n’ont plus rien : l’instabilité gagne le système bancaire."
      },
      {
        heading: "La fin d’une époque",
        content:
          "Symbole de la fin des Années folles, le Jeudi Noir ouvre une séquence de crise financière mondiale qui se mue en crise économique de longue durée."
      }
    ]
  },

  {
    time: 17.83,
    title: "Lundi noir – L’intensification du krach",
    align: "bottom right",
    mainImage: "/images/photo_6.jpg",
    sources: [
      "Journal de Montréal – « Il y a 95 ans, le krach… »",
      "NY Daily News – « Wall Street chaos, 1929 » (photo)"
    ],
    sections: [
      {
        heading: "Une panique incontrôlable",
        content:
          "Le 28 octobre 1929, loin de s’apaiser, la panique s’amplifie. " +
          "L’espoir d’un rebond s’éteint ; la confiance disparaît, les ventes s’accélèrent."
      },
      {
        heading: "Un volume d’échanges record",
        content:
          "16,4 millions d’actions négociées, un sommet historique. " +
          "Les systèmes de cotation saturent à nouveau ; la Bourse est en quasi-chaos."
      },
      {
        heading: "Des fortunes et des entreprises anéanties",
        content:
          "Cours laminés jusqu’à des niveaux sans rapport avec la valeur ; destruction de capital ; " +
          "entreprises au bord du défaut, créditeurs exsangues."
      },
      {
        heading: "Une crise qui s’étend",
        content:
          "L’onde de choc gagne l’économie réelle : ménages, banques et entreprises subissent des pertes colossales, annonçant la crise économique généralisée."
      }
    ]
  },

  {
    time: 21.29,
    title: "Mardi noir – L’effondrement total de Wall Street",
    align: "top right",
    mainImage: "/images/photo_5.jpg",
    sources: [
      "Le Temps – « Y’a 90 ans, Wall Street vivait le jeudi noir » (rappels de séquence)",
      "Histoire pour Tous – « Krach boursier de 1929 »"
    ],
    sections: [
      {
        heading: "Un climat de panique généralisée",
        content:
          "Le 29 octobre 1929, le paroxysme : plus personne n’ose acheter, chaque acteur cherche à sauver ce qu’il peut. " +
          "Courtiers débordés, salles hurlantes, déroute totale."
      },
      {
        heading: "Des ventes massives et un marché en chute libre",
        content:
          "Plus de 16 millions d’actions changent de main en une journée ; des « blue chips » perdent jusqu’à la moitié de leur valeur. " +
          "La spirale baissière devient incontrôlable."
      },
      {
        heading: "Des conséquences humaines et financières dramatiques",
        content:
          "Petits porteurs ruinés, destins brisés, compressions de production, licenciements massifs. " +
          "Le choc financier se traduit immédiatement en crise sociale."
      },
      {
        heading: "Le début de la Grande Dépression",
        content:
          "Point de non-retour : la crise bancaire et économique s’installe ; l’onde de choc gagnera rapidement le reste du monde."
      }
    ]
  },

  {
    time: 24.87,
    title: "La politique de Hoover – L’inaction fatale",
    align: "bottom left",
    mainImage: "/images/photo_7.jpg",
    sources: [
      "Radio-Canada – « Herbert Hoover : le moins aimé des présidents américains »"
    ],
    sections: [
      {
        heading: "Une confiance excessive dans le libéralisme économique",
        content:
          "Hoover adhère au laissez-faire : l’économie doit s’autoréguler. " +
          "Il refuse une aide directe aux chômeurs, redoutant une « dépendance » ; " +
          "cette posture bloque des réponses ambitieuses au choc."
      },
      {
        heading: "Des mesures timides et insuffisantes",
        content:
          "Sous pression, il crée en 1932 la Reconstruction Finance Corporation pour soutenir banques et grandes entreprises. " +
          "L’aide est tardive, limitée, et n’atteint pas les ménages ni les petites structures."
      },
      {
        heading: "Une situation sociale catastrophique",
        content:
          "Entre 1930 et 1933, la production industrielle est divisée par deux ; plus de 13 millions de chômeurs. " +
          "Bidonvilles dits « Hoovervilles », perte de confiance envers le gouvernement."
      },
      {
        heading: "Une inaction qui pave la voie au changement",
        content:
          "En 1932, Hoover est battu par Franklin D. Roosevelt et son New Deal. " +
          "Le rôle de l’État se redéfinit : régulation bancaire, soutien à l’emploi, protection sociale."
      },
      {
        heading: "En résumé",
        content:
          "Le pari non-interventionniste de Hoover s’est révélé inadapté à l’ampleur du choc, " +
          "aggravant la crise et précipitant un basculement vers un État régulateur."
      }
    ]
  },

  {
    time: 28.43,
    title: "La propagation mondiale de la crise",
    align: "bottom right",
    mainImage: "/images/photo_8.jpg",
    sources: [
      "digiSchool – « D’une crise américaine à une crise mondiale »",
      "Histoire pour Tous – « Krach boursier de 1929 »"
    ],
    sections: [
      {
        heading: "L’effondrement du système bancaire international",
        content:
          "Les banques américaines rappellent les capitaux ; en Europe, faillites en chaîne. " +
          "En 1931, la Creditanstalt (Vienne) chute et provoque une panique bancaire continentale."
      },
      {
        heading: "L’effondrement du commerce mondial",
        content:
          "De 1929 à 1932, le commerce mondial décroche de plus de 60 %. " +
          "Le protectionnisme se diffuse (Smoot-Hawley aux États-Unis), bloquant les échanges et aggravant la récession."
      },
      {
        heading: "Une crise économique devenue sociale et politique",
        content:
          "Chômage de masse, pauvreté, inégalités en hausse. " +
          "En Allemagne, la déstabilisation économique favorise l’ascension d’Hitler et du parti nazi."
      },
      {
        heading: "Un monde plongé dans l’incertitude",
        content:
          "1931-1932 : effondrement de la confiance dans le capitalisme libéral ; " +
          "gouvernements dépassés, coopération internationale en panne ; " +
          "la crise économique devient politique."
      },
      {
        heading: "En résumé",
        content:
          "Née aux États-Unis, la crise devient planétaire et systémique, " +
          "révélant la fragilité des interdépendances financières et commerciales."
      }
    ]
  },

  {
    time: 31.95,
    title: "Synthèse – Du krach au New Deal",
    align: "bottom right",
    mainImage: "",
    sources: [
      "ARTE (vidéo) – « Faire casquer les riches – Capitalisme américain, le culte de la croissance »",
      "Les Yeux du Monde – « L’année 1929 : le krach qui changea le monde »",
      "Histoire pour Tous – « Krach boursier de 1929 »"
    ],
    sections: [
      {
        heading: "Les origines : les illusions de la prospérité (1920–1929)",
        content:
          "Puissance américaine, innovations, consommation de masse — mais sur fond de crédit facile et de spéculation à marge. " +
          "La bulle enfle sur des fondamentaux fragilisés."
      },
      {
        heading: "Le krach boursier et l’effondrement du système (1929–1930)",
        content:
          "Jeudi Noir (24 octobre), lundi et mardi noirs : panique, destruction de richesse, faillites. " +
          "La finance contamine l’économie réelle ; chômage et misère s’installent."
      },
      {
        heading: "La dépression et ses conséquences mondiales (1931–1932)",
        content:
          "Propagation bancaire, effondrement du commerce, politiques d’austérité et protectionnisme aggravent la récession ; " +
          "tensions sociales et montée des régimes autoritaires en Europe."
      },
      {
        heading: "Le tournant du New Deal (1933)",
        content:
          "Roosevelt rompt avec le laissez-faire : régulation bancaire, programmes d’emploi, soutien aux ménages. " +
          "L’État devient acteur central de la stabilisation macroéconomique."
      },
      {
        heading: "En résumé",
        content:
          "De l’euphorie à la désillusion : la Grande Dépression transforme durablement le rôle de l’État et le cadre du capitalisme régulé."
      }
    ]
  },

  {
    time: 35.56,
    title: "Conclusion – Le jour où le monde s’est arrêté",
    align: "top right",
    mainImage: "",
    sources: [
      "Journal de Montréal – « Il y a 95 ans, le krach boursier… »",
      "ARTE (vidéo) – « Faire casquer les riches… »"
    ],
    sections: [
      {
        heading: "Conclusion – Le jour où le monde s’est arrêté — Une leçon universelle",
        content:
          "Le 24 octobre 1929 révèle la vulnérabilité d’une croissance fondée sur la spéculation, l’endettement et l’absence de garde-fous. " +
          "La crise, mondiale, impose la prise de conscience : la prospérité durable exige régulation, équilibre et protection des plus vulnérables. " +
          "Du choc naît un nouvel horizon : celui d’un capitalisme plus encadré et d’une responsabilité collective accrue."
      }
    ]
  }
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
          <h3 className="text-xl font-bold mb-2">{s.title}</h3>
          <ul className="list-disc pl-5 space-y-1 text-3xl">
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
