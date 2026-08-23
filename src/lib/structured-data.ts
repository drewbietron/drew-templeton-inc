import {
  absoluteUrl,
  ADDRESS,
  DEFAULT_DESCRIPTION,
  EMAIL,
  LEGAL_NAME,
  LINKS,
  SITE_NAME,
  SITE_URL,
} from "./site";

/** Stable @id so every page points at the same Person node. */
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const ORG_ID = `${SITE_URL}/#organization`;

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE_NAME,
    givenName: "Drew",
    familyName: "Templeton",
    url: SITE_URL,
    image: absoluteUrl("/images/drew-templeton.jpg"),
    email: `mailto:${EMAIL}`,
    jobTitle: "Product Leader & Full-Stack Engineer",
    description: DEFAULT_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.zip,
      addressCountry: "US",
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "DePaul University" },
      { "@type": "CollegeOrUniversity", name: "University of Missouri" },
    ],
    knowsAbout: [
      "AI agents",
      "Agent frameworks",
      "Large language models",
      "Product management",
      "Full-stack engineering",
      "Next.js",
      "React Native",
      "Marketplaces",
    ],
    sameAs: [LINKS.randal, LINKS.pbvault],
    worksFor: { "@id": ORG_ID },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: LEGAL_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/icon-512.png"),
    founder: { "@id": PERSON_ID },
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.zip,
      addressCountry: "US",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    publisher: { "@id": PERSON_ID },
    inLanguage: "en-US",
  };
}

/** Randal — the product. Linked to the Person so search/AI tie the two together. */
export function randalSoftwareSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${LINKS.randal}/#app`,
    name: "Randal",
    url: LINKS.randal,
    applicationCategory: "BusinessApplication",
    operatingSystem: "macOS",
    description:
      "An AI chassis for running real work with agents: a native Mac app with durable memory, schedules, real channels, and model routing. Built by Drew Templeton to run Drew's own companies; open for sign-ups.",
    author: { "@id": PERSON_ID },
    creator: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    offers: { "@type": "Offer", url: LINKS.randal, availability: "https://schema.org/InStock" },
  };
}

export function breadcrumbSchema(
  crumbs: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  about?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: absoluteUrl(opts.path),
    image: absoluteUrl(opts.image || "/og/default.png"),
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    inLanguage: "en-US",
    about: opts.about,
  };
}
