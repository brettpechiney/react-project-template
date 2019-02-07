import React from 'react';
import { hot } from 'react-hot-loader';
import './team.scss';

const Team = () => (
  <section className="team--container">
    <p className="team-intro">This is the team page.</p>
  </section>
);

export default hot(module)(Team);
