"use client";

import { useState } from "react";
import Image from "next/image";
import { MENU_CATEGORIES, ALLERGEN_LABELS, AllergenCode, MenuItem, CHEF } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ItemModal from "@/components/ui/ItemModal";
import { UtensilsCrossed, Award, Search, Instagram, ExternalLink } from "lucide-react";

export default function MenuPage() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <div className="bg-[#050505] min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
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
              Un viaggio sensoriale attraverso creazioni d&apos;autore firmate dal nostro Corporate Chef.
            </p>
            <p className="text-[10px] text-gold/60 mt-8 uppercase tracking-[0.4em] italic animate-pulse">
              Clicca su un piatto per scoprirne la storia e gli ingredienti
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
                    <div className="text-6xl font-serif font-bold text-white/5 mb-6">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 uppercase tracking-widest">
                      {category.name}
                    </h2>
                    <p className="text-lg text-[#D4AF37] font-serif italic tracking-widest opacity-80">
                      &ldquo;{category.description}&rdquo;
                    </p>
                  </div>
                  <div className="relative w-full md:w-64 h-40 luxury-border overflow-hidden hidden md:block">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-700"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
                {category.items.map((item, j) => (
                  <ScrollReveal key={j} delay={j * 0.05} direction="up" className="h-full">
                    <div 
                      onClick={() => setSelectedItem(item)}
                      className="group luxury-border bg-white/5 hover:bg-[#D4AF37]/5 transition-all duration-700 h-full flex flex-col overflow-hidden cursor-pointer relative"
                    >
                      {item.image && (
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          
                          {/* Search Icon Hint on Hover */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="p-3 bg-[#D4AF37]/90 text-black rounded-full scale-50 group-hover:scale-100 transition-transform duration-500">
                              <Search size={24} />
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="p-10 flex flex-col flex-grow">
                        <h3 className="text-xl font-serif font-bold text-white uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors duration-700 mb-4">
                          {item.name}
                        </h3>
                        <p className="text-white/50 text-[10px] font-light leading-loose uppercase tracking-[0.3em] flex-grow">
                          {item.description}
                        </p>
                        {item.allergens.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-6">
                            {item.allergens.map((code) => (
                              <span
                                key={code}
                                title={ALLERGEN_LABELS[code]}
                                className="text-[8px] font-bold uppercase tracking-widest border border-[#D4AF37]/30 text-[#D4AF37]/60 px-2 py-1"
                              >
                                {code}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Chef Section */}
      <section className="py-32 px-6 bg-[#080808] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image src="/logo-bg.webp" alt="" fill className="object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 border border-[#D4AF37]/20 translate-x-6 translate-y-6 -z-10" />
                <div className="relative aspect-[3/4] luxury-border overflow-hidden bg-black">
                  <Image
                    src={CHEF.image}
                    alt={CHEF.name}
                    fill
                    className="object-cover opacity-90 transition-transform duration-[2s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40" />
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.5em] mb-4">
                    {CHEF.title}
                  </p>
                  <h2 className="text-5xl md:text-6xl font-serif font-bold text-white uppercase tracking-widest leading-tight">
                    {CHEF.name.split(" ").map((w, i) => (
                      <span key={i}>{w} </span>
                    ))}
                  </h2>
                </div>
                <p className="text-lg text-white/60 font-light leading-relaxed uppercase tracking-[0.08em]">
                  {CHEF.bio}
                </p>
                <a 
                  href={CHEF.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[#D4AF37] hover:scale-105 transition-transform duration-300"
                >
                  <Instagram size={20} strokeWidth={1.5} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">@maiullo_stefano_chef</span>
                  <ExternalLink size={14} strokeWidth={1.5} className="opacity-60" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Signature Banner */}
      <section className="py-32 bg-black border-y border-[#D4AF37]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/menu-barchetta.jpg"
            alt="Barchetta Signature"
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
              Personalizza la tua base con la nostra selezione di sughi d&apos;autore preparati giornalmente.
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

      {/* Allergen Footnote */}
      <section className="py-16 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-12 space-y-6">
          <p className="text-[9px] text-white/40 uppercase tracking-[0.4em] font-bold">
            Legenda Allergeni
          </p>
          <div className="flex flex-wrap gap-6">
            {(Object.entries(ALLERGEN_LABELS) as [AllergenCode, string][]).map(([code, label]) => (
              <span key={code} className="text-[9px] text-white/30 uppercase tracking-[0.2em]">
                <span className="text-[#D4AF37]/60 font-bold">{code}</span> — {label}
              </span>
            ))}
          </div>
          <p className="text-[9px] text-white/20 uppercase tracking-[0.2em] leading-loose max-w-4xl">
            Tutti i fritti sono preparati con farine gluten free. Il menu contiene uova e latticini.
            Per allergie o intolleranze specifiche si prega di comunicarlo al personale prima di ordinare.
          </p>
        </div>
      </section>

      {/* Item Modal */}
      <ItemModal 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </div>
  );
}
