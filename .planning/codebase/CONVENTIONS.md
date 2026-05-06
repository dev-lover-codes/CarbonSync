# Coding Conventions

**Analysis Date:** 2025-05-14

## Naming Patterns

**Files:**
- PascalCase for React components: `src/App.tsx`
- camelCase for entry points and configuration: `src/main.tsx`, `vite.config.ts`, `eslint.config.js`

**Functions:**
- PascalCase for React functional components: `function App() {}`
- camelCase for hooks and event handlers: `setCount`, `onClick`

**Variables:**
- camelCase for state and local variables: `const [count, setCount] = useState(0)`

**Types:**
- PascalCase (standard TypeScript convention observed in configuration and inferred from project structure)

## Code Style

**Formatting:**
- Integrated with Vite and ESLint. No explicit Prettier configuration detected, but follows standard JSX/TSX formatting.

**Linting:**
- ESLint 10.x using Flat Config (`eslint.config.js`)
- Rulesets:
  - `@eslint/js` recommended
  - `typescript-eslint` recommended
  - `eslint-plugin-react-hooks` flat recommended
  - `eslint-plugin-react-refresh` vite config

## Import Organization

**Order:**
1. React and standard library imports: `import { useState } from 'react'`
2. Asset imports: `import reactLogo from './assets/react.svg'`
3. Style imports: `import './App.css'`
4. Component imports: `import App from './App.tsx'`

**Path Aliases:**
- None detected in `tsconfig.json` or `vite.config.ts`. Relative paths are used: `./assets/react.svg`.

## Error Handling

**Patterns:**
- No explicit error boundaries or global error handling patterns detected in the minimal codebase. Standard JavaScript/TypeScript error handling applies.

## Logging

**Framework:** `console`

**Patterns:**
- No logging patterns observed in the current source code.

## Comments

**When to Comment:**
- Minimal commenting observed. Comments are used to describe the purpose of specific lines in the template (e.g., `/* Bundler mode */` in `tsconfig.json`).

**JSDoc/TSDoc:**
- Not detected in the current source code.

## Function Design

**Size:**
- Small, single-responsibility functional components are preferred.

**Parameters:**
- Standard React props (not explicitly used in `App.tsx` but part of the framework).

**Return Values:**
- JSX for components.

## Module Design

**Exports:**
- Default exports for main components: `export default App`
- Named imports for hooks and libraries: `import { useState } from 'react'`

**Barrel Files:**
- Not used in the current structure.

---

*Convention analysis: 2025-05-14*
