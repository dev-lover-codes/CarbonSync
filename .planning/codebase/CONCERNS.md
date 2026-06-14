# Codebase Concerns Report

## 1. Architectural Smells & Technical Debt

* **Parallel UI Systems & Dead Code**: The application imports `react-router-dom` and maintains a complete suite of 2D React pages (`src/pages/*.jsx`). However, routing is actually handled via a Zustand store (`useStore.js` -> `currentPage`), which dynamically mounts 3D scenes within a single `Scene.jsx` canvas. This renders the entire 2D page suite as dead code, breaks standard browser navigation (no URLs, history, or deep linking), and severely harms SEO/accessibility.
* **Split-Brain Database Models**: There are two disparate implementations for tracking user carbon activities:
  * `src/utils/firestoreHelpers.js` writes to a root `/activities` collection.
  * `src/store/useStore.js` writes to a `/users/{uid}/carbonLogs` subcollection.
  This leads to fragmented data, inconsistent user stats, and duplicated logic.
* **Missing TypeScript Adoption**: Although configured for TypeScript (`main.tsx`, `vite.config.ts`, `tsconfig.json` implies), almost all source code resides in `.js` and `.jsx` files. The project abandons type safety, increasing the risk of runtime errors.
* **Conflicting Framework Artifacts**: The repository contains Vite configurations (`vite.config.ts`, `index.html`) alongside Next.js artifacts (`.next/` folder, Next.js ignores in `.gitignore`). This causes build target confusion.
* **Anomalous Dependencies**: `package.json` contains invalid or anomalous dependency versions, most notably `typescript: "^6.0.3"`, which doesn't exist yet and may cause NPM resolution failures.

## 2. Security Concerns

* **Insecure Firestore Rules**:
  * **Tips Collection**: The rule for `/tips/{tipId}` specifies `allow write: if request.auth != null;` (contradicting the "admin write" comment). Any authenticated user can overwrite or delete the entire tips database.
  * **Leaderboard Spoofing**: The `/leaderboard/{entry}` rule allows any authenticated user to write to any entry. A malicious user could easily alter other users' scores.
  * **Broken Subcollection Permissions**: `useStore.js` reads and writes to `users/{uid}/carbonLogs`, but `firestore.rules` only defines a rule for a root `/carbonLogs/{logId}` collection. Because it lacks recursive wildcards (e.g., `match /users/{userId}/carbonLogs/{logId}`), these subcollection writes will fail with permission denied errors.
* **Potential Secrets Exposure**: Both `.env` and `.env.local` are present in the repository alongside `.env.example`. While `.gitignore` attempts to exclude `.env*`, the active presence of `.env` files in the workspace suggests secrets might have been committed or are at risk of exposure.

## 3. Performance & DB Billing Issues

* **Unbounded DB Reads on Initialization**: `App.jsx` calls `seedTips()` on every client initialization. This function executes `getDocs(collection(db, "tips"))`, meaning the entire tips collection is fetched *every time any user loads the app*. This will drastically inflate Firestore read costs as traffic scales.
* **Client-Side Data Filtering**: `getUserActivities` in `firestoreHelpers.js` fetches a user's entire activity history because the Firestore query lacks time bounds or limits. It then filters the data down to the last 30 days locally on the client. As a user's history grows, this query will become significantly slower and more expensive.
* **Resource-Intensive 3D Rendering**: Using Three.js/React-Three-Fiber for all UI interactions (including simple forms, chat interfaces, and dashboards) forces constant WebGL rendering overhead. This drains battery on mobile devices and excludes users with lower-end hardware, with no 2D fallback.

## 4. Code Quality & Error Handling

* **Silent Error Swallowing**: `firestoreHelpers.js` is heavily populated with empty `catch (error) {}` blocks (e.g., in `updateUserStats`, `updateStreak`, `getLeaderboard`). Database transaction failures will fail silently, leading to corrupted state and making production debugging nearly impossible.
* **AI Error Obfuscation**: In `AICoachScene.jsx`, the exception handler for the Gemini API call completely hides the underlying error from the console, returning a generic chat message without logging the real exception context.
