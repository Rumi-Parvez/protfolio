
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
}

export interface TopProject extends Project {
  techStack: string[];
  themeColor: {
    border: string;
    glow: string;
    badgeBg: string;
    badgeText: string;
    accentDot: string;
  };
}

// Featured projects: IDs 1–4
export const topProjectsData: TopProject[] = [
  {
    id: 1,
    year: "2026",
    category: "Full-Stack Web Application",
    title: "Bazar Dor — Smart Daily Market Price Tracker",
    description:
      "A responsive web platform for exploring daily product prices and comparing market trends.",
    metrics: [
      {
        value: "Responsive",
        label: "Optimized for mobile, tablet, and desktop",
      },
      {
        value: "Real-Time API",
        label: "Product and category data integration",
      },
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "REST API",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "REST API",
    ],
    image: "/images/projects/bazar-dor.png",
    liveUrl: "",
    githubUrl: "",
    challenges: [
      "Integrating product and category data from REST APIs.",
      "Handling API loading, errors, and missing data.",
      "Maintaining a responsive interface across mobile, tablet, and desktop.",
    ],
    futurePlans: [
      "Improve product price comparison and browsing experiences.",
      "Continue refining responsive layouts and accessibility.",
      "Add further improvements based on the project's requirements.",
    ],
    themeColor: {
      border: "border-emerald-500/30",
      glow: "bg-emerald-500/15",
      badgeBg: "bg-emerald-500/10",
      badgeText: "text-emerald-400",
      accentDot: "bg-emerald-400",
    },
  },
  {
    id: 2,
    year: "2026",
    category: "Fitness & Productivity",
    title: "FitLog — Personal Fitness Management",
    description:
      "A fitness web application designed to help users organize and track their fitness activities.",
    metrics: [
      {
        value: "Simple UI",
        label: "A clear and easy-to-use experience",
      },
      {
        value: "Persistent",
        label: "Local data storage support",
      },
    ],
    skills: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "LocalStorage",
    ],
    techStack: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "LocalStorage",
    ],
    image: "/images/projects/fitlog.png",
    liveUrl: "",
    githubUrl: "",
    challenges: [
      "Designing a clear interface for organizing fitness information.",
      "Managing application data using browser storage.",
      "Keeping the layout usable across different screen sizes.",
    ],
    futurePlans: [
      "Explore additional fitness tracking features.",
      "Improve data management and the overall user experience.",
      "Consider backend storage if the project requires synchronization.",
    ],
    themeColor: {
      border: "border-lime-500/30",
      glow: "bg-lime-500/15",
      badgeBg: "bg-lime-500/10",
      badgeText: "text-lime-400",
      accentDot: "bg-lime-400",
    },
  },
  {
    id: 3,
    year: "2026",
    category: "Developer Tools",
    title: "Lenghool — A Custom Programming Language",
    description:
      "An ongoing developer tool project exploring a custom programming language, CLI, and editor support.",
    metrics: [
      {
        value: "CLI",
        label: "Command-line workflow",
      },
      {
        value: "VS Code",
        label: "Custom language extension",
      },
    ],
    skills: [
      "TypeScript",
      "Node.js",
      "CLI",
      "VS Code Extension",
      "Testing",
    ],
    techStack: [
      "TypeScript",
      "Node.js",
      "CLI",
      "VS Code Extension",
      "Testing",
    ],
    image: "/images/projects/lenghool.png",
    liveUrl: "",
    githubUrl: "",
    challenges: [
      "Designing consistent language syntax and command-line behavior.",
      "Building reliable development and testing workflows.",
      "Integrating custom language support into VS Code.",
    ],
    futurePlans: [
      "Continue expanding language features and libraries.",
      "Improve CLI usability and error reporting.",
      "Enhance editor support and automated test coverage.",
    ],
    themeColor: {
      border: "border-violet-500/30",
      glow: "bg-violet-500/15",
      badgeBg: "bg-violet-500/10",
      badgeText: "text-violet-400",
      accentDot: "bg-violet-400",
    },
  },
  {
    id: 4,
    year: "2026",
    category: "Authentication System",
    title: "SecureAuth — User Authentication",
    description:
      "A learning project focused on implementing email verification and user authentication workflows.",
    metrics: [
      {
        value: "Email",
        label: "Email and password authentication",
      },
      {
        value: "Verification",
        label: "Account verification workflow",
      },
    ],
    skills: [
      "Next.js",
      "Better Auth",
      "MongoDB",
      "Resend",
      "TypeScript",
    ],
    techStack: [
      "Next.js",
      "Better Auth",
      "MongoDB",
      "Resend",
      "TypeScript",
    ],
    image: "/images/projects/secure-auth.png",
    liveUrl: "",
    githubUrl: "",
    challenges: [
      "Configuring authentication and database integration.",
      "Implementing an email verification workflow.",
      "Handling authentication errors and environment configuration.",
    ],
    futurePlans: [
      "Improve authentication error handling and user feedback.",
      "Review session management and access protection.",
      "Expand the authentication workflow if required.",
    ],
    themeColor: {
      border: "border-sky-500/30",
      glow: "bg-sky-500/15",
      badgeBg: "bg-sky-500/10",
      badgeText: "text-sky-400",
      accentDot: "bg-sky-400",
    },
  },
];

// Additional projects: IDs 5–8
export const projectsData: Project[] = [
  {
    id: 5,
    year: "2026",
    category: "Personal Portfolio",
    title: "Developer Portfolio — Digital Identity",
    description:
      "A personal portfolio showcasing development projects, technical interests, and contact information.",
    metrics: [
      {
        value: "Responsive",
        label: "Adaptable layouts across screen sizes",
      },
      {
        value: "Custom UI",
        label: "A distinctive visual identity",
      },
    ],
    skills: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "CSS",
      "Responsive Design",
    ],
    image: "/images/afargqa/protfolio.png",
    liveUrl: "",
    githubUrl: "",
    challenges: [
      "Creating a consistent visual identity across different sections.",
      "Maintaining responsive layouts and readable typography on different screen sizes.",
      "Balancing visual effects with usability and page performance.",
    ],
    futurePlans: [
      "Add more detailed case studies for featured projects.",
      "Improve accessibility and keyboard navigation.",
      "Continue optimizing loading performance and responsive behavior.",
    ],
  },
  {
    id: 6,
    year: "2026",
    category: "E-Commerce",
    title: "ShopSphere — Modern Online Store",
    description:
      "A sample online store concept featuring product discovery, category browsing, and product detail pages.",
    metrics: [
      {
        value: "Catalog",
        label: "Organized product browsing",
      },
      {
        value: "Product Pages",
        label: "Detailed product information",
      },
    ],
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
    ],
    image: "/images/projects/shopsphere.png",
    liveUrl: "",
    githubUrl: "",
    challenges: [
      "Designing a clear product discovery and category browsing experience.",
      "Handling API loading, empty states, and request errors.",
      "Keeping product cards and detail pages consistent across screen sizes.",
    ],
    futurePlans: [
      "Integrate a real product API and database.",
      "Explore search, filtering, sorting, and pagination.",
      "Add authentication and a shopping cart if the project scope requires them.",
    ],
  },
  {
    id: 7,
    year: "2026",
    category: "Education Technology",
    title: "LearnFlow — Online Learning Platform",
    description:
      "A sample learning platform concept for browsing courses, organizing lessons, and tracking learning progress.",
    metrics: [
      {
        value: "Courses",
        label: "Structured learning content",
      },
      {
        value: "Progress",
        label: "Learning journey overview",
      },
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "UI Design",
    ],
    image: "/images/projects/learnflow.png",
    liveUrl: "",
    githubUrl: "",
    challenges: [
      "Organizing course and lesson information into a clear navigation structure.",
      "Planning a useful way to represent lesson completion and learning progress.",
      "Designing a consistent learning experience across desktop and mobile.",
    ],
    futurePlans: [
      "Add course enrollment and lesson completion tracking.",
      "Connect course content to a backend API.",
      "Explore student dashboards and course search.",
    ],
  },
  {
    id: 8,
    year: "2026",
    category: "Task Management",
    title: "Taskly — Personal Task Organizer",
    description:
      "A sample productivity app concept for organizing tasks, priorities, and project workflows.",
    metrics: [
      {
        value: "Task Boards",
        label: "Organized task management",
      },
      {
        value: "Workflow",
        label: "Clear task status tracking",
      },
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "State Management",
    ],
    image: "/images/projects/taskly.png",
    liveUrl: "",
    githubUrl: "",
    challenges: [
      "Modeling task status, priorities, and updates consistently.",
      "Keeping the interface synchronized with task state changes.",
      "Making task organization intuitive on smaller screens.",
    ],
    futurePlans: [
      "Add persistent storage through a backend API.",
      "Explore due dates, task filtering, and priority sorting.",
      "Consider authentication and multi-device synchronization.",
    ],
  },
];
