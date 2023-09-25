import classNames from "classnames";
import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";

import styles from "./card.module.scss";

interface BaseCardProps {
  type: "photo" | "text";
  title?: string;
  copy?: string;
  link?: LinkProps;
  tags?: string[];
}

interface PhotoCardProps extends BaseCardProps {
  type: "photo";
  image: ImageProps;
}

interface TextCardProps extends BaseCardProps {
  type: "text";
  image?: never; // This ensures that the 'image' property is not present when type is "text"
}

export type CardProps = PhotoCardProps | TextCardProps;

export default function Card(props: CardProps) {
  function renderImage() {
    return props.image ? (
      <Image
        className={styles["card-image"]}
        fill
        style={{ objectFit: "cover" }}
        {...props.image}
        alt={props.image.alt}
      />
    ) : null;
  }

  function renderContent() {
    return (
      <div className={styles["card-content"]}>
        {props.title ? (
          <h2
            className={styles["card-content-title"]}
            dangerouslySetInnerHTML={{ __html: props.title }}
          />
        ) : null}
        {props.copy ? (
          <p
            className={styles["card-content-copy"]}
            dangerouslySetInnerHTML={{ __html: props.copy }}
          />
        ) : null}
        {props.tags ? (
          <div className={styles["card-content-tags"]}>
            {props.tags.map((tag, idx) => (
              <p key={idx}>{tag}</p>
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  function classes() {
    return classNames([styles.card], {
      [`${styles["card--link"]}`]: !!props.link,
      [`${styles["card--photo"]}`]: props.type === "photo",
      [`${styles["card--text"]}`]: props.type === "text",
    });
  }

  if (props.link) {
    return (
      <Link {...props.link} className={classes()}>
        {renderImage()}
        {renderContent()}
      </Link>
    );
  }

  return (
    <figure className={classes()}>
      {renderImage()}
      {renderContent()}
    </figure>
  );
}
