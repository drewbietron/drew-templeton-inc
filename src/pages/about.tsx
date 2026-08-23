import Image from "next/image";
import classNames from "classnames";

import Seo from "../components/seo";
import Timeline from "../components/ui/timeline";
import { ROLES } from "../lib/content/career";
import { EMAIL, LINKS } from "../lib/site";
import { breadcrumbSchema, personSchema, PERSON_ID } from "../lib/structured-data";
import drew from "../../public/images/drew-templeton.jpg";
import styles from "./about.module.scss";

const DESCRIPTION =
  "Operator, not advisor. I've built software and digital products since 2010 — as a founder and embedded inside fast-growing companies. I do the engineering and the product: write the first version, demo it, and stay until shipping AI is just how the org works.";

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description={DESCRIPTION}
        path="/about"
        type="profile"
        image="/og/about.png"
        imageAlt="Drew Templeton — operator, not advisor"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: { "@id": PERSON_ID },
            url: "https://www.drewtempleton.com/about",
          },
          personSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <main id="main" className="container">
        <header className={styles.hero}>
          <div className={styles.copy}>
            <h1 className="h-page">Operator, not advisor.</h1>
            <div className={styles.bio}>
              <p>
                I&apos;ve been building software and digital products since
                2010 — for companies just getting started and for some of the
                biggest names in tech. I started building with AI agents before
                most teams took them seriously, and I&apos;ve shipped them both
                ways: as a founder, and embedded inside fast-growing companies.
              </p>
              <p>
                What makes me useful is the combination: I do the engineering
                and the product. I don&apos;t hand an org a strategy and leave
                — I write the first version, demo it, win the teams over, and
                stay until shipping AI is just how the org works.
              </p>
              <p>
                Away from the keyboard I&apos;m with my wife and daughter in St.
                Charles, Illinois — or on a paintball field. I&apos;ve competed
                professionally at the sport&apos;s highest international level
                for nearly twenty years, which turns out to be good training
                for product work: read fast, commit hard, stay calm under fire.
              </p>
            </div>
          </div>

          <aside className={styles.side}>
            <Image
              src={drew}
              alt="Drew Templeton"
              sizes="(max-width: 760px) 100vw, 560px"
              className={styles.portrait}
              priority
              placeholder="blur"
            />
            <dl className={styles.facts}>
              <div>
                <dt>Location</dt>
                <dd>St. Charles, IL</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd className={styles.right}>MA, DePaul · BA, Mizzou</dd>
              </div>
              <div>
                <dt>Elsewhere</dt>
                <dd className={styles.elsewhere}>
                  <a href={LINKS.randal} rel="me noopener">
                    randal.bot
                  </a>
                  <a href={LINKS.pbvault} rel="me noopener">
                    pbvault.com
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </header>

        <section className={styles.timeline} aria-labelledby="path">
          <h2 id="path" className={classNames("h-section", styles.timelineTitle)}>
            The path here
          </h2>
          <Timeline roles={ROLES} />
        </section>
      </main>
    </>
  );
}
