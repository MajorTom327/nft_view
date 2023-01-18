import React from "react";
import NavbarItem from "./NavbarItem";

type Props = {
  children: React.ReactNode;
  to: string;
};

export const NavbarBrand: React.FC<Props> = ({ to, children }) => {
  return (
    <>
      <NavbarItem to={to} brand>
        {children}
      </NavbarItem>
    </>
  );
};

NavbarBrand.defaultProps = {};

export default NavbarBrand;
