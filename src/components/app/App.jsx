import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import routes from '@/routes';
import Header from './header';
import Footer from './footer';

const App = () => (
  <Fragment>
    <Header />
    <div className="container">
      <Switch>
        {routes.map(route => (
          <Route exact={true} key={route.path} {...route} />
        ))}
      </Switch>
    </div>
    <Footer />
  </Fragment>
);

export default hot(module)(App);
