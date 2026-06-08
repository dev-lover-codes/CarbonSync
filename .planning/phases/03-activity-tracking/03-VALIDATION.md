# Phase 3: Activity Tracking - Validation

**Phase Goal:** Allow users to log environmental activities and calculate CO2 impact.

## Validation Strategy

This phase uses a multi-layered validation strategy to ensure calculation accuracy, data integrity, and UI usability.

### 1. Calculation Logic (TDD)
- **Tool:** Vitest
- **Target:** `src/lib/calculations.ts`
- **Criteria:**
    - Accuracy against `carbon-footprint` emission factors.
    - Correct handling of SI conversions (km -> m, kWh -> J).
    - Graceful handling of invalid or edge-case inputs (negative values, zero, unknown modes).

### 2. Schema Validation
- **Tool:** Zod / TypeScript
- **Target:** `src/types/activities.ts`
- **Criteria:**
    - All activity categories (transport, energy, food, shopping, waste) have strict schemas.
    - TypeScript types correctly reflect the validated schemas.
    - Form data is validated before processing.

### 3. Data Persistence (Integration)
- **Tool:** Firestore Emulator / Manual Verification
- **Target:** `src/lib/activities.ts`
- **Criteria:**
    - Activities are saved to the correct per-user sub-collection: `users/{userId}/activities`.
    - `serverTimestamp()` is used for `createdAt`.
    - Fetching logic correctly orders by `timestamp` DESC.

### 4. UI/UX Verification
- **Tool:** Manual Preview / Storybook (optional)
- **Target:** `src/components/activities/`
- **Criteria:**
    - Dynamic form correctly switches fields based on selected category.
    - CO2e is calculated and displayed in real-time as user fills the form.
    - Success/Error messages are displayed after submission.
    - Recent activities list renders with icons and formatted dates.

## Key Performance Indicators (KPIs)
- **Accuracy:** CO2 calculation matches library output exactly.
- **Latency:** Calculation feedback in UI is near-instant (< 100ms).
- **Integrity:** No data is saved to Firestore without valid `userId` and `co2e`.

## Verification Checklist

- [ ] All Vitest unit tests pass.
- [ ] `npm run lint` passes without errors.
- [ ] Manual test: Log transport activity (Car, 10km) -> Check Firestore -> Verify CO2e ~1.7kg.
- [ ] Manual test: Log energy activity (100kWh Electricity) -> Check Firestore -> Verify CO2e ~30kg.
- [ ] `blueprint.md` is updated with Phase 3 features.
