import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#fafaf9]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/image/logo wtp/logo-wtp.jpg"
              alt="WTP"
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="text-sm font-medium text-stone-500">
              &copy; {new Date().getFullYear()} WTP Event Organizer
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-8">
            <Link
              href="#services"
              className="text-[13px] font-medium text-stone-400 hover:text-stone-900 transition-colors uppercase tracking-[0.1em]"
            >
              Services
            </Link>
            <Link
              href="#work"
              className="text-[13px] font-medium text-stone-400 hover:text-stone-900 transition-colors uppercase tracking-[0.1em]"
            >
              Work
            </Link>
            <Link
              href="#about"
              className="text-[13px] font-medium text-stone-400 hover:text-stone-900 transition-colors uppercase tracking-[0.1em]"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-[13px] font-medium text-stone-400 hover:text-stone-900 transition-colors uppercase tracking-[0.1em]"
            >
              Contact
            </Link>
          </nav>

          <div className="flex gap-6 text-stone-400">
            <a href="#" className="text-[13px] font-medium hover:text-stone-900 transition-colors">Instagram</a>
            <a href="#" className="text-[13px] font-medium hover:text-stone-900 transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
