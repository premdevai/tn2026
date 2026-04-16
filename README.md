# Vote Smart TN

Vote Smart TN is a mobile-first, static-first Next.js frontend for a Tamil Nadu voter-helper utility. The app currently runs on typed static repositories with demo civic records for UI validation. There is no backend, authentication, websocket, chat, AI, or real map integration yet.

## Stack

- Next.js App Router with TypeScript
- Tailwind CSS with CSS-variable theme tokens
- shadcn/ui-style primitives for reusable UI foundations
- Zod schemas for every core entity
- Zustand for small client-only state
- Static-first repository and service abstractions over typed demo datasets
- Plus Jakarta Sans for editorial UI, Inter for data/caption surfaces, and Material Symbols Outlined icons

## Creative Direction

The design system follows "The Digital Statesman": calm, authoritative, non-partisan, and editorial. The palette uses trust navy, action teal, caution gold, alert crimson, surface white, and subtle slate borders while keeping the screen light and readable.

Implementation notes:

- Letter spacing stays at `0` for layout stability.
- Card and button radius stays at `8px` or less for the current UI constraints.
- Navy is used for authority and text, not as a dominant full-screen dark theme.

## Project Structure

```txt
src/app                 Route-based pages and metadata
src/components/layout   App shell, top header, bottom navigation
src/components/shared   Cross-feature UI such as cards, chips, search, map placeholder
src/features/booths     Booth UI, repositories, services
src/features/checklist  Checklist UI, repositories, services
src/features/candidates Candidate UI, repositories, services
src/features/comparison Manifesto comparison UI, repositories, services
src/features/districts  District and constituency UI, repositories, services
src/features/guide      First-time voter guide UI, repositories, services
src/features/stations   Polling station UI, repositories, services
src/features/about      About page feature content
src/lib/constants       App constants, navigation, imagery
src/lib/data            Shared placeholder datasets for initial wiring
src/lib/repositories    Repository composition
src/lib/services        Service composition
src/lib/schemas         Zod schemas and inferred entity types
src/lib/utils           Shared utilities
src/store               Small client state slices
```

## Architecture Decisions

The app uses feature-based structure instead of a flat `components/utils/pages` layout. Each feature owns its feature UI, repository contract, static placeholder repository, and service layer. Shared primitives live under `src/components/shared`.

Pages never import data arrays directly. Route components call `appServices`, which are composed in `src/lib/services/app-services.ts`. Today those services use static placeholder repositories from `src/lib/repositories/static-repositories.ts`. Later, a Cloudflare Workers API adapter can implement the same repository contracts without rewriting the UI.

All entity shapes are validated with Zod:

- booth
- candidate
- crowd report
- district and constituency
- guide content
- manifesto comparison
- recommendation
- checklist item
- station

Repository methods return promises even though the current datasets are local. This keeps the UI ready for TanStack Query and async API adapters later.

Zustand is intentionally limited to client-only interaction state:

- checklist completion
- candidate filters
- quick report draft selection
- selected station persistence

## Future Cloudflare Backend Path

When a Workers + D1 + KV backend is ready:

1. Add API repositories that implement the existing repository interfaces.
2. Keep Zod schemas as the response validation boundary.
3. Replace the static repository composition in `src/lib/repositories/static-repositories.ts` with environment-aware composition.
4. Introduce TanStack Query in client components that need async refresh, using the existing service methods as query functions.
5. Keep route pages SEO-friendly by preserving App Router pages and metadata exports.

No UI component should need to know whether data came from static placeholders, a Worker endpoint, D1, or KV.

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Current Routes

- `/`
- `/districts`
- `/districts/[slug]`
- `/districts/[slug]/constituencies/[constituencySlug]`
- `/booth/[slug]`
- `/checklist`
- `/candidates`
- `/comparison`
- `/guide`
- `/stations`
- `/about`
- `/map`

## Notes

Demo records are for interface validation only. Connect official sources before public release.
