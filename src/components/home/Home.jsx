import React from 'react';
import styled from 'styled-components';

const Home = () => (
  <Wrapper>
    <p className="intro">
      This application was made with{' '}
      <span role="img" aria-label="love">
        ❤️
      </span>
      by Brett
    </p>
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

export default Home;
