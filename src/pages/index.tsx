import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import Seo from "../components/seo";
import CaseCard from "../components/ui/case-card";
import Terminal, {
  Cursor,
  Muted,
  Ok,
  Prompt,
  Readout,
} from "../components/ui/terminal";
import { CASE_STUDIES } from "../lib/content/case-studies";
import {
  organizationSchema,
  personSchema,
  websiteSchema,
} from "../lib/structured-data";
import { DEFAULT_DESCRIPTION, LINKS } from "../lib/site";
import drew from "../../public/images/drew-templeton.jpg";
import styles from "./index.module.scss";

const PLAYBOOK = [
  {
    title: "Embed, don't advise",
    copy: "I join the team as an operator: I write the code and own the product, instead of sending recommendations in from the outside.",
  },
  {
    title: "Demo, don't deck",
    copy: "Working software wins arguments. I get demos in front of the right people, then sit with each team to land what actually ships.",
  },
  {
    title: "Ship, then make it stick",
    copy: "One feature was never the goal. I leave behind platforms, patterns, and teams that keep building after I'm gone.",
  },
];

const PROOF = [
  { value: "~50%", label: "of Filevine's ARR driven by the agent I built" },
  { value: "$1M+", label: "in sales from a marketplace I run alone, on Randal" },
  {
    value: "15+ yrs",
    label: "shipping product and code, startup to Fortune 500",
  },
];

export default function Home() {
  const cases = [
    ...CASE_STUDIES.map((c) => ({
      href: `/case-studies/${c.slug}`,
      name: c.name,
      ...c.card,
    })),
    {
      href: "/past-work/paintball-vault",
      name: "Paintball Vault",
      when: "2022 – now",
      headline: "Founded a $1M+ marketplace I run alone",
      summary:
        "The first marketplace built for the sport I played professionally for nearly twenty years — designed, shipped, and operated by one person on agents I built myself.",
    },
    {
      href: "/past-work/pangobooks",
      name: "PangoBooks",
      when: "2021 – 2022",
      headline: "One developer, a whole product line",
      summary:
        "Sole developer of the web app and the native-app rebuild as CPO — both still in production today.",
    },
  ];

  return (
    <>
      <Seo
        bare
        title="Drew Templeton — I make companies AI native"
        description={DEFAULT_DESCRIPTION}
        path="/"
        type="website"
        jsonLd={[personSchema(), organizationSchema(), websiteSchema()]}
      />

      <main id="main" className="container">
        {/* Hero */}
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <h1 className="h-display">
              I make companies AI native, including my own.
            </h1>
            <p className={classNames("lede", styles.heroLede)}>
              Product leader and full-stack engineer. Sometimes that means
              embedding inside a company like Filevine or Gusto and winning it
              over demo by demo. Sometimes it means running my own: Paintball
              Vault, the marketplace I operate alone on{" "}
              <a href={LINKS.randal} rel="noopener">
                Randal
              </a>
              , the agent platform I built.
            </p>
            <div className={styles.heroActions}>
              <Link href="/#cases" className="btn btn--primary">
                See the case studies
              </Link>
              <Link href="/contact" className="btn btn--secondary">
                Get in touch
              </Link>
            </div>
          </div>

          <Terminal label="Status readout: Filevine, Gusto, Paintball Vault, Randal">
            <Prompt>drew --status</Prompt>
            <Readout
              rows={[
                ["filevine", "flagship agent shipped · ~½ of ARR"],
                ["gusto", "agent framework behind Gus"],
                ["paintball-vault", "$1M+ and growing · headcount: just me"],
                ["randal", "the chassis running it all"],
              ]}
            />
            <Cursor />
          </Terminal>
        </header>

        {/* Proof bar */}
        <section className={classNames("stats", styles.proof)} aria-label="By the numbers">
          {PROOF.map((p) => (
            <div key={p.value} className="stats__cell">
              <div className="stats__value">{p.value}</div>
              <div className="stats__label">{p.label}</div>
            </div>
          ))}
        </section>

        {/* Randal */}
        <section
          id="randal"
          className={classNames(styles.section, styles.randal)}
          aria-labelledby="randal-h"
        >
          <div className={styles.randalCopy}>
            <div className={styles.randalEyebrow}>
              Randal · the AI chassis ·{" "}
              <a href={LINKS.randal} rel="noopener">
                randal.bot
              </a>
            </div>
            <h2 id="randal-h" className="h-section">
              I built my own agent harness. Everything I ship runs on it.
            </h2>
            <p className={styles.randalLede}>
              Randal is the agent harness I built to run my own companies, and
              the platform most of my AI-native work ships on. It&apos;s a
              native Mac app with durable memory, schedules, real channels, and
              model routing: agents that use your apps the way you do, learn a
              workflow by watching you once, and keep working alongside
              always-on cloud bots. Scoped, permissioned, private by default.
            </p>
            <p className={styles.randalLede}>
              It&apos;s a real product, open for sign-ups today, and the same
              chassis that runs the marketplace with a headcount of one.
            </p>
            <div className={styles.heroActions}>
              <a href={LINKS.randal} className="btn btn--primary" rel="noopener">
                Get Randal at randal.bot →
              </a>
              <Link href="/case-studies/randal" className="btn btn--secondary">
                Read the case study
              </Link>
            </div>
          </div>
          <Terminal label="Randal working overnight: posted listings, answered buyers, drafted the weekly update">
            <Muted>02:41 AM · Mac asleep</Muted>
            <div>
              <span className={styles.accent}>randal</span> is still working the
              queue
            </div>
            <Ok>posted 14 new listings</Ok>
            <Ok>answered 6 buyer messages</Ok>
            <Ok>drafted the weekly update</Ok>
            <Cursor />
          </Terminal>
        </section>

        {/* Playbook */}
        <section className={styles.section} aria-labelledby="playbook">
          <h2 id="playbook" className="h-section">
            How I make an org AI native
          </h2>
          <div className={styles.playbook}>
            {PLAYBOOK.map((p) => (
              <div key={p.title} className={styles.play}>
                <h3>{p.title}</h3>
                <p>{p.copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Case studies */}
        <section
          id="cases"
          className={classNames(styles.section, styles.casesSection)}
          aria-labelledby="cases-h"
        >
          <h2 id="cases-h" className="h-section">
            Proof, in production
          </h2>
          <div className={styles.cases}>
            {cases.map((c) => (
              <CaseCard key={c.href} {...c} />
            ))}
          </div>
        </section>

        {/* Past work strip */}
        <section className={classNames("strip", styles.strip)} aria-labelledby="past-h">
          <div className={styles.stripCopy}>
            <h2 id="past-h" className="strip__title">
              Fifteen years of shipping came first.
            </h2>
            <p className="strip__copy">
              Product and engineering lead for Reverb Sites and Reverb Lessons.
              Brand launches from a private equity portfolio to Chicago
              restaurants. The full archive runs back to 2010.
            </p>
          </div>
          <Link href="/past-work" className="btn btn--ghost-dark">
            ls ./past-work →
          </Link>
        </section>

        {/* About teaser */}
        <section className={styles.about} aria-label="About Drew">
          <Image
            src={drew}
            alt="Drew Templeton"
            width={150}
            height={150}
            sizes="150px"
            className={styles.portrait}
            placeholder="blur"
          />
          <p className={styles.aboutCopy}>
            I&apos;m Drew. I live in St. Charles, Illinois with my wife and
            daughter, and when I&apos;m not building agents I&apos;m on a
            paintball field — a sport I&apos;ve competed in professionally for
            nearly twenty years.{" "}
            <Link href="/about">More about me →</Link>
          </p>
        </section>
      </main>
    </>
  );
}
