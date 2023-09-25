import { Page } from "../lib/data/pages/types";
import Header from "./page-components/header";
import Row from "./page-components/row";
import Content from "./page-components/content";

import styles from "./page.module.scss";
import Meta from "./meta";
import Gallery from "./page-components/gallery";

export default function Page(props: Page) {
  function renderComponents() {
    return props.components?.map((component, index) => {
      switch (component.type) {
        case "header":
          return (
            <div key={index} className={styles["page-section"]}>
              <Header {...component.data} />
            </div>
          );
        case "row":
          return (
            <div key={index} className={styles["page-section"]}>
              <Row {...component.data} />
            </div>
          );
        case "content":
          return (
            <div key={index} className={styles["page-section"]}>
              <Content {...component.data} />
            </div>
          );
        case "gallery":
          return (
            <div key={index} className={styles["page-section"]}>
              <Gallery {...component.data} />
            </div>
          );
        case "custom":
          return (
            <div key={index} className={styles["page-section"]}>
              {component.data}
            </div>
          );
      }
    });
  }

  return (
    <>
      <Meta {...props.meta} />
      <main className={styles.page}>{renderComponents()}</main>
    </>
  );
}
