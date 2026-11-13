# Growthera Ventures Website

Production-ready multi-page website for **Growthera Ventures Private Limited** — a business consulting and growth solutions company based in Noida, India.

Built with Vite, React 18, TypeScript, Tailwind CSS, Framer Motion, Radix/shadcn-style UI, React Router, Embla Carousel, Lenis, and React Hook Form + Zod.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## Contact form setup

Copy `.env.example` to `.env` and fill in either EmailJS or Formspree keys:

```bash
cp .env.example .env
```

- **EmailJS:** set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`
- **Formspree:** set `VITE_FORMSPREE_ENDPOINT`

If neither is configured, submissions still succeed in the UI and log to the browser console (useful for local demos).

## Content editing

All copy lives in typed data modules under `src/data/`:

- `company.ts` — company details, vision, mission, values
- `services.ts` — 12 services and detail content
- `industries.ts` — sector list
- `approach.ts` — business approach + engagement process
- `navigation.ts` — nav / footer links

Edit those files without touching page components.

## Deploy

### Vercel

1. Push the repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Framework preset: **Vite**. Build command: `npm run build`. Output: `dist`.
4. Add the same env vars from `.env.example` in Project Settings → Environment Variables.
5. Deploy.

### Netlify

1. Import the repo in [Netlify](https://netlify.com).
2. Build command: `npm run build`. Publish directory: `dist`.
3. Add a `public/_redirects` file (already included) or set SPA redirect: `/* /index.html 200`.
4. Add env vars, then deploy.

## Project structure

```
src/
  components/   # ui, layout, sections, shared
  pages/        # route-level screens
  data/         # typed content
  hooks/        # Lenis, scroll helpers
  lib/          # utils, SEO, icons
  assets/
```

## Brand notes

Design tokens follow the company PDF: navy `#2B2550`, purple `#6F63C8`, lavender `#A99FE6`, soft page `#F4F3FA`, gold accent `#E0A93B`. The site intentionally avoids unverified stats, awards, testimonials and success rates.
