import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

const setup = propOverrides => {
  const props = Object.assign({}, propOverrides);

  const wrapper = shallow(<Footer {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Footer />', () => {
  const { wrapper } = setup();

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
