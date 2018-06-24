import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  static displayName = 'Input';

  static defaultProps = {
    multiple: false,
    type: 'text'
  };

  static propTypes = {
    multiple: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
  };

  render() {
    const { multiple, type } = this.props;
    return (
      <input multiple={multiple} onChange={this._handleChange} type={type} />
    );
  }

  _handleChange = e => {
    const { onChange } = this.props;
    if (onChange && typeof onChange === 'function') {
      onChange(e);
    }
  };
}
