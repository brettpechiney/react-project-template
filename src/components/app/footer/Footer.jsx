import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <Wrapper>
    <p>&copy; {new Date().getFullYear()} Taekni, Inc.</p>
  </Wrapper>
);

const Wrapper = styled.footer`
  background: #222;
  margin-top: 40px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  line-height: 80px;
  font-size: 14px;
  color: #999;
  text-align: center;
`;

export default Footer;
