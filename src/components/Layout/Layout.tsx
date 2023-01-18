import React from "react";
import Navbar from "../Navbar";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <div className="py-2 container mx-auto">{children}</div>
      </div>
    </>
  );
};

Layout.defaultProps = {};

export default Layout;
