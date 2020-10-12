import React from 'react';
import { RouteProps } from 'react-router';

const HomeView = React.lazy(() => import('../views/HomeView/HomeView'));

export default {
  root: {
    component: HomeView,
    path: '/',
  } as RouteProps,
};
