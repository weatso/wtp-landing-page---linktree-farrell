"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "WTP benar-benar mewujudkan prom night impian kami. Dari dekorasi, lighting, hingga musik — semuanya sempurna. Anak-anak sangat senang!",
    name: "Ibu Sarah",
    role: "Panitia Prom Night SMA 7",
    avatar: "/image/photo/porto-9.jpg",
  },
  {
    quote:
      "Acara gathering tahunan perusahaan kami berjalan lancar tanpa hambatan. Tim WTP sangat profesional dan detail-oriented. Highly recommended!",
    name: "Budi Hartono",
    role: "HR Director, PT Maju Bersama",
    avatar: "/image/photo/porto-10.jpg",
  },
  {
    quote:
      "Birthday party anak saya jadi yang paling berkesan! Tema dan dekorasinya persis seperti yang kami bayangkan. Terima kasih WTP!",
    name: "Diana Putri",
    role: "Klien Private Party",
    avatar: "/image/photo/porto-5.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[13px] uppercase tracking-[0.2em] font-medium text-stone-400 mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900"
          >
            Apa kata mereka.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#fef0f5] rounded-2xl p-8 flex flex-col justify-between"
            >
              <p className="text-stone-700 leading-relaxed text-[15px] mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-stone-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-stone-400 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
