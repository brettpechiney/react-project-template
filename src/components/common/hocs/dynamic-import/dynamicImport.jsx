import React from 'react';
import { LoadingIndicator } from 'common/widgets';

const dynamicImport = importComponent => {
  class DynamicImport extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({ component });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : <LoadingIndicator />;
    }
  }

  DynamicImport.displayName = 'dynamicImport(importComponent)';
  return DynamicImport;
};

export default dynamicImport;
