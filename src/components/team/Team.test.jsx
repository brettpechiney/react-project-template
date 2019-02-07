import React from 'react';
import { shallow } from 'enzyme';
import Team from './Team';

const setup = propOverrides => {
  const props = Object.assign({}, propOverrides);

  const wrapper = shallow(<Team {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Team />', () => {
  const { wrapper } = setup();

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
