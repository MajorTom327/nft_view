import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  to: string;
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
    },
    className
  );
  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
};

NavbarItem.defaultProps = {};

export default NavbarItem;
