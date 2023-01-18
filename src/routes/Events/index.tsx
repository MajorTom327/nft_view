import React from "react";
import { Outlet } from "react-router-dom";
import { EventProvider } from "../../context/EventContext";

type Props = {};

export const Events: React.FC<Props> = ({}) => {
  return (
    <>
      <EventProvider>
        <Outlet />
      </EventProvider>
    </>
  );
};

Events.defaultProps = {};

export default Events;
