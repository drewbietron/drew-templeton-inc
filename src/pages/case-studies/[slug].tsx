import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import classNames from "classnames";

import Seo from "../../components/seo";
import { rich } from "../../components/ui/rich-text";
import Terminal, { Cursor, Muted, Ok } from "../../components/ui/terminal";
import {
  CASE_STUDY_SLUGS,
  CaseStudy,
  getCaseStudy,
} from "../../lib/content/case-studies";
import { articleSchema, breadcrumbSchema } from "../../lib/structured-data";
import styles from "./case-study.module.scss";

interface Props {
  slug: string;
}

export default function CaseStudyPage({ slug }: Props) {
  const cs = getCaseStudy(slug) as CaseStudy;
  const isRandal = cs.slug === "randal";

  return (
    <>
      <Seo
        title={cs.metaTitle}
        description={cs.description}
        path={`/case-studies/${cs.slug}`}
        type="article"
        image={`/og/${cs.slug}.png`}
        imageAlt={`${cs.name} — case study by Drew Templeton`}
        publishedTime={cs.datePublished}
        jsonLd={[
          articleSchema({
            headline: cs.title,
            description: cs.description,
            path: `/case-studies/${cs.slug}`,
            image: `/og/${cs.slug}.png`,
            datePublished: cs.datePublished,
            about: cs.name,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/#cases" },
            { name: cs.name, path: `/case-studies/${cs.slug}` },
          ]),
        ]}
      />

      <main id="main" className="container">
        <header className={styles.header}>
          <Link href="/#cases" className="link-mono">
            ← cd ../case-studies
          </Link>
          <h1 className={classNames("h-page", styles.title)}>{cs.title}</h1>
          <dl className={styles.facts}>
            {cs.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>
                  {f.prefix}
                  {f.href ? (
                    <a href={f.href} rel="noopener">
                      {f.value}
                    </a>
                  ) : (
                    f.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </header>

        {cs.stats ? (
          <section
            className={classNames("stats stats--surface", styles.stats)}
            aria-label="Key numbers"
          >
            {cs.stats.map((s) => (
              <div key={s.value} className="stats__cell">
                <div className="stats__value">{s.value}</div>
                <div className="stats__label">{s.label}</div>
              </div>
            ))}
          </section>
        ) : null}

        <article className={classNames(styles.article, isRandal && styles.articleSplit)}>
          <div className={classNames("prose", styles.prose)}>
            {cs.sections.map((s) => (
              <section key={s.heading} className={styles.section}>
                <h2 className="h-sub">{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{rich(p)}</p>
                ))}
              </section>
            ))}
            <blockquote className="pullquote">&ldquo;{cs.quote}&rdquo;</blockquote>
            {cs.cta ? (
              <a href={cs.cta.href} className={styles.cta} rel="noopener">
                {cs.cta.label}
              </a>
            ) : null}
          </div>

          {isRandal ? (
            <aside className={styles.aside} aria-label="Randal at a glance">
              <Terminal compact label="Randal working overnight">
                <Muted>02:41 AM · Mac asleep</Muted>
                <div>
                  <span className={styles.accent}>randal</span> is still working
                  the queue
                </div>
                <Ok>posted 14 new listings</Ok>
                <Ok>answered 6 buyer messages</Ok>
                <Ok>drafted the weekly update</Ok>
                <Cursor />
              </Terminal>
              <div className={styles.panel}>
                <div className={styles.panelLabel}>Running on Randal</div>
                <div className={styles.panelStat}>
                  <div className={styles.panelValue}>$1M+</div>
                  <div className={styles.panelCaption}>
                    Paintball Vault sales, solo-operated
                  </div>
                </div>
                <div className={styles.panelStat}>
                  <div className={styles.panelValue}>3 businesses</div>
                  <div className={styles.panelCaption}>
                    marketplace, studio, and Randal itself
                  </div>
                </div>
                <div className={styles.panelStat}>
                  <div className={styles.panelValue}>1 human</div>
                  <div className={styles.panelCaption}>plus a posse of agents</div>
                </div>
              </div>
            </aside>
          ) : null}
        </article>

        <nav className={styles.next} aria-label="Next case study">
          <Link href={`/case-studies/${cs.next.slug}`}>{cs.next.label}</Link>
        </nav>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: CASE_STUDY_SLUGS.map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = (ctx) => {
  const slug = String(ctx.params?.slug || "");
  if (!getCaseStudy(slug)) return { notFound: true };
  return { props: { slug } };
};
