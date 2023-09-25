import Image from "next/image";
import Page from "../components/page";
import ABOUT from "../lib/data/pages/about";

import styles from "./about.module.scss";

export default function About() {
  function renderTeam() {
    return (
      <section className={styles.about}>
        <div className={styles["about-bio"]}>
          <h2>About Drew</h2>
          <div className={styles["about-bio-image"]}>
            <div className={styles["about-bio-image-container"]}>
              <Image
                alt="Drew Templeton"
                fill
                src="/drew.jpeg"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <p>
                I&apos;ve been building software and crafting digital
                experiences for clients since 2010. I have worked for companies
                that are just getting started, all the way to some of the
                biggest tech companies in the Fortune 500.
              </p>
              <p>
                For fun I like to get outside and enjoy time with my wife and
                three year old daughter. I still get out every once in a while
                to play paintball, a sport that I completed professionally in
                for nearly 20 years.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <Page
      {...ABOUT({
        type: "custom",
        data: renderTeam(),
      })}
    />
  );
}
