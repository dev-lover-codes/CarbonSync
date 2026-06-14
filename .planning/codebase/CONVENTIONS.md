# Codebase Conventions

## Overview
This document outlines the coding conventions, styling guidelines, and linting setup used within the project. 

## Language & Framework
- **Core Stack**: React 18, Vite, and JavaScript (ES6+).
- **TypeScript**: The project was initialized with a Vite React-TS template (having `main.tsx` and `vite.config.ts`), but development heavily favors standard JavaScript with JSX (`.jsx` and `.js` files in `src/`). TypeScript typing is generally bypassed.
- **Component Style**: Components are strictly functional and utilize React Hooks (`useState`, `useMemo`, `useEffect`).
- **State Management**: Zustand is used for global state. The store is located in `src/store/useStore.js`. State definitions and async side-effects (e.g., Firebase queries, real-time subscriptions) are bundled together inside the Zustand store actions.
- **Firebase**: The project relies on the modular Firebase v9+ SDK for authentication and Firestore database operations.

## UI, Styling & Animation
- **CSS Framework**: Tailwind CSS is used globally. Custom themes (colors and fonts like `Plus Jakarta Sans`) are configured in `tailwind.config.js`.
- **3D & Animations**: A significant part of the UI utilizes WebGL via `@react-three/fiber` and `@react-three/drei`. Animation logic is handled with `@react-spring/three`, `gsap`, and `framer-motion`.
- **File Naming**: 3D components generally have a `3D` suffix (e.g., `Button3D.jsx`, `Scene.jsx`). Subdirectories inside `components` are categorized by function (`ui`, `layout`, `common`).

## Linting Setup
- **Tooling**: ESLint is configured via `.eslintrc.cjs` to maintain code consistency.
- **Rules**:
  - Uses `eslint:recommended`, `plugin:react/recommended`, and `plugin:react-hooks/recommended`.
  - `'react/prop-types'` is explicitly set to `'off'`, removing the need for `PropTypes` definitions across the codebase.
  - `'react/no-unescaped-entities'` is set to `'off'`.
  - Unused variables trigger a `'warn'` rather than an error.
  - Includes `eslint-plugin-react-refresh` to ensure React Fast Refresh works reliably.
- **Execution**: Run `npm run lint` to lint `.js` and `.jsx` files. Prettier is not strictly configured or enforced via CLI, relying on developer IDE settings or standard ESLint formatting.
