import React from 'react';
import { shallow } from 'enzyme';
import dynamicImport from './dynamicImport';
import { LoadingIndicator } from 'common/widgets';

describe('dynamicImport', () => {
  const dynamicImportMock = jest.fn().mockResolvedValue({
    default: function TestComponent() {
      return <div>component</div>;
    },
  });
  const InstantiatedComponent = React.createElement(dynamicImport(dynamicImportMock));
  const shallowWrapper = shallow(InstantiatedComponent);

  it('returns a function', () => {
    const actual = dynamicImport(dynamicImportMock);
    expect(actual).toBeInstanceOf(Function);
  });

  it('returns a function with a displayName', () => {
    const actual = dynamicImport(dynamicImportMock);
    expect(actual.displayName).toMatch('dynamicImport(importComponent)');
  });

  it("calls the 'importComponent' function", () => {
    expect(dynamicImportMock).toHaveBeenCalled();
  });

  it("returns the 'LoadingIndicator' component while 'importComponent' is resolving", () => {
    const renderedIndicator = shallow(<LoadingIndicator />);
    expect(shallowWrapper.html()).toMatch(renderedIndicator.html());
  });

  it("returns a component when 'importComponent' successfully resolves", async done => {
    setTimeout(() => {
      shallowWrapper.update();

      expect(shallowWrapper.html()).toMatch('<div>component</div>');

      done();
    }, 1000);
  });
});
