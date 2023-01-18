import React from "react";
import { Link } from "react-router-dom";
import useBalance from "../../hooks/useBalance";
import useWallet from "../../hooks/useWallet";
import NavbarBrand from "./NavbarBrand";
import NavbarItem from "./NavbarItem";

type Props = {};

export const Navbar: React.FC<Props> = ({}) => {
  const { wallet, shortWallet } = useWallet();
  const { eth } = useBalance();

  return (
    <>
      <div className="bg-primary flex w-full shadow-lg">
        <div className="container mx-auto flex justify-between gap-2 items-center font-semibold">
          <NavbarBrand to="/">NFT Viewer</NavbarBrand>
          <NavbarItem>{eth}</NavbarItem>
          <div className="flex gap-2 text-center">
            <NavbarItem to="/">About</NavbarItem>
            {wallet ? (
              <NavbarItem to="/wallet">{shortWallet}</NavbarItem>
            ) : (
              <NavbarItem to="/connect">Connect Wallet</NavbarItem>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.defaultProps = {};

export default Navbar;
