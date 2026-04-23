# Let It Bloom Website

Dieses Projekt wurde von Vite/React auf Next.js (App Router) migriert.

## Voraussetzungen

- Node.js 20+
- npm

## Entwicklung

```bash
npm install
npm run dev
```

App lokal unter `http://localhost:3000`.

## Produktion

```bash
npm run build
npm run start
```

## Technischer Stand

- Next.js App Router (`app/layout.tsx`, `app/page.tsx`)
- Bestehende Komponentenstruktur unter `src/components` beibehalten
- Tailwind CSS v4 via `@tailwindcss/postcss`
- Assets unveraendert in `public/images`
