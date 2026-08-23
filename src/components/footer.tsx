import classNames from "classnames";
import { EMAIL, LEGAL_NAME, LINKS, LOCATION } from "../lib/site";
import styles from "./footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={classNames("container", styles.footer)}>
      <div className={styles.copyright}>
        © {year} {LEGAL_NAME} · {LOCATION}
      </div>
      <ul className={styles.links}>
        <li>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </li>
        <li>
          <a href={LINKS.randal} rel="me noopener">
            randal.bot
          </a>
        </li>
        <li>
          <a href={LINKS.hassion} rel="me noopener">
            hassion.studio
          </a>
        </li>
      </ul>
    </footer>
  );
}
