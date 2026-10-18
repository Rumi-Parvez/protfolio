
export interface ProjectTheme {
  border: string;
  glow: string;
  badgeBg: string;
  badgeText: string;
  accentDot: string;
}

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
  challenges: string[];
  futurePlans: string[];
  themeColor: ProjectTheme;
}

export const projectsData: Project[] = [
  {
    id: 1,
    year: "2026",
    category: "Price Tracking Platform",
    title: "Bazar Dor — Daily Market Price Tracker",
    description:
      "A Bangla-focused market price tracking platform that helps users explore product prices, compare recent price changes, and browse categories through a responsive interface.",
    metrics: [
      {
        value: "Real-Time API",
        label: "Product price data from an API",
      },
      {
        value: "Bangla UI",
        label: "Localized market price experience",
      },
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "REST API",
    ],
    image: "/images/projects/bazardor.png",
    liveUrl: "https://bazardor-kappa.vercel.app/",
    githubUrl: "",
    challenges: [
      "Integrating product and category APIs.",
      "Displaying price changes and product information consistently.",
      "Implementing authentication and protected pages.",
      "Maintaining responsive layouts across screen sizes.",
    ],
    futurePlans: [
      "Continue improving the user experience.",
      "Refine loading, error, and empty states.",
      "Improve accessibility and responsive behavior.",
    ],
    themeColor: {
      border: "border-red-500/20",
      glow: "shadow-red-500/10",
      badgeBg: "bg-red-500/10",
      badgeText: "text-red-400",
      accentDot: "bg-red-500",
    },
  },
  {
    id: 2,
    year: "2026",
    category: "Fitness & Productivity",
    title: "FitLog — Fitness Tracking Application",
    description:
      "A fitness tracking web application built to organize workout-related information through a clean interface, with a focus on responsive design and practical usability.",
    metrics: [
      {
        value: "Responsive UI",
        label: "Layouts designed for different screens",
      },
      {
        value: "REST API",
        label: "API-powered application data",
      },
    ],
    skills: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "BetterAuth",
      "REST API",
      "LocalStorage",
    ],
    image: "/images/projects/fitlog.png",
    liveUrl: "https://fitlog-beta-gilt.vercel.app/",
    githubUrl:
      "https://github.com/Rumi-Parvez/Assignment-of-PH-06-From-RumiParvez",
    challenges: [
      "Building a consistent and responsive application interface.",
      "Working with API data and browser storage.",
      "Creating clear visual feedback for user interactions.",
    ],
    futurePlans: [
      "Explore additional workout tracking capabilities.",
      "Improve data persistence where needed.",
      "Continue refining accessibility and usability.",
    ],
    themeColor: {
      border: "border-lime-500/20",
      glow: "shadow-lime-500/10",
      badgeBg: "bg-lime-500/10",
      badgeText: "text-lime-400",
      accentDot: "bg-lime-500",
    },
  },
  {
    id: 3,
    year: "2026",
    category: "Developer Tools",
    title: "Dev Stack — Developer Resource Platform",
    description:
      "A developer-focused project intended to organize useful development resources and make technical information easier to explore.",
    metrics: [
      {
        value: "Developer Focus",
        label: "Resources for development workflows",
      },
      {
        value: "Modern UI",
        label: "A structured browsing experience",
      },
    ],
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
    image: "/images/projects/dev-stack.png",
    liveUrl: "",
    githubUrl: "",
    challenges: [
      "Organizing developer-focused information clearly.",
      "Maintaining reusable and consistent UI components.",
      "Designing a responsive browsing experience.",
    ],
    futurePlans: [
      "Expand the available developer resources.",
      "Improve navigation and resource discovery.",
      "Add features according to the project's actual scope.",
    ],
    themeColor: {
      border: "border-violet-500/20",
      glow: "shadow-violet-500/10",
      badgeBg: "bg-violet-500/10",
      badgeText: "text-violet-400",
      accentDot: "bg-violet-500",
    },
  },
  {
    id: 4,
    year: "2026",
    category: "Personal Portfolio",
    title: "Rumi Parvez — Developer Portfolio",
    description:
      "A personal portfolio presenting development projects, technical skills, professional interests, and contact information through a custom black-and-red visual identity.",
    metrics: [
      {
        value: "Custom Design",
        label: "A distinctive personal visual identity",
      },
      {
        value: "Responsive",
        label: "Layouts for desktop, tablet, and mobile",
      },
    ],
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
    image: "/images/projects/portfolio.png",
    liveUrl: "https://rumiparvez.openyhool.com",
    githubUrl: "https://github.com/Rumi-Parvez",
    challenges: [
      "Creating a consistent visual identity across sections.",
      "Balancing liquid glass effects with readability.",
      "Maintaining responsive layouts and smooth interactions.",
    ],
    futurePlans: [
      "Add detailed case studies for featured projects.",
      "Improve accessibility and keyboard navigation.",
      "Continue optimizing performance and responsiveness.",
    ],
    themeColor: {
      border: "border-rose-500/20",
      glow: "shadow-rose-500/10",
      badgeBg: "bg-rose-500/10",
      badgeText: "text-rose-400",
      accentDot: "bg-rose-500",
    },
  },
  {
    id: 5,
    year: "2026",
    category: "Football & Sports",
    title: "Saff Football",
    description:
      "A football-related project focused on presenting its sports content through an accessible and user-friendly web interface.",
    metrics: [
      {
        value: "Sports",
        label: "Football-focused project experience",
      },
      {
        value: "Web UI",
        label: "Structured content presentation",
      },
    ],
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
    ],
    image: "/images/projects/safe-football.png",
    liveUrl: "",
    githubUrl: "",
    challenges: [
      "Presenting football-related content clearly.",
      "Maintaining a consistent layout across devices.",
      "Structuring the interface for convenient navigation.",
    ],
    futurePlans: [
      "Expand features based on the project's actual requirements.",
      "Improve content organization and accessibility.",
      "Refine the mobile browsing experience.",
    ],
    themeColor: {
      border: "border-emerald-500/20",
      glow: "shadow-emerald-500/10",
      badgeBg: "bg-emerald-500/10",
      badgeText: "text-emerald-400",
      accentDot: "bg-emerald-500",
    },
  },
  {
    id: 6,
    year: "2026",
    category: "Developer Conference",
    title: "DevConf 2026",
    description:
      "A developer conference website project focused on presenting event information, organizing content, and creating a clear experience for visitors.",
    metrics: [
      {
        value: "Event Website",
        label: "Conference information in one place",
      },
      {
        value: "Responsive UI",
        label: "Accessible layouts across screen sizes",
      },
    ],
    skills: [
      "HTML5",
      "CSS",
      "Figma UI Design",
    ],
    image: "/images/projects/devconf-2026.png",
    liveUrl: "",
    githubUrl: "",
    challenges: [
      "Organizing conference information into clear sections.",
      "Creating a consistent visual hierarchy.",
      "Ensuring a smooth experience across different screen sizes.",
    ],
    futurePlans: [
      "Improve event information and navigation.",
      "Add conference features when supported by the project scope.",
      "Continue refining accessibility and responsive design.",
    ],
    themeColor: {
      border: "border-sky-500/20",
      glow: "shadow-sky-500/10",
      badgeBg: "bg-sky-500/10",
      badgeText: "text-sky-400",
      accentDot: "bg-sky-500",
    },
  },
];

export const topProjects: Project[] = projectsData.slice(0, 4);

export const allProjects: Project[] = projectsData;
