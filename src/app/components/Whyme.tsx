'use client';

import React from 'react';
import { FaCode } from 'react-icons/fa6';

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
} from 'react-icons/si';

const WhyPartnerWithMe: React.FC = () => {
  return (
    <section className="bg-[#0b0b0b] text-white py-24 px-6 select-none font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-14">
          <span className="text-xs tracking-[0.3em] text-gray-400 uppercase font-semibold block mb-3">
            WHY PARTNER WITH ME
          </span>
          <h2 className="text-4xl md:text-6xl font-italiana tracking-tight text-white leading-tight">
            Why Partner With Me <br /> Today And Always?
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: Production-Grade Reliability */}
          <div className="relative overflow-hidden rounded-3xl border border-gray-800/80 bg-gradient-to-br from-[#1c0c0c] via-[#120a0a] to-[#080505] p-8 md:p-10 flex flex-col justify-between shadow-2xl group min-h-[340px]">
            {/* Ambient Red Glow Background Accent */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-red-900/20 rounded-full blur-3xl pointer-events-none group-hover:bg-red-800/30 transition-all duration-500" />

            {/* Graphic Illustration */}
            <div className="relative z-10 flex items-center gap-6 my-auto pt-2 pb-8">
              {/* Main Code Box */}
              <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-950 border border-gray-700/60 shadow-xl shrink-0">
                <FaCode className="text-gray-300 text-2xl" />
                {/* Glowing Vertical Laser Line */}
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-1 h-14 bg-red-500 shadow-[0_0_12px_#ef4444]" />
              </div>

              {/* Tech Stack Floating Badges */}
              <div className="grid grid-cols-3 gap-3 text-gray-400 text-lg">
                <div className="p-2 rounded-lg bg-gray-900/80 border border-gray-800 flex items-center justify-center">
                  <SiReact className="text-cyan-400" />
                </div>
                <div className="p-2 rounded-lg bg-gray-900/80 border border-gray-800 flex items-center justify-center">
                  <SiNextdotjs className="text-white" />
                </div>
                <div className="p-2 rounded-lg bg-gray-900/80 border border-gray-800 flex items-center justify-center">
                  <SiTailwindcss className="text-sky-400" />
                </div>
                <div className="p-2 rounded-lg bg-gray-900/80 border border-gray-800 flex items-center justify-center">
                  <SiNodedotjs className="text-green-500" />
                </div>
                <div className="p-2 rounded-lg bg-gray-900/80 border border-gray-800 flex items-center justify-center">
                  <SiTypescript className="text-blue-500" />
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-fjalla text-white mb-2">
                Production-Grade Reliability
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Clean, thoroughly tested, enterprise-ready source code with full observability baked in from day one.
              </p>
            </div>
          </div>

          {/* Card 2: Performance First Mindset */}
          <div className="relative overflow-hidden rounded-3xl border border-gray-800/80 bg-gradient-to-br from-[#1c0c0c] via-[#120a0a] to-[#080505] p-8 md:p-10 flex flex-col justify-between shadow-2xl group min-h-[340px]">
            {/* Ambient Red Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-900/20 rounded-full blur-3xl pointer-events-none group-hover:bg-red-800/30 transition-all duration-500" />

            {/* Waveform SVG Illustration */}
            <div className="relative z-10 w-full h-28 my-auto flex items-center justify-center">
              <svg
                className="w-full h-24 overflow-visible"
                viewBox="0 0 400 100"
                fill="none"
              >
                {/* Background Wave */}
                <path
                  d="M0 50 Q 50 20, 100 50 T 200 50 T 300 50 T 400 50"
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeOpacity="0.4"
                  fill="none"
                />
                {/* Main Dynamic Wave */}
                <path
                  d="M0 50 Q 70 80, 140 50 T 280 50 T 400 50"
                  stroke="#f97316"
                  strokeWidth="2.5"
                  fill="none"
                />
                {/* Center Target Indicator */}
                <circle cx="280" cy="50" r="5" fill="#ef4444" className="animate-pulse" />
                <line x1="280" y1="30" x2="280" y2="70" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="260" y1="50" x2="300" y2="50" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
              </svg>
            </div>

            {/* Card Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-fjalla text-white mb-2">
                Performance First Mindset
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Core Web Vitals, ultra-fast render, and aggressive asset optimization across every critical path.
              </p>
            </div>
          </div>

          {/* Card 3: Scalable Cloud Architecture */}
          <div className="relative overflow-hidden rounded-3xl border border-gray-800/80 bg-gradient-to-br from-[#1c0c0c] via-[#120a0a] to-[#080505] p-8 md:p-10 flex flex-col justify-between shadow-2xl group min-h-[340px]">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-900/20 rounded-full blur-3xl pointer-events-none group-hover:bg-red-800/30 transition-all duration-500" />

            {/* Dashboard / Grid Architecture Visual */}
            <div className="relative z-10 w-full my-auto py-4">
              <div className="bg-gradient-to-r from-gray-900 to-black p-4 rounded-xl border border-gray-800 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="px-3 py-1 bg-red-950/60 border border-red-800/50 rounded-lg text-xs text-red-400 font-mono">
                  scale: auto
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-fjalla text-white mb-2">
                Scalable Cloud Architecture
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Serverless microservices, secure API design, and efficient data pipelines built to grow with load.
              </p>
            </div>
          </div>

          {/* Card 4: Business-Driven Decisions */}
          <div className="relative overflow-hidden rounded-3xl border border-gray-800/80 bg-gradient-to-br from-[#1c0c0c] via-[#120a0a] to-[#080505] p-8 md:p-10 flex flex-col justify-between shadow-2xl group min-h-[340px]">
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-900/25 rounded-full blur-3xl pointer-events-none group-hover:bg-red-800/35 transition-all duration-500" />

            {/* Dotted Globe Graphic */}
            <div className="relative z-10 w-full h-32 my-auto flex items-end justify-end overflow-hidden">
              <svg className="w-64 h-64 -mb-16 -mr-8" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="80" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                <circle cx="100" cy="100" r="60" stroke="#f97316" strokeWidth="1" strokeDasharray="4 4" opacity="0.8" />
                <path d="M 20 100 A 80 40 0 0 0 180 100" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="2 2" />
                <path d="M 40 100 A 60 30 0 0 0 160 100" stroke="#f97316" strokeWidth="1.5" strokeDasharray="2 2" />
              </svg>
            </div>

            {/* Card Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-fjalla text-white mb-2">
                Business-Driven Decisions
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Cross-functional alignment, clear technical communication, and product strategy that ships outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerWithMe;