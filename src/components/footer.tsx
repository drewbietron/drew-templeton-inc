import Link from "next/link";
import LogoSvg from "./logo";
import styles from "./footer.module.scss";
import { Links } from "./navigation";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <Link href="/">
          <LogoSvg className={styles["footer-logo"]} />
        </Link>
        <h1 style={{ display: "none" }}>Drew Templeton</h1>
        <div className={styles["footer-contact-container"]}>
          <Links />
          <address>
            Drew Templeton, Inc.
            <br />
            3833 E Main St #1181
            <br />
            Saint Charles, IL 60174
            <br />
            <a href="mailto:drew@drewtempleton.com">drew@drewtempleton.com</a>
            <br />
          </address>
        </div>
      </div>
      <p>Made With ❤️ | Drew Templeton Inc. | 2023</p>
    </footer>
  );
}
