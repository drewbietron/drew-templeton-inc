import classNames from "classnames";
import Link, { LinkProps } from "next/link";

import styles from "./button.module.scss";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  disabled?: boolean;
  variant?: "outline" | "secondary" | "secondary-alternate";
  size?: "base" | "large" | "small" | "tiny";
  children?: JSX.Element | string;
  text?: string;
  loading?: boolean;
  icon?: JSX.Element;
  link?: LinkProps;
}

export default function Button(props: ButtonProps) {
  if (props.link) {
    return (
      <Link
        {...props.link}
        style={props.style}
        className={classNames(
          styles.button,
          styles[`button--${props.size || "base"}`],
          {
            [styles["button--outline"]]: props.variant === "outline",
            [styles["button--secondary"]]: props.variant === "secondary",
            [styles["button--secondary-alternate"]]:
              props.variant === "secondary-alternate",
            [styles["button--disabled"]]: props.disabled,
          }
        )}
      >
        {props.icon}
        {props.children}
        {props.text}
      </Link>
    );
  }

  return (
    <button
      onClick={props.onClick}
      style={props.style}
      disabled={props.loading || props.disabled}
      className={classNames(
        styles.button,
        styles[`button--${props.size || "base"}`],
        {
          [styles["button--outline"]]: props.variant === "outline",
          [styles["button--secondary"]]: props.variant === "secondary",
          [styles["button--secondary-alternate"]]:
            props.variant === "secondary-alternate",
          [styles["button--disabled"]]: props.disabled,
        }
      )}
    >
      {props.icon}
      {props.children}
      {props.text}
    </button>
  );
}

Button.defaultProps = {
  size: "base",
};
