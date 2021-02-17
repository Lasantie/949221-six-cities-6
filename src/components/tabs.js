import React from 'react';
import {Link} from 'react-router-dom';
import tabsFromDB from '../db/tabs.json';

const Tabs = () => {
  const [tabs, setTabs] = React.useState(tabsFromDB.tabs);

  const onTabSelect = (event, tabId) => {
    event.preventDefault(); // Пока страниц нет, что бы не перекидывало на 404
    tabs.forEach((tab) => {
      tab.selected = tab.id === tabId;
    });
    setTabs([...tabs]);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {tabs.map(({id, url, title, selected}) =>
            <li key={id} className="locations__item">
              <Link to={url} className={`locations__item-link tabs__item ${selected && `tabs__item--active`}`}
                onClick={(event) => onTabSelect(event, id)}>
                <span>{title}</span>
              </Link>
            </li>)}
        </ul>
      </section>
    </div>
  );
};

export default Tabs;
