# Graph Report - site  (2026-06-09)

## Corpus Check
- 129 files · ~56,314 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 746 nodes · 983 edges · 75 communities (55 shown, 20 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7d1cb668`
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
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 65|Community 65]]
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 69|Community 69]]
- [[_COMMUNITY_Community 70|Community 70]]
- [[_COMMUNITY_Community 71|Community 71]]
- [[_COMMUNITY_Community 72|Community 72]]
- [[_COMMUNITY_Community 73|Community 73]]
- [[_COMMUNITY_Community 74|Community 74]]

## God Nodes (most connected - your core abstractions)
1. `useAuth()` - 44 edges
2. `getIsMock()` - 30 edges
3. `useStore` - 24 edges
4. `Phase 6: Community & AI Intelligence - Research` - 19 edges
5. `Phase 04: Goals Management - Research` - 17 edges
6. `useCarbon()` - 15 edges
7. `Phase 03: Activity Tracking & Dashboard - Research` - 14 edges
8. `getMockStorage()` - 13 edges
9. `Architecture` - 12 edges
10. `CarbonSync Blueprint` - 11 edges

## Surprising Connections (you probably didn't know these)
- `Scene()` --calls--> `useStore`  [EXTRACTED]
  src/components/Scene.jsx → src/store/useStore.js
- `ForgotPassword()` --calls--> `useAuth()`  [EXTRACTED]
  src/pages/auth/ForgotPassword.jsx → src/contexts/AuthContext.jsx
- `Leaderboard()` --calls--> `useAuth()`  [EXTRACTED]
  src/pages/Leaderboard.jsx → src/contexts/AuthContext.jsx
- `Tips()` --calls--> `useAuth()`  [EXTRACTED]
  src/pages/Tips.jsx → src/contexts/AuthContext.jsx
- `ProtectedRoute()` --calls--> `useAuth()`  [EXTRACTED]
  src/App.jsx → src/contexts/AuthContext.jsx

## Import Cycles
- None detected.

## Communities (75 total, 20 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (44): AuthProvider(), CarbonContext, CarbonProvider(), firebaseConfig, getIsMock(), isMock, getGoals(), getInsights() (+36 more)

### Community 1 - "Community 1"
Cohesion: 0.19
Nodes (13): API_KEY, STITCH_API_KEY, SUPABASE_ACCESS_TOKEN, VERCEL_ACCESS_TOKEN, 21st-dev, firebase, stitch, supabase (+5 more)

### Community 2 - "Community 2"
Cohesion: 0.21
Nodes (13): **AI Development Guidelines for Next.js in Firebase Studio**, **AI Development Guidelines for React + Vite in Firebase Studio**, **Automated Error Detection & Remediation**, **Code Modification & Dependency Management**, **Environment & Context Awareness**, **File-based Routing**, Firebase MCP, graphify (+5 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (30): dependencies, firebase, framer-motion, @google/generative-ai, gsap, @gsap/react, leva, lucide-react (+22 more)

### Community 4 - "Community 4"
Cohesion: 0.06
Nodes (28): ForgotPassword(), calculateFootprint(), carbonFactors, useCarbon(), tips, AICoach(), QUICK_CHIPS, CATEGORY_COLORS (+20 more)

### Community 5 - "Community 5"
Cohesion: 0.05
Nodes (38): AI Chat Component with `assistant-ui`, Alternatives Considered, Anti-Patterns to Avoid, Applicable ASVS Categories, Architectural Responsibility Map, Architecture Patterns, Assumptions Log, Code Examples (+30 more)

### Community 6 - "Community 6"
Cohesion: 0.14
Nodes (13): 1. Configure Environment Variables, 2. Install Dependencies, 3. Run Locally (Dev Mode), 4. Build for Production, CarbonSync 3D — Carbon Footprint awareness Platform, Deploy on Vercel, 🎨 Design System: "Eco Cosmos", Getting Started (+5 more)

### Community 9 - "Community 9"
Cohesion: 0.06
Nodes (34): Alternatives Considered, Anti-Patterns to Avoid, Applicable ASVS Categories, Architectural Responsibility Map, Architecture Patterns, Assumptions Log, Code Examples, Common Pitfalls (+26 more)

### Community 10 - "Community 10"
Cohesion: 0.07
Nodes (28): Applicable ASVS Categories, Architectural Responsibility Map, Architecture Patterns, Assumptions Log, Code Examples, Common Pitfalls, Core, Don't Hand-Roll (+20 more)

### Community 11 - "Community 11"
Cohesion: 0.08
Nodes (24): CarbonSync Blueprint, Features (Planned), Implementation Details, Implementation Details, Implementation Details, Implementation Details, Implementation Details, Implementation Details (+16 more)

### Community 15 - "Community 15"
Cohesion: 0.20
Nodes (14): getActivities(), logActivity(), CATEGORIES, TYPE_LABELS, TYPE_UNITS, calcBikeCO2(), calcBusCO2(), calcCarCO2() (+6 more)

### Community 16 - "Community 16"
Cohesion: 0.14
Nodes (13): Anti-Patterns, Architectural Constraints, Architecture, Component Responsibilities, Cross-Cutting Concerns, Data Flow, Entry Points, Error Handling (+5 more)

### Community 17 - "Community 17"
Cohesion: 0.14
Nodes (13): Activity Tracking, AI Intelligence, Authentication, Goals, Infrastructure & Setup, Insights & Leaderboard, Out of Scope, Profiles (+5 more)

### Community 18 - "Community 18"
Cohesion: 0.15
Nodes (12): commit_docs, granularity, mode, model_profile, parallelization, ship, pr_body_sections, workflow (+4 more)

### Community 19 - "Community 19"
Cohesion: 0.18
Nodes (10): Codebase Concerns, Dependencies at Risk, Fragile Areas, Known Bugs, Missing Critical Features, Performance Bottlenecks, Scaling Limits, Security Considerations (+2 more)

### Community 20 - "Community 20"
Cohesion: 0.18
Nodes (10): Active, CarbonSync, Constraints, Context, Core Value, Key Decisions, Out of Scope, Requirements (+2 more)

### Community 21 - "Community 21"
Cohesion: 0.20
Nodes (9): Architectural Responsibility Map, Architecture Patterns, Auth Context Pattern, Phase 2: User Identity - Research (Vite + React + Firebase), Profile Creation Flow, Protected Routing, Security Domain, Standard Stack (+1 more)

### Community 22 - "Community 22"
Cohesion: 0.20
Nodes (9): Code Style, Coding Conventions, Comments, Error Handling, Function Design, Import Organization, Logging, Module Design (+1 more)

### Community 23 - "Community 23"
Cohesion: 0.20
Nodes (9): Common Patterns, Coverage, Fixtures and Factories, Mocking, Test File Organization, Test Framework, Test Structure, Test Types (+1 more)

### Community 24 - "Community 24"
Cohesion: 0.20
Nodes (9): 1.1 Firestore Social Helpers, 1.2 Community UI, 1. Social Infrastructure Validation, 2.1 AI Service Layer, 2.2 EcoCoach UI, 2. AI Intelligence Validation, 3. Integration Testing (E2E), 4. Security & Performance (+1 more)

### Community 25 - "Community 25"
Cohesion: 0.22
Nodes (8): 1. Calculation Logic (TDD), 2. Schema Validation, 3. Data Persistence (Integration), 4. UI/UX Verification, Key Performance Indicators (KPIs), Phase 3: Activity Tracking - Validation, Validation Strategy, Verification Checklist

### Community 26 - "Community 26"
Cohesion: 0.22
Nodes (8): 1. Data Layer (Unit/Integration), 2. UI Components (Unit), 3. E2E (Integration), Goal, Phase 4 Validation: Goals Management, Success Criteria, Test Suites, Verification Harness

### Community 27 - "Community 27"
Cohesion: 0.22
Nodes (8): APIs & External Services, Authentication & Identity, CI/CD & Deployment, Data Storage, Environment Configuration, External Integrations, Monitoring & Observability, Webhooks & Callbacks

### Community 28 - "Community 28"
Cohesion: 0.22
Nodes (8): AI Intelligence (EcoCoach), Decisions, Implementation Details, Personalized Insights, Phase 6 Context: Community & AI Intelligence, Phase Goal, Requirements Covered, Social & Community

### Community 29 - "Community 29"
Cohesion: 0.25
Nodes (7): Carbon Calculation Logic, Deviations from Plan, Firebase & Env Config, Firestore Data Layer, Key Changes, Phase 01 Plan 02: Setup Firebase Integration & Carbon Logic Summary, Self-Check: PASSED

### Community 30 - "Community 30"
Cohesion: 0.25
Nodes (7): Activity Tracker (src/pages/Tracker.jsx), Constraints, Dashboard (src/pages/Dashboard.jsx), Overview, Phase 03: Activity Tracking & Dashboard, Requirements, Technical Implementation

### Community 31 - "Community 31"
Cohesion: 0.25
Nodes (7): Configuration, Frameworks, Key Dependencies, Languages, Platform Requirements, Runtime, Technology Stack

### Community 32 - "Community 32"
Cohesion: 0.25
Nodes (7): Codebase Structure, Directory Layout, Directory Purposes, Key File Locations, Naming Conventions, Special Directories, Where to Add New Code

### Community 33 - "Community 33"
Cohesion: 0.25
Nodes (7): Decisions, Goals, Key Files to Create/Modify, Phase 1 Context: Infrastructure and Tooling (React + Vite), Requirements, Resources, Strategy

### Community 34 - "Community 34"
Cohesion: 0.25
Nodes (7): 1. Data Layer Verification, 2. Leaderboard Query Verification, 3. UI Responsiveness, 4. End-to-End Integration, Goal, Phase 05 Validation Plan, Test Cases

### Community 35 - "Community 35"
Cohesion: 0.25
Nodes (7): Phase 1: Infrastructure and Tooling, Phase 2: User Identity, Phase 3: Activity Tracking, Phase 4: Goals Management, Phase 5: Insights & Leaderboard, Phase 6: Community & AI Intelligence, Roadmap: CarbonSync

### Community 36 - "Community 36"
Cohesion: 0.29
Nodes (6): Constraints, Goal, Phase 4 Context: Goals Management, Precursors, Research References, Scope

### Community 37 - "Community 37"
Cohesion: 0.29
Nodes (6): Architectural Responsibility Map, Architecture Patterns, Insights Data Model, Leaderboard Query Pattern, Phase 05: Insights & Leaderboard - Research, Summary

### Community 38 - "Community 38"
Cohesion: 0.33
Nodes (5): Goal, Phase 05: Insights & Leaderboard - Context, Requirements Covered, Scope, Technical Constraints

### Community 39 - "Community 39"
Cohesion: 0.40
Nodes (4): Automated Checks, Phase 2 Validation: User Identity, Requirements Traceability, Success Criteria

### Community 40 - "Community 40"
Cohesion: 0.50
Nodes (3): Reference current plan 01 output if needed, STRIDE Threat Register, Trust Boundaries

### Community 41 - "Community 41"
Cohesion: 0.50
Nodes (3): Reference Phase 1 lib for Firebase/Carbon logic, STRIDE Threat Register, Trust Boundaries

### Community 42 - "Community 42"
Cohesion: 0.50
Nodes (3): Active Phase State, Next Action, Project State

### Community 64 - "Community 64"
Cohesion: 0.12
Nodes (10): AICoachScene, AuthScene, DashboardScene, GoalsScene, InsightsScene, LandingScene, LeaderboardScene, OnboardingScene (+2 more)

### Community 66 - "Community 66"
Cohesion: 0.26
Nodes (8): BottomNav3D(), NavBar3D(), Portal3D(), AuthScene(), OnboardingScene(), TrackerScene(), AuthSync(), useStore

### Community 71 - "Community 71"
Cohesion: 0.11
Nodes (18): devDependencies, autoprefixer, eslint, eslint-config-next, eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-react-refresh, postcss (+10 more)

### Community 72 - "Community 72"
Cohesion: 0.18
Nodes (7): Login(), Signup(), useAuth(), AppLayout(), navItems, Auth(), LeaderboardScene()

### Community 73 - "Community 73"
Cohesion: 0.35
Nodes (6): AuthContext, createUserProfile(), getLeaderboard(), getUserProfile(), updateUserProfile(), Leaderboard()

### Community 74 - "Community 74"
Cohesion: 0.29
Nodes (6): child, __dirname, modifiedArgs, projectRoot, rawArgs, vitePath

## Knowledge Gaps
- **394 isolated node(s):** `BeforeTool`, `mode`, `granularity`, `parallelization`, `commit_docs` (+389 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **20 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useAuth()` connect `Community 72` to `Community 0`, `Community 65`, `Community 66`, `Community 4`, `Community 69`, `Community 68`, `Community 73`, `Community 15`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Why does `useStore` connect `Community 66` to `Community 64`, `Community 65`, `Community 68`, `Community 69`, `Community 70`, `Community 73`, `Community 15`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **Why does `getIsMock()` connect `Community 0` to `Community 73`, `Community 15`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **What connects `BeforeTool`, `mode`, `granularity` to the rest of the system?**
  _394 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07402031930333818 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.059887005649717516 - nodes in this community are weakly interconnected._