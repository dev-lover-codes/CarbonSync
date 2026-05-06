# Technology Stack

**Analysis Date:** 2026-05-06

## Languages

**Primary:**
- TypeScript ~6.0.2 - Used for application logic and components (`src/**/*.tsx`, `src/**/*.ts`)

**Secondary:**
- CSS - Used for styling (`src/**/*.css`)
- HTML5 - Application entry point (`index.html`)

## Runtime

**Environment:**
- Node.js 22 (specified in `.idx/dev.nix`)

**Package Manager:**
- npm - Managed via `package.json`
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- React 19.2.5 - UI Library
- Vite 8.0.10 - Build tool and development server

**Testing:**
- Not detected - No testing framework found in `package.json`

**Build/Dev:**
- TypeScript ~6.0.2 - Compiler
- ESLint 10.2.1 - Linting

## Key Dependencies

**Critical:**
- `react` 19.2.5 - Core UI logic
- `react-dom` 19.2.5 - Web rendering for React

**Infrastructure:**
- `@vitejs/plugin-react` 6.0.1 - Vite plugin for React support

## Configuration

**Environment:**
- Configured via `.idx/dev.nix` for workspace setup.
- Vite configured in `vite.config.ts`.

**Build:**
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` - TypeScript configuration.
- `eslint.config.js` - Linting configuration.

## Platform Requirements

**Development:**
- Node.js 22+
- npm

**Production:**
- Standard web environment (Vite build output)

---

*Stack analysis: 2026-05-06*
