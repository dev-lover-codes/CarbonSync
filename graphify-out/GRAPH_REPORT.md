# Graph Report - .  (2026-06-02)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 95 nodes · 85 edges · 15 communities (9 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5ba65c40`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `**AI Development Guidelines for Next.js in Firebase Studio**` - 9 edges
3. `npx` - 5 edges
4. `scripts` - 5 edges
5. `supabase` - 4 edges
6. `vercel` - 4 edges
7. `21st-dev` - 4 edges
8. `**Next.js Core Concepts (App Router)**` - 4 edges
9. `stitch` - 3 edges
10. `hooks` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (15 total, 6 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 1 - "Community 1"
Cohesion: 0.19
Nodes (13): API_KEY, STITCH_API_KEY, SUPABASE_ACCESS_TOKEN, VERCEL_ACCESS_TOKEN, 21st-dev, firebase, stitch, supabase (+5 more)

### Community 2 - "Community 2"
Cohesion: 0.15
Nodes (12): **AI Development Guidelines for Next.js in Firebase Studio**, **Automated Error Detection & Remediation**, **Code Modification & Dependency Management**, **Environment & Context Awareness**, **File-based Routing**, Firebase MCP, graphify, **Iterative Development & User Interaction** (+4 more)

### Community 3 - "Community 3"
Cohesion: 0.15
Nodes (12): dependencies, next, react, react-dom, name, private, scripts, build (+4 more)

### Community 4 - "Community 4"
Cohesion: 0.20
Nodes (10): devDependencies, eslint, eslint-config-next, supabase, tailwindcss, @tailwindcss/postcss, @types/node, @types/react (+2 more)

### Community 5 - "Community 5"
Cohesion: 0.40
Nodes (3): geistMono, geistSans, metadata

### Community 6 - "Community 6"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **65 isolated node(s):** `BeforeTool`, `STITCH_API_KEY`, `@supabase/mcp-server-supabase`, `SUPABASE_ACCESS_TOKEN`, `@modelcontextprotocol/server-vercel` (+60 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 4` to `Community 3`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **What connects `BeforeTool`, `STITCH_API_KEY`, `@supabase/mcp-server-supabase` to the rest of the system?**
  _65 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._