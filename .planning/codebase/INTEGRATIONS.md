# External Integrations

**Analysis Date:** 2025-01-24

## APIs & External Services

**AI & Machine Learning:**
- Google AI - LLM services provided via `@ai-sdk/google`
  - SDK/Client: `@ai-sdk/google`
  - Auth: Expected environment variables for Google AI (e.g., `GOOGLE_GENERATIVE_AI_API_KEY`)
- Google Stitch - Integration via `@google/stitch-sdk`
  - SDK/Client: `@google/stitch-sdk`

## Data Storage

**Databases:**
- Supabase - CLI present in `devDependencies`, indicating intended usage for database management.
  - Connection: Likely configured via Supabase environment variables.
  - Client: `supabase` CLI; project likely uses `@supabase/supabase-js` (though not yet in `package.json` dependencies).

**File Storage:**
- Not explicitly configured in code, but Supabase or Firebase (via MCP) are potential providers.

**Caching:**
- None detected (standard Next.js caching applies).

## Authentication & Identity

**Auth Provider:**
- Not detected - Likely intended to use Supabase Auth or Firebase Auth based on available tools.

## Monitoring & Observability

**Error Tracking:**
- None detected.

**Logs:**
- Standard Next.js / Vercel logging.

## CI/CD & Deployment

**Hosting:**
- Vercel - Implied by Next.js and links in `page.tsx`.
- Firebase - Integrated via MCP in `.idx/mcp.json`.

**CI Pipeline:**
- None detected.

## Environment Configuration

**Required env vars:**
- None currently specified in code, but AI and Supabase integrations will require API keys.

**Secrets location:**
- Expected in `.env` (not committed) or secret management in IDX/Vercel/Firebase.

## Webhooks & Callbacks

**Incoming:**
- None detected.

**Outgoing:**
- None detected.

---

*Integration audit: 2025-01-24*
