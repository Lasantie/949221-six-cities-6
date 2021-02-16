import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const FavoriteCard = ({
  card: {
    id,
    href,
    preview_image,
    price,
    title,
    type,
    is_premium,
    rating,
    is_favorite
  }
}) => {

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={preview_image} width="150" height="110"
            alt="Place image"/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref={`#icon-bookmark`}/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `100%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>Nice, cozy, warm big bed apartment</Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
};

FavoriteCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string,
    href: PropTypes.string,
    preview_image: PropTypes.string,
    price: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    is_premium: PropTypes.bool,
    rating: PropTypes.number,
    is_favorite: PropTypes.bool,
  }),
};

export default FavoriteCard;
