"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "200+", label: "Events Completed" },
  { value: "50+", label: "Corporate Clients" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#fafaf9]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-20">
          <div className="md:col-span-5">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[13px] uppercase tracking-[0.2em] font-medium text-stone-400 mb-4"
            >
              About us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 leading-tight"
            >
              The team behind
              <br />
              your best moments.
            </motion.h2>
          </div>

          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center gap-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone-500 text-lg leading-relaxed"
            >
              WTP was founded with one belief: every event should feel
              personal. We're a team of planners, designers, and
              coordinators who care deeply about the details — from the
              first conversation to the final farewell.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-stone-500 text-lg leading-relaxed"
            >
              Whether it's a 30-person birthday or a 500-guest corporate
              gala, we bring the same level of dedication, creativity, and
              professionalism to every project.
            </motion.p>
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-stone-200 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center md:text-left"
              >
                <p className="text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight mb-2">
                  {stat.value}
                </p>
                <p className="text-stone-400 text-sm uppercase tracking-[0.15em] font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
