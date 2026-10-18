'use client';

import React from 'react';
import Image from 'next/image';
import { BiBookOpen, BiCheckCircle } from 'react-icons/bi';

import {
  FaCalendarCheck,
  FaAward,
  FaBuildingColumns,
} from 'react-icons/fa6';

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  batchOrYear: string;
  status: string;
  detail: string;
  result?: string;
  logo: string;
  badgeColor: string;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    degree: 'Higher Secondary Certificate (HSC) — Science',
    institution: 'Narsingdi Science College',
    batchOrYear: 'Batch: 2028',
    status: 'Currently Studying',
    detail:
      'Currently pursuing my Higher Secondary Certificate in the Science group at Narsingdi Science College while continuing to develop my programming and web development skills.',
    logo: '/images/education/nsc.jpg',
    badgeColor:
      'bg-blue-950/60 border-blue-800/80 text-blue-400',
  },
  {
    id: 2,
    degree: 'AI-Driven Full Stack Web Engineering',
    institution: 'Programming Hero',
    batchOrYear: 'Batch: 14',
    status: 'Learning',
    detail:
      'Currently learning full-stack web development through Programming Hero, focusing on modern web technologies, frontend and backend development, and building practical projects.',
    logo: '/images/education/ph.jpg',
    badgeColor:
      'bg-red-950/60 border-red-800/80 text-red-400',
  },
  {
    id: 3,
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Satirpara Kali Kumar Institution School & College',
    batchOrYear: 'Batch: 2026',
    result: 'GPA 4.78',
    status: 'Completed',
    detail:
      'Completed my Secondary School Certificate from Satirpara Kali Kumar Institution School & College with a GPA of 4.78.',
    logo: '/images/education/skki.png',
    badgeColor:
      'bg-emerald-950/60 border-emerald-800/80 text-emerald-400',
  },
];

const Education: React.FC = () => {
  return (
    <section
      className="relative px-4 py-20 font-sans text-white sm:px-6 md:px-8 md:py-24"
      id="Education"
    >
      {/* Ambient background glow (Safe from clipping) */}
      <div className="pointer-events-none absolute left-[-100px] top-1/4 h-[350px] w-[350px] rounded-full bg-red-600/[0.12] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-80px] h-[320px] w-[320px] rounded-full bg-red-950/30 blur-[130px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/[0.035] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-red-400">
            Academic Journey
          </span>

          <h2 className="mb-4 font-italiana text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Educational Qualification
          </h2>

          <p className="font-libre text-sm leading-7 text-gray-400 md:text-base">
            A record of my academic milestones, institutional
            background, and specialized technical training programs.
          </p>
        </div>

        {/* Stacked Sticky Cards Container */}
        <div className="relative flex flex-col gap-10 pb-24">
          {educationData.map((edu, index) => {
            // Progressive sticky top offset so cards stack nicely on scroll
            const stickyOffset = 100 + index * 32;

            return (
              <article
                key={edu.id}
                style={{ top: `${stickyOffset}px` }}
                className="sticky z-10 group relative isolate flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl border border-white/[0.10] bg-[#0e0e0e]/95 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_12px_35px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-500 hover:border-red-400/35 hover:bg-[#0e0e0e] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_16px_45px_rgba(239,68,68,0.2)] sm:rounded-3xl sm:p-6 md:flex-row md:items-center md:p-8"
              >
                {/* Glass reflection */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.07] via-transparent to-red-500/[0.04] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Liquid glow */}
                <div className="pointer-events-none absolute -right-12 -top-16 -z-10 h-40 w-40 rounded-full bg-red-500/[0.07] blur-3xl transition-all duration-500 group-hover:bg-red-500/[0.16]" />

                {/* Top glass highlight */}
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {/* Left: Logo and information */}
                <div className="flex w-full min-w-0 flex-col items-start gap-5 sm:flex-row sm:items-start md:w-3/4 md:items-center">
                  {/* Institution logo */}
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-300 group-hover:border-red-400/30 sm:h-20 sm:w-20">
                    <FaBuildingColumns className="text-2xl text-gray-500 transition-colors group-hover:text-red-400" />

                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      fill
                      sizes="(max-width: 640px) 64px, 80px"
                      className="z-10 object-cover  h-full w-full"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Education details */}
                  <div className="flex min-w-0 flex-1 flex-col">
                    {/* Status badges */}
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-mono ${edu.badgeColor}`}
                      >
                        {edu.status}
                      </span>

                      <span className="flex items-center gap-1.5 rounded-full border border-white/[0.10] bg-white/[0.045] px-3 py-1 font-libre text-xs text-gray-300 backdrop-blur-lg">
                        <FaCalendarCheck className="text-[11px] text-red-400" />
                        {edu.batchOrYear}
                      </span>

                      {edu.result && (
                        <span className="flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/[0.08] px-3 py-1 font-mono text-xs text-amber-400 backdrop-blur-lg">
                          <FaAward className="text-[11px]" />
                          {edu.result}
                        </span>
                      )}
                    </div>

                    <h3 className="mb-2 font-fjalla text-xl leading-snug text-white transition-colors duration-300 group-hover:text-red-300 sm:text-2xl">
                      {edu.degree}
                    </h3>

                    <p className="mb-3 flex items-start gap-2 text-sm font-medium text-gray-300 sm:items-center">
                      <BiBookOpen className="mt-0.5 shrink-0 text-base text-red-400 sm:mt-0" />
                      <span>{edu.institution}</span>
                    </p>

                    <p className="max-w-2xl font-libre text-xs leading-7 text-gray-400 sm:text-sm">
                      {edu.detail}
                    </p>
                  </div>
                </div>

                {/* Right: Status indicator */}
                <div className="flex w-full items-center justify-between border-t border-white/[0.08] pt-4 md:w-auto md:flex-col md:items-end md:justify-center md:self-stretch md:border-l md:border-t-0 md:pl-6 md:pt-0">
                  <div className="rounded-2xl border border-white/[0.10] bg-white/[0.045] p-3 text-red-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-300 group-hover:scale-105 group-hover:border-red-400/30 group-hover:shadow-[0_0_22px_rgba(239,68,68,0.12)]">
                    <BiCheckCircle className="text-2xl" />
                  </div>

                  <span className="font-mono text-[11px] text-gray-500 md:mt-2">
                    {edu.status === 'Completed'
                      ? 'Completed'
                      : 'In Progress'}
                  </span>
                </div>

                {/* Bottom reflection */}
                <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-red-400/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;