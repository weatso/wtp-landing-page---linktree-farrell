"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const items = [
    "Party",
    "Prom Night",
    "Birthday",
    "Corporate",
    "Gathering",
    "Gala Dinner",
    "Wedding",
    "Festival",
    "Anniversary",
    "Celebration",
  ];

  return (
    <section className="py-6 bg-[#fdbcd6] overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap w-max"
        animate={{ x: [0, "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-[13px] font-semibold uppercase tracking-[0.2em] text-stone-800 mx-8 flex items-center gap-8"
          >
            {item}
            <span className="text-stone-400">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
