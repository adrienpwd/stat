import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Navbar from 'Components/Navbar';
import Loadable from 'react-loadable';

const Loading = () => (
  <div>
    <h2>Loading ...</h2>
  </div>
);

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */ 'Components/Home'),
  loading: Loading
});

const LoadableChart = Loadable({
  loader: () => import(/* webpackChunkName: "Chart" */ 'Components/Chart'),
  loading: Loading
});

import styles from './../styles/main.css';

export default () => (
  <Fragment>
    <Route path="/" component={Navbar} />
    <div className={styles.appBody}>
      <Route path="/home" component={LoadableHome} />
      <Route path="/chart" component={LoadableChart} />
    </div>
  </Fragment>
);
