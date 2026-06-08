# Phase 05 Validation Plan

## Goal
Verify the successful implementation of the Insights and Leaderboard features, ensuring data integrity and UI responsiveness.

## Test Cases

### 1. Data Layer Verification
- **Test ID:** VAL-05-01
- **Procedure:** Run the `seedInsights` function and verify the `insights` collection in Firestore contains the expected documents.
- **Expected:** At least 5 documents with correct fields (title, category, etc.).

### 2. Leaderboard Query Verification
- **Test ID:** VAL-05-02
- **Procedure:** Mock user profiles with varying `totalSavedCO2` values and verify `getTopRankings` returns the correct top 10 in descending order.
- **Expected:** Array of 10 users, sorted correctly.

### 3. UI Responsiveness
- **Test ID:** VAL-05-03
- **Procedure:** Inspect the Insights Bento grid on mobile and desktop viewports.
- **Expected:** Grid adapts layout (e.g., 1 column on mobile, multiple on desktop).

### 4. End-to-End Integration
- **Test ID:** VAL-05-04
- **Procedure:** Navigate to the leaderboard page and ensure it loads data from Firestore without errors.
- **Expected:** Page displays ranked list of users.
