import React, {useState} from 'react';
import PropTypes from 'prop-types';
import withLayout from "../hocs/with-layout";
import Offer from "../components/offer";
import Tabs from "../components/tabs";
import OfferPropTypes from "../prop-types/offer-prop-types";
import {tabs} from '../mocks/tabs.json';

const Main = ({offers}) => {

  const [currentOfferId, changeCurrentOfferId] = useState();
  const [currentTabId, changeCurrentTabId] = useState(1);

  const onChangeCurrentOfferId = (offerId) => {
    if (currentOfferId !== offerId) {
      changeCurrentOfferId(offerId);
    }
  };

  const onChangeCurrentTabId = (tabId) => {
    if (currentTabId !== tabId) {
      changeCurrentTabId(tabId);
    }
  };

  const {title: cityTitle} = tabs.find((item) => item.id === currentTabId);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs currentTabId={currentTabId} onChangeCurrentTabId={onChangeCurrentTabId}/>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {cityTitle}</b>
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
                offers.map((offer) => <Offer key={offer.id} offer={offer} onChangeCurrentOfferId={onChangeCurrentOfferId}/>)
              }
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"/>
          </div>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes),
};

export default withLayout(Main);


