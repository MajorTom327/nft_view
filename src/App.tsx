import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

type Props = {};

export const App: React.FC<Props> = ({}) => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

App.defaultProps = {};

export default App;
