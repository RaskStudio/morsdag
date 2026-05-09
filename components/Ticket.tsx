"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function Ticket() {
  const [mounted, setMounted] = useState(false);
  const [barcodeLines, setBarcodeLines] = useState<{ width: string; opacity: number }[]>([]);

  useEffect(() => {
    setMounted(true);
    setBarcodeLines(
      Array.from({ length: 50 }).map(() => ({
        width: `${Math.random() * 3 + 1}px`,
        opacity: Math.random() > 0.2 ? 1 : 0.4,
      }))
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: -2, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 1, y: 0 }}
      whileHover={{ rotate: 0, scale: 1.02, transition: { duration: 0.2 } }}
      className="relative w-full max-w-[360px] mx-auto bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden paper-texture border border-white/50"
    >
      {/* Premium Gradient Header */}
      <div className="relative bg-gradient-to-br from-[#d62828] via-[#ae2012] to-[#9b2226] text-white p-8">
        <div className="relative z-10">
          <h2 className="text-3xl font-black tracking-tighter uppercase italic leading-none">ARKEN</h2>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-80 mt-1">Museum for Moderne Kunst</p>
        </div>

        <div className="mt-6">
          <p className="text-[10px] uppercase font-black opacity-60 tracking-widest">Gæst</p>
          <p className="text-xl font-mono font-bold tracking-tighter uppercase leading-tight">Verdens Bedste Mor</p>
        </div>
      </div>

      {/* Ticket Main Section */}
      <div className="p-8 space-y-6 relative">
        {/* Subtle Gold Foil Seal */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-600/5 rounded-full blur-2xl pointer-events-none" />

        <div className="space-y-4 relative z-10">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-gray-400">
               <Star size={12} className="text-accent" />
               <p className="text-[10px] uppercase font-black tracking-widest">Anledning</p>
            </div>
            <p className="text-2xl font-serif italic text-black font-black leading-none">Mors Dag 2026</p>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-gray-400">
               <Star size={12} className="text-accent" />
               <p className="text-[10px] uppercase font-black tracking-widest">Oplevelse</p>
            </div>
            <p className="text-xl font-bold text-gray-800 leading-tight">Frokost & Museumstur på ARKEN</p>
          </div>
        </div>

        {/* Sophisticated Barcode Area */}
        <div className="pt-4 space-y-4 border-t border-gray-50">
          <div className="flex items-center gap-4">
            <div className="h-[1px] flex-grow bg-gray-100" />
            <p className="text-[10px] font-black text-gray-200 uppercase tracking-[0.2em]">Valid Entry Pass</p>
            <div className="h-[1px] flex-grow bg-gray-100" />
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <div className="h-14 w-full flex gap-[1.5px] items-center px-2">
              {mounted && barcodeLines.map((line, i) => (
                <div
                  key={i}
                  className="bg-black/70 flex-grow h-full rounded-sm"
                  style={{
                    width: line.width,
                    opacity: line.opacity,
                  }}
                />
              ))}
              {!mounted && <div className="h-full w-full bg-gray-50 animate-pulse rounded-sm" />}
            </div>
            <p className="text-[8px] font-mono font-bold tracking-[0.8em] text-gray-300 pl-[0.8em] uppercase">Arken X World Best Mom</p>
          </div>
        </div>
      </div>

      {/* Interactive Perforation */}
      <div className="absolute top-[38%] -left-4 w-8 h-8 bg-background rounded-full shadow-inner" />
      <div className="absolute top-[38%] -right-4 w-8 h-8 bg-background rounded-full shadow-inner" />
      <div className="absolute top-[38%] left-4 right-4 border-t-2 border-dashed border-gray-100" />
    </motion.div>
  );
}
