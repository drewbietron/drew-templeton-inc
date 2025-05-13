import React from "react";
import Page from "../components/page";
import CONTACT from "../lib/data/pages/contact";
import styles from "./contact.module.scss";

const ContactInfo = () => {
  return (
    <div className={styles.contact}>
      <a href="mailto:drew@drewtempleton.com" className={styles["contact-email"]}>
        drew@drewtempleton.com
      </a>
    </div>
  );
};

export default function Contact() {
  return (
    <Page
      {...CONTACT({
        type: "custom",
        data: <ContactInfo />,
      })}
    />
  );
}
