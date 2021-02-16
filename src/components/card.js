import React from 'react';
import PropTypes from 'prop-types';
import Premium from './premium';
import {Link} from 'react-router-dom';

const Card = ({
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

  const favorite = `place-card__bookmark-button button ${is_favorite ? `place-card__bookmark-button--active` : ``}`;

  return (
    <article className="cities__place-card place-card" key={id}>
      {is_premium && <Premium/>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={preview_image} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">{` / night`}</span>
          </div>
          <button className={favorite} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref={`#icon-bookmark`}/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>);
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    href: PropTypes.string,
    preview_image: PropTypes.string,
    price: PropTypes.string,
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    is_premium: PropTypes.bool.isRequired,
    rating: PropTypes.number,
    is_favorite: PropTypes.bool.isRequired,
  }),
};

export default Card;
