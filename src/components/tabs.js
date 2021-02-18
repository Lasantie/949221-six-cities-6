import React from 'react';
import {Link} from 'react-router-dom';
import {tabs} from '../mocks/tabs.json';
import PropTypes from 'prop-types';

const Tabs = ({currentTabId, onChangeCurrentTabId}) => {

  const onTabSelect = (event, newTabId) => {
    event.preventDefault();
    onChangeCurrentTabId(newTabId);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {tabs.map(({id, url, title}) =>
            <li key={id} className="locations__item">
              <Link to={url} className={`locations__item-link tabs__item ${currentTabId === id && `tabs__item--active`}`}
                onClick={(event) => onTabSelect(event, id)}>
                <span>{title}</span>
              </Link>
            </li>)}
        </ul>
      </section>
    </div>
  );
};

Tabs.propTypes = {
  currentTabId: PropTypes.number,
  onChangeCurrentTabId: PropTypes.func,
};

export default Tabs;
