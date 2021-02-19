import React from 'react';
import {NavLink} from 'react-router-dom';
import {tabs} from '../mocks/tabs.json';
import PropTypes from 'prop-types';

const Tabs = ({currentTabId, handleCurrentTabId}) => {

  const onTabSelect = (event, newTabId) => {
    event.preventDefault();
    handleCurrentTabId(newTabId);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {tabs.map(({id, url, title}) =>
            <li key={id} className="locations__item">
              <NavLink to={url} activeClassName="tabs__item--active" className={`locations__item-link tabs__item`}
                onClick={(event) => onTabSelect(event, id)}
                isActive={() => currentTabId === id}>
                <span>{title}</span>
              </NavLink>
            </li>)}
        </ul>
      </section>
    </div>
  );
};

Tabs.propTypes = {
  currentTabId: PropTypes.number,
  handleCurrentTabId: PropTypes.func,
};

export default Tabs;
