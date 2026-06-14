# System Architecture

## High-Level Overview

CarbonSync 3D is a single-page application (SPA) built with **React 18** and **Vite**. The core architectural defining feature is that it is built entirely inside a **WebGL canvas** using `@react-three/fiber` and `three.js`. The traditional HTML DOM is only used for overlays, while all routing, interactions, and visuals happen inside the 3D scene.

The application functions as a gamified carbon profiling dashboard, integrating **Firebase** for backend services (Authentication, Firestore Database) and **Google Gemini 1.5 Flash** for AI-driven insights and a personalized chat coach.

## Core Architectural Components

### 1. 3D WebGL Frontend (React Three Fiber)
Instead of traditional DOM-based routing (e.g., React Router), the application root mounts a single `<Scene>` component which wraps a `@react-three/fiber` `<Canvas>`.
- **Pages as Scenes**: Different "pages" (e.g., `DashboardScene.jsx`, `LandingScene.jsx`, `AICoachScene.jsx`) are loaded dynamically via `React.lazy` inside the canvas based on a global state flag.
- **Hybrid UI**: The application makes heavy use of `@react-three/drei`'s `<Html>` helper to project standard HTML/CSS elements onto 3D planes (Glassmorphism). This allows for complex text rendering and accessibility within the 3D environment.
- **Scroll Controls**: Routing navigation within specific scenes is sometimes bound to scroll events using `<ScrollControls>`, linking 3D animations and HTML opacities to the scroll offset.

### 2. State Management & Routing (Zustand)
The `src/store/useStore.js` serves as the backbone for application state, acting as:
- **The Router**: Manages a `currentPage` string (e.g., `'landing'`, `'dashboard'`, `'tracker'`) which dictates which 3D scene to render.
- **Data Sync**: Handles fetching and real-time subscription to Firestore data (`userStats`, `carbonLogs`), computing derived metrics like `weeklyFootprint` and `dailyFootprint` locally.
- **Session State**: Manages the ephemeral chat history for the AI EcoBot.

### 3. Backend-as-a-Service (Firebase)
The project is entirely serverless on the frontend, relying on Firebase for backend operations.
- **Authentication**: Handled via Firebase Auth (integrated within `AuthContext.jsx`), primarily focused on Google Sign-In.
- **Firestore Database**: NoSQL database used to store:
  - `users/{uid}`: Profiles, aggregated stats, level, points.
  - `users/{uid}/carbonLogs`: Sub-collections for real-time tracking of carbon activities.
  - `users/{uid}/goals` and `users/{uid}/insights`: Sub-collections for gamification and AI-generated insights.

### 4. AI Integration (Google Gemini)
The `geminiService.js` abstraction layer encapsulates direct client-side calls to the Gemini API (`@google/generative-ai`).
- **Structured Prompts**: It uses prompt engineering to force Gemini to return strict JSON structures for deterministic UI rendering (e.g., `getDailyTip`, `getWeeklyInsight`).
- **Contextual Awareness**: The service injects the user's real-time carbon data, streaks, and previous chat history into the context window to provide personalized AI coaching.

## Data Flow Example (Logging an Activity)
1. User clicks "Log Activity" in the 3D UI.
2. The UI triggers `addCarbonLog` in the Zustand store.
3. Zustand pushes the new document to the Firestore `carbonLogs` sub-collection and updates the user's total points.
4. The real-time listener `onSnapshot` (also in Zustand) detects the Firestore change, recalculates the `dailyFootprint` and `weeklyFootprint`, and updates the store state.
5. The 3D UI (e.g., `DashboardScene.jsx`) reactively re-renders the new metrics.
