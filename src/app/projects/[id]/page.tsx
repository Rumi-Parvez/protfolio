import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import {
  FaArrowLeft,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaLayerGroup,
  FaLightbulb,
  FaCode,
  FaRocket,
} from 'react-icons/fa6';

import { projectsData } from '@/lib/projects';

type ProjectDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const allProjects = projectsData;

const defaultTheme = {
  accentDot: 'bg-red-500',
  badgeBg: 'bg-red-500/10',
  badgeText: 'text-red-400',
};

export function generateStaticParams() {
  return allProjects.map((project) => ({
    id: String(project.id),
  }));
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { id } = await params;

  const project = allProjects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    notFound();
  }

  const theme = {
    ...defaultTheme,
    ...('themeColor' in project &&
    typeof project.themeColor === 'object' &&
    project.themeColor !== null
      ? project.themeColor
      : {}),
  };

  const techStack =
    'techStack' in project && Array.isArray(project.techStack)
      ? project.techStack
      : Array.isArray(project.skills)
        ? project.skills
        : [];

  const hasLiveUrl =
    Boolean(project.liveUrl) &&
    !project.liveUrl.includes('example.com');

  const hasGithubUrl =
    Boolean(project.githubUrl) &&
    !project.githubUrl.includes('example.com');

  return (
    <main className="relative mt-10 min-h-screen overflow-hidden bg-black px-5 py-12 text-white md:px-8 md:py-20">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-32 left-1/4 h-80 w-80 rounded-full blur-[130px] opacity-20 ${theme.accentDot}`}
        />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Back Navigation */}
        <Link
          href="/#Projects"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-gray-300 backdrop-blur-xl transition hover:bg-white/[0.09] hover:text-white"
        >
          <FaArrowLeft className="text-xs" />
          Back to Projects
        </Link>

        {/* Main Glass Card */}
        <article className="mt-8 overflow-hidden rounded-3xl border border-white/[0.15] bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-10">
          {/* Project Header */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span
              className={`inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-xs ${theme.badgeBg} ${theme.badgeText}`}
            >
              {project.category}
            </span>

            <span className="flex items-center gap-2 text-sm text-gray-400">
              <FaLayerGroup />
              {project.year}
            </span>
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
            Project Details
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-gray-300 md:text-base md:leading-8">
            {project.description}
          </p>

          {/* Project Preview */}
          <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl border border-white/[0.14] bg-white/[0.03]">
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover object-top h-full w-full"
            />
          </div>

          {/* Technology Stack */}
          <section className="mt-12">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
                <FaCode className="text-red-400" />
              </div>

              <div>
                <h2 className="text-xl font-semibold md:text-2xl">
                  Main Technology Stack
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Technologies used in this project
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {techStack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-xl border border-white/[0.13] bg-white/[0.045] px-4 py-2.5 text-sm text-gray-200 backdrop-blur-xl transition hover:border-white/25 hover:bg-white/[0.09]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>

          {/* Development Challenges */}
          <section className="mt-12 rounded-2xl border border-white/[0.10] bg-white/[0.025] p-5 md:p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
                <FaLayerGroup className="text-amber-400" />
              </div>

              <h2 className="text-xl font-semibold md:text-2xl">
                Challenges Faced
              </h2>
            </div>

            <ul className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <li
                  key={challenge}
                  className="flex items-start gap-3 text-sm leading-7 text-gray-300 md:text-base"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-xs text-gray-400">
                    {index + 1}
                  </span>

                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Future Plans */}
          <section className="mt-6 rounded-2xl border border-white/[0.10] bg-white/[0.025] p-5 md:p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
                <FaLightbulb className="text-yellow-400" />
              </div>

              <h2 className="text-xl font-semibold md:text-2xl">
                Future Improvements
              </h2>
            </div>

            <ul className="space-y-4">
              {project.futurePlans.map((plan) => (
                <li
                  key={plan}
                  className="flex items-start gap-3 text-sm leading-7 text-gray-300 md:text-base"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                  <span>{plan}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Project Links */}
          <section className="mt-12 border-t border-white/[0.10] pt-8">
            <h2 className="text-xl font-semibold md:text-2xl">
              Explore the Project
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Explore the live application or review the source code.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {hasLiveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
                >
                  Live Project
                  <FaArrowUpRightFromSquare className="text-xs" />
                </a>
              )}

              {hasGithubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.15] bg-white/[0.05] px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/[0.12]"
                >
                  <FaGithub className="text-base" />
                  GitHub Repository
                  <FaArrowUpRightFromSquare className="text-xs" />
                </a>
              )}

              {!hasLiveUrl && !hasGithubUrl && (
                <p className="text-sm text-gray-500">
                  Project links will be available soon.
                </p>
              )}
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-2xl border border-white/[0.10] bg-gradient-to-br from-white/[0.07] to-white/[0.015] p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold">
                  Interested in my work?
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Explore more projects and see what I am building next.
                </p>
              </div>

              <Link
                href="/#Projects"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.07] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.14]"
              >
                <FaRocket />
                More Projects
              </Link>
            </div>
          </div>
        </article>

        {/* Footer Navigation */}
        <div className="mt-8 text-center">
          <Link
            href="/#Projects"
            className="text-sm text-gray-500 transition hover:text-white"
          >
            <FaArrowLeft className="mr-2 inline text-xs" />
            Return to the project showcase
          </Link>
        </div>
      </div>
    </main>
  );
}
