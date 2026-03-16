"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Konsultasi",
    description:
      "Kami mendengarkan ide, keinginan, dan ekspektasi Anda secara mendetail. Dari tema, budget, hingga jumlah tamu — semuanya kita bahas bersama.",
  },
  {
    number: "02",
    title: "Perencanaan & Konsep",
    description:
      "Tim kreatif kami merancang konsep acara yang sesuai dengan visi Anda — termasuk desain venue, rundown, dekorasi, dan kebutuhan teknis.",
  },
  {
    number: "03",
    title: "Persiapan & Koordinasi",
    description:
      "Kami mengurus semua vendor, perizinan, dan detail logistik. Anda tinggal duduk santai sementara kami bekerja di balik layar.",
  },
  {
    number: "04",
    title: "Hari-H & Eksekusi",
    description:
      "Tim kami hadir di lapangan memastikan setiap momen berjalan lancar dan sesuai rencana — dari awal hingga akhir.",
  },
];

export default function Process() {
  return (
    <section className="relative py-28 md:py-40 bg-[#fafafc] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#fef0f5]/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-stone-100 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header Section (TIDAK BERUBAH) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-[1px] bg-[#fdbcd6]" />
              <span className="text-[13px] uppercase tracking-[0.3em] font-semibold text-[#fdbcd6]">
                How we work
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-stone-900 leading-[1.1]"
            >
              Dari ide menjadi <br />
              <span className="font-serif italic text-stone-400">kenyataan.</span>
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
              Proses kami dirancang agar Anda bisa menikmati perjalanan
              merencanakan acara — tanpa stres, tanpa ribet.
            </p>
          </motion.div>
        </div>

        {/* Process Timeline - CLEAN MINIMAL (NO ICONS) */}
        <div className="space-y-16 md:space-y-20">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.7,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className={`
                  relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center
                  ${isEven ? '' : 'lg:direction-rtl'}
                `}
              >
                {/* Number Side */}
                <div className={`
                  lg:col-span-5 
                  ${isEven ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8 lg:order-2'}
                `}>
                  <div className={`
                    inline-flex flex-col items-start
                    ${isEven ? 'lg:items-end' : 'lg:items-start'}
                  `}>
                    {/* Large Step Number */}
                    <span className="text-[140px] md:text-[180px] font-bold leading-none tracking-tighter text-stone-100 select-none">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Vertical Connector Line (hidden on mobile) */}
                <div className="hidden lg:block lg:col-span-2 relative h-full">
                  <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full">
                    <div className="w-full h-full bg-gradient-to-b from-[#fdbcd6]/30 via-[#fdbcd6] to-[#fdbcd6]/30" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#fdbcd6] ring-4 ring-[#fef0f5]" />
                </div>

                {/* Content Side */}
                <div className={`
                  lg:col-span-5
                  ${isEven ? 'lg:pl-8' : 'lg:pr-8 lg:order-1'}
                `}>
                  <div className="space-y-4">
                    {/* Label */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fef0f5] rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#fdbcd6]" />
                      <span className="text-xs font-semibold text-[#d4789d] uppercase tracking-wider">
                        Langkah {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-md">
                      {step.description}
                    </p>

                    {/* Decorative underline */}
                    <div className={`
                      w-20 h-1 bg-gradient-to-r from-[#fdbcd6] to-transparent rounded-full
                      ${isEven ? '' : 'lg:ml-auto'}
                    `} />
                  </div>
                </div>

              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-stone-400 text-sm uppercase tracking-widest mb-6">
            Siap memulai?
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#fdbcd6]" />
            <div className="w-2 h-2 rounded-full bg-[#fdbcd6]" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#fdbcd6]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}