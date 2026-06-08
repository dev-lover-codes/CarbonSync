# Phase 2: User Identity - Research (Vite + React + Firebase)

**Researched:** 2026-06-08
**Domain:** Authentication & User Profiles (Firebase Client SDK)
**Confidence:** HIGH

## Summary

This phase implements a client-side authentication system for a Vite + React application using the Firebase Client SDK. We will leverage React Context for state management and Firestore for user profile persistence. This approach is standard for SPAs (Single Page Applications) where security is handled by Firebase's server-side rules (Firestore Security Rules) rather than a custom middleware.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Authentication | Firebase Auth | Client-side | `onAuthStateChanged` manages session state. |
| State Management| React Context | useAuth / useCarbon | Centralized access to user and activity state. |
| Data Persistence | Firestore | Client-side SDK | Real-time updates and direct client-to-DB interaction. |
| Route Protection | React Router | ProtectedRoute | Client-side navigation guards based on Auth state. |

## Standard Stack

| Library | Version | Purpose |
|---------|---------|---------|
| `firebase` | ^11.x | Authentication, Firestore, and Google Sign-In. |
| `react-router-dom`| ^6.x | Client-side routing and protected routes. |
| `framer-motion` | ^11.x | Animations for auth pages and onboarding wizard. |
| `lucide-react` | ^0.x | Iconography for the UI components and navigation. |
| `react-hot-toast` | ^2.x | Toast notifications for errors and success messages. |

## Architecture Patterns

### Auth Context Pattern
- Use `createContext` and `useContext`.
- `onAuthStateChanged` listener in `useEffect` to sync Firebase Auth state with React state.
- `userProfile` fetched from Firestore `users` collection upon successful authentication.

### Protected Routing
- A `ProtectedRoute` component that checks `currentUser` and `loading` state from `useAuth`.
- Redirects to `/login` if not authenticated.
- Redirects to `/onboarding` if authenticated but `onboardingComplete` is false.

### Profile Creation Flow
1. User signs up via `createUserWithEmailAndPassword`.
2. Upon success, a Firestore document is created in the `users` collection using the user's `uid`.
3. Initial profile data includes: `name`, `email`, `totalSaved: 0`, `streak: 0`, `level: 'Seedling'`, `onboardingComplete: false`.

## Security Domain
- **STRIDE**:
  - **Spoofing**: Firebase Auth handles secure token management and persistence.
  - **Tampering**: Firestore Security Rules (Phase 1) prevent unauthorized data modification.
  - **Information Disclosure**: Data access restricted via UID-based Firestore rules.
  - **Denial of Service**: Firebase handles infrastructure scaling.
