import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import NftContextProvider from "../context/NftContext";

type Props = {};

export const Root: React.FC<Props> = ({}) => {
  return (
    <>
      <NftContextProvider>
        <Layout>
          <Outlet />
        </Layout>
      </NftContextProvider>
    </>
  );
};

Root.defaultProps = {};

export default Root;
