# Phase 2: User Identity - Research (Next.js App Router)

**Researched:** 2026-06-08
**Domain:** Authentication & User Profiles (Firebase + Next.js 16 + next-firebase-auth-edge)
**Confidence:** HIGH

## Summary

This phase implements a secure, server-side authentication system for Next.js 16 using Firebase and `next-firebase-auth-edge`. This approach combines the ease of Firebase Client SDK for initial authentication with the security of server-side session cookies and Next.js Middleware.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Authentication | Firebase Auth | Client-side | ID token acquisition. |
| Session Management | Server (Cookies) | next-firebase-auth-edge | Secure, http-only cookies for SSR/RSC. |
| Data Persistence | Firestore | Admin SDK | Server-side mutations via Server Actions. |
| Middleware Auth | Next.js Edge | next-firebase-auth-edge | Fast, edge-based session verification. |

## Standard Stack

| Library | Version | Purpose |
|---------|---------|---------|
| `firebase` | ^11.x | Client-side authentication and ID token acquisition. |
| `firebase-admin` | ^13.x | Server-side data access and token verification. |
| `next-firebase-auth-edge` | ^1.x | Middleware-based session management. |
| `zod` | ^3.x | Schema validation for profile data. |

## Architecture Patterns

### Session Bridging Flow
1. User signs in via Firebase Client SDK in the browser.
2. `onIdTokenChanged` listener detects the token.
3. Client calls `/api/login` POST with the ID token.
4. `/api/login` uses `next-firebase-auth-edge` to set a secure `__session` cookie.
5. User is redirected to `/profile` or `/dashboard`.
6. Middleware intercepts requests, validates the cookie, and attaches user info to headers.

### Profile Creation
- Profile creation (PROF-01) should occur either in the `/api/login` route (checking for document existence) or via a dedicated Server Action triggered after signup.

## Security Domain
- **STRIDE**:
  - **Spoofing**: Mitigated by `next-firebase-auth-edge` signature verification.
  - **Tampering**: Cookies are HttpOnly and Signed.
  - **Information Disclosure**: Admin SDK operations restricted to server-side code.
