import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

const setup = propOverrides => {
  const props = Object.assign({}, propOverrides);

  const wrapper = shallow(<Contact {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Contact />', () => {
  const { wrapper } = setup();

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
