import React from "react";
import Layout from "../components/layout";

const withLayout = (Component) => {
  function lay(props) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  }
  return lay;
};

export default withLayout;
