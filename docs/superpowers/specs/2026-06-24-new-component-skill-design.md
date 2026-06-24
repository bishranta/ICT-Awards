# new-component Skill Design

**Date:** 2026-06-24

## Summary

A user-invocable slash command that scaffolds new React components following ICT Awards conventions. Eliminates repeated boilerplate setup (wrong alias, inline types, dynamic Tailwind classes).

## Invocation

```
/new-component <ComponentName> <type>
```

`type` ∈ `section | ui | page`

## Output

| type | path | pattern |
|------|------|---------|
| `section` | `src/components/home/<ComponentName>.tsx` | data import placeholder + `RenderIcon` + `<section>` layout |
| `ui` | `src/components/ui/<ComponentName>.tsx` | typed props interface + `clsx` + no data |
| `page` | `src/pages/<ComponentName>Page.tsx` | `pt-20` outer div + `SectionHeading` import + section blocks |

## Invariants Enforced

- All imports use `@/` alias
- `clsx` for conditional classes (already installed, no new deps)
- No dynamic Tailwind classes — template comment warns against `bg-spectrum-${x}`
- `RenderIcon` imported from `@/lib/renderIcon` in section template only
- Default export only
- No inline type definitions — comment directs to `@/types/index.ts`

## Out of Scope

- Auto-registering routes in `src/App.tsx`
- Auto-adding data arrays to `src/data/`
- Auto-adding icons to `src/lib/renderIcon.tsx`

These are one-liner edits the user makes after scaffolding.

## Implementation

Single file: `.claude/skills/new-component/SKILL.md` with three embedded template blocks.
