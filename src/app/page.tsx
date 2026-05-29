"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Sparkles, ChefHat, Flame, Utensils, Award } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE, MENU_CATEGORIES, STATS, WHY_CHOOSE_US } from "@/lib/constants";

export default function Home() {
  const IMAGES = {
    hero: "/images/hero.jpg",
    selection: "/images/selection.jpg",
    cta: "/images/cta.jpg"
  };

  return (
    <div className="overflow-hidden bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.hero}
            alt="Luxury Potatoes"
            fill
            className="object-cover opacity-60 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[180px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#AA841E]/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <ScrollReveal direction="down">
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.5em] mb-10 shadow-2xl backdrop-blur-sm">
              <Award size={14} strokeWidth={1.5} />
              The Gold Standard of Potatoes
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <h1 className="text-7xl md:text-9xl font-serif font-bold mb-8 leading-[0.85] tracking-tighter">
              L&apos;Arte della <br />
              <span className="text-gold italic">Patata</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto mb-16 font-light leading-relaxed uppercase tracking-[0.2em]">
              {SITE.tagline}
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/menu" className="btn-primary group !px-12 !py-5">
                The Collection 
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              <Link href="/contact" className="btn-secondary !px-12 !py-5">
                Private Booking
              </Link>
            </div>
          </ScrollReveal>

          {/* Luxury Stats */}
          <ScrollReveal delay={0.8} className="mt-32">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto pt-16 border-t border-white/5">
              {STATS.slice(0, 4).map((stat, i) => (
                <div key={i} className="group flex flex-col items-center">
                  <div className="text-4xl font-serif font-bold text-[#D4AF37] mb-2 group-hover:scale-110 transition-transform duration-700 tracking-widest">
                    {stat.value}
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent relative">
            <motion.div 
              animate={{ y: [0, 80, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#F9E498] rounded-full shadow-[0_0_10px_#D4AF37]"
            />
          </div>
        </motion.div>
      </section>

      {/* Distinction Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <ScrollReveal direction="right">
              <div className="relative group">
                <div className="absolute -inset-4 border border-[#D4AF37]/20 translate-x-8 translate-y-8 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700" />
                <div className="relative aspect-[4/5] luxury-border overflow-hidden">
                  <Image
                    src={IMAGES.selection}
                    alt="Premium Selection"
                    fill
                    className="object-cover transition-all duration-1000 scale-110 hover:scale-100"
                  />
                </div>
                {/* Floating Distinction Badge */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute -bottom-10 -right-10 hidden md:block glass p-10 border border-[#D4AF37]/30 z-20"
                >
                  <ChefHat className="text-[#D4AF37] mb-6" size={48} strokeWidth={1} />
                  <div className="text-2xl font-serif font-bold text-white tracking-widest uppercase mb-2">Artisan Led</div>
                  <div className="text-[10px] text-[#D4AF37] uppercase tracking-[0.3em] font-bold">Uncompromising Quality</div>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-12">
                <div>
                  <h2 className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.5em] mb-6 flex items-center gap-4">
                    <span className="w-16 h-[1px] bg-[#D4AF37]" />
                    The Philosophy
                  </h2>
                  <h3 className="text-5xl md:text-7xl font-serif font-bold text-white mb-10 leading-tight tracking-tighter">
                    Elevando la <br />
                    <span className="text-gold italic">Semplicità</span>.
                  </h3>
                  <p className="text-xl text-white/70 leading-relaxed font-light mb-12">
                    Non è solo gastronomia. È una celebrazione curata dell&apos;ingrediente più nobile della terra. 
                    Ogni creazione è un capolavoro di equilibrio, texture e sapore.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-4">
                  <div className="space-y-4">
                    <Flame className="text-[#D4AF37]" size={32} strokeWidth={1} />
                    <h4 className="text-xl font-serif font-bold uppercase tracking-widest">Heritage</h4>
                    <p className="text-sm text-white/50 leading-loose font-light uppercase tracking-widest">Tecniche secolari incontrano la visione moderna.</p>
                  </div>
                  <div className="space-y-4">
                    <Utensils className="text-[#D4AF37]" size={32} strokeWidth={1} />
                    <h4 className="text-xl font-serif font-bold uppercase tracking-widest">Curation</h4>
                    <p className="text-sm text-white/50 leading-loose font-light uppercase tracking-widest">Solo gli ingredienti più rari, solo l&apos;eccellenza.</p>
                  </div>
                </div>

                <div className="pt-10">
                  <Link href="/about" className="inline-flex items-center gap-4 text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-[11px] group hover:gap-8 transition-all duration-700">
                    Discover Our Story <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Collection Preview */}
      <section className="section-padding bg-[#080808] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center mb-24">
              <h2 className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.5em] mb-6">
                Culinary Portfolio
              </h2>
              <h3 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter">
                Le <span className="text-gold italic">Collezioni</span>.
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {MENU_CATEGORIES.map((category, i) => (
              <ScrollReveal key={category.id} delay={i * 0.1} direction="up" className="h-full">
                <div className="group card !p-12 border-white/5 hover:border-[#D4AF37]/30 bg-black/40 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-12">
                    <div className="text-5xl font-serif font-bold text-white/10 group-hover:text-[#D4AF37]/40 transition-colors duration-700">
                      0{i + 1}
                    </div>
                    <Sparkles className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150" size={24} strokeWidth={1} />
                  </div>
                  <h4 className="text-3xl font-serif font-bold text-white mb-6 tracking-widest uppercase group-hover:text-[#D4AF37] transition-colors duration-700">
                    {category.name}
                  </h4>
                  <p className="text-white/60 mb-10 leading-loose font-light uppercase tracking-widest text-xs flex-grow">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-auto">
                    {category.items.slice(0, 4).map((item, j) => (
                      <span key={j} className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] border border-[#D4AF37]/20 px-4 py-2 hover:bg-[#D4AF37] hover:text-black transition-all duration-500">
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-20">
            <Link href="/menu" className="btn-secondary !px-16">
              View All Collections
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Distinction Highlights */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
            {WHY_CHOOSE_US.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <div className="text-center group flex flex-col items-center">
                  <div className="w-24 h-24 border border-[#D4AF37]/20 flex items-center justify-center mb-10 group-hover:border-[#D4AF37] transition-all duration-700 rotate-45 group-hover:rotate-0">
                    <div className="-rotate-45 group-hover:rotate-0 transition-transform duration-700">
                       <Star className="text-[#D4AF37]" size={32} strokeWidth={1} />
                    </div>
                  </div>
                  <h4 className="text-xl font-serif font-bold text-white mb-6 uppercase tracking-[0.2em]">
                    {item.title}
                  </h4>
                  <p className="text-white/50 text-[10px] leading-loose uppercase tracking-[0.3em] font-light">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.cta}
            alt="Luxury Dining"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-6xl md:text-9xl font-serif font-bold text-white mb-10 leading-none tracking-tighter">
              The First <br /> <span className="text-gold italic">Impression</span>.
            </h2>
            <p className="text-lg md:text-xl mb-16 max-w-2xl mx-auto text-white opacity-90 font-light uppercase tracking-[0.3em] leading-loose">
              Esperienza gastronomica esclusiva nel cuore di Riccione. Ti aspettiamo per ridefinire le tue aspettative.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary !px-16 !py-6 text-base"
              >
                Inizia l&apos;Esperienza
              </Link>
              <Link 
                href="tel:+390541000000"
                className="btn-secondary !px-16 !py-6 text-base"
              >
                Concierge Service
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}