# Logo-Derived Color System — Design Spec

**Date:** 2026-06-13
**Status:** Approved (design), pending implementation plan
**Topic:** Recolor the ICT Awards site around the official `ICT-AWARD-Logo`, and fix the logo rendering.

---

## 1. Context & Motivation

The site currently uses a gold + flat-navy + (unused) cream palette. Two problems:

1. **The palette ignores the logo.** The logo (`Logos/ICT-AWARD-Logo.png`) has a rich color story — gold 3D "ICT" lettering, and a signature **indigo → purple → magenta → red gradient** across the "AWARD" wordmark. The site only uses the gold; the navy `#1A1A2E` is *not* a logo color at all.
2. **The logo is broken on the live site.** `Navbar`, `Footer`, and `HeroSection` reference `/logos/ICT-AWARD-2026-Logo-Light-Bg.png`, which **does not exist**. The `onError` fallback loads the *dark-background* logo instead, so a dark logo renders on light surfaces.

We will rebuild the palette around the real logo colors (chosen direction: **B — Signature Spectrum**) and fix the logo asset references.

## 2. Goals & Non-Goals

**Goals**
- Derive every brand color from `ICT-AWARD-Logo.png` (extracted hex values below).
- Keep gold as the primary/action color (already correct).
- Replace flat navy with the logo's deep indigo as the text + dark-section anchor.
- Introduce the indigo→red **signature gradient** as a controlled brand element.
- Give award groups **A–E** each a distinct color drawn from the spectrum.
- Fix the logo so the correct asset renders on light and dark surfaces.
- Centralize changes so the recolor is driven from `tailwind.config.ts` + data, not scattered hardcoded hex.

**Non-Goals**
- No dark-mode toggle (Direction C "Dark Gala" was not chosen; site stays light-based).
- No layout, typography, spacing, copy, or content changes.
- No new dependencies. No logo redesign — we swap to an existing asset.

## 3. The Palette (extracted from the logo)

All values sampled directly from `Logos/ICT-AWARD-Logo.png`.

| Role | Token | Hex |
|------|-------|-----|
| Primary / action (unchanged) | `gold` | `#F7B413` |
| — light | `gold.light` | `#FDCE62` |
| — dark | `gold.dark` | `#CF7B0E` |
| Text + darkest backgrounds | `ink` | `#1B1233` |
| Raised dark surface (hero gradient top) | `ink.light` | `#2C1A52` |
| Cool accent (logo indigo) = group A | `ink.accent` | `#4C2D75` |
| Spectrum A (indigo) | `spectrum.a` | `#4C2D75` |
| Spectrum B (purple) | `spectrum.b` | `#6E2C68` |
| Spectrum C (magenta) | `spectrum.c` | `#9B2850` |
| Spectrum D (crimson) | `spectrum.d` | `#BD203A` |
| Spectrum E (red) | `spectrum.e` | `#E0121E` |
| Urgency / live accent | `live` | `#E0121E` |
| Warm section background (promoted) | `cream` | `#FEF9EE` |
| Surfaces (kept) | `surface` / `-alt` / `-muted` | `#FFFFFF` / `#F8F9FA` / `#F1F3F5` |
| Border (kept) | `border-light` | `#E5E7EB` |
| Muted text (kept) | `text-muted` | `#6B7280` |

**Signature gradient:** `linear-gradient(90deg, #4C2D75 0%, #822B5E 42%, #BD203A 74%, #DC0E1D 100%)`

> The gradient's terminal red `#DC0E1D` (the wordmark's measured end) and the flat `spectrum.e` / `live` red `#E0121E` (the logo's dominant red) are both logo reds and intentionally near-identical. The flat token is `#E0121E`; only the gradient stop uses `#DC0E1D`.

### Naming note (collision-safety)
Tokens are namespaced `gold` / `ink` / `spectrum` / `live` to **avoid overriding Tailwind's default `indigo-*` and `red-*` scales** (the site uses default `gray-*`, so default scales must stay intact). The old `navy` token is retired and its usages migrate to `ink`.

### Target `tailwind.config.ts` colors block

```ts
colors: {
  gold:   { DEFAULT: '#F7B413', dark: '#CF7B0E', light: '#FDCE62' },
  ink:    { DEFAULT: '#1B1233', light: '#2C1A52', accent: '#4C2D75' },
  spectrum: { a: '#4C2D75', b: '#6E2C68', c: '#9B2850', d: '#BD203A', e: '#E0121E' },
  live:   '#E0121E',
  cream:  '#FEF9EE',
  surface: '#FFFFFF',
  'surface-alt': '#F8F9FA',
  'surface-muted': '#F1F3F5',
  'border-light': '#E5E7EB',
  'text-muted': '#6B7280',
  // 'navy' removed — migrated to 'ink'
},
backgroundImage: {
  'gold-gradient': 'linear-gradient(135deg, #FDCE62 0%, #F7B413 50%, #CF7B0F 100%)', // CTAs (kept)
  'spectrum-gradient': 'linear-gradient(90deg, #4C2D75 0%, #822B5E 42%, #BD203A 74%, #DC0E1D 100%)', // brand accents (new)
},
boxShadow: {
  gold: '0 4px 24px rgba(247,179,19,0.25)',       // kept
  'gold-sm': '0 2px 10px rgba(247,179,19,0.15)',  // kept
  ink: '0 10px 40px rgba(27,18,51,0.12)',         // new — elevated cards / dark sections
},
```

## 4. Role & Usage Rules

- **Gold** — primary actions, CTAs, key highlights, the existing `gold-gradient` buttons. Always **gold fill with `ink` text**; never gold text on a light background (fails contrast).
- **Ink `#1B1233`** — all body text and dark sections (hero, footer). Direct replacement for every former `navy` usage.
- **Ink-accent / indigo `#4C2D75`** — cool secondary accent; the base color of group A.
- **Signature spectrum gradient** — *brand/decorative moments only*: gradient heading words, `SectionHeading` underline rules, hero accent line, footer rule, divider variant. **Never** on long body text.
- **Category colors A–E** — badges, card top-borders/left-borders, group filters and group headers on the categories experience.
- **Live `#E0121E`** — urgency/live signals (application deadlines, "applications open"). Used sparingly.
- **Cream** — promoted from unused to the default warm section background (alternating with white).

## 5. Category Group Color System

Add a single source of truth keyed by `CategoryGroup`, using **literal Tailwind class strings** (dynamic `bg-spectrum-${group}` would be purged by JIT):

```ts
// src/data/categories.ts (or a small src/lib/groupColors.ts)
import type { CategoryGroup } from '@/types'

export const GROUP_COLOR: Record<CategoryGroup, {
  hex: string; bg: string; text: string; border: string
}> = {
  A: { hex: '#4C2D75', bg: 'bg-spectrum-a', text: 'text-spectrum-a', border: 'border-spectrum-a' },
  B: { hex: '#6E2C68', bg: 'bg-spectrum-b', text: 'text-spectrum-b', border: 'border-spectrum-b' },
  C: { hex: '#9B2850', bg: 'bg-spectrum-c', text: 'text-spectrum-c', border: 'border-spectrum-c' },
  D: { hex: '#BD203A', bg: 'bg-spectrum-d', text: 'text-spectrum-d', border: 'border-spectrum-d' },
  E: { hex: '#E0121E', bg: 'bg-spectrum-e', text: 'text-spectrum-e', border: 'border-spectrum-e' },
}
```

Category cards/badges and the `CategoriesPage` group filter read from `GROUP_COLOR[group]`. White text on these colors (A–D pass comfortably; E is borderline — use **bold/large** white text or a slightly darker red `#C20F1A` for small text on E).

## 6. Logo Fix

Current references point to a non-existent `*-Light-Bg.png`. Correct to the existing assets, per the user's instruction to use **`ICT-AWARD-Logo`**:

- Light surfaces (Navbar): `/logos/ICT-AWARD-Logo.png`
- Dark surfaces (HeroSection, Footer): `/logos/ICT-AWARD-Logo-Dark-Bg.png`
- Keep the `onError` fallback but point it at a file that exists.

Affected lines: `Navbar.tsx` (~L58/62), `Footer.tsx` (~L43/47), `HeroSection.tsx` (~L38/42).

> Assumption: using the plain `ICT-AWARD-Logo` per the user's words. The `ICT-AWARD-2026-Logo*` variants also exist and are a one-line switch if the 2026-branded mark is preferred.

## 7. Accessibility & Contrast

- `ink #1B1233` on white/cream → ~15:1 (excellent) for body text.
- Gold is a fill color only; pair with `ink` text. Never small gold text on light.
- Gradient text only for large (≥24px), bold display headings.
- White-on-category: A–D comfortable; E (`#E0121E`) ~4:1 — restrict to large/bold or use `#C20F1A` for small text.

## 8. Implementation Surface

- **`tailwind.config.ts`** — replace colors block (Section 3); add `spectrum-gradient` + `ink` shadow. *(Recolors ~110 former-navy usages once migrated.)*
- **`src/styles/globals.css`** — `body` text color `navy → ink`; add a `.text-gradient-spectrum` helper (`@apply bg-spectrum-gradient bg-clip-text text-transparent`); scrollbar stays gold.
- **`src/data/categories.ts`** (or `src/lib/groupColors.ts`) — add `GROUP_COLOR`.
- **Token migration** — mechanical `navy → ink` across the ~19 files using color classes (`text-navy`, `bg-navy`, `border-navy`, `from-/to-/via-navy`).
- **Component gradient treatment** — `GoldDivider` (add spectrum variant), `SectionHeading` (gradient underline), `HeroSection` (ink gradient bg + accent line + gradient heading word + logo fix), `Footer` (ink bg + spectrum rule + logo fix), `Navbar` (logo fix).
- **Category UI** — `CategoriesPage`, `CategoriesPreview`, category cards consume `GROUP_COLOR`.

## 9. Success Criteria

- `npm run build` passes (type-check + production build).
- No remaining `navy` token references; no references to `*-Light-Bg.png`.
- Logo renders correctly on light (Navbar) and dark (Hero/Footer) surfaces without hitting the error fallback.
- Each award group A–E displays its distinct spectrum color in the categories UI.
- Gold visuals unchanged; the signature gradient appears on headings/dividers/hero/footer.
- Visual spot-check on the dev server confirms parity with the approved mockup.

## 10. Open Questions / Assumptions

- **Logo variant:** plain `ICT-AWARD-Logo` assumed (per instruction); 2026 variant is a trivial swap.
- **Brand source of truth:** the logo; no separate external style guide to honor.
- **Base:** light backgrounds (Direction B), not dark.
- **Token rename vs. alias:** spec migrates `navy → ink` (clean semantics). If the diff proves noisy, a temporary `navy` alias pointing to `ink` is an acceptable fallback.
