import React, { useState } from "react";
import Button from "../components/button";
import Page from "../components/page";
import CONTACT from "../lib/data/pages/contact";
import styles from "./contact.module.scss";

import { createClient } from "@supabase/supabase-js";
import classNames from "classnames";
const supabase = createClient(
  "https://oknrvbikqqnvxwerbbgz.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const formDefaults = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(formDefaults);
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const lead = await supabase.from("leads").insert(formData);

    if (lead.error) {
      setMessage(
        "Uh Oh, something went wrong.  Please try to submit your info again."
      );
    } else {
      setMessage(
        "Thank you for reaching out. I will be in contact with you soon!"
      );
    }

    setFormData(formDefaults);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contact}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      {message ? (
        <p
          className={classNames(styles["contact-message"], {
            [`${styles["contact-message--error"]}`]:
              message.startsWith("Uh Oh"),
          })}
        >
          {message}
        </p>
      ) : null}
      <Button text="Submit" />
    </form>
  );
};

export default function Contact() {
  function renderForm() {
    return <ContactForm />;
  }

  return (
    <Page
      {...CONTACT({
        type: "custom",
        data: renderForm(),
      })}
    />
  );
}
