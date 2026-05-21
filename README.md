# MBI — Moral Bankruptcy Inc.

Controlled chaos. Artifact, not brand.

## Stack

- Next.js 15 (App Router)
- Tailwind CSS v4
- IBM Plex Mono

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Brand tokens

| Token | Value | Usage |
|-------|-------|--------|
| Linen | `#F2F0EB` | Background |
| Charcoal | `#111010` | Text, UI |
| Arterial | `#8B1A1A` | Countdown, episode tags, one rule only |

## YouTube

Edit `src/lib/videos.ts` — set each slot to a YouTube ID string, or `null` for a black `[TAPE ## — LOADING]` card until footage exists. API wiring later.

```ts
export const TAPE_SLOTS = ["yourVideoId", null, null] as const;
```

## Countdown

Target date in `src/components/Countdown.tsx` — arbitrary, unlabeled by design.
