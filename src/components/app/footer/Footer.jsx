import React from 'react';
import './footer.scss';

const Footer = () => (
  <footer className="footer--container">
    <p>&copy; {new Date().getFullYear()} Taekni, Inc.</p>
  </footer>
);

export default Footer;
