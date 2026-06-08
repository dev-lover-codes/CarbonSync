# CarbonSync Blueprint

## Project Overview
CarbonSync is a Carbon Footprint Awareness Platform designed for a competitive hackathon. It allows users to track their environmental impact through activity logging, set sustainability goals, and compete on a leaderboard.

## Tech Stack
- **Frontend**: React + Vite
- **Styling**: Tailwind CSS 4
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore
- **Deployment**: Vercel
- **UI Components**: Lucide React, Framer Motion, Recharts, React Hot Toast

## Features (Implemented/Planned)
- User Authentication (Email/Password & Google)
- Activity Logging (Transport, Energy, Food, Shopping, Waste)
- Carbon Footprint Calculation Logic
- User Dashboard with Visual Insights
- Goal Setting & Tracking
- Community Leaderboard

## Phase 1: Foundational Setup
Establish the core infrastructure and design system.

### Plan 1: Environment Setup & Design System
- **Purpose**: Scaffold Vite + React and configure Tailwind CSS 4.
- **Tasks**:
  - Install dependencies: `firebase`, `react-router-dom`, `tailwindcss`, `postcss`, `autoprefixer`, `@tailwindcss/forms`, `recharts`, `framer-motion`, `react-hot-toast`, `lucide-react`.
  - Initialize Tailwind with custom theme:
    - primary: { DEFAULT: "#2D6A4F", light: "#52B788", dark: "#1B4332" }
    - earth: { DEFAULT: "#8B5E3C", light: "#D4A574", dark: "#5C3D1E" }
    - sky: { DEFAULT: "#0EA5E9", light: "#BAE6FD", dark: "#0369A1" }
    - surface: { DEFAULT: "#F8FAF7", card: "#FFFFFF", dark: "#0F1C14" }
  - Typography: 'Plus Jakarta Sans'.
  - Global styles in `src/index.css`.

### Plan 2: Firebase & Data Logic
- **Purpose**: Setup Firebase integration and footprint calculation logic.
- **Tasks**:
  - Initialize Firebase in `src/lib/firebase.js` using VITE_ env vars.
  - Implement Firestore helper functions in `src/lib/firestore.js` for profile management, activity logging, and leaderboard.
  - Implement Carbon calculation logic in `src/config/carbonFactors.js` with category-specific emission factors.

## Implementation Details (Current State)
- **Status**: Planning complete for Phase 1.
- **Next Steps**: Execute Plan 1-1 to scaffold the project.
