import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import routes from '@/routes';
import Header from './header';
import Footer from './footer';

const App = () => (
  <>
    <Header />
    <Switch>
      {routes.map(route => (
        <Route exact={true} key={route.path} {...route} />
      ))}
    </Switch>
    <Footer />
  </>
);

export default hot(App);
