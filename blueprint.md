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

## Phase 7: Troubleshooting, Git Sync & Vercel Deployment
### Tasks
- [x] Resolve file conflict: Remove placeholder `src/App.tsx` so Vite resolves the full implementation in `src/App.jsx`.
- [x] Verify build and fix any compile/lint issues.
- [x] Push local changes to Git repository.
- [ ] Deploy the project to Vercel.

### Implementation Details
- **Entry Point Conflict**: Removed the placeholder `src/App.tsx` file, which was overriding `src/App.jsx` and causing the app to load as a blank "Foundation Setup Complete" screen instead of the fully implemented application.

