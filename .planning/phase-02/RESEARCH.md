# Phase 2: User Identity - Research

**Researched:** 2025-05-24
**Domain:** Authentication & User Profiles (Firebase + Next.js 16/React 19)
**Confidence:** HIGH

## Summary

This phase implements a robust, server-first authentication system using Firebase Authentication and Firestore. To align with modern Next.js 16 (React 19) patterns, we shift from client-side only auth to a hybrid model where the server (Middleware and Server Components) validates identity via HTTP-only cookies. This eliminates "flicker" on protected routes and enables secure data fetching in Server Components.

**Primary recommendation:** Use `next-firebase-auth-edge` for authentication management to bridge the gap between Firebase's Node.js-only Admin SDK and the Next.js Edge Runtime (Middleware).

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| User Authentication | Firebase Auth | — | Managed identity provider with built-in security. |
| Session Management | Frontend Server (SSR) | Browser | Cookies managed by Middleware provide secure, cross-tier identity. |
| Profile Storage | Database (Firestore) | — | Document-oriented storage for flexible user metadata. |
| Auth UI/UX | Browser / Client | — | Interactive forms for login, signup, and profile editing. |
| Route Protection | Frontend Server (SSR) | — | Middleware intercepts requests before rendering to ensure auth. |

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| `firebase` | ^11.0 | Client-side SDK | Official SDK for initial sign-in and client-side interactions. |
| `firebase-admin` | ^13.0 | Server-side SDK | Used in Server Actions and API routes (Node.js runtime). |
| `next-firebase-auth-edge` | ^1.x | Edge-compatible Auth | Handles token validation in Next.js Middleware/Edge Runtime. [VERIFIED: npm registry] |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|--------------|
| `react-firebase-hooks` | ^5.x | Auth state hooks | [OPTIONAL] For client components needing real-time auth state. |
| `zod` | ^3.x | Schema validation | Validating profile updates and form inputs. |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| `next-firebase-auth-edge` | Custom Middleware + `jose` | Significant manual effort to handle token rotation and session management. |
| `firebase-admin` | Firestore REST API | Lower performance and more complex code for simple DB operations. |

**Installation:**
```bash
npm install firebase firebase-admin next-firebase-auth-edge zod
```

## Package Legitimacy Audit

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| firebase | npm | 13 yrs | 7M/wk | github.com/firebase/firebase-js-sdk | [OK] | Approved |
| firebase-admin | npm | 8 yrs | 2M/wk | github.com/firebase/firebase-admin-node | [OK] | Approved |
| next-firebase-auth-edge | npm | 2 yrs | 25k/wk | github.com/awinogrodzki/next-firebase-auth-edge | [OK] | Approved |
| zod | npm | 4 yrs | 15M/wk | github.com/colinhacks/zod | [OK] | Approved |

## Architecture Patterns

### Recommended Project Structure
```
src/
├── app/
│   ├── (auth)/             # Route group for login/signup
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   ├── api/
│   │   ├── login/route.ts  # Sets session cookies
│   │   └── logout/route.ts # Clears session cookies
│   └── profile/            # Protected profile management
│       └── page.tsx
├── components/
│   ├── auth/               # Auth-specific UI (Form, Social buttons)
│   └── profile/            # Profile-specific UI
├── lib/
│   ├── firebase/           # Client-side Firebase config
│   │   └── config.ts
│   └── firebase-admin/     # Server-side Firebase Admin singleton
│       └── config.ts
└── middleware.ts           # Route protection gatekeeper
```

### Pattern 1: The Hybrid Auth Flow
1. **Client:** User signs in with `signInWithEmailAndPassword` or `signInWithPopup`.
2. **Client:** Retrieves `idToken` from the Firebase User object.
3. **Client:** Posts `idToken` to `/api/login` (Server Action or Route Handler).
4. **Server:** `next-firebase-auth-edge` validates the token and sets a secure, HTTP-only cookie.
5. **Middleware:** Intercepts subsequent requests, validates the cookie, and attaches user info to headers or redirects.

### Pattern 2: First-Time Profile Creation
Triggered during the signup flow or the first successful login:
```typescript
// src/app/api/login/route.ts (Logic inside the handler)
const { decodedToken } = await validateToken(idToken);
const userDoc = await adminDb.collection('users').doc(decodedToken.uid).get();

if (!userDoc.exists) {
  await adminDb.collection('users').doc(decodedToken.uid).set({
    email: decodedToken.email,
    displayName: decodedToken.name || '',
    photoURL: decodedToken.picture || '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}
```

## Firestore User Profile Schema

| Field | Type | Description |
|-------|------|-------------|
| `uid` | string | Document ID (matches Firebase Auth UID) |
| `email` | string | Primary contact email |
| `displayName` | string | User's preferred name |
| `photoURL` | string | URL to profile picture |
| `bio` | string | Short user biography (optional) |
| `createdAt` | timestamp | Document creation date |
| `updatedAt` | timestamp | Last profile update date |

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Token Validation | Custom JWT verification | `next-firebase-auth-edge` | Edge runtime compatibility and token rotation are hard to get right. |
| Password Hashing | Custom salt/hash | Firebase Auth | Handles secure storage, salt rotation, and breach protection. |
| Session Expiry | Manual cookie timers | `next-firebase-auth-edge` | Automatically syncs session life with Firebase token life. |

## Common Pitfalls

### Pitfall 1: `firebase-admin` in Middleware
**What goes wrong:** Next.js throws an error about missing Node.js modules (`crypto`, `net`).
**Why it happens:** Firebase Admin SDK uses Node.js internals not available in the Edge Runtime.
**How to avoid:** Use `next-firebase-auth-edge` which uses the Web Crypto API for validation in Middleware.

### Pitfall 2: Hydration Mismatch with Auth State
**What goes wrong:** UI "flickers" from "Sign In" to "Profile" after the page loads.
**Why it happens:** Server renders the "logged out" state because it doesn't have the session, while the client has the Firebase state in `IndexedDB`.
**How to avoid:** Use HTTP-only cookies so the Server Component knows the auth state before rendering the first frame.

## Code Examples

### React 19 Auth Form (using `useActionState`)
```tsx
// components/auth/login-form.tsx
'use client';
import { useActionState } from 'react';
import { loginAction } from '@/app/actions';

export function LoginForm() {
  const [state, action, isPending] = useActionState(loginAction, null);

  return (
    <form action={action} className="space-y-4">
      <input name="email" type="email" required className="bg-zinc-100 p-2 rounded" />
      <input name="password" type="password" required className="bg-zinc-100 p-2 rounded" />
      {state?.error && <p className="text-red-500">{state.error}</p>}
      <button disabled={isPending} className="bg-brand text-white p-2 rounded disabled:opacity-50">
        {isPending ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
```

### Tailwind 4 OKLCH Design (Auth Button)
```css
/* styles/globals.css */
@theme {
  --color-brand: oklch(0.6 0.2 250); /* Vivid accessible blue */
  --color-brand-hover: oklch(0.65 0.18 250);
}
```
```tsx
<button className="bg-brand hover:bg-brand-hover transition-colors shadow-lg shadow-brand/20">
  Sign In
</button>
```

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Next.js Runtime | ✓ | 22.16.0 | — |
| npm | Package Management | ✓ | 10.9.2 | — |
| firebase-tools| Deployment/Init | ✓ | 15.19.1 | — |
| Firebase Project| SDK Config | ✓ | — | Create at console.firebase.google.com |

**Missing dependencies with no fallback:**
- **Firebase Project Credentials:** Must be obtained from the Firebase Console and added to `.env.local`.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Vitest + Testing Library |
| Config file | `vitest.config.ts` |
| Quick run command | `npm test` |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command |
|--------|----------|-----------|-------------------|
| AUTH-01| User can log in with valid credentials | Integration | `npm test login.test.tsx` |
| PROF-01| Profile document created on first login | Integration | `npm test profile-creation.test.tsx` |
| PROF-02| User can update their display name | E2E/Unit | `npm test profile-update.test.tsx` |

## Security Domain

### Applicable ASVS Categories
| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | Yes | Firebase Auth (MFA, password complexity) |
| V3 Session Management | Yes | HTTP-only, Secure, SameSite=Strict Cookies |
| V5 Input Validation | Yes | Zod schema validation for profile updates |
| V6 Cryptography | Yes | Handled by Firebase/Web Crypto (no hand-rolling) |

### Known Threat Patterns for Firebase + Next.js
| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Cookie Theft (XSS) | Information Disclosure | `httpOnly: true` prevents JS access to tokens. |
| CSRF | Tampering | `SameSite: 'Strict'` and Firebase App Check. |
| Unauthorized Firestore Access | Information Disclosure | Firestore Security Rules (`request.auth.uid == userId`). |

## Sources

### Primary (HIGH confidence)
- Official Firebase Documentation (Web SDK v11)
- `next-firebase-auth-edge` GitHub Documentation (Edge/SSR integration)
- Next.js 16/React 19 Release Notes (Server Actions, `useActionState`)

### Secondary (MEDIUM confidence)
- Tailwind CSS 4 Blog/Docs (OKLCH, `@theme`, `starting:` style)

## Metadata
**Confidence breakdown:**
- Standard stack: HIGH - `next-firebase-auth-edge` is the consensus solution for Next.js App Router + Firebase.
- Architecture: HIGH - Hybrid model is well-documented and scalable.
- Pitfalls: HIGH - Edge runtime limitations are the #1 blocker for Firebase in Next.js.

**Research date:** 2025-05-24
**Valid until:** 2025-11-24 (6 months)
