"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[13px] uppercase tracking-[0.2em] font-medium text-stone-400 mb-6"
          >
            Let&apos;s work together
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-stone-900 leading-tight mb-8"
          >
            Have an event
            <br />
            in mind?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-500 text-lg leading-relaxed mb-12"
          >
            Tell us about your vision and we'll make it happen. Every great
            event starts with a conversation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 items-center justify-center"
          >
            <a
              href="mailto:hello@wtpevents.com"
              className="inline-flex items-center gap-3 text-stone-900 text-lg font-semibold border-b-2 border-[#fdbcd6] pb-2 hover:gap-5 transition-all duration-300"
            >
              hello@wtpevents.com
              <ArrowUpRight size={20} strokeWidth={2} />
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#fdbcd6] text-stone-900 px-7 py-3.5 rounded-full text-[13px] font-medium uppercase tracking-[0.15em] hover:bg-[#f5a8c4] transition-colors"
            >
              Chat via WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
