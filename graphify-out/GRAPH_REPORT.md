# Graph Report - .  (2026-05-11)

## Corpus Check
- Corpus is ~5,003 words - fits in a single context window. You may not need a graph.

## Summary
- 23 nodes · 15 edges · 10 communities (6 shown, 4 thin omitted)
- Extraction: 80% EXTRACTED · 20% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Project Standards & Guidelines|Project Standards & Guidelines]]
- [[_COMMUNITY_Core Application & Development Environment|Core Application & Development Environment]]
- [[_COMMUNITY_UI Icons & Branding|UI Icons & Branding]]
- [[_COMMUNITY_Asset React Logo|Asset: React Logo]]
- [[_COMMUNITY_Asset Vite Logo|Asset: Vite Logo]]
- [[_COMMUNITY_Asset Hero Image|Asset: Hero Image]]
- [[_COMMUNITY_Asset App Favicon|Asset: App Favicon]]

## God Nodes (most connected - your core abstractions)
1. `AI Development Guidelines` - 5 edges
2. `App Component` - 4 edges
3. `Icon Sprite Sheet` - 3 edges
4. `Main Entry Point` - 2 edges
5. `React Compiler` - 2 edges
6. `Firebase Studio` - 2 edges
7. `Vite Configuration` - 1 edges
8. `ESLint Configuration` - 1 edges
9. `Index HTML` - 1 edges
10. `Project Readme` - 1 edges

## Surprising Connections (you probably didn't know these)
- `ESLint Configuration` --implements_code_quality_rules--> `AI Development Guidelines`  [INFERRED]
  /home/user/third-project-prompt/eslint.config.js → /home/user/third-project-prompt/GEMINI.md
- `AI Development Guidelines` --assumes_primary_component--> `App Component`  [EXTRACTED]
  /home/user/third-project-prompt/GEMINI.md → /home/user/third-project-prompt/src/App.tsx
- `App Component` --optimized_for_preview--> `Firebase Studio`  [INFERRED]
  /home/user/third-project-prompt/src/App.tsx → /home/user/third-project-prompt/GEMINI.md
- `AI Development Guidelines` --identifies_entry_point--> `Main Entry Point`  [EXTRACTED]
  /home/user/third-project-prompt/GEMINI.md → /home/user/third-project-prompt/src/main.tsx
- `Main Entry Point` --mounts_to_root--> `Index HTML`  [EXTRACTED]
  /home/user/third-project-prompt/src/main.tsx → /home/user/third-project-prompt/index.html

## Communities (10 total, 4 thin omitted)

### Community 0 - "Project Standards & Guidelines"
Cohesion: 0.33
Nodes (6): ESLint Configuration, Index HTML, Main Entry Point, React Compiler, AI Development Guidelines, Project Readme

### Community 1 - "Core Application & Development Environment"
Cohesion: 0.5
Nodes (4): App Component, Vite Configuration, Firebase Studio, Hot Module Replacement

### Community 2 - "UI Icons & Branding"
Cohesion: 0.5
Nodes (4): Bluesky Icon, Discord Icon, Documentation Icon, Icon Sprite Sheet

## Knowledge Gaps
- **12 isolated node(s):** `Vite Configuration`, `ESLint Configuration`, `Index HTML`, `Project Readme`, `Hot Module Replacement` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AI Development Guidelines` connect `Project Standards & Guidelines` to `Core Application & Development Environment`?**
  _High betweenness centrality (0.121) - this node is a cross-community bridge._
- **Why does `App Component` connect `Core Application & Development Environment` to `Project Standards & Guidelines`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `App Component` (e.g. with `Vite Configuration` and `Firebase Studio`) actually correct?**
  _`App Component` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Vite Configuration`, `ESLint Configuration`, `Index HTML` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._