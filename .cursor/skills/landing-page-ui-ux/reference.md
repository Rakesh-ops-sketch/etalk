# Landing page reference (optional detail)

Use when the user wants **more structure**, **metrics**, or **critique** of an existing page.

## Hero formulas (starting points, not law)

- **Outcome**: “[Achieve X] without [pain Y]”
- **Audience**: “[Product] for [role] who need [job to be done]”
- **Proof-led**: “[Metric] [teams/users] use [product] to [outcome]”

Keep subhead to **one or two lines**; link “Learn more” only if it goes somewhere useful.

## Social proof that reads real

- Prefer **logo + context** (“Payments at Acme”) over anonymous “Company” tiles.
- Quotes: **specific result** + **role/title**; avoid identical quote shapes repeated six times.
- If metrics (“99.9% uptime”), ensure they are **defensible** and updated.

## Feature blocks

- **3–6** items is easier to remember than ten.
- Icon + headline + **one** benefit line; optional “Learn more” to detail pages.
- Align icons (size, stroke, color) so the grid feels **one system**.

## Pricing and comparison tables

- **Recommended** tier visually highlighted; feature rows scannable; sticky header on desktop if the table is long.
- Mobile: **cards per tier** often beat squashed tables.

## FAQ

- Questions phrased as **users** ask them; answers short with link to docs if needed.
- Schema: FAQ JSON-LD is an **SEO** concern—coordinate with the Next.js/SEO skill if used.

## Anti-patterns to flag or fix

- Multiple competing primaries (two loud buttons of equal weight).
- Carousels as the **only** place key value props live (many users never see slide 2).
- Autoplay video/audio with sound; intrusive modals on **first paint**.
- Fake urgency (“Only 2 seats left”) or hidden costs—reject or replace with honest patterns.
- Tiny legal gray-on-gray that fails contrast.

## Critique order (when reviewing a page)

1. Value prop and CTA in **5 seconds**
2. Trust and credibility **near the decision**
3. Scan path and **section order**
4. Typography, spacing, and **component consistency**
5. Accessibility and **mobile** ergonomics
6. Performance perception (jank, LCP, CLS)—hand off to framework/perf tooling as needed

## Seamless layout and motion

Use when implementing or reviewing **anti-boxy**, **continuous-surface** marketing pages.

### Section breaks

- **Hairline separator**: 1px tall, full width, `linear-gradient(90deg, transparent, accent at ~20–30% opacity, transparent)`; center weight reads more **premium** than a solid border.
- **Atmosphere sections**: Layer **radial** (soft blob, often top or bottom) + **linear** (subtle vertical tint). **Alternate** two recipes (e.g. navy-leaning vs gold-leaning ambient) for rhythm instead of one flat gray between every block.
- Decorative separators: `aria-hidden` where they convey no unique content.

### Feature tiles

- Default: very subtle fill (`rgba(255,255,255,0.02)` or token equivalent), **no** default border, consistent radius.
- Hover (only if `prefers-reduced-motion: no-preference`): small **translateY**, slightly stronger fill, **box-shadow** with optional **1px accent** at low alpha—avoid huge jumps.

### Icon treatment

- **Radial glow** behind icon (stronger toward one corner) instead of a **stroked rounded square** that matches old “card in card” UI.

### Trust / multi-column

- Between columns (desktop): `w-px` with `linear-gradient` or `bg-gradient-to-b from-transparent via-white/10 to-transparent`. Hide dividers when stacking on small screens.

### Problem / solution narrative

- **Vertical accent line** via `::before` (2px wide, gradient top-to-bottom) with padding-left on the copy block—reduces “two boxes” symmetry.

### FAQ

- List rows with **top/bottom hairline** only; **summary** row hover can lighten background slightly. Chevron: **transition** rotate `~300ms`; respect **reduced motion** (instant state change or opacity-only).

### CTA shell

- Large radius; background **linear-gradient** (navy/ink → near-black); **inset** 1px `white/5–8%`; optional **radial** highlight from top; depth from **soft outer shadow**, not a thick gold frame.

### Hero depth

- **Large blurred ellipses** (`blur-3xl` scale) with **low opacity** for gold/brand and cool tones—keeps LCP text readable; do not animate these in a way that hurts **LCP** or **CLS**.

### Checklist (seamless)

- [ ] Not every section uses **border + card border** (double chrome).
- [ ] Hover/focus still clear if **transform** is disabled (color, shadow, outline).
- [ ] **Sticky header** border is subtle enough not to “chop” the page into strips.
