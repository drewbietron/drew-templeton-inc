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
      when: "2025 – now",
      headline: "Led the Agent Framework behind Gusto and Gus",
      summary:
        "Set technical and product direction for the AI platform under Gusto's internal tools and customer-facing products and won a large org over with working demos.",
    },
    title: "Gusto: the platform every agent stands on",
    metaTitle: "Gusto case study — leading the Agent Framework behind Gus",
    description:
      "How I set technical and product direction for Gusto's Agent Framework, the AI platform under Gus and Gusto's internal tools and won a large org over with working demos. A case study by Drew Templeton.",
    facts: [
      { label: "Role", value: "AI Platform Lead" },
      { label: "When", value: "08/2025 – now" },
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
        label: "internal tools and customer-facing Gus",
      },
      { value: "AI Wiki", label: "the internal playbook teams build from" },
    ],
    sections: [
      {
        heading: "The situation",
        paragraphs: [
          "Gusto runs payroll, benefits, and HR for hundreds of thousands of small businesses.  A domain where AI has to be right, not just impressive. The company wanted agents in its internal tools and in customer-facing products like Gus, but every team building its own meant duplicated effort and inconsistent quality. What it needed was one platform underneath all of them.",
        ],
      },
      {
        heading: "What I did",
        paragraphs: [
          "Embedded as lead of the Agent Framework team, I set both the technical and the product direction for the AI platform behind Gusto's internal tools and customer-facing products. Same playbook as Filevine, bigger org: demos first, then land what ships with each team.",
          "The other half of the job was making every team fast. I drove the AI primitives Gusto's agents are built from, worked out how to detect which use cases were actually worth an agent, and wrote the internal AI Wiki so teams could go from idea to shipped agent without me in the loop.",
          "Platform work is deliberately unglamorous, and that's the point: the primitives are where an org becomes AI native or doesn't.",
          "Enabling teams to become AI native meant embedding myself into every team and building the primitives they needed to get there.  Tools, evals, processes, analysis, retrieval, every team needed something different, and I helped enable it for them.",
        ],
      },
      {
        heading: "Where it stands",
        paragraphs: [
          "The Agent Framework powers Gus and Gusto's internal agents today, and teams across the org build on it rather than around it. Nobody mandated that. The working software made the case.",
        ],
      },
    ],
    quote:
      "The platform succeeded the day teams started shipping agents without asking me first.",
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
      { value: "500k+", label: "pages of medical records, read at scale" },
      {
        value: "$400M",
        label: "raised at a ~$3B valuation after it shipped",
      },
    ],
    sections: [
      {
        heading: "The situation",
        paragraphs: [
          "Filevine is a large, established legal-tech platform — thousands of law firms run their cases on it. In early 2024 it had the classic big-company AI problem: real customer demand and nothing shipped. It needed someone who could do the product thinking and the engineering at the same time.",
        ],
      },
      {
        heading: "What I did",
        paragraphs: [
          "I embedded as the AI lead and built the customer-facing agent myself: writing the code, setting the technical direction, and owning the product end to end. Instead of pitching a roadmap, I got a working agent in front of people and let the demo make the argument.",
          "Most of the real work sat below the waterline. The flagship use case, AI Medical Chronology, does work firms staff whole teams of paralegals for, reading medical records that run past 500,000 pages and pulling out the data points a case turns on. Getting AI to do that credibly meant improving every stage of the pipeline: better OCR on the scanned records, better extraction of the data points, and a data layer that houses the results so the chat agent can query them.",
          "The eval framework made it sellable: we proved the system's efficacy against the work paralegals were already doing instead of asking firms to take it on faith. Then I taught the firms how to fold it into their practice. Alongside it, I prototyped other AI features across the product and landed each with its owning team.",
        ],
      },
      {
        heading: "What shipped",
        paragraphs: [
          "The agent is now Filevine's flagship product, driving about half of the company's ARR — momentum that carried into a $400M raise at a roughly $3B valuation in 2025. More durable than the numbers: a legal-tech org that used to talk about AI now ships it. The teams I worked with kept building after I left.",
        ],
      },
    ],
    quote:
      "The agent was the easy part. The job was making half a million pages of scanned paper legible to it.",
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
        "The agent harness behind my businesses and client work, now a product anyone can sign up for at randal.bot. One person plus as many agents as they want, running whole companies.",
    },
    title: "Randal: the chassis I run my companies on",
    metaTitle: "Randal case study — the AI chassis I run my companies on",
    description:
      "Randal is the agent platform I built to run my own businesses: durable memory, schedules, contact channels, auto model routing, evals and a hands off self learning layer. It's the engine behind Paintball Vault, a $1M+ marketplace operated by one person.",
    facts: [
      { label: "Role", value: "Founder" },
      { label: "When", value: "2023 – now" },
      {
        label: "What",
        value: "Mac, Windows and mobile Agent app · randal.bot",
      },
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
          "Running whole businesses as one person only works if agents do real jobs reliably, on schedule, with memory, with the right tools, transparently. Nothing off the shelf did that, so I built the harness myself. Randal started as internal tooling and became a product: a native Mac, Windows and iOS/Google Play app with durable memory, schedules, real channels, and model routing.",
        ],
      },
      {
        heading: "What I built",
        paragraphs: [
          "The whole thing: product, engineering, design, and the business around it. Randal turns your computer, or a cloud instance, into an agent runner: it can use your apps the way you do, learn a workflow by watching you once, run alongside always-on cloud bots, and route each step to the model that does it best. Everything scoped, permissioned, and private by default.",
          "It's also the engine behind [Paintball Vault](https://www.pbvault.com/), a one-person marketplace past $1M in sales and growing — the operating layer my companies run on every day.",
        ],
      },
      {
        heading: "Why building it myself matters",
        paragraphs: [
          "A harness is a pile of unglamorous systems: how agents remember, how schedules run reliably, how permissions stay scoped, which model gets which step, observaility, cost analysis, its a smorgasbord of features that were disparate across the systems that existed. I own every one of those decisions in production, with my own revenue on the line. When I embed in an org, those battle-tested patterns come with me.",
          "And you don't need me in the building to use it. Randal is a product: sign up at [randal.bot](https://randal.bot), install the Mac app, and put the same harness to work on your own queue.",
        ],
      },
    ],
    quote:
      "One person plus agents, running whole companies. That's been my day job for years.",
    cta: { label: "Get Randal at randal.bot →", href: LINKS.randal },
    next: { slug: "gusto", label: "Gusto: the platform behind Gus →" },
    datePublished: "2026-08-23",
  },
];

export const CASE_STUDY_SLUGS = CASE_STUDIES.map((c) => c.slug);

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
