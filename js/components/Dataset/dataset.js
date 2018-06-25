import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteDataset } from 'Actions';
import { Icon } from 'Ui';
import moment from 'moment';
import styles from './styles.less';

export class Dataset extends Component {
  static displayName = 'Dataset';

  state = { deleteButtonVisible: false };

  render() {
    const { dataset, onClick } = this.props;
    const { deleteButtonVisible } = this.state;

    return (
      <div
        className={styles.container}
        onMouseOver={this._handleMouseEnter}
        onFocus={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
        onBlur={this._handleMouseLeave}
        onClick={onClick}
      >
        <div className={styles.header}>
          {deleteButtonVisible && (
            <Icon
              className={styles.clearIcon}
              onClick={this._handleDelete}
              name="clear"
            />
          )}
        </div>
        <div className={styles.group}>
          <span className={styles.name}>{dataset.get('name')}</span>
          <span className={styles.modified}>
            {moment(dataset.get('modified')).format('YYYY/MM/DD HH.mm')}
          </span>
        </div>
      </div>
    );
  }

  _handleMouseEnter = () => {
    this.setState({ deleteButtonVisible: true });
  };

  _handleMouseLeave = () => {
    this.setState({ deleteButtonVisible: false });
  };

  _handleDelete = () => {
    const { dataset, deleteDataset } = this.props;
    deleteDataset(dataset.get('name'));
  };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  deleteDataset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dataset);
