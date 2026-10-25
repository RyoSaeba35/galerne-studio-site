# galernestudio.com

Static site for Galerne Studio, built with Astro. EN at `/`, FR at `/fr`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Before going live: fill in

| File | What |
|---|---|
| `public/app-ads.txt` | Replace `pub-XXXXXXXXXXXXXXXX` with your AdMob publisher ID |
| `src/views/Legal.astro` | `[SIRET]` and `[ADRESSE / ADDRESS]` |
| `src/data/privacy.ts` | `[ADDRESS]` / `[ADRESSE]` in the controller block |
| `src/data/privacy.ts` | Check the ads section matches each app (AdMob + consent form, "privacy options" entry in the app) |
| `src/data/apps.ts` | Optional: `msStoreUrl` for Topotree / Duplicate Finder, screenshots for app pages |

## Deploy on Cloudflare Pages

1. Push this folder to a GitHub repo (e.g. `galerne-studio-site`).
2. Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git > pick the repo.
3. Framework preset: **Astro**. Build command: `npm run build`. Output directory: `dist`.
4. After the first deploy: project > Custom domains > add `galernestudio.com` and `www.galernestudio.com`.
5. Redirect `www` to the bare domain: Rules > Redirect Rules > `www.galernestudio.com/*` to `https://galernestudio.com/${1}` (301).

Every `git push` to `main` redeploys automatically.

## Email (contact@galernestudio.com)

Cloudflare dashboard > galernestudio.com > Email > Email Routing > enable, then add a rule
`contact@galernestudio.com` forwarding to your inbox. Free, takes 2 minutes.

## After deploy

- Check https://galernestudio.com/app-ads.txt loads as plain text.
- In Play Console, set the website of each app's store listing to `https://galernestudio.com`
  (AdMob reads app-ads.txt from that domain). Allow a few days for AdMob to re-crawl.
- Fidèle privacy policy URL in Play Console: `https://galernestudio.com/privacy/fidele`
  (replaces the GitHub Pages one). Kotoba Ciphers: `https://galernestudio.com/privacy/kotoba-ciphers`.

## Adding an app

Add an entry in `src/data/apps.ts`. To give it a page on this site, set `hasPage: true`, add an
`appPages` entry, and a policy in `src/data/privacy.ts`. Pages are generated automatically.
