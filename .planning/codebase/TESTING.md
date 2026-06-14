# Testing Strategy

## Current State
- **Automated Tests**: There are currently **no automated tests** (unit, integration, or end-to-end) implemented in the codebase.
- **Frameworks**: The `package.json` does not include testing frameworks like Jest, Vitest, React Testing Library, Cypress, or Playwright. There are no test scripts defined (e.g., `npm run test`).
- **Validation approach**: Quality assurance is entirely manual and relies heavily on running the local development server (`npm run dev`) and checking visual outputs and interactions directly in the browser. 

## Analysis
The lack of tests aligns with a highly iterative, visual-first prototyping approach (often managed through Firebase Studio and visual previews). The application makes extensive use of `@react-three/fiber` for 3D elements, which are notoriously difficult to test using traditional DOM-based test runners like Jest, making manual visual testing the pragmatic approach for the current phase.

## Future Recommendations for Quality Assurance
As the application scales, introducing an automated testing layer would help maintain quality:

1. **Unit Testing (Vitest + React Testing Library)**
   - **Why**: Vitest is a natural fit since the project already uses Vite.
   - **Focus**: Test core utility functions, Firebase data transformers, and standard 2D React UI components.
   - **Zustand Store**: The business logic inside `src/store/useStore.js` (such as calculating carbon footprints and points) should be unit-tested by mocking Firebase endpoints.

2. **Testing 3D Components**
   - Components interacting with the React Three Fiber canvas are complex to test. If behavior needs to be validated, consider using `@react-three/test-renderer` to verify scene graphs programmatically without a real WebGL context.
   - For visual regressions, consider snapshot testing or specialized tools like Percy.

3. **End-to-End (E2E) Testing**
   - Incorporating Cypress or Playwright would be ideal to simulate complete user flows (e.g., completing the onboarding flow, logging a carbon action, and checking if streaks and points update). 
   - E2E tests could be configured to run against the Firebase Local Emulator Suite to avoid polluting the production database.
