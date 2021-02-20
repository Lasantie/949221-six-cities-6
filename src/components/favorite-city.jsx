import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import OfferPropTypes from "../prop-types/offer-prop-types";

import FavoriteOffer from "./favorite-offer";

const FavoriteCity = ({city, favoriteOffers}) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to={`/${city}`} className="locations__item-link">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteOffers.map((offer) => city === offer.city.name &&
          <FavoriteOffer
            key={offer.id}
            offer={offer}
          />)}
      </div>
    </li>
  );
};

FavoriteCity.propTypes = {
  city: PropTypes.string,
  favoriteOffers: PropTypes.arrayOf(OfferPropTypes),
};

export default FavoriteCity;
