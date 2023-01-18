import React from "react";
import { RouterProvider } from "react-router-dom";
import Web3Context from "./context/Web3Context";
import router from "./routes";

type Props = {};

export const App: React.FC<Props> = ({}) => {
  return (
    <>
      <Web3Context>
        <RouterProvider router={router} />
      </Web3Context>
    </>
  );
};

App.defaultProps = {};

export default App;
