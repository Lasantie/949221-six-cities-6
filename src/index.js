import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const cards = [
  {
    id: `1`,
    href: `#`,
    img: `img/apartment-01.jpg`,
    priceValue: `120`,
    priceText: `night`,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    premium: true,
    rating: 4,
    bookmark: false,
  },
  {
    id: `2`,
    href: `#`,
    img: `img/room.jpg`,
    priceValue: `80`,
    priceText: `night`,
    name: `Wood and stone place`,
    type: `Private room`,
    premium: false,
    rating: 4,
    bookmark: true,
  },
  {
    id: `3`,
    href: `#`,
    img: `img/apartment-02.jpg`,
    priceValue: `132`,
    priceText: `night`,
    name: `Canal View Prinsengracht`,
    type: `Apartment`,
    premium: false,
    rating: 4,
    bookmark: false,
  },
  {
    id: `4`,
    href: `#`,
    img: `img/apartment-03.jpg`,
    priceValue: `180`,
    priceText: `night`,
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    premium: true,
    rating: 5,
    bookmark: false,
  },
  {
    id: `5`,
    href: `#`,
    img: `img/room.jpg`,
    priceValue: `80`,
    priceText: `night`,
    name: `Wood and stone place`,
    type: `Private room`,
    premium: false,
    rating: 4,
    bookmark: true,
  },
];

ReactDOM.render(
    <App cards={cards} />
    , document.getElementById(`root`)
);

