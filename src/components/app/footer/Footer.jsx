import React from 'react';
import './footer.scss';

const Footer = () => (
  <footer styleName="app-footer">
    <p>&copy; {new Date().getFullYear()} Taekni, Inc.</p>
  </footer>
);

export default Footer;
