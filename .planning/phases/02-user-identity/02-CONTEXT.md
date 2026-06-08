# Phase 2 Context: User Identity (Next.js App Router)

## Goals
Implement Firebase Authentication and user profile document management using a secure server-side session model in Next.js.

## Requirements
- **AUTH-01**: User can authenticate (Sign up/Login) via Firebase Authentication.
- **PROF-01**: Application creates and retrieves user profile documents in Firestore.
- **PROF-02**: User can update their profile information.

## Decisions
- **D-01**: Use `next-firebase-auth-edge` for session management. Client-side Firebase ID tokens will be exchanged for secure session cookies via `/api/login` per user directive.
- **D-02**: Store user profiles in Firestore under `users/{uid}` using the Firebase Auth UID.
- **D-03**: Use React 19 Server Actions (`useActionState`) for all profile data mutations per user directive.
- **D-04**: Use Tailwind CSS 4 for all UI components, following the nature-inspired design system.
- **D-05**: Implement route protection using Next.js Middleware. Unauthorized users are redirected to `/login` from protected segments like `/profile` and `/dashboard`.

## Strategy
1. **Infrastructure**: Setup Firebase Admin and Client SDKs. Configure `next-firebase-auth-edge` and Middleware. [D-01, D-05]
2. **Auth Flow**: Build Login/Signup forms. Create API routes for session bridging (`/api/login`, `/api/logout`). [D-01, D-04]
3. **Profiles**: Implement Server Actions for profile CRUD. Build `/profile` page. Ensure auto-creation of profiles on first sign-in. [D-02, D-03]
