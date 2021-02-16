import React from "react";
import Layout from "../components/layout";

export const withLayout = (Component) => {
  const lay = (props) => (
    <Layout>
      <Component {...props} />
    </Layout>
  );

  return lay;
};
