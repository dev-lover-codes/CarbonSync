# CarbonSync

## What This Is

CarbonSync is a Carbon Footprint Awareness Platform being built for a hackathon. It empowers users to track, understand, and reduce their environmental impact by logging activities, setting goals, and comparing their progress on a leaderboard.

## Core Value

Providing an intuitive and engaging way for users to visualize their carbon footprint and take actionable steps to reduce it.

## Requirements

### Validated

- ✓ Basic web application scaffold — existing

### Active

- [ ] User Authentication (Sign up/Login) via Firebase
- [ ] User Profile Management
- [ ] Carbon Footprint Calculation and Tracking
- [ ] Activity Logging (transport, energy, food, shopping, waste)
- [ ] Goal Setting and Tracking
- [ ] Leaderboard (Top 10 users by CO2 saved)
- [ ] Environmental Insights/Tips

### Out of Scope

- Native Mobile App — Focus is on web deployment for the hackathon.

## Context

- Being built rapidly for a hackathon.
- Pre-existing scaffold is Next.js, but the user explicitly requested migrating to a React + Vite setup.

## Constraints

- **Tech Stack**: React + Vite, Firebase Authentication, Firebase Firestore (database), Tailwind CSS, Vercel for deployment — User explicitly requested this stack.
- **Timeline**: Hackathon timeline (requires rapid development and deployment).

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Pivot from Next.js to React + Vite | User specifically requested React + Vite in their directive for the hackathon | — Pending |
| Use Firebase for Auth & DB | Fast setup, real-time capabilities, ideal for hackathons | — Pending |
| Implement custom Tailwind design system | Requested specific nature-inspired color palette (primary, earth, sky, surface) | — Pending |

---
*Last updated: 2026-06-08 after initialization*