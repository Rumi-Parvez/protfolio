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
      { name: 'Photoshop', icon: <FaPaintBrush />
, color: 'text-blue-400' },
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
      className="relative overflow-hidden bg-[#0b0e13] px-4 py-20 text-white sm:px-6 md:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute left-1/4 top-10 h-64 w-64 rounded-full bg-red-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-10 right-10 h-64 w-64 rounded-full bg-red-900/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-red-500">
            Technical Expertise
          </p>

          <h2 className="font-italiana text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Skills & Capabilities
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Technologies and tools I use to build responsive interfaces
            and develop modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-gray-700/80 bg-gray-700/80 sm:grid-cols-2 lg:grid-cols-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className={`group flex min-h-40 flex-col items-center justify-center bg-[#0d1117] px-4 py-7 transition-colors duration-300 hover:bg-[#141922] sm:px-5 ${
                category.wide
                  ? 'sm:col-span-2 lg:col-span-6'
                  : 'lg:col-span-3'
              }`}
            >
              <h3 className="mb-6 text-center text-base font-semibold text-gray-100 transition-colors duration-300 group-hover:text-red-400 sm:text-lg">
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
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-[#202633] text-2xl transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-[#2b3241] hover:shadow-[0_5px_20px_rgba(239,68,68,0.12)] sm:h-12 sm:w-12"
                    >
                      <span className={skill.color}>
                        {skill.icon}
                      </span>
                    </div>

                    <span className="pointer-events-none absolute -top-9 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md border border-gray-700 bg-[#171b23] px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover/icon:opacity-100">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
