import React from "react";
import { createHashRouter, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Connect from "./Connect";
import ErrorBoundary from "../components/ErrorBoundary";

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
