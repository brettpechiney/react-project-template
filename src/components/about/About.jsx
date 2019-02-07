import React from 'react';
import { hot } from 'react-hot-loader';
import './about.scss';

const About = () => (
  <section className="about--container">
    <p className="about-intro">This is the about page.</p>
  </section>
);

export default hot(module)(About);
