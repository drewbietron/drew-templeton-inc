import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./terminal.module.scss";

interface TerminalProps {
  children: ReactNode;
  className?: string;
  /** Dense variant used in sidebars. */
  compact?: boolean;
  /** Accessible label describing what the window shows. */
  label?: string;
}

/**
 * The dark "terminal window" motif from the design. Purely decorative
 * chrome — real content goes in children so it's all crawlable text.
 */
export default function Terminal({
  children,
  className,
  compact,
  label,
}: TerminalProps) {
  return (
    <div
      className={classNames(styles.terminal, compact && styles.compact, className)}
      role="figure"
      aria-label={label}
    >
      <div className={styles.lights} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      {children}
    </div>
  );
}

export function Prompt({ children }: { children?: ReactNode }) {
  return (
    <div className={styles.line}>
      <span className={styles.dollar} aria-hidden="true">
        $
      </span>{" "}
      {children}
    </div>
  );
}

export function Cursor() {
  return (
    <div className={styles.line}>
      <span className={styles.dollar} aria-hidden="true">
        $
      </span>{" "}
      <span className={styles.cursor} aria-hidden="true" />
    </div>
  );
}

export function Muted({ children }: { children: ReactNode }) {
  return <div className={styles.muted}>{children}</div>;
}

export function Ok({ children }: { children: ReactNode }) {
  return <div className={styles.ok}>✓ {children}</div>;
}

/** Two-column key/value readout ("drew --status"). */
export function Readout({ rows }: { rows: [string, string][] }) {
  return (
    <dl className={styles.readout}>
      {rows.map(([k, v]) => (
        <div key={k} className={styles.row}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}
