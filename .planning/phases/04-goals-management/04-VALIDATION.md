# Phase 4 Validation: Goals Management

## Goal
Verify that users can set, update, and track carbon reduction goals with accurate progress visualization.

## Verification Harness
- **Framework:** Vitest (assumed, to be setup in Phase 1)
- **Database:** Firebase Emulator (for integration tests)
- **UI:** React Testing Library

## Test Suites

### 1. Data Layer (Unit/Integration)
- `saveGoal`: Verify goal is written to `users/{userId}/goals` with correct schema.
- `getGoals`: Verify retrieval of all goals for a specific user.
- `updateGoal`: Verify partial updates (e.g., changing `targetValue`).
- `calculateGoalProgress`:
  - Verify correct summing of activities within date range.
  - Verify filtering by category.
  - Verify handling of boundary dates.

### 2. UI Components (Unit)
- `GoalCard`: Verify progress ring renders correct percentage.
- `GoalForm`: Verify form validation and submission to `saveGoal`.

### 3. E2E (Integration)
- User sets a goal -> Logs an activity -> Goal progress updates in the dashboard.

## Success Criteria
- [ ] All Firestore helper functions pass integration tests.
- [ ] Progress calculation logic passes boundary case unit tests.
- [ ] UI components render without errors and handle state changes smoothly.
- [ ] Mobile and desktop layouts are responsive.
