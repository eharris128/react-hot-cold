import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './reset.css';
import './index.css';

import Game from './components/game';
import store from './store';

ReactDOM.render(
<Provider store={store}>
    <Game />
</Provider>,
    document.getElementById('root')
);

// import {newGame, whatButton, minButton, submit} from './actions';

// console.log(store.getState());
// store.dispatch(newGame());
// console.log(store.getState());

// console.log('WHATBUTTON>>>>>>>>>>>>>>>', store.getState());
// store.dispatch(whatButton());
// console.log(store.getState());

// console.log('MinBUTTON>>>>>>>>>>>>>>>', store.getState());
// store.dispatch(minButton());
// console.log(store.getState());

// store.dispatch(submit(78));
// store.dispatch(newGame());
// console.log('SUBMIT', store.getState());