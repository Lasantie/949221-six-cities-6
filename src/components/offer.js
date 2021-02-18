import React from 'react';
import Premium from './premium';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import OfferPropTypes from "../prop-types/offer-prop-types";
import getStarWidth from "../common-functions/get-star-width";

const Offer = ({offer, onChangeCurrentOfferId}) => {
  const {id, previewImage, price, title, type, isPremium, rating, isFavorite} = offer;

  const favorite = `place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`;
  const offerUrl = `/offer/${id}`;
  const starWidth = getStarWidth(rating);

  const onMouseOverOffer = (newId) => {
    onChangeCurrentOfferId(newId);
  };

  return (
    <article className="cities__place-card place-card" key={id} onMouseOver={() => onMouseOverOffer(id)}>
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
            <span style={starWidth}/>
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

Offer.propTypes = {
  offer: OfferPropTypes,
  onChangeCurrentOfferId: PropTypes.func,
};

export default Offer;
