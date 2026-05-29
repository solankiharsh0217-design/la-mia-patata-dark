"use client";

import Image from "next/image";
import { MENU_CATEGORIES } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { UtensilsCrossed, Award } from "lucide-react";

export default function MenuPage() {
  const IMAGES = {
    hero: "/images/hero.jpg",
    menu1: "/images/menu1.jpg",
    menu2: "/images/menu2.jpg"
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.hero}
            alt="Menu Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#050505]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0,transparent_70%)]" />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal direction="down">
            <div className="inline-flex items-center gap-4 text-[#D4AF37] mb-10">
              <span className="w-16 h-px bg-[#D4AF37]/30" />
              <Award size={20} strokeWidth={1} />
              <span className="text-[10px] font-bold uppercase tracking-[0.5em]">La Selezione d&apos;Oro</span>
              <span className="w-16 h-px bg-[#D4AF37]/30" />
            </div>
            <h1 className="text-6xl md:text-9xl font-serif font-bold mb-10 tracking-tighter uppercase leading-none">
              The <span className="text-gold italic">Collection</span>.
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed uppercase tracking-[0.2em]">
              Un viaggio sensoriale attraverso creazioni d&apos;autore firmate dal nostro Executive Chef.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-48">
          {MENU_CATEGORIES.map((category, i) => (
            <div key={category.id} className="relative">
              <ScrollReveal direction="up">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                  <div className="max-w-2xl">
                    <div className="text-6xl font-serif font-bold text-white/5 mb-6">0{i + 1}</div>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 uppercase tracking-widest">
                      {category.name}
                    </h2>
                    <p className="text-lg text-[#D4AF37] font-serif italic tracking-widest opacity-80">
                      &ldquo;{category.description}&rdquo;
                    </p>
                  </div>
                  <div className="relative w-full md:w-64 h-40 luxury-border overflow-hidden hidden md:block">
                     <Image
                        src={i % 2 === 0 ? IMAGES.menu1 : IMAGES.menu2}
                        alt={category.name}
                        fill
                        className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-700"
                     />
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {category.items.map((item, j) => (
                  <ScrollReveal key={j} delay={j * 0.05} direction="up" className="h-full">
                    <div className="group luxury-border bg-white/5 p-10 hover:bg-[#D4AF37]/5 transition-all duration-700 h-full flex flex-col">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-xl font-serif font-bold text-white uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors duration-700">
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-white/50 text-[10px] font-light leading-loose uppercase tracking-[0.3em] flex-grow">
                        {item.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Banner */}
      <section className="py-32 bg-black border-y border-[#D4AF37]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={IMAGES.menu2}
            alt="Signature"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/80" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal direction="up">
            <UtensilsCrossed className="text-[#D4AF37] mx-auto mb-10" size={64} strokeWidth={1} />
            <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8 uppercase tracking-widest leading-tight">
              Curate Your <span className="text-gold italic">Experience</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-sm mb-16 font-light uppercase tracking-[0.4em] leading-loose">
              Personalizza la tua base con la nostra selezione di 8 sughi d&apos;autore preparati giornalmente.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {["Carbonara", "Ragù", "4 Formaggi", "Cacio e Pepe", "Pesto", "Amatriciana", "Gorgonzola"].map((sugho, i) => (
                <span key={i} className="px-8 py-3 border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 cursor-default">
                  {sugho}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}