# Codebase Structure

**Analysis Date:** 2025-05-14

## Directory Layout

```
[project-root]/
├── public/             # Static assets (SVGs, icons)
├── src/                # Source code
│   └── app/            # Next.js App Router (pages, layouts, styles)
├── graphify-out/       # Knowledge graph and project analysis output
├── .idx/               # IDX environment configuration
├── .planning/          # GSD planning and codebase mapping (this directory)
├── next.config.ts      # Next.js configuration
├── package.json        # Dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## Directory Purposes

**src/app/:**
- Purpose: Root of the application routing and UI components.
- Contains: Layouts, pages, and global CSS.
- Key files: `layout.tsx`, `page.tsx`, `globals.css`.

**public/:**
- Purpose: Static assets served by the application.
- Contains: SVG logos and default Next.js assets.

**graphify-out/:**
- Purpose: Contains the knowledge graph generated for the codebase.
- Contains: `graph.json`, `GRAPH_REPORT.md`.

## Key File Locations

**Entry Points:**
- `src/app/page.tsx`: The home page of the application.
- `src/app/layout.tsx`: The root layout wrapping all pages.

**Configuration:**
- `next.config.ts`: Next.js specific settings.
- `package.json`: Project dependencies and scripts.
- `tsconfig.json`: TypeScript compiler settings and path aliases.
- `postcss.config.mjs`: PostCSS configuration for Tailwind.

**Core Logic:**
- `src/app/page.tsx`: Currently contains the primary UI and layout logic.

## Naming Conventions

**Files:**
- Next.js reserved filenames: `layout.tsx`, `page.tsx`.
- PascalCase for components (none separated yet).

**Directories:**
- lower-case for route segments (none yet besides `app`).

## Where to Add New Code

**New Feature:**
- Primary code: Create a new directory under `src/app` for a new route (e.g., `src/app/dashboard/page.tsx`).
- Tests: No testing framework detected yet.

**New Component/Module:**
- Implementation: Recommended to create a `src/components` directory.

**Utilities:**
- Shared helpers: Recommended to create a `src/lib` directory.

## Special Directories

**graphify-out/:**
- Purpose: Knowledge graph metadata.
- Generated: Yes.
- Committed: Yes (based on existence in the tree).

---

*Structure analysis: 2025-05-14*
