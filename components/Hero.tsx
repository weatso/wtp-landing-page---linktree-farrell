"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const words = ["matter.", "inspire.", "connect.", "amaze."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/photo/porto-3.jpg"
          alt="WTP Event"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#fdbcd6] text-[13px] uppercase tracking-[0.2em] font-medium mb-6"
          >
            Event Organizer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.95] tracking-tight text-white mb-8"
          >
            We create
            <br />
            moments that
            <br />
            <div className="inline-block relative h-[1.1em] overflow-hidden align-bottom">
              <AnimatePresence mode="wait">
                <motion.em
                  key={words[index]}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif not-italic block text-[#fdbcd6]"
                >
                  {words[index]}
                </motion.em>
              </AnimatePresence>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl mb-10"
          >
            From intimate celebrations to large-scale corporate gatherings — we
            bring ideas to life with precision, taste, and heart.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.15em] bg-[#fdbcd6] text-stone-900 px-7 py-3.5 rounded-full hover:bg-[#f5a8c4] transition-colors"
            >
              See our work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.15em] text-white border border-white/30 px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 right-12 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
