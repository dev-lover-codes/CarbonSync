# Technology Stack

**Analysis Date:** 2026-06-13

## Languages

**Primary:**
- JavaScript (ESM) / JSX - Core application logic and UI components (`.jsx`, `.js`).

**Secondary:**
- TypeScript - Used primarily for configuration files (e.g., `vite.config.ts`) and IDE type-checking (types provided via `@types/react`, etc.).
- CSS - Application styling, processed via PostCSS (`index.css`).

## Runtime & Build Environment

**Environment:**
- Node.js
- Package Manager: npm (`package-lock.json` present)

**Build/Dev Tooling:**
- Vite 4.4 - Fast, modern frontend build tool and development server.
- `@vitejs/plugin-react` - React plugin for Vite.
- PostCSS 8 - Processing CSS with Autoprefixer and Tailwind plugins.

## Core Frameworks & Libraries

**UI Framework:**
- React 18.2 - Component-based UI library.
- React Router DOM 6.30 - Client-side routing.

**State Management:**
- Zustand 5.0 - Lightweight, fast, boilerplate-free state management.

**3D Graphics & Visuals:**
- Three.js 0.164 - 3D rendering engine.
- `@react-three/fiber` 8.18 - React renderer for Three.js.
- `@react-three/drei` 9.122 - Useful helpers and abstractions for react-three-fiber.
- `@react-three/postprocessing` 3.0 - Post-processing effects for 3D scenes.
- Leva 0.10 - GUI interface for tweaking 3D parameters.

**Animations:**
- GSAP 3.15 & `@gsap/react` 2.1 - Advanced, high-performance animations.
- Framer Motion 10.18 - Declarative React animations.
- `@react-spring/three` 10.1 - Spring-physics based animation.

**UI Components & Styling:**
- Tailwind CSS 3.4 - Utility-first styling framework (`@tailwindcss/forms` plugin used).
- Lucide React 0.263 - Icon library.

**Data Visualization:**
- Recharts 2.15 - Charting library built on React components.

**Utilities:**
- React Hot Toast 2.6 - Toast notifications.

## Testing & Quality Assurance
- ESLint 8.45 - Code linting, specifically configured with React plugins (`eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`).

## Configuration Files
- `vite.config.ts` - Vite configuration.
- `tailwind.config.js` - Tailwind configuration.
- `postcss.config.js` - PostCSS configuration.
- `.eslintrc.cjs` - Linting configuration.

---
*Note: This stack analysis replaces the older Next.js setup. The current structure actively uses React and Vite as its core build system.*
