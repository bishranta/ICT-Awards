# Graph Report - ICT-Awards  (2026-06-19)

## Corpus Check
- 57 files · ~62,007 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 482 nodes · 491 edges · 37 communities (27 shown, 10 thin omitted)
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 33 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b30e8ed8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_ICT Award Core Concepts|ICT Award Core Concepts]]
- [[_COMMUNITY_Pre-Activities & Icon System|Pre-Activities & Icon System]]
- [[_COMMUNITY_TypeScript App Config|TypeScript App Config]]
- [[_COMMUNITY_Media & Static Data Layer|Media & Static Data Layer]]
- [[_COMMUNITY_Layout & Brand Components|Layout & Brand Components]]
- [[_COMMUNITY_Project Dependencies|Project Dependencies]]
- [[_COMMUNITY_TypeScript Node Config|TypeScript Node Config]]
- [[_COMMUNITY_Brand Color System|Brand Color System]]
- [[_COMMUNITY_Design Skill Ecosystem|Design Skill Ecosystem]]
- [[_COMMUNITY_Type Definitions & Stats|Type Definitions & Stats]]
- [[_COMMUNITY_Award Categories|Award Categories]]
- [[_COMMUNITY_Build Tooling|Build Tooling]]
- [[_COMMUNITY_2026 Brand Assets|2026 Brand Assets]]
- [[_COMMUNITY_Stats Display Components|Stats Display Components]]
- [[_COMMUNITY_TypeScript Project References|TypeScript Project References]]
- [[_COMMUNITY_Tailwind Color Palette|Tailwind Color Palette]]
- [[_COMMUNITY_TypeScript Root Config|TypeScript Root Config]]
- [[_COMMUNITY_UI Button Primitive|UI Button Primitive]]
- [[_COMMUNITY_Tailwind Config Entry|Tailwind Config Entry]]
- [[_COMMUNITY_App Entry Point|App Entry Point]]
- [[_COMMUNITY_Root Package JSON|Root Package JSON]]
- [[_COMMUNITY_PostCSS Root Config|PostCSS Root Config]]
- [[_COMMUNITY_Category Group Type|Category Group Type]]
- [[_COMMUNITY_History Entry Type|History Entry Type]]
- [[_COMMUNITY_Nav Item Type|Nav Item Type]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 20 edges
2. `UI Styling Skill` - 20 edges
3. `compilerOptions` - 16 edges
4. `Design` - 14 edges
5. `File Structure` - 14 edges
6. `UI/UX Pro Max - Design Intelligence` - 13 edges
7. `Design System` - 11 edges
8. `Slide System` - 11 edges
9. `Quick Reference` - 11 edges
10. `Logo-Derived Color System Implementation Plan` - 11 edges

## Surprising Connections (you probably didn't know these)
- `ICT Award Logo (Light Background)` --conceptually_related_to--> `Gold Color Token (#F7B413)`  [INFERRED]
  public/logos/ICT-AWARD-Logo.png → docs/superpowers/specs/2026-06-13-logo-derived-color-system-design.md
- `Logo Asset Reference Fix (broken Light-Bg path)` --rationale_for--> `ICT Award Logo (Light Background)`  [EXTRACTED]
  docs/superpowers/specs/2026-06-13-logo-derived-color-system-design.md → public/logos/ICT-AWARD-Logo.png
- `AWARD Wordmark Gradient (indigo to red)` --conceptually_related_to--> `Signature Spectrum Gradient (indigo to red)`  [EXTRACTED]
  public/logos/ICT-AWARD-Logo.png → docs/superpowers/specs/2026-06-13-logo-derived-color-system-design.md
- `Logo-Derived Color System Implementation Plan` --references--> `ICT Award Logo (Light Background)`  [EXTRACTED]
  docs/superpowers/plans/2026-06-13-logo-derived-color-system.md → public/logos/ICT-AWARD-Logo.png
- `Logo-Derived Color System Implementation Plan` --references--> `ICT Award Logo (Dark Background Variant)`  [EXTRACTED]
  docs/superpowers/plans/2026-06-13-logo-derived-color-system.md → public/logos/ICT-AWARD-Logo-Dark-Bg.png

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **ICT Award Brand Logo System** — logos_ict_award_2026_logo, logos_ict_award_2026_logo_dark, logos_ict_award_logo_base, logos_ict_award_logo_base_dark, logos_ict_award_brand_identity [EXTRACTED 1.00]
- **Home Page Section Composition** — home_herosection_herosection, home_aboutblurb_aboutblurb, home_categoriespreview_categoriespreview, home_statssection_statssection, home_recentwinnerssection_recentwinnerssection, home_timelinesection_timelinesection, home_preeventssection_preeventssection [INFERRED 0.95]
- **Shared SectionHeading Pattern across Home Sections** — home_aboutblurb_aboutblurb, home_categoriespreview_categoriespreview, home_preeventssection_preeventssection, home_recentwinnerssection_recentwinnerssection, home_timelinesection_timelinesection, ui_sectionheading_sectionheading [EXTRACTED 1.00]
- **ICT Award Core Data Layer** — data_categories_categories, data_categories_category_groups, data_history_history, data_faqs_faqs, concept_ict_award_nepal [INFERRED 0.90]
- **Page Components Consume Typed Static Data via RenderIcon** — concept_data_layer, lib_rendericon_rendericon_component, pages_preactivitiespage_preactivitiespage [INFERRED 0.85]
- **Winners Data Pipeline: Type → Data → Page Display** — types_index_winner, data_winners_winners, pages_winnerspage_winnerspage [EXTRACTED 1.00]
- **Media Data Pipeline: Types → Data → MediaPage** — types_index_tv_episode, data_media_tv_episodes, pages_mediapage_mediapage [EXTRACTED 1.00]
- **Logo-Derived Color System: Logo + Spec + Plan** — logos_ict_award_logo_brandmark, docs_specs_logo_color_system_spec, docs_plans_logo_color_system_plan [EXTRACTED 1.00]
- **Unified Design Skill Ecosystem (design + brand + design-system + ui-styling)** — skills_design_skill, skills_brand_skill, skills_design_system_skill, skills_ui_styling_skill [EXTRACTED 1.00]
- **Spectrum Token + Category Color System + Gradient** — concept_spectrum_gradient, concept_group_color_map, concept_award_wordmark_gradient [EXTRACTED 1.00]

## Communities (37 total, 10 thin omitted)

### Community 0 - "ICT Award Core Concepts"
Cohesion: 0.09
Nodes (18): 5 Award Category Tracks (A-E), ICT Award Nepal, CATEGORIES, CATEGORY_GROUP_LABELS, CATEGORY_GROUPS, GROUP_COLOR, FAQS, HISTORY (+10 more)

### Community 1 - "Pre-Activities & Icon System"
Cohesion: 0.08
Nodes (17): Icon Name String Abstraction, PRE_ACTIVITIES, ICT_2026_TIMELINE, ICON_MAP, RenderIcon Component, renderIcon Function, RenderIconProps, AboutPage() (+9 more)

### Community 2 - "TypeScript App Config"
Cohesion: 0.09
Nodes (22): compilerOptions, allowImportingTsExtensions, baseUrl, ignoreDeprecations, isolatedModules, jsx, lib, module (+14 more)

### Community 3 - "Media & Static Data Layer"
Cohesion: 0.07
Nodes (27): Static Data Layer Pattern, GrandFinale Data, GRAND_FINALES, TV_EPISODES, STATS, getWinnersByYear Function, getWinnersByYear(), WINNER_YEARS (+19 more)

### Community 4 - "Layout & Brand Components"
Cohesion: 0.09
Nodes (14): Grand Finale Countdown (Dec 18 2026), ScrollToTop Behavior, Spectrum Gradient Brand Design Pattern, GRAND_FINALE, HeroSection(), CountdownTime, useCountdown(), Footer() (+6 more)

### Community 5 - "Project Dependencies"
Cohesion: 0.07
Nodes (27): dependencies, clsx, @phosphor-icons/react, react, react-countup, react-dom, react-intersection-observer, react-lite-youtube-embed (+19 more)

### Community 6 - "TypeScript Node Config"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+9 more)

### Community 7 - "Brand Color System"
Cohesion: 0.18
Nodes (17): AWARD Wordmark Gradient (indigo to red), Gold Color Token (#F7B413), GROUP_COLOR Map (Category A-E Colors), ICT Award Trophy Visual Identity (gold 3D, red ribbon), Ink Color Token (#1B1233), Logo Asset Reference Fix (broken Light-Bg path), navy to ink Token Migration, Signature Spectrum Gradient (indigo to red) (+9 more)

### Community 8 - "Design Skill Ecosystem"
Cohesion: 0.06
Nodes (37): Banner Art Direction Styles (22 styles), Brand Sync Workflow (brand-guidelines -> design-tokens), Persisted Design System (MASTER.md + page overrides), shadcn/ui + Tailwind CSS Component Stack, Slide Contextual Decision System (CSVs + emotion arcs), Three-Layer Token Architecture (primitive -> semantic -> component), UI/UX Rule Categories (10 priority levels), Banner Design Skill (+29 more)

### Community 9 - "Type Definitions & Stats"
Cohesion: 0.05
Nodes (38): Accessibility, Available Domains, Available Stacks, Common Rules for Professional UI, Common Sticking Points, Example Workflow, How to Use, How to Use This Skill (+30 more)

### Community 10 - "Award Categories"
Cohesion: 0.06
Nodes (34): Banner Design (Built-in), Banner: Design Rules, Banner: Quick Size Reference, Banner: Top Art Styles, Banner: Workflow, CIP Design (Built-in), CIP: Generate Brief, CIP: Generate Mockups (+26 more)

### Community 11 - "Build Tooling"
Cohesion: 0.08
Nodes (23): 1. Overview, 2. Colors: The Logo Palette, 3. Typography, 4. Elevation, 5. Components, 6. Do's and Don'ts, Buttons, Cards / Containers (+15 more)

### Community 12 - "2026 Brand Assets"
Cohesion: 0.47
Nodes (6): index.html Entry Point, ICT Award 2026 Logo (Light Background), ICT Award 2026 Logo (Dark Background Variant), ICT Award Brand Identity System, ICT Award Logo Base (No Year), ICT Award Logo Base Dark Bg (No Year, No Award Text)

### Community 14 - "TypeScript Project References"
Cohesion: 0.67
Nodes (4): TypeScript App Config, TypeScript Node Config, TypeScript Root Config, Vite Config

### Community 15 - "Tailwind Color Palette"
Cohesion: 0.67
Nodes (3): Gold Color Palette, Spectrum Gradient Palette, Tailwind Config

### Community 28 - "Community 28"
Cohesion: 0.09
Nodes (22): Best Practices, Chart.js Integration, Command, Component Spec Pattern, Contextual Decision Flow, Decision System CSVs, Design System, Integration (+14 more)

### Community 29 - "Community 29"
Cohesion: 0.13
Nodes (13): Architecture, Award Categories Structure, Commands, Component Organization, Data Layer, Design Tokens, graphify, Icons (+5 more)

### Community 30 - "Community 30"
Cohesion: 0.14
Nodes (14): File Structure, Task 10: Footer — dark ink footer + spectrum rule + dark logo, Task 11: CategoriesPreview — per-group colors on the 5 group cards, Task 12: CategoriesPage — per-group colors + gradient H1, Task 13: Final verification & visual QA, Task 1: Add new color tokens (keep `navy` as a temporary alias), Task 2: Mechanical `navy → ink` token rename across the source, Task 3: Remove the temporary `navy` alias (+6 more)

### Community 31 - "Community 31"
Cohesion: 0.14
Nodes (13): 10. Open Questions / Assumptions, 1. Context & Motivation, 2. Goals & Non-Goals, 3. The Palette (extracted from the logo), 4. Role & Usage Rules, 5. Category Group Color System, 6. Logo Fix, 7. Accessibility & Contrast (+5 more)

### Community 32 - "Community 32"
Cohesion: 0.15
Nodes (12): Art Direction Styles (Top 10), Banner Design - Multi-Format Creative Banner System, Banner Size Quick Reference, Design Rules, Security, Step 1: Gather Requirements (AskUserQuestion), Step 2: Research & Art Direction, Step 3: Design & Generate Options (+4 more)

### Community 33 - "Community 33"
Cohesion: 0.18
Nodes (11): 10. Charts & Data (LOW), 1. Accessibility (CRITICAL), 2. Touch & Interaction (CRITICAL), 3. Performance (HIGH), 4. Style Selection (HIGH), 5. Layout & Responsive (HIGH), 6. Typography & Color (MEDIUM), 7. Animation (MEDIUM) (+3 more)

### Community 34 - "Community 34"
Cohesion: 0.20
Nodes (9): Brand, Brand Sync Workflow, Quick Start, References, Routing, Scripts, Subcommands, Templates (+1 more)

### Community 35 - "Community 35"
Cohesion: 0.22
Nodes (8): Accessibility & Inclusion, Anti-references, Brand Personality, Design Principles, Product, Product Purpose, Register, Users

### Community 36 - "Community 36"
Cohesion: 0.33
Nodes (5): References (Knowledge Base), Routing, Slides, Subcommands, When to Use

## Ambiguous Edges - Review These
- `TimelineSection()` → `YoutubeEmbed()`  [AMBIGUOUS]
  src/components/ui/YoutubeEmbed.tsx · relation: semantically_similar_to

## Knowledge Gaps
- **299 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+294 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `TimelineSection()` and `YoutubeEmbed()`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **Why does `ICT_2026_TIMELINE` connect `Pre-Activities & Icon System` to `Media & Static Data Layer`, `Layout & Brand Components`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Why does `HeroSection()` connect `Layout & Brand Components` to `ICT Award Core Concepts`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Why does `useCountdown()` connect `Layout & Brand Components` to `Pre-Activities & Icon System`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _301 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ICT Award Core Concepts` be split into smaller, more focused modules?**
  _Cohesion score 0.08994708994708994 - nodes in this community are weakly interconnected._
- **Should `Pre-Activities & Icon System` be split into smaller, more focused modules?**
  _Cohesion score 0.08307692307692308 - nodes in this community are weakly interconnected._