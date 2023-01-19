import React from "react";
import Card from "../Card";
import Button from "../Button";

type Props = {};

type SidebarItemProps = {
  children: React.ReactNode;
  to?: string;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ children, to }) => {
  return (
    <Button variant="ghost" to={to}>
      {children}
    </Button>
  );
};

export const Sidebar: React.FC<Props> = ({}) => {
  return (
    <>
      <Card>
        <nav className="flex flex-col gap-1">
          <SidebarItem to="/">Home</SidebarItem>
          <SidebarItem to="/teams">Teams</SidebarItem>
          <SidebarItem to="/events">Transferts</SidebarItem>
        </nav>
      </Card>
    </>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;
