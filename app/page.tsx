"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Ticket from "@/components/Ticket";
import { ArrowDown, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if we should start in revealed state
    const params = new URLSearchParams(window.location.search);
    if (params.get('revealed') === 'true') {
      // Small timeout to ensure the height is rendered before scrolling
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'instant'
        });
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  // ALL HOOKS
  const bowScale = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const bowRotate = useTransform(scrollYProgress, [0, 0.2], [0, 90]);
  const bowOpacity = useTransform(scrollYProgress, [0.1, 0.2], [1, 0]);
  const lidY = useTransform(scrollYProgress, [0.2, 0.6], ["0vh", "-100vh"]);
  const lidRotate = useTransform(scrollYProgress, [0.2, 0.6], [0, -15]);
  const leftSideX = useTransform(scrollYProgress, [0.5, 0.9], ["0vw", "-100vw"]);
  const rightSideX = useTransform(scrollYProgress, [0.5, 0.9], ["0vw", "100vw"]);
  const bottomSideY = useTransform(scrollYProgress, [0.5, 0.9], ["0vh", "100vh"]);
  const boxOpacity = useTransform(scrollYProgress, [0.8, 0.95], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.7, 0.95, 1], [0, 1, 1]);
  const contentScale = useTransform(scrollYProgress, [0.7, 0.95], [0.85, 1]);
  // LIFTED: contentY is now negative to move the card UP instead of down
  const contentY = useTransform(scrollYProgress, [0.7, 0.95], [0, -30]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.01], [1, 0]);
  
  // New: Animate pointer events to prevent early clicks on desktop
  const contentPointerEvents = useTransform(scrollYProgress, [0, 0.8], ["none", "auto"]);

  if (!mounted) return null;

  return (
    <main className="relative bg-background min-h-screen">
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-dark/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      </div>

      <div className="h-[300vh]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden p-4">
          
          {/* THE GIFT CONTENT (UNDERNEATH) - Lower Z and animated pointer events */}
          <motion.div 
            style={{ 
              opacity: contentOpacity, 
              scale: contentScale,
              y: contentY,
              pointerEvents: contentPointerEvents
            }}
            className="absolute z-10 w-full max-w-sm flex flex-col items-center gap-4"
          >
            <Ticket />
            
            <div className="w-full text-center space-y-3 bg-white p-6 sm:p-8 rounded-[2rem] shadow-2xl border-2 border-accent/5">
              <h1 className="text-2xl sm:text-4xl font-serif italic text-black leading-tight font-black">
                Glædelig Mors Dag!
              </h1>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-bold max-w-[260px] sm:max-w-[300px] mx-auto font-sans">
                Fordi du er verdens bedste, skal vi sammen på ARKEN.
              </p>
              <div className="flex justify-center gap-4 text-accent">
                <Heart className="fill-current" size={20} />
                <Sparkles size={20} />
              </div>
            </div>
          </motion.div>

          {/* THE GIFT BOX (WRAPPING) - Higher Z to stay on top */}
          <motion.div 
            style={{ opacity: boxOpacity }}
            className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Box Lid */}
              <motion.div 
                style={{ y: lidY, rotate: lidRotate }}
                className="absolute inset-0 z-30 bg-accent rounded-lg shadow-2xl paper-texture border-b-4 border-black/20 origin-bottom-left flex flex-col items-center justify-center text-center p-6"
              >
                {/* Bow - Forced background within lid */}
                <motion.div 
                  style={{ scale: bowScale, rotate: bowRotate, opacity: bowOpacity }}
                  className="absolute inset-0 flex items-center justify-center z-0"
                >
                  <div className="absolute h-full w-12 bg-white/20 shadow-inner" />
                  <div className="absolute w-full h-12 bg-white/20 shadow-inner" />
                  <div className="relative z-0 flex">
                    <div className="w-16 h-16 bg-[#f77f00] rounded-full -mr-4 border-2 border-black/10 shadow-xl" />
                    <div className="w-16 h-16 bg-[#f77f00] rounded-full -ml-4 border-2 border-black/10 shadow-xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#f77f00] rounded-lg shadow-lg border-2 border-black/10" />
                  </div>
                </motion.div>
                
                {/* Text - Forced foreground within lid */}
                <div className="relative z-50 mt-12 text-white">
                  <p className="text-[10px] uppercase tracking-[0.4em] font-black mb-1 drop-shadow-md font-sans">Til Verdens Bedste</p>
                  <p className="text-5xl font-serif italic font-black drop-shadow-lg">Mor</p>
                </div>
              </motion.div>

              {/* Box Sides */}
              <div className="absolute inset-0 z-20 flex flex-wrap">
                <motion.div style={{ x: leftSideX }} className="w-1/2 h-full bg-[#ae2012] rounded-l-lg paper-texture shadow-xl border-r-4 border-black/10" />
                <motion.div style={{ x: rightSideX }} className="w-1/2 h-full bg-[#9b2226] rounded-r-lg paper-texture shadow-xl" />
                <motion.div style={{ y: bottomSideY }} className="absolute inset-0 bg-accent rounded-lg paper-texture shadow-2xl -z-10" />
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator - RESTORED */}
          <motion.div 
            style={{ opacity: indicatorOpacity }}
            className="absolute bottom-12 flex flex-col items-center gap-2 pointer-events-none z-[60]"
          >
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-accent text-[10px] uppercase tracking-[0.3em] font-black font-sans">Scroll for at pakke ud</span>
              <ArrowDown className="text-accent" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E')]" />
    </main>
  );
}
