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

The site is **bilingual** (SK at `/`, EN at `/en/`) and split into four files:

- `src/components/Stranka.astro` — ALL markup, CSS and SVG, shared by both
  languages. Takes one prop `t` (the content object). Language-independent
  data also lives here (`objednavka.iban`/`majitelUctu` for the payment QR).
- `src/obsah/sk.ts` — every Slovak text, exported as `sk`; its shape is the
  `Obsah` type.
- `src/obsah/en.ts` — English texts, typed `Obsah`, so `astro check` fails if
  a translation key is missing. **Any copy change must be made in BOTH files.**
- `src/pages/index.astro` + `src/pages/en/index.astro` — thin shells that
  render `<Stranka t={...} />`.

Understanding three things is enough to work productively:

1. **Content lives in `src/obsah/*.ts`** (`farma`, `den`, `produkty`,
   `kontakt`, …). To change any text, edit these objects — never the markup.
2. **`renderIlustracia(typ)`** (in `Stranka.astro`'s frontmatter) returns inline
   **SVG strings** for the cards — hand-drawn illustrations (jars, forest, ensō,
   hive…). The only raster images are Oto's own photographs in `public/foto/`
   (always strip EXIF/GPS via sharp before adding one; originals stay in the
   gitignored `received_images/`).
3. **A single scoped `<style>` block** in `Stranka.astro` holds all
   page-specific CSS, using BEM-ish class names (`.hero__title`, `.card__art`). Injected raw SVG (via
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
*Part of the Sille family trust. At session start, read `../SilleFamily/HOLDINGS.md` — every hat sees the whole estate at a glance; this door's work stays in this door.*

Gabik's farewell ("see you soon" etc.) = sign-off trigger: truth file +
HOLDINGS row if status changed + commit/push — then goodbye.
