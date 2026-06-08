# Phase 05: Insights & Leaderboard - Context

## Goal
Provide actionable environmental insights and gamify the platform with a top 10 leaderboard to drive user engagement.

## Requirements Covered
- **INS-01**: User can view recent environmental insights/tips
- **LEAD-01**: User can view a leaderboard showing the top 10 users by total CO2 saved

## Scope
- Firestore collection `insights` for curated tips.
- Firestore aggregation/query for top 10 users in `profiles` (based on `totalSavedCO2`).
- UI for Insights (cards/grid).
- UI for Leaderboard (ranked list).

## Technical Constraints
- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Database: Firebase Firestore
- Icons: lucide-react
