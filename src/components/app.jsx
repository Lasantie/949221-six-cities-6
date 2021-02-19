import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "../pages/main";
import Login from "../pages/login";
import Error404 from "../pages/404";
import Favorites from "../pages/favorites";
import OfferPage from "../pages/offer-page";
import OfferPropTypes from "../prop-types/offer-prop-types";

const App = ({offers}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main offers={offers}/>
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/favorites" exact>
          <Favorites offers={offers}/>
        </Route>
        <Route path="/offer/:id?" exact component={OfferPage}/>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes),
};

export default App;


