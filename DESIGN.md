---
name: ICT Awards Nepal
description: Nepal's premier annual technology recognition event — 11th edition, Grand Finale December 18, 2026
colors:
  trophy-gold: "#F7B413"
  trophy-gold-dark: "#CF7B0E"
  trophy-gold-light: "#FDCE62"
  deep-indigo-night: "#1B1233"
  indigo-night-raised: "#2C1A52"
  indigo-accent: "#4C2D75"
  spectrum-a: "#4C2D75"
  spectrum-b: "#6E2C68"
  spectrum-c: "#9B2850"
  spectrum-d: "#BD203A"
  spectrum-e: "#C20F1A"
  live-red: "#C20F1A"
  warm-stage: "#FEF9EE"
  surface: "#FFFFFF"
  surface-alt: "#F8F9FA"
  surface-muted: "#F1F3F5"
  border-subtle: "#F3F4F6"
  border-light: "#E5E7EB"
  border-strong: "#D1D5DB"
  text-muted: "#5A6472"
typography:
  display:
    fontFamily: "Nunito Sans, Calibri, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 7vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Nunito Sans, Calibri, Arial, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 900
    lineHeight: 1.2
  title:
    fontFamily: "Nunito Sans, Calibri, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Nunito Sans, Calibri, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Nunito Sans, Calibri, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.1em"
rounded:
  pill: "9999px"
  xl: "0.75rem"
  lg: "0.5rem"
  sm: "0.375rem"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "3rem"
  xl: "5rem"
  section: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.trophy-gold}"
    textColor: "{colors.deep-indigo-night}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.trophy-gold-light}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.trophy-gold}"
    rounded: "{rounded.pill}"
    padding: "14px 30px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.trophy-gold}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  nav-item:
    textColor: "{colors.deep-indigo-night}"
    rounded: "{rounded.lg}"
    padding: "8px 12px"
  nav-item-active:
    textColor: "{colors.spectrum-a}"
---

# Design System: ICT Awards Nepal

## 1. Overview

**Creative North Star: "The Maker's Stage"**

The ICT Awards Nepal design system exists to stage excellence — not as a distant spectacle, but as an open invitation. The site IS the stage; applicants are the protagonists. A 21-year-old student reading the Rising Star category description should feel "I could be up there," not "those people are impressive." Every surface tips toward aspiration over ceremony, inclusion over prestige.

The palette — Trophy Gold on Deep Indigo Night, with a Signature Spectrum of indigo-to-red — is extracted directly from the `ICT-AWARD-Logo.png`. This is not a "dark/gold awards site" cliché; every color has a logo source. The Signature Spectrum (Groups A through E) turns a navigation problem — five very different award tracks — into a brand system: each group has its own voice within the same arc. The depth comes from restraint, not decoration.

The typography is single-family Nunito Sans, pushed hard through weight contrast. At font-weight 900, headings read as muscular and proud; at 400, body text is warm and legible. No second family is introduced — weight does the work that most systems use a pairing to achieve. The system explicitly rejects: trophies as hero imagery, stock photo handshakes, marble textures, and serif-heavy "prestige" aesthetics. It also rejects the blue-gradient dev-conference palette. Nepal's tech sector is alive and moving; the design should feel the same.

**Key Characteristics:**
- Deep Indigo Night anchors hero and footer; cream and white breathe between sections
- Trophy Gold marks achievement: CTAs, active states, accent words. Its scarcity makes it feel earned.
- The Signature Spectrum orients group navigation — applied as group-specific color via `GROUP_COLOR` map, not as ambient decoration
- Pill-shaped buttons signal openness; rounded but never soft — confident and decisive
- A spectrum gradient rule (12px wide, 4px tall) precedes every section heading — the system's consistent punctuation

## 2. Colors: The Logo Palette

Every color in this system traces back to `ICT-AWARD-Logo.png`. When a new color is considered, the test is: does it appear in the trophy gold, the indigo-to-red AWARD wordmark, or the ink text of the logo?

### Primary
- **Trophy Gold** (`#F7B413`): The primary action and highlight color. Applied to CTAs, countdown figures, award markers (large bold on dark surfaces), gold-fill containers, and `bg-gold` sections. Used as a fill with Deep Indigo Night (`#1B1233`) text on top — never as text on a light background: `#F7B413` on white is ≈1.8:1, failing WCAG AA even for large text. On light surfaces, use `text-spectrum-a` (#4C2D75) for colored text accents — it reaches ≈10.8:1. Active nav links and `SectionHeading` accent words now follow this rule (gold only on dark, indigo on light).
- **Trophy Gold Light** (`#FDCE62`): Button hover state. Also used as a tint for gold-adjacent backgrounds at `gold/10` opacity.
- **Trophy Gold Dark** (`#CF7B0E`): Button active/pressed state.

### Secondary
- **Signature Spectrum** (`#4C2D75` → `#6E2C68` → `#9B2850` → `#BD203A` → `#C20F1A`): The five-stop gradient that defines award group identity. Applied via the `GROUP_COLOR` map in `src/data/categories.ts` as inline `style` props — **never via dynamic Tailwind class names**. The full gradient appears as decorative section rules (`bg-spectrum-gradient`): the footer top band, section heading underlines. Group E red is unified to `#C20F1A` (AA-safe) everywhere — gradients, live dot, and group color.

### Tertiary
- **Live Red** (`#C20F1A`): Unified with Spectrum E. Used only for urgency signals — nomination open dot, deadline accents. Its recurrence is contextual, not decorative.
- **Warm Stage** (`#FEF9EE`): Alternate light section background. Used for one or two sections per page that need warmth without going dark. Not a default; it earns its place when light/white feels too clinical.

### Neutral
- **Deep Indigo Night** (`#1B1233`): Body text on light surfaces, hero section background, footer background. The site's primary dark — not generic navy, not black. Every dark surface traces here.
- **Indigo Night Raised** (`#2C1A52`): The second dark layer used in the hero gradient top. Marks a surface elevated above the base dark.
- **Indigo Accent** (`#4C2D75`): Same as Spectrum A; used as cool highlight text or border in dark-surface contexts.
- **Surface** (`#FFFFFF`): Default page background. Use `bg-surface` token.
- **Surface Alt** (`#F8F9FA`): Subtle alternating section background. Visually distinct from white without introducing a tinted hue.
- **Surface Muted** (`#F1F3F5`): Lightest tinted surface — stats band, sticky year selector.
- **Border Subtle** (`#F3F4F6`): The pervasive card and divider border. Most `border-gray-100` usage maps here. Appearance-equivalent to Tailwind `gray-100`.
- **Border Light** (`#E5E7EB`): Slightly stronger border — stat column dividers, nav scroll indicator. Equivalent to Tailwind `gray-200`.
- **Border Strong** (`#D1D5DB`): Used sparingly — inactive timeline dots, emphasis borders. Equivalent to Tailwind `gray-300`.
- **Text Muted** (`#5A6472`): Supporting text on light backgrounds for genuinely secondary/meta copy. Retuned from `#6B7280` for reliable WCAG AA at small sizes. Warm-tinted body/secondary text uses `text-ink/70` or `text-ink/80` (≥6.7:1) instead — this token is for neutral/cool meta labels only. Scale: `/30→/65`, `/40→/70`, `/50→/80`, `/60→/80`; `/70` and above untouched.

### Named Rules

**The Logo Source Rule.** Every brand color traces back to `ICT-AWARD-Logo.png`. If a proposed color doesn't appear in the trophy gold, the AWARD wordmark spectrum, or the logo ink, it doesn't belong.

**The Earned Gold Rule.** Trophy Gold marks achievement. It is not a section background, a card fill, or an ambient tint. Its rarity on any given screen is what makes a CTA feel like the next step forward. Gold is exclusively a *fill* color on light surfaces — CTAs, `bg-gold` sections, gold-border UI, icon fills. Where a colored *text* accent is needed on light, use `text-spectrum-a` (#4C2D75, ≈10.8:1 on white) instead.

**The Spectrum-as-Text Rule.** On light surfaces: eyebrow labels, inline emphasis, heading accent words, "View All" links, active/hover nav states, and highlight states all use `text-spectrum-a` (indigo `#4C2D75`). Gold text (`text-gold`) on light is reserved for fills and non-text uses only (borders, backgrounds, icon fills). On dark surfaces (Hero, Footer) gold text is correct and must not be changed.

**The Group Color Rule.** Award group colors (A–E via `GROUP_COLOR`) are applied exclusively via inline `style` props. Dynamic Tailwind class names like `text-[${color}]` are purged at build time and will silently break. Group E uses `#C20F1A` — the unified AA-safe red (now also `spectrum.e`, `live`, and the gradient endpoint). All five groups A–E pass WCAG AA (≥4.5:1) as normal text on white, cream, and surface-alt backgrounds (verified 2026-06-19).

## 3. Typography

**Display Font:** Nunito Sans (with Calibri, Arial, system sans-serif fallback)
**Body Font:** Nunito Sans — same family; weight contrast carries the hierarchy

**Character:** Nunito Sans at weight 900 is muscular and proud — rounded terminals that stop short of playful, aggressive enough to hold its own against the dark indigo backgrounds and gold fills. At weight 400, it's warm and modern, accessible to a wide public audience. The single-family decision concentrates all voice into weight contrast rather than splitting personality across a pairing — right for a brand that must feel both official (ICTC Nepal) and aspirational (The Maker's Stage).

### Hierarchy
- **Display** (weight 900, `clamp(2.25rem, 7vw, 4.5rem)`, lh 1.1, ls -0.02em): Hero headline only. One per page. The `<h1>` on HeroSection. Never apply this scale to a section heading.
- **Headline** (weight 900, `clamp(1.875rem, 4vw, 2.25rem)`, lh 1.2): Section headings via `SectionHeading` component. One gold-accented word allowed per heading via `accentWord` prop.
- **Title** (weight 700, 1.25rem, lh 1.4): Card titles, category names, nav item text, modal headings.
- **Body** (weight 400, 1rem, lh 1.6): All prose. Cap at 65–75ch line length. On dark backgrounds, use `text-white/60` or `text-white/70` — never raw white for body paragraphs.
- **Label** (weight 700, 0.75rem, ls 0.1em, uppercase): Short structural labels of 5 words or fewer — section category tags, footer group titles, countdown unit labels (`DAYS`, `HRS`). Used sparingly; not a default kicker for every section.

### Named Rules

**The Weight-Is-Voice Rule.** All typographic hierarchy is achieved through font-weight contrast (900 vs 700 vs 400), not through a second font family or through size alone. Introducing a second family requires explicit justification against the brand's single-voice intent.

**The Uppercase Cap Rule.** All-caps is reserved for `label` scale copy only — short labels at 0.75rem with `letter-spacing: 0.1em`. Never apply `uppercase` to body copy, card descriptions, or headings.

## 4. Elevation

The system uses two distinct elevation philosophies across its two surface contexts — light pages and dark sections — and does not mix them.

**Light surfaces (content pages, most sections):** Flat by default. Cards sit unshadowed or with `border border-light` only. Gold-fill interactive elements receive a Trophy Glow shadow to distinguish the action layer from the content layer. Hover and focus states surface elevation; rest state does not.

**Dark surfaces (Hero, Footer):** Tonal layering replaces shadows. Depth is communicated through the `ink` → `ink-light` background step and through glass-surface opacity tokens (`bg-white/5`, `bg-white/10`, `border border-white/10`) for countdown boxes and floating UI elements. Shadows would disappear against dark backgrounds anyway; layered opacity is the correct vocabulary here.

### Shadow Vocabulary
- **Trophy Glow** (`box-shadow: 0 4px 24px rgba(247,179,19,0.25)`): Applied to primary CTA buttons and primary gold-fill elements. The signature signal that something is a call to action.
- **Trophy Glow Subtle** (`box-shadow: 0 2px 10px rgba(247,179,19,0.15)`): Smaller gold elements — navbar Apply Now button, gold icon containers.
- **Ink Ambient** (`box-shadow: 0 10px 40px rgba(27,18,51,0.12)`): Light-surface cards in elevated states (hover lift). Not applied at rest.
- **Nav Scroll** (Tailwind `shadow-sm` = `0 1px 2px 0 rgba(0,0,0,0.05)`): Navbar acquires this on scroll, plus `border-b border-border-subtle` (`#F3F4F6`), to signal the page has scrolled.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are unshadowed at rest. Shadow appears only as a response to state (hover, CTA significance, scroll). If everything carries a shadow, nothing is emphasized.

## 5. Components

### Buttons

Confident and decisive. Full pill shape across all variants.

- **Shape:** `border-radius: 9999px` on all variants. Internal padding: lg=`16px 32px`, md=`12px 24px`, sm=`8px 16px`.
- **Primary (gold):** `background: #F7B413; color: #1B1233; font-weight: 700` + `shadow-gold-sm` at rest → `background: #FDCE62` + `shadow-gold` on hover → `background: #CF7B0E` on active. Transition: `all 200ms`.
- **Outline:** `border: 2px solid #F7B413; color: #F7B413; background: transparent` → fills to `background: #F7B413; color: #1B1233` on hover.
- **Ghost:** `color: #F7B413; background: transparent` → `background: rgba(247,179,19,0.10)` on hover.
- **Focus:** `focus-visible:ring-2 ring-gold` on all three variants.
- **Polymorphic:** The `Button` component renders as `<button>`, `<Link>`, or `<a>` based on props (`onClick`, `to`, `href`). Always use this component rather than inline anchor styling.

### Navigation

- **Fixed bar** at `z-50`. `background: rgba(255,255,255,0.95); backdrop-filter: blur(4px)` at all scroll positions. On scroll past 40px: adds `box-shadow: 0 1px 2px rgba(0,0,0,0.05)` and `border-bottom: 1px solid #F3F4F6` (border-subtle).
- **Logo:** `ICT-AWARD-Logo.png` (light variant), `height: 2.5rem` desktop / `3rem` large. Always include `onError` fallback to dark-bg variant.
- **Nav links:** 0.875rem semibold, `color: rgba(27,18,51,0.70)` at rest → `color: #4C2D75` (spectrum-a) on hover and active. No underlines; color alone signals state. Active route uses `isActive` from `NavLink`. Mobile dropdown items: `color: rgba(27,18,51,0.80)` at rest → `color: #4C2D75` on hover. "Apply Now" CTA stays `bg-gold`.
- **Dropdowns:** `position: absolute; top: 100%; left: 0` — rendered outside any `overflow: hidden` container. `background: white; border: 1px solid #F3F4F6` (border-subtle); `border-radius: 0.75rem; box-shadow: 0 4px 12px rgba(0,0,0,0.08)`. Mouse-enter/leave triggers; no click-open needed on desktop.
- **Mobile drawer:** Full-width, below header, revealed on hamburger tap. Same gold hover/active treatment. Apply Now renders as full-width pill CTA at the bottom of the drawer.

### SectionHeading

The system's primary section-entrance component. Every section uses this or the same visual grammar.

- **Spectrum rule:** A `48px × 4px` rounded bar with `bg-spectrum-gradient` precedes the `<h2>`. Always present; this is the system's heading punctuation.
- **Heading:** `font-weight: 900; font-size: clamp(1.875rem, 4vw, 2.25rem); color: #1B1233` (light) or `color: white` (dark variant). `text-wrap: balance` recommended.
- **Gold word:** One word per heading may be highlighted via the `accentWord` prop. The injection uses `dangerouslySetInnerHTML` (safe — data files only, not user input). Color is surface-aware: `dark=true` → `color: #F7B413` (gold on dark, correct); `dark=false` (default, light sections) → `color: #4C2D75` (`text-spectrum-a`, ≈10.8:1). Gold in this slot is only used on dark-surface headings (Hero section).
- **Subtitle:** `font-size: 1.125rem; line-height: 1.6; color: rgba(27,18,51,0.70)` (light) or `rgba(255,255,255,0.70)` (dark).

### Cards / Containers

- **Light surface at rest:** `border-radius: 0.75rem; background: white; border: 1px solid #F3F4F6` (border-subtle). No shadow at rest.
- **Light surface hover:** Add `box-shadow: 0 10px 40px rgba(27,18,51,0.12)` on hover lift.
- **Dark surface (glass):** `background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10); border-radius: 0.75rem; backdrop-filter: blur(4px)`.
- **Internal padding:** `1.5rem` standard; `1rem` compact. Never less than `0.75rem`.
- **Nested cards:** Prohibited. A card inside a card is a layout failure.

### Footer

- `background: #1B1233` (Deep Indigo Night). Topped by a 4px full-width `bg-spectrum-gradient` rule — the system's signature separator between page content and brand close.
- Logo: dark-bg variant (`ICT-AWARD-Logo-Dark-Bg.png`), `height: 3.5rem`.
- Group labels: `color: #F7B413; font-weight: 700; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.1em`. This is the deliberate use of uppercase tracking; it defines the footer's structure.
- Links: `color: rgba(255,255,255,0.60)` → `color: #F7B413` on hover.
- Bottom strip: `border-top: 1px solid rgba(255,255,255,0.10)`. Copyright left, dates right. Live dot: `width: 6px; height: 6px; border-radius: 50%; background: #C20F1A` (live / spectrum.e).

## 6. Do's and Don'ts

### Do

- **Do** use Trophy Gold (`#F7B413`) exclusively as a **fill** color on light surfaces — CTAs, `bg-gold` sections, `border-gold*` UI, icon fills, and large/bold text on dark surfaces. Its scarcity is what makes it feel earned.
- **Do** use `text-spectrum-a` (#4C2D75) for colored *text* accents on light backgrounds — eyebrows, inline emphasis, heading accent words (via `accentWord` prop), "View All" links, active nav states, card-title hovers. It reaches ≈10.8:1 on white, far exceeding WCAG AA.
- **Do** apply award group colors via inline `style` props using `GROUP_COLOR` from `src/data/categories.ts`. Dynamic Tailwind class construction purges at build time.
- **Do** use `#C20F1A` for Group E — this is now the unified value for `spectrum.e`, `live`, the gradient endpoint, and `GROUP_COLOR.E`. It passes WCAG AA as normal text on all light surfaces.
- **Do** use `ICT-AWARD-Logo-Dark-Bg.png` on dark (ink) surfaces and `ICT-AWARD-Logo.png` on light surfaces. Always include an `onError` fallback to the other variant.
- **Do** use the spectrum gradient (`bg-spectrum-gradient`) for decorative rules and dividers only — heading underlines, footer top band, brand separators. It is a structural mark, not a fill.
- **Do** give every countdown/scroll/fade animation a `@media (prefers-reduced-motion: reduce)` fallback — at minimum, an instant transition.
- **Do** cap body copy at 65–75ch. On dark backgrounds, use `text-white/60` or `text-white/70` for body paragraphs — never `text-white` at regular weight, which reads as too heavy.
- **Do** use `text-wrap: balance` on all `<h1>`–`<h3>` elements for even line breaks at all viewports.

### Don't

- **Don't** use trophies, handshakes, or certificate imagery as hero visuals. Generic award-site templates are frozen in 2010 and misrepresent Nepal's forward-looking tech sector. (from PRODUCT.md anti-references)
- **Don't** introduce the blue-gradient dev-conference palette — cobalt, generic tech iconography, dense schedule-grid aesthetics. This is a celebration, not a summit. (from PRODUCT.md anti-references)
- **Don't** mimic Fortune 500 award program grey palettes or formal corporate register. The ICT Awards is sector-led and community-rooted; it should feel alive, not institutional. (from PRODUCT.md anti-references)
- **Don't** apply the Signature Spectrum gradient to text via `background-clip: text`. It is a structural surface element; gradient text is decorative and inaccessible.
- **Don't** use `border-left` thicker than 1px as a colored accent on cards, list items, or callouts. Replace with full borders, background tints, or nothing.
- **Don't** add a tiny uppercase tracked eyebrow above every section heading. The footer already uses this pattern as a deliberate structural system; repeating it in section headings across the page makes it AI grammar, not brand voice.
- **Don't** render Trophy Gold as text on light backgrounds — `#F7B413` on white is ≈1.8:1, failing WCAG AA at *every* size including large/bold headings (minimum 3:1). Gold is a fill color. Use `text-spectrum-a` (#4C2D75) for any colored text accent on a light surface; use `text-ink` for text on gold-tinted/bordered elements. Gold text is only correct on dark surfaces (Hero, Footer).
- **Don't** add a dark-mode toggle. The site is light-surface with full dark sections (Hero, Footer) baked into the identity. A toggle would break the intentional surface rhythm.
- **Don't** use `overflow: hidden` on any container that parents a dropdown — the navbar dropdown will clip. The current implementation renders dropdowns within `position: relative` containers without `overflow` constraints; preserve this.
