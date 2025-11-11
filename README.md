# Beryl Impact Scroll Storytelling

Interactive scroll-driven storytelling site about Hurricane Beryl built with Next.js 14 and GSAP ScrollTrigger. Each section features an intro, a scroll-synced video with timed overlays, and an outro. A global loader and hero section guide the user through three phases: **Before**, **During**, and **After** the storm. A final summary provides a downloadable PDF report.

## Features

- Scroll-triggered video playback using GSAP ScrollTrigger
- Overlay system triggered by video timestamps (`renderOverlays`)
- Modular section structure (Before, During, After) with intros and outros
- Smooth component animations via Framer Motion
- Global loading overlay and hero landing section
- Final recap section with PDF download button

## Technologies Used

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS 4.1**
- **GSAP ScrollTrigger** for video scroll-sync
- **Framer Motion** for animations
- React, Lucide Icons

## Getting Started

1. Install dependencies

```bash
npm install
```

1. Start the development server

```bash
npm run dev
```

1. Lint the codebase

```bash
npm run lint
```

1. Create a production build

```bash
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Deployment (Vercel)

1. Push the repository to GitHub.
2. [Create a new project on Vercel](https://vercel.com/new) and import the repo.
3. Vercel detects the Next.js configuration automatically. No extra build settings are required.
4. Every push to `main` triggers a new deployment.

## Folder Structure

```text
src/
  app/                      # Next.js entry points
  components/
    common/                 # Reusable UI elements
    layout/                 # Layout wrappers and navigation
  context/                  # React context providers
  hooks/                    # Custom hooks (useScrollVideo)
  sections/
    before/ | during/ | after/   # Section groups with Intro/Outro
  styles/                  # Global styles (Tailwind)
  utils/                   # Helper utilities (overlay rendering)
  types/                   # TypeScript types
```

The underlying hook `useScrollVideo` exposes:

- `currentTime`
- `scrollToCheckpoint(index)`
- `checkpoints[]`
- `autoScrollEnabled` and `toggleAutoScroll()`


## Adding New Sections

1. Create a folder under `src/sections` with `IntroSection.tsx`, `<Name>Section.tsx`, and `OutroSection.tsx`.
2. In `<Name>Section.tsx`, use `FullScrollSection` to render your scroll-synced video and pass any overlays.
3. Import the new section in `PresentationSection.tsx` and add it to the navigation flow.

### Adding Overlays

1. In your section component, build an overlay list with `renderOverlays` from `src/utils/overlayUtils.tsx`.
2. Each overlay item defines `key`, `appear`, `disappear`, `align`, `type`, and `content`.
3. Pass the generated overlays array to the `FullScrollSection` component.

## Live Preview

A demo deployment is available at: [https://beryl-impact-mockup.vercel.app](https://beryl-impact-mockup.vercel.app)

## License & Attribution

This project is licensed under the MIT License. UI icons are provided by [Lucide](https://lucide.dev/).

## AutoScrollVideoSection

A reusable section that binds a video to scroll progress with GSAP + ScrollTrigger, adds automatic progression between checkpoints, and displays interactive hotspots that open an animated details modal.

Example:

```tsx
<AutoScrollVideoSection
   src="/videos/presentation.mp4"
   scrollSpeed={500}
   autoScroll
   autoScrollThreshold={120}
   overlays={[
      { id: 'jeudi-noir', time: 5, title: 'Jeudi noir', description: 'Début du krach', image: '/images/image4.png', position: { xPercent: 25, yPercent: 65 } },
      { id: 'propagation', time: 15, title: 'Propagation', description: 'Crise bancaire mondiale' }
   ]}
/>
```

The underlying hook `useScrollVideo` exposes:

- `currentTime`
- `scrollToCheckpoint(index)`
- `checkpoints[]`
- `autoScrollEnabled` and `toggleAutoScroll()`
