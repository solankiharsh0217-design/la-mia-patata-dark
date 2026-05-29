"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white">
      {/* Hero */}
      <section className="pt-48 pb-20 border-b border-white/5 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px]" />
        </div>
        <ScrollReveal direction="up">
          <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.5em] mb-6">
            Private Access
          </p>
          <h1 className="text-6xl md:text-9xl font-serif font-bold mb-10 uppercase tracking-tighter">
            The <span className="text-gold italic">Concierge</span>.
          </h1>
          <p className="text-xl md:text-2xl text-white/40 max-w-3xl mx-auto font-light leading-relaxed uppercase tracking-[0.2em]">
            Siamo a vostra disposizione per prenotazioni, eventi privati o consulenze franchising.
          </p>
        </ScrollReveal>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            {/* Info */}
            <ScrollReveal direction="right">
              <h2 className="text-4xl font-serif font-bold text-white mb-16 uppercase tracking-widest">
                Direct <span className="text-gold italic">Lines</span>
              </h2>
              
              <div className="space-y-12">
                {[
                  { icon: <MapPin />, title: "Address", content: SITE.address, link: SITE.mapsUrl },
                  { icon: <Phone />, title: "Concierge", content: SITE.phone, link: SITE.phoneLink },
                  { icon: <Mail />, title: "Inquiries", content: SITE.email, link: SITE.emailLink },
                  { icon: <Clock />, title: "Availability", content: SITE.hoursDetailed }
                ].map((item, i) => (
                  <div key={i} className="group flex items-start gap-8 p-10 luxury-border bg-white/5 hover:bg-[#D4AF37]/5 transition-all duration-700">
                    <div className="w-12 h-12 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 text-[#D4AF37] group-hover:scale-110 transition-transform duration-700">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4AF37] mb-3">{item.title}</h3>
                      {item.link ? (
                        <Link href={item.link} className="text-lg text-white/60 hover:text-white transition-colors font-serif italic tracking-widest leading-relaxed">
                          {item.content}
                        </Link>
                      ) : (
                        <p className="text-lg text-white/60 font-serif italic tracking-widest leading-relaxed">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal direction="left">
              <div className="bg-black/40 p-12 md:p-16 border border-white/5 relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[100px]" />
                
                <h2 className="text-3xl font-serif font-bold text-white mb-4 uppercase tracking-[0.2em]">Secure Inquiries</h2>
                <p className="text-white/40 text-[10px] font-light uppercase tracking-[0.3em] mb-12">I nostri esperti vi risponderanno entro 24 ore.</p>

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
                      <p className="text-white/40 text-xs uppercase tracking-[0.3em]">La ringraziamo. Sarà ricontattato a breve dal nostro team.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                      <div className="space-y-3">
                        <label className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#D4AF37] ml-2">Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-8 py-5 bg-white/5 border border-white/10 focus:border-[#D4AF37] outline-none transition-all text-white font-light tracking-widest"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#D4AF37] ml-2">Secure Email</label>
                        <input
                          type="email"
                          required
                          className="w-full px-8 py-5 bg-white/5 border border-white/10 focus:border-[#D4AF37] outline-none transition-all text-white font-light tracking-widest"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#D4AF37] ml-2">Message</label>
                        <textarea
                          required
                          rows={4}
                          className="w-full px-8 py-5 bg-white/5 border border-white/10 focus:border-[#D4AF37] outline-none transition-all resize-none text-white font-light tracking-widest"
                          placeholder="How can we assist you?"
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