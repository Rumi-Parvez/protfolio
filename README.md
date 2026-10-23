# Rumi Parvez — Developer Portfolio

A modern, responsive developer portfolio built with Next.js, React, and TypeScript to showcase my projects, technical skills, educational background, and journey as a developer.

**Live Website:** [rumiparvez.openyhool.com](https://rumiparvez.openyhool.com/)  
**GitHub Profile:** [Rumi-Parvez](https://github.com/Rumi-Parvez)  
**Repository:** [protfolio](https://github.com/Rumi-Parvez/protfolio)

---

## About the Project

This portfolio is my personal space on the web where I showcase who I am, the technologies I work with, and the projects I build.

My goal is to create useful digital experiences by combining clean code, responsive design, problem-solving, and continuous learning.

The website features a modern visual identity, responsive layouts, interactive elements, and dedicated sections for projects, skills, education, and contact information.

## Features

- **Personal Introduction** — Learn about my background, interests, and development journey.
- **Project Showcase** — Explore selected projects, their technologies, and implementations.
- **Technical Skills** — Discover the tools and technologies I use.
- **Education & Learning** — Explore my educational background and ongoing learning journey.
- **Responsive Design** — Layouts designed for desktop, tablet, and mobile devices.
- **Modern UI** — A distinctive visual style with interactive elements and thoughtful layouts.
- **Contact Section** — Find ways to connect with me.
- **Portfolio Export Features** — PDF-related functionality powered by HTML-to-canvas and PDF libraries.
- **Static Deployment Support** — Configured for static hosting when Next.js export settings and project features permit it.

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | React framework and application build system |
| React | Component-based user interfaces |
| TypeScript | Type safety and maintainable code |
| Tailwind CSS | Utility-first styling |
| DaisyUI | Tailwind CSS component styling |
| React Icons | Icon library |
| React Marquee Text | Marquee text effects |
| html2canvas | Capturing HTML content as images |
| html2pdf.js | Generating PDFs from HTML content |
| jsPDF | PDF generation |
| ESLint | Code quality and linting |
| Git & GitHub | Version control and source code management |

---

## Prerequisites

Before running the project, install the following:

- [Node.js](https://nodejs.org/) — Use a version compatible with your installed Next.js release.
- npm — Included with Node.js.
- [Git](https://git-scm.com/) — Required to clone the repository.
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/).

Verify your installations:

```bash
node -v
npm -v
git --version
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Rumi-Parvez/protfolio.git
```

### 2. Navigate to the Project Directory

```bash
cd protfolio
```

### 3. Install All Dependencies

If the repository contains a `package-lock.json`, install the dependencies recorded in the lockfile:

```bash
npm ci
```

Alternatively, use:

```bash
npm install
```

These commands install the project's declared dependencies from `package.json`. You do not need to install every package individually.

### 4. Start the Development Server

```bash
npm run dev
```

Open your browser and visit:

**http://localhost:3000**

The development server supports hot reloading, so supported code changes appear while you work.

---

## Package Installation Guide

The following commands show how to install the project's listed production and development packages individually.

**Note:** These are the package versions supplied for this project. Confirm their compatibility with your existing `package.json`, lockfile, and Node.js version before changing versions. Do not run the individual commands unnecessarily if the dependencies are already declared.

### Production Dependencies

Production dependencies are packages imported by the application at runtime or used for application features.

```bash
npm install html2canvas@^1.4.1
npm install html2pdf.js@^0.14.0
npm install jspdf@^4.2.1
npm install next@16.4.2
npm install react@19.3.0
npm install react-dom@19.3.0
npm install react-icons@^5.7.0
npm install react-marquee-text@^1.0.6
```

### Development Dependencies

Development dependencies provide tooling, type definitions, styling integration, and code-quality checks.

```bash
npm install -D @tailwindcss/turbopack@^4
npm install -D @types/html2pdf.js@^0.10.0
npm install -D @types/node@^20
npm install -D @types/react@^19
npm install -D @types/react-dom@^19
npm install -D babel-plugin-react-compiler@1.0.0
npm install -D daisyui@^5.7.50
npm install -D eslint@^9
```

### Install All Listed Packages Together

You can install all the listed production dependencies in one command:

```bash
npm install html2canvas@^1.4.1 html2pdf.js@^0.14.0 jspdf@^4.2.1 next@16.4.2 react@19.3.0 react-dom@19.3.0 react-icons@^5.7.0 react-marquee-text@^1.0.6
```

Install all the listed development dependencies together:

```bash
npm install -D @tailwindcss/turbopack@^4 @types/html2pdf.js@^0.10.0 @types/node@^20 @types/react@^19 @types/react-dom@^19 babel-plugin-react-compiler@1.0.0 daisyui@^5.7.50 eslint@^9
```

**Important:** Installing packages does not automatically configure them. Tailwind CSS, DaisyUI, React Compiler, and other tools must also be configured as required by the project. Preserve your existing working configuration unless a change is necessary.

---

## Available Scripts

Run these commands from the project root:

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates the production build |
| `npm run start` | Starts the production server when supported by the configuration |
| `npm run lint` | Runs the configured linting script, if available |

The actual scripts are defined in `package.json`. If a command is unavailable, check the `scripts` section before using it.

For example, if you want to inspect the available scripts:

```bash
npm run
```

---

## Production Build

Before deploying the portfolio, create and verify a production build.

### 1. Generate the Build

```bash
npm run build
```

This runs the Next.js production build process.

### 2. Run the Production Server

For a standard Next.js server deployment, run:

```bash
npm run start
```

Open:

**http://localhost:3000**

The `start` command requires a successful build and an appropriate Next.js server deployment configuration.

### 3. Static Export

If `next.config.ts` contains the following configuration:

```typescript
const nextConfig = {
  output: "export",
};

export default nextConfig;
```

Next.js generates static output in the `out/` directory after a successful build:

```bash
npm run build
```

You can then deploy the generated static files to a compatible static hosting provider.

**Static export considerations:**

- Features requiring a running Next.js server may not work in static export mode.
- Dynamic routes must be compatible with static generation.
- Image optimization must be configured appropriately for static hosting.
- Check that all portfolio pages, assets, and navigation paths work after export.
- Do not enable static export if your application requires unsupported server-side features.

### 4. Deploy to Static Hosting

When static export is configured and the build succeeds:

1. Run `npm run build`.
2. Locate the generated `out/` directory.
3. Upload its contents to your hosting provider's static document root.
4. Verify that HTML files, `_next/` assets, images, and route files are available.
5. Test the deployed website on desktop and mobile.

For supported Next.js hosting, you can also deploy the repository through [Vercel](https://vercel.com/).

---

## Project Structure

The following is a simplified example of the project structure. Update it to match the actual files in the repository.

```text
protfolio/
├── public/
│   └── images/
│       ├── education/
│       ├── projects/
│       └── topprojects/
├── src/
│   ├── app/
│   ├── components/
│   ├── assets/
│   └── ...
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

- `public/` — Static assets served directly by Next.js.
- `src/app/` — Application routes and layouts.
- `src/components/` — Reusable UI components.
- `src/assets/` — Project assets, if used by the application.
- `next.config.ts` — Next.js configuration.
- `package.json` — Dependencies and npm scripts.
- `package-lock.json` — Locked dependency versions for reproducible npm installs.
- `tsconfig.json` — TypeScript configuration.

## Development Philosophy

My approach to development focuses on:

- Writing clean, readable, and maintainable code.
- Building responsive interfaces for different screen sizes.
- Creating intuitive and consistent user experiences.
- Breaking complex problems into manageable steps.
- Learning through practical projects and continuous improvement.
- Exploring modern technologies and applying them thoughtfully.

## Roadmap

Potential areas for future improvement include:

- Refining accessibility and keyboard navigation.
- Improving performance and loading behavior.
- Expanding project documentation and case studies.
- Enhancing the mobile experience.
- Keeping project details and technical skills up to date.

## Connect With Me

I'm interested in building meaningful web applications, learning from other developers, and exploring opportunities to contribute to real-world projects.

- **Portfolio:** [rumiparvez.openyhool.com](https://rumiparvez.openyhool.com/)
- **GitHub:** [github.com/Rumi-Parvez](https://github.com/Rumi-Parvez)
- **LinkedIn:** [linkedin.com/in/rumi-parvez-dev](https://www.linkedin.com/in/rumi-parvez-dev)

For professional inquiries, you can reach out through the contact options available on my portfolio.

## License

This is a personal portfolio project. Unless a separate license is included in the repository, the original content, branding, and personal assets remain the property of their respective owner.

---

Built with curiosity, consistency, and a passion for web development.

**Rumi Parvez**  
Full-Stack Web Developer
