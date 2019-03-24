//  @flow
import * as React from 'react';
import indicator from '@/assets/images/loading-indicator.gif';
import './loading-indicator.scss';

type Props = {
  pulse: boolean,
  width: string,
  height: string,
};

const defaultProps = {
  width: '80px',
  height: '80px',
};

const LoadingIndicator = (props: Props) => (
  <div styleName="loading-indicator">
    <img
      src={indicator}
      alt="loading..."
      width={props.width}
      height={props.height}
    />
  </div>
);
LoadingIndicator.defaultProps = defaultProps;

export default LoadingIndicator;
