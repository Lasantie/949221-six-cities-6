import React from 'react';
import PropTypes from 'prop-types';
import Card from "./Card";

const App = ({cards}) => {

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src={`img/logo.svg`} alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li key={`11`} className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li key={`12`} className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li key={`13`} className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li key={`14`} className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li key={`15`} className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li key={`16`} className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  &nbsp;Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref={`#icon-arrow-select`}/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li key={`21`} className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li key={`22`} className="places__option" tabIndex="0">Price: low to high</li>
                  <li key={`23`} className="places__option" tabIndex="0">Price: high to low</li>
                  <li key={`24`} className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {
                  cards.map((card) => {
                    return (<>
                      <Card card={card}/>
                    </>);
                  })
                }
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

App.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    href: PropTypes.string,
    img: PropTypes.string,
    priceValue: PropTypes.string,
    priceText: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    premium: PropTypes.bool,
    rating: PropTypes.number,
    bookmark: PropTypes.bool
  })),
};

export default App;
