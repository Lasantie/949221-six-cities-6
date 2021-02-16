import React from 'react';
import ReactDOM from 'react-dom';
import DB from './db/db.json';
import App from './components/app';

ReactDOM.render(
    <App cards={DB.cards}/>,
    document.getElementById(`root`)
);
