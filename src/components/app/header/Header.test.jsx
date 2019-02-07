import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

const setup = propOverrides => {
  const props = Object.assign({}, propOverrides);

  const wrapper = shallow(<Header {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Header />', () => {
  const { wrapper } = setup();

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
