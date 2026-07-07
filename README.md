# Energy Core

![Dashboard Preview](public/assets/Dashboard.mp4)

A next-generation React application built with Next.js, showcasing dynamic WebGL energy effects using the `EnergyBeam` component (powered by Unicorn Studio).

## Features
- **Next.js 16 (App Router)**: Fast, optimized, and SEO-friendly.
- **shadcn/ui & Tailwind CSS**: Beautiful, accessible, and customizable interface with utility-first styling.
- **EnergyBeam Component**: An immersive background element powered by `unicornStudio.umd.js` for stunning visual effects.
- **Lucide React Icons**: Clean, consistent scalable vector graphics.

## Getting Started

First, make sure you have your dependencies installed:
```bash
npm install
```

Then, run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the interactive EnergyBeam landing page.

## Project Structure
- `src/components/ui/energy-beam.tsx`: The primary interactive WebGL component.
- `src/app/page.tsx`: The demo landing page wrapped over the energy beam effect.
- `src/app/globals.css`: Contains custom Tailwind 4 theme variables for our dark aesthetics.

## Customization
To change the energy effect, you can pass a different `projectId` prop to the `EnergyBeam` component inside `src/app/page.tsx`.

```tsx
<EnergyBeam projectId="your_unicorn_studio_project_id" />
```

## License
This project is licensed under the terms described in the [LICENCE](LICENCE) file.
