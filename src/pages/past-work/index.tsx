import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import Seo from "../../components/seo";
import Timeline from "../../components/ui/timeline";
import { ROLES } from "../../lib/content/career";
import { WORK_ROWS } from "../../lib/content/past-work";
import { breadcrumbSchema } from "../../lib/structured-data";
import { absoluteUrl } from "../../lib/site";
import styles from "./index.module.scss";

const DESCRIPTION =
  "Drew Templeton's career history and selected projects from before the agents — founder, sole developer, and product leader since 2010: Paintball Vault, PangoBooks, Reverb, Studio Three, Crowler, Blitz Lake. The current AI-native work lives in the case studies.";

export default function PastWork() {
  return (
    <>
      <Seo
        title="Past Work"
        description={DESCRIPTION}
        path="/past-work"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Past Work — Drew Templeton",
            url: absoluteUrl("/past-work"),
            description: DESCRIPTION,
            hasPart: WORK_ROWS.filter((r) => r.page).map((r) => ({
              "@type": "CreativeWork",
              name: r.name,
              url: absoluteUrl(`/past-work/${r.page}`),
            })),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Past Work", path: "/past-work" },
          ]),
        ]}
      />

      <main id="main" className="container">
        <header className={styles.header}>
          <h1 className="h-page">Fifteen years of shipping</h1>
          <p className={classNames("lede", styles.lede)}>
            Before the agents there was product, code, and design, as a
            founder, a sole developer, and a product leader. The current,
            AI-native chapter lives in the{" "}
            <Link href="/#cases">case studies</Link>; this page is the longer
            arc that led there.
          </p>
        </header>

        <section className={styles.timeline} aria-labelledby="career-h">
          <h2 id="career-h" className={styles.sectionTitle}>
            The path here
          </h2>
          <Timeline roles={ROLES} groupByEra />
        </section>

        <section className={styles.rows} aria-labelledby="projects-h">
          <h2 id="projects-h" className={styles.sectionTitle}>
            Selected projects
          </h2>
          {WORK_ROWS.map((row) => (
            <article
              key={row.name}
              className={classNames(styles.row, !row.image && styles.rowText)}
            >
              {row.image ? (
                <div className={styles.media}>
                  <Image
                    src={row.image.src}
                    alt={row.image.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                    className={styles.img}
                    placeholder="blur"
                  />
                </div>
              ) : null}
              <div className={styles.body}>
                <div className={styles.meta}>{row.meta}</div>
                <h2 className={styles.name}>
                  {row.page ? (
                    <Link href={`/past-work/${row.page}`} className={styles.nameLink}>
                      {row.name}
                    </Link>
                  ) : (
                    row.name
                  )}
                </h2>
                <p className={styles.blurb}>{row.blurb}</p>
                <div className={styles.footer}>
                  <ul className={styles.tags} aria-label="Tags">
                    {row.tags.map((t) => (
                      <li key={t} className="chip chip--sm">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className={styles.spacer} />
                  {row.page ? (
                    <Link href={`/past-work/${row.page}`} className={styles.view}>
                      view project →
                    </Link>
                  ) : null}
                  {row.url ? (
                    <a href={row.url} className={styles.ext} rel="noopener">
                      {row.urlLabel} ↗
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className={classNames("strip", styles.cta)} aria-labelledby="cta-h">
          <div className={styles.ctaCopy}>
            <h2 id="cta-h" className={styles.ctaTitle}>
              The recent work is the interesting part.
            </h2>
            <p className={styles.ctaText}>
              See how I&apos;ve been embedding in large orgs to ship AI product.
            </p>
          </div>
          <Link href="/#cases" className="btn btn--ghost-dark">
            cd ../case-studies →
          </Link>
        </section>
      </main>
    </>
  );
}
