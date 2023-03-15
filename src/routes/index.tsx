import React from "react";
import {
  createHashRouter,
  createBrowserRouter,
  Routes,
} from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Connect from "./Connect";
import ErrorBoundary from "../components/ErrorBoundary";
import Events from "./Events";
import EventsList from "./Events/EventList";
import Teams from "./teams";

const createRouter =
  process.env.NODE_ENV === "development"
    ? createHashRouter
    : createBrowserRouter;

// export const router = createHashRouter([
export const router = createRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/connect",
        element: <Connect />,
      },
      {
        path: "/events",
        element: <Events />,
        children: [
          {
            path: "/events",
            element: <EventsList />,
          },
        ],
      },
      {
        path: "/teams",
        element: <Teams />,
      },
      // {
      //   path: "/supply",
      //   element: <Supply />,
      // },
      // {
      //   path: "/inspect",
      //   element: <Inspect />,
      // },
    ],
  },
]);



export default router;
