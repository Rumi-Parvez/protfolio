import Link from 'next/link';

import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaShieldHalved,
  FaUserShield,
  FaDatabase,
  FaCookieBite,
  FaLink,
  FaEnvelope,
  FaLock,
  FaGlobe,
  FaCode,
  FaCheck,
  FaFingerprint,
} from 'react-icons/fa6';

const privacySections = [
  {
    id: 'introduction',
    number: '01',
    title: 'Introduction',
    eyebrow: 'A little transparency',
    icon: FaShieldHalved,
    content: [
      'Welcome to my personal portfolio. I am Rumi Parvez, a Full-Stack Web Developer passionate about building responsive web applications, exploring new technologies, and solving real-world problems through code.',
      'This Privacy Policy explains how information may be handled when you visit my portfolio, explore my projects, or contact me. My goal is to be transparent and treat your personal information responsibly.',
    ],
  },
  {
    id: 'information',
    number: '02',
    title: 'Information I May Receive',
    eyebrow: 'What information is involved?',
    icon: FaDatabase,
    content: [
      'You do not need to create an account to browse this portfolio.',
      'If you contact me through an available contact form or email, I may receive information you choose to share, such as your name, email address, and message.',
      'My hosting provider or other enabled services may process technical information required to deliver and maintain the website. The details depend on the services actually configured.',
    ],
  },
  {
    id: 'usage',
    number: '03',
    title: 'How Information Is Used',
    eyebrow: 'Purpose and use',
    icon: FaUserShield,
    content: [
      'Information you provide may be used to answer your questions, discuss projects, respond to collaboration opportunities, or follow up on your message.',
      'Technical information, where available, may help maintain website functionality, troubleshoot errors, and improve reliability.',
      'I do not intend to sell visitors’ personal information. Actual processing depends on the services and features enabled on this website.',
    ],
  },
  {
    id: 'cookies',
    number: '04',
    title: 'Cookies & Similar Technologies',
    eyebrow: 'Your browsing experience',
    icon: FaCookieBite,
    content: [
      'The website or its service providers may use cookies, browser storage, or similar technologies where required for functionality or service delivery.',
      'If analytics, embedded content, or additional third-party services are introduced, this policy should be updated to explain the relevant data practices.',
      'You can manage cookies through your browser settings. Disabling some technologies may affect features that rely on them.',
    ],
  },
  {
    id: 'external-links',
    number: '05',
    title: 'External Websites & Projects',
    eyebrow: 'Beyond this portfolio',
    icon: FaLink,
    content: [
      'My portfolio may link to external platforms such as GitHub, LinkedIn, and independently deployed projects.',
      'When you visit an external website, its own privacy policy, terms, and security practices apply. I do not control how those services collect or use information.',
      'Please review the relevant policies before sharing personal information with third-party services.',
    ],
  },
  {
    id: 'security',
    number: '06',
    title: 'Security & Data Retention',
    eyebrow: 'Responsible handling',
    icon: FaLock,
    content: [
      'I aim to handle information responsibly and use reasonable safeguards appropriate to the website and the services involved.',
      'No website, online service, or method of electronic transmission can be guaranteed to be completely secure.',
      'Messages sent to me may remain in my email or communication history for as long as reasonably necessary to respond, maintain relevant correspondence, or meet applicable obligations.',
    ],
  },
  {
    id: 'your-choices',
    number: '07',
    title: 'Your Choices & Privacy Rights',
    eyebrow: 'You are in control',
    icon: FaGlobe,
    content: [
      'You decide whether to contact me and what information to include. Please avoid sending passwords, financial details, or other sensitive information through ordinary contact channels.',
      'Depending on your location and applicable law, you may have rights to request access to, correction of, or deletion of personal information you have provided.',
      'You can submit a privacy-related request through my contact section. I may need to verify your request before responding.',
    ],
  },
  {
    id: 'updates',
    number: '08',
    title: 'Policy Updates',
    eyebrow: 'Keeping this current',
    icon: FaCode,
    content: [
      'This Privacy Policy may change as the portfolio, its features, or applicable requirements evolve.',
      'Updates will be published on this page with a revised “Last updated” date. Please revisit this page periodically to stay informed.',
    ],
  },
];

const glassPanel =
  'border border-white/[0.10] bg-white/[0.035] shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-2xl';

export default function PrivacyPolicyPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#070708] text-white selection:bg-red-500/30 selection:text-white">
      {/* Ambient liquid-glass background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-52 left-[10%] h-[34rem] w-[34rem] rounded-full bg-red-600/[0.13] blur-[150px]" />
        <div className="absolute right-[-12rem] top-[35%] h-[32rem] w-[32rem] rounded-full bg-rose-700/[0.09] blur-[150px]" />
        <div className="absolute bottom-[-12rem] left-[25%] h-[28rem] w-[28rem] rounded-full bg-red-950/30 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),transparent_24%,rgba(255,0,0,0.018)_75%,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_20%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-4 py-6 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        {/* Top navigation */}
        <nav className="mb-8 flex items-center justify-between gap-4 sm:mb-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2.5 text-sm text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl transition-all duration-300 hover:border-red-400/30 hover:bg-white/[0.08] hover:text-white"
          >
            <FaArrowLeft className="text-xs transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to home</span>
          </Link>

          <Link
            href="/"
            aria-label="Rumi Parvez home"
            className="hidden items-center gap-2 text-sm font-semibold tracking-tight sm:inline-flex"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-red-400/20 bg-red-500/10 text-red-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
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
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 left-[25%] h-72 w-72 rounded-full bg-red-900/[0.12] blur-[100px]"
          />

          <div className="relative grid items-center gap-10 p-6 sm:p-10 md:p-14 lg:grid-cols-[1fr_300px] lg:gap-14 lg:p-16">
            <div>
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-red-400/20 bg-red-500/[0.08] px-4 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
                <FaShieldHalved className="text-sm text-red-400" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-red-200 sm:text-xs">
                  Privacy & transparency
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
                Your privacy.
                <span className="mt-2 block bg-gradient-to-r from-red-400 via-rose-300 to-red-500 bg-clip-text text-transparent">
                  Your trust.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                A clear overview of how information may be handled when you
                explore my portfolio, discover my work, or get in touch.
                Transparency matters just as much as the code I write.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#introduction"
                  className="group inline-flex items-center gap-3 rounded-xl border border-red-400/25 bg-red-500/10 px-5 py-3.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl transition-all duration-300 hover:border-red-300/50 hover:bg-red-500/15"
                >
                  Explore the policy
                  <FaArrowRight className="text-xs text-red-300 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <div className="inline-flex items-center gap-2 rounded-xl border border-white/[0.09] bg-black/20 px-4 py-3.5 text-sm text-white/55 backdrop-blur-xl">
                  <FaLock className="text-red-400" />
                  Clear & transparent
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/[0.09] pt-6 text-xs text-white/40">
                <span>Personal developer portfolio</span>
                <span className="hidden h-1 w-1 rounded-full bg-red-400/70 sm:block" />
                <span>Last updated: October 18, 2026</span>
              </div>
            </div>

            {/* Decorative privacy card */}
            <div className="relative mx-auto w-full max-w-[300px] lg:mx-0">
              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-[2.5rem] bg-red-500/[0.08] blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.14] bg-black/25 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_25px_70px_rgba(0,0,0,0.25)] backdrop-blur-3xl">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                    Privacy overview
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-red-400/20 bg-red-500/10 text-red-300">
                    <FaFingerprint />
                  </span>
                </div>

                <div className="my-8 flex justify-center">
                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-red-400/20 bg-gradient-to-br from-red-500/[0.12] via-white/[0.025] to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_60px_rgba(239,68,68,0.08)]">
                    <div className="absolute inset-3 rounded-full border border-white/[0.07]" />
                    <div className="absolute inset-6 rounded-full border border-red-400/[0.12]" />
                    <FaShieldHalved className="text-5xl text-red-300 drop-shadow-[0_0_20px_rgba(248,113,113,0.3)]" />
                    <span className="absolute right-3 top-4 flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-[#171113] text-xs text-red-300">
                      <FaCheck />
                    </span>
                  </div>
                </div>

                <h2 className="text-center text-lg font-semibold tracking-tight">
                  Privacy matters.
                </h2>
                <p className="mx-auto mt-2 max-w-[220px] text-center text-xs leading-6 text-white/45">
                  Understanding what you share and how it may be used.
                </p>

                <div className="mt-6 border-t border-white/[0.09] pt-4">
                  <div className="flex items-center gap-3 text-xs text-white/55">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-red-300">
                      <FaUserShield />
                    </span>
                    Respect for your choices
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Quick summary */}
        <section className={`mb-8 rounded-[1.75rem] p-6 sm:p-8 ${glassPanel}`}>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-red-400">
                The essentials
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Privacy, at a glance.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/45">
                The important things to understand before exploring the details.
              </p>
            </div>
            <span className="hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.09] bg-white/[0.035] text-xl text-red-300 sm:flex">
              <FaFingerprint />
            </span>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: FaDatabase,
                title: 'Information you share',
                description:
                  'Details you voluntarily provide when contacting me.',
              },
              {
                icon: FaLock,
                title: 'Responsible handling',
                description:
                  'Reasonable safeguards and clear communication about information.',
              },
              {
                icon: FaLink,
                title: 'External services',
                description:
                  'Third-party websites operate under their own privacy policies.',
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

        {/* Main layout: sticky contents + policy sections */}
        <div className="grid items-start gap-6 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-8">
          <aside className="lg:sticky lg:top-8">
            <nav
              aria-label="Privacy policy table of contents"
              className={`overflow-hidden rounded-[1.75rem] p-5 sm:p-6 ${glassPanel}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-red-400">
                    Navigation
                  </p>
                  <h2 className="mt-2 text-lg font-semibold">
                    On this page
                  </h2>
                </div>
                <span className="rounded-lg border border-white/[0.09] bg-white/[0.035] px-2.5 py-1.5 font-mono text-xs text-white/40">
                  08
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-1">
                {privacySections.map((section) => (
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
                  Still have questions?
                </p>
                <p className="mt-1 text-xs leading-5 text-white/40">
                  Get in touch about this policy.
                </p>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-red-300 transition-colors hover:text-red-200"
                >
                  Contact me <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </nav>
          </aside>

          <div className="min-w-0 space-y-5">
            {privacySections.map((section) => {
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
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-red-400/[0.18] bg-gradient-to-br from-red-500/[0.12] to-red-950/[0.08] text-lg text-red-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 group-hover:border-red-400/30 group-hover:shadow-[0_0_25px_rgba(239,68,68,0.08)] sm:h-14 sm:w-14">
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
                      {section.content.map((paragraph, index) => (
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
                        Privacy policy
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
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-red-200/30 to-transparent"
          />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-red-400/20 bg-red-500/[0.09] text-lg text-red-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <FaEnvelope />
              </div>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-red-300">
                Let&apos;s talk
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                Have a privacy question?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                If you have a question about this policy or information you
                have shared with me, feel free to reach out through my
                portfolio contact section.
              </p>
            </div>

            <Link
              href="/contact"
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
              <p>Built with care, clarity, and respect for privacy.</p>
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
