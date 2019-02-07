import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

const setup = propOverrides => {
  const props = Object.assign({}, propOverrides);

  const wrapper = shallow(<About {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<About />', () => {
  const { wrapper } = setup();

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
