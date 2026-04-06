---
name: nextjs-ssr-seo
description: Develops Next.js App Router apps with server-first rendering, streaming, Metadata API, sitemaps, and performance for SEO. Use when building or tuning Next.js pages, SSR/RSC, metadata, Core Web Vitals, or when the user mentions Next.js, App Router, SSR, or SEO.
---

# Next.js SSR & SEO (App Router)

## Authority

Training data may be outdated. **Before implementing**: read the guides for this repo’s installed version under `node_modules/next/dist/docs/` (especially `01-app/`). Prefer those APIs over memory. Heed deprecations in those docs.

## Defaults

- **Server Components first**: `app/` routes are Server Components unless marked with `'use client'`.
- **Colocate data fetching** in Server Components or Route Handlers; pass serializable props to clients.
- **Async request APIs**: In current App Router, `params` and `searchParams` in layouts/pages are often **Promises**—`await` them in async components. Confirm the exact signature in the installed `page.md` / layout docs.

## SSR & data

- Prefer **server-side** fetching in Server Components for SEO-critical HTML and first paint.
- Align **caching** with product needs: use the installed docs for `fetch` cache options, `revalidate`, `dynamic`, Route Segment Config, and caching tags (when applicable).
- Use **loading.tsx** and **Suspense** boundaries so shells stream while slow segments resolve (see `streaming.md` in installed docs).

## SEO: Metadata API

- Export **`metadata`** for static titles/descriptions or **`generateMetadata`** when titles, canonical URLs, or Open Graph data depend on route params or fetched data.
- Set **`title`**, **`description`**, **`alternates.canonical`**, **`openGraph`**, **`twitter`**, **`robots`** as needed. Merge or extend parent metadata when appropriate (`ResolvingMetadata` / parent metadata patterns in installed docs).
- Avoid duplicating meta in ad hoc `<head>` in RSC unless a documented pattern requires it.

## SEO: discovery & structured data

- Add **`sitemap.ts`** / **`robots.ts`** (file conventions) when the site should be crawled and indexed; see `01-metadata/`-related docs in `node_modules/next/dist/docs/`.
- For rich results, emit **JSON-LD** in the server tree (e.g. `<script type="application/ld+json">` with safe JSON) for Product, Article, Organization, etc.—validate with Google’s Rich Results Test.

## Client components

- Use **`'use client'`** only for interactivity (state, effects, browser APIs, event handlers). Keep the client boundary **small** to preserve SSR and bundle size.
- For client-only hooks (`useSearchParams`, etc.), follow the installed docs’ patterns (including Suspense boundaries where required).

## Performance (SEO-adjacent)

- Use **`next/image`** with explicit sizes; use **`next/font`** for font optimization.
- Monitor **Core Web Vitals** (LCP, CLS, INP); avoid layout shift from images and late-loaded fonts.

## Checklist (pages that must rank)

- [ ] Unique title and meta description per route (or `generateMetadata`).
- [ ] Canonical URL set when duplicates or query variants exist.
- [ ] OG/Twitter images and titles match share intent.
- [ ] Critical content is in **server-rendered HTML**, not only client-side.
- [ ] Sitemap/robots updated for production domains.

## Optional deep dive

- For long-form API reference, open the relevant files under `node_modules/next/dist/docs/01-app/` instead of guessing.
