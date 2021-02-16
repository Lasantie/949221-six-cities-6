import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import tabsFromDB from '../db/tabs.json';

export default class Tabs extends Component {

  constructor(props) {
    super(props);
    this.state = {tabs: tabsFromDB.tabs};
  }

  onTabSelect(event, tabId) {
    event.preventDefault(); // Пока страниц нет, что бы не перекидывало на 404
    const {tabs} = this.state;
    tabs.forEach((tab) => {
      tab.selected = tab.id === tabId;
    });
    this.setState(tabs);
  }

  render() {
    const {tabs} = this.state;

    return (
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              tabs.map(({id, url, title, selected}) =>
                <li key={id} className="locations__item">
                  <Link to={url} className={`locations__item-link tabs__item ${selected && `tabs__item--active`}`} onClick={(event)=>this.onTabSelect(event, id)}>
                    <span>{title}</span>
                  </Link>
                </li>
              )
            }
          </ul>
        </section>
      </div>
    );
  }
}

