import classNames from "classnames";
import { isNil } from "ramda";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  to?: string;
  className?: string;
  brand?: boolean;
};

export const NavbarItem: React.FC<Props> = ({
  children,
  to,
  className,
  brand,
}) => {
  const classes = classNames(
    "text-white font-semibold py-2 bg-primary",
    "hover:bg-primary-darken/50 px-4 rounded",
    {
      "text-2xl": brand,
      "text-lg": !brand,
      "cursor-default": isNil(to),
    },
    className
  );

  if (isNil(to)) {
    return <div className={classes}>{children}</div>;
  }

  if (to.startsWith("http")) {
    return (
      <a href={to} target="_blank" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
};

NavbarItem.defaultProps = {};

export default NavbarItem;
