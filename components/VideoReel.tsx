"use client";

import { motion } from "framer-motion";

export default function VideoReel() {
  return (
    <section className="py-24 md:py-32 bg-stone-900">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight"
          >
            See the energy.
            <br />
            <span className="text-stone-400">Feel the moment.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 max-w-md"
          >
            A glimpse into how we bring events to life — the atmosphere,
            the details, the joy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[1, 2, 3].map((num) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: num * 0.1 }}
              className="relative rounded-xl overflow-hidden aspect-[9/16] md:aspect-[9/14]"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src={`/image/video/porto-${num}.mp4`}
                  type="video/mp4"
                />
              </video>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
