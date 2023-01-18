import React from "react";
import { Link } from "react-router-dom";
import NavbarBrand from "./NavbarBrand";
import NavbarItem from "./NavbarItem";

type Props = {};

export const Navbar: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="bg-primary flex w-full shadow-lg">
        <div className="container mx-auto flex justify-between gap-2 items-center font-semibold">
          <NavbarBrand to="/">NFT Viewer</NavbarBrand>
          <div className="flex gap-2 text-center">
            <NavbarItem to="/">About</NavbarItem>
            <NavbarItem to="/connect">Connect Wallet</NavbarItem>
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.defaultProps = {};

export default Navbar;
