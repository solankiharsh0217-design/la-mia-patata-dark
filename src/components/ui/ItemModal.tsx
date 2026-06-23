"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Utensils, Info } from "lucide-react";
import { MenuItem, ALLERGEN_LABELS } from "@/lib/constants";

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function ItemModal({ item, onClose }: ItemModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [item]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {item && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-md"
            >
              <X size={20} />
            </button>

            {/* Image Section */}
            <div className="relative h-64 md:h-80 w-full">
              <Image
                src={item.image || "/newlogo.png"}
                alt={item.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
            </div>

            {/* Text Section */}
            <div className="p-6 md:p-8 space-y-6">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-3xl font-serif text-white">{item.name}</h2>
                  {item.price && (
                    <span className="text-[#D4AF37] font-serif font-bold text-3xl md:text-4xl whitespace-nowrap">
                      €{item.price}
                    </span>
                  )}
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed">{item.description}</p>
              </div>

              {/* Allergens */}
              {item.allergens.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.allergens.map((code) => (
                    <span
                      key={code}
                      title={ALLERGEN_LABELS[code]}
                      className="px-2 py-1 bg-zinc-800 text-accent text-xs font-bold rounded tracking-wider border border-accent/20"
                    >
                      {code}
                    </span>
                  ))}
                </div>
              )}

              {/* Detailed Description */}
              {item.longDescription && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-accent">
                    <Info size={18} />
                    <h3 className="font-bold uppercase tracking-widest text-sm">Dettagli del Piatto</h3>
                  </div>
                  <p className="text-zinc-300 leading-relaxed italic">
                    &ldquo;{item.longDescription}&rdquo;
                  </p>
                </div>
              )}

              {/* Ingredients List */}
              {item.ingredients && item.ingredients.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-accent">
                    <Utensils size={18} />
                    <h3 className="font-bold uppercase tracking-widest text-sm">Ingredienti Selezionati</h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                    {item.ingredients.map((ingredient, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zinc-400 text-sm">
                        <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
