"use client";

import { useState, useEffect } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LinkNext from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Chi Siamo" },
  { href: "/servizi-business", label: "Servizi Business" },
  { href: "/contact", label: "Contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className={`absolute inset-0 transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
        <LinkNext href="/" className="group flex items-center gap-4">
          <div className="relative w-12 h-12 md:w-16 md:h-16 luxury-border overflow-hidden rounded-full bg-black">
            <Image 
              src="/logo-la-mia.png" 
              alt="La Mia Patata Logo" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif font-bold text-white tracking-[0.1em] transition-colors duration-300 uppercase leading-none">
              La Mia <span className="text-[#D4AF37]">Patata</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold mt-1 opacity-80">
              Gastronomia Pop-Art
            </span>
          </div>
        </LinkNext>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <LinkNext
              key={link.href}
              href={link.href}
              className="relative text-white/70 hover:text-[#D4AF37] transition-all duration-300 font-bold text-[11px] uppercase tracking-[0.3em] group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
            </LinkNext>
          ))}
          <LinkNext
            href="/contact"
            className="btn-primary !px-6 !py-2.5 !text-[10px] !tracking-[0.3em]"
          >
            Prenota
          </LinkNext>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 p-2 text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-black md:hidden flex flex-col items-center justify-center p-8"
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0,transparent_70%)]" />
            </div>

            <div className="flex flex-col items-center gap-10 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <LinkNext
                    href={link.href}
                    className="text-4xl font-serif font-bold text-white hover:text-[#D4AF37] transition-colors uppercase tracking-widest"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </LinkNext>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.2 }}
                className="mt-4"
              >
                <LinkNext
                  href="/contact"
                  className="btn-primary text-sm px-12 py-5"
                  onClick={() => setMobileOpen(false)}
                >
                  Ordina Ora
                </LinkNext>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex gap-10 mt-16"
              >
                <LinkNext href={SITE.social.instagram} className="text-[#D4AF37] hover:scale-110 transition-transform">
                  <Instagram size={32} strokeWidth={1.5} />
                </LinkNext>
                <LinkNext href={SITE.social.facebook} className="text-[#D4AF37] hover:scale-110 transition-transform">
                  <Facebook size={32} strokeWidth={1.5} />
                </LinkNext>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}