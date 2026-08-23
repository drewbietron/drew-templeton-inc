import { GetServerSideProps } from "next";
import { CASE_STUDIES } from "../lib/content/case-studies";
import { PROJECTS } from "../lib/content/past-work";
import { absoluteUrl } from "../lib/site";

/**
 * Hand-rolled sitemap. Kept server-side so it always reflects the content
 * modules, and so the URL set stays tiny and accurate (no junk routes).
 */
const LAST_DESIGN_UPDATE = "2026-08-23";

interface Entry {
  path: string;
  priority: string;
  changefreq: string;
  lastmod?: string;
}

function entries(): Entry[] {
  return [
    { path: "/", priority: "1.0", changefreq: "monthly" },
    { path: "/about", priority: "0.8", changefreq: "monthly" },
    { path: "/contact", priority: "0.6", changefreq: "yearly" },
    { path: "/past-work", priority: "0.7", changefreq: "monthly" },
    ...CASE_STUDIES.map((c) => ({
      path: `/case-studies/${c.slug}`,
      priority: "0.9",
      changefreq: "monthly",
      lastmod: c.datePublished,
    })),
    ...PROJECTS.map((p) => ({
      path: `/past-work/${p.slug}`,
      priority: "0.6",
      changefreq: "yearly",
      lastmod: p.datePublished,
    })),
  ];
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    entries()
      .map(
        (e) =>
          `  <url>\n` +
          `    <loc>${absoluteUrl(e.path)}</loc>\n` +
          `    <lastmod>${e.lastmod || LAST_DESIGN_UPDATE}</lastmod>\n` +
          `    <changefreq>${e.changefreq}</changefreq>\n` +
          `    <priority>${e.priority}</priority>\n` +
          `  </url>`
      )
      .join("\n") +
    `\n</urlset>\n`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=604800"
  );
  res.write(xml);
  res.end();
  return { props: {} };
};

export default function Sitemap() {
  return null;
}
