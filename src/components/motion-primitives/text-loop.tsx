'use client';
import { motion, AnimatePresence, Transition, Variants } from 'motion/react';
import { useState, useEffect, Children } from 'react';
import { cn } from '@/lib/utils';

type TextLoopProps = {
  children: React.ReactNode[];
  className?: string;
  interval?: number;
  transition?: Transition;
  variants?: Variants;
  onIndexChange?: (index: number) => void;
};

export function TextLoop({
  children,
  className,
  interval = 2000,
  transition = { duration: 0.3 },
  variants,
  onIndexChange,
}: TextLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Children.toArray(children);

  useEffect(() => {
    const intervalMs = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % items.length;
        onIndexChange?.(next);
        return next;
      });
    }, interval);
    return () => clearInterval(intervalMs);
  }, [items.length, interval, onIndexChange]);

  return (
    <div className={cn('relative inline-block overflow-hidden', className)}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          variants={
            variants || {
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              exit: { y: -20, opacity: 0 },
            }
          }
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
