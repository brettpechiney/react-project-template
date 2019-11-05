//  @flow
/**
 * @fileoverview The application's loading indicator. Comes in two styles:
 * a large Vertafore logo and a smaller pulsing indicator. An optional
 * message can be passed to present the user with additional feedback.
 */

import * as React from 'react';
import styled from 'styled-components';
import indicator from '@/assets/images/loading-indicator.gif';

type Props = {
  pulse?: boolean,
  message?: string,
  width: string,
  height: string,
};

const defaultProps = {
  width: '320px',
  height: '180px',
};

const LoadingIndicator = (props: Props) => (
  <StyleWrapper>
    {props.pulse ? (
      <PulseWrapper data-test="pulse-indicator">
        <div className="left-pulse" />
        <div className="middle-pulse" />
        <div className="right-pulse" />
      </PulseWrapper>
    ) : (
      <img
        data-test="vertafore-logo-indicator"
        src={indicator}
        alt="loading..."
        width={props.width}
        height={props.height}
      />
    )}
    {props.message ? (
      <div data-test="loading-message" className="message">
        {props.message}
      </div>
    ) : null}
  </StyleWrapper>
);
LoadingIndicator.defaultProps = defaultProps;

const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .message {
    margin-top: 10px;
  }
`;

const PulseWrapper = styled.div`
  position: relative;
  @keyframes pulse {
    50% {
      background: #ec611a;
    }
  }

  .left-pulse,
  .middle-pulse,
  .right-pulse {
    background: rgba(236, 97, 26, 0.2);
    width: 6px;
    animation: pulse 750ms infinite;
  }

  .middle-pulse {
    height: 24px;
    animation-delay: 250ms;
  }

  .left-pulse,
  .right-pulse {
    position: absolute;
    display: block;
    top: 50%;
    height: 16px;
    transform: translateY(-50%);
  }

  .left-pulse {
    left: -12px;
  }

  .right-pulse {
    left: 12px;
    animation-delay: 500ms;
  }
`;

export default LoadingIndicator;
