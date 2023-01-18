import classNames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export const Button: React.FC<Props> = ({ children, variant }) => {
  const classes = classNames("rounded px-4 py-2 font-bold", {
    "bg-primary hover:bg-primary-darken text-primary-content":
      variant === "primary",
    "bg-secondary hover:bg-secondary-darken text-secondary-content":
      variant === "secondary",
  });
  return <button className={classes}>{children}</button>;
};

Button.defaultProps = {
  variant: "primary",
};

export default Button;
