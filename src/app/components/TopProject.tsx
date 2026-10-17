'use client';

import React from 'react';
import Image from 'next/image';
import { FaArrowUpRightFromSquare, FaGithub, FaLayerGroup, FaCalendar } from 'react-icons/fa6';

export interface Metric {
  value: string;
  label: string;
}

export interface TopProject {
  id: number;
  year: string;
  category: string;
  title: string;
  description: string;
  metrics: Metric[];
  skills: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  themeColor: {
    border: string;
    glow: string;
    badgeBg: string;
    badgeText: string;
    accentDot: string;
  };
}

// Top 4 Featured Projects with unique card color themes matching your reference design
const topProjectsData: TopProject[] = [
  {
    id: 1,
    year: `2026`,
    category: `Full-Stack Web Application`,
    title: `Bazar Dor — Smart Daily Market Price Tracker`,
    description: `A responsive web platform for exploring daily product prices and comparing market trends with real-time category updates and insights.`,
    metrics: [
      {
        value: `Responsive`,
        label: `Optimized for mobile, tablet, and desktop`,
      },
      {
        value: `Real-Time API`,
        label: `Product and category data integration`,
      },
    ],
    skills: [`Next.js`, `TypeScript`, `Tailwind CSS`, `Better Auth`, `REST API`],
    image: `/images/projects/bazar-dor.png`,
    liveUrl: `https://bazardor.example.com`,
    githubUrl: `https://github.com/Rumi-Parvez/bazar-dor`,
    themeColor: {
      border: `border-blue-500/30 hover:border-blue-500/60`,
      glow: `shadow-[0_-10px_40px_rgba(59,130,246,0.12)] hover:shadow-[0_0_50px_rgba(59,130,246,0.25)]`,
      badgeBg: `bg-blue-950/60 border-blue-800/60`,
      badgeText: `text-blue-400`,
      accentDot: `bg-blue-500`,
    },
  },
  {
    id: 2,
    year: `2026`,
    category: `Fitness & Productivity`,
    title: `FitLog — Personal Fitness Management`,
    description: `A modern fitness web application engineered to help users organize, track, and analyze their daily workout routines and health milestones.`,
    metrics: [
      {
        value: `Simple UI`,
        label: `A clear and easy-to-use experience`,
      },
      {
        value: `Persistent`,
        label: `Local data storage support`,
      },
    ],
    skills: [`Next.js`, `React`, `JavaScript`, `Tailwind CSS`, `LocalStorage`],
    image: `/images/projects/fitlog.png`,
    liveUrl: `https://fitlog.example.com`,
    githubUrl: `https://github.com/Rumi-Parvez/fitlog`,
    themeColor: {
      border: `border-purple-500/30 hover:border-purple-500/60`,
      glow: `shadow-[0_-10px_40px_rgba(168,85,247,0.12)] hover:shadow-[0_0_50px_rgba(168,85,247,0.25)]`,
      badgeBg: `bg-purple-950/60 border-purple-800/60`,
      badgeText: `text-purple-400`,
      accentDot: `bg-purple-500`,
    },
  },
  {
    id: 3,
    year: `2026`,
    category: `Developer Tools`,
    title: `Lenghool — A Custom Programming Language`,
    description: `An ambitious developer tool project exploring custom language parsing, CLI toolchains, and dedicated VS Code editor extension support.`,
    metrics: [
      {
        value: `CLI Toolchain`,
        label: `Command-line interpreter workflow`,
      },
      {
        value: `VS Code`,
        label: `Custom language syntax extension`,
      },
    ],
    skills: [`TypeScript`, `Node.js`, `CLI`, `VS Code Extension`, `Testing`],
    image: `/images/projects/lenghool.png`,
    liveUrl: `https://lenghool.example.com`,
    githubUrl: `https://github.com/Rumi-Parvez/lenghool`,
    themeColor: {
      border: `border-emerald-500/30 hover:border-emerald-500/60`,
      glow: `shadow-[0_-10px_40px_rgba(16,185,129,0.12)] hover:shadow-[0_0_50px_rgba(16,185,129,0.25)]`,
      badgeBg: `bg-emerald-950/60 border-emerald-800/60`,
      badgeText: `text-emerald-400`,
      accentDot: `bg-emerald-500`,
    },
  },
  {
    id: 4,
    year: `2026`,
    category: `Authentication System`,
    title: `SecureAuth — Enterprise User Authentication`,
    description: `A production-focused security system implementing robust email verification, password hashing, session tokens, and modern auth flows.`,
    metrics: [
      {
        value: `Secure Auth`,
        label: `Email and password verification`,
      },
      {
        value: `Workflows`,
        label: `Automated token verification pipeline`,
      },
    ],
    skills: [`Next.js`, `Better Auth`, `MongoDB`, `Resend`, `TypeScript`],
    image: `/images/projects/secure-auth.png`,
    liveUrl: `https://secureauth.example.com`,
    githubUrl: `https://github.com/Rumi-Parvez/secure-auth`,
    themeColor: {
      border: `border-amber-500/30 hover:border-amber-500/60`,
      glow: `shadow-[0_-10px_40px_rgba(245,158,11,0.12)] hover:shadow-[0_0_50px_rgba(245,158,11,0.25)]`,
      badgeBg: `bg-amber-950/60 border-amber-800/60`,
      badgeText: `text-amber-400`,
      accentDot: `bg-amber-500`,
    },
  },
];

const TopProjects: React.FC = () => {
  return (
    <section className={`text-white py-24 px-6 font-sans select-none relative`} id='Projects'>
      <div className={`max-w-5xl mx-auto`}>
        
        {/* Section Header */}
        <div className={`mb-20 text-center max-w-3xl mx-auto`}>
          <span className={`text-xs tracking-[0.3em] text-red-500 uppercase font-sans block mb-3`}>
            {`FEATURED SHOWCASE`}
          </span>
          <h2 className={`text-4xl md:text-6xl font-italiana tracking-tight text-white leading-tight mb-4`}>
            {`Top Engineering Projects`}
          </h2>
          <p className={`text-gray-400 font-libre text-sm md:text-base`}>
            {`Explore my primary full-stack applications, developer tooling, and security platforms in an interactive stacked card view.`}
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div className={`relative flex flex-col gap-12 pb-24`}>
          {topProjectsData.map((project, index) => {
            const stickyOffset = 100 + index * 32;

            return (
              <div
                key={project.id}
                style={{ top: `${stickyOffset}px` }}
                className={`sticky z-10 group overflow-hidden rounded-3xl bg-[#0e0e0e]/95 backdrop-blur-2xl p-6 md:p-10 transition-all duration-500 border cursor-all-scroll ${project.themeColor.border} ${project.themeColor.glow}`}
              >
                {/* Top Card Header Details */}
                <div className={`flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-gray-800/80`}>
                  <div className={`flex items-center gap-3`}>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono border ${project.themeColor.badgeBg} ${project.themeColor.badgeText}`}>
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-libre bg-gray-900 border border-gray-800 text-gray-300 flex items-center gap-1.5`}>
                      <FaCalendar className={`text-gray-400 text-[10px]`} />
                      {project.year}
                    </span>
                  </div>

                  <span className={`text-xs font-mono text-gray-500`}>
                    {`0${index + 1} / 0${topProjectsData.length}`}
                  </span>
                </div>

                {/* Main Content Layout */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}>
                  
                  {/* Left Column: Text & Metrics */}
                  <div className={`lg:col-span-7 flex flex-col justify-between`}>
                    <div>
                      <h3 className={`text-2xl md:text-4xl font-fjalla text-white mb-4 transition-colors duration-300 leading-tight`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm md:text-base text-gray-400 font-libre leading-relaxed mb-6`}>
                        {project.description}
                      </p>

                      {/* Key Metrics */}
                      <div className={`grid grid-cols-2 gap-4 mb-6 p-4 rounded-2xl border border-gray-800/60 bg-black/40`}>
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className={`flex flex-col`}>
                            <span className={`text-sm md:text-base font-bold text-white font-sans flex items-center gap-1.5`}>
                              <span className={`w-2 h-2 rounded-full ${project.themeColor.accentDot} inline-block`} />
                              {metric.value}
                            </span>
                            <span className={`text-xs text-gray-500 font-libre mt-0.5`}>
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Skills */}
                    <div className={`flex flex-wrap gap-2 mb-6`}>
                      {project.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-lg text-xs font-libre bg-gray-900/90 border border-gray-800 text-gray-300`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Working Action Buttons */}
                    <div className={`flex items-center gap-4 pt-2`}>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target={`_blank`}
                          rel={`noopener noreferrer`}
                          className={`px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium flex items-center gap-2 transition-all shadow-lg cursor-pointer border border-neutral-700`}
                        >
                          <span>{`Live Preview`}</span>
                          <FaArrowUpRightFromSquare className={`text-[11px]`} />
                        </a>
                      ) : null}

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target={`_blank`}
                          rel={`noopener noreferrer`}
                          className={`px-5 py-3 rounded-xl border border-gray-800 bg-black/50 hover:bg-black/90 text-gray-300 hover:text-white text-xs font-medium flex items-center gap-2 transition-all cursor-pointer`}
                        >
                          <FaGithub className={`text-sm`} />
                          <span>{`Source Code`}</span>
                        </a>
                      ) : null}
                    </div>
                  </div>

                  {/* Right Column: Project Preview Image Banner */}
                  <div className={`lg:col-span-5`}>
                    <div className={`relative w-full aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-gray-800/80 bg-gray-950 transition-colors shadow-2xl`}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={`object-cover object-top transition-transform duration-700 group-hover:scale-105`}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />

                      {/* Graphic Fallback */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-neutral-950/40 flex items-center justify-center -z-10`}>
                        <FaLayerGroup className={`text-6xl text-gray-800 transition-colors duration-500`} />
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TopProjects;