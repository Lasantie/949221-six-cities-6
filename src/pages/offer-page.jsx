import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import ReviewList from "../components/rewiew-list";

import withLayout from "../hocs/with-layout";
import getStarWidth from "../utils/get-star-width";

import offers from "../mocks/offers";

const OfferPage = ({match: {params: {id}}}) => {

  const offer = offers.find((item) => item.id === Number(id));

  if (offer === undefined) {
    return (
      <div className="locations container">
        <h1> 404. <br/>
          <small>Offer with id: {id} not found</small>
        </h1>
        <Link to="/">Go to main page</Link>
      </div>
    );
  }

  const {
    images,
    isPremium,
    title,
    isFavorite,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description
  } = offer;

  const favorite = `property__bookmark-button button ${isFavorite ? `property__bookmark-button--active` : ``}`;
  const starWidth = getStarWidth(rating);
  const bedroomTitle = `${bedrooms} bedroom${bedrooms > 1 ? `s` : ``}`;
  const adultsTitle = `Max ${maxAdults} adult${maxAdults > 1 ? `s` : ``}`;

  const {avatarUrl: hostAvatarUrl, isPro: hostIsPro, name: hostName} = host;
  const hostIsProClass = `property__avatar-wrapper ${hostIsPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.map((img) => <div key={img} className="property__image-wrapper"><img className="property__image"
              src={img} alt="Photo studio"/>
            </div>)}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {
              isPremium && <div className="property__mark"><span>Premium</span></div>
            }
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className={favorite} type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref={`#icon-bookmark`}/>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={starWidth}/>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedroomTitle}
              </li>
              <li className="property__feature property__feature--adults">
                {adultsTitle}
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {goods.map((item) => <li key={item} className="property__inside-item">{item}</li>)}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={hostIsProClass}>
                  <img className="property__avatar user__avatar" src={hostAvatarUrl} width="74" height="74"
                    alt="Host avatar"/>
                </div>
                <span className="property__user-name">
                  {hostName}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {description}
                </p>
              </div>
            </div>
            <ReviewList offer={offer}/>
          </div>
        </div>
        <section className="property__map map"/>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src={`img/room.jpg`} width="260" height="200" alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;80</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button place-card__bookmark-button--active button"
                    type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref={`#icon-bookmark`}/>
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={starWidth}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Wood and stone place</a>
                </h2>
                <p className="place-card__type">Private room</p>
              </div>
            </article>

            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src={`img/apartment-02.jpg`} width="260" height="200"
                    alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;132</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button button" type="button">
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
                  <a href="#">Canal View Prinsengracht</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>

            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src={`img/apartment-03.jpg`} width="260" height="200"
                    alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;180</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref={`#icon-bookmark`}/>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={getStarWidth(4)}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Nice, cozy, warm big bed apartment</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
};

OfferPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  })
};

export default withLayout(OfferPage);
