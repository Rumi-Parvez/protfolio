'use client';

import React from 'react';
import Link from 'next/link';
import { BiError } from 'react-icons/bi';
import { FaHouse, FaArrowLeft, FaTriangleExclamation, FaTerminal, FaCompass } from 'react-icons/fa6';

export default function NotFound() {
  return (
    <main className={`relative min-h-screen bg-[#0b0b0b] text-white flex flex-col items-center justify-center px-6 font-sans select-none overflow-hidden py-15`}>
      
      {/* Background Ambient Glow Accents */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full bg-red-600/10 blur-[120px] pointer-events-none`} />
      <div className={`absolute bottom-10 right-10 w-[250px] h-[250px] rounded-full bg-red-950/20 blur-[100px] pointer-events-none`} />

      <div className={`relative z-10 max-w-2xl w-full text-center`}>
        
        {/* Animated Error Badge Icon */}
        <div className={`inline-flex items-center justify-center p-4 rounded-3xl bg-red-950/60 border border-red-800/80 text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.3)] mb-8 animate-bounce`}>
          <BiError className={`text-5xl md:text-6xl`} />
        </div>

        {/* Status Code with Glitch Aesthetic */}
        <div className={`flex items-center justify-center gap-3 mb-4`}>
          <FaTerminal className={`text-red-500 text-xl`} />
          <span className={`text-xs md:text-sm font-mono tracking-[0.3em] text-red-400 uppercase font-semibold`}>
            {`ERROR 404 — ROUTE NOT FOUND`}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className={`text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight mb-6`}>
          {`Oops! You wandered`} <br />
          <span className={`text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-white`}>
            {`into the unknown space.`}
          </span>
        </h1>

        {/* Description */}
        <p className={`text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-lg mx-auto mb-10`}>
          {`The page you are looking for might have been removed, had its name changed, or is temporarily unavailable in Rumi's portfolio directory.`}
        </p>

        {/* Quick Action Navigation Grid */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4`}>
          
          {/* Back to Home Button */}
          <Link
            href={`/`}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-red-700 hover:bg-red-800 text-white text-xs md:text-sm font-medium flex items-center justify-center gap-2.5 transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)] cursor-pointer group`}
          >
            <FaHouse className={`text-sm group-hover:-translate-y-0.5 transition-transform`} />
            <span>{`Return to Home`}</span>
          </Link>

          {/* Go Back Button */}
          <button
            type="button"
            onClick={() => window.history.back()}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl border border-gray-800 bg-black/60 hover:bg-black/90 hover:border-red-600/60 text-gray-300 hover:text-white text-xs md:text-sm font-medium flex items-center justify-center gap-2.5 transition-all backdrop-blur-md cursor-pointer`}
          >
            <FaArrowLeft className={`text-sm`} />
            <span>{`Go Back`}</span>
          </button>

        </div>

        {/* Bottom Helpful Links / Suggestions */}
        <div className={`mt-16 pt-8 border-t border-gray-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 font-mono`}>
          <span className={`flex items-center gap-1.5`}>
            <FaCompass className={`text-red-500`} />
            {`System: Secure Routing Active`}
          </span>
          <span>•</span>
          <span>{`Status: 404_NOT_FOUND`}</span>
          <span>•</span>
          <span>{`Author: Md Rumi Parvez`}</span>
        </div>

      </div>
    </main>
  );
}