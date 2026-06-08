# Phase 2 Validation: User Identity

## Requirements Traceability

| Requirement | Test File / Command | Wave |
|-------------|---------------------|------|
| **AUTH-01** | `npm test src/app/(auth)/auth.test.ts` | 2 |
| **PROF-01** | `npm test src/app/(auth)/auth.test.ts` (Creation) / `src/lib/actions/profile.test.ts` (Retrieval) | 2 & 3 |
| **PROF-02** | `npm test src/lib/actions/profile.test.ts` | 3 |

## Automated Checks

- **Linting**: `npm run lint` must pass after each task.
- **Build**: `npm run build` must succeed after each wave.
- **Auth Flow**: Manual verification of signup -> login -> profile access.

## Success Criteria

1. User can successfully sign up and their document is created in Firestore.
2. User can login, and a session cookie is set via `/api/login`.
3. Protected routes (e.g., `/profile`) are inaccessible without a valid session.
4. User can update their profile information and see the changes reflected.
5. `next-firebase-auth-edge` correctly validates tokens in Middleware.
