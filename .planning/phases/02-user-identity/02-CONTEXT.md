Continue building CarbonSync. Now build the complete Authentication system and App routing structure.

1. Create src/contexts/AuthContext.jsx:
   - Use createContext and useContext pattern
   - Wrap with Firebase onAuthStateChanged listener
   - States: currentUser, userProfile, loading
   - Functions: signup(email, password, name), login(email, password), loginWithGoogle(), logout(), updateProfile(data)
   - On signup: create user in Firebase Auth, then call createUserProfile() with { name, email, totalSaved: 0, streak: 0, level: 'Seedling', joinedAt, onboardingComplete: false }
   - Google sign-in: use GoogleAuthProvider, check if profile exists, create if not
   - Export useAuth() hook
2. Create src/contexts/CarbonContext.jsx:
   - States: activities, goals, insights, weeklyTotal, monthlyTotal, loading
   - Functions: addActivity(data), fetchActivities(), fetchGoals(), addGoal(data), toggleGoal(goalId), fetchInsights()
   - weeklyTotal and monthlyTotal computed from activities using carbonFactors
   - Auto-fetch when currentUser changes
   - Export useCarbonContext() hook
3. Create src/components/ui/ folder with these reusable components:
   Button.jsx — variants: primary (green), secondary (outline), ghost, danger. Sizes: sm, md, lg. Loading state with spinner.
   Card.jsx — clean white card with subtle shadow, rounded-2xl, padding variants.
   Input.jsx — styled input with label, error state, icon support.
   Badge.jsx — pill badges with variants: green, amber, blue, gray, red.
   Avatar.jsx — circular avatar with initials fallback and level indicator ring.
   ProgressBar.jsx — animated progress bar with percentage and color variants.
   Spinner.jsx — centered loading spinner in primary green.
   Modal.jsx — centered overlay modal. IMPORTANT: use z-index: 50, not fixed positioning issues.
4. Create src/pages/auth/ folder:
   Login.jsx — Beautiful full-page login. Left side: animated leaf/nature illustration (CSS only, no images). Right side: email/password form + Google sign-in button. Link to signup. Show errors with toast. Use framer-motion for form entrance animation.
   Signup.jsx — Same split layout. Form: name, email, password, confirm password. Show password strength indicator. On success redirect to /onboarding.
   ForgotPassword.jsx — Simple centered card. Email input. Firebase sendPasswordResetEmail.
5. Create src/pages/Onboarding.jsx — 4-step wizard:
   Step 1: "What's your biggest carbon source?" — cards to pick: Transport / Home Energy / Food / Shopping (multi-select)
   Step 2: "How do you usually commute?" — options: Car / Bus / Train / Bike / Work from home
   Step 3: "Set your first goal" — slider for target monthly CO2 reduction (10kg to 200kg), show equivalents like "= X trees planted"
   Step 4: "You're ready!" — show their personalized level (Seedling) and CTA to dashboard
   On complete: update userProfile.onboardingComplete = true, save preferences to Firestore.
6. Create src/App.jsx with React Router v6:
   Routes:
   / → redirect to /dashboard if logged in, else /login
   /login → Login page
   /signup → Signup page
   /forgot-password → ForgotPassword page
   /onboarding → Onboarding page (protected, only if !onboardingComplete)
   /dashboard → Dashboard (protected)
   /tracker → Tracker (protected)
   /insights → Insights (protected)
   /goals → Goals (protected)
   /leaderboard → Leaderboard (protected)
   /tips → Tips (protected)
   /coach → AI Coach (protected)
   /profile → Profile (protected)
   Create ProtectedRoute component: if not logged in → /login. If logged in but !onboardingComplete → /onboarding.
   Wrap entire app with: AuthProvider, CarbonProvider, Toaster (react-hot-toast), Router.
7. Create src/components/layout/AppLayout.jsx:
   - Fixed left sidebar (desktop), bottom nav (mobile)
   - Sidebar items with icons (lucide-react): Dashboard, Tracker, AI Coach, Insights, Goals, Leaderboard, Tips, Profile
   - Show user avatar, name, level badge in sidebar footer
   - Active route highlighted in primary green
   - Collapse sidebar on mobile
   - Top header bar with: page title, notification bell icon, streak counter badge