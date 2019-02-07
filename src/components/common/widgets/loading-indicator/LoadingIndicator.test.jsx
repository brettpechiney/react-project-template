import React from 'react';
import { shallow } from 'enzyme';
import LoadingIndicator from './LoadingIndicator';

const setup = propOverrides => {
  const props = Object.assign(
    {
      width: '320px',
      height: '180px',
    },
    propOverrides
  );

  const wrapper = shallow(<LoadingIndicator {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<LoadingIndicator />', () => {
  const { wrapper } = setup();

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('returns loading gif', () => {
    const { wrapper } = setup({ pulse: false });
    const img = wrapper.find('img');
    expect(img).toHaveLength(1);
  });
});
