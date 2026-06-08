# Phase 1 Context: Infrastructure and Tooling (React + Vite)

## Goals
Setup the foundational React + Vite environment, configure a custom Tailwind CSS 4 design system, and initialize Firebase services (Auth & Firestore) with a robust data access layer.

## Requirements
- **INFRA-01**: React + Vite scaffold established with standard project structure.
- **INFRA-02**: Tailwind CSS 4 configured with a nature-inspired design system (Primary, Earth, Sky, Surface) and Plus Jakarta Sans typography.
- **INFRA-03**: Firebase Client SDK initialized with VITE_ prefixed environment variables.
- **INFRA-04**: Core business logic for carbon footprint calculations and Firestore data access helpers implemented.

## Decisions
- **D-01**: Use React + Vite as the primary frontend framework for rapid development.
- **D-02**: Custom Tailwind theme with nature-inspired palette:
    - Primary: #2D6A4F (main), #52B788 (light), #1B4332 (dark)
    - Earth: #8B5E3C (main), #D4A574 (light), #5C3D1E (dark)
    - Sky: #0EA5E9 (main), #BAE6FD (light), #0369A1 (dark)
    - Surface: #F8FAF7 (main), #FFFFFF (card), #0F1C14 (dark)
- **D-03**: Typography set to 'Plus Jakarta Sans'.
- **D-04**: Design system uses custom CSS variables in `index.css`.
- **D-05**: Firebase Auth and Firestore initialized in `src/lib/firebase.js`.
- **D-06**: Firestore helper functions implemented to manage users, activities, goals, insights, and leaderboard.
- **D-07**: Carbon emission factors exported in `src/config/carbonFactors.js` with a centralized calculation utility.

## Strategy
1. **Scaffold & Style**: Create the Vite project, install dependencies (lucide-react, framer-motion, etc.), and configure Tailwind's theme and fonts. [D-01, D-02, D-03, D-04]
2. **Data & Logic**: Setup Firebase config with environment variable safety, implement Firestore CRUD/query helpers, and establish the CO2 calculation engine. [D-05, D-06, D-07]

## Resources
- [Tailwind config instructions](../phase-01/01-01-PLAN.md)
- [Firebase initialization requirements](../phase-01/01-02-PLAN.md)
- Carbon factors provided in directive.

## Key Files to Create/Modify
- `package.json`: Dependency management.
- `tailwind.config.js`: Custom theme.
- `src/index.css`: Global styles & variables.
- `src/lib/firebase.js`: Auth/DB initialization.
- `src/lib/firestore.js`: Data access layer.
- `src/config/carbonFactors.js`: Business logic.
- `.env.local`: Environment keys.
- `.gitignore`: Key protection.
