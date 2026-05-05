import Link from "next/link";
import Image from "next/image";
import { Instagram, MessageCircle, Music } from "lucide-react";

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

          <div className="flex gap-6 text-stone-400 items-center">
            <a 
              href="https://www.instagram.com/wtp.organizer" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-stone-900 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            
            <a 
              href="https://api.whatsapp.com/send/?phone=6282225269942&text=Halo+WTP+ORGANIZER%0Amau+tanya+pricelist+untuk+acara+%E2%80%A6.+dengan+jumlah+tamu+%E2%80%A6.+%2C+terimakasih%21&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-stone-900 transition-colors"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </a>

            <a 
              href="https://www.tiktok.com/@wtp.organizer" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-stone-900 transition-colors"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.2 10.1c0 .22-.18.401-.4.39a8 8 0 0 1-3.362-.93c-.281-.15-.638.045-.638.364V15.5a6 6 0 1 1-6.4-5.987a.38.38 0 0 1 .4.387v2.8c0 .22-.18.397-.398.433A2.4 2.4 0 1 0 12.2 15.5V2.9a.4.4 0 0 1 .4-.4h2.8a.43.43 0 0 1 .418.4a4.4 4.4 0 0 0 3.983 3.982c.22.02.4.197.4.418z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
