import Link from "next/link";
import styles from "./case-card.module.scss";

export interface CaseCardProps {
  href: string;
  name: string;
  when: string;
  headline: string;
  summary: string;
}

export default function CaseCard({
  href,
  name,
  when,
  headline,
  summary,
}: CaseCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.meta}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.when}>{when}</div>
      </div>
      <div className={styles.body}>
        <p className={styles.headline}>{headline}</p>
        <p className={styles.summary}>{summary}</p>
      </div>
      <span className={styles.cta} aria-hidden="true">
        read →
      </span>
    </Link>
  );
}
