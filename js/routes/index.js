import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from 'Components/Home';
import Chart from 'Components/chart';
import Navbar from 'Components/navbar';

import styles from './../styles/main.css';

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Navbar />
      <div className={styles.appBody}>
        <Route exact path="/" component={Home} />
        <Route path="/chart" component={Chart} />
      </div>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
