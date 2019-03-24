/**
 * @fileoverview Defines the applications top-level routes. They point to feature
 * areas, which could themselves declare routes in the dynamic style of react-router
 * version 4.
 */
import Home from '@/components/home';
import { lazy } from 'react';

/**
 * Please be sure to include the 'webpackChunkName' comment in all dynamic imports below.
 * This is to ensure proper file naming of component chunks when building for prod.
 */
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/team',
    component: lazy(() =>
      import(/* webpackChunkName: "team" */ '@/components/team')
    ),
  },
  {
    path: '/about',
    component: lazy(() =>
      import(/* webpackChunkName: "about" */ '@/components/about')
    ),
  },
  {
    path: '/contact',
    component: lazy(() =>
      import(/* webpackChunkName: "contact" */ '@/components/contact')
    ),
  },
];

export default routes;
