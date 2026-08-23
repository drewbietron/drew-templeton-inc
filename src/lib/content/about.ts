import { LINKS } from "../site";

export interface Role {
  when: string;
  title: string;
  org: string;
  url: string;
  desc: string;
}

export const ROLES: Role[] = [
  {
    when: "2025 – now",
    title: "Staff Product Manager, AI",
    org: "Gusto",
    url: LINKS.gusto,
    desc: "Agent Framework, the platform behind Gus",
  },
  {
    when: "2024 – 2025",
    title: "Senior Product Manager, AI",
    org: "Filevine",
    url: LINKS.filevine,
    desc: "built the flagship AI agent from scratch",
  },
  {
    when: "2023 – now",
    title: "Founder",
    org: "Hassion Studio",
    url: LINKS.hassion,
    desc: "AI studio; built Randal (randal.bot)",
  },
  {
    when: "2022 – now",
    title: "Founder",
    org: "Paintball Vault",
    url: LINKS.pbvault,
    desc: "first marketplace for paintball, $1M+ in sales",
  },
  {
    when: "2021 – 2022",
    title: "Chief Product Officer",
    org: "PangoBooks",
    url: LINKS.pangobooks,
    desc: "sole developer of web and native apps",
  },
  {
    when: "2015 – 2021",
    title: "Product Leader · EM · PM",
    org: "Reverb",
    url: LINKS.reverb,
    desc: "early employee through the Etsy acquisition — Reverb Sites, Reverb Lessons, design system",
  },
  {
    when: "2013 – 2015",
    title: "Director of Technology",
    org: "Blitz Lake",
    url: LINKS.blitzlake,
    desc: "brand and marketing across a PE portfolio",
  },
];
