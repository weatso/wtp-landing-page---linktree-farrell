"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Private Parties",
    description:
      "Birthday celebrations, engagement parties, anniversaries — designed around your personality and style.",
  },
  {
    number: "02",
    title: "Prom & Gala Nights",
    description:
      "Themed proms and gala dinners that leave a lasting impression with impeccable production.",
  },
  {
    number: "03",
    title: "Corporate Events",
    description:
      "Team building retreats, product launches, and company milestones — professional, memorable, seamless.",
  },
  {
    number: "04",
    title: "Custom Concepts",
    description:
      "Have something unique in mind? We collaborate with you to craft a one-of-a-kind experience.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#fafaf9]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 mb-20">
          <div className="md:col-span-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[13px] uppercase tracking-[0.2em] font-medium text-stone-400 mb-4"
            >
              What we do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 leading-tight"
            >
              Events built on trust, creativity, and attention to detail.
            </motion.h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 flex items-end">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone-500 text-lg leading-relaxed"
            >
              We don't just organize events — we design experiences. Every
              detail is intentional, every moment is considered, and every
              celebration tells a story.
            </motion.p>
          </div>
        </div>

        <div className="border-t border-stone-200">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 py-10 border-b border-stone-200 group cursor-pointer"
            >
              <div className="md:col-span-1">
                <span className="text-sm font-medium text-stone-300 group-hover:text-stone-900 transition-colors duration-500">
                  {service.number}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl md:text-2xl font-semibold text-stone-900 group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <p className="text-stone-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
