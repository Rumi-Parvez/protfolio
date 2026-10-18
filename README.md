# Rumi Parvez — Developer Portfolio

A modern, responsive developer portfolio built to showcase my projects, technical skills, learning journey, and passion for building useful web experiences.

**Live Website:** [rumiparvez.openyhool.com](https://rumiparvez.openyhool.com/)  
**GitHub:** [Rumi-Parvez](https://github.com/Rumi-Parvez)

---

## About the Project

This portfolio is my personal space on the web where I present who I am as a developer, the technologies I work with, and the projects I build.

I believe good development is more than writing code. It is about solving problems, creating intuitive user experiences, and building applications that are maintainable and accessible.

The website is designed with a modern visual identity, responsive layouts, smooth navigation, and carefully structured sections to make exploring my work simple and enjoyable.

## Features

- **Personal Introduction** — Learn about me, my interests, and my development journey.
- **Project Showcase** — Explore selected projects, their goals, technologies, and implementations.
- **Technical Skills** — Discover the tools and technologies I use while developing web applications.
- **Education & Learning** — Follow my educational background and ongoing learning journey.
- **Responsive Design** — Optimized layouts for desktop, tablet, and mobile devices.
- **Modern UI** — A distinctive visual style with thoughtful layouts and interactive elements.
- **Contact Section** — Find ways to connect with me and discuss opportunities.
- **Static Deployment** — Built for deployment as a static website.

## Tech Stack

The portfolio is built with modern web technologies.

| Technology | Purpose |
|---|---|
| Next.js | React framework and page generation |
| React | Component-based user interfaces |
| TypeScript | Type safety and maintainable code |
| Tailwind CSS | Utility-first styling |
| HTML5 | Semantic page structure |
| CSS3 | Visual styling and responsive layouts |
| Git & GitHub | Version control and source code management |

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)

### 1. Clone the repository

```bash
git clone https://github.com/Rumi-Parvez/protfolio
```

### 2. Navigate to the project directory

```bash
cd your-portfolio-repository
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the production version |
| `npm run start` | Starts the Next.js production server when supported by the deployment setup |
| `npm run lint` | Runs the configured linting script, if available |

> **Note:** Available scripts depend on the `scripts` section in `package.json`. Check that file before using a command that may not be configured.

## Project Structure

A simplified overview of the main project directories:

```text
portfolio/
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
├── tsconfig.json
└── README.md
```

> The exact structure may vary depending on the current implementation. Update this section if your project uses different directories.

## Build & Deployment

This project is configured for static export using Next.js.

### Generate the production build

```bash
npm run build
```

With `output: "export"` enabled in `next.config.ts`, Next.js generates a static website in the `out/` directory.

### Deploy to static hosting

1. Run the production build locally.
2. Open the generated `out/` directory.
3. Upload the **contents** of `out/` to your hosting provider's document root.
4. Confirm that the main `index.html`, `_next/` assets, images, and generated route files are uploaded.
5. Open the live website and verify the pages, navigation, and images.

### Image optimization

For static hosting, the project uses the Next.js image configuration appropriate for static export. If `images.unoptimized` is enabled, images are served directly instead of relying on the Next.js image optimization server.

## Development Philosophy

My approach to development focuses on:

- Writing clean, readable, and maintainable code.
- Building responsive interfaces that work across screen sizes.
- Creating intuitive and consistent user experiences.
- Breaking complex problems into smaller, manageable steps.
- Learning through practical projects and continuous improvement.
- Exploring modern technologies and applying them thoughtfully.

## Roadmap

Areas I may continue improving as the portfolio evolves:

- Refine accessibility and keyboard navigation.
- Improve performance and loading behavior.
- Expand project documentation and case studies.
- Enhance the mobile experience.
- Keep project details and technical skills up to date.

## Connect With Me

I'm interested in building meaningful web applications, learning from other developers, and exploring opportunities to contribute to real-world projects.

- **Portfolio:** [rumiparvez.openyhool.com](https://rumiparvez.openyhool.com/)
- **GitHub:** [github.com/Rumi-Parvez](https://github.com/Rumi-Parvez)
- **LinkedIn:** [Add your LinkedIn profile URL](https://www.linkedin.com/in/rumi-parvez-dev)

For professional inquiries, you can also add your preferred contact email here.

## License

This project is a personal portfolio. Unless a separate license is included in the repository, all rights to the original content, branding, and personal assets remain with their respective owner.

---

Built with curiosity, consistency, and a passion for web development.

**Rumi Parvez**  
Full-Stack Web Developer
