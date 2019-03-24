import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { LoadingIndicator } from 'common/widgets';
import routes from '@/routes';
import Header from './Header';
import Footer from './Footer';

const App = () => (
  <>
    <Header />
    <Suspense fallback={<LoadingIndicator />}>
      <Switch>
        {routes.map(route => (
          <Route exact={true} key={route.path} {...route} />
        ))}
      </Switch>
    </Suspense>
    <Footer />
  </>
);

export default hot(App);
