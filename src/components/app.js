import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "../pages/main";
import Login from "../pages/login";
import Error404 from "../pages/404";
import Favorites from "../pages/favorites";
import Offer from "../pages/offer";
import CardPropTypes from "../prop-types/card-prop-types";

const App = ({cards}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main cards={cards}/>
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/favorites" exact>
          <Favorites cards={cards}/>
        </Route>
        <Route path="/offer/:id?" exact component={Offer}/>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cards: PropTypes.arrayOf(CardPropTypes),
};

export default App;


