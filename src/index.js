import React from 'react';
import ReactDOM from 'react-dom';
import offers from "./mocks/offers";
import App from './components/app';

ReactDOM.render(
    <App cards={offers}/>,
    document.getElementById(`root`)
);
