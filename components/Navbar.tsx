"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.startsWith("/studio") || pathname.startsWith("/link")) {
    return null;
  }

  const links = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#fafaf9]/90 backdrop-blur-xl border-b border-stone-200/60 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/image/logo-wtp/logo-wtp.jpg"
              alt="WTP Logo"
              width={52}
              height={52}
              className="rounded-full shadow-sm hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-[0.15em] text-stone-500 hover:text-stone-900 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link
              href="#contact"
              className="hidden md:inline-flex text-[13px] font-medium uppercase tracking-[0.15em] bg-[#fdbcd6] text-stone-900 px-6 py-2.5 rounded-full hover:bg-[#f5a8c4] transition-colors duration-300"
            >
              Contact
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
              aria-label="Menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[1.5px] bg-stone-900 origin-center"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[1.5px] bg-stone-900 origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#fafaf9] pt-24 px-8"
          >
            <nav className="flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-medium text-stone-900 hover:text-stone-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 text-3xl font-medium text-stone-900 hover:text-stone-500 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
