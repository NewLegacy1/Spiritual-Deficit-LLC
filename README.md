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

## Deploy on Vercel

1. Import [NewLegacy1/Spiritual-Deficit-LLC](https://github.com/NewLegacy1/Spiritual-Deficit-LLC) in the [Vercel dashboard](https://vercel.com/new).
2. **Root Directory:** leave empty (repo root — where `package.json` lives).
3. **Framework Preset:** Next.js (auto-detected).
4. Deploy `main`. If you imported before the first push, open the project → **Deployments** → **Redeploy** on the latest commit.

A platform `404 NOT_FOUND` (not your Next.js page) means that hostname has no successful deployment yet — check the Deployments tab for a failed build or trigger a new deploy after pushing.

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
