import { FormEvent, useState } from "react";
import classNames from "classnames";

import Seo from "../components/seo";
import { EMAIL, LOCATION } from "../lib/site";
import { breadcrumbSchema, PERSON_ID } from "../lib/structured-data";
import styles from "./contact.module.scss";

const DESCRIPTION =
  "Embedded engagements, AI product leadership, or building with Randal — tell me what you're trying to ship and I'll tell you honestly whether I'm the right person for it. Drew Templeton, St. Charles, IL.";

interface Composed {
  href: string;
  subject: string;
  body: string;
}

export default function Contact() {
  const [composed, setComposed] = useState<Composed | null>(null);
  const [copied, setCopied] = useState(false);

  function sendMail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const name = (f.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (f.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (
      f.elements.namedItem("message") as HTMLTextAreaElement
    ).value.trim();

    const subject = `Inquiry from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setComposed({ href, subject, body });
    setCopied(false);
    // Hand off to the visitor's mail client. The fallback panel below covers
    // browsers with no mail handler configured.
    window.location.href = href;
  }

  async function copyMessage() {
    if (!composed) return;
    try {
      await navigator.clipboard.writeText(
        `To: ${EMAIL}\nSubject: ${composed.subject}\n\n${composed.body}`
      );
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

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
        <div className={styles.copy}>
          <h1 className="h-page">Let&apos;s get your org shipping.</h1>
          <p className={classNames("lede", styles.lede)}>
            Embedded engagements, AI product leadership, or building with
            Randal — tell me what you&apos;re trying to ship and I&apos;ll tell
            you honestly whether I&apos;m the right person for it.
          </p>
          <dl className={styles.details}>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </dd>
            </div>
            <div>
              <dt>Base</dt>
              <dd>{LOCATION} — works everywhere</dd>
            </div>
          </dl>
        </div>

        <div className={styles.formCol}>
          <form className={styles.form} onSubmit={sendMail} noValidate={false}>
            <label className={styles.field}>
              Name
              <input name="name" required autoComplete="name" maxLength={120} />
            </label>
            <label className={styles.field}>
              Email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                maxLength={200}
              />
            </label>
            <label className={styles.field}>
              What are you trying to ship?
              <textarea name="message" rows={6} required maxLength={4000} />
            </label>
            <button type="submit" className="btn btn--primary">
              Send message →
            </button>
            <p className={styles.hint}>
              Opens your email app with the message filled in — or just write
              to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </p>
          </form>

          {composed ? (
            <div className={styles.fallback} role="status" aria-live="polite">
              <div className={styles.fallbackTitle}>
                Your email app should have opened.
              </div>
              <p>
                If nothing happened, send it yourself — here&apos;s your message,
                ready to paste to{" "}
                <a href={composed.href}>{EMAIL}</a>:
              </p>
              <pre className={styles.composed}>{composed.body}</pre>
              <div className={styles.fallbackActions}>
                <button
                  type="button"
                  className="btn btn--secondary"
                  onClick={copyMessage}
                >
                  {copied ? "Copied ✓" : "Copy message"}
                </button>
                <a href={composed.href} className="btn btn--secondary">
                  Try email app again
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </main>
    </>
  );
}
