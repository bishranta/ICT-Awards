# Logo-Derived Color System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Recolor the ICT Awards site around the official `ICT-AWARD-Logo` (gold + indigo→red signature spectrum), retire the off-brand navy, give award groups A–E distinct colors, and fix the broken logo references.

**Architecture:** Colors are centralized in `tailwind.config.ts` and referenced by semantic token name, so most of the recolor is a token change plus a mechanical `navy → ink` rename. New `spectrum-gradient` background and `spectrum.a–e` / `live` tokens add the signature gradient and category encoding. Hero and Footer convert from light to **dark ink** sections (per approved Direction B). Category colors are applied via inline `style` from a `GROUP_COLOR` hex map to avoid Tailwind JIT purging dynamic class names.

**Tech Stack:** React 18 + TypeScript + Vite, Tailwind CSS v3 (`tailwind.config.ts`), @phosphor-icons/react.

---

## Testing approach (read first)

**There is no test framework in this repo** (confirmed in `CLAUDE.md`), and the spec forbids new dependencies. So the per-task verification gate is:

1. **`npm run build`** — runs `tsc` (type-check) + `vite build`. Must exit 0 with no TypeScript errors. This is the automated gate after every task.
2. **Targeted `grep`** — for tasks with a structural invariant (e.g. "no `navy` token remains").
3. **Visual check** — `npm run dev` → open `http://localhost:5173`, eyeball the affected page. Called out where it matters.

Do not invent a unit-test framework. "Run the build, confirm it's green, eyeball the page" *is* the test here.

## Prerequisites (do before Task 1)

- [ ] **Branch off main.** Do not commit the recolor to `main` directly.
  ```bash
  git checkout -b feat/logo-color-system
  ```
- [ ] **Note the dirty working tree.** `git status` shows pre-existing uncommitted edits to many `src/` files (and tracked `node_modules/`, `dist/`). **Confirm with the user** whether to `git stash`/commit those first so this recolor lands as clean, reviewable commits. Each task below stages **only** its own files (never `git add -A`) to avoid sweeping up unrelated changes.
- [ ] Confirm a clean baseline build: `npm run build` → expected: exits 0.

## File Structure

| File | Responsibility | Change |
|------|----------------|--------|
| `tailwind.config.ts` | All color tokens, gradients, shadows | Modify (Tasks 1, 3) |
| `src/styles/globals.css` | Base styles + `.text-gradient-spectrum` helper | Modify (Tasks 2, 4) |
| `src/data/categories.ts` | Category data + `GROUP_COLOR` map | Modify (Task 5) |
| `src/types/index.ts` | `CATEGORY_GROUPS` typing tightened to `CategoryGroup` | Modify (Task 5) |
| `src/components/ui/GoldDivider.tsx` | Divider w/ gold + spectrum variants | Modify (Task 6) |
| `src/components/ui/SectionHeading.tsx` | Spectrum gradient underline | Modify (Task 7) |
| `src/components/layout/Navbar.tsx` | Logo fix (light variant) | Modify (Task 8) |
| `src/components/home/HeroSection.tsx` | Dark ink hero + spectrum accent + dark logo | Modify (Task 9) |
| `src/components/layout/Footer.tsx` | Dark ink footer + spectrum rule + dark logo | Modify (Task 10) |
| `src/components/home/CategoriesPreview.tsx` | Per-group colors on the 5 group cards | Modify (Task 11) |
| `src/pages/CategoriesPage.tsx` | Per-group colors + gradient H1 | Modify (Task 12) |
| _~12 other files_ | navy→ink token rename only | Modify (Task 2, mechanical) |

---

### Task 1: Add new color tokens (keep `navy` as a temporary alias)

**Files:**
- Modify: `tailwind.config.ts` (full replacement)

- [ ] **Step 1: Replace the file with the new token set**

`tailwind.config.ts`:
```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#F7B413',
          dark: '#CF7B0E',
          light: '#FDCE62',
        },
        ink: {
          DEFAULT: '#1B1233', // body text + darkest backgrounds (replaces navy)
          light: '#2C1A52',   // raised dark surface (hero gradient top)
          accent: '#4C2D75',  // logo indigo = category A
        },
        spectrum: {
          a: '#4C2D75',
          b: '#6E2C68',
          c: '#9B2850',
          d: '#BD203A',
          e: '#E0121E',
        },
        live: '#E0121E', // urgency / live accent
        navy: '#1B1233', // TEMPORARY alias — removed in Task 3 after navy→ink migration
        cream: '#FEF9EE',
        surface: '#FFFFFF',
        'surface-alt': '#F8F9FA',
        'surface-muted': '#F1F3F5',
        'border-light': '#E5E7EB',
        'text-muted': '#6B7280',
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'Calibri', 'Arial', 'sans-serif'],
        display: ['"Nunito Sans"', 'Calibri', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FDCE62 0%, #F7B413 50%, #CF7B0F 100%)',
        'spectrum-gradient': 'linear-gradient(90deg, #4C2D75 0%, #822B5E 42%, #BD203A 74%, #DC0E1D 100%)',
      },
      boxShadow: {
        gold: '0 4px 24px rgba(247,179,19,0.25)',
        'gold-sm': '0 2px 10px rgba(247,179,19,0.15)',
        ink: '0 10px 40px rgba(27,18,51,0.12)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: exits 0. (`navy` still resolves via the alias, so nothing breaks yet.)

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.ts
git commit -m "feat(theme): add ink/spectrum/live tokens + spectrum gradient (navy aliased)"
```

---

### Task 2: Mechanical `navy → ink` token rename across the source

**Files:**
- Modify: every `src/` file referencing the `navy` token (~12–19 files, incl. `src/styles/globals.css`). Uses GNU `sed` (Linux).

- [ ] **Step 1: Preview every match (sanity-check they're all class names, not English copy)**

Run: `grep -rn '\bnavy\b' src`
Expected: ~110 matches, all inside `className` strings / `@apply` (e.g. `text-navy/70`, `bg-navy`, `from-navy`). If any match is body copy or alt text, exclude that file from Step 2 and edit it by hand.

- [ ] **Step 2: Rename the token in every file that uses it**

```bash
grep -rl '\bnavy\b' src | xargs sed -i -E 's/\bnavy\b/ink/g'
```

This converts `text-navy`→`text-ink`, `bg-navy`→`bg-ink`, `border-navy`→`border-ink`, `from-/to-/via-navy`→`*-ink`, and opacity variants like `text-navy/70`→`text-ink/70` (valid: `ink` has a `DEFAULT`).

- [ ] **Step 3: Verify nothing references navy anymore**

Run: `grep -rn '\bnavy\b' src ; echo "exit:$?"`
Expected: no output, `exit:1` (grep found nothing).

- [ ] **Step 4: Build**

Run: `npm run build`
Expected: exits 0. (`@apply text-ink` in `globals.css` now resolves to `ink` DEFAULT.)

- [ ] **Step 5: Commit**

```bash
git add src
git commit -m "refactor(theme): migrate navy token usages to ink"
```

---

### Task 3: Remove the temporary `navy` alias

**Files:**
- Modify: `tailwind.config.ts:21` (the alias line)

- [ ] **Step 1: Delete the alias line**

Remove this line from the `colors` block:
```ts
        navy: '#1B1233', // TEMPORARY alias — removed in Task 3 after navy→ink migration
```

- [ ] **Step 2: Verify no navy token anywhere**

Run: `grep -rn '\bnavy\b' src tailwind.config.ts ; echo "exit:$?"`
Expected: no output, `exit:1`.

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.ts
git commit -m "chore(theme): drop temporary navy alias"
```

---

### Task 4: Add the `.text-gradient-spectrum` helper

**Files:**
- Modify: `src/styles/globals.css` (append after the existing `lite-youtube` rule)

- [ ] **Step 1: Append the helper (raw CSS, with the `-webkit-` prefix Safari needs)**

Add to the end of `src/styles/globals.css`:
```css

/* Signature gradient text — for large/bold display headings only */
.text-gradient-spectrum {
  background-image: linear-gradient(90deg, #4C2D75 0%, #822B5E 42%, #BD203A 74%, #DC0E1D 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
git add src/styles/globals.css
git commit -m "feat(theme): add .text-gradient-spectrum helper"
```

---

### Task 5: Add the `GROUP_COLOR` map + tighten `CATEGORY_GROUPS` typing

**Files:**
- Modify: `src/data/categories.ts` (add import of `CategoryGroup`, add `GROUP_COLOR`, type `CATEGORY_GROUPS`)

- [ ] **Step 1: Change the import line (top of file)**

Replace:
```ts
import type { Category } from '@/types'
```
with:
```ts
import type { Category, CategoryGroup } from '@/types'
```

- [ ] **Step 2: Type `CATEGORY_GROUPS` with `CategoryGroup`**

Replace this declaration:
```ts
export const CATEGORY_GROUPS: { group: string; label: string; description: string }[] = [
```
with:
```ts
export const CATEGORY_GROUPS: { group: CategoryGroup; label: string; description: string }[] = [
```

- [ ] **Step 3: Append the `GROUP_COLOR` map at the end of the file**

```ts

/**
 * Brand color per award group, sampled from the logo's AWARD-wordmark gradient
 * (indigo → red). Applied via inline `style` to avoid Tailwind JIT purging
 * dynamic class names. Append an 8-digit alpha suffix for tints, e.g.
 * `GROUP_COLOR[g] + '1A'` ≈ 10% opacity.
 */
export const GROUP_COLOR: Record<CategoryGroup, string> = {
  A: '#4C2D75',
  B: '#6E2C68',
  C: '#9B2850',
  D: '#BD203A',
  E: '#C20F1A', // logo red, darkened from #E0121E so small label text on white passes WCAG AA
}
```

- [ ] **Step 4: Build**

Run: `npm run build`
Expected: exits 0 (no TS error indexing `GROUP_COLOR[group.group]` later, since `group` is now `CategoryGroup`).

- [ ] **Step 5: Commit**

```bash
git add src/data/categories.ts
git commit -m "feat(categories): add GROUP_COLOR map for A–E"
```

---

### Task 6: GoldDivider — add a `spectrum` variant

**Files:**
- Modify: `src/components/ui/GoldDivider.tsx` (full replacement)

- [ ] **Step 1: Replace the file**

```tsx
import clsx from 'clsx'

interface GoldDividerProps {
  className?: string
  variant?: 'gold' | 'spectrum'
}

export default function GoldDivider({ className, variant = 'gold' }: GoldDividerProps) {
  return (
    <div
      className={clsx(
        'h-px opacity-30 my-12',
        variant === 'spectrum' ? 'bg-spectrum-gradient' : 'bg-gold-gradient',
        className
      )}
    />
  )
}
```

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: exits 0 (existing `<GoldDivider />` callers still compile — `variant` defaults to `gold`).

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/GoldDivider.tsx
git commit -m "feat(ui): add spectrum variant to GoldDivider"
```

---

### Task 7: SectionHeading — spectrum gradient underline

**Files:**
- Modify: `src/components/ui/SectionHeading.tsx` (full replacement)

- [ ] **Step 1: Replace the file** (underline bar `bg-gold` → `bg-spectrum-gradient`; everything else unchanged, already on `ink` after Task 2)

```tsx
import clsx from 'clsx'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  accentWord?: string
  centered?: boolean
  dark?: boolean
  className?: string
}

export default function SectionHeading({
  title,
  subtitle,
  accentWord,
  centered = false,
  dark = false,
  className,
}: SectionHeadingProps) {
  const highlighted = accentWord
    ? title.replace(accentWord, `<span class="text-gold">${accentWord}</span>`)
    : title

  return (
    <div className={clsx(centered && 'text-center', className)}>
      <div className={clsx('w-12 h-1 bg-spectrum-gradient mb-4 rounded-full', centered && 'mx-auto')} />
      <h2
        className={clsx('text-3xl md:text-4xl font-black leading-tight', dark ? 'text-white' : 'text-ink')}
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
      {subtitle && (
        <p className={clsx('mt-4 text-lg leading-relaxed', dark ? 'text-white/70' : 'text-ink/70')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 3: Visual check**

Run `npm run dev`, open `http://localhost:5173` → every section heading's small bar is now the indigo→red gradient (was solid gold).

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/SectionHeading.tsx
git commit -m "feat(ui): spectrum gradient underline on SectionHeading"
```

---

### Task 8: Navbar — fix the logo (light-background variant)

**Files:**
- Modify: `src/components/layout/Navbar.tsx:57-64` (the `<img>` block)

- [ ] **Step 1: Replace the logo `<img>`**

Replace:
```tsx
            <img
              src="/logos/ICT-AWARD-2026-Logo-Light-Bg.png"
              alt="ICT Award 2026"
              className="h-10 lg:h-12 w-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/logos/ICT-AWARD-2026-Logo-Dark-Bg.png'
              }}
            />
```
with:
```tsx
            <img
              src="/logos/ICT-AWARD-Logo.png"
              alt="ICT Award"
              className="h-10 lg:h-12 w-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/logos/ICT-AWARD-Logo-Dark-Bg.png'
              }}
            />
```

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 3: Visual check**

`http://localhost:5173` → the navbar shows the full color `ICT-AWARD-Logo` on the white bar (no longer the dark-bg fallback). Confirm the file loads (DevTools Network: 200, not 404).

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/Navbar.tsx
git commit -m "fix(navbar): use existing ICT-AWARD-Logo asset"
```

---

### Task 9: HeroSection — dark ink hero + spectrum accent + dark logo

**Files:**
- Modify: `src/components/home/HeroSection.tsx` (full replacement)

Converts the hero from white to dark ink. Recolors the badge, countdown boxes, headline, and CTAs for a dark surface; switches to the dark-bg logo; adds a spectrum accent line; removes the unused `ArrowDown` import and the dead commented scroll-indicator block.

- [ ] **Step 1: Replace the file**

```tsx
import { Link } from 'react-router-dom'
import { useCountdown } from '@/hooks/useCountdown'

const GRAND_FINALE = new Date('2026-12-18T00:00:00')

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/5 border border-white/10 rounded-xl w-16 md:w-20 h-16 md:h-20 flex items-center justify-center backdrop-blur-sm">
        <span className="text-2xl md:text-3xl font-black text-gold tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="mt-2 text-xs text-white/50 uppercase tracking-widest font-semibold">{label}</span>
    </div>
  )
}

export default function HeroSection() {
  const { days, hours, minutes, seconds, expired } = useCountdown(GRAND_FINALE)

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-ink overflow-hidden">
      {/* Indigo glow top + warm gold glow bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% -10%, rgba(124,77,214,0.22) 0%, transparent 55%), radial-gradient(ellipse at 50% 110%, rgba(247,179,19,0.10) 0%, transparent 55%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-sm text-gold font-semibold mb-8">
          <span className="w-2 h-2 bg-gold rounded-full" />
          11th Edition · 2026
        </div>

        {/* Logo (dark-background variant) */}
        <div className="flex justify-center mb-8">
          <img
            src="/logos/ICT-AWARD-Logo-Dark-Bg.png"
            alt="ICT Award"
            className="h-20 md:h-28 w-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/logos/ICT-AWARD-Logo.png'
            }}
          />
        </div>

        {/* Spectrum accent line */}
        <div className="w-16 h-1 bg-spectrum-gradient rounded-full mx-auto mb-6" />

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
          Introducing The Biggest
          <br />
          <span className="text-gold">TECH AWARD</span>
          <span className="text-white"> OF Nepal</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          Honoring Excellence in the Technology Sector of Nepal and Beyond.
          Recognizing outstanding achievements in ICT since 2016.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/apply"
            className="bg-gold text-ink font-black px-8 py-4 rounded-full text-lg hover:bg-gold-light transition-all shadow-gold hover:scale-105 active:scale-95"
          >
            Apply Now
          </Link>
          <Link
            to="/categories"
            className="border-2 border-gold text-gold font-bold px-8 py-4 rounded-full text-lg hover:bg-gold hover:text-ink transition-all"
          >
            Explore Categories
          </Link>
        </div>

        {/* Countdown */}
        {!expired && (
          <div className="mt-14">
            <p className="text-white/50 text-sm uppercase tracking-widest font-semibold mb-4">
              Grand Finale — December 18, 2026
            </p>
            <div className="flex items-start justify-center gap-3 md:gap-5">
              <CountdownBox value={days} label="Days" />
              <span className="text-gold text-3xl font-black mt-4">:</span>
              <CountdownBox value={hours} label="Hours" />
              <span className="text-gold text-3xl font-black mt-4">:</span>
              <CountdownBox value={minutes} label="Minutes" />
              <span className="text-gold text-3xl font-black mt-4">:</span>
              <CountdownBox value={seconds} label="Seconds" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: exits 0 (note: `ArrowDown` import removed, so no unused-import concern).

- [ ] **Step 3: Visual check**

`http://localhost:5173` → hero is deep indigo-black with a soft indigo glow up top, the gold ICT mark centered, a spectrum accent line, white headline with gold "TECH AWARD", and gold countdown numbers in translucent boxes.

- [ ] **Step 4: Commit**

```bash
git add src/components/home/HeroSection.tsx
git commit -m "feat(hero): dark ink hero with spectrum accent and dark-bg logo"
```

---

### Task 10: Footer — dark ink footer + spectrum rule + dark logo

**Files:**
- Modify: `src/components/layout/Footer.tsx` (full replacement of the `Footer` component; `footerLinks` array unchanged)

Converts the footer from `surface-muted` (light) to dark ink: light text, dark-bg logo, a top spectrum rule, and one `text-live` urgency cue on "Nominations Open". Gold accents are kept.

- [ ] **Step 1: Replace the `export default function Footer()` block** (keep the `import` and `footerLinks` array above it as-is)

```tsx
export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10">
      {/* Brand spectrum rule */}
      <div className="h-1 w-full bg-spectrum-gradient" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="/logos/ICT-AWARD-Logo-Dark-Bg.png"
              alt="ICT Award"
              className="h-14 w-auto mb-4"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/logos/ICT-AWARD-Logo.png'
              }}
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Honoring Excellence in the Technology Sector of Nepal and Beyond.
              Recognizing outstanding achievements in ICT since 2016.
            </p>
            <p className="mt-4 text-xs text-white/40">
              A joint initiative of <span className="text-gold font-semibold">Living with ICT</span> & <span className="text-gold font-semibold">IFN</span>
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-gold font-bold text-sm uppercase tracking-widest mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-white/60 hover:text-gold text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} ICT Award Nepal. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            <span className="text-live font-semibold">Nominations Open:</span> <span className="text-gold font-semibold">July 17, 2026</span> &nbsp;|&nbsp; Grand Finale: <span className="text-gold font-semibold">December 18, 2026</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 3: Visual check**

`http://localhost:5173` → footer is deep ink with a thin indigo→red rule along its top edge, the gold ICT mark, light-grey links that turn gold on hover, and a red "Nominations Open:" label.

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat(footer): dark ink footer with spectrum rule and dark-bg logo"
```

---

### Task 11: CategoriesPreview — per-group colors on the 5 group cards

**Files:**
- Modify: `src/components/home/CategoriesPreview.tsx` (full replacement)

Each group card now carries its own spectrum color (top border, watermark letter, eyebrow, bullets) instead of all-gold.

- [ ] **Step 1: Replace the file**

```tsx
import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { CATEGORIES, CATEGORY_GROUPS, GROUP_COLOR } from '@/data/categories'
import SectionHeading from '@/components/ui/SectionHeading'

export default function CategoriesPreview() {
  return (
    <section className="bg-cream section-padding">
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            title="Award Categories"
            subtitle="Recognition across 5 tracks covering innovation, individuals, organizations, and regional excellence."
          />
          <Link to="/categories" className="text-gold font-bold hover:text-gold-dark flex items-center gap-2 whitespace-nowrap flex-shrink-0">
            View All Categories
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CATEGORY_GROUPS.map((group) => {
            const cats = CATEGORIES.filter((c) => c.group === group.group)
            const color = GROUP_COLOR[group.group]
            return (
              <Link
                key={group.group}
                to={`/categories#group-${group.group}`}
                className="relative bg-white border border-gray-100 border-t-4 rounded-xl p-6 group transition-all hover:shadow-ink overflow-hidden"
                style={{ borderTopColor: color }}
              >
                {/* Watermark letter */}
                <span
                  className="absolute -right-2 -bottom-4 text-8xl font-black select-none"
                  style={{ color: color + '14' }}
                >
                  {group.group}
                </span>

                <div className="relative">
                  <div className="text-xs uppercase tracking-widest font-bold mb-1" style={{ color }}>
                    Category {group.group}
                  </div>
                  <h3 className="text-ink font-bold text-sm leading-tight mb-3">
                    {group.label}
                  </h3>
                  <ul className="space-y-1">
                    {cats.slice(0, 4).map((c) => (
                      <li key={c.id} className="text-xs text-ink/50 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                        {c.name.replace(' ICT Award 2026', '').replace(' ICT Recognition 2026', '')}
                      </li>
                    ))}
                    {cats.length > 4 && (
                      <li className="text-xs font-semibold mt-1" style={{ color }}>+{cats.length - 4} more</li>
                    )}
                  </ul>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 3: Visual check**

`http://localhost:5173` (home) → the five category cards each have a distinct top-border color from indigo (A) to red (E), matching watermark letters and bullets.

- [ ] **Step 4: Commit**

```bash
git add src/components/home/CategoriesPreview.tsx
git commit -m "feat(categories): per-group spectrum colors on home preview cards"
```

---

### Task 12: CategoriesPage — per-group colors + gradient H1

**Files:**
- Modify: `src/pages/CategoriesPage.tsx` (full replacement)

Group headers and category cards adopt each group's color; the page H1 accent word uses the gradient text helper; the header rule and SectionHeading already use the spectrum gradient.

- [ ] **Step 1: Replace the file**

```tsx
import { Link } from 'react-router-dom'
import { CATEGORIES, CATEGORY_GROUPS, GROUP_COLOR } from '@/data/categories'
import { RenderIcon } from '@/lib/renderIcon'
import SectionHeading from '@/components/ui/SectionHeading'
import clsx from 'clsx'

export default function CategoriesPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-white section-padding text-center">
        <div className="container-max">
          <div className="w-12 h-1 bg-spectrum-gradient rounded-full mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-black text-ink">
            Award <span className="text-gradient-spectrum">Categories</span>
          </h1>
          <p className="mt-4 text-lg text-ink/60 max-w-2xl mx-auto">
            ICT Award 2026 recognizes excellence across 5 tracks and 16 distinct award categories covering Nepal's entire tech ecosystem.
          </p>
        </div>
      </section>

      {/* Category Groups */}
      {CATEGORY_GROUPS.map((group, gIdx) => {
        const cats = CATEGORIES.filter((c) => c.group === group.group)
        const color = GROUP_COLOR[group.group]
        return (
          <section
            key={group.group}
            id={`group-${group.group}`}
            className={clsx('section-padding', gIdx % 2 === 0 ? 'bg-cream' : 'bg-white')}
          >
            <div className="container-max">
              {/* Group Header */}
              <div className="flex items-start gap-6 mb-10">
                <div
                  className="w-16 h-16 flex-shrink-0 rounded-xl border flex items-center justify-center"
                  style={{ backgroundColor: color + '1A', borderColor: color + '33', color }}
                >
                  <span className="text-3xl font-black">{group.group}</span>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color }}>Category {group.group}</div>
                  <SectionHeading title={group.label} className="mb-2" />
                  <p className="text-ink/60 max-w-2xl">{group.description}</p>
                </div>
              </div>

              {/* Category Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {cats.map((cat) => (
                  <div
                    key={cat.id}
                    className="gold-border-card group"
                    style={{ borderLeftColor: color }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: color + '1A', color }}
                      >
                        <RenderIcon name={cat.icon ?? 'Star'} size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-ink text-lg leading-tight mb-2">
                          {cat.name}
                        </h3>
                        <p className="text-ink/60 text-sm leading-relaxed mb-3">
                          {cat.description}
                        </p>
                        {cat.eligibility && (
                          <div className="bg-surface-alt rounded-lg p-3 border border-gray-100">
                            <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color }}>Eligibility</div>
                            <p className="text-ink/50 text-xs leading-relaxed">{cat.eligibility}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Apply CTA */}
      <section className="bg-gold section-padding text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-black text-ink mb-4">Ready to Apply?</h2>
          <p className="text-ink/70 mb-8 max-w-xl mx-auto">
            Nominations open July 17, 2026. Applications are free — apply to any category you qualify for.
          </p>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 bg-ink text-white font-black px-8 py-4 rounded-full text-lg hover:bg-ink/80 transition-colors"
          >
            Apply for Nominations
          </Link>
        </div>
      </section>
    </div>
  )
}
```

> Note: `RenderIcon` no longer gets `className="text-gold"`; Phosphor icons render with `currentColor`, so they inherit the group `color` set on the wrapping chip via `style`.

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 3: Visual check**

`http://localhost:5173/categories` → "Categories" in the H1 is gradient-filled; each group header badge + eyebrow uses that group's color; category cards have a colored left border and a matching icon chip.

- [ ] **Step 4: Commit**

```bash
git add src/pages/CategoriesPage.tsx
git commit -m "feat(categories): per-group colors and gradient H1 on CategoriesPage"
```

---

### Task 13: Final verification & visual QA

**Files:** none (verification only)

- [ ] **Step 1: Clean build**

Run: `npm run build`
Expected: exits 0, no TS errors.

- [ ] **Step 2: Confirm the invariants**

```bash
grep -rn '\bnavy\b' src tailwind.config.ts ; echo "navy exit:$?"      # expect: no output, exit 1
grep -rn 'Logo-Light-Bg' src ; echo "lightbg exit:$?"                 # expect: no output, exit 1
```

- [ ] **Step 3: Visual pass across the site**

Run `npm run dev`, then walk every route at `http://localhost:5173`:
- `/` — dark hero, spectrum section underlines, colored category cards, dark footer.
- `/categories` — gradient H1, per-group header + card colors.
- `/about`, `/pre-activities`, `/winners`, `/media`, `/apply` — body text is deep ink (not the old navy), gold CTAs intact, no element rendered as dark-on-dark or invisible.
- Logo loads as a real asset (no 404 fallback) in navbar (light) and hero/footer (dark).

- [ ] **Step 4: Update the graphify graph** (per project CLAUDE.md, after modifying code)

Run: `graphify update .`
Expected: completes (AST-only, no API cost).

- [ ] **Step 5: Final commit (if graphify wrote changes)**

```bash
git add graphify-out
git commit -m "chore: update graphify graph after recolor"
```

---

## Done criteria

- `npm run build` green.
- No `navy` token; no `Logo-Light-Bg` references.
- Hero & footer are dark ink; gold preserved; spectrum gradient on headings/dividers/hero/footer; groups A–E visually distinct.
- Matches the approved Direction B mockup (`.superpowers/brainstorm/.../direction-b-system.html`).
