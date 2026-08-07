'use client';
import { TextScramble } from '@/components/motion-primitives/text-scramble';
import { useState } from 'react';
import { ChevronDown, Mail, Phone, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { TextLoop } from '@/components/motion-primitives/text-loop';

export default function Hero() {
  const [trigger, setTrigger] = useState(true);

  return (
    <section
      id="hero"
      className="min-h-[100svh] flex flex-col items-center justify-center relative px-6 py-20 pb-32"
    >
      <div className="text-center z-10 max-w-4xl w-full flex flex-col items-center mt-8">
        {/* Name */}
        <div className="mb-4">
          <TextScramble
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
            as="h1"
            duration={3}
            speed={0.01}
            trigger={trigger}
          >
            Utkarsh Arora
          </TextScramble>
        </div>

        {/* Username */}
        <div className="mb-8">
          <TextScramble
            className="text-lg sm:text-xl text-[#8b949e] font-mono tracking-wide"
            as="p"
            duration={3}
            speed={0.01}
            trigger={trigger}
          >
            @arorautkarsh22
          </TextScramble>
        </div>

        {/* Tagline */}
        {/* Subtitles */}
        
        {/* Desktop Layout */}
        <div className="hidden sm:flex items-center justify-center gap-3 text-sm sm:text-base font-mono text-[#8b949e] animate-fade-in-up mb-10">
          <TextScramble
            as="span"
            duration={3}
            speed={0.01}
            trigger={trigger}
          >
            Machine Learning Engineer
          </TextScramble>
          <span className="opacity-50">•</span>
          <TextScramble
            as="span"
            duration={3}
            speed={0.01}
            trigger={trigger}
          >
            Full Stack Developer
          </TextScramble>
          <span className="opacity-50">•</span>
          <TextScramble
            className="whitespace-nowrap"
            as="span"
            duration={3}
            speed={0.01}
            trigger={trigger}
          >
            Building intelligent systems
          </TextScramble>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden flex items-center justify-center text-sm font-mono text-[#8b949e] animate-fade-in-up w-full text-center mb-10">
          <TextLoop interval={3000}>
            <span>Machine Learning Engineer</span>
            <span>Full Stack Developer</span>
            <span>Building intelligent systems</span>
          </TextLoop>
        </div>

        {/* Links and CV */}
        <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up w-full max-w-2xl">
          <a
            href="https://github.com/arorautkarsh22"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 sm:py-2.5 rounded-full bg-[rgba(201,209,217,0.05)] border border-[rgba(201,209,217,0.2)] text-[#c9d1d9] hover:bg-[rgba(201,209,217,0.15)] transition-all text-xs sm:text-sm font-medium"
          >
            <FaGithub size={16} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/arora-utkarsh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 sm:py-2.5 rounded-full bg-[rgba(10,102,194,0.15)] border border-[rgba(10,102,194,0.3)] text-[#60a5fa] hover:bg-[rgba(10,102,194,0.25)] transition-all text-xs sm:text-sm font-medium"
          >
            <FaLinkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:utkarsh.arora.2005@gmail.com"
            className="flex items-center justify-center gap-2 px-4 py-2 sm:py-2.5 rounded-full bg-[rgba(234,67,53,0.1)] border border-[rgba(234,67,53,0.2)] text-[#f87171] hover:bg-[rgba(234,67,53,0.2)] transition-all text-xs sm:text-sm font-medium"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>
          <a
            href="tel:+918383880639"
            className="flex items-center justify-center gap-2 px-4 py-2 sm:py-2.5 rounded-full bg-[rgba(37,211,102,0.1)] border border-[rgba(37,211,102,0.2)] text-[#4ade80] hover:bg-[rgba(37,211,102,0.2)] transition-all text-xs sm:text-sm font-medium"
          >
            <Phone size={16} />
            <span>Phone</span>
          </a>
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-2 sm:py-2.5 rounded-full bg-[rgba(88,166,255,0.15)] border border-[rgba(88,166,255,0.3)] text-[#58a6ff] hover:bg-[rgba(88,166,255,0.25)] hover:scale-105 transition-all text-xs sm:text-sm font-medium shadow-[0_0_15px_rgba(88,166,255,0.1)]"
          >
            <FileText size={16} />
            <span>View CV</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8b949e] animate-bounce">
        <span className="text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}
