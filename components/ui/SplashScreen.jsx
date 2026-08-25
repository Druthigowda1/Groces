'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Apple, Carrot, Milk } from 'lucide-react';

export default function SplashScreen() {
  const pathname = usePathname();
  const [showSplash, setShowSplash] = useState(pathname === '/');

  useEffect(() => {
    if (pathname !== '/') {
      setShowSplash(false);
      return;
    }

    // Hide splash after 7.5 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 7500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div 
          className="fixed inset-0 z-[100] bg-brand-dark flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
        >
          {/* Moving Cart Container */}
          <motion.div 
            className="relative w-[400px] h-[400px] flex flex-col items-center justify-center"
            initial={{ x: '-150vw' }}
            animate={{ x: ['-150vw', '0vw', '0vw', '150vw'] }}
            transition={{ duration: 6.0, times: [0, 0.2, 0.8, 1], ease: "easeInOut" }}
          >
            
            {/* The Items dropping in (Z-index 0 to 20 to sit behind cart lines) */}
            
            {/* Bottom Layer */}
            <motion.div 
              className="absolute bottom-20 left-1/2 -translate-x-1/2 -ml-16 text-orange-500 z-10"
              initial={{ y: -500, opacity: 0, rotate: -60 }}
              animate={{ y: 0, opacity: 1, rotate: -20 }}
              transition={{ delay: 1.5, duration: 0.6, type: "spring", bounce: 0.4 }}
            >
              <Carrot size={64} fill="currentColor" />
            </motion.div>

            <motion.div 
              className="absolute bottom-16 left-1/2 -translate-x-1/2 ml-8 text-red-600 z-10"
              initial={{ y: -500, opacity: 0, rotate: 45 }}
              animate={{ y: 0, opacity: 1, rotate: 15 }}
              transition={{ delay: 1.7, duration: 0.6, type: "spring", bounce: 0.4 }}
            >
              <Apple size={56} fill="currentColor" />
            </motion.div>

            {/* Middle Layer */}
            <motion.div 
              className="absolute bottom-24 left-1/2 -translate-x-1/2 -ml-4 text-blue-200 z-10"
              initial={{ y: -500, opacity: 0, rotate: -15 }}
              animate={{ y: 0, opacity: 1, rotate: 5 }}
              transition={{ delay: 1.9, duration: 0.6, type: "spring", bounce: 0.4 }}
            >
              <Milk size={72} fill="currentColor" />
            </motion.div>

            <motion.div 
              className="absolute bottom-24 left-1/2 -translate-x-1/2 ml-20 text-green-500 z-20"
              initial={{ y: -500, opacity: 0, rotate: 90 }}
              animate={{ y: 0, opacity: 1, rotate: -10 }}
              transition={{ delay: 2.1, duration: 0.6, type: "spring", bounce: 0.4 }}
            >
              <Apple size={48} fill="currentColor" />
            </motion.div>

            <motion.div 
              className="absolute bottom-28 left-1/2 -translate-x-1/2 -ml-24 text-yellow-400 z-20"
              initial={{ y: -500, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: -40 }}
              transition={{ delay: 2.3, duration: 0.6, type: "spring", bounce: 0.4 }}
            >
              <Carrot size={56} fill="currentColor" />
            </motion.div>

            {/* Top Layer */}
            <motion.div 
              className="absolute bottom-36 left-1/2 -translate-x-1/2 ml-6 text-white z-10"
              initial={{ y: -500, opacity: 0, rotate: 10 }}
              animate={{ y: 0, opacity: 1, rotate: -5 }}
              transition={{ delay: 2.5, duration: 0.6, type: "spring", bounce: 0.4 }}
            >
              <Milk size={64} fill="currentColor" />
            </motion.div>

            <motion.div 
              className="absolute bottom-32 left-1/2 -translate-x-1/2 -ml-12 text-red-500 z-20"
              initial={{ y: -500, opacity: 0, rotate: 180 }}
              animate={{ y: 0, opacity: 1, rotate: 20 }}
              transition={{ delay: 2.7, duration: 0.6, type: "spring", bounce: 0.4 }}
            >
              <Apple size={60} fill="currentColor" />
            </motion.div>

            <motion.div 
              className="absolute bottom-40 left-1/2 -translate-x-1/2 ml-16 text-orange-400 z-20"
              initial={{ y: -500, opacity: 0, rotate: -120 }}
              animate={{ y: 0, opacity: 1, rotate: -80 }}
              transition={{ delay: 2.9, duration: 0.6, type: "spring", bounce: 0.4 }}
            >
              <Carrot size={50} fill="currentColor" />
            </motion.div>

            {/* The Huge Cart */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white z-30">
              <ShoppingCart size={280} strokeWidth={2} />
            </div>
            
          </motion.div>

          {/* Grocery Hub Logo Text */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 5.0, duration: 1.0, type: "spring" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-brand-dark font-bold text-4xl leading-none">G</span>
              </div>
              <h1 className="text-6xl font-bold text-white tracking-tight drop-shadow-lg">Grocery Hub</h1>
            </div>
            <motion.p 
              className="text-brand-secondary font-bold uppercase tracking-[0.3em] text-lg mt-4 drop-shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.7, duration: 0.8 }}
            >
              Quality Meets Value
            </motion.p>
          </motion.div>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
}
