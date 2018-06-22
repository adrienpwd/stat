import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.less';

const Navbar = () => (
  <div className={styles.container}>
    <Link className={styles.navItem} to="/">
      Home
    </Link>
    <Link className={styles.navItem} to="/chart">
      Chart
    </Link>
  </div>
);

export default Navbar;
