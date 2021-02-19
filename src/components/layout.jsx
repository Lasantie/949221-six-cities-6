import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import authInfo from '../mocks/authInfo.json';

const Layout = ({children}) => {
  const authorized = authInfo.id !== null;
  const userEmail = authInfo.email;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link header__logo-link--active">
                <img className="header__logo" src={`img/logo.svg`} alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li key={`login`} className="header__nav-item user">
                  <Link to={authorized ? `/favorites` : `/login`} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{authorized ? userEmail : `Sign in`}</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;

