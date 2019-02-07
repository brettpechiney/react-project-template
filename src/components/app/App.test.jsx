import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const setup = propOverrides => {
  const props = Object.assign({}, propOverrides);

  const wrapper = shallow(<App {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<App />', () => {
  const { wrapper } = setup();

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
