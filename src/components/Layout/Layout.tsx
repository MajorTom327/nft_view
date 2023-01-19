import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <div className="py-2 container mx-auto">
          <div className="grid grid-cols-4 gap-2">
            <Sidebar />
            <div className="col-span-3">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

Layout.defaultProps = {};

export default Layout;
