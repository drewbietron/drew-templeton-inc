import classNames from "classnames";

import Seo from "../components/seo";
import { EMAIL, LOCATION } from "../lib/site";
import { breadcrumbSchema, PERSON_ID } from "../lib/structured-data";
import styles from "./contact.module.scss";

const DESCRIPTION =
  "Embedded engagements, AI product leadership, or building with Randal: tell me what you're trying to ship and we'll get into exactly what it needs. Drew Templeton, St. Charles, IL.";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description={DESCRIPTION}
        path="/contact"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: "https://www.drewtempleton.com/contact",
            mainEntity: { "@id": PERSON_ID },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

      <main id="main" className={classNames("container", styles.page)}>
        <h1 className="h-page">Let&apos;s get your org shipping.</h1>
        <p className={classNames("lede", styles.lede)}>
          Embedded engagements, AI product leadership, or building with
          Randal: tell me what you&apos;re trying to ship and we&apos;ll get
          into exactly what it needs.
        </p>
        <div className={styles.actions}>
          <a href={`mailto:${EMAIL}`} className="btn btn--primary">
            Email me →
          </a>
        </div>
        <dl className={styles.details}>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </dd>
          </div>
          <div>
            <dt>Base</dt>
            <dd>{LOCATION} · works everywhere</dd>
          </div>
        </dl>
      </main>
    </>
  );
}
