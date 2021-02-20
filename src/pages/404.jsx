import React from 'react';
import {Link} from 'react-router-dom';

import withLayout from "../hocs/with-layout";

const Error404 = () => {
  return (
    <div className="locations container">
      <h1> 404. <br/>
        <small>Page not found</small>
      </h1>
      <Link to="/">Go to main page</Link>
    </div>
  );
};

export default withLayout(Error404);
