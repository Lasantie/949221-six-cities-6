import React from 'react';
import Premium from './premium';
import {Link} from 'react-router-dom';
import CardPropTypes from "../prop-types/card-prop-types";

const Card = ({
  card: {
    id,
    previewImage,
    price,
    title,
    type,
    isPremium,
    rating,
    isFavorite
  }
}) => {

  const favorite = `place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`;
  const offerUrl = `/offer/${id}`;

  return (
    <article className="cities__place-card place-card" key={id}>
      {isPremium && <Premium/>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerUrl}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
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
          <Link to={offerUrl}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>);
};

Card.propTypes = {card: CardPropTypes};

export default Card;
