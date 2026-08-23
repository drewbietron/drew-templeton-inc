# drewtempleton.com

Personal site for Drew Templeton — "I make companies AI native — including my own."

Built with [Next.js](https://nextjs.org/) (pages router), TypeScript, and SCSS modules. Fonts (Space Grotesk, JetBrains Mono) are self-hosted via `next/font`. Every page is statically generated.

## Develop

```bash
yarn          # install
yarn dev      # http://localhost:3000
yarn build    # production build (also runs type-check + lint)
yarn start    # serve the production build
```

## Deploy

Deployment is handled entirely by **Vercel's Git integration** — there are no GitHub Actions.

- Push a branch / open a PR → Vercel builds a **Preview** deployment and comments the URL on the PR.
- Merge to `main` → Vercel builds **Production** at https://www.drewtempleton.com.

Environment variables live in the Vercel project settings (`NEXT_PUBLIC_WEB_URL`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`). `src/lib/site.ts` falls back to the production URL if `NEXT_PUBLIC_WEB_URL` is unset.

## Where things live

```
src/
  pages/               routes (/, /about, /contact, /past-work, /past-work/[slug],
                       /case-studies/[slug], /sitemap.xml, 404)
  components/          nav, footer, seo (meta + JSON-LD), ui/ (terminal, case-card, rich-text)
  lib/site.ts          site-wide constants (URL, email, links)
  lib/content/         all copy — case studies, past-work projects, about timeline
  lib/structured-data  schema.org helpers (Person, Organization, WebSite, Article, Breadcrumbs)
  lib/watermark.ts     the AI watermark (HTML comment, header, console banner)
  styles/globals.scss  design tokens + primitives
public/
  images/, work/       photos (web-optimized)
  og/                  1200×630 Open Graph cards, one per page
  robots.txt, llms.txt, site.webmanifest, favicons
```

To change copy, edit the files in `src/lib/content/` — pages render from them. To add a case study or project, add an entry there; routes, sitemap, and `llms.txt` links follow.

## SEO

- Per-page `<title>`, description, canonical, robots, Open Graph, Twitter cards (`src/components/seo.tsx`).
- JSON-LD on every page; `Person`/`Organization`/`WebSite` on the home page, `Article` + `BreadcrumbList` on case studies and projects.
- `/sitemap.xml` (generated from content), `/robots.txt` (AI crawlers explicitly allowed), `/llms.txt`.
- 301s from the previous site structure (`/work/*`, `/services/*`) in `next.config.js`.
- Security headers, long-lived caching for static assets, `next/image` with AVIF/WebP.

## The AI watermark

Agents reading the raw source get a note and a couple of jokes: an HTML comment at the top of `<body>`, comments in `robots.txt`, an `X-AI-Watermark` response header, and `/llms.txt`. Humans with devtools open get a console banner. None of it is visible on the page and none of it instructs a model to do anything — it's just hello.
