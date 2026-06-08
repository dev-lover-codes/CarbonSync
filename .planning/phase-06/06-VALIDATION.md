---
phase: 06-community-ai
test_harness: Vitest + React Testing Library
test_suites:
  - name: Social Logic
    path: src/lib/firestore-social.test.js
    focus: [Group creation, Feed posting, Progress aggregation]
  - name: Social Components
    path: src/components/social/*.test.tsx
    focus: [Feed rendering, Group Join interaction]
  - name: AI Service
    path: src/lib/ai-service.test.js
    focus: [Prompt construction, Gemini response handling]
  - name: AI Components
    path: src/components/ai/*.test.tsx
    focus: [Chat streaming UI, Insights display]
---

# Phase 6 Validation Plan: Community & AI Intelligence

This plan defines the verification strategy for the Social and AI features of CarbonSync.

## 1. Social Infrastructure Validation

### 1.1 Firestore Social Helpers
**Unit Tests (`src/lib/firestore-social.test.js`):**
- `createGroup`: Verify document creation in `groups` collection.
- `joinGroup`: Verify user ID added to member list.
- `postToFeed`: Verify "Green Moment" post creation.
- `getGroupProgress`: Verify correct aggregation of member activity impact.

### 1.2 Community UI
**Component Tests (`src/components/social/`):**
- `CommunityFeed`: Verify real-time list rendering and Framer Motion animation triggers.
- `GroupsManager`: Verify "Join" button updates local/global state.

## 2. AI Intelligence Validation

### 2.1 AI Service Layer
**Unit Tests (`src/lib/ai-service.test.js`):**
- `generateInsights`: Mock Gemini response to verify trend analysis logic.
- `chatWithCoach`: Verify streaming implementation and system prompt injection.

### 2.2 EcoCoach UI
**Component Tests (`src/components/ai/`):**
- `EcoCoach`: Verify message threading and "loading" states during streaming.
- `InsightCard`: Verify rendering of AI-generated sustainability tips.

## 3. Integration Testing (E2E)

**Harness:** Playwright (if configured) or Manual Verification Script.
- **Flow A:** User logs activity -> Achievement appears in Community Feed.
- **Flow B:** User joins group -> Group progress bar updates based on user's previous logs.
- **Flow C:** User asks EcoCoach about their transport footprint -> Coach references activity logs.

## 4. Security & Performance

- **Rate Limiting:** Verify that rapid chat messages are handled (client-side debouncing).
- **Rule Enforcement:** Manual verification of Firestore Security Rules (ensure users can't delete others' posts).
- **API Key Leakage:** Verify that `.env` is properly ignored and VITE_ prefix is used only for necessary client keys.
