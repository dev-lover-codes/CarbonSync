# Directory Structure

The repository follows a feature-grouped and role-based structure tailored for a React Three Fiber project.

## Root Directory (`/home/user/site/`)
- `src/` - The main application source code.
- `public/` - Static assets served directly by Vite.
- `scripts/` - Utility scripts (e.g., `dev-wrapper.js` for Vite initialization).
- `.planning/` - Contains documentation and architectural notes generated during development.
- `firebase.json` / `firestore.rules` / `storage.rules` - Firebase configuration and security rules.
- `vite.config.ts`, `tailwind.config.js`, `package.json` - Build tool configurations.

## Source Directory (`src/`)

### `components/`
Contains reusable UI and 3D components, primarily built with `@react-three/fiber` and `@react-three/drei`.
- Custom 3D geometries and materials (e.g., `GlassPanel.jsx`, `FloatingCard.jsx`, `Button3D.jsx`).
- 3D Data Visualizations (e.g., `AreaChart3D.jsx`, `BarChart3D.jsx`, `PieChart3D.jsx`).
- Global Scene layout (e.g., `Scene.jsx` which holds lighting, post-processing, and the main Canvas).
- Subfolders like `common/`, `layout/`, and `ui/` for further organization.

### `pages/`
Contains the "Scenes" that represent full application pages or views. Since the app is a single WebGL canvas, these are technically complex 3D groups rather than HTML pages.
- e.g., `DashboardScene.jsx`, `LandingScene.jsx`, `AICoachScene.jsx`, `TrackerScene.jsx`.

### `store/`
Global state management.
- `useStore.js`: The Zustand store responsible for routing (`currentPage`), real-time Firebase subscriptions, derived carbon metrics, and chat history.

### `contexts/`
React Context providers for scope-based state that doesn't fit globally in Zustand.
- `AuthContext.jsx`: Manages the Firebase authentication listener and current user profile session.
- `CarbonContext.jsx`: Dedicated context for specific carbon tracking flows.

### `lib/`
Initialization and raw wrappers for external platforms.
- `firebase.js`: Initializes the Firebase App, Auth, and Firestore instances using environment variables.
- `firestore.js`: Contains pure wrapper functions for Firestore CRUD operations (e.g., `createUserProfile`, `logActivity`).

### `services/`
High-level service abstractions for third-party APIs.
- `geminiService.js`: Encapsulates all interactions with the Google Gemini API, including prompt construction and JSON parsing for AI-driven insights and coaching.

### `utils/`
Helper functions and pure logic.
- `carbonCalculator.js`: Logic for calculating carbon emission impacts based on activity types.
- `firestoreHelpers.js`: Utility scripts for database seeding and complex migrations.
- `animations.js`, `helpers.js`: Reusable math and animation timing constants.

### `shaders/`
Custom GLSL shader code used for advanced 3D visual effects.
- e.g., `aurora.frag`, `neonGlow.vert`, used in custom Three.js `ShaderMaterial` implementations.

### `config/` & `data/`
- Static configurations and JSON/JS data constants (e.g., lists of achievable badges, base carbon metrics by activity).

## Entry Points
- `main.tsx`: Standard React 18 DOM entry point.
- `App.jsx`: The root component wrapping the application in providers (`AuthProvider`) and rendering the central `<Scene />` component.
