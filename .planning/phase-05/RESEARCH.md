# Phase 05: Insights & Leaderboard - Research

**Researched:** 2026-06-08
**Domain:** Gamification and Sustainability Insights
**Confidence:** HIGH

## Summary
Phase 5 focuses on the gamification of the CarbonSync platform and providing users with actionable environmental tips. The leaderboard drives engagement through competition, while the insights section provides the "knowledge" component of the core value proposition. Research confirms that simple Firestore queries are sufficient for the leaderboard MVP, and a Bento-style UI grid is the most modern and effective way to present this data.

**Primary recommendation:** Use a single Firestore query with `orderBy` for the top 10 leaderboard and implement a "Daily Tip" feature powered by a dedicated `insights` collection.

## Architectural Responsibility Map
| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Leaderboard Retrieval | API (Firestore) | Browser | Sorted retrieval of top user profiles. |
| Insights Management | API (Firestore) | — | Storage and retrieval of curated tips. |
| Ranking Logic | Browser | API (Server Aggregation) | Ranking specific users relative to others. |

## Architecture Patterns
### Leaderboard Query Pattern
```typescript
import { query, collection, orderBy, limit, getDocs } from "firebase/firestore";
const q = query(collection(db, "profiles"), orderBy("totalSavedCO2", "desc"), limit(10));
```

### Insights Data Model
```typescript
{
  title: string;
  description: string;
  category: "transport" | "energy" | "food" | "shopping" | "waste";
  impactScore: number; // 1-10
  dateAdded: Timestamp;
}
```
