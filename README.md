# portfolio-4

A cinematic, high-performance portfolio built with Next.js, React, and Tailwind CSS. Featuring dynamic interactive WebGL backgrounds, smooth scroll animations (GSAP), and a polished ethereal dark mode aesthetic.

---

## Showcase

|                  Landing Page                   |                   About                    |
| :---------------------------------------------: | :----------------------------------------: |
| ![Landing Page](public/assets/Landing-page.png) | ![About](public/assets/about.png)          |

|               Experience                |                Tech Stack                  |
| :--------------------------------------: | :----------------------------------------: |
| ![Experience](public/assets/experience.png) | ![Tech Stack](public/assets/teach-stack.png) |

|                 Projects                  |
| :---------------------------------------: |
| ![Projects](public/assets/projects.png)   |


## Features
- **Next.js 15 (App Router)**: Fast, optimized, and SEO-friendly React framework.
- **Dynamic Animations**: Custom smooth scroll, parallax, and entrance animations powered by GSAP and Framer Motion.
- **Interactive WebGL**: An immersive background element powered by `unicornStudio` for stunning interactive visual effects.
- **Tailwind CSS v4**: Beautiful, accessible, and customizable interface with utility-first styling.
- **Cinematic Dark Theme**: Deep contrast gradients, subtle glow effects, and minimalist glassmorphism interfaces.

## Getting Started

First, make sure you have your dependencies installed:
```bash
pnpm install
```

Then, run the development server:
```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the interactive portfolio.

## Architecture
- `src/app/`: Next.js app router structure including global layouts and routing.
- `src/components/`: Modular, reusable UI components (Hero, About, Experience, Projects, Skills).
- `src/constants/`: Centralized data structure (`index.ts`) for easily updating personal details, skills, and project data.
- `public/`: Static assets, images, project screenshots, and custom fonts.
