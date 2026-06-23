# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (localhost:5173)
npm run build     # Type-check + production build → dist/
npm run preview   # Preview the production build locally
```

No test framework is configured.

## Stack

- **React 18** + **TypeScript** via **Vite**
- **Tailwind CSS v3** for styling — config is in `tailwind.config.ts`
- **React Router v6** (browser history router, all routes in `src/App.tsx`)
- **@phosphor-icons/react** for icons (accessed through a central registry)

## Architecture

### Routing & Layout Shell

All routes are nested under a single `PageWrapper` layout (`src/components/layout/PageWrapper.tsx`), which renders `<Navbar />`, `<Outlet />`, and `<Footer />`. Routes are defined in `src/App.tsx`.

### Data Layer

All content lives as typed static arrays/objects in `src/data/`. Pages and components import directly from these files — there is no API or state management. When adding or editing content (categories, winners, stats, etc.), only the relevant `src/data/*.ts` file needs to change.

### Type Definitions

All shared TypeScript interfaces are in `src/types/index.ts` (`Category`, `Winner`, `TimelineEvent`, `FAQ`, `TvEpisode`, `PreActivity`, etc.). Data files import from there; don't define types inline.

### Icons

Icons are registered in `src/lib/renderIcon.tsx` via a `ICON_MAP` record mapping string names to Phosphor icon components. Data files reference icons by string name (e.g., `icon: 'RocketLaunch'`). To use a new icon, import it in `renderIcon.tsx` and add it to `ICON_MAP`.

Use `<RenderIcon name="..." size={} weight="..." />` (component) or `renderIcon(name, size, className)` (function returning JSX) — both are exported from `src/lib/renderIcon.tsx`.

### Component Organization

- `src/components/home/` — section components used only on the home page (hero, stats, timeline, etc.)
- `src/components/layout/` — shell components (Navbar, Footer, PageWrapper)
- `src/components/ui/` — reusable primitives (Button, SectionHeading, GoldDivider, CounterStat, YoutubeEmbed)
- `src/pages/` — one file per route; pages compose sections and pull from `src/data/`

### Path Alias

`@` resolves to `./src` (configured in `vite.config.ts`). Always use `@/...` for imports within the project.

### Logo System

Logo assets live in `public/logos/` (served at `/logos/...`; the top-level `Logos/` folder holds the originals). Each logo has two variants: `ICT-AWARD-Logo.png` (full color, for light surfaces) and `ICT-AWARD-Logo-Dark-Bg.png` (for dark surfaces). The Navbar (light) renders the light variant; the Hero and Footer (dark `ink`) render the dark variant. Each `<img>` sets an `onError` fallback to the other variant — when swapping logos, make sure `src` points at a file that actually exists in `public/logos/`.

## Design Tokens

Defined in `tailwind.config.ts`. The palette is derived from the official logo ("Direction B"):
- **`gold`** (`#F7B413`, + `gold-dark`/`gold-light`) — primary action/highlight. Use as a fill with dark (`ink`) text; never small gold text on a light background (fails contrast).
- **`ink`** (`#1B1233`, + `ink-light` `#2C1A52`, `ink-accent` `#4C2D75`) — body text and dark sections; replaced the former `navy`. The Hero and Footer are dark `ink` surfaces (light text on them).
- **`spectrum`** (`spectrum-a`…`spectrum-e`, indigo→red) — signature brand palette, and the per-group category colors.
- **`live`** (`#E0121E`) — urgency/deadline accent, used sparingly. **`cream`** (`#FEF9EE`) — warm section background (alternates with white on content sections).
- Neutrals: `surface`, `surface-alt`, `surface-muted`, `border-light`, `text-muted`.
- **Gradients**: `bg-gold-gradient` (CTAs); `bg-spectrum-gradient` (90° indigo→red — decorative brand accents only: heading underlines, dividers, hero/footer rules; never body text). **Shadows**: `shadow-gold`, `shadow-gold-sm`, `shadow-ink`.
- **Gradient text**: the `.text-gradient-spectrum` helper (in `src/styles/globals.css`) clips the spectrum gradient to text — large/bold display headings only.
- **Animation**: `animate-fade-up` (opacity + translateY, 0.6s). **Font**: Inter → Calibri → Arial (`font-sans`) / Georgia (`font-display`).

## Award Categories Structure

Categories are grouped A–E (`src/data/categories.ts`):
- **A** — Startup, Product & Innovation
- **B** — Individual Excellence
- **C** — Organization & Enterprises
- **D** — International
- **E** — Province Recognition

The `CategoriesPage` supports optional `:group` URL param to filter by group.

Each group has a brand color in `GROUP_COLOR` (`src/data/categories.ts`), spanning the indigo→red spectrum (A indigo → E red). Apply these via inline `style` (e.g. `borderTopColor: color`, `backgroundColor: color + '1A'` for a ~10% tint) — **not** dynamic Tailwind classes like `bg-spectrum-${group}`, which the JIT compiler purges. Group E uses a darkened red (`#C20F1A`) so small label text on light passes WCAG AA.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
