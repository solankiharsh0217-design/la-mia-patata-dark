"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { BUSINESS_SERVICES, SITE } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { Send, Check, MapPin, Phone, Mail, UtensilsCrossed, Building2, Briefcase, PartyPopper } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed size={32} strokeWidth={1} />,
  Building2: <Building2 size={32} strokeWidth={1} />,
  Briefcase: <Briefcase size={32} strokeWidth={1} />,
  PartyPopper: <PartyPopper size={32} strokeWidth={1} />,
};

export default function ServiziBusinessPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Business Services Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#050505]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0,transparent_70%)]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal direction="down">
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.5em] mb-10">
              Exclusive Partnerships
            </p>
            <h1 className="text-6xl md:text-9xl font-serif font-bold mb-10 tracking-tighter uppercase leading-none">
              Servizi <span className="text-gold italic">Business</span>.
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed uppercase tracking-[0.2em]">
              Soluzioni gastronomiche su misura per hotel, eventi e aziende. L&apos;eccellenza di La Mia Patata per i vostri ospiti.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {BUSINESS_SERVICES.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up" className="h-full">
                <div className="group luxury-border bg-white/5 hover:bg-[#D4AF37]/5 transition-all duration-700 h-full p-12 md:p-16 flex flex-col">
                  <div className="w-16 h-16 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-10 group-hover:scale-110 transition-transform duration-700">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors duration-700">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-[11px] font-light leading-loose uppercase tracking-[0.2em] flex-grow">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Endorsement */}
      <section className="py-32 px-6 bg-[#080808] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image src="/logo-bg.webp" alt="" fill className="object-cover" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <ScrollReveal direction="up">
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.5em] mb-8">
              A Message from Our Corporate Chef
            </p>
            <blockquote className="text-2xl md:text-4xl font-serif italic text-white/70 leading-relaxed max-w-4xl mx-auto mb-10">
              &ldquo;Ogni evento è un&apos;opportunità per creare qualcosa di straordinario. Portiamo la passione e la qualità di La Mia Patata direttamente nella vostra location.&rdquo;
            </blockquote>
            <p className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.3em]">
              — Stefano Maiullo, Corporate Chef
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            {/* Info */}
            <ScrollReveal direction="right" className="h-full">
              <h2 className="text-4xl font-serif font-bold text-white mb-16 uppercase tracking-widest">
                Let&apos;s <span className="text-gold italic">Collaborate</span>
              </h2>
              
              <div className="space-y-12">
                {[
                  { icon: <MapPin />, title: "Location", content: SITE.address, link: SITE.mapsUrl },
                  { icon: <Phone />, title: "Direct Line", content: SITE.phone, link: SITE.phoneLink },
                  { icon: <Mail />, title: "Business Inquiries", content: SITE.email, link: SITE.emailLink },
                ].map((item) => (
                  <div key={item.title} className="group flex items-start gap-8 p-10 luxury-border bg-white/5 hover:bg-[#D4AF37]/5 transition-all duration-700">
                    <div className="w-12 h-12 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 text-[#D4AF37] group-hover:scale-110 transition-transform duration-700">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4AF37] mb-3">{item.title}</h3>
                      <Link href={item.link} className="text-lg text-white/60 hover:text-white transition-colors font-serif italic tracking-widest leading-relaxed">
                        {item.content}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal direction="left" className="h-full">
              <div className="bg-black/40 p-12 md:p-16 border border-white/5 relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[100px]" />
                
                <h2 className="text-3xl font-serif font-bold text-white mb-4 uppercase tracking-[0.2em]">Request a Quote</h2>
                <p className="text-white/40 text-[10px] font-light uppercase tracking-[0.3em] mb-12">Compilate il modulo e vi contatteremo entro 24 ore.</p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20"
                    >
                      <div className="w-24 h-24 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center mx-auto mb-10 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                        <Check size={48} strokeWidth={1} />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-white mb-4 tracking-widest uppercase">Request Received</h3>
                      <p className="text-white/40 text-xs uppercase tracking-[0.3em]">La ringraziamo per l&apos;interesse. Il nostro team vi contatterà a breve.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                      <div className="space-y-3">
                        <label className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#D4AF37] ml-2">Company / Hotel Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-8 py-5 bg-white/5 border border-white/10 focus:border-[#D4AF37] outline-none transition-all text-white font-light tracking-widest"
                          placeholder="Your Company"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#D4AF37] ml-2">Contact Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-8 py-5 bg-white/5 border border-white/10 focus:border-[#D4AF37] outline-none transition-all text-white font-light tracking-widest"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#D4AF37] ml-2">Email</label>
                        <input
                          type="email"
                          required
                          className="w-full px-8 py-5 bg-white/5 border border-white/10 focus:border-[#D4AF37] outline-none transition-all text-white font-light tracking-widest"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#D4AF37] ml-2">Service Type</label>
                        <select
                          required
                          className="w-full px-8 py-5 bg-white/5 border border-white/10 focus:border-[#D4AF37] outline-none transition-all text-white font-light tracking-widest appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-black">Select a service</option>
                          <option value="catering" className="bg-black">Catering Privato</option>
                          <option value="hotel" className="bg-black">Hotel & Resort</option>
                          <option value="corporate" className="bg-black">Eventi Aziendali</option>
                          <option value="party" className="bg-black">Feste & Celebrazioni</option>
                          <option value="other" className="bg-black">Altro</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#D4AF37] ml-2">Message</label>
                        <textarea
                          required
                          rows={4}
                          className="w-full px-8 py-5 bg-white/5 border border-white/10 focus:border-[#D4AF37] outline-none transition-all resize-none text-white font-light tracking-widest"
                          placeholder="Descrivi il vostro evento o esigenza..."
                        />
                      </div>
                      <button type="submit" className="w-full btn-primary !py-6">
                        <Send size={18} /> Send Inquiry
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
