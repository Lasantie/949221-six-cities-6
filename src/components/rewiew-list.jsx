import React, {useState} from 'react';
import PropTypes from 'prop-types';

import ReviewCard from "./review-card";

import OfferPropTypes from "../prop-types/offer-prop-types";
import ReviewPropTypes from "../prop-types/review-prop-types";

import {getReviews, addReview} from "../mocks/reviews";
import authInfo from "../mocks/authInfo.json";

const ReviewList = () => {

  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState(``);
  const reviews = getReviews();

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewRating && reviewText) {
      addReview(authInfo, reviewText, reviewRating);
      setReviewText(``);
      setReviewRating(0);
      e.currentTarget.reset();
    }
  };

  const handleReviewText = (e) => {
    e.preventDefault();
    const newReviewText = e.currentTarget.value;
    if (newReviewText !== reviewText) {
      setReviewText(newReviewText);
    }
  };

  const handleReviewRating = (e) => {
    e.preventDefault();
    const newReviewRating = e.currentTarget.value;
    if (newReviewRating !== reviewRating) {
      setReviewRating(newReviewRating);
    }
  };

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewCard
          key={review.id}
          review={review}
        />)}
      </ul>
      <form className="reviews__form form" action="#" method="post"
        onSubmit={(e) => handleReviewSubmit(e)}

      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">

          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars"
            type="radio"
            onChange={handleReviewRating}

          />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref={`#icon-star`}/>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars"
            type="radio"
            onChange={handleReviewRating}

          />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref={`#icon-star`}/>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars"
            type="radio"
            onChange={handleReviewRating}

          />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref={`#icon-star`}/>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars"
            type="radio"
            onChange={handleReviewRating}

          />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref={`#icon-star`}/>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star"
            type="radio"
            onChange={handleReviewRating}

          />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label"
            title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref={`#icon-star`}/>
            </svg>
          </label>
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={handleReviewText}

        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe
            your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    </section>
  );
};

ReviewList.propTypes = {
  offer: OfferPropTypes,
  reviews: PropTypes.arrayOf(ReviewPropTypes),
};

export default ReviewList;
