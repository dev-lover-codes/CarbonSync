# CarbonSync Blueprint

## Project Overview
CarbonSync is a Carbon Footprint Awareness Platform designed for a competitive hackathon. It allows users to track their environmental impact through activity logging, set sustainability goals, and compete on a leaderboard.

## Tech Stack
- **Frontend**: React + Vite
- **Styling**: Tailwind CSS (v3)
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore
- **Deployment**: Vercel
- **UI Components**: Lucide React, Framer Motion, Recharts, React Hot Toast

## Features (Planned)
- User Authentication (Email/Password & Google)
- Activity Logging (Transport, Energy, Food, Shopping, Waste)
- Carbon Footprint Calculation Logic
- User Dashboard with Visual Insights
- Goal Setting & Tracking
- Community Leaderboard

## Phase 1: Foundational Setup
### Tasks
- [x] Install dependencies (firebase, react-router-dom, tailwindcss, etc.)
- [x] Configure Tailwind CSS with custom theme (Primary, Earth, Sky, Surface)
- [x] Configure 'Plus Jakarta Sans' typography
- [x] Initialize Firebase App, Auth, and Firestore
- [x] Implement Database Helper Functions (createUserProfile, logActivity, etc.)
- [x] Implement Carbon Calculation Logic (carbonFactors.js)

### Implementation Details
- **Design System**: Nature-inspired palette with custom colors.
- **Firebase Helpers**: Async functions in `src/lib/firestore.js` handling all CRUD for the hackathon.
- **Calculation Engine**: Centralized factors for Transport, Energy, Food, Shopping, and Waste.
