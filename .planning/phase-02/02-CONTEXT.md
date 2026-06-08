# Phase 2 Context: User Identity

## Goals
Implement Firebase Authentication and user profile document management in a Next.js (App Router) application.

## Requirements
- **AUTH-01**: User can authenticate (Sign up/Login) via Firebase Authentication.
- **PROF-01**: Application creates and retrieves user profile documents in Firestore.
- **PROF-02**: User can update their profile information.

## Decisions
- **D-01**: Use `next-firebase-auth-edge` for session management to support Next.js Edge Runtime.
- **D-02**: Store user profiles in Firestore under `users/{uid}` using the Firebase Auth UID.
- **D-03**: Utilize React 19 `useActionState` and Server Actions for form handling and data mutations.
- **D-04**: Use HTTP-only cookies for session tokens to mitigate XSS risks.
- **D-05**: Implement route protection via Next.js Middleware.

## Strategy
1. **Initialize Firebase**: Setup both Client SDK (for auth initiation) and Admin SDK (for server-side data access). [D-01]
2. **Setup Session Management**: Implement `next-firebase-auth-edge` for secure, server-side session management via cookies. [D-04]
3. **Authentication Flows**:
    - Create Signup and Login routes with forms using Tailwind CSS 4. [D-03]
    - Implement API routes for setting and clearing session cookies.
4. **Profile Management**:
    - Design Firestore schema: `users/{uid} { email, displayName, photoURL, createdAt, updatedAt }`. [D-02]
    - Create a protected `/profile` page for viewing and updating user info. [D-05]
    - Implement Server Actions for profile mutations. [D-03]

## Resources
- [Research Findings](./RESEARCH.md)
- Firebase Project ID: `carbonsync-app` (Assumed based on project name)

## Key Files to Create/Modify
- `src/lib/firebase/client.ts`: Firebase Client SDK config.
- `src/lib/firebase/admin.ts`: Firebase Admin SDK config.
- `src/middleware.ts`: Auth protection and session handling.
- `src/app/api/login/route.ts`: Session cookie setup.
- `src/app/api/logout/route.ts`: Session cookie removal.
- `src/app/(auth)/login/page.tsx`: Login UI.
- `src/app/(auth)/signup/page.tsx`: Signup UI.
- `src/app/profile/page.tsx`: User profile UI.
- `src/lib/actions/profile.ts`: Server Actions for profile updates.

## Constraints
- **Next.js 16 (React 19)**: Use modern patterns like Server Actions and `useActionState`.
- **Tailwind CSS 4**: Utilize the latest theme and styling capabilities.
- **Security**: Must use HTTP-only cookies for session management to prevent XSS-based token theft.
