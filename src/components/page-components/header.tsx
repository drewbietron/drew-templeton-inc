import styles from "./header.module.scss";
import Button, { ButtonProps } from "../button";

export interface HeaderProps {
  title: string;
  copy?: string;
  button?: ButtonProps;
}

export default function Header(props: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 dangerouslySetInnerHTML={{ __html: props.title }}></h1>
      {props.copy ? <p>{props.copy}</p> : null}
      {props.button ? <Button {...props.button} /> : null}
    </header>
  );
}
