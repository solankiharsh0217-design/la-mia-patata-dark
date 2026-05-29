"use client";

import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-5 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_50px_rgba(37,211,102,0.5)] transition-all group"
      aria-label="Contattaci su WhatsApp"
    >
      <MessageCircle size={32} strokeWidth={1.5} className="group-hover:rotate-12 transition-transform" />
      <span className="absolute right-full mr-6 top-1/2 -translate-y-1/2 bg-black text-[#D4AF37] px-5 py-2.5 border border-[#D4AF37]/30 text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none translate-x-4 group-hover:translate-x-0">
        Concierge Chat
      </span>
    </motion.a>
  );
}