import { applyMiddleware, compose, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import getRoutes from './routes';

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

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>{getRoutes()}</BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
