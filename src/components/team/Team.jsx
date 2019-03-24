import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';

const Team = () => (
  <Wrapper>
    <p className="intro">This is the team page.</p>
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

export default hot(Team);
