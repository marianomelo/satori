# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Project Does

Multi-brand social media image generator using Satori (JSX → SVG) and resvg (SVG → PNG). Generates feed (1080x1080) and story (1080x1920) images for Instagram/social media, each brand with its own colors, fonts, and templates.

## Commands

```bash
# Generate all images for a brand
npx tsx src/generate.tsx <brand-name>
npx tsx src/generate.tsx subdominio
npx tsx src/generate.tsx comcer

# Run a standalone image script
npx tsx src/feed-vajilla.tsx
npx tsx src/story-vajilla.tsx

# Build edge script bundle (bunny.net deploy - not currently used)
npm run build
```

## Architecture

**Pipeline:** JSX element → `satori` (SVG) → `@resvg/resvg-js` (PNG) → `output/<brand>/`

### Core Files

- `src/render.ts` — Shared render function: takes JSX element + dimensions + Brand, outputs PNG to `output/<brand>/`
- `src/generate.tsx` — CLI entry point, reads brand name from `process.argv[2]`, dynamically imports `src/templates/<brand>.tsx`
- `src/brands/types.ts` — `Brand` interface (colors, fonts, logo, slogan) and FEED/STORY dimension constants

### Brand System

Each brand needs 3 files:

1. **`src/brands/<name>.ts`** — Brand config: colors, font names, font file references, logo text
2. **`src/templates/<name>.tsx`** — Export `generate(brand: Brand)` function with all JSX templates
3. **Register in `src/brands/index.ts`** — Import and add to the `brands` record

### Standalone Scripts

Files like `src/feed-vajilla.tsx` and `src/story-vajilla.tsx` are one-off image generators that import `render` and `getBrand` directly. Used for product-specific images with embedded photos/logos.

### Key Directories

- `fonts/` — Static .ttf font files (downloaded from Google Fonts gstatic CDN). Satori does NOT support variable fonts — always use static variants.
- `assets/` — Brand logos and product images (PNG). Embedded in JSX via base64 data URIs.
- `output/<brand>/` — Generated PNG files, organized by brand name.

## Important Constraints

- **Satori only supports a subset of CSS**: flexbox layout only (no grid), no `position: relative` children, limited properties. Always use `display: 'flex'` on container divs.
- **Fonts must be static .ttf** — variable fonts (.ttf with axes) cause `Unsupported OpenType signature` errors.
- **Font download**: Use `fonts.googleapis.com/css2` API to get gstatic URLs, then download from those URLs. Direct GitHub raw URLs for Google Fonts often return HTML instead of font files.
- **Images in JSX**: Use `<img src="data:image/png;base64,..." />` with base64-encoded files read via `fs.readFileSync`.
- **All .ts/.tsx files use ESM** (`"type": "module"` in package.json). Use `.js` extensions in import paths.
