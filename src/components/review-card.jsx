import React from 'react';
import getStarWidth from "../utils/get-star-width";
import ReviewPropTypes from "../prop-types/review-prop-types";

const ReviewCard = ({review}) => {

  const {id, user, rating, date, comment} = review;
  const {avatarUrl: userAvatarUrl, name: userName} = user;
  const dateTitle = new Date(date).toLocaleDateString(`en-US`, {month: `long`, year: `numeric`});

  return (
    <li key={id} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={userAvatarUrl} width="54" height="54"
            alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={getStarWidth(rating)}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{dateTitle}</time>
      </div>
    </li>
  );
};

ReviewCard.propTypes = {
  review: ReviewPropTypes,
};
export default ReviewCard;
