import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Connect from "./Connect";

export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
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
