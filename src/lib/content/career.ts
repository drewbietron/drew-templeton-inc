import { LINKS } from "../site";

/**
 * The career timeline — single source of truth for the "path here" section
 * on /about and the career header on /past-work.
 *
 * `era` splits the AI-native chapter (told in the case studies) from the
 * fifteen shipping years before it (archived in /past-work). "bridge"
 * marks the one that straddles both — Paintball Vault, founded by hand
 * and converted to run autonomously on Randal. `internal` is the
 * cross-link that routes readers to the right write-up.
 */
export interface Role {
  when: string;
  title: string;
  org: string;
  url: string;
  desc: string;
  era: "ai" | "earlier" | "bridge";
  /** Extra sentence shown under this row in the era-grouped timeline. */
  transition?: string;
  internal?: { href: string; label: string };
}

export const ROLES: Role[] = [
  {
    when: "2025 – now",
    title: "AI Platform Lead",
    org: "Gusto",
    url: LINKS.gusto,
    desc: "Agent Framework, the platform behind Gusto and Gus",
    era: "ai",
    internal: { href: "/case-studies/gusto", label: "case study →" },
  },
  {
    when: "2024 – 2025",
    title: "Embedded AI Lead",
    org: "Filevine",
    url: LINKS.filevine,
    desc: "built the flagship AI agent from scratch",
    era: "ai",
    internal: { href: "/case-studies/filevine", label: "case study →" },
  },
  {
    when: "2023 – now",
    title: "Founder",
    org: "Randal",
    url: LINKS.randal,
    desc: "built the agent platform my workflow and companies run on (randal.bot)",
    era: "ai",
    internal: { href: "/case-studies/randal", label: "case study →" },
  },
  {
    when: "2022 – now",
    title: "Founder",
    org: "Paintball Vault",
    url: LINKS.pbvault,
    desc: "purpose-built (and now biggest) marketplace for paintball, $1M+ in sales — now runs autonomously on Randal",
    era: "bridge",
    transition:
      "founded as a niche marketplace, taking my experience as a marketplace operator and professional paintball player. When the agents arrived it went fully AI-native: today the whole operation runs autonomously on Randal, $1M+ and growing, headcount still one.",
    internal: { href: "/past-work/paintball-vault", label: "project →" },
  },
  {
    when: "2021 – 2022",
    title: "Chief Product Officer",
    org: "PangoBooks",
    url: LINKS.pangobooks,
    desc: "sole developer of web and native apps, peer to peer marketpalce for selling books",
    era: "earlier",
    internal: { href: "/past-work/pangobooks", label: "project →" },
  },
  {
    when: "2015 – 2021",
    title: "Product Leader · EM · PM",
    org: "Reverb",
    url: LINKS.reverb,
    desc: "early employee through the Etsy acquisition. Built Reverb Sites, Reverb Lessons, and lots of cool products in between",
    era: "earlier",
  },
  {
    when: "2013 – 2015",
    title: "Director of Technology",
    org: "Blitz Lake",
    url: LINKS.blitzlake,
    desc: "brand, marketing and tech solutions across a PE portfolio of real estate development, hospitality, and more",
    era: "earlier",
  },
];
