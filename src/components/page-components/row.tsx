import classNames from "classnames";
import Card, { CardProps } from "./card";

import styles from "./row.module.scss";

export interface RowProps {
  title?: string;
  description?: string;
  cards?: CardProps[];
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function Row(props: RowProps) {
  return (
    <section className={styles.row}>
      {props.title ? (
        <h1
          className={styles["row-title"]}
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
      ) : null}
      {props.description ? (
        <p
          className={styles["row-description"]}
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
      ) : null}
      {props.cards ? (
        <div className={classNames(styles["row-card-container"])}>
          {props.cards?.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </div>
      ) : null}
    </section>
  );
}
