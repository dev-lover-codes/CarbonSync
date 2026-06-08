# Phase 1 Context: Infrastructure and Tooling

## Phase Goal
Setup the React + Vite foundation, Tailwind CSS, and Firebase integration.

## Requirements Covered
- **INFRA-01**: Setup project with React + Vite
- **INFRA-02**: Initialize and configure Tailwind CSS with custom theme (primary, earth, sky, surface)
- **INFRA-03**: Configure Firebase App, Auth, and Firestore
- **INFRA-04**: Define Carbon Factors configuration for footprint calculation

## Decisions

### Tech Stack Migration
- **Pivot**: Move from Next.js to React + Vite.
- **Rationale**: User request for hackathon speed and familiarity.

### Styling
- **Framework**: Tailwind CSS.
- **Theme**:
  - Primary: `#2D6A4F` (Default), `#52B788` (Light), `#1B4332` (Dark)
  - Earth: `#8B5E3C` (Default), `#D4A574` (Light), `#5C3D1E` (Dark)
  - Sky: `#0EA5E9` (Default), `#BAE6FD` (Light), `#0369A1` (Dark)
  - Surface: `#F8FAF7` (Default), `#FFFFFF` (Card), `#0F1C14` (Dark)
  - Font: `Plus Jakarta Sans`, `sans-serif`

### Firebase
- **Services**: Authentication, Firestore.
- **Config**: Use environment variables with `VITE_` prefix.
  - `VITE_FIREBASE_API_KEY`
  - `VITE_FIREBASE_AUTH_DOMAIN`
  - `VITE_FIREBASE_PROJECT_ID`
  - `VITE_FIREBASE_STORAGE_BUCKET`
  - `VITE_FIREBASE_MESSAGING_SENDER_ID`
  - `VITE_FIREBASE_APP_ID`
- **Exports**: `app`, `auth`, `db` from `src/lib/firebase.js`.

### Carbon Factors
- **Data Source**: `src/config/carbonFactors.js` with specific factors provided in the prompt.
- **Functionality**: `calculateFootprint(activities)` helper.

## Implementation Details
1. Clean up existing Next.js files (or overwrite).
2. Install dependencies: `firebase`, `react-router-dom`, `tailwindcss`, `postcss`, `autoprefixer`, `@tailwindcss/forms`, `recharts`, `framer-motion`, `react-hot-toast`, `lucide-react`.
3. Initialize Tailwind.
4. Setup `.env.local` and `.env.example`.
5. Implement Firestore helpers in `src/lib/firestore.js`.
