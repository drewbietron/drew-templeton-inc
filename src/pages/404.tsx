import Link from "next/link";
import Seo from "../components/seo";
import Terminal, { Cursor, Muted, Prompt } from "../components/ui/terminal";
import styles from "./404.module.scss";

export default function NotFound() {
  return (
    <>
      <Seo title="404 — command not found" path="/404" noindex />
      <main id="main" className="container">
        <div className={styles.wrap}>
          <Terminal label="404: page not found">
            <Prompt>open {"<that page>"}</Prompt>
            <Muted>zsh: no such file or directory</Muted>
            <Prompt>ls</Prompt>
            <div>
              <Link href="/">home</Link>{"  "}
              <Link href="/#cases">case-studies</Link>{"  "}
              <Link href="/past-work">past-work</Link>{"  "}
              <Link href="/about">about</Link>{"  "}
              <Link href="/contact">contact</Link>
            </div>
            <Cursor />
          </Terminal>
          <h1 className={styles.title}>404 — that page doesn&apos;t exist.</h1>
          <p className="lede">
            It may have moved in the redesign. Try one of the directories above, or{" "}
            <Link href="/">head home</Link>.
          </p>
        </div>
      </main>
    </>
  );
}
