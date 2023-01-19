import classNames from "classnames";
import { isNotNilOrEmpty } from "ramda-adjunct";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost";
  to?: string;
  onClick?: () => void;
  className?: string;
};

export const Button: React.FC<Props> = ({
  children,
  variant,
  to,
  onClick,
  className,
}) => {
  const classes = classNames(
    "rounded px-4 py-2 font-bold transition text-center",
    {
      "bg-primary hover:bg-primary-darken text-primary-content":
        variant === "primary",
      "bg-secondary hover:bg-secondary-darken text-secondary-content":
        variant === "secondary",
      "bg-accent hover:bg-accent-darken text-accent-content":
        variant === "accent",
      "hover:bg-primary hover:text-primary-content": variant === "ghost",
    },
    className
  );

  if (isNotNilOrEmpty(to)) {
    return (
      <Link to={to as string} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
};

export default Button;
