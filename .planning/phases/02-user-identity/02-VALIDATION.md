# Phase 2 Validation: User Identity

## Requirements Traceability

| Requirement | Test File / Command | Wave |
|-------------|---------------------|------|
| **AUTH-01** | `npm test src/contexts/AuthContext.test.jsx` | 2 |
| **PROF-01** | `npm test src/contexts/AuthContext.test.jsx` | 2 |
| **PROF-02** | `npm test src/contexts/CarbonContext.test.jsx` | 2 |

## Automated Checks

- **Vitest**: All unit tests must pass: `npm test`.
- **Linting**: `npm run lint` must pass after each task.
- **Build**: `npm run build` must succeed after each wave.

## Success Criteria

1. **Authentication (AUTH-01)**:
   - Users can sign up with email/password.
   - Users can sign in with Google.
   - Users can log out.
   - Authentication state persists across page refreshes.
2. **Profiles (PROF-01)**:
   - A Firestore document in the `users` collection is created automatically on signup.
   - User profile data (name, level, etc.) is correctly fetched and available in `AuthContext`.
3. **Onboarding (PROF-02)**:
   - The onboarding wizard correctly saves preferences to Firestore.
   - `onboardingComplete` flag is updated to `true` upon finishing.
4. **Routing & Layout**:
   - Protected routes redirect unauthenticated users to `/login`.
   - Users who haven't finished onboarding are redirected to `/onboarding`.
   - The navigation sidebar is visible on all protected pages.
5. **UI Components**:
   - All 8 components in `src/components/ui/` are functional and follow the design system.
