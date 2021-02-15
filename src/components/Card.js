import React from 'react';
import PropTypes from 'prop-types';

const Card = ({card: {id, href, img, priceValue, priceText, name, type, premium, rating, bookmark}}) => {

  const premiumDiv = premium ? (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  ) : undefined;
  const bookmarked = bookmark ? `place-card__bookmark-button place-card__bookmark-button--active button` : `place-card__bookmark-button button`;

  return (
    <article className="cities__place-card place-card" key={id}>
      {premiumDiv}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={href}>
          <img className="place-card__image" src={img} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{priceValue}</b>
            <span className="place-card__price-text">{}{` / ` + priceText}</span>
          </div>
          <button className={bookmarked} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref={`#icon-bookmark`} />
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
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>);
};

Card.propTypes = {
  card: PropTypes.exact({
    id: PropTypes.string,
    href: PropTypes.string,
    img: PropTypes.string,
    priceValue: PropTypes.string,
    priceText: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    premium: PropTypes.bool,
    rating: PropTypes.number,
    bookmark: PropTypes.bool,
  }),
};

export default Card;
