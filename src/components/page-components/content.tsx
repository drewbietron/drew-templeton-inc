import Image, { ImageProps } from "next/image";

import styles from "./content.module.scss";

interface Content {
  title?: string;
  content?: { image?: ImageProps; content: string }[];
}

export interface ContentProps {
  image?: string;
  title?: string;
  content?: Content[];
}

export default function Content(props: ContentProps) {
  function renderContent() {
    return props.content?.map((content, index) => {
      return (
        <div key={index} className={styles["content-container"]}>
          {content.title && (
            <h2 className={styles["content-title--sub"]}>{content.title}</h2>
          )}
          {content.content?.map((paragraph, index) => {
            return (
              <div key={index} className={styles["content-contents"]}>
                {paragraph.image && (
                  <Image
                    className={styles["content-contents-image"]}
                    objectFit="contain"
                    {...paragraph.image}
                    alt={paragraph.image.alt}
                    style={{
                      width: paragraph.image.width,
                      height: "auto",
                    }}
                  />
                )}
                <p>{paragraph.content}</p>
              </div>
            );
          })}
        </div>
      );
    });
  }
  return (
    <section className={styles.content}>
      {props.title && (
        <h1 className={styles["content-title"]}>{props.title}</h1>
      )}
      {renderContent()}
    </section>
  );
}
