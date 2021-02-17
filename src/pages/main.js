import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {withLayout} from "../hocs/with-layout";
import Card from "../components/card";
import Tabs from "../components/tabs";
import CardPropTypes from "../prop-types/card-prop-types";

const Main = ({cards}) => {
  return (
    <Fragment>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  &nbsp;Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref={`#icon-arrow-select`}/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li key={`21`} className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li key={`22`} className="places__option" tabIndex="0">Price: low to high</li>
                  <li key={`23`} className="places__option" tabIndex="0">Price: high to low</li>
                  <li key={`24`} className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {
                  cards.map((card) => <Card key={card.id} card={card}/>)
                }
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"/>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

Main.propTypes = {
  cards: PropTypes.arrayOf(CardPropTypes),
};

export default withLayout(Main);


