import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Avatar from './ornek/avatar';
import UserAvatar from './ornek/useravatar';
import * as serviceWorker from './serviceWorker'
import reducers from './redux1';

import { Provider } from 'react-redux';
import { createStore } from 'redux'

export const store = createStore(reducers);




if (module.hot) {
    module.hot.accept();
}


ReactDOM.render( <Provider   store={store} > <App /></Provider> , document.getElementById('root'));
ReactDOM.render( <Provider   store={store} > <UserAvatar /></Provider> , document.getElementById('useravatar'));
ReactDOM.render( <Provider   store={store} > <Avatar /></Provider> , document.getElementById('avatar'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
