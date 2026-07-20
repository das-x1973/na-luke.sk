# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static, single-page **Astro** brochure website for a small Slovak family farm
(bio honey, free-range eggs, beeswax candles). All visible content is in
**Slovak**. It is intentionally **static with no backend** — no e-shop, no forms,
no database. Live at https://na-luke.sk.

## Commands

```bash
npm install        # once
npm run dev        # dev server at http://localhost:4321
npm run build      # static output to dist/
npm run preview    # serve the built dist/ locally
```

There are no tests, linter, or TypeScript build step beyond Astro's own
type-checking (`tsconfig.json` extends `astro/tsconfigs/strict`).

## Architecture

The entire site is **one file**: `src/pages/index.astro`. Understanding its three
parts is enough to work productively:

1. **Content lives in frontmatter data objects** at the top (`farma`, `produkty`,
   `kontakt`). To change any text, product, or contact detail, edit these objects
   — not the markup below. This is the single source of truth for copy.
2. **`renderIlustracia(typ)`** (also in frontmatter) returns inline **SVG strings**
   for the product cards. There are deliberately **no external/raster images** in
   the design — illustrations (honey jars, eggs, candle) and scenes (hen, bee) are
   hand-drawn SVG so the site is fully self-contained and fast.
3. **A single scoped `<style>` block** holds all page-specific CSS, using BEM-ish
   class names (`.hero__title`, `.card__art`, etc.). Injected raw SVG (via
   `set:html`) is NOT scoped by Astro — style it with `wrapper :global(svg)`
   selectors, never bare descendant selectors.

**The brand mark** (`znackaD`/`renderZnacka()` in frontmatter, also
`public/favicon.svg`) is Oto's own hand-drawn calligraphic signature, vectorized
faithfully (potrace) from his marker sketch — the original photo is
`design/logo-oto-original.jpeg`. The hand-drawn wobble is intentional; do not
smooth, redraw, or "clean up" this path. It appears in the nav brand and the
footer.

Design tokens are centralized in **`src/styles/global.css`** under `:root` — the
palette (beeswax/honey/bark/herb hex values), the Fraunces + Hanken Grotesk type
stack, and a `clamp()`-based fluid type scale (`--step--1` … `--step-4`). Change
colors and fonts there, not inline. Fonts load from Google Fonts in the `<head>`.

When editing CSS, watch selector specificity between the element-level `.section`
rules and component classes — section padding in particular is easy to clobber.

## Content placeholders

Contact details and the farm name are currently **placeholders** awaiting the real
values: farm name "Rodinná farma Oto", phone `+421 900 000 000`, email
`ahoj@farmaoto.sk`, address `Dolná 12…`. Replace these in the `farma`/`kontakt`
objects before treating the site as final.

## Deployment

- GitHub repo: `das-x1973/na-luke.sk`. **Pushing to `main` auto-deploys to Netlify**
  (config in `netlify.toml`: `npm run build` → publish `dist`, Node 22). A push goes
  live on na-luke.sk in well under a minute. That is the normal workflow: edit →
  `git push` → done.
- DNS is at WebSupport (registrar); only the apex + `www` A records point at Netlify
  (`75.2.60.5`). All email-related DNS records are managed at WebSupport and must be
  left untouched.

## E-shop / ordering — off by design

An "Ako objednať a doručenie" (order + SK/CZ shipping) section was built and then
**removed from the live site** — selling/shipping eggs and honey requires Slovak
RVPS veterinary/food registration the owner has not pursued. That work is preserved
on the **`feature/eshop-objednavka`** branch. Do not add ordering/commerce to the
live site (`main`) unless the owner has explicitly agreed to enable it.

---
*Part of the Sille family trust — estate index: `../SilleFamily/HOLDINGS.md`.*
