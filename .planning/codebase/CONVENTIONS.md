# Coding Conventions

**Analysis Date:** 2026-06-02

## Naming Patterns

**Files:**
- Route segments use standard Next.js names: `page.tsx`, `layout.tsx` in `src/app/`.
- Global styles in `src/app/globals.css`.

**Functions:**
- React components use PascalCase: e.g., `RootLayout`, `Home` in `src/app/layout.tsx` and `src/app/page.tsx`.
- Standard functions use camelCase.

**Variables:**
- Configuration and local variables use camelCase: e.g., `geistSans`, `geistMono` in `src/app/layout.tsx`.
- CSS variables use kebab-case: e.g., `--font-geist-sans`, `--background`.

**Types:**
- Interfaces and types are not explicitly defined in many places yet, but follow standard TypeScript conventions (PascalCase).
- Use of `Metadata` from `next`.

## Code Style

**Formatting:**
- No explicit Prettier or Biome configuration detected.
- Uses standard Next.js/React formatting (2 spaces, semi-colons).

**Linting:**
- ESLint is configured in `eslint.config.mjs`.
- Uses `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.

## Import Organization

**Order:**
1. Framework imports (e.g., `next`, `react`).
2. Local components and utilities.
3. Assets and styles (e.g., `./globals.css`).

**Path Aliases:**
- `@/*` maps to `./src/*` as defined in `tsconfig.json`.

## Error Handling

**Patterns:**
- No custom error handling patterns detected yet.
- Expected to use Next.js `error.tsx` for route-level error boundaries.

## Logging

**Framework:** console

**Patterns:**
- No explicit logging patterns or frameworks detected.

## Comments

**When to Comment:**
- Minimal commenting observed in existing files.

**JSDoc/TSDoc:**
- Not currently used in the core files.

## Function Design

**Size:**
- Components are kept focused. `RootLayout` and `Home` are relatively small.

**Parameters:**
- Uses object destructuring for props: e.g., `{ children }: Readonly<{ children: React.ReactNode; }>` in `RootLayout`.

**Return Values:**
- Components return JSX/TSX.

## Module Design

**Exports:**
- Default exports are used for Next.js pages and layouts.

**Barrel Files:**
- Not detected in the current structure.

---

*Convention analysis: 2026-06-02*
