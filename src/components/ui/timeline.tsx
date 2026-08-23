import Link from "next/link";
import { Role } from "../../lib/content/career";
import styles from "./timeline.module.scss";

interface TimelineProps {
  roles: Role[];
  /**
   * When set, rows are grouped under two era headers — the AI-native
   * chapter (→ case studies) and the shipping years (→ projects below).
   * Used on /past-work; /about renders the flat list.
   */
  groupByEra?: boolean;
}

function Row({ r }: { r: Role }) {
  return (
    <li className={styles.role}>
      <div className={styles.when}>{r.when}</div>
      <div className={styles.title}>{r.title}</div>
      <div className={styles.desc}>
        <a href={r.url} rel="noopener">
          {r.org}
        </a>{" "}
        — {r.desc}
      </div>
      {r.internal ? (
        <Link href={r.internal.href} className={styles.goto}>
          {r.internal.label}
        </Link>
      ) : null}
    </li>
  );
}

export default function Timeline({ roles, groupByEra }: TimelineProps) {
  if (!groupByEra) {
    return (
      <ol className={styles.roles}>
        {roles.map((r) => (
          <Row key={`${r.when}-${r.org}`} r={r} />
        ))}
      </ol>
    );
  }

  const ai = roles.filter((r) => r.era === "ai");
  const earlier = roles.filter((r) => r.era === "earlier");

  return (
    <div className={styles.grouped}>
      <div className={styles.eraHeader}>
        <span className={styles.eraLabel}>Now · the AI-native era</span>
        <Link href="/#cases" className={styles.eraLink}>
          full write-ups in the case studies →
        </Link>
      </div>
      <ol className={styles.roles}>
        {ai.map((r) => (
          <Row key={`${r.when}-${r.org}`} r={r} />
        ))}
      </ol>
      <div className={styles.eraHeader}>
        <span className={styles.eraLabel}>2010 – 2022 · the shipping years</span>
        <span className={styles.eraNote}>selected projects below ↓</span>
      </div>
      <ol className={styles.roles}>
        {earlier.map((r) => (
          <Row key={`${r.when}-${r.org}`} r={r} />
        ))}
      </ol>
    </div>
  );
}
