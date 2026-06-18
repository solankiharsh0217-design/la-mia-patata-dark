"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-32 pb-12 border-t border-[#D4AF37]/30 relative overflow-hidden">
      {/* Elegance Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_20px_#D4AF37]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-24">
          {/* Brand & Mission */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-4 mb-10 group">
              <div className="relative w-16 h-16 luxury-border overflow-hidden rounded-full bg-black">
                <Image 
                  src="/logo-la-mia.png" 
                  alt="La Mia Patata Logo" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-3xl font-serif font-bold text-white tracking-widest uppercase">
                La Mia <span className="text-[#D4AF37]">Patata</span>
              </span>
            </Link>
            <p className="text-2xl text-[#D4AF37] mb-8 font-serif italic leading-relaxed opacity-90">
              &ldquo;{SITE.tagline}&rdquo;
            </p>
            <p className="text-white/50 max-w-md leading-relaxed font-light text-sm uppercase tracking-widest">
              {SITE.description}. L&apos;eccellenza italiana ridefinita.
            </p>
            <div className="flex gap-8 mt-12">
              <Link href={SITE.social.instagram} className="text-[#D4AF37] hover:scale-125 transition-all duration-500">
                <Instagram size={24} strokeWidth={1.5} />
              </Link>
              <Link href={SITE.social.facebook} className="text-[#D4AF37] hover:scale-125 transition-all duration-500">
                <Facebook size={24} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#D4AF37] mb-10">Navigazione</h4>
            <ul className="space-y-6">
              {["Home", "Menu", "Chi Siamo", "Servizi Business", "Contatti"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Home" ? "/" : item === "Chi Siamo" ? "/about" : item === "Servizi Business" ? "/servizi-business" : `/${item.toLowerCase()}`} 
                    className="text-white/60 hover:text-[#D4AF37] transition-all flex items-center gap-3 group text-[11px] uppercase tracking-[0.2em]"
                  >
                    <span className="w-0 h-px bg-[#D4AF37] group-hover:w-4 transition-all duration-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#D4AF37] mb-10">Exclusive Access</h4>
            <div className="space-y-8 mb-12">
              <Link href={SITE.mapsUrl} target="_blank" className="flex items-start gap-6 group">
                <MapPin size={20} className="text-[#D4AF37] mt-0.5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <span className="text-white/60 group-hover:text-white transition-colors text-[11px] uppercase tracking-[0.15em] leading-loose">{SITE.address}</span>
              </Link>
              <Link href={SITE.phoneLink} className="flex items-center gap-6 group">
                <Phone size={20} className="text-[#D4AF37] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <span className="text-white/60 group-hover:text-white transition-colors text-[11px] uppercase tracking-[0.15em]">{SITE.phone}</span>
              </Link>
              <Link href={SITE.emailLink} className="flex items-center gap-6 group">
                <Mail size={20} className="text-[#D4AF37] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <span className="text-white/60 group-hover:text-white transition-colors text-[11px] uppercase tracking-[0.15em]">{SITE.email}</span>
              </Link>
            </div>
            <div className="p-8 luxury-border bg-white/5">
              <h5 className="text-white font-bold mb-4 text-[10px] uppercase tracking-[0.3em] opacity-60">Servizio Non-Stop</h5>
              <p className="text-3xl font-serif text-[#D4AF37] tracking-widest">{SITE.hours}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-white/30 uppercase tracking-[0.3em]">
            &copy; {currentYear} <span className="text-white/50 font-bold">La Mia Patata</span>. Luxury Gastronomy Collection.
          </p>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
            <Link href="#" className="hover:text-[#D4AF37] transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-[#D4AF37] transition-colors">Concierge</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}