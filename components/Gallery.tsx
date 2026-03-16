"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    src: "/image/photo/porto-1.jpg",
    title: "Luminous Prom Night",
    category: "Prom Night",
    size: "tall",
  },
  {
    src: "/image/photo/porto-2.jpg",
    title: "Annual Corporate Gala",
    category: "Corporate",
    size: "normal",
  },
  {
    src: "/image/photo/porto-3.jpg",
    title: "Garden Birthday Party",
    category: "Private Party",
    size: "normal",
  },
  {
    src: "/image/photo/porto-4.jpg",
    title: "Rooftop Celebration",
    category: "Private Party",
    size: "wide",
  },
  {
    src: "/image/photo/porto-5.jpg",
    title: "Team Building Retreat",
    category: "Corporate",
    size: "normal",
  },
  {
    src: "/image/photo/porto-6.jpg",
    title: "Charity Gala Dinner",
    category: "Gala",
    size: "normal",
  },
  {
    src: "/image/photo/porto-7.jpg",
    title: "Summer Festival",
    category: "Festival",
    size: "wide",
  },
  {
    src: "/image/photo/porto-8.jpg",
    title: "Elegant Reception",
    category: "Private Party",
    size: "normal",
  },
];

export default function Gallery() {
  return (
    <section id="work" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[13px] uppercase tracking-[0.2em] font-medium text-stone-400 mb-4"
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900"
            >
              Stories we've helped tell.
            </motion.h2>
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 md:columns-2 gap-5 space-y-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <div
                className={`relative w-full ${
                  project.size === "tall"
                    ? "aspect-[3/4]"
                    : project.size === "wide"
                    ? "aspect-[16/10]"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-colors duration-500" />

                {/* Info on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-white/60 text-[12px] uppercase tracking-[0.2em] font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
