# Graph Report - .  (2026-06-19)

## Corpus Check
- 62 files · ~55,430 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 244 nodes · 263 edges · 28 communities (18 shown, 10 thin omitted)
- Extraction: 87% EXTRACTED · 13% INFERRED · 0% AMBIGUOUS · INFERRED: 33 edges (avg confidence: 0.85)
- Token cost: 18,500 input · 2,800 output

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

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 20 edges
2. `compilerOptions` - 16 edges
3. `ICT Award Logo (Light Background)` - 9 edges
4. `Logo-Derived Color System Design Spec` - 8 edges
5. `SectionHeading()` - 7 edges
6. `CategoriesPreview()` - 6 edges
7. `WinnersPage()` - 6 edges
8. `5 Award Category Tracks (A-E)` - 6 edges
9. `Design System Skill` - 6 edges
10. `Design Skill (Unified)` - 6 edges

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

## Communities (28 total, 10 thin omitted)

### Community 0 - "ICT Award Core Concepts"
Cohesion: 0.08
Nodes (16): Grand Finale Countdown (Dec 18 2026), ICT Award Nepal, HISTORY, AboutBlurb(), CARDS, GRAND_FINALE, HeroSection(), PreEventsSection() (+8 more)

### Community 1 - "Pre-Activities & Icon System"
Cohesion: 0.08
Nodes (17): Icon Name String Abstraction, PRE_ACTIVITIES, ICT_2026_TIMELINE, ICON_MAP, RenderIcon Component, renderIcon Function, RenderIconProps, AboutPage() (+9 more)

### Community 2 - "TypeScript App Config"
Cohesion: 0.09
Nodes (22): compilerOptions, allowImportingTsExtensions, baseUrl, ignoreDeprecations, isolatedModules, jsx, lib, module (+14 more)

### Community 3 - "Media & Static Data Layer"
Cohesion: 0.13
Nodes (16): Static Data Layer Pattern, GrandFinale Data, GRAND_FINALES, TV_EPISODES, getWinnersByYear Function, getWinnersByYear(), WINNER_YEARS, WINNERS (+8 more)

### Community 4 - "Layout & Brand Components"
Cohesion: 0.12
Nodes (11): ScrollToTop Behavior, Spectrum Gradient Brand Design Pattern, Footer(), footerLinks, NAV_ITEMS, Navbar(), PageWrapper(), App() (+3 more)

### Community 5 - "Project Dependencies"
Cohesion: 0.11
Nodes (17): dependencies, clsx, @phosphor-icons/react, react, react-countup, react-dom, react-intersection-observer, react-lite-youtube-embed (+9 more)

### Community 6 - "TypeScript Node Config"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+9 more)

### Community 7 - "Brand Color System"
Cohesion: 0.26
Nodes (14): AWARD Wordmark Gradient (indigo to red), Gold Color Token (#F7B413), GROUP_COLOR Map (Category A-E Colors), ICT Award Trophy Visual Identity (gold 3D, red ribbon), Ink Color Token (#1B1233), Logo Asset Reference Fix (broken Light-Bg path), navy to ink Token Migration, Signature Spectrum Gradient (indigo to red) (+6 more)

### Community 8 - "Design Skill Ecosystem"
Cohesion: 0.20
Nodes (14): Banner Art Direction Styles (22 styles), Brand Sync Workflow (brand-guidelines -> design-tokens), Persisted Design System (MASTER.md + page overrides), shadcn/ui + Tailwind CSS Component Stack, Slide Contextual Decision System (CSVs + emotion arcs), Three-Layer Token Architecture (primitive -> semantic -> component), UI/UX Rule Categories (10 priority levels), Banner Design Skill (+6 more)

### Community 9 - "Type Definitions & Stats"
Cohesion: 0.15
Nodes (11): STATS, Category, CategoryGroup, FAQ, GrandFinale, HistoryEntry, NavItem, PreActivity (+3 more)

### Community 10 - "Award Categories"
Cohesion: 0.31
Nodes (7): 5 Award Category Tracks (A-E), CATEGORIES, CATEGORY_GROUP_LABELS, CATEGORY_GROUPS, GROUP_COLOR, FAQS, CategoriesPreview()

### Community 11 - "Build Tooling"
Cohesion: 0.20
Nodes (10): devDependencies, autoprefixer, postcss, tailwindcss, @types/node, @types/react, @types/react-dom, typescript (+2 more)

### Community 12 - "2026 Brand Assets"
Cohesion: 0.47
Nodes (6): index.html Entry Point, ICT Award 2026 Logo (Light Background), ICT Award 2026 Logo (Dark Background Variant), ICT Award Brand Identity System, ICT Award Logo Base (No Year), ICT Award Logo Base Dark Bg (No Year, No Award Text)

### Community 14 - "TypeScript Project References"
Cohesion: 0.67
Nodes (4): TypeScript App Config, TypeScript Node Config, TypeScript Root Config, Vite Config

### Community 15 - "Tailwind Color Palette"
Cohesion: 0.67
Nodes (3): Gold Color Palette, Spectrum Gradient Palette, Tailwind Config

## Ambiguous Edges - Review These
- `TimelineSection()` → `YoutubeEmbed()`  [AMBIGUOUS]
  src/components/ui/YoutubeEmbed.tsx · relation: semantically_similar_to

## Knowledge Gaps
- **110 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+105 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `TimelineSection()` and `YoutubeEmbed()`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **Why does `ICT_2026_TIMELINE` connect `Pre-Activities & Icon System` to `ICT Award Core Concepts`, `Media & Static Data Layer`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **Why does `useCountdown()` connect `ICT Award Core Concepts` to `Pre-Activities & Icon System`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ICT Award Logo (Light Background)` (e.g. with `ICT Award 2026 Logo (Light Background)` and `Gold Color Token (#F7B413)`) actually correct?**
  _`ICT Award Logo (Light Background)` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _112 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ICT Award Core Concepts` be split into smaller, more focused modules?**
  _Cohesion score 0.08307692307692308 - nodes in this community are weakly interconnected._
- **Should `Pre-Activities & Icon System` be split into smaller, more focused modules?**
  _Cohesion score 0.08307692307692308 - nodes in this community are weakly interconnected._