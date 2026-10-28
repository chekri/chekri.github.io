# Chakri portfolio (React + Tailwind + Vite)

    npm install
    npm run dev      # local dev server
    npm run build    # static site in dist/

One fluid scrolling page, one file per section (`src/sections/`). Widths use percentages, `clamp()` and fluid grids, so it adapts from phones to wide monitors.

- `src/components/` shared pieces (Tile, PubCard, Buckling demo, PhasePortrait, ...)
- `src/data/content.js` all text and links in one place
- Palette tokens live in `src/index.css` (`@theme`)
- Put your photo at `public/images/profile.jpg` (a placeholder shows until then)

## Adding photographs
1. Copy images into `public/images/photos/`.
2. List them in `photos` in `src/data/content.js` (see the example in the comment above it).
They appear on the Beyond Research page (`#/beyond`) as a fluid gallery with a click-to-enlarge viewer.
