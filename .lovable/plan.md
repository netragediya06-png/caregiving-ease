# TanStack → React Router DOM Migration Plan

## Scope

Full removal of TanStack Start + TanStack Router. Replace with a standard React 19 + Vite 7 SPA using `react-router-dom` v6. UI, styling (Tailwind v4 via `src/styles.css`), assets, mock data, and components remain unchanged.

## File impact estimate

- **~70 files touched**
  - **61 route files** in `src/routes/` — rewritten (drop `createFileRoute`, export a plain component, replace TanStack hooks)
  - **7 shared files** using TanStack APIs — `Link`, `useNavigate`, etc. swapped to `react-router-dom`:
    - `src/components/auth/AuthShell.tsx`
    - `src/components/auth/StatusScreen.tsx`
    - `src/components/communication/ConversationList.tsx`
    - `src/components/dashboard/DashboardLayout.tsx`
    - `src/components/site/LocationSearch.tsx`
    - `src/components/site/SiteFooter.tsx`
    - `src/components/site/SiteNavbar.tsx`
  - **New files**: `index.html`, `src/main.tsx`, `src/App.tsx`, `src/router.tsx` (React Router config)
  - **Config**: `vite.config.ts` rewritten (plain `@vitejs/plugin-react`), `package.json` deps updated, `tsconfig.json` minor tweaks
- **Deleted**:
  - `src/server.ts`, `src/start.ts`, `src/routeTree.gen.ts`
  - `src/routes/__root.tsx` (replaced by `App.tsx` + layout components)
  - `src/lib/error-capture.ts`, `src/lib/error-page.ts` (SSR-only)
  - `.lovable/project.json` template marker stays as-is

## Route mapping (dots → slashes)

Flat dot filenames become nested React Router routes. Examples:

```text
index.tsx                        → path: "/"
about.tsx                        → path: "/about"
auth.login.tsx                   → path: "/auth/login"
auth.register.tsx (Outlet)       → path: "/auth/register" (layout)
auth.register.index.tsx          → index route of /auth/register
auth.register.family.tsx         → path: "family" (child)
dashboard.tsx (Outlet+layout)    → path: "/dashboard" (layout)
dashboard.index.tsx              → index of /dashboard
dashboard.bookings.$id.tsx       → path: "bookings/:id"
dashboard.caregivers.$id.tsx     → path: "caregivers/:id"
dashboard.messages.tsx           → nested layout with Outlet
dashboard.messages.index.tsx     → index (empty state)
dashboard.messages.$id.tsx       → ":id"
caregiver.*                      → mirrors dashboard.*
```

All 61 routes have clean React Router equivalents — **no route is un-migratable**.

## API replacements

| TanStack | React Router DOM |
|---|---|
| `createFileRoute("/x")({component})` | plain component export |
| `Link` from `@tanstack/react-router` | `Link` from `react-router-dom` |
| `to="/dashboard/bookings/$id"` `params={{id}}` | `to={`/dashboard/bookings/${id}`}` |
| `Route.useParams()` | `useParams()` |
| `Route.useSearch()` | `useSearchParams()` |
| `Route.useLoaderData()` | inline data lookup in component (mock-data is static imports) |
| `notFound()` throw + `notFoundComponent` | conditional render or `<Navigate to="/404">` |
| `Outlet` | `Outlet` from `react-router-dom` |
| `useNavigate()` | `useNavigate()` from `react-router-dom` |

Loaders on ~4 routes (`dashboard.bookings.$id`, `dashboard.caregivers.$id`, `dashboard.messages.$id`, `caregiver.messages.$id`) synchronously read `mock-data`. These become inline `useParams` + array lookup with a not-found fallback in the component — no React Router `loader` needed.

## New bootstrap files

**`index.html`** — standard Vite entry with `<div id="root">` and `<script type="module" src="/src/main.tsx">`.

**`src/main.tsx`** — `ReactDOM.createRoot(...).render(<BrowserRouter><App /></BrowserRouter>)` with `QueryClientProvider` and shadcn `Toaster`.

**`src/App.tsx`** — declares `<Routes>` tree mapping all 61 routes to their components with nested layouts.

**`vite.config.ts`** — replaced with:
```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
  server: { host: "::", port: 8080, strictPort: true },
});
```

## package.json changes

**Remove**: `@tanstack/react-router`, `@tanstack/react-start`, `@tanstack/router-plugin`, `@tanstack/router-devtools`, `@lovable.dev/vite-tanstack-config`, `h3`, `nitro`, related SSR deps.

**Keep**: `@tanstack/react-query` (still used), React 19, Tailwind v4, shadcn/Radix deps, lucide-react, all UI libs.

**Add**: `react-router-dom@^6`.

**Scripts**: `dev` = `vite`, `build` = `vite build`, `preview` = `vite preview`. Drop `build:dev`.

## Risks

1. **Lovable platform coupling** — The template is registered as `tanstack_start_ts_current` in `.lovable/project.json`. Removing TanStack Start means the platform's SSR/preview pipeline no longer applies. Preview should still work (Vite dev server on port 8080), but **publish/deploy behavior may change** — the built output becomes a static SPA that needs SPA fallback rewrites on whatever host serves it. Lovable's hosting should handle this, but it's untested against a non-TanStack template.
2. **Head metadata dropped** — TanStack's `head()` per-route metadata is not replicated. Titles/OG tags fall back to a single `index.html` `<title>`. Can be re-added later with `react-helmet-async` if needed.
3. **`routeTree.gen.ts` regeneration** — no longer exists; nothing will regenerate it. Fine, but any tooling expecting it breaks.
4. **Type-safe `Link` lost** — React Router DOM's `Link` accepts any string. Broken links become runtime 404s instead of typecheck errors.
5. **No SSR** — first paint becomes fully client-rendered. For this authenticated-heavy app, no practical impact.
6. **Search param validation** — `validateSearch` on `auth.registration-success` is replaced with a manual `useSearchParams().get("role")` read.

## Un-migratable pages

**None.** Every one of the 61 routes maps cleanly. The 4 routes with loaders read from static `mock-data.ts` imports and convert to inline lookups.

## Execution order

1. Update `package.json` deps + `bun install`.
2. Write `index.html`, `vite.config.ts`, `src/main.tsx`, `src/App.tsx`, new `src/router.tsx`.
3. Rewrite all 61 route files (drop `createFileRoute`, swap hooks).
4. Update 7 shared components' imports.
5. Delete `src/server.ts`, `src/start.ts`, `src/routeTree.gen.ts`, `src/routes/__root.tsx`, SSR helpers in `src/lib/`.
6. Verify build + dev.

## Verification

- `bun install` succeeds
- `bun run build` succeeds (no TS errors)
- Dev server serves `/`, `/auth/login`, `/dashboard`, `/dashboard/bookings/BK-10241`, `/caregiver/messages/c-1` — all render identically to before
- Sidebar/nav Links navigate without full reload

---

**This is a substantial migration (~70 files). Confirm to proceed and I'll execute in one pass.**
