import { LINKS } from "../site";

export interface Fact {
  label: string;
  value: string;
  href?: string;
  /** Text before the link, e.g. "Payroll & HR · " */
  prefix?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Section {
  heading: string;
  paragraphs: string[];
}

export interface CaseStudy {
  slug: "gusto" | "filevine" | "randal";
  /** Short name used on cards / nav. */
  name: string;
  /** Card copy on the home page. */
  card: { when: string; headline: string; summary: string };
  /** Page <h1>. */
  title: string;
  /** <title> / og:title (without site suffix). */
  metaTitle: string;
  description: string;
  facts: Fact[];
  stats?: Stat[];
  sections: Section[];
  quote: string;
  cta?: { label: string; href: string };
  next: { slug: CaseStudy["slug"]; label: string };
  datePublished: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "gusto",
    name: "Gusto",
    card: {
      when: "2025 – 2026",
      headline: "Led the Agent Framework behind Gus",
      summary:
        "Set technical and product direction for the AI platform under Gusto's internal tools and customer-facing products — and won a large org over with working demos.",
    },
    title: "Gusto: the platform every agent stands on",
    metaTitle: "Gusto case study — leading the Agent Framework behind Gus",
    description:
      "How I set technical and product direction for Gusto's Agent Framework — the AI platform under Gus and Gusto's internal tools — and won a large org over with working demos. A case study by Drew Templeton.",
    facts: [
      { label: "Role", value: "AI Platform Lead" },
      { label: "When", value: "08/2025 – 2026" },
      {
        label: "Domain",
        prefix: "Payroll & HR · ",
        value: "gusto.com ↗",
        href: LINKS.gusto,
      },
      { label: "Scope", value: "Agent Framework · Gus" },
    ],
    stats: [
      { value: "1 platform", label: "under every Gusto agent" },
      {
        value: "Internal + external",
        label: "back-office tools and customer-facing Gus",
      },
      { value: "Demo-led", label: "buy-in won by showing, not telling" },
    ],
    sections: [
      {
        heading: "The situation",
        paragraphs: [
          "Gusto runs payroll, benefits, and HR for hundreds of thousands of small businesses — a domain where AI has to be right, not just impressive. The company wanted agents in its internal tools and in customer-facing products like Gus, but every team building its own meant duplicated effort and inconsistent quality. What it needed was one platform underneath all of them.",
        ],
      },
      {
        heading: "What I did",
        paragraphs: [
          "Embedded as lead of the Agent Framework team, I set both the technical and the product direction for the AI platform behind Gusto's internal tools and customer-facing products. Same playbook as Filevine, bigger org: get demos working, show them to the right people, then sit with each team to land on what to ship.",
          "The framework work is deliberately unglamorous — the primitives every agent at Gusto stands on — which is exactly why it's where an org becomes AI native or doesn't.",
        ],
      },
      {
        heading: "Where it stands",
        paragraphs: [
          "The Agent Framework powers Gus and Gusto's internal agents today, and teams across the org build on it rather than around it. Buy-in came the honest way: not a mandate, but working software that made the case for itself.",
        ],
      },
    ],
    quote:
      "You don't make a big org AI native with a strategy doc. You do it with a demo they can't ignore, then a platform they can't live without.",
    next: { slug: "filevine", label: "Filevine: the flagship agent →" },
    datePublished: "2026-08-23",
  },
  {
    slug: "filevine",
    name: "Filevine",
    card: {
      when: "2024 – 2025",
      headline: "Built the flagship AI agent from scratch",
      summary:
        "Walked into a legal-tech company, wrote the first agent myself, and shipped the product now driving about half its ARR — ahead of a $400M raise at a ~$3B valuation.",
    },
    title: "Filevine: building the AI agent that became the flagship",
    metaTitle: "Filevine case study — building the flagship AI agent",
    description:
      "How I embedded at Filevine as the AI lead, built the customer-facing agent from scratch, and shipped the product now driving about half the company's ARR ahead of a $400M raise. A case study by Drew Templeton.",
    facts: [
      { label: "Role", value: "Embedded AI Lead" },
      { label: "When", value: "03/2024 – 08/2025" },
      {
        label: "Domain",
        prefix: "Legal tech · ",
        value: "filevine.com ↗",
        href: LINKS.filevine,
      },
      { label: "Outcome", value: "~½ of ARR" },
    ],
    stats: [
      { value: "~50%", label: "of company ARR driven by the agent" },
      { value: "0 → 1", label: "first working agent, built by me" },
      {
        value: "$400M",
        label: "raised at a ~$3B valuation after it shipped",
      },
    ],
    sections: [
      {
        heading: "The situation",
        paragraphs: [
          "Filevine is a large, established legal-tech platform — thousands of law firms run their cases on it. In early 2024 it had the classic big-company AI problem: enormous ambition, real customer demand, and no shipped agent. The organization needed someone who could do the product thinking and the engineering at the same time.",
        ],
      },
      {
        heading: "What I did",
        paragraphs: [
          "I embedded as the AI lead and built the customer-facing agent from scratch — writing code, setting the technical direction, and owning the product end to end. Instead of pitching a roadmap, I got a working agent in front of people and let the demo make the argument. From there, I sat with legal-domain teams across the company to shape what shipped.",
          "Alongside the agent, I built other AI features across the product — same pattern each time: prototype it myself, prove it works, then land it with the owning team.",
        ],
      },
      {
        heading: "What shipped",
        paragraphs: [
          "The agent is now Filevine's flagship product, driving about half of the company's ARR — momentum that carried into a $400M raise at a roughly $3B valuation in 2025. More durable than the numbers: a legal-tech org that used to talk about AI now ships it — the teams I worked with kept building after I left.",
        ],
      },
    ],
    quote:
      "Working software wins arguments. I built the demo, showed it, and the org followed.",
    next: { slug: "randal", label: "Randal: my own AI chassis →" },
    datePublished: "2026-08-23",
  },
  {
    slug: "randal",
    name: "Randal",
    card: {
      when: "2023 – now",
      headline: "Built my own AI chassis — and run companies on it",
      summary:
        "The agent harness behind my businesses and client work, now a product anyone can sign up for at randal.bot. One person plus agents, running whole companies.",
    },
    title: "Randal: the chassis I run my companies on",
    metaTitle: "Randal case study — the AI chassis I run my companies on",
    description:
      "Randal is the native Mac agent platform I built to run my own businesses — durable memory, schedules, real channels, model routing — and the engine behind Paintball Vault, a $1M+ marketplace operated by one person.",
    facts: [
      { label: "Role", value: "Founder" },
      { label: "When", value: "2023 – now" },
      { label: "What", value: "Native Mac agent app · randal.bot" },
      { label: "Proof", value: "Runs my businesses daily" },
    ],
    stats: [
      { value: "$1M+", label: "Paintball Vault sales, solo-operated" },
      { value: "2 businesses", label: "the marketplace and Randal itself" },
      { value: "1 human", label: "plus a posse of agents" },
    ],
    sections: [
      {
        heading: "Why it exists",
        paragraphs: [
          "Running whole businesses as one person only works if agents do real jobs — reliably, on schedule, with memory. Nothing off the shelf did that, so I built the harness myself. Randal started as internal tooling and became a product: an AI chassis — a native Mac app with durable memory, schedules, real channels, and model routing.",
        ],
      },
      {
        heading: "What I built",
        paragraphs: [
          "The whole thing — product, engineering, design, and the business around it. Randal turns a Mac into an agent runner: it can use your apps the way you do, learn a workflow by watching you once, run alongside always-on cloud bots, and route each step to the model that does it best. Everything scoped, permissioned, and private by default.",
          "It's also the engine behind [Paintball Vault](https://www.pbvault.com/) — a one-person marketplace past $1M in sales and growing. Randal isn't a thesis about agents; it's the operating layer my companies actually run on.",
        ],
      },
      {
        heading: "Why it matters to your org",
        paragraphs: [
          "Randal is the strongest possible proof of the playbook: I don't just help companies adopt AI — I run companies on it. When I embed in your org, the patterns I bring were battle-tested here first, in production, with my own revenue on the line.",
          "And you don't need me in the building to use it. Randal is a product: sign up at [randal.bot](https://randal.bot), install the Mac app, and put the same harness to work on your own queue.",
        ],
      },
    ],
    quote:
      "One person plus agents, running whole companies. That's not a pitch — it's my Tuesday.",
    cta: { label: "Get Randal at randal.bot →", href: LINKS.randal },
    next: { slug: "gusto", label: "Gusto: the platform behind Gus →" },
    datePublished: "2026-08-23",
  },
];

export const CASE_STUDY_SLUGS = CASE_STUDIES.map((c) => c.slug);

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
