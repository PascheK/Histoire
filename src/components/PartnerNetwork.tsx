// components/PartnerNetwork.tsx
"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

const logos = [
  { name: "MIT", x: "15", y: "60%", src: "/logos/MIT-Logo.png" },
  { name: "Oxford", x: "85", y: "60%", src: "/logos/Oxford-Logo.png" },
  { name: "EPFL", x: "25", y: "75%", src: "/logos/EPFL_Logo.png" },
  { name: "CMU", x: "75", y: "75%", src: "/logos/CMU_Logo.png" },
  { name: "Johns Hopkins", x: "50", y: "80%", src: "/logos/JH_Logo.png" },
];

export default function PartnerNetwork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden px-4 py-16"
    >
      {/* Lignes de connexion */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {isInView &&
          logos.map((logo, i) => (
            <line
              key={i}
              x1="50%"
              y1="20%"
              x2={logo.x.replace("%", "")}
              y2={logo.y.replace("%", "")}
              stroke="#010"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
      </svg>

      {/* Logo ONU central */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-white/60  absolute flex items-center justify-center w-auto h-24 rounded"
                            style={{
          top: "15%",
          
          transform: 'translate(-50%, -50%)',
        }}
      >
                  <Image
            src={'/logos/Unops-Logo.png'}
            alt={'UNOPS Logo'}
            width={250}
            height={200}
            className="object-contain z-10   "

          />
      </motion.div>

      {/* Logos satellites */}
      {logos.map((logo, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
                  className="bg-white/60  absolute flex items-center justify-center w-auto h-24 rounded"
                            style={{
          top: logo.y,
          left: (Number(logo.x) - 8) + "%",
          transform: 'translate(-50%, -50%)',
        }}
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={200}
            height={100}
            className="object-contain z-10 h-24 p-4"

          />
        </motion.div>
      ))}

      {/* Caption */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute bottom-0 text-center text-sm md:text-base text-gray-700 dark:text-gray-300 max-w-xl"
      >
        Established partnerships with specialists and local entities enable efficient and accurate response.
      </motion.p>
    </section>
  );
}