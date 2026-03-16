"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Berapa lama sebelum acara sebaiknya kami menghubungi WTP?",
    answer:
      "Idealnya 2-3 bulan sebelum hari-H untuk acara besar seperti prom night, gala, atau corporate event. Untuk acara yang lebih kecil seperti birthday party, 3-4 minggu sebelumnya sudah cukup. Namun tentu saja, kami akan berusaha membantu meskipun waktunya mepet!",
  },
  {
    question: "Apakah WTP menyediakan semua vendor (dekorasi, catering, dll)?",
    answer:
      "Ya! Kami memiliki jaringan vendor terpercaya untuk dekorasi, catering, entertainment, lighting, sound system, fotografi, dan videografi. Anda juga bebas membawa vendor sendiri jika sudah punya preferensi.",
  },
  {
    question: "Berapa kisaran budget minimum untuk menggunakan jasa WTP?",
    answer:
      "Setiap acara unik dan memiliki kebutuhan yang berbeda. Kami akan menyesuaikan proposal sesuai budget Anda setelah konsultasi awal. Konsultasi pertama gratis — jadi jangan ragu untuk menghubungi kami.",
  },
  {
    question: "Apakah bisa custom tema acara yang unik/belum pernah ada?",
    answer:
      "Tentu saja! Justru itulah keahlian kami. Tim kreatif WTP sangat senang dengan tantangan. Semakin unik idenya, semakin seru prosesnya. Silakan ceritakan visi Anda dan kami akan wujudkan.",
  },
  {
    question: "Area mana saja yang dilayani oleh WTP?",
    answer:
      "Saat ini kami melayani area Jabodetabek dan sekitarnya. Untuk acara di luar kota atau luar pulau, silakan hubungi kami untuk diskusi lebih lanjut — kami sudah pernah menangani acara di berbagai kota di Indonesia.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-[#fafaf9]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[13px] uppercase tracking-[0.2em] font-medium text-stone-400 mb-4"
            >
              FAQ
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 leading-tight mb-6"
            >
              Pertanyaan yang sering ditanyakan.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone-500 leading-relaxed"
            >
              Belum menemukan jawaban? Hubungi kami langsung — kami senang
              berdiskusi.
            </motion.p>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <div className="border-t border-stone-200">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-stone-200"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full py-6 flex justify-between items-start text-left group"
                  >
                    <span className="text-stone-900 font-medium text-[15px] pr-8 group-hover:text-stone-600 transition-colors">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 mt-0.5"
                    >
                      <Plus size={18} className="text-stone-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-stone-500 leading-relaxed text-[15px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
