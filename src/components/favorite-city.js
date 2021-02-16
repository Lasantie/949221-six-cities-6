import React from 'react';
import {Link} from 'react-router-dom';
import FavoriteCard from "./favorite-card";
import PropTypes from 'prop-types';

const FavoriteCity = ({city, cards}) => {

  const favoriteCards = cards.map((card) => card.isFavorite && city === card.city.name && <FavoriteCard key={card.id} card={card}/>);

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
        {favoriteCards}
      </div>
    </li>
  );
};

FavoriteCity.propTypes = {
  city: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    isFavorite: PropTypes.bool,
  })),

};

export default FavoriteCity;
