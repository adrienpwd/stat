import React, { Component } from 'react';
import Input from 'Ui/input';
import { connect } from 'react-redux';
import { processData } from 'Actions';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import Dataset from 'Components/Dataset';
import styles from './styles.less';

export class Home extends Component {
  static displayName = 'Home';

  static propTypes = {
    data: ImmutablePropTypes.list,
    processData: PropTypes.func.isRequired
  };

  state = {
    height: 0,
    width: 0
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <Input onChange={this._handleInputChange} type={'file'} />
        <div className={styles.datasetsContainer}>{this._renderDatasets()}</div>
      </div>
    );
  }

  _renderDatasets = () => {
    const { datasets } = this.props;
    return datasets.map((dataset, index) => (
      <Dataset key={index} dataset={dataset} />
    ));
  };

  _handleInputChange = e => {
    const { processData } = this.props;
    if (e.target.files[0]) {
      processData(e.target.files[0]);
    }
  };

  updateDimensions = () => {
    this.setState({
      height: window.innerHeight - 150,
      width: window.innerWidth
    });
  };
}

const mapStateToProps = state => ({
  error: state.Data.get('error'),
  datasets: state.Data.get('datasets')
  // csv: state.Data.get('csv'),
  // json: state.Data.get('json'),
  // converted: state.Data.get('converted'),
  // converting: state.Data.get('converting')
});

const mapDispatchToProps = {
  processData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
