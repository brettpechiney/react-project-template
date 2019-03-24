//  @flow
import * as React from 'react';
import indicator from '@/assets/images/loading-indicator.gif';
import styled from 'styled-components';

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
  <Wrapper>
    <img
      src={indicator}
      alt="loading..."
      width={props.width}
      height={props.height}
    />
  </Wrapper>
);
LoadingIndicator.defaultProps = defaultProps;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LoadingIndicator;
