<!-- refreshed: 2025-05-14 -->
# Architecture

**Analysis Date:** 2025-05-14

## System Overview

```text
┌─────────────────────────────────────────────────────────────┐
│                       Routing & UI Layer                    │
│                        (Next.js App)                        │
├──────────────────┬──────────────────┬───────────────────────┤
│    Root Layout   │    Home Page     │    Global Styles      │
│`src/app/layout.tsx`│`src/app/page.tsx`│`src/app/globals.css` │
└────────┬─────────┴────────┬─────────┴──────────┬────────────┘
         │                  │                     │
         ▼                  ▼                     ▼
┌─────────────────────────────────────────────────────────────┐
│                    Next.js Framework                         │
│         (React 19, Next.js 16)                              │
└─────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│  Deployment / Runtime                                       │
│  (Vercel / Node.js)                                         │
└─────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| Root Layout | Defines HTML structure, fonts, and global metadata | `src/app/layout.tsx` |
| Home Page | The main entry point for the root route `/` | `src/app/page.tsx` |
| Global Styles | Tailwind CSS directives and global resets | `src/app/globals.css` |

## Pattern Overview

**Overall:** Next.js App Router Architecture

**Key Characteristics:**
- **Server Components by Default:** Leverages React Server Components for better performance and SEO.
- **File-based Routing:** Routing is defined by the directory structure within `src/app`.
- **Atomic CSS:** Uses Tailwind CSS (v4) for styling.

## Layers

**UI Layer (src/app):**
- Purpose: Handles routing, layout, and UI rendering.
- Location: `src/app`
- Contains: Page components, layouts, and global styles.
- Depends on: Next.js and React libraries.
- Used by: End users via the browser.

## Data Flow

### Primary Request Path

1. **Request Received** — The browser requests the root URL.
2. **Layout Rendering** (`src/app/layout.tsx`) — The RootLayout wraps the request.
3. **Page Rendering** (`src/app/page.tsx`) — The Home component is rendered within the layout.

## Key Abstractions

**Layouts:**
- Purpose: Shared UI across multiple pages.
- Examples: `src/app/layout.tsx`
- Pattern: Nested layouts (currently only root).

## Entry Points

**Web Entry Point:**
- Location: `src/app/page.tsx`
- Triggers: Accessing `/`
- Responsibilities: Renders the home page UI.

## Architectural Constraints

- **Single Entry Point:** The application is currently a single-page site at the root.
- **Framework Locked:** Heavily dependent on Next.js 16 and React 19 features.

## Anti-Patterns

*Not detected in the current minimal scaffold.*

## Error Handling

**Strategy:** Default Next.js error handling.

**Patterns:**
- No custom `error.tsx` or `not-found.tsx` files detected yet.

## Cross-Cutting Concerns

**Logging:** None implemented.
**Validation:** None implemented.
**Authentication:** None implemented (Supabase mentioned in devDependencies but not integrated).

---

*Architecture analysis: 2025-05-14*
