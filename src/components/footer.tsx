import { ADDRESS, EMAIL, LEGAL_NAME, LINKS } from "../lib/site";
import styles from "./footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="container">
      <div className={styles.footer}>
        <address className={styles.copyright}>
          © {year} {LEGAL_NAME} · {ADDRESS.street}, {ADDRESS.city},{" "}
          {ADDRESS.region} {ADDRESS.zip}
        </address>
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
            <a href={LINKS.pbvault} rel="me noopener">
              pbvault.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
