const reviews = [
  {
    "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "date": `2019-03-08T14:13:56.569Z`,
    "id": 1,
    "rating": 1,
    "user": {
      "avatarUrl": `img/avatar-max.jpg`,
      "id": 4,
      "isPro": false,
      "name": `Max`
    }
  },
  {
    "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "date": `2019-04-08T14:13:56.569Z`,
    "id": 2,
    "rating": 2,
    "user": {
      "avatarUrl": `img/avatar-max.jpg`,
      "id": 4,
      "isPro": false,
      "name": `Max`
    }
  },
  {
    "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "date": `2019-05-08T14:13:56.569Z`,
    "id": 3,
    "rating": 3,
    "user": {
      "avatarUrl": `img/avatar-angelina.jpg`,
      "id": 4,
      "isPro": true,
      "name": `Angel`
    }
  },
  {
    "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "date": `2019-06-08T14:13:56.569Z`,
    "id": 4,
    "rating": 4,
    "user": {
      "avatarUrl": `img/avatar-max.jpg`,
      "id": 4,
      "isPro": false,
      "name": `Max`
    }
  },
];

const getReviews = () => {

  reviews.sort(({date: dateA}, {date: dateB}) => new Date(dateB) - new Date(dateA));

  return reviews;

};

const addReview = (user, comment, rating) => {
  reviews.push(
      {
        "comment": comment,
        "date": new Date(),
        "id": Math.floor(Math.random() * 1000),
        "rating": Number(rating),
        "user": user,
      }
  );
};

export {getReviews, addReview};

