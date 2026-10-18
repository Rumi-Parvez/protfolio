import Link from 'next/link';

import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaScaleBalanced,
  FaCode,
  FaUserShield,
  FaGlobe,
  FaCopyright,
  FaBan,
  FaTriangleExclamation,
  FaEnvelope,
  FaHandshake,
  FaRotate,
  FaCheck,
} from 'react-icons/fa6';

const termsSections = [
  {
    id: 'acceptance',
    number: '01',
    title: 'Acceptance of Terms',
    eyebrow: 'Getting started',
    icon: FaHandshake,
    paragraphs: [
      'Welcome to my personal portfolio. By accessing or using this website, you agree to these Terms & Conditions. If you do not agree with these terms, please discontinue using the website.',
      'These terms apply to visitors who browse my portfolio, explore my projects, or use the links and features provided here.',
    ],
  },
  {
    id: 'portfolio',
    number: '02',
    title: 'About This Portfolio',
    eyebrow: 'Purpose of this website',
    icon: FaCode,
    paragraphs: [
      'This website belongs to Rumi Parvez, a Full-Stack Web Developer. It presents information about my background, skills, personal projects, and development work.',
      'Portfolio content is provided for general informational and demonstration purposes. Features, technologies, and project details may change as my work evolves.',
    ],
  },
  {
    id: 'intellectual-property',
    number: '03',
    title: 'Intellectual Property',
    eyebrow: 'Ownership & attribution',
    icon: FaCopyright,
    paragraphs: [
      'Unless otherwise stated, original content created for this portfolio—including its written descriptions, visual design, and original graphics—is owned by me or used with appropriate permission.',
      'Project names, logos, libraries, frameworks, and other third-party materials remain the property of their respective owners and may be subject to separate licenses.',
      'You may link to this portfolio and share its public pages. Please do not reproduce or redistribute original content as your own without permission or an applicable legal right.',
    ],
  },
  {
    id: 'acceptable-use',
    number: '04',
    title: 'Acceptable Use',
    eyebrow: 'Using the website responsibly',
    icon: FaUserShield,
    paragraphs: [
      'You agree to use this website lawfully and in a way that does not interfere with its operation or other visitors’ ability to access it.',
      'You must not attempt to gain unauthorized access to the website, disrupt its services, introduce malicious code, or misuse any contact form or available feature.',
      'Nothing in these terms restricts activities that are legally permitted under applicable law.',
    ],
  },
  {
    id: 'external-links',
    number: '05',
    title: 'External Links & Services',
    eyebrow: 'Third-party destinations',
    icon: FaGlobe,
    paragraphs: [
      'This portfolio may contain links to external platforms, including GitHub, LinkedIn, and live project deployments.',
      'External websites are operated independently and may have their own terms, privacy policies, and availability. I do not control or guarantee the content, security, or practices of those websites.',
      'Visiting an external website is your choice, and you should review its applicable terms before using its services.',
    ],
  },
  {
    id: 'accuracy',
    number: '06',
    title: 'Accuracy & Availability',
    eyebrow: 'Keeping expectations clear',
    icon: FaTriangleExclamation,
    paragraphs: [
      'I aim to keep portfolio information useful and accurate, but I cannot guarantee that every page, project description, link, or technical detail will always be complete, current, or error-free.',
      'Website features may be updated, temporarily unavailable, or removed as needed for maintenance and development.',
      'Project demonstrations are provided for evaluation and learning purposes unless a project explicitly states otherwise.',
    ],
  },
  {
    id: 'liability',
    number: '07',
    title: 'Limitation of Liability',
    eyebrow: 'Important information',
    icon: FaScaleBalanced,
    paragraphs: [
      'To the extent permitted by applicable law, this portfolio is provided on an “as is” and “as available” basis, without guarantees that it will always be uninterrupted, error-free, or suitable for a particular purpose.',
      'To the extent permitted by law, I am not responsible for losses arising from reliance on website content, temporary unavailability, or third-party websites linked from this portfolio.',
      'Nothing in these terms excludes or limits any liability that cannot legally be excluded or limited.',
    ],
  },
  {
    id: 'contact',
    number: '08',
    title: 'Contact & Inquiries',
    eyebrow: 'Let’s communicate',
    icon: FaEnvelope,
    paragraphs: [
      'If you have questions about these terms, portfolio content, project demonstrations, or permission to reuse original material, you can contact me through the contact section of my portfolio.',
      'Please provide enough context for me to understand your inquiry. Do not include passwords, financial details, or other sensitive information in an ordinary message.',
    ],
  },
  {
    id: 'changes',
    number: '09',
    title: 'Changes to These Terms',
    eyebrow: 'Future updates',
    icon: FaRotate,
    paragraphs: [
      'These Terms & Conditions may be updated when the website, its features, or relevant requirements change.',
      'The latest version will be published on this page with an updated revision date. Continued use of the website after an update is subject to applicable law and the revised terms.',
    ],
  },
];

const glassPanel =
  'border border-white/[0.10] bg-white/[0.035] shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-2xl';

export default function TermsPage() {
  return (
    <main
      id="top"
      className="relative isolate min-h-screen overflow-hidden bg-[#070708] text-white selection:bg-red-500/30 selection:text-white"
    >
      {/* Ambient Liquid Glass Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-52 left-[8%] h-[34rem] w-[34rem] rounded-full bg-red-600/[0.13] blur-[150px]" />
        <div className="absolute right-[-12rem] top-[35%] h-[32rem] w-[32rem] rounded-full bg-rose-700/[0.09] blur-[150px]" />
        <div className="absolute bottom-[-12rem] left-[25%] h-[28rem] w-[28rem] rounded-full bg-red-950/30 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),transparent_24%,rgba(255,0,0,0.018)_75%,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_20%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-4 py-6 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        {/* Navigation */}
        <nav className="mb-8 flex items-center justify-between gap-4 sm:mb-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2.5 text-sm text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl transition-all duration-300 hover:border-red-400/30 hover:bg-white/[0.08] hover:text-white"
          >
            <FaArrowLeft className="text-xs transition-transform duration-300 group-hover:-translate-x-1" />
            Back to home
          </Link>

          <Link
            href="/"
            aria-label="Rumi Parvez home"
            className="hidden items-center gap-2 text-sm font-semibold tracking-tight sm:inline-flex"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-red-400/20 bg-red-500/10 text-red-400">
              <FaCode />
            </span>
            <span>
              RUMI<span className="text-red-400">.</span>
            </span>
          </Link>
        </nav>

        {/* Hero */}
        <header className="relative mb-6 overflow-hidden rounded-[2rem] border border-white/[0.13] bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_35px_100px_rgba(0,0,0,0.35)] backdrop-blur-3xl sm:mb-8 sm:rounded-[2.5rem]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.075] via-transparent to-red-500/[0.045]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-36 h-[28rem] w-[28rem] rounded-full bg-red-500/[0.11] blur-[110px]"
          />

          <div className="relative grid items-center gap-10 p-6 sm:p-10 md:p-14 lg:grid-cols-[1fr_280px] lg:gap-14 lg:p-16">
            <div>
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-red-400/20 bg-red-500/[0.08] px-4 py-2.5 backdrop-blur-xl">
                <FaScaleBalanced className="text-sm text-red-400" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-red-200 sm:text-xs">
                  Terms & conditions
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
                Clear terms.
                <span className="mt-2 block bg-gradient-to-r from-red-400 via-rose-300 to-red-500 bg-clip-text text-transparent">
                  Better trust.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                A straightforward guide to using my portfolio, exploring my
                projects, respecting original work, and understanding the
                conditions that apply to this website.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#acceptance"
                  className="group inline-flex items-center gap-3 rounded-xl border border-red-400/25 bg-red-500/10 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-red-300/50 hover:bg-red-500/15"
                >
                  Read the terms
                  <FaArrowRight className="text-xs text-red-300 transition-transform group-hover:translate-x-1" />
                </a>

                <div className="inline-flex items-center gap-2 rounded-xl border border-white/[0.09] bg-black/20 px-4 py-3.5 text-sm text-white/55 backdrop-blur-xl">
                  <FaCheck className="text-red-400" />
                  Simple & transparent
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/[0.09] pt-6 text-xs text-white/40">
                <span>Personal developer portfolio</span>
                <span className="hidden h-1 w-1 rounded-full bg-red-400/70 sm:block" />
                <span>Last updated: October 18, 2026</span>
              </div>
            </div>

            {/* Decorative glass card */}
            <div className="relative mx-auto w-full max-w-[280px] lg:mx-0">
              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-[2.5rem] bg-red-500/[0.08] blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.14] bg-black/25 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_25px_70px_rgba(0,0,0,0.25)] backdrop-blur-3xl">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                    The essentials
                  </span>
                  <FaScaleBalanced className="text-red-300" />
                </div>

                <div className="my-8 flex justify-center">
                  <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-red-400/20 bg-gradient-to-br from-red-500/[0.12] via-white/[0.025] to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_60px_rgba(239,68,68,0.08)]">
                    <div className="absolute inset-3 rounded-full border border-white/[0.07]" />
                    <div className="absolute inset-6 rounded-full border border-red-400/[0.12]" />
                    <FaScaleBalanced className="text-4xl text-red-300" />
                  </div>
                </div>

                <h2 className="text-center text-lg font-semibold">
                  Fair use. Clear rules.
                </h2>
                <p className="mt-2 text-center text-xs leading-6 text-white/45">
                  Respect for people, projects, and original work.
                </p>

                <div className="mt-6 border-t border-white/[0.09] pt-4">
                  <div className="flex items-center gap-3 text-xs text-white/55">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-red-300">
                      <FaCopyright />
                    </span>
                    Respect intellectual property
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className={`mb-8 rounded-[1.75rem] p-6 sm:p-8 ${glassPanel}`}>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-red-400">
            Before you explore
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            The essentials, at a glance.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/45">
            A few principles that help keep this portfolio useful, respectful,
            and accessible.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: FaCode,
                title: 'Explore my work',
                description:
                  'Discover portfolio projects and their publicly shared details.',
              },
              {
                icon: FaCopyright,
                title: 'Respect original work',
                description:
                  'Do not claim original portfolio content as your own.',
              },
              {
                icon: FaUserShield,
                title: 'Use responsibly',
                description:
                  'Use this website lawfully and avoid disrupting its operation.',
              },
            ].map((item) => {
              const ItemIcon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/[0.08] bg-black/20 p-5 transition-all duration-300 hover:border-red-400/20 hover:bg-white/[0.045]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-400/15 bg-red-500/[0.08] text-red-300 transition-transform duration-300 group-hover:scale-105">
                    <ItemIcon />
                  </span>
                  <h3 className="mt-5 text-sm font-semibold text-white/90">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-white/45">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contents + Terms */}
        <div className="grid items-start gap-6 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-8">
          <aside className="lg:sticky lg:top-8">
            <nav
              aria-label="Terms and conditions navigation"
              className={`overflow-hidden rounded-[1.75rem] p-5 sm:p-6 ${glassPanel}`}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-red-400">
                Navigation
              </p>
              <h2 className="mt-2 text-lg font-semibold">On this page</h2>

              <div className="mt-5 grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-1">
                {termsSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex min-w-0 items-center gap-3 rounded-xl border border-transparent px-3 py-3 transition-all duration-300 hover:border-white/[0.08] hover:bg-white/[0.045]"
                  >
                    <span className="font-mono text-[10px] text-red-400/80">
                      {section.number}
                    </span>
                    <span className="min-w-0 flex-1 text-xs leading-5 text-white/50 transition-colors group-hover:text-white/90">
                      {section.title}
                    </span>
                    <FaArrowUpRightFromSquare className="shrink-0 text-[9px] text-white/20 transition-colors group-hover:text-red-300" />
                  </a>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-red-400/[0.13] bg-red-500/[0.045] p-4">
                <FaEnvelope className="text-sm text-red-300" />
                <p className="mt-3 text-xs font-semibold text-white/80">
                  Need clarification?
                </p>
                <p className="mt-1 text-xs leading-5 text-white/40">
                  Send me a question about these terms.
                </p>
                <Link
                  href="/#Contact"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-red-300 transition-colors hover:text-red-200"
                >
                  Contact me <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </nav>
          </aside>

          <div className="min-w-0 space-y-5">
            {termsSections.map((section) => {
              const SectionIcon = section.icon;

              return (
                <section
                  key={section.id}
                  id={section.id}
                  className={`group relative scroll-mt-8 overflow-hidden rounded-[1.75rem] p-6 transition-all duration-500 hover:border-white/[0.17] sm:p-8 lg:p-9 ${glassPanel}`}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.025] via-transparent to-red-500/[0.025] opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.13] to-transparent"
                  />

                  <div className="relative">
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-red-400/[0.18] bg-gradient-to-br from-red-500/[0.12] to-red-950/[0.08] text-lg text-red-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 group-hover:border-red-400/30 sm:h-14 sm:w-14">
                        <SectionIcon />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="font-mono text-[10px] font-medium tracking-[0.18em] text-red-400">
                            {section.number}
                          </span>
                          <span className="h-px w-5 bg-white/15" />
                          <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/35">
                            {section.eyebrow}
                          </span>
                        </div>
                        <h2 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
                          {section.title}
                        </h2>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4 border-l border-white/[0.08] pl-4 sm:ml-[4.25rem] sm:pl-5">
                      {section.paragraphs.map((paragraph, index) => (
                        <p
                          key={`${section.id}-${index}`}
                          className="text-sm leading-7 text-white/55 sm:text-[15px] sm:leading-8"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4">
                      <span className="text-[10px] uppercase tracking-[0.16em] text-white/25">
                        Terms & conditions
                      </span>
                      <a
                        href="#top"
                        aria-label="Back to top"
                        className="inline-flex items-center gap-2 text-[10px] text-white/35 transition-colors hover:text-red-300"
                      >
                        Back to top <FaArrowUpRightFromSquare />
                      </a>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>

        {/* Contact CTA */}
        <section className="relative mt-8 overflow-hidden rounded-[2rem] border border-red-400/[0.19] bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.11),0_25px_80px_rgba(0,0,0,0.28)] backdrop-blur-3xl sm:rounded-[2.5rem] sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-500/[0.09] via-transparent to-white/[0.015]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-red-500/[0.10] blur-[100px]"
          />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-red-400/20 bg-red-500/[0.09] text-lg text-red-300">
                <FaEnvelope />
              </div>
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-red-300">
                Get in touch
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                Questions about these terms?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                If anything needs clarification, reach out through my portfolio
                contact section.
              </p>
            </div>

            <Link
              href="/#Contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl border border-white/[0.13] bg-white/[0.07] px-6 py-4 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl transition-all duration-300 hover:border-red-400/40 hover:bg-red-500/10"
            >
              Contact me
              <FaArrowUpRightFromSquare className="text-xs text-red-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t border-white/[0.08] py-7 sm:mt-12 sm:py-9">
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <Link href="/" className="group inline-flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-red-400/20 bg-red-500/[0.08] text-sm text-red-300">
                <FaCode />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white/80 transition-colors group-hover:text-white">
                  Rumi Parvez
                </span>
                <span className="mt-1 block text-xs text-white/35">
                  Full-Stack Web Developer
                </span>
              </span>
            </Link>

            <div className="text-xs leading-6 text-white/35">
              <p>© {new Date().getFullYear()} Rumi Parvez.</p>
              <p>Built with care, clarity, and respect for original work.</p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs text-white/45 transition-colors hover:text-red-300"
            >
              Back to portfolio <FaArrowRight />
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
