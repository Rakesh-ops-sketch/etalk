---
name: landing-page-ui-ux
description: Designs and implements marketing landing pages with clear hierarchy, conversion-focused layout, accessible typography and color, seamless section flow (gradient fades and hairlines instead of heavy boxes), subtle transitions, responsive behavior, and polished interaction patterns. Use when building or refining home pages, product landings, hero sections, pricing, waitlists, seamless or anti-boxy UI, section transitions, or when the user asks for landing page UI, UX, or industry-grade marketing design.
---

# Landing page UI/UX (industry grade)

## Role

Act as a **product designer + front-end implementer** for marketing landings: prioritize **clarity, trust, and a single primary conversion**, then secondary goals. Match existing project tokens, fonts, and components when present.

## Pair with framework skills

- **Next.js / SEO / performance**: follow the project’s Next.js skill for SSR, metadata, images, fonts, and Core Web Vitals. This skill covers **visual and UX**; that skill covers **delivery and SEO**.

## Non-negotiables

1. **One primary CTA** per major viewport (hero at minimum); secondary actions are visually quieter.
2. **Scannable**: headline + supporting line + CTA readable in **~5 seconds**; avoid walls of text above the fold.
3. **Accessible**: WCAG **2.2 AA** for text contrast, visible **focus** states, semantic headings (`h1` → `h2` → …), labels on inputs, no information by color alone.
4. **Responsive**: comfortable reading and tapping on **320px+**; no horizontal scroll for main content.
5. **Honest UX**: no dark patterns; social proof and claims should align with what the product actually offers.

## Information architecture (typical order)

Adapt to the product; default **top-to-bottom** flow:

1. **Nav** (optional): logo, 3–5 links max, primary CTA repeated in header on desktop if it helps conversion.
2. **Hero**: specific headline (outcome-oriented), one short subhead, **primary CTA** + optional low-friction secondary (e.g. “See how it works”).
3. **Social proof**: recognizable logos, metrics, or short quotes—**above the fold or immediately after** hero when credible.
4. **Problem → approach**: pain, then how this product addresses it (benefits over feature jargon).
5. **Features / use cases**: 3–6 blocks; each = **title, one line benefit, optional visual**; prefer benefits (“Ship faster”) over labels (“Dashboard”).
6. **Deeper proof**: testimonials with **name + role + context**; case snippets or quotes.
7. **FAQ**: objections and pricing/setup questions; keeps sales light.
8. **Final CTA band**: repeat primary action with short reassurance.
9. **Footer**: legal, contact, social—dense but organized.

Skip sections that add no value; **merge** thin sections rather than many sparse ones.

## Visual system

### Typography

- **Distinct scale**: hero headline > section titles > body > captions; use a **modular scale** (e.g. 1.25–1.333) consistent across breakpoints.
- **Body**: comfortable line-height (~1.5–1.6); **max line length** ~60–75 characters for long copy.
- **Font pairing**: at most **two families** (display + text) unless the design system already defines more.

### Color and contrast

- **Text/background**: meet **4.5:1** normal text, **3:1** large text and UI components where applicable.
- **Interactive**: `:hover`, `:active`, `:focus-visible` states; **never** remove focus outlines without a stronger replacement.
- **Accent**: one clear color for **primary actions**; destructive/secondary semantics consistent.

### Space and layout

- **Section rhythm**: consistent vertical padding (e.g. 4rem–6rem desktop, tighter mobile) between major blocks.
- **Grid**: 12-column or simple single-column with max-width **container** (~1100–1280px for content); avoid ultra-wide line lengths.
- **Whitespace**: prefer **breathing room** over cramming; group related items with **proximity**.

## Seamless sections (avoid boxy landings)

Modern product landings read as **one continuous surface**, not a stack of bordered cards.

- **Separation**: Prefer **gradient hairlines** (a thin line that **fades to transparent** at the left/right edges) or **soft background washes** (radial + linear gradients) between sections. Avoid chaining **thick `border-b` + boxed cards** for every block.
- **Surfaces**: Use **low-contrast fills** (`white`/ink at **~2–8%** opacity) and **inset hairline** shadows instead of heavy **1px accent borders** around every feature.
- **Feature grid**: **Borderless tiles** with hover **lift**, **soft outer shadow**, and optional **faint accent ring**; **icon wells** (radial glow behind the icon) beat stroked square icon boxes.
- **Problem / solution**: **Gradient vertical accent** on the text block (e.g. pseudo-element line) instead of two matching “card” panels.
- **FAQ**: **Row hairlines** only (`border-top` / `border-bottom` at low alpha); **hover row tint** optional. Skip wrapping each item in a rounded bordered container unless the brand requires it.
- **CTA band**: **Vignette** or **soft shell** (inset highlight + radial glow) rather than a loud boxed promo.
- **Connectors**: For steps or trust columns, optional **horizontal gradient rule** behind content or **vertical `w-px` gradient** dividers between columns (hidden when stacked on small screens).
- **Motion**: **~200–400ms** transitions on color, shadow, and (when appropriate) transform; put **transform / scale** behind **`prefers-reduced-motion: no-preference`** so reduced-motion users still get **color and focus** feedback.
- **Sticky header**: Lighter **neutral hairline** (`white/5–8%`) plus **backdrop blur** often fits seamless pages better than a strong brand border on every edge.

Reuse project tokens; **principles first**—class names can differ per codebase. For concrete CSS/layout notes, see [reference.md](reference.md#seamless-layout-and-motion).

### Imagery

- **Purposeful** photos/illustrations (explain or humanize), compressed and sized for layout; prefer **`next/image`** (or equivalent) with dimensions to reduce CLS.
- Avoid generic stock that fights the message; **alt text** that describes meaning, not “image1”.

## Components and patterns

- **Buttons**: clear primary vs secondary vs ghost; **sentence case** unless brand dictates otherwise; loading/disabled states for forms. Secondary actions on seamless pages often use **glass** (soft fill + inset hairline) and **transition** on hover instead of a heavy outline swap.
- **Cards / tiles**: If the page is **seamless**, prefer **one tile treatment** (borderless + hover depth) across features; reserve **boxed cards** for high-emphasis moments only. Don’t mix five competing card styles.
- **Forms** (waitlist, demo): **minimal fields**, visible labels, helpful errors, sensible `autocomplete`, inline validation where it reduces friction.
- **Sticky elements**: sticky nav or CTA only if they **don’t obscure** content or the primary tap targets on mobile.

## Motion

- **Subtle** (short fades/slides); **respect `prefers-reduced-motion`**: provide reduced or no motion alternative.
- **Do not** animate large hero media in a way that delays **LCP** or causes **CLS**.

## Responsive and touch

- **Tap targets** ≥ **44×44px** where possible; adequate spacing between adjacent controls.
- **Thumb reach**: primary actions in comfortable zones on common phone sizes.
- **Breakpoints**: refine at least **mobile / tablet / desktop**; check common widths (e.g. 390, 768, 1280).

## Copy collaboration (when writing UI text)

- Headlines: **specific** (who it’s for + outcome), not vague (“The future of work”).
- CTAs: **verb + outcome** (“Start free trial” vs “Submit”).
- Microcopy under buttons reduces anxiety (“No credit card”, “Cancel anytime”) **only if true**.

## Pre-ship checklist

- [ ] Clear **h1**; heading order makes sense for screen readers.
- [ ] Primary CTA obvious; secondary doesn’t compete visually.
- [ ] Contrast and focus states verified on real components.
- [ ] Mobile layout read and tapped without zooming.
- [ ] No layout shift from fonts, images, or late-injected banners.
- [ ] Reduced motion path doesn’t break layout or meaning.
- [ ] Section breaks feel **intentional** (fade / wash / hairline), not a wall of **identical boxes and borders**.

## More depth

- Section-level wire notes, metric ideas, and anti-patterns: [reference.md](reference.md)
