import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../components/Layout/Layout";

type Props = {};

export const Root: React.FC<Props> = ({}) => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

Root.defaultProps = {};

export default Root;
