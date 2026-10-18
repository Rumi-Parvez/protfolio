'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaLayerGroup,
  FaCalendar,
} from 'react-icons/fa6';

import { topProjectsData } from '@/lib/projects';

const TopProjects: React.FC = () => {
  return (
    <section
      className="text-white py-24 px-6 font-sans select-none relative"
      id="Projects"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-xs tracking-[0.3em] text-red-500 uppercase font-sans block mb-3">
            FEATURED SHOWCASE
          </span>

          <h2 className="text-4xl md:text-6xl font-italiana tracking-tight text-white leading-tight mb-4">
            Top Engineering Projects
          </h2>

          <p className="text-gray-400 font-libre text-sm md:text-base">
            Explore my primary full-stack applications, developer tooling,
            and security platforms in an interactive stacked card view.
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div className="relative flex flex-col gap-12 pb-24">
          {topProjectsData.map((project, index) => {
            const stickyOffset = 100 + index * 32;

            const hasLiveUrl =
              Boolean(project.liveUrl) &&
              !project.liveUrl.includes('example.com');

            const hasGithubUrl =
              Boolean(project.githubUrl) &&
              !project.githubUrl.includes('example.com');

            return (
              <article
                key={project.id}
                style={{ top: `${stickyOffset}px` }}
                className={`sticky z-10 group overflow-hidden rounded-3xl bg-white/[0.045] backdrop-blur-2xl p-6 md:p-10 transition-all duration-500 border shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] cursor-all-scroll ${project.themeColor.border} ${project.themeColor.glow}`}
              >
                {/* Top Card Header Details */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-gray-800/80">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono border ${project.themeColor.badgeBg} ${project.themeColor.badgeText}`}
                    >
                      {project.category}
                    </span>

                    <span className="px-3 py-1 rounded-full text-xs font-libre bg-gray-900 border border-gray-800 text-gray-300 flex items-center gap-1.5">
                      <FaCalendar className="text-gray-400 text-[10px]" />
                      {project.year}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-gray-500">
                    0{index + 1} / 0{topProjectsData.length}
                  </span>
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Text & Metrics */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-4xl font-fjalla text-white mb-4 transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-sm md:text-base text-gray-400 font-libre leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-2xl border border-white/[0.10] bg-white/[0.035] backdrop-blur-xl">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="flex flex-col">
                            <span className="text-sm md:text-base font-bold text-white font-sans flex items-center gap-1.5">
                              <span
                                className={`w-2 h-2 rounded-full ${project.themeColor.accentDot} inline-block`}
                              />
                              {metric.value}
                            </span>

                            <span className="text-xs text-gray-500 font-libre mt-0.5">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg text-xs font-libre bg-white/[0.035] backdrop-blur-lg border border-white/[0.10] text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {hasLiveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-xl text-white text-xs font-medium flex items-center gap-2 transition-all shadow-lg border border-white/[0.12]"
                        >
                          <span>Live Preview</span>
                          <FaArrowUpRightFromSquare className="text-[11px]" />
                        </a>
                      )}

                      {hasGithubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-3 rounded-xl border border-white/[0.10] bg-white/[0.035] backdrop-blur-xl hover:bg-white/[0.09] text-gray-300 hover:text-white text-xs font-medium flex items-center gap-2 transition-all"
                        >
                          <FaGithub className="text-sm" />
                          <span>Source Code</span>
                        </a>
                      )}

                      {/* Project Details Page */}
                      <Link
                        href={`/projects/${project.id}`}
                        className="px-5 py-3 rounded-xl border border-white/20 bg-white/[0.07] hover:bg-white/[0.14] backdrop-blur-xl text-white text-xs font-medium flex items-center gap-2 transition-all"
                      >
                        <span>View Details</span>
                        <FaArrowUpRightFromSquare className="text-[11px]" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Project Preview Image */}
                  <div className="lg:col-span-5">
                    <div className="relative w-full aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-white/[0.12] bg-white/[0.035] backdrop-blur-xl transition-colors shadow-2xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={500}
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105 h-full w-full"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />

                      {/* Graphic Fallback */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-neutral-950/40 flex items-center justify-center -z-10">
                        <FaLayerGroup className="text-6xl text-gray-800 transition-colors duration-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopProjects;