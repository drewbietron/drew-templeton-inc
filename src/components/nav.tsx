import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import styles from "./nav.module.scss";

const LINKS = [
  { href: "/#cases", label: "Case Studies", match: /^\/case-studies/ },
  { href: "/past-work", label: "Past Work", match: /^\/past-work/ },
  { href: "/about", label: "About", match: /^\/about/ },
];

export default function Nav() {
  const { pathname } = useRouter();
  const onHome = pathname === "/";

  return (
    <nav className={classNames("container", styles.nav)} aria-label="Primary">
      <Link href="/" className={styles.brand} aria-label="Drew Templeton — home">
        drew<span className={styles.at}>@</span>templeton
        <span className={styles.prompt}>:~$</span>
      </Link>
      <ul className={styles.links}>
        {LINKS.map((l) => {
          const active =
            l.match.test(pathname) || (l.href === "/#cases" && onHome);
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                className={classNames(styles.link, active && styles.active)}
                aria-current={active ? "page" : undefined}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
        <li>
          <Link href="/contact" className="btn btn--dark">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
