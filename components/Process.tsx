"use client";

import { motion, Variants } from "framer-motion";

const reasons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Paham Kebutuhan Kamu",
    description:
      "Dari pengalaman mengurus berbagai acara, kami belajar bahwa tiap orang punya impian yang unik. Kami di sini untuk mendengarkan dan membantu mewujudkannya pelan-pelan.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    title: "Sentuhan yang Personal",
    description:
      "Kami percaya setiap acara punya ceritanya sendiri. Itulah kenapa kami lebih suka merancang semuanya secara khusus, sesuai dengan karakter dan keinginan kamu.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "Bekerja dengan Hati",
    description:
      "Kami menjalin hubungan baik dengan banyak vendor pilihan untuk memastikan kamu mendapatkan kualitas terbaik yang sesuai dengan harapan.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    title: "Teman di Hari Bahagia",
    description:
      "Tim kami akan menemani dari awal sampai acara selesai, memastikan semua berjalan semestinya supaya kamu bisa fokus menikmati momen berharga.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Diskusi Budget yang Terbuka",
    description:
      "Kami sangat menghargai rencana keuanganmu. Mari diskusikan semuanya secara transparan agar hasil akhirnya tetap maksimal tanpa membebani.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    ),
    title: "Komunikasi yang Nyaman",
    description:
      "Jangan ragu untuk berdiskusi kapan pun. Kami senang bisa terus berkabar dan memastikan kamu tenang di setiap tahapan persiapannya.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Process() {
  return (
    <section className="relative py-28 md:py-40 bg-[#fafafc] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#fef0f5]/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-stone-100 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-[1px] bg-[#fdbcd6]" />
              <span className="text-[13px] uppercase tracking-[0.3em] font-semibold text-[#fdbcd6]">
                Why choose us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-stone-900 leading-[1.1]"
            >
              Kenapa banyak yang <br />
              <span className="font-serif italic text-stone-400">percaya kami?</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="max-w-md"
          >
            <p className="text-stone-500 text-lg md:text-xl leading-relaxed">
              Karena kami nggak cuma ngurusin acara — kami ngurusin pengalaman.
              Dari hal kecil sampai yang paling penting.
            </p>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative bg-white rounded-2xl p-8 border border-stone-100 shadow-sm hover:shadow-md hover:border-[#fdbcd6]/40 transition-all duration-300 cursor-default"
            >
              {/* Pink glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#fef0f5]/0 to-[#fef0f5]/0 group-hover:from-[#fef0f5]/60 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#fef0f5] text-[#d4789d] group-hover:bg-[#fdbcd6]/20 transition-colors duration-300">
                  {reason.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-stone-900 tracking-tight leading-snug">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-stone-500 text-[15px] leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative bottom accent */}
                <div className="w-10 h-[2px] bg-gradient-to-r from-[#fdbcd6] to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}