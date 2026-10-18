'use client';

import React from 'react';
import { FaPaintBrush } from 'react-icons/fa';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaDocker,
  FaFigma,
  FaLinux,
  FaWindows,
  FaNpm,
  FaRust,
  FaRobot,
  FaDatabase,
  FaCode,
  FaPalette,
} from 'react-icons/fa6';

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiSupabase,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiClaude,
  SiGoogleanalytics,
  SiVercel,
  SiNetlify,
  SiWordpress,
} from 'react-icons/si';

import { VscCode } from 'react-icons/vsc';

type Skill = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
  wide?: boolean;
};

const categories: SkillCategory[] = [
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
      { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
      { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-400' },
      { name: 'React.js', icon: <FaReact />, color: 'text-cyan-400' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400' },
    ],
  },
  {
    title: 'Programming & APIs',
    skills: [
      { name: 'Rust', icon: <FaRust />, color: 'text-orange-500' },
      { name: 'REST APIs', icon: <FaCode />, color: 'text-white' },
      { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-400' },
      { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
      { name: 'Express.js', icon: <SiExpress />, color: 'text-white' },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
      { name: 'Express.js', icon: <SiExpress />, color: 'text-white' },
      { name: 'Firebase', icon: <SiFirebase />, color: 'text-yellow-400' },
      { name: 'Supabase', icon: <SiSupabase />, color: 'text-emerald-400' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-sky-400' },
      { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
      { name: 'Redis', icon: <SiRedis />, color: 'text-red-500' },
      { name: 'Database Concepts', icon: <FaDatabase />, color: 'text-blue-400' },
    ],
  },
  {
    title: 'UI/UX & Design',
    skills: [
      { name: 'Figma', icon: <FaFigma />, color: 'text-pink-400' },
      { name: 'Photoshop', icon: <FaPaintBrush />, color: 'text-blue-400' },
      { name: 'Canva', icon: <FaPalette />, color: 'text-cyan-400' },
    ],
  },
  {
    title: 'Development Tools',
    wide: true,
    skills: [
      { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-500' },
      { name: 'GitHub', icon: <FaGithub />, color: 'text-white' },
      { name: 'GitLab', icon: <FaGitlab />, color: 'text-orange-500' },
      { name: 'VS Code', icon: <VscCode />, color: 'text-blue-400' },
      { name: 'npm', icon: <FaNpm />, color: 'text-red-500' },
      { name: 'Vercel', icon: <SiVercel />, color: 'text-white' },
      { name: 'Netlify', icon: <SiNetlify />, color: 'text-teal-400' },
      { name: 'Docker', icon: <FaDocker />, color: 'text-blue-400' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', icon: <FaDocker />, color: 'text-blue-400' },
      { name: 'Linux', icon: <FaLinux />, color: 'text-yellow-300' },
      { name: 'Windows', icon: <FaWindows />, color: 'text-sky-400' },
    ],
  },
  {
    title: 'Analytics & Web',
    skills: [
      { name: 'Google Analytics', icon: <SiGoogleanalytics />, color: 'text-orange-400' },
      { name: 'WordPress', icon: <SiWordpress />, color: 'text-sky-400' },
    ],
  },
  {
    title: 'AI & Productivity',
    wide: true,
    skills: [
      { name: 'AI Tools', icon: <FaRobot />, color: 'text-white' },
      { name: 'Claude', icon: <SiClaude />, color: 'text-orange-300' },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="Skills"
      className="relative isolate overflow-hidden bg-[#08090d] px-4 py-20 text-white sm:px-6 md:px-8 lg:px-10"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-red-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-rose-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-950/20 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-red-400">
            Technical Expertise
          </p>

          <h2 className="font-italiana text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Skills &amp; Capabilities
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Technologies and tools I use to build responsive interfaces
            and develop modern web applications.
          </p>
        </div>

        {/* Liquid glass category grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className={`group relative isolate flex min-h-44 flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.10] bg-white/[0.035] px-4 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-red-400/30 hover:bg-white/[0.065] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_12px_40px_rgba(239,68,68,0.10)] sm:px-5 ${
                category.wide
                  ? 'sm:col-span-2 lg:col-span-6'
                  : 'lg:col-span-3'
              }`}
            >
              {/* Glass reflection */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.07] via-transparent to-red-500/[0.035] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Subtle liquid glow */}
              <div className="pointer-events-none absolute -right-10 -top-12 -z-10 h-32 w-32 rounded-full bg-red-500/[0.08] blur-3xl transition-all duration-500 group-hover:bg-red-500/[0.18]" />

              {/* Top glass highlight */}
              <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              <h3 className="mb-6 text-center text-base font-semibold text-gray-100 transition-colors duration-300 group-hover:text-red-300 sm:text-lg">
                {category.title}
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={`${category.title}-${skill.name}`}
                    className="group/icon relative"
                  >
                    <div
                      title={skill.name}
                      aria-label={skill.name}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.10] bg-white/[0.055] text-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-red-400/50 hover:bg-red-500/[0.10] hover:shadow-[0_0_24px_rgba(239,68,68,0.15)] sm:h-12 sm:w-12"
                    >
                      <span className={skill.color}>{skill.icon}</span>
                    </div>

                    <span className="pointer-events-none absolute -top-9 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-[#15151b]/90 px-2.5 py-1.5 text-xs text-white opacity-0 shadow-xl backdrop-blur-xl transition-opacity duration-200 group-hover/icon:opacity-100">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom glass reflection */}
              <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-red-400/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
