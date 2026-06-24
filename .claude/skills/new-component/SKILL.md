# new-component

Scaffold a new React component following ICT Awards conventions.

## Usage

```
/new-component <ComponentName> <type>
```

`type` must be one of: `section`, `ui`, `page`

## Instructions

Parse the arguments. Use the template for the matching type below. Write the file to the correct path. Then tell the user what was created and what manual wiring they still need to do.

**Do not** create data files, register routes, or modify `renderIcon.tsx` — note those as next steps.

---

## Template: `section`

**Path:** `src/components/home/<ComponentName>.tsx`

```tsx
import { REPLACE_WITH_DATA_EXPORT } from '@/data/REPLACE_WITH_DATA_FILE'
// ponytail: no dynamic Tailwind classes (e.g. bg-spectrum-${x} gets purged) — use inline style for data-driven colors
import { RenderIcon } from '@/lib/renderIcon'
import SectionHeading from '@/components/ui/SectionHeading'

export default function <ComponentName>() {
  return (
    <section className="bg-surface section-padding">
      <div className="container-max">
        <SectionHeading
          title="Section Title"
          subtitle="Optional subtitle."
          className="mb-10"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REPLACE_WITH_DATA_EXPORT.map((item) => (
            <div key={item.id} className="bg-surface-alt border border-border-subtle rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <RenderIcon name={item.icon} size={24} />
                </div>
                <div>
                  <h3 className="text-ink font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-ink/80 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Next steps to tell the user:**
- Replace `REPLACE_WITH_DATA_EXPORT` and `REPLACE_WITH_DATA_FILE` with the real data import from `src/data/`
- If `item.icon` is used, ensure the icon name is registered in `src/lib/renderIcon.tsx`
- Add any new types to `src/types/index.ts` (not inline)

---

## Template: `ui`

**Path:** `src/components/ui/<ComponentName>.tsx`

```tsx
import clsx from 'clsx'

interface <ComponentName>Props {
  // add props here
  className?: string
}

export default function <ComponentName>({ className }: <ComponentName>Props) {
  return (
    <div className={clsx('', className)}>
      {/* content */}
    </div>
  )
}
```

**Next steps to tell the user:**
- Define props in the interface (not inline)
- If the component needs types shared elsewhere, add them to `src/types/index.ts`

---

## Template: `page`

**Path:** `src/pages/<ComponentName>Page.tsx`

```tsx
import SectionHeading from '@/components/ui/SectionHeading'
// import { DATA_EXPORT } from '@/data/DATA_FILE'

export default function <ComponentName>Page() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-surface section-padding text-center">
        <div className="container-max">
          <div className="w-12 h-1 bg-gold rounded-full mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-black text-ink">
            Page Title
          </h1>
          <p className="mt-4 text-ink/80 max-w-2xl mx-auto">
            Page subtitle or description.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-surface-alt section-padding">
        <div className="container-max">
          <SectionHeading
            title="Section Title"
            subtitle="Section subtitle."
            className="mb-10"
          />
          {/* content */}
        </div>
      </section>
    </div>
  )
}
```

**Next steps to tell the user:**
- Add the route in `src/App.tsx` under `PageWrapper` children
- Uncomment and fill in the data import if needed
- Add any new types to `src/types/index.ts`
