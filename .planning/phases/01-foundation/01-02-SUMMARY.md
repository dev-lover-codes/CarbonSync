---
phase: 01-foundation
plan: 01-02
subsystem: infrastructure
tags: [firebase, firestore, carbon-logic]
requirements: [INFRA-03, INFRA-04]
tech-stack: [firebase, firestore, vite]
key-files: [src/lib/firebase.js, src/lib/firestore.js, src/config/carbonFactors.js]
decisions:
  - use VITE_ prefixed env vars for Firebase config
  - keep carbon emission factors in a central config file
  - use subcollections for user activities, goals, and insights
metrics:
  duration: 15m
  completed_date: 2024-03-24
---

# Phase 01 Plan 02: Setup Firebase Integration & Carbon Logic Summary

Initialized Firebase services and implemented the data access layer and carbon calculation logic. This provides the foundation for user data management and carbon footprint tracking.

## Key Changes

### Firebase & Env Config
- Verified `src/lib/firebase.js` initializes App, Auth, and Firestore.
- Added `.env.example` with required Firebase configuration keys.
- Updated `.gitignore` to allow `.env.example` while keeping `.env.local` ignored.

### Firestore Data Layer
- Implemented/Verified `src/lib/firestore.js` with helper functions for:
    - User Profiles: `createUserProfile`, `getUserProfile`, `updateUserProfile`
    - Activities: `logActivity`, `getActivities`
    - Goals: `saveGoal`, `getGoals`, `updateGoal`
    - Leaderboard: `getLeaderboard`
    - Insights: `saveInsight`, `getInsights`

### Carbon Calculation Logic
- Implemented/Verified `src/config/carbonFactors.js` containing emission factors for transport, energy, food, shopping, and waste.
- Implemented `calculateFootprint` utility to sum CO2 impact from activities.

## Deviations from Plan

- **Files already existed:** `src/lib/firebase.js`, `src/lib/firestore.js`, and `src/config/carbonFactors.js` were already present in the codebase from a previous scaffolding step. They were verified against the plan requirements and found to be compliant.

## Self-Check: PASSED

- [x] Firebase initialized correctly
- [x] Firestore helpers implemented
- [x] Carbon logic implemented
- [x] Environment variables documented in `.env.example`
- [x] `.env.local` ignored in `.gitignore`
