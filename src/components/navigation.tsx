import Link from "next/link";
import styles from "./navigation.module.scss";

export function Links() {
  return (
    <ul>
      <li>
        <Link href="/services">What I Do</Link>
      </li>
      <li>
        <Link href="/work">Work</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
        }}
      >
        <Link href="/">
          <h1>
            Drew
            <br />
            Templeton
          </h1>
        </Link>
      </div>

      <Links />
    </nav>
  );
}
