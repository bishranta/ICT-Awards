---
name: design-tokens
description: ICT Awards design token reference — colors, gradients, typography, utility classes, and the rules that prevent violations (contrast failures, JIT purge, dynamic class pitfalls).
user-invocable: false
---

# ICT Awards Design Token Reference

Source of truth: `tailwind.config.ts` + `src/styles/globals.css`

---

## Color Tokens

### Gold — primary action / highlight
| Token | Hex | Use |
|-------|-----|-----|
| `gold` / `bg-gold` | `#F7B413` | CTAs, highlights, icon backgrounds |
| `gold-dark` | `#CF7B0E` | hover states |
| `gold-light` | `#FDCE62` | subtle tints |

**Rules:**
- Always pair gold fill with `text-ink` (dark text). Gold passes contrast only with dark text.
- **Never** small gold text on a light background — fails WCAG AA.
- Gold on dark (`ink`) surfaces is fine for large headings.

### Ink — body text / dark surfaces
| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#1B1233` | body text, darkest backgrounds (Hero, Footer) |
| `ink-light` | `#2C1A52` | raised dark surface (hero gradient top) |
| `ink-accent` | `#4C2D75` | logo indigo, cool accents on dark surfaces |

Hero and Footer are dark `ink` surfaces — use light text (`text-white`, `text-white/70`) on them.

### Spectrum — brand palette / category group colors
| Token | Hex | Group |
|-------|-----|-------|
| `spectrum-a` / `text-spectrum-a` | `#4C2D75` | A — Startup, Product & Innovation |
| `spectrum-b` | `#6E2C68` | B — Individual Excellence |
| `spectrum-c` | `#9B2850` | C — Organization & Enterprises |
| `spectrum-d` | `#BD203A` | D — International |
| `spectrum-e` | `#C20F1A` | E — Province Recognition |

### Accent & Neutrals
| Token | Hex | Use |
|-------|-----|-----|
| `live` | `#C20F1A` | urgency / live accent (== `spectrum-e`) — use sparingly |
| `cream` | `#FEF9EE` | warm section background (alternates with white) |
| `surface` | `#FFFFFF` | default page background |
| `surface-alt` | `#F8F9FA` | alternating section background |
| `surface-muted` | `#F1F3F5` | stats row, muted areas |
| `border-subtle` | `#F3F4F6` | pervasive card/divider border |
| `border-light` | `#E5E7EB` | slightly stronger border |
| `border-strong` | `#D1D5DB` | timeline dots, emphasis |
| `text-muted` | `#5A6472` | secondary copy (AA-tuned) |

---

## Group Colors — CRITICAL RULE

Category groups A–E each have a brand color from `GROUP_COLOR` in `src/data/categories.ts`. These match the `spectrum` tokens but must be applied via **inline `style`**, never dynamic Tailwind classes.

```tsx
// CORRECT — inline style, JIT safe
<div style={{ borderTopColor: color, backgroundColor: color + '1A' }}>

// WRONG — JIT compiler purges dynamic class strings at build time
<div className={`bg-spectrum-${group}`}>
<div className={`border-spectrum-${group}`}>
```

The `+ '1A'` hex suffix gives ~10% opacity tint. All group hex values pass WCAG AA ≥ 4.5:1. Group E uses `#C20F1A` (unified AA-safe red) specifically so small label text on light surfaces passes contrast.

---

## Gradients

| Class | Definition | Allowed uses |
|-------|-----------|--------------|
| `bg-spectrum-gradient` | `90deg #4C2D75 → #6E2C68 → #9B2850 → #BD203A → #C20F1A` | Decorative accents only: heading underlines (`w-12 h-1`), dividers, hero/footer rules |
| `.text-gradient-spectrum` | Same gradient clipped to text | **Large/bold display headings only** — never body text, never small copy |
| `shadow-gold` | `0 4px 24px rgba(247,179,19,0.25)` | CTA buttons, featured cards |
| `shadow-gold-sm` | `0 2px 10px rgba(247,179,19,0.15)` | subtle hover states |
| `shadow-ink` | `0 10px 40px rgba(27,18,51,0.12)` | modal / elevated surfaces |

**Never use the spectrum gradient on body text** — it fails contrast on white backgrounds.

---

## Typography

| Font stack | Token | Use |
|-----------|-------|-----|
| Inter → Calibri → Arial | `font-sans` | body (default) |
| Inter → Calibri → Georgia | `font-display` | display headings |

---

## Utility Classes (globals.css)

| Class | Expands to | Use |
|-------|-----------|-----|
| `.section-padding` | `px-4 sm:px-6 lg:px-8 py-16 lg:py-24` | outer padding on every `<section>` |
| `.container-max` | `max-w-7xl mx-auto` | inner content wrapper |
| `.gold-border-card` | left gold border, white bg, rounded-xl, shadow, hover shadow | highlighted list cards |
| `.text-gradient-spectrum` | spectrum gradient clipped to text | display headings only |
| `.scrollbar-none` | hides scrollbar, preserves scroll | horizontal scroll containers |
| `.icon-spectrum` | fills SVG paths with spectrum gradient via `#spectrum-gradient` SVG def | spectrum-colored icons |

---

## Animation

| Token | Definition | Use |
|-------|-----------|-----|
| `animate-fade-up` | opacity 0→1 + translateY 20px→0, 0.6s ease-out | section entry animations |
| `animate-ripple` | scale 1→2.8, opacity 0.6→0, 2s infinite | timeline highlighted node rings |

`animate-ripple` is gated by `prefers-reduced-motion` in CSS — always respect this gate.

---

## Common Patterns

```tsx
// Section scaffold
<section className="bg-surface section-padding">
  <div className="container-max">...</div>
</section>

// Alternating background
<section className="bg-surface-alt section-padding">

// Cream warm background
<section className="bg-cream section-padding">

// Dark ink surface (Hero/Footer style)
<section className="bg-ink section-padding">
  <p className="text-white/70">...</p>
</section>

// Gold CTA button
<button className="bg-gold text-ink font-bold shadow-gold hover:bg-gold-dark">

// Spectrum gradient accent bar (heading underline)
<div className="w-12 h-1 bg-spectrum-gradient rounded-full mb-4" />

// Display heading with gradient text
<h1 className="font-black text-4xl">
  Page <span className="text-gradient-spectrum">Title</span>
</h1>
```
