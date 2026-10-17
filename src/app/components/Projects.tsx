'use client';

import React from 'react';
import Image from 'next/image';
import { FaArrowUpRightFromSquare, FaGithub, FaLayerGroup, FaCalendar } from 'react-icons/fa6';

export interface Metric {
  value: string;
  label: string;
}

export interface Project {
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
}

// Hard-coded projects data for IDs 5 to 10
const projectsData: Project[] = [
  {
    id: 5,
    year: `2026`,
    category: `Personal Portfolio`,
    title: `Developer Portfolio — Digital Identity`,
    description: `A personal portfolio showcasing development projects, technical interests, and contact information.`,
    metrics: [
      {
        value: `Responsive`,
        label: `Adaptable layouts across screen sizes`
      },
      {
        value: `Custom UI`,
        label: `A distinctive visual identity`
      }
    ],
    skills: [
      `Next.js`,
      `Tailwind CSS`,
      `TypeScript`,
      `CSS`,
      `Responsive Design`
    ],
    image: `/images/afargqa/protfolio.png`,
    liveUrl: ``,
    githubUrl: ``
  },
  {
    id: 6,
    year: `2026`,
    category: `E-Commerce`,
    title: `ShopSphere — Modern Online Store`,
    description: `A sample online store concept featuring product discovery, category browsing, and product detail pages.`,
    metrics: [
      {
        value: `Catalog`,
        label: `Organized product browsing`
      },
      {
        value: `Product Pages`,
        label: `Detailed product information`
      }
    ],
    skills: [
      `Next.js`,
      `React`,
      `TypeScript`,
      `Tailwind CSS`,
      `REST API`
    ],
    image: `/images/projects/shopsphere.png`,
    liveUrl: ``,
    githubUrl: ``
  },
  {
    id: 7,
    year: `2026`,
    category: `Education Technology`,
    title: `LearnFlow — Online Learning Platform`,
    description: `A sample learning platform concept for browsing courses, organizing lessons, and tracking learning progress.`,
    metrics: [
      {
        value: `Courses`,
        label: `Structured learning content`
      },
      {
        value: `Progress`,
        label: `Learning journey overview`
      }
    ],
    skills: [
      `Next.js`,
      `TypeScript`,
      `Tailwind CSS`,
      `React`,
      `UI Design`
    ],
    image: `/images/projects/learnflow.png`,
    liveUrl: ``,
    githubUrl: ``
  },
  {
    id: 8,
    year: `2026`,
    category: `Task Management`,
    title: `Taskly — Personal Task Organizer`,
    description: `A sample productivity app concept for organizing tasks, priorities, and project workflows.`,
    metrics: [
      {
        value: `Task Boards`,
        label: `Organized task management`
      },
      {
        value: `Workflow`,
        label: `Clear task status tracking`
      }
    ],
    skills: [
      `React`,
      `Next.js`,
      `TypeScript`,
      `Tailwind CSS`,
      `State Management`
    ],
    image: `/images/projects/taskly.png`,
    liveUrl: ``,
    githubUrl: ``
  },
  
];

const Projects: React.FC = () => {
  return (
    <section className={`text-white py-24 px-6 font-sans select-none`}>
      <div className={`max-w-6xl mx-auto`}>
        
        {/* Section Header */}
        <div className={`mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6`}>
          <div>
            <span className={`text-xs tracking-[0.3em] text-red-500 uppercase font-sans block mb-3`}>
              {`OTHER PROJECTS`}
            </span>
            <h2 className={`text-4xl md:text-6xl font-italiana tracking-tight text-white leading-tight`}>
              {`More Crafted Applications and`}  {`Development Tools`}
            </h2>
          </div>
          <p className={`text-gray-400 font-libre text-sm md:text-base max-w-md`}>
            {`A broader showcase of projects exploring productivity systems, dashboards, developer tools, and e-commerce platforms hard-coded cleanly.`}
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8`}>
          {projectsData.map((project) => {
            return (
              <a
                key={project.id}
                href={project.liveUrl || project.githubUrl || `#`}
                target={`_blank`}
                rel={`noopener noreferrer`}
                className={`group relative overflow-hidden rounded-3xl border border-gray-800/80 bg-black/40 backdrop-blur-xl p-6 md:p-8 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:border-red-600/60 hover:shadow-[0_10px_35px_rgba(239,68,68,0.15)] cursor-pointer`}
              >
                {/* Card Top Section: Image Banner & Metadata */}
                <div>
                  <div className={`relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-800/80 bg-gray-950 mb-6 group-hover:border-red-900/50 transition-colors`}>
                    {/* Image Display */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={500}
                      className={`object-cover object-top transition-transform duration-700 group-hover:scale-105 h-full w-full`}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />

                    {/* Fallback Graphic Pattern */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-red-950/30 flex items-center justify-center -z-10`}>
                      <FaLayerGroup className={`text-5xl text-gray-800 group-hover:text-red-500/40 transition-colors duration-500`} />
                    </div>

                    {/* Badges */}
                    <div className={`absolute top-4 left-4 flex items-center gap-2 z-10`}>
                      <span className={`px-3 py-1 rounded-full text-xs font-mono bg-black/80 border border-gray-700/80 text-red-400 backdrop-blur-md`}>
                        {project.category}
                      </span>
                    </div>

                    <div className={`absolute top-4 right-4 z-10`}>
                      <span className={`px-3 py-1 rounded-full text-xs font-libre bg-black/80 border border-gray-700/80 text-gray-300 backdrop-blur-md flex items-center gap-1.5`}>
                        <FaCalendar className={`text-red-500 text-[10px]`} />
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className={`text-2xl font-fjalla text-white mb-3 group-hover:text-red-400 transition-colors duration-300 leading-snug flex items-center justify-between`}>
                    <span>{project.title}</span>
                    <FaArrowUpRightFromSquare className={`text-sm opacity-0 group-hover:opacity-100 transition-opacity text-red-500 shrink-0`} />
                  </h3>
                  <p className={`text-sm text-gray-400 font-libre leading-relaxed mb-6`}>
                    {project.description}
                  </p>

                  {/* Key Metrics */}
                  <div className={`grid grid-cols-2 gap-3 mb-6 p-4 rounded-2xl border border-gray-800/60 bg-black/30`}>
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className={`flex flex-col`}>
                        <span className={`text-sm  text-white font-sans flex items-center gap-1`}>
                          {metric.value}
                        </span>
                        <span className={`text-xs text-gray-500 font-light leading-snug mt-0.5`}>
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Section: Skills & Action Links */}
                <div>
                  {/* Tech Stack Skill Badges */}
                  <div className={`flex flex-wrap gap-2 mb-6`}>
                    {project.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-lg text-xs font-libre bg-gray-900/80 border border-gray-800 text-gray-300 group-hover:border-gray-700 transition-colors`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className={`flex items-center gap-3 pt-4 border-t border-gray-800/80`} onClick={(e) => e.stopPropagation()}>
                    <span className={`px-4 py-2.5 rounded-xl bg-red-700 group-hover:bg-red-800 text-white text-xs font-medium flex items-center gap-2 transition-colors shadow-lg`}>
                      <span>{`View Project`}</span>
                      <FaArrowUpRightFromSquare className={`text-[11px]`} />
                    </span>

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target={`_blank`}
                        rel={`noopener noreferrer`}
                        className={`p-2.5 rounded-xl border border-gray-800 bg-black/40 hover:bg-black/80 hover:border-red-600/60 text-gray-300 hover:text-white transition-all`}
                        title={`View Source Code on GitHub`}
                      >
                        <FaGithub className={`text-base`} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;