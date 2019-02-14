import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/icons/react-logo.svg';
import './header.scss';

const Header = () => (
  <header styleName="app-header">
    <nav styleName="primary-navigation">
      <NavLink exact={true} to="/">
        Home
      </NavLink>
      <NavLink to="/team">Team</NavLink>
      <img src={logo} styleName="app-logo" alt="logo" />
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  </header>
);

export default Header;
