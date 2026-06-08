# Phase 4 Context: Goals Management

## Goal
Enable users to set and track their carbon reduction goals.

## Scope
- UI for setting and updating goals (progress rings, budget sliders).
- Firestore sub-collection: `users/{userId}/goals`.
- Helper functions: `saveGoal`, `getGoals`, `updateGoal`.
- Real-time progress calculation by aggregating activity logs.

## Constraints
- Must use React + Vite.
- Must use Tailwind CSS for styling.
- Must use Firebase Auth for user identification.
- Data visualization should use `recharts`.
- Date manipulation should use `date-fns`.

## Precursors
- Phase 1: Infrastructure and Tooling (Completed Planning).
- Phase 2: User Identity (Not Started).
- Phase 3: Activity Tracking (Not Started).

## Research References
- Progress Calculation: Dynamic sum of activities within date range.
- Libraries: `recharts`, `date-fns`, `lucide-react`, `framer-motion`.
