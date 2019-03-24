import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';

const Contact = () => (
  <Wrapper>
    <p className="intro">This is the contact page.</p>
  </Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  .intro {
    font-size: large;
  }
`;

export default hot(Contact);
