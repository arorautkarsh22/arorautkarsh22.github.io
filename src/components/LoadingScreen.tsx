'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export function BorderTrail({ className, size = 120 }: { className?: string; size?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] border-[4px] border-transparent">
      <motion.div
        className={cn('absolute aspect-square bg-zinc-500', className)}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round 0px)`,
        }}
        animate={{
          offsetDistance: ['0%', '100%'],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 4,
        }}
      />
    </div>
  );
}

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let imagesLoaded = false;
    let fontsLoaded = false;

    const checkLoading = () => {
      if (imagesLoaded && fontsLoaded) {
        setTimeout(() => setIsLoading(false), 800);
      }
    };

    document.fonts.ready.then(() => {
      fontsLoaded = true;
      checkLoading();
    });

    if (document.readyState === 'complete') {
      imagesLoaded = true;
      checkLoading();
    } else {
      window.addEventListener('load', () => {
        imagesLoaded = true;
        checkLoading();
      });
    }

    const timeout = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d1117] overflow-hidden"
        >
          <div className="flex flex-col items-center gap-6 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold tracking-widest text-[#c9d1d9]"
            >
              UA
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm font-mono tracking-widest text-[#8b949e] uppercase"
            >
              Loading Assets...
            </motion.div>
          </div>
          
          <BorderTrail
            className="bg-gradient-to-l from-transparent via-[#58a6ff] to-transparent"
            size={300}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
