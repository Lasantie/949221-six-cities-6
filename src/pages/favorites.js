import React, {useMemo} from 'react';
import withLayout from "../hocs/with-layout";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import FavoriteCity from '../components/favorite-city';
import OfferPropTypes from "../prop-types/offer-prop-types";

const Favorites = ({offers}) => {

  const favorite = useMemo(() => {
    const resultCities = new Set();
    const resultOffers = [];
    offers.forEach((offer) => {
      if (offer.isFavorite) {
        resultCities.add(offer.city.name);
        resultOffers.push(offer);
      }
    });
    return {
      cities: Array.from(resultCities),
      offers: resultOffers,
    };
  }, offers);

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                favorite.cities.map((city) => <FavoriteCity key={city} city={city} favoriteOffers={favorite.offers}/>)
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to="/" className="footer__logo-link">
          <img className="footer__logo" src={`img/logo.svg`} alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes),
};

export default withLayout(Favorites);
