"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaArrowLeft,
  FaArrowUpRightFromSquare,
  FaCheck,
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaPrint,
} from "react-icons/fa6";

import PROFILE_IMAGE from "../../assets/ycb3ja.jpg (1).jpeg";

// নিজের আসল LinkedIn profile URL এখানে বসাবে।
const LINKEDIN_URL = "https://www.linkedin.com/";

const projects = [
  {
    name: "Bazar Dor",
    subtitle: "Product Price Tracking Platform",
    description:
      "A Bangla-focused product price tracking platform with category-based browsing, product details, authentication, and responsive layouts.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "REST API",
    ],
    live: "https://bazardor-kappa.vercel.app/",
  },
  {
    name: "FitLog",
    subtitle: "Fitness Tracking Application",
    description:
      "A responsive fitness application built to practice modern React development, REST API integration, and client-side data persistence.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
    ],
    live: "https://fitlog-beta-gilt.vercel.app/",
    github:
      "https://github.com/Rumi-Parvez/Assignment-of-PH-06-From-RumiParvez",
  },
  {
    name: "Personal Portfolio",
    subtitle: "Developer Portfolio Website",
    description:
      "A personal portfolio showcasing development skills, projects, and professional information through a responsive interface.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    live: "https://rumiparvez.openyhool.com/",
  },
];

const education = [
  {
    logo: "/images/education/nsc.jpg",
    title: "Higher Secondary Certificate (HSC) — Science",
    institution: "Narsingdi Science College",
    batch: "2028",
    status: "In Progress",
    description:
      "Currently pursuing my Higher Secondary Certificate in the Science group while continuing to develop my programming and web development skills.",
  },
  {
    logo: "/images/education/ph.jpg",
    title: "AI-Driven Full Stack Web Engineering",
    institution: "Programming Hero",
    batch: "14",
    status: "In Progress",
    description:
      "Learning modern frontend and backend development, authentication, API integration, and practical full-stack project development.",
  },
  {
    logo: "/images/education/skki.png",
    title: "Secondary School Certificate (SSC)",
    institution: "Satirpara Kali Kumar Institution School & College",
    batch: "2026",
    status: "Completed",
    description:
      "Completed my Secondary School Certificate with a GPA of 4.78.",
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
    ],
  },
  {
    title: "UI & Styling",
    skills: [
      "Tailwind CSS",
      "Responsive Design",
      "Component-Based UI",
    ],
  },
  {
    title: "Backend & Data",
    skills: ["Node.js", "REST APIs", "Better Auth", "MongoDB"],
  },
  {
    title: "Tools & Deployment",
    skills: ["Git", "GitHub", "npm", "Vercel", "cPanel"],
  },
];

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="resume-section">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[11px] font-bold text-red-600 print:border print:border-red-200">
          {number}
        </span>

        <h2 className="text-base font-extrabold tracking-tight text-zinc-900 sm:text-lg">
          {title}
        </h2>

        <span className="h-px flex-1 bg-zinc-200" />
      </div>

      {children}
    </section>
  );
}

function WebLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 transition hover:text-red-600"
    >
      {children}
      <FaArrowUpRightFromSquare className="text-[9px] print:hidden" />
    </a>
  );
}

export default function ResumePage() {
  function printResume() {
    window.print();
  }

  return (
    <main className="mt-20 min-h-screen bg-[#080808] px-3 py-6 text-white sm:px-6 sm:py-10 print:mt-0 print:bg-white print:p-0">
      {/* Toolbar */}
      <div className="mx-auto mb-7 flex max-w-5xl flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3 shadow-xl backdrop-blur-2xl print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
        >
          <FaArrowLeft />
          Back to Portfolio
        </Link>

        <button
          type="button"
          onClick={printResume}
          className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition hover:bg-red-500"
        >
          <FaPrint />
          Print / Save as PDF
        </button>
      </div>

      {/* Resume document */}
      <article
        id="resume-document"
        className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-zinc-200 bg-white text-zinc-900 shadow-[0_25px_100px_rgba(0,0,0,0.5)] print:max-w-none print:rounded-none print:border-0 print:shadow-none"
      >
        {/* Header */}
        <header className="relative overflow-hidden bg-[#111113] px-6 py-8 text-white sm:px-10 sm:py-10 print:bg-[#111113] print:px-7 print:py-6">
          <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full bg-red-600/20 blur-3xl print:hidden" />

          <div className="relative flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-red-300">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                Full-Stack Web Developer
              </p>

              <h1 className="text-3xl font-black tracking-tight sm:text-5xl print:text-4xl">
                Rumi <span className="text-red-400">Parvez</span>
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-300">
                Building responsive web applications with modern technologies,
                clean code, and practical full-stack solutions.
              </p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-xs text-zinc-300 sm:text-sm">
                <a
                  href="mailto:openyhoolceo@gmail.com"
                  className="flex items-center gap-2"
                >
                  <FaEnvelope className="text-red-400" />
                  openyhoolceo@gmail.com
                </a>

                <a
                  href="https://github.com/Rumi-Parvez"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaGithub className="text-red-400" />
                  GitHub
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaLinkedin className="text-red-400" />
                  LinkedIn
                </a>

                <a
                  href="https://rumiparvez.openyhool.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaGlobe className="text-red-400" />
                  Portfolio
                </a>
              </div>
            </div>

            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-white/15 bg-white/5 p-1 sm:h-36 sm:w-36 print:h-28 print:w-28">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src={PROFILE_IMAGE}
                  alt="Rumi Parvez"
                  fill
                  priority
                  unoptimized
                  sizes="144px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-8 px-6 py-8 sm:px-10 sm:py-9 lg:grid-cols-[1fr_265px] print:grid-cols-[1fr_215px] print:gap-6 print:px-7 print:py-6">
          <div className="min-w-0 space-y-8 print:space-y-5">
            <Section number="01" title="Professional Summary">
              <p className="text-sm leading-7 text-zinc-600">
                Full-Stack Web Developer with hands-on, project-based experience
                building and deploying web applications. Skilled in React,
                Next.js, TypeScript, Tailwind CSS, authentication, and REST API
                integration. Focused on maintainable code, responsive
                interfaces, and practical problem-solving. Currently
                strengthening backend development skills with Node.js and
                TypeScript, and seeking an opportunity to contribute to a
                development team.
              </p>
            </Section>

            <Section number="02" title="Selected Projects">
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <article
                    key={project.name}
                    className="project-card rounded-xl border border-zinc-200 p-4 sm:p-5 print:break-inside-avoid print:p-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-extrabold text-zinc-900">
                          {project.name}
                        </h3>

                        <p className="mt-1 text-xs font-semibold text-red-600">
                          {project.subtitle}
                        </p>
                      </div>

                      <span className="text-xs font-bold text-zinc-400">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-zinc-600">
                      {project.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-zinc-100 px-2 py-1 text-[10px] font-medium text-zinc-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-4">
                      <WebLink href={project.live}>Live Project</WebLink>

                      {"github" in project && project.github && (
                        <WebLink href={project.github}>
                          GitHub Repository
                        </WebLink>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </Section>

            <Section number="03" title="Education & Training">
              <div className="space-y-4">
                {education.map((item) => (
                  <article
                    key={item.institution}
                    className="education-card flex gap-3 rounded-xl border border-zinc-200 p-4 print:break-inside-avoid print:p-3"
                  >
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-zinc-200 bg-white">
                      <Image
                        src={item.logo}
                        alt={`${item.institution} logo`}
                        fill
                        unoptimized
                        sizes="48px"
                        className="object-contain p-1"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h3 className="text-sm font-bold leading-5 text-zinc-900">
                          {item.title}
                        </h3>

                        <span
                          className={`rounded-full px-2 py-1 text-[10px] font-bold ${
                            item.status === "Completed"
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <p className="mt-1 text-sm font-medium text-zinc-700">
                        {item.institution}
                      </p>

                      <p className="mt-1 text-xs text-zinc-500">
                        Batch: {item.batch}
                        {item.institution.startsWith("Satirpara") &&
                          " · GPA: 4.78"}
                      </p>

                      <p className="mt-2 text-xs leading-5 text-zinc-600">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </Section>
          </div>

          {/* Sidebar */}
          <aside className="min-w-0 space-y-8 print:space-y-5">
            <Section number="04" title="Technical Skills">
              <div className="space-y-5">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="mb-2 text-xs font-extrabold uppercase tracking-wider text-zinc-800">
                      {group.title}
                    </h3>

                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 text-xs text-zinc-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section number="05" title="Core Strengths">
              <ul className="space-y-3">
                {[
                  "Responsive UI development",
                  "Clean, maintainable code",
                  "Problem-solving",
                  "API integration",
                  "Authentication workflows",
                  "Continuous learning",
                ].map((strength) => (
                  <li
                    key={strength}
                    className="flex items-start gap-2.5 text-sm leading-5 text-zinc-600"
                  >
                    <FaCheck className="mt-1 shrink-0 text-xs text-red-500" />
                    {strength}
                  </li>
                ))}
              </ul>
            </Section>

            <section className="rounded-xl border border-red-100 bg-red-50/70 p-4 print:border-zinc-200 print:bg-white">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-600">
                Currently Learning
              </p>

              <h3 className="mt-2 font-extrabold text-zinc-900">
                Backend Development
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Strengthening backend foundations with Node.js and TypeScript
                through structured learning and practical coding.
              </p>
            </section>

            <Section number="06" title="Contact">
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:openyhoolceo@gmail.com"
                  className="flex items-start gap-2.5 break-all text-zinc-600 hover:text-red-600"
                >
                  <FaEnvelope className="mt-1 shrink-0 text-red-500" />
                  openyhoolceo@gmail.com
                </a>

                <a
                  href="https://github.com/Rumi-Parvez"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-zinc-600 hover:text-red-600"
                >
                  <FaGithub className="shrink-0 text-red-500" />
                  GitHub Profile
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-zinc-600 hover:text-red-600"
                >
                  <FaLinkedin className="shrink-0 text-red-500" />
                  LinkedIn Profile
                </a>

                <a
                  href="https://rumiparvez.openyhool.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-zinc-600 hover:text-red-600"
                >
                  <FaGlobe className="shrink-0 text-red-500" />
                  Portfolio Website
                </a>
              </div>
            </Section>
          </aside>
        </div>

        {/* Footer */}
        <footer className="border-t border-zinc-200 px-6 py-4 sm:px-10 print:px-7 print:py-3">
          <p className="text-center text-xs text-zinc-500">
            Rumi Parvez · Full-Stack Web Developer · rumiparvez.openyhool.com
          </p>
        </footer>
      </article>

      <p className="mx-auto mt-5 max-w-5xl text-center text-xs text-zinc-500 print:hidden">
        Project-based experience · Continuous learning · Practical development
      </p>
    </main>
  );
}
