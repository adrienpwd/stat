import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import Routes from './routes';

// Polyfill for React use of requestAnimationFrame
import 'raf/polyfill';

const clientMiddleware = [];
const middleware = [...new Set([thunk, ...clientMiddleware])];
const enhancers = [];
const initialState = {};

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    ...enhancers
  )
);

const app = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  app
);
