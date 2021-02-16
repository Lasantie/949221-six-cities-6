import React, {Fragment} from 'react';
import {withLayout} from "../hocs/with-layout";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import FavoriteCity from '../components/favorite-city';

const Favorites = ({cards}) => {

  let cities = new Set();
  cards.forEach((card) => {
    if (card.is_favorite) {
      cities.add(card.city.name);
    }
  });
  cities = Array.from(cities);

  return (
    <Fragment>
      <div className="page">
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  cities.map((city) => <FavoriteCity key={city} city={city} cards={cards}/>)
                }
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Link to="/" className="footer__logo-link">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </Link>
        </footer>
      </div>
    </Fragment>
  );
};

Favorites.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    is_favorite: PropTypes.bool,
  })),
};

export default withLayout(Favorites);
