# Codebase Structure

**Analysis Date:** 2025-01-24

## Directory Layout

```
[project-root]/
├── public/             # Static public assets (not processed by Vite)
├── src/                # Application source code
│   ├── assets/         # Imported assets (processed by Vite)
│   ├── App.css         # Styles for App component
│   ├── App.tsx         # Main application component
│   ├── index.css       # Global styles
│   └── main.tsx        # Application bootstrap/entry point
├── .gitignore          # Git exclusion rules
├── eslint.config.js    # Linting configuration
├── index.html          # Entry HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # Main TypeScript configuration
├── tsconfig.app.json   # TypeScript config for the app
├── tsconfig.node.json  # TypeScript config for Vite/Node environment
└── vite.config.ts      # Vite build tool configuration
```

## Directory Purposes

**public/:**
- Purpose: Contains static assets that are served as-is.
- Contains: `favicon.svg`, `icons.svg`.
- Key files: `icons.svg` (SVG symbols used via `<use>` tags).

**src/:**
- Purpose: The core of the React application.
- Contains: Components, styling, and entry logic.
- Key files: `main.tsx` (renders the app), `App.tsx` (main UI logic).

**src/assets/:**
- Purpose: Contains images and SVGs that are imported into TSX files.
- Contains: `hero.png`, `react.svg`, `vite.svg`.

## Key File Locations

**Entry Points:**
- `src/main.tsx`: The TypeScript entry point that mounts React to the DOM.
- `index.html`: The HTML file that references the entry script.

**Configuration:**
- `package.json`: Project manifest with dependencies (React 19) and dev scripts.
- `vite.config.ts`: Configures the Vite dev server and build pipeline.
- `tsconfig.json` & related: Manages TypeScript compilation settings.
- `eslint.config.js`: Modern ESLint (flat config) for code quality.

**Core Logic:**
- `src/App.tsx`: The primary functional component containing the application's layout and state.

**Testing:**
- Not detected: No testing suite (e.g., Vitest, Jest) is currently configured.

## Naming Conventions

**Files:**
- React Components: PascalCase (`App.tsx`).
- Styles: PascalCase or lowercase, often matching the component (`App.css`).
- Configurations: lowercase (`vite.config.ts`, `package.json`).

**Directories:**
- Lowercase (`src`, `assets`, `public`).

## Where to Add New Code

**New Feature:**
- Primary code: Create a sub-directory in `src/` such as `src/features/` or `src/components/`.
- Tests: Add `*.test.tsx` files next to the implementation (recommended pattern).

**New Component:**
- Implementation: `src/components/[ComponentName].tsx`.
- Styles: `src/components/[ComponentName].css`.

**Utilities:**
- Shared helpers: `src/utils/` or `src/lib/`.

## Special Directories

**node_modules/:**
- Purpose: Project dependencies.
- Generated: Yes (via `npm install`).
- Committed: No.

**.idx/:**
- Purpose: Google IDX workspace configuration.
- Contains: `dev.nix` (environment setup).

---

*Structure analysis: 2025-01-24*
