import React, { Component } from 'react';
import Input from 'Ui/input';
import { connect } from 'react-redux';
import { convertCSVtoJSON } from 'Actions';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';

export class Home extends Component {
  static displayName = 'Home';

  static propTypes = {
    data: ImmutablePropTypes.list,
    convertCSVtoJSON: PropTypes.func.isRequired
  };

  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <div>
        <h2>Home</h2>
        <Input onChange={this._handleInputChange} type={'file'} />
      </div>
    );
  }

  _handleInputChange = e => {
    const { convertCSVtoJSON } = this.props;
    if (e.target.files[0]) {
      convertCSVtoJSON(e.target.files[0]);
    }
  };
}

const mapStateToProps = state => ({
  error: state.Data.get('error'),
  data: state.Data.get('data'),
  converted: state.Data.get('converted'),
  converting: state.Data.get('converting')
});

const mapDispatchToProps = {
  convertCSVtoJSON
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
