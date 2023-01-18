import React from "react";

type Props = {};

export const Navbar: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="bg-primary flex w-full">
        <div className="container mx-auto flex justify-between gap-2">
          <div className="text-center">
            <a href="#" className="text-white text-2xl font-bold py-2">
              Home
            </a>
          </div>
          <div className="flex gap-2 text-center">
            <a href="#" className="text-white text-2xl font-bold py-2">
              About
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.defaultProps = {};

export default Navbar;
