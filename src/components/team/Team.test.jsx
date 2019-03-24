import React from 'react';
import renderer from 'react-test-renderer';

import Team from './Team';

describe('<Team />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Team />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
