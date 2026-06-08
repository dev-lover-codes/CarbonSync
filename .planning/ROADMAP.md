# Roadmap: CarbonSync

**Status:** Not Started
**Current Phase:** Phase 1

## Phase 1: Infrastructure and Tooling
**Goal:** Setup the React + Vite foundation, Tailwind CSS, and Firebase integration.
**Status:** In Progress
**Plans:** 2 plans

Plans:
- [ ] 01-01-PLAN.md — Scaffold Vite + React and configure Tailwind CSS theme.
- [ ] 01-02-PLAN.md — Setup Firebase integration and Carbon calculation logic.

## Phase 2: User Identity
**Goal:** Implement Firebase Authentication and user profile document management.
**Status:** Not Started

- **Step 1:** Create `src/lib/firebase.js` with Firebase Auth and DB initialization.
- **Step 2:** Implement user signup and login logic.
- **Step 3:** Create Firestore helper functions for profiles (`createUserProfile`, `getUserProfile`, `updateUserProfile`).

## Phase 3: Activity Tracking
**Goal:** Allow users to log environmental activities and calculate CO2 impact.
**Status:** Not Started

- **Step 1:** Create UI forms for logging transport, energy, food, shopping, and waste.
- **Step 2:** Implement Firestore helper functions for activities (`logActivity`, `getActivities`).
- **Step 3:** Integrate carbon footprint calculations.

## Phase 4: Goals Management
**Goal:** Enable users to set and track their carbon reduction goals.
**Status:** Not Started

- **Step 1:** Create UI for setting and updating goals.
- **Step 2:** Implement Firestore helper functions for goals (`saveGoal`, `getGoals`, `updateGoal`).

## Phase 5: Insights & Leaderboard
**Goal:** Provide insights and gamify the platform with a top 10 leaderboard.
**Status:** Not Started

- **Step 1:** Implement Firestore helper functions for insights (`saveInsight`, `getInsights`).
- **Step 2:** Create Insights UI.
- **Step 3:** Implement Firestore helper function for leaderboard (`getLeaderboard`).
- **Step 4:** Create Leaderboard UI.

---
*Roadmap generated: 2026-06-08*
*Last updated: 2026-06-08 after Phase 1 planning*
