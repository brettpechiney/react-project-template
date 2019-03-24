import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/icons/react-logo.svg';
import styled, { keyframes } from 'styled-components';

const Header = () => (
  <Wrapper>
    <nav className="primary-navigation">
      <NavLink exact={true} to="/">
        Home
      </NavLink>
      <NavLink to="/team">Team</NavLink>
      <img src={logo} className="app-logo" alt="logo" />
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  </Wrapper>
);

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Wrapper = styled.header`
  background-color: #222;
  margin-bottom: 20px;

  .primary-navigation {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 20%;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;

    a {
      text-decoration: none;
      padding: 0px 7px;
      color: #777;
      &:hover {
        color: #b5b5b5;
      }
    }

    .active {
      color: white;
    }

    .app-logo {
      animation: ${spin} infinite 20s linear;
      height: 80px;
      max-width: 113px;
    }
  }
`;

export default Header;
