import Link from "next/link";
import { Fragment, ReactNode } from "react";

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * Renders a plain string with markdown-style [label](url) links as React.
 * Internal paths get a next/link; external URLs open in the same tab with
 * a safe rel, matching the design's inline-link behaviour.
 */
export function rich(text: string): ReactNode {
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  LINK_RE.lastIndex = 0;
  while ((m = LINK_RE.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const [, label, href] = m;
    out.push(
      href.startsWith("/") ? (
        <Link key={m.index} href={href}>
          {label}
        </Link>
      ) : (
        <a key={m.index} href={href} rel="noopener">
          {label}
        </a>
      )
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out.map((n, i) => <Fragment key={i}>{n}</Fragment>);
}
