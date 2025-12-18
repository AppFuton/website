# Futon Website

Documentation website for the Futon project, built with VitePress. Adapted from the Kotatsu website structure.

Futon is a community-maintained fork of Kotatsu. We gratefully acknowledge the Kotatsu developers and contributors for their original work and inspiration.

## Links
- **Futon**: https://github.com/AppFuton/Futon
- **Futon Parsers**: https://github.com/AppFuton/futon-parsers
- **Original Kotatsu**: https://github.com/KotatsuApp

## Prerequisites
- Node.js 18+ recommended
- npm, pnpm, or yarn

## Setup
```bash
npm install
```

## Development
```bash
npm run docs:dev
```

Then open http://localhost:5173 (or the URL shown in terminal)

## Build
```bash
npm run docs:build
```

## Preview (after build)
```bash
npm run docs:preview
```

## Structure

### Core Pages
- `website/index.md` — Homepage with features and acknowledgements
- `website/download/` — Download page
- `website/api/` — API documentation
- `website/parsers/` — Parsers library documentation

### User Manual
- `website/manuals/faq/` — Frequently Asked Questions
  - general/ — General questions about Futon
  - feed/ — Feed-related questions
  - explore/ — Source browsing questions
  - reader/ — Reader functionality
  - settings/ — App settings
  - miscellaneous/ — Misc topics
  
- `website/manuals/guides/` — User guides
  - getting-started/ — Installation and first steps
  - troubleshooting/ — Common issues and solutions
  - backups/ — Backup and restore
  - tracking/ — Tracker integration (MAL, AniList, Shikimori)
  - categories/ — Organizing favorites
  - synchronization/ — Multi-device sync

### Configuration
- `website/.vitepress/config.ts` — VitePress configuration with navigation and theme

## Content Notes

- All content adapted from Kotatsu website with Futon branding
- Image references include `<!-- TODO -->` comments for replacement
- Sandbox and Kotatsu SDK pages intentionally excluded per requirements
- Navigation shortcodes simplified to direct text references

## TODO Items

Search for `<!-- TODO` in markdown files to find:
- Image placeholder paths that need actual assets
- Download button components to implement
- Any feature-specific content requiring Futon-specific details
