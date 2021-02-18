import React from 'react';
import {Link} from 'react-router-dom';
import FavoriteCard from "./favorite-card";
import PropTypes from 'prop-types';
import CardPropTypes from "../prop-types/card-prop-types";

const FavoriteCity = ({city, favoriteCards}) => {
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
        {favoriteCards.map((card) => city === card.city.name && <FavoriteCard key={card.id} card={card}/>)}
      </div>
    </li>
  );
};

FavoriteCity.propTypes = {
  city: PropTypes.string,
  favoriteCards: PropTypes.arrayOf(CardPropTypes),
};

export default FavoriteCity;
