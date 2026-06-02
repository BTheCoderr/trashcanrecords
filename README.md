# BTheSound × Trash Can Records — Fan Hub

Premium link-in-bio landing page. Next.js, React, Tailwind CSS.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## File structure

```
trashcanrecords/
├── config/site.ts              ★ All links, assets, video path
├── public/
│   ├── images/brand/           logo-hero, logo-banner, logo-monogram
│   ├── images/merch/           tee-black.png, tee-white.png
│   └── videos/                 latest-visual.mp4 (your clay visual)
├── components/
│   ├── Hero.tsx                Chrome logo + BTheSound
│   ├── LatestVisual.tsx        Video player section
│   ├── BrandBanner.tsx         Cinematic wide logo
│   └── ...
└── app/page.tsx
```

---

## Where to edit (`config/site.ts`)

### Central links object

| Field | Status |
|-------|--------|
| `links.spotify` | ✅ Live |
| `links.appleMusic` | ✅ Live |
| `links.youtube` | ✅ Live |
| `links.instagram` | ✅ Live |
| `links.tiktok` | Placeholder URL |
| `links.facebook` | Placeholder |
| `links.threads` | Placeholder |
| `links.x` | Placeholder |
| `links.allPlatforms` | Placeholder smart link |
| `links.contactEmail` | Placeholder |
| `links.bookingEmail` | Placeholder |
| `links.soundcloud` / `audiomack` / `youtubeMusic` | Placeholders |

### Brand images

`brandAssets.logoHero` — hero (black/chrome oval)  
`brandAssets.logoBanner` — mid-page cinematic banner  
Replace files in `public/images/brand/` or change paths in config.

### Latest visual video

1. Drop MP4 into `public/videos/` (default: `latest-visual.mp4`)
2. Set `latestVisual.videoSrc` to match filename
3. Set `latestVisual.videoEnabled: true` (or `false` for placeholder UI)

Optional poster: `latestVisual.posterImage = "/images/..."`

### Merch

Only black + white tees. `available: false` shows **Coming Soon** badge + **Notify Me** (links to `#join`). Set `available: true` when store opens.

---

## Deploy

```bash
npm run build
npm start
```

Works on Vercel, Netlify, etc.
