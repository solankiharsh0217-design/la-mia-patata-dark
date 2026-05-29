"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ChefHat, Heart, Award, Users, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#050505] min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="About Background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-[#050505]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal direction="down">
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.5em] mb-10">
              The Heritage
            </p>
            <h1 className="text-6xl md:text-9xl font-serif font-bold mb-10 tracking-tighter uppercase leading-none">
              A Legacy of <br /> <span className="text-gold italic">Taste</span>.
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed uppercase tracking-[0.2em]">
              Oltre la tradizione, verso l&apos;eccellenza assoluta.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <ScrollReveal direction="right">
              <div className="relative group">
                <div className="absolute -inset-4 border border-[#D4AF37]/20 translate-x-8 translate-y-8 -z-10" />
                <div className="relative aspect-[4/5] luxury-border overflow-hidden bg-black">
                  <Image
                    src="/images/menu1.jpg"
                    alt="Our Narrative"
                    fill
                    className="object-cover opacity-90 transition-transform duration-[2s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                  <div className="absolute bottom-12 left-12">
                    <span className="text-6xl font-serif font-bold text-white/20 block mb-2 tracking-widest">EST. 2024</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-12">
              <ScrollReveal delay={0.2} direction="up">
                <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-10 tracking-tighter uppercase">
                  The <span className="text-gold italic">Concept</span>
                </h2>
                <p className="text-xl text-white/70 leading-relaxed font-light mb-8 uppercase tracking-[0.1em]">
                  <strong className="text-[#D4AF37]">La Mia Patata</strong> nasce come un atelier del gusto. 
                  Abbiamo rimosso il rumore per concentrarci sulla purezza dell&apos;ingrediente.
                </p>
                <p className="text-xl text-white/50 leading-relaxed font-light uppercase tracking-[0.1em]">
                  In un mondo di complessità artificiale, noi celebriamo la complessità naturale. 
                  Ogni patata è selezionata a mano, ogni sugo è un&apos;opera d&apos;arte culinaria.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8">
                <ScrollReveal delay={0.3} direction="up">
                  <div className="space-y-6">
                    <div className="w-16 h-16 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                      <ChefHat size={32} strokeWidth={1} />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-bold text-white uppercase tracking-widest mb-2">Mastery</h4>
                      <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold leading-loose">Chef-driven precision in every detail.</p>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.4} direction="up">
                  <div className="space-y-6">
                    <div className="w-16 h-16 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                      <Award size={32} strokeWidth={1} />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-bold text-white uppercase tracking-widest mb-2">Exclusivity</h4>
                      <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold leading-loose">DOP certified Italian ingredients.</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
             <h2 className="text-5xl md:text-8xl font-serif font-bold text-white tracking-tighter uppercase">The <span className="text-gold italic">Principles</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: <Heart className="text-[#D4AF37]" size={40} strokeWidth={1} />,
                title: "Passion",
                desc: "Rispettiamo i tempi della natura e l&apos;anima della tradizione."
              },
              {
                icon: <Users className="text-[#D4AF37]" size={40} strokeWidth={1} />,
                title: "Hospitality",
                desc: "Un concierge culinario dedicato alla vostra soddisfazione."
              },
              {
                icon: <Sparkles className="text-[#D4AF37]" size={40} strokeWidth={1} />,
                title: "Innovation",
                desc: "Sfidiamo i confini del gusto con eleganza e audacia."
              }
            ].map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <div className="group luxury-border p-12 bg-black/40 hover:bg-[#D4AF37]/5 transition-all duration-700 h-full flex flex-col items-center text-center">
                  <div className="mb-10 transform group-hover:scale-125 transition-all duration-700 opacity-60 group-hover:opacity-100">{value.icon}</div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-6 uppercase tracking-[0.2em]">
                    {value.title}
                  </h3>
                  <p className="text-white/50 text-[10px] uppercase tracking-[0.3em] leading-loose font-medium">
                    {value.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}