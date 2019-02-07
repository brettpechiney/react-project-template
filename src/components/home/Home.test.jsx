import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

const setup = propOverrides => {
  const props = Object.assign({}, propOverrides);

  const wrapper = shallow(<Home {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Home />', () => {
  const { wrapper } = setup();

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
