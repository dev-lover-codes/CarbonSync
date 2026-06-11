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

## Phase 2: Authentication, State, and Routing
### Tasks
- [x] Create `AuthContext.jsx` for global authentication state.
- [x] Create `CarbonContext.jsx` for activity and goal management.
- [x] Build reusable UI components (Button, Card, Input, Badge, etc.).
- [x] Implement Auth pages (Login, Signup, ForgotPassword).
- [x] Implement Onboarding Wizard (4 steps).
- [x] Set up App Layout (Sidebar/Bottom Nav) and Routing with Protected Routes.

### Implementation Details
- **Auth Strategy**: Firebase `onAuthStateChanged` integration. Automatic profile creation on signup.
- **State Strategy**: Context API for global auth and carbon data. Computed totals for weekly/monthly metrics.
- **UI Architecture**: Atomic components in `src/components/ui/` using Tailwind.
- **Onboarding**: Step-based flow to capture user preferences and initialize profile.
- **Layout**: Responsive design with fixed sidebar for desktop and bottom bar for mobile.

## Phase 3: Activity Tracker and Dashboard
### Tasks
- [x] Implement `src/pages/Tracker.jsx`
- [x] Build "Log Activity" multi-step flow with categories and specific inputs.
- [x] Add Recharts pie chart to Tracker for category breakdown.
- [x] Display chronological feed of activities with filtering.
- [x] Enable CSV export for activities.
- [x] Implement `src/pages/Dashboard.jsx`
- [x] Build hero greeting with circular progress gauge (today's footprint).
- [x] Add responsive stats row (today, week, total saved, streak).
- [x] Integrate stacked Recharts BarChart for 7-day breakdown.
- [x] Add sections for active goals, recent activities, and tip of the day.

### Implementation Details
- **Tracker**: Uses `CarbonContext` for data and `carbonFactors` for logic. Integrated multi-step modal using `<Modal>` component.
- **Dashboard**: Aggregates data by day for charts. Uses custom CSS circular gauge for today's impact budget.

## Phase 4: AI Integration & Gamification
### Tasks
- [x] Implement `src/pages/AICoach.jsx` with real-time Claude API chat.
- [x] Implement `src/pages/Insights.jsx` with AI report generation and Recharts.
- [x] Implement `src/pages/Goals.jsx` with AI goal suggestions and tracking.
- [x] Implement `src/pages/Leaderboard.jsx` with Firestore query and share functionality.

### Implementation Details
- **AI Coach**: Built direct-to-frontend Anthropic API connection injecting user context into system prompt.
- **Insights**: Recharts used for 30-day trends and category vs average Radar chart. Claude API used to generate weekly 3-paragraph summary.
- **Goals**: Mix of static challenge cards and AI-suggested dynamic goals based on highest emission category.
- **Leaderboard**: Real-time Firebase fetch of top 10 users by `totalSaved`. Rank calculated with "kg needed to rank up" feature.

## Phase 5: Tips, Profile & UI Polish
### Tasks
- [x] Create `src/data/tips.js` with 30 tailored eco-tips.
- [x] Implement `src/pages/Tips.jsx` with AI tip generation, filters, and bookmarking.
- [x] Implement `src/pages/Profile.jsx` with stats grid, level progress, settings, and achievements.
- [x] Create reusable layout/common components (`PageHeader`, `EmptyState`, `LoadingSkeleton`, `NotFound`).
- [x] Add utility helpers in `src/utils/helpers.js`.
- [x] Add `framer-motion` page transitions to `App.jsx`.
- [x] Update `index.html` with title and favicon.

### Implementation Details
- **Tips**: Fed by static array and Claude API. Filter/sort options. State saved in user's profile array.
- **Profile**: Gamification engine visualizing stats and dynamic achievements derived from real data.
- **Polish**: Framer Motion handles smooth route exit/enter animations via `AnimatePresence`.

## Phase 6: Final Deployment & Security
### Tasks
- [x] Write `firestore.rules` for strict access control.
- [x] Document Firestore Composite Indexes.
- [x] Document Environment Variables & Build Checklist.
- [x] Add Vercel deployment configurations (`vercel.json` for SPA routing).
- [x] Commit and push changes.
- [x] Deploy to Vercel.

### Implementation Details
- **Security**: Granular access control enforcing strict privacy on subcollections and public access only for users who opt into the leaderboard.
- **Routing Fix**: `vercel.json` resolves the "nothing is shown on Vercel" issue typical of Vite/React single-page applications.

## Phase 7: Login Bug Fixes & Deployment Remediation
### Tasks
- [x] Remove `src/App.tsx` placeholder file to let Vite resolve `src/App.jsx` as the entry point.
- [x] Fix race condition in `src/contexts/AuthContext.jsx` by explicitly setting auth state before returning from `login`, `signup`, and `loginWithGoogle`.
- [x] Add `VITE_USE_MOCK` support in `src/lib/firebase.js` and `.env.local` to enable stable offline/mock mode testing.
- [x] Add an interactive floating `MockModeToggle` UI button.
- [−] Deploy the working build to Vercel (cancelled per user request).

### Implementation Details
- **Entry Point Conflict**: Removed the placeholder `src/App.tsx` file to allow Vite to resolve the full routing implementation in `src/App.jsx`.
- **Race Condition Resolution**: Fetched user profiles and setting `currentUser`/`userProfile` state synchronously in the context actions before resolving the authentication promises, resolving the redirection bug to `/login`.
- **Interactive UI Mock Toggle**: Created a floating badge in [App.jsx](file:///home/user/site/src/App.jsx) that allows developers/testers to switch between **Live Firebase** and **Mock DB (Offline)** in 1 click (saved to `localStorage`).

## Phase 8: 3D Rebuild & Netlify Deployment
### Tasks
- [x] Downgrade `three` to `0.164.0` for full engine compatibility.
- [x] Strip remote Google fonts to prevent React Suspense network hangs.
- [x] Add explicit ref safety checks in `Portal3D` and chart components to fix mounting race conditions.
- [x] Add safe fallbacks in `BarChart3D` and `PieChart3D` to handle undefined parameters.
- [x] Compile production bundle using `npm run build`.
- [x] Deploy the application to Netlify: `https://carbonsync-3d-cosmic.netlify.app`.
- [x] Git add, commit, and push all modifications to origin repository.

### Implementation Details
- **Three.js Engine Alignment**: Realigned dependencies by downgrading `three` to version `0.164.0` which is compatible with `@react-three/fiber` (v8) and `@react-three/drei` (v9).
- **Offline Reliability & Loading Fix**: Sanitized font parameters and environment maps so all assets are bundled locally, eliminating dynamic CDN downloads that hang React Suspense on slow networks.
- **Robust Ref Validation**: Added guard statements to verify ref attachments before running animations or drawing, correcting the black screen context crash.
- **Netlify & Version Control**: Created small site named `carbonsync-3d-cosmic` on Netlify, ran production builds successfully, pushed code to GitHub, and completed live deployment.

## Phase 9: Debug/Mock Code Cleanup
### Tasks
- [x] Search for all elements or performance monitor references ("OFFLINE MOCK", "PTS", "CYC", "CLK", "IDLE") and verify if any UI elements exist.
- [x] Remove unused `getIsMock` import from `src/App.jsx`.
- [x] Remove the mock-mode authentication interceptors in `src/contexts/AuthContext.jsx`.
- [x] Strip out all mock localStorage code paths and catch-block mock fallbacks in `src/lib/firestore.js`.
- [x] Strip out all `getIsMock` checks and helper functions `getMockStorage` / `setMockStorage` in `src/utils/firestoreHelpers.js`.
- [x] Clean up mock exports and initialization logic from `src/lib/firebase.js`.
- [x] Conduct a global codebase search for remaining "mock" and "debug" strings to flag for manual review.
- [x] Style the Dashboard stats cards (TODAY, WEEKLY, SAVED, STREAK) and add the smartphone charging equivalency metric in `src/pages/Dashboard.jsx`.
- [x] Refactor the Login screen layout in `src/pages/auth/Login.jsx` to use a unified split card design, custom inputs, and button glows.

### Implementation Details
- **Mock Mode Elimination**: Transition from local-storage fallback mock database architecture to direct, strict Firebase API transactions. 
- **Code Hygiene**: Delete dead import dependencies and unused mock state handlers, establishing strict reliance on environment variables for live connection.
- **Dashboard Stats Cards Polish**: Customized the container class names of stats cards to use a premium backdrop-blur styling, formatted typography tracking, and added dynamic environmental equivalence messages.
- **Login Layout Polish**: Reconstructed the layout in [Login.jsx](file:///home/user/site/src/pages/auth/Login.jsx) to group form controls and platform features into a single, high-fidelity glassmorphic backdrop-blur wrapper. Custom styled inputs and buttons to match system dark-mode themes.

## Phase 10: Landing Hero Overlay & Pointer Events Fix
### Tasks
- [x] Configure Landing page parent `<header>` layout wrapper to use `relative`.
- [x] Render absolute-positioned overlay `div` containing the carbon action statement over the right illustration column.
- [x] Append an absolute bounce-animated scroll down indicator at the bottom center of the hero section.
- [x] Explicitly ensure that all CTA and interactive navigation buttons (e.g. "Start for free", "See how it works", "Get Started — Free", "View Demo", "Create Free Account") in `Landing.jsx` and `LandingScene.jsx` have `pointer-events-auto` or `pointerEvents: 'auto'` styles to remain clickable over/under overlays.

### Implementation Details
- **Parent Layout Structure**: Ensured that the main `<header>` container in [Landing.jsx](file:///home/user/site/src/pages/Landing.jsx) uses the `relative` class to correctly orient absolute child containers.
- **Title Overlay Positioning**: Placed a text overlay absolute-positioned box within the right SVG illustration column of the landing section to display high-fidelity carbon impact headings and descriptions.
- **Navigation Safety & Interactivity**: Added standard tailwind `pointer-events-auto` classes to CTA links and buttons in [Landing.jsx](file:///home/user/site/src/pages/Landing.jsx) and styled inline `pointerEvents: 'auto'` attributes in [LandingScene.jsx](file:///home/user/site/src/pages/LandingScene.jsx) to guarantee user clicks execute correctly under z-index overlay structures.
