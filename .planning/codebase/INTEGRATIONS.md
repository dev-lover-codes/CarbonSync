# External Integrations

**Analysis Date:** 2026-06-13

## Backend & Infrastructure Services

**Firebase (v10.14.1):**
- Used as the primary backend-as-a-service.
- **Client SDK:** `firebase` package installed as a primary runtime dependency.
- **Configured Components:**
  - **Firestore:** Main NoSQL database. Schemas and rules configured in `firestore.rules` and `firestore.indexes.json`. Implementation details in `src/lib/firestore.js`.
  - **Firebase Storage:** Security rules exist in `storage.rules`.
  - **Firebase Hosting:** Deployment target identified by `firebase.json` and `.firebaserc`.
- Application configuration initialized within `src/lib/firebase.js`.

**Supabase (v2.106.0 - CLI):**
- `supabase` is present strictly as a devDependency.
- *Status:* Likely utilized for parallel tooling, database prototyping, or legacy usage, as the main runtime interactions currently point toward Firebase.

## AI & Machine Learning Services

**Google Generative AI (Gemini):**
- Embedded to act as an AI Carbon Footprint Coach named "EcoBot".
- **SDK:** `@google/generative-ai` (v0.24.1).
- **Service Integration:** Coordinated through `src/services/geminiService.js`.
- **Primary Model:** `gemini-1.5-flash`.
- **Functionality includes:**
  - `getDailyTip()`: Generates highly specific, actionable carbon footprint reduction tips.
  - `getWeeklyInsight()`: Analyzes week-over-week carbon footprint trends to create personalized summaries.
  - `getChatResponse()`: A conversational endpoint answering sustainability questions using user history and data.
  - `getFootprintScore()`: Evaluates and grades monthly carbon footprints against national averages.
- **Authentication:** Authorized dynamically via an API key, checked first in `sessionStorage ('judge_gemini_key')`, falling back to `VITE_GEMINI_API_KEY`.
- **Resilience:** Features extensive offline/local fallback structures ensuring the application runs uninterrupted if the LLM API is unavailable.

## Environment Variables & Configuration

- Configurations are provided via `.env`, `.env.local`, and `.env.example`.
- **Key Variables Expected:**
  - `VITE_GEMINI_API_KEY`: Authentication for Gemini AI services.
  - `VITE_FIREBASE_*`: Standard Firebase client-side credentials.

## Deployment & Hosting Platforms

- **Primary:** Firebase Hosting (via native configuration files).
- **Secondary/Legacy Tracks:** Traces of `.netlify` / `netlify.toml` and `.vercel` / `vercel.json` exist, indicating historical migration or multi-platform readiness.
