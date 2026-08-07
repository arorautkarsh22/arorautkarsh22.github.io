'use client';
import { useRef } from 'react';
import { ScrollProgress } from '@/components/motion-primitives/scroll-progress';

export default function ScrollProgressBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="pointer-events-none fixed left-0 top-0 w-full z-50">
      <div className="absolute left-0 top-0 h-0.5 w-full bg-[#30363d]" />
      <ScrollProgress
        className="absolute top-0 h-0.5 bg-[#58a6ff]"
        springOptions={{
          stiffness: 280,
          damping: 18,
          mass: 0.3,
        }}
      />
    </div>
  );
}
