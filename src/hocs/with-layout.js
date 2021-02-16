import React from "react";
import Layout from "../components/layout";

export const withLayout = (Component) => {
  return (props) => (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};
