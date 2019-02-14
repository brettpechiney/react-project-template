import React from 'react';
import PropTypes from 'prop-types';
import indicator from '@/assets/images/loading-indicator.gif';
import './loading-indicator.scss';

const propTypes = {
  pulse: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
};

const defaultProps = {
  width: '80px',
  height: '80px',
};

const LoadingIndicator = props => (
  <div styleName="loading-indicator">
    <img
      src={indicator}
      alt="loading..."
      width={props.width}
      height={props.height}
    />
  </div>
);
LoadingIndicator.propTypes = propTypes;
LoadingIndicator.defaultProps = defaultProps;

export default LoadingIndicator;
