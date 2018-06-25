import React, { Component } from 'react';
import styles from './styles.less';

export default class Dataset extends Component {
  render() {
    const { dataset } = this.props;
    return <div className={styles.container}>Name: {dataset.get('id')}</div>;
  }
}
