import type { StaticImageData } from "next/image";
import { LINKS } from "../site";

// Paintball Vault
import pv50644 from "../../../public/work/paintball-vault/DTR50644.jpg";
import pv50646 from "../../../public/work/paintball-vault/DTR50646.jpg";
import pv50649 from "../../../public/work/paintball-vault/DTR50649.jpg";
import pv50653 from "../../../public/work/paintball-vault/DTR50653.jpg";
import pv50656 from "../../../public/work/paintball-vault/DTR50656.jpg";
// PangoBooks
import pb50637 from "../../../public/work/pangobooks/DTR50637.jpg";
import pb50640 from "../../../public/work/pangobooks/DTR50640.jpg";
import pb50658 from "../../../public/work/pangobooks/DTR50658.jpg";
// Crowler
import cr50660 from "../../../public/work/crowler/DTR50660.jpg";
import cr50662 from "../../../public/work/crowler/DTR50662.jpg";
import cr50666 from "../../../public/work/crowler/DTR50666.jpg";
// Studio Three
import s3_0934 from "../../../public/work/studio-three/DT3_0934.jpg";
import s3_1465 from "../../../public/work/studio-three/DT3_1465.jpg";
import s3_1766 from "../../../public/work/studio-three/DT3_1766.jpg";
import s3_1801 from "../../../public/work/studio-three/DT3_1801.jpg";
import s3_1903 from "../../../public/work/studio-three/DT3_1903.jpg";
import s3_2225 from "../../../public/work/studio-three/DT3_2225.jpg";
import s3_2343 from "../../../public/work/studio-three/DT3_2343.jpg";
import s3_2469 from "../../../public/work/studio-three/DT3_2469.jpg";
import s3_2824 from "../../../public/work/studio-three/DT3_2824.jpg";
import s3_2915 from "../../../public/work/studio-three/DT3_2915.jpg";
import s3_3218 from "../../../public/work/studio-three/DT3_3218.jpg";
import s3_3884 from "../../../public/work/studio-three/DT3_3884.jpg";

export interface Photo {
  src: StaticImageData;
  alt: string;
}

export type ProjectSlug =
  | "paintball-vault"
  | "pangobooks"
  | "studio-three"
  | "crowler";

/** A row on the /past-work index. */
export interface WorkRow {
  name: string;
  meta: string;
  blurb: string;
  tags: string[];
  image?: Photo;
  /** Internal project page, if there is one. */
  page?: ProjectSlug;
  url?: string;
  urlLabel?: string;
}

export const WORK_ROWS: WorkRow[] = [
  {
    name: "Paintball Vault",
    meta: "FOUNDER · 2022–NOW",
    blurb:
      "The first and leading marketplace for paintball, built after nearly twenty years playing the sport professionally, and run solo past $1M in sales on AI tooling I built myself.",
    tags: ["Founded", "App", "Web"],
    image: { src: pv50644, alt: "Paintball Vault app on a phone" },
    page: "paintball-vault",
    url: LINKS.pbvault,
    urlLabel: "pbvault.com",
  },
  {
    name: "PangoBooks",
    meta: "CPO · 2021–2022",
    blurb:
      "Sole developer of the web app and the native-app rebuild as CPO, both still in production today.",
    tags: ["App", "Web"],
    image: { src: pb50637, alt: "PangoBooks app on a phone" },
    page: "pangobooks",
    url: LINKS.pangobooks,
    urlLabel: "pangobooks.com",
  },
  {
    name: "Reverb",
    meta: "EARLY EMPLOYEE → ETSY ACQUISITION · 2015–2021",
    blurb:
      "One of the first few employees at the marketplace for musicians, and there through its acquisition by Etsy. Led product and engineering for Reverb Sites and Reverb Lessons, built the no-code website generator with SSL and full e-commerce, and built the company's design system.",
    tags: ["Product", "Engineering"],
    url: LINKS.reverb,
    urlLabel: "reverb.com",
  },
  {
    name: "Studio Three",
    meta: "BRAND + PHOTOGRAPHY · CHICAGO",
    blurb:
      "Built the brand from scratch for an early Peloton backer's boutique fitness studio in Chicago, then the web app behind their studio scheduling, the tech buildout of the studios themselves, and the campaign photography.",
    tags: ["Brand", "Web App", "Buildout", "Photography"],
    image: { src: s3_0934, alt: "Studio Three instructors, photographed by Drew Templeton" },
    page: "studio-three",
    url: LINKS.studiothree,
    urlLabel: "studiothree.com",
  },
  {
    name: "Crowler",
    meta: "CO-FOUNDER · 2015",
    blurb:
      "Beer label recognition, built in 2015, back when making a phone recognize a can was hard mode. Any vision model does it today; we did it by hand a decade ago.",
    tags: ["Founded", "App"],
    image: { src: cr50666, alt: "Crowler app scanning a beer can" },
    page: "crowler",
  },
  {
    name: "Blitz Lake",
    meta: "DIRECTOR OF TECH · 2013–2015",
    blurb:
      "Ran brand and marketing across a private equity firm's portfolio, working directly with founders and investors, including Chicago restaurant brands like Mercadito.",
    tags: ["Brand", "Web"],
    url: LINKS.blitzlake,
    urlLabel: "blitzlake.com",
  },
];

export interface ProjectSection {
  heading: string;
  paragraphs: string[];
}

export interface Project {
  slug: ProjectSlug;
  name: string;
  metaTitle: string;
  description: string;
  /** Intro sentence under the h1; may contain a [label](url) link. */
  intro: string;
  chips: string[];
  /** Images shown above the copy (wide grid). */
  lead?: Photo[];
  sections: ProjectSection[];
  /** Images shown below the copy. */
  gallery?: Photo[];
  /** Masonry gallery (Studio Three). */
  masonry?: Photo[];
  ogImage: StaticImageData;
  next: { slug: ProjectSlug; label: string };
  datePublished: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "paintball-vault",
    name: "Paintball Vault",
    metaTitle: "Paintball Vault: the first marketplace built for paintball",
    description:
      "Paintball Vault is the first marketplace built for paintball. Founded, designed, built, and operated by me alone, past $1M in sales on agents I built myself.",
    intro:
      "The first marketplace built for paintball. Founded, designed, built, and operated by one person. [pbvault.com ↗](https://www.pbvault.com/)",
    chips: ["Founder · sole operator", "2022 – now", "$1M+ and growing", "Headcount: just me"],
    lead: [
      { src: pv50644, alt: "Paintball Vault app: browse listings" },
      { src: pv50649, alt: "Paintball Vault app: listing detail" },
    ],
    sections: [
      {
        heading: "A marketplace the sport never had",
        paragraphs: [
          "I played paintball professionally for nearly twenty years, so I knew the gap firsthand: enthusiasts had no dedicated platform to buy, sell, and trade gear. Paintball Vault is that platform: the first marketplace built for the sport, now its leading one.",
        ],
      },
      {
        heading: "Built like a product company",
        paragraphs: [
          "The mobile app is built with Expo and React Native; the web platform on Next.js. Postgres with Supabase underneath lets one API serve both, so the product experience stays consistent across web and native while the whole thing scales.",
        ],
      },
      {
        heading: "Operated by agents",
        paragraphs: [
          "From the early days a custom LLM handled customer support, long before that was normal. Today the whole operation runs on [Randal](/case-studies/randal), the agent chassis I built: listings, support, and the daily grind handled by agents while the headcount stays at exactly one. Past $1M in sales and growing.",
        ],
      },
    ],
    gallery: [
      { src: pv50646, alt: "Paintball Vault app: search" },
      { src: pv50656, alt: "Paintball Vault app: seller profile" },
      { src: pv50653, alt: "Paintball Vault app: checkout" },
    ],
    ogImage: pv50644,
    next: { slug: "pangobooks", label: "PangoBooks →" },
    datePublished: "2026-08-23",
  },
  {
    slug: "pangobooks",
    name: "PangoBooks",
    metaTitle: "PangoBooks: web app and native rebuild as CPO and sole developer",
    description:
      "As CPO and sole developer at PangoBooks, I built the Next.js web app from scratch and re-architected the React Native app around one component system, both still in production.",
    intro:
      "Empowering buying and selling of used books. [pangobooks.com ↗](https://pangobooks.com/)",
    chips: ["Chief Product Officer", "2021 – 2022", "Web + native apps, solo"],
    sections: [
      {
        heading: "A web app from the ground up",
        paragraphs: [
          "PangoBooks is a marketplace for secondhand books. As CPO, and the company's only developer, I built the Next.js web app from the ground up and shipped it.",
        ],
      },
      {
        heading: "One component system, two platforms",
        paragraphs: [
          "Then I re-architected the existing React Native app around the same page-component system as the web app: one design language, one set of patterns, far less to maintain. Both apps are still in production today.",
        ],
      },
    ],
    gallery: [
      { src: pb50637, alt: "PangoBooks app: home feed" },
      { src: pb50640, alt: "PangoBooks app: book detail" },
      { src: pb50658, alt: "PangoBooks app: seller shop" },
    ],
    ogImage: pb50637,
    next: { slug: "studio-three", label: "Studio Three →" },
    datePublished: "2026-08-23",
  },
  {
    slug: "studio-three",
    name: "Studio Three",
    metaTitle: "Studio Three: brand, scheduling web app, buildout, and photography",
    description:
      "Brand from zero, the scheduling web app, a tech-enabled studio buildout, and the launch photography for Studio Three, a boutique fitness studio in Chicago. All by me, Drew Templeton.",
    intro:
      "Brand, technology, and photography for a boutique fitness studio in Chicago, backed by an early Peloton investor. [studiothree.com ↗](https://studiothree.com/)",
    chips: ["Brand from zero", "Scheduling web app", "Tech-enabled buildout", "All photos by me"],
    sections: [
      {
        heading: "The whole studio, not just the shoot",
        paragraphs: [
          "I built Studio Three's brand from zero: identity, voice, and launch. Then came the web app behind the studio's scheduling system and the buildout of the studios themselves, physical spaces that were tech-enabled from day one.",
        ],
      },
      {
        heading: "And then I shot the campaign",
        paragraphs: [
          "The launch photography is mine too: instructors, spaces, and the energy of the place. Brand, code, buildout, camera: same person.",
        ],
      },
    ],
    masonry: [
      { src: s3_0934, alt: "Studio Three: Instructors" },
      { src: s3_1465, alt: "Studio Three: Instructors" },
      { src: s3_1766, alt: "Studio Three: Andrea Wright" },
      { src: s3_1801, alt: "Studio Three: Andrea Wright" },
      { src: s3_1903, alt: "Studio Three: Instructor" },
      { src: s3_2225, alt: "Studio Three: Marissa Schrader" },
      { src: s3_2343, alt: "Studio Three: Instructors" },
      { src: s3_2469, alt: "Studio Three: Instructors" },
      { src: s3_2824, alt: "Studio Three: Diggy Moreland" },
      { src: s3_2915, alt: "Studio Three: Instructors" },
      { src: s3_3218, alt: "Studio Three: Jen Enright" },
      { src: s3_3884, alt: "Studio Three: Dani Haboush" },
    ],
    ogImage: s3_2469,
    next: { slug: "crowler", label: "Crowler →" },
    datePublished: "2026-08-23",
  },
  {
    slug: "crowler",
    name: "Crowler",
    metaTitle: "Crowler: beer label recognition, built in 2015",
    description:
      "Crowler was a beer-label recognition app I co-founded in 2015: point your camera at a can, get the beer and its ratings. Image recognition wired up by hand before vision APIs existed.",
    intro: "Point your camera at a beer label, know the beer.",
    chips: ["Co-founder", "2015 · the before times", "Image recognition"],
    sections: [
      {
        heading: "Beer discovery, solved in-store",
        paragraphs: [
          "Finding the right craft beer in a wall of cans is a guessing game. Crowler, an app I founded alongside my good friend Matt, ended it: point your device at a label in-store and the app identifies it through image recognition, then pulls in ratings from leading beer platforms so you buy informed.",
        ],
      },
      {
        heading: "In 2015, this was hard",
        paragraphs: [
          "Today you'd hand this to any vision model over lunch. We built it in 2015, with no foundation models and no vision APIs worth the name: image recognition wired up by hand and shipped to a phone. The app is a museum piece now, but it marks the start of a pattern. I've been betting on machines that can see and reason for a decade, and these days the bets pay off in production.",
        ],
      },
    ],
    gallery: [
      { src: cr50660, alt: "Crowler app: home" },
      { src: cr50666, alt: "Crowler: scanning a can" },
      { src: cr50662, alt: "Crowler: results" },
    ],
    ogImage: cr50666,
    next: { slug: "paintball-vault", label: "Paintball Vault →" },
    datePublished: "2026-08-23",
  },
];

export const PROJECT_SLUGS = PROJECTS.map((p) => p.slug);

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
