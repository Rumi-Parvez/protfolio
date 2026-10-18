'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { allProjects } from '@/lib/projects';

import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaLayerGroup,
  FaCalendar,
} from 'react-icons/fa6';

const Projects: React.FC = () => {
  // Top Projects-এ দেখানো প্রথম ৪টি বাদ দিয়ে বাকি প্রজেক্ট দেখাবে
  const otherProjects = allProjects.slice(4);

  return (
    <section className="text-white py-24 px-6 font-sans select-none">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs tracking-[0.3em] text-red-500 uppercase font-sans block mb-3">
              OTHER PROJECTS
            </span>

            <h2 className="text-4xl md:text-6xl font-italiana tracking-tight text-white leading-tight">
              More Crafted Applications and Development Tools
            </h2>
          </div>

          <p className="text-gray-400 font-libre text-sm md:text-base max-w-md">
            A broader showcase of projects exploring productivity systems,
            dashboards, developer tools, and e-commerce platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <article
              key={project.id}
              className="group relative isolate overflow-hidden rounded-3xl border border-white/[0.12] bg-white/[0.045] backdrop-blur-2xl p-6 md:p-8 flex flex-col justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-500 hover:border-red-600/60 hover:shadow-[0_10px_35px_rgba(239,68,68,0.15)]"
            >
              {/* Liquid Glass Reflections */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.07] via-transparent to-white/[0.01]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-red-500/[0.06] blur-[90px] transition-opacity duration-500 group-hover:bg-red-500/[0.12]"
              />

              <div className="relative z-10">
                {/* Image Banner */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/[0.12] bg-white/[0.035] backdrop-blur-xl mb-6 group-hover:border-red-900/50 transition-colors">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={675}
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105 h-full w-full"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  {/* Fallback Graphic */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-red-950/30 flex items-center justify-center -z-10">
                    <FaLayerGroup className="text-5xl text-gray-800 group-hover:text-red-500/40 transition-colors duration-500" />
                  </div>

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/20"
                  />

                  {/* Category */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/45 border border-white/[0.15] text-red-400 backdrop-blur-xl">
                      {project.category}
                    </span>
                  </div>

                  {/* Year */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-libre bg-black/45 border border-white/[0.15] text-gray-300 backdrop-blur-xl flex items-center gap-1.5">
                      <FaCalendar className="text-red-500 text-[10px]" />
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-fjalla text-white mb-3 group-hover:text-red-400 transition-colors duration-300 leading-snug flex items-center justify-between gap-3">
                  <span>{project.title}</span>

                  <FaArrowUpRightFromSquare className="text-sm opacity-0 group-hover:opacity-100 transition-opacity text-red-500 shrink-0" />
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 font-libre leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-2xl border border-white/[0.10] bg-white/[0.035] backdrop-blur-xl shadow-inner shadow-white/[0.02]">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="flex flex-col">
                      <span className="text-sm text-white font-sans">
                        {metric.value}
                      </span>

                      <span className="text-xs text-gray-500 font-light leading-snug mt-0.5">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom */}
              <div className="relative z-10">
                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-libre bg-white/[0.035] backdrop-blur-lg border border-white/[0.10] text-gray-300 group-hover:border-white/[0.20] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.10]">
                  <Link
                    href={`/projects/${project.id}`}
                    aria-label={`View details for ${project.title}`}
                    className="px-4 py-2.5 rounded-xl bg-red-700/90 hover:bg-red-800 text-white text-xs font-medium inline-flex items-center gap-2 transition-colors shadow-lg border border-white/[0.10]"
                  >
                    <span>View Details</span>
                    <FaArrowUpRightFromSquare className="text-[11px]" />
                  </Link>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="p-2.5 rounded-xl border border-white/[0.12] bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.10] hover:border-red-600/60 text-gray-300 hover:text-white transition-all"
                    >
                      <FaGithub className="text-base" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
