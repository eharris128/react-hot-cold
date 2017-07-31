import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

import store from './store';

import {newGame} from './actions';

store.dispatch(newGame());
console.log(store.getState());

// store.dispatch(newGame());
// console.log(store.getState());