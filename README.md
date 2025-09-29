# ZED — Sleep Revolutionized (Next.js + Tailwind)

This repository contains a simple, fast site scaffold for ZED using **Next.js 14** (App Router) and **Tailwind CSS**.
It uses your uploaded assets:
- `/public/bunny.png` (also used as favicon)
- `/public/logo-red.png`
- `/public/logo-green.png`

## Quickstart

```bash
# 1) Install deps
npm install

# 2) Run locally
npm run dev
```

## Deploy to Vercel

1. Create a new GitHub repo and push this folder.
2. Go to https://vercel.com/new and import the repo.
3. Use defaults; Vercel auto-detects Next.js. Deploy.
4. Set a custom domain later if desired.

## Customize Content

- Update copy in `app/*/page.tsx` files.
- Replace images in `/public`.
- Colors live in `tailwind.config.js` as `zedPink`, `zedOlive`, `zedPurple`.
- Favicon is `/public/bunny.png` via `app/layout.tsx` metadata `icons`.

## Notes
- This starter is static and fast. You can add products/CMS later.
- Keep images lightweight for best performance.
